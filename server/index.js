require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx|ppt|pptx|txt|zip|rar/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype) ||
                     file.mimetype.includes('image') ||
                     file.mimetype.includes('pdf') ||
                     file.mimetype.includes('document') ||
                     file.mimetype.includes('sheet') ||
                     file.mimetype.includes('presentation') ||
                     file.mimetype.includes('text') ||
                     file.mimetype.includes('zip') ||
                     file.mimetype.includes('rar');

    if (extname || mimetype) {
      return cb(null, true);
    }
    cb(new Error('Tipo de archivo no permitido'));
  }
});

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// Serve uploaded files
app.use('/uploads', express.static(uploadsDir));

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'academia-lovirtual-secret-key-2024';

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Admin Middleware
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' });
  }
  next();
};

// Initialize Database
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        role VARCHAR(20) DEFAULT 'student',
        assigned_courses TEXT[] DEFAULT '{}',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id VARCHAR(50) NOT NULL,
        module_id VARCHAR(50) NOT NULL,
        completed_lessons TEXT[] DEFAULT '{}',
        exam_score INTEGER,
        exam_passed BOOLEAN DEFAULT false,
        sprint_completed BOOLEAN DEFAULT false,
        certificate_obtained BOOLEAN DEFAULT false,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, course_id, module_id)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS sprint_submissions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id VARCHAR(50) NOT NULL,
        course_slug VARCHAR(100) NOT NULL,
        course_name VARCHAR(200) NOT NULL,
        module_id VARCHAR(50) NOT NULL,
        module_name VARCHAR(200) NOT NULL,
        sprint_title VARCHAR(200) NOT NULL,
        answers JSONB NOT NULL,
        attachments JSONB DEFAULT '[]',
        status VARCHAR(20) DEFAULT 'pending',
        feedback TEXT,
        reviewed_by INTEGER REFERENCES users(id),
        reviewed_at TIMESTAMP,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Add attachments column if it doesn't exist (for existing databases)
    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                       WHERE table_name='sprint_submissions' AND column_name='attachments')
        THEN
          ALTER TABLE sprint_submissions ADD COLUMN attachments JSONB DEFAULT '[]';
        END IF;
      END $$;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id VARCHAR(50) NOT NULL,
        certificate_id VARCHAR(100) UNIQUE NOT NULL,
        obtained_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, course_id)
      )
    `);

    // Create default admin if not exists
    const adminExists = await pool.query('SELECT * FROM users WHERE username = $1', ['admin']);
    if (adminExists.rows.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await pool.query(
        'INSERT INTO users (username, password, full_name, email, role) VALUES ($1, $2, $3, $4, $5)',
        ['admin', hashedPassword, 'Administrador', 'admin@lovirtual.com', 'admin']
      );
      console.log('Admin user created');
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// ==================== AUTH ROUTES ====================

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    if (!user.is_active) {
      return res.status(401).json({ error: 'Usuario desactivado. Contacte al administrador.' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        email: user.email,
        role: user.role,
        assignedCourses: user.assigned_courses || [],
        isActive: user.is_active,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Get current user
app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      email: user.email,
      role: user.role,
      assignedCourses: user.assigned_courses || [],
      isActive: user.is_active,
      createdAt: user.created_at
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// ==================== USER ROUTES ====================

// Get all users (admin only)
app.get('/api/users', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    const users = result.rows.map(user => ({
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      email: user.email,
      role: user.role,
      assignedCourses: user.assigned_courses || [],
      isActive: user.is_active,
      createdAt: user.created_at
    }));
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Create user (admin only)
app.post('/api/users', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { username, password, fullName, email, role, assignedCourses, isActive } = req.body;

    // Check if username exists
    const usernameCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (usernameCheck.rows.length > 0) {
      return res.status(400).json({ error: 'El nombre de usuario ya existe' });
    }

    // Check if email exists
    const emailCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (emailCheck.rows.length > 0) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, password, full_name, email, role, assigned_courses, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [username, hashedPassword, fullName, email, role || 'student', assignedCourses || [], isActive !== false]
    );

    const user = result.rows[0];
    res.status(201).json({
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      email: user.email,
      role: user.role,
      assignedCourses: user.assigned_courses || [],
      isActive: user.is_active,
      createdAt: user.created_at
    });
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Update user (admin only)
app.put('/api/users/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, fullName, email, role, assignedCourses, isActive } = req.body;

    // Check if updating username and it already exists
    if (username) {
      const usernameCheck = await pool.query(
        'SELECT * FROM users WHERE username = $1 AND id != $2',
        [username, id]
      );
      if (usernameCheck.rows.length > 0) {
        return res.status(400).json({ error: 'El nombre de usuario ya existe' });
      }
    }

    let query = 'UPDATE users SET ';
    const values = [];
    const updates = [];

    if (username) {
      values.push(username);
      updates.push(`username = $${values.length}`);
    }
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      values.push(hashedPassword);
      updates.push(`password = $${values.length}`);
    }
    if (fullName) {
      values.push(fullName);
      updates.push(`full_name = $${values.length}`);
    }
    if (email) {
      values.push(email);
      updates.push(`email = $${values.length}`);
    }
    if (role) {
      values.push(role);
      updates.push(`role = $${values.length}`);
    }
    if (assignedCourses !== undefined) {
      values.push(assignedCourses);
      updates.push(`assigned_courses = $${values.length}`);
    }
    if (isActive !== undefined) {
      values.push(isActive);
      updates.push(`is_active = $${values.length}`);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No hay campos para actualizar' });
    }

    values.push(id);
    query += updates.join(', ') + ` WHERE id = $${values.length} RETURNING *`;

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const user = result.rows[0];
    res.json({
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      email: user.email,
      role: user.role,
      assignedCourses: user.assigned_courses || [],
      isActive: user.is_active,
      createdAt: user.created_at
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Delete user (admin only)
app.delete('/api/users/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if trying to delete admin
    const userCheck = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (userCheck.rows.length > 0 && userCheck.rows[0].username === 'admin') {
      return res.status(400).json({ error: 'No se puede eliminar el administrador principal' });
    }

    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// ==================== PROGRESS ROUTES ====================

// Get user progress
app.get('/api/progress', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM progress WHERE user_id = $1',
      [req.user.id]
    );

    const progress = {};
    result.rows.forEach(row => {
      const key = `${row.course_id}-${row.module_id}`;
      progress[key] = {
        courseId: row.course_id,
        moduleId: row.module_id,
        completedLessons: row.completed_lessons || [],
        examScore: row.exam_score,
        examPassed: row.exam_passed,
        sprintCompleted: row.sprint_completed
      };
    });

    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Update lesson progress
app.post('/api/progress/lesson', authenticateToken, async (req, res) => {
  try {
    const { courseId, moduleId, lessonId } = req.body;

    // Upsert progress
    await pool.query(`
      INSERT INTO progress (user_id, course_id, module_id, completed_lessons)
      VALUES ($1, $2, $3, ARRAY[$4])
      ON CONFLICT (user_id, course_id, module_id)
      DO UPDATE SET
        completed_lessons = CASE
          WHEN NOT ($4 = ANY(progress.completed_lessons))
          THEN array_append(progress.completed_lessons, $4)
          ELSE progress.completed_lessons
        END,
        updated_at = CURRENT_TIMESTAMP
    `, [req.user.id, courseId, moduleId, lessonId]);

    res.json({ success: true });
  } catch (error) {
    console.error('Update lesson progress error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Update exam result
app.post('/api/progress/exam', authenticateToken, async (req, res) => {
  try {
    const { courseId, moduleId, score, passed } = req.body;

    await pool.query(`
      INSERT INTO progress (user_id, course_id, module_id, exam_score, exam_passed)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (user_id, course_id, module_id)
      DO UPDATE SET
        exam_score = $4,
        exam_passed = $5,
        updated_at = CURRENT_TIMESTAMP
    `, [req.user.id, courseId, moduleId, score, passed]);

    res.json({ success: true });
  } catch (error) {
    console.error('Update exam progress error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Update sprint completion
app.post('/api/progress/sprint', authenticateToken, async (req, res) => {
  try {
    const { courseId, moduleId, completed } = req.body;

    await pool.query(`
      INSERT INTO progress (user_id, course_id, module_id, sprint_completed)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (user_id, course_id, module_id)
      DO UPDATE SET
        sprint_completed = $4,
        updated_at = CURRENT_TIMESTAMP
    `, [req.user.id, courseId, moduleId, completed]);

    res.json({ success: true });
  } catch (error) {
    console.error('Update sprint progress error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// ==================== FILE UPLOAD ROUTES ====================

// Upload files
app.post('/api/upload', authenticateToken, upload.array('files', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No se subieron archivos' });
    }

    const baseUrl = process.env.API_URL || `http://localhost:${PORT}`;
    const files = req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      url: `${baseUrl}/uploads/${file.filename}`
    }));

    res.json({ files });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Error al subir archivos' });
  }
});

// ==================== SPRINT SUBMISSION ROUTES ====================

// Submit sprint with attachments
app.post('/api/submissions', authenticateToken, async (req, res) => {
  try {
    const { courseId, courseSlug, courseName, moduleId, moduleName, sprintTitle, answers, attachments } = req.body;

    const result = await pool.query(`
      INSERT INTO sprint_submissions
        (user_id, course_id, course_slug, course_name, module_id, module_name, sprint_title, answers, attachments)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `, [req.user.id, courseId, courseSlug, courseName, moduleId, moduleName, sprintTitle, JSON.stringify(answers), JSON.stringify(attachments || [])]);

    res.status(201).json({
      id: result.rows[0].id,
      message: 'Sprint enviado exitosamente'
    });
  } catch (error) {
    console.error('Submit sprint error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Get user submissions
app.get('/api/submissions/me', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, u.full_name as user_name
      FROM sprint_submissions s
      JOIN users u ON s.user_id = u.id
      WHERE s.user_id = $1
      ORDER BY s.submitted_at DESC
    `, [req.user.id]);

    const submissions = result.rows.map(row => ({
      id: row.id,
      oddsSlug: row.course_slug,
      courseId: row.course_id,
      courseName: row.course_name,
      moduleId: row.module_id,
      moduleName: row.module_name,
      sprintTitle: row.sprint_title,
      answers: row.answers,
      attachments: row.attachments || [],
      status: row.status,
      feedback: row.feedback,
      submittedAt: row.submitted_at,
      reviewedAt: row.reviewed_at
    }));

    res.json(submissions);
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Get all submissions (admin only)
app.get('/api/submissions', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, u.full_name as user_name
      FROM sprint_submissions s
      JOIN users u ON s.user_id = u.id
      ORDER BY s.submitted_at DESC
    `);

    const submissions = result.rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      userName: row.user_name,
      oddsSlug: row.course_slug,
      courseId: row.course_id,
      courseName: row.course_name,
      moduleId: row.module_id,
      moduleName: row.module_name,
      sprintTitle: row.sprint_title,
      answers: row.answers,
      attachments: row.attachments || [],
      status: row.status,
      feedback: row.feedback,
      submittedAt: row.submitted_at,
      reviewedAt: row.reviewed_at
    }));

    res.json(submissions);
  } catch (error) {
    console.error('Get all submissions error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Get pending submissions (admin only)
app.get('/api/submissions/pending', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, u.full_name as user_name
      FROM sprint_submissions s
      JOIN users u ON s.user_id = u.id
      WHERE s.status = 'pending'
      ORDER BY s.submitted_at ASC
    `);

    const submissions = result.rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      userName: row.user_name,
      oddsSlug: row.course_slug,
      courseId: row.course_id,
      courseName: row.course_name,
      moduleId: row.module_id,
      moduleName: row.module_name,
      sprintTitle: row.sprint_title,
      answers: row.answers,
      attachments: row.attachments || [],
      status: row.status,
      feedback: row.feedback,
      submittedAt: row.submitted_at
    }));

    res.json(submissions);
  } catch (error) {
    console.error('Get pending submissions error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Review submission (admin only)
app.put('/api/submissions/:id/review', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, feedback } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }

    const result = await pool.query(`
      UPDATE sprint_submissions
      SET status = $1, feedback = $2, reviewed_by = $3, reviewed_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *
    `, [status, feedback, req.user.id, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Entrega no encontrada' });
    }

    // If approved, update sprint completion in progress
    if (status === 'approved') {
      const submission = result.rows[0];
      await pool.query(`
        INSERT INTO progress (user_id, course_id, module_id, sprint_completed)
        VALUES ($1, $2, $3, true)
        ON CONFLICT (user_id, course_id, module_id)
        DO UPDATE SET sprint_completed = true, updated_at = CURRENT_TIMESTAMP
      `, [submission.user_id, submission.course_id, submission.module_id]);
    }

    res.json({ message: `Sprint ${status === 'approved' ? 'aprobado' : 'rechazado'} exitosamente` });
  } catch (error) {
    console.error('Review submission error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// ==================== CERTIFICATE ROUTES ====================

// Generate certificate
app.post('/api/certificates', authenticateToken, async (req, res) => {
  try {
    const { courseId } = req.body;
    const certificateId = `CERT-${Date.now()}-${req.user.id}`;

    const result = await pool.query(`
      INSERT INTO certificates (user_id, course_id, certificate_id)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, course_id)
      DO UPDATE SET certificate_id = $3, obtained_at = CURRENT_TIMESTAMP
      RETURNING *
    `, [req.user.id, courseId, certificateId]);

    res.json({
      certificateId: result.rows[0].certificate_id,
      obtainedAt: result.rows[0].obtained_at
    });
  } catch (error) {
    console.error('Generate certificate error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Get user certificates
app.get('/api/certificates', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM certificates WHERE user_id = $1',
      [req.user.id]
    );

    const certificates = {};
    result.rows.forEach(row => {
      certificates[row.course_id] = {
        certificateId: row.certificate_id,
        obtainedAt: row.obtained_at
      };
    });

    res.json(certificates);
  } catch (error) {
    console.error('Get certificates error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initDB();
});
