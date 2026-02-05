// Script para completar todos los cursos para el usuario actual
// INSTRUCCIONES:
// 1. Inicia sesión como "stuar" en la academia
// 2. Abre la consola del navegador (F12 > Console)
// 3. Copia y pega todo este código
// 4. Espera a que termine (verás mensajes de progreso)

const API_URL = 'https://academia-lo-virtual-test-production.up.railway.app';

// Obtener token del localStorage
const token = localStorage.getItem('auth_token');
if (!token) {
  console.error('❌ No estás logueado. Inicia sesión primero.');
  throw new Error('No auth token found');
}

console.log('🚀 Iniciando completación de todos los cursos...');

// Función para hacer peticiones a la API
async function apiRequest(endpoint, method = 'POST', body = null) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: body ? JSON.stringify(body) : null
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${error}`);
  }

  return response.json();
}

// Estructura de todos los cursos con sus módulos y lecciones
const courses = [
  {
    id: "english-course",
    name: "Inglés para Asistentes Virtuales",
    modules: [
      { id: "mod-english-a1", lessons: ["lesson-a1-grammar", "lesson-a1-vocab"] },
      { id: "mod-english-a2", lessons: ["lesson-a2-grammar", "lesson-a2-vocab"] },
      { id: "mod-english-b1", lessons: ["lesson-b1-grammar", "lesson-b1-vocab"] },
      { id: "mod-english-b2", lessons: ["lesson-b2-grammar", "lesson-b2-vocab"] },
      { id: "mod-english-c1", lessons: ["lesson-c1-grammar", "lesson-c1-vocab"] },
      { id: "mod-english-c2", lessons: ["lesson-c2-grammar", "lesson-c2-vocab"] },
      { id: "mod-cultura-historia", lessons: ["lesson-1", "lesson-2", "lesson-3"] },
      { id: "mod-beneficios-ecosistema", lessons: ["lesson-4", "lesson-5", "lesson-6"] },
      { id: "mod-tu-carrera", lessons: ["lesson-7", "lesson-8", "lesson-9"] },
      { id: "mod-perfil-profesional", lessons: ["lesson-10", "lesson-11", "lesson-12"] },
      { id: "mod-procesos-normas", lessons: ["lesson-13", "lesson-14", "lesson-15", "lesson-16", "lesson-17"] },
      { id: "mod-hd-1", lessons: ["lesson-hd-1-1", "lesson-hd-1-2", "lesson-hd-1-3"] },
      { id: "mod-ce-1", lessons: ["lesson-ce-1-1", "lesson-ce-1-2", "lesson-ce-1-3"] },
      { id: "mod-gt-1", lessons: ["lesson-gt-1-1", "lesson-gt-1-2", "lesson-gt-1-3"] }
    ]
  },
  {
    id: "diseno-grafico",
    name: "Diseño Gráfico para Asistentes Virtuales",
    modules: [
      { id: "mod-dg-1", lessons: ["lesson-dg-1-1", "lesson-dg-1-2", "lesson-dg-1-3", "lesson-dg-1-4", "lesson-dg-1-5"] },
      { id: "mod-dg-2", lessons: ["lesson-dg-2-1", "lesson-dg-2-2", "lesson-dg-2-3", "lesson-dg-2-4", "lesson-dg-2-5"] },
      { id: "mod-dg-3", lessons: ["lesson-dg-3-1", "lesson-dg-3-2", "lesson-dg-3-3", "lesson-dg-3-4", "lesson-dg-3-5"] },
      { id: "mod-dg-4", lessons: ["lesson-dg-4-1", "lesson-dg-4-2", "lesson-dg-4-3", "lesson-dg-4-4"] }
    ]
  },
  {
    id: "community-manager",
    name: "Community Manager Profesional",
    modules: [
      { id: "mod-cm-1", lessons: ["lesson-cm-1-1", "lesson-cm-1-2", "lesson-cm-1-3", "lesson-cm-1-4", "lesson-cm-1-5", "lesson-cm-1-6"] },
      { id: "mod-cm-2", lessons: ["lesson-cm-2-1", "lesson-cm-2-2", "lesson-cm-2-3", "lesson-cm-2-4", "lesson-cm-2-5", "lesson-cm-2-6", "lesson-cm-2-7", "lesson-cm-2-8"] },
      { id: "mod-cm-3", lessons: ["lesson-cm-3-1", "lesson-cm-3-2", "lesson-cm-3-3", "lesson-cm-3-4", "lesson-cm-3-5", "lesson-cm-3-6", "lesson-cm-3-7", "lesson-cm-3-8"] },
      { id: "mod-cm-4", lessons: ["lesson-cm-4-1", "lesson-cm-4-2", "lesson-cm-4-3", "lesson-cm-4-4", "lesson-cm-4-5"] },
      { id: "mod-cm-5", lessons: ["lesson-cm-5-1", "lesson-cm-5-2", "lesson-cm-5-3", "lesson-cm-5-4", "lesson-cm-5-5"] }
    ]
  },
  {
    id: "contabilidad-asistentes",
    name: "Contabilidad para Asistentes Virtuales",
    modules: [
      { id: "module-conta-intro", lessons: ["lesson-conta-intro-1"] },
      { id: "module-conta-1", lessons: ["lesson-conta-1-1", "lesson-conta-1-2"] },
      { id: "module-conta-2", lessons: ["lesson-conta-2-1", "lesson-conta-2-2"] },
      { id: "module-conta-3", lessons: ["lesson-conta-3-1", "lesson-conta-3-2"] },
      { id: "module-conta-4", lessons: ["lesson-conta-4-1", "lesson-conta-4-2"] },
      { id: "module-conta-5", lessons: ["lesson-conta-5-1", "lesson-conta-5-2"] },
      { id: "module-conta-6", lessons: ["lesson-conta-6-1", "lesson-conta-6-2"] },
      { id: "module-conta-7", lessons: ["lesson-conta-7-1", "lesson-conta-7-2"] },
      { id: "module-conta-8", lessons: ["lesson-conta-8-1", "lesson-conta-8-2"] },
      { id: "module-conta-9", lessons: ["lesson-conta-9-1", "lesson-conta-9-2"] }
    ]
  },
  {
    id: "administracion-gestion",
    name: "Administración y Gestión Empresarial",
    modules: [
      { id: "module-admin-1", lessons: ["lesson-admin-1-1", "lesson-admin-1-2"] },
      { id: "module-admin-2", lessons: ["lesson-admin-2-1", "lesson-admin-2-2"] },
      { id: "module-admin-3", lessons: ["lesson-admin-3-1", "lesson-admin-3-2"] },
      { id: "module-admin-4", lessons: ["lesson-admin-4-1", "lesson-admin-4-2"] },
      { id: "module-admin-5", lessons: ["lesson-admin-5-1", "lesson-admin-5-2"] },
      { id: "module-admin-6", lessons: ["lesson-admin-6-1", "lesson-admin-6-2"] },
      { id: "module-admin-7", lessons: ["lesson-admin-7-1", "lesson-admin-7-2"] },
      { id: "module-admin-8", lessons: ["lesson-admin-8-1", "lesson-admin-8-2"] },
      { id: "module-admin-9", lessons: ["lesson-admin-9-1", "lesson-admin-9-2"] }
    ]
  }
];

// Función principal para completar todos los cursos
async function completeAllCourses() {
  for (const course of courses) {
    console.log(`\n📚 Procesando curso: ${course.name}`);

    for (const module of course.modules) {
      console.log(`  📖 Módulo: ${module.id}`);

      // Marcar todas las lecciones como completadas
      for (const lessonId of module.lessons) {
        try {
          await apiRequest('/api/progress/lesson', 'POST', {
            courseId: course.id,
            moduleId: module.id,
            lessonId: lessonId
          });
          console.log(`    ✅ Lección: ${lessonId}`);
        } catch (e) {
          console.log(`    ⚠️ Lección ${lessonId}: ${e.message}`);
        }
        // Pequeña pausa para no saturar el servidor
        await new Promise(r => setTimeout(r, 100));
      }

      // Marcar sprint como completado
      try {
        await apiRequest('/api/progress/sprint', 'POST', {
          courseId: course.id,
          moduleId: module.id,
          completed: true
        });
        console.log(`    ✅ Sprint completado`);
      } catch (e) {
        console.log(`    ⚠️ Sprint: ${e.message}`);
      }

      // Marcar examen como aprobado (100%)
      try {
        await apiRequest('/api/progress/exam', 'POST', {
          courseId: course.id,
          moduleId: module.id,
          score: 100,
          passed: true
        });
        console.log(`    ✅ Examen aprobado (100%)`);
      } catch (e) {
        console.log(`    ⚠️ Examen: ${e.message}`);
      }

      await new Promise(r => setTimeout(r, 200));
    }

    // Generar certificado
    try {
      const cert = await apiRequest('/api/certificates', 'POST', {
        courseId: course.id
      });
      console.log(`  🎓 CERTIFICADO GENERADO: ${cert.certificateId}`);
    } catch (e) {
      console.log(`  ⚠️ Certificado: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\n\n🎉 ¡TODOS LOS CURSOS HAN SIDO COMPLETADOS!');
  console.log('🔄 Recarga la página para ver los cambios.');
}

// Ejecutar
completeAllCourses();
