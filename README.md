# Academia LoVirtual

Plataforma de formación para Asistentes Virtuales.

## Tecnologías

**Frontend:**
- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

**Backend:**
- Node.js + Express
- PostgreSQL
- JWT Authentication

## Desarrollo Local

### Frontend

```bash
# Instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env

# Ejecutar servidor de desarrollo
npm run dev
```

### Backend

```bash
# Ir a la carpeta del servidor
cd server

# Instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env
# Editar .env con tu DATABASE_URL de PostgreSQL

# Ejecutar servidor
npm run dev
```

## Despliegue

### Backend en Railway

1. Crear cuenta en [Railway](https://railway.app)
2. Crear nuevo proyecto
3. Agregar PostgreSQL desde "Add Database"
4. Crear nuevo servicio desde GitHub (seleccionar carpeta `server`)
5. Configurar variables de entorno:
   - `DATABASE_URL` (se configura automáticamente con PostgreSQL)
   - `JWT_SECRET` (crear una clave secreta fuerte)
   - `FRONTEND_URL` (URL de Vercel, ej: `https://tu-app.vercel.app`)
   - `NODE_ENV=production`
6. Deploy automático al hacer push

### Frontend en Vercel

1. Crear cuenta en [Vercel](https://vercel.com)
2. Importar repositorio de GitHub
3. Configurar:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Agregar variable de entorno:
   - `VITE_API_URL` = URL de tu backend en Railway (ej: `https://tu-api.railway.app`)
5. Deploy

### Pasos para GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Academia LoVirtual"

# Agregar repositorio remoto
git remote add origin https://github.com/tu-usuario/academia-lovirtual.git

# Push a GitHub
git push -u origin main
```

## Credenciales de Prueba

- **Usuario:** admin
- **Contraseña:** admin123

## Estructura del Proyecto

```
academia-lovirtual/
├── src/                    # Frontend React
│   ├── components/         # Componentes UI
│   ├── contexts/           # Context providers
│   ├── data/              # Datos de cursos
│   ├── pages/             # Páginas
│   └── services/          # API client
├── server/                 # Backend Node.js
│   ├── index.js           # Servidor Express
│   └── package.json
├── .env.example           # Variables de entorno (frontend)
└── vercel.json            # Config Vercel
```
