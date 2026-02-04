import { CourseData } from "@/types/course";

// Helper function to get course by slug
export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return coursesData.find(course => course.slug === slug);
};

export const coursesData: CourseData[] = [
  {
    id: "intro-lovirtual",
    title: "Introducción a LoVirtual",
    slug: "introduccion-lovirtual",
    description: "El primer paso de tu carrera. Conoce nuestra cultura, historia y las bases para ser un Asistente Virtual exitoso.",
    duration: "~2 horas",
    totalLessons: "17 Lecciones",
    icon: "Rocket",
    color: "from-blue-500 to-cyan-500",
    certificate: {
      title: "Certificado de Introducción a LoVirtual",
      description: "Ha completado satisfactoriamente el curso de Introducción a LoVirtual"
    },
    modules: [
      {
        id: "mod-cultura-historia",
        title: "Cultura e Historia",
        description: "Conoce la esencia de LoVirtual, nuestra misión, visión y los valores que nos definen",
        theory: [
          {
            id: "lesson-1",
            title: "Bienvenida y Propósito",
            content: `# Bienvenida y Propósito

## ¡Bienvenido al primer paso de tu carrera como Asistente Virtual!

Te damos la más cordial bienvenida a **La Academia de LoVirtual**, el espacio donde comienza tu transformación profesional. Este no es solo un curso de capacitación, es el inicio de una nueva etapa en tu vida laboral.

---

## Nuestra Misión

En LoVirtual tenemos una misión clara y poderosa:

> **"Educar, Evaluar y Abordar"**

Estas tres palabras guían todo lo que hacemos:

- **Educar**: Te proporcionamos el conocimiento y las herramientas necesarias para destacar en el mundo del trabajo remoto.
- **Evaluar**: Medimos tu progreso constantemente para asegurar que estés listo para los desafíos reales.
- **Abordar**: Te ayudamos a enfrentar situaciones laborales con confianza y profesionalismo.

---

## Tu Transformación

**Hoy eres candidato, mañana serás asistente virtual.**

Este curso marca el inicio de un viaje emocionante. Al completarlo, habrás adquirido las bases fundamentales para:

- Comprender la cultura y valores de LoVirtual
- Conocer nuestra estructura organizacional
- Entender tu rol dentro del ecosistema
- Desarrollar las habilidades que te harán destacar

---

## Compromiso Mutuo

Nosotros nos comprometemos a guiarte en cada paso del camino. A cambio, esperamos de ti:

- **Dedicación** al proceso de aprendizaje
- **Puntualidad** en tus entregas
- **Proactividad** ante los desafíos
- **Honestidad** en todo momento

¡Estamos emocionados de tenerte aquí! Prepárate para una experiencia que cambiará tu perspectiva profesional.`
          },
          {
            id: "lesson-2",
            title: "Quiénes Somos",
            content: `# Quiénes Somos: Misión y Visión

## Origen y Evolución

LoVirtual nació de una necesidad real y se ha transformado en una organización con propósito que trasciende el simple concepto de "trabajo". Somos más que una empresa de asistentes virtuales; somos una **comunidad de profesionales** comprometidos con la excelencia.

---

## LoVirtual: Más que un Trabajo

> *LoVirtual no es solo un trabajo, es una organización con propósito.*

Cada miembro de nuestro equipo es parte de algo más grande. No simplemente cumplimos tareas; creamos valor, construimos relaciones y generamos impacto positivo en la vida de nuestros clientes y colaboradores.

---

## Nuestra Misión

*"Brindar soluciones de asistencia virtual de alta calidad que permitan a profesionales y empresas optimizar su tiempo y recursos, mientras desarrollamos el talento latinoamericano en el ámbito del trabajo remoto."*

---

## Nuestra Visión

*"Ser la organización líder en asistencia virtual en Latinoamérica, reconocida por la excelencia de nuestro equipo, la satisfacción de nuestros clientes y el impacto positivo en las comunidades donde operamos."*

---

## Valores Fundamentales

| Valor | Significado |
|-------|-------------|
| **Integridad** | Actuamos con honestidad y transparencia |
| **Excelencia** | Buscamos superar las expectativas siempre |
| **Compromiso** | Cumplimos con nuestra palabra y obligaciones |
| **Colaboración** | Trabajamos en equipo hacia metas comunes |
| **Innovación** | Mejoramos continuamente nuestros procesos |

---

## Tu Rol en Esta Misión

Como parte de LoVirtual, tú no eres un empleado más. Eres un **embajador de nuestra cultura** y un **agente de cambio** en la forma en que el mundo ve el trabajo remoto latinoamericano.`
          },
          {
            id: "lesson-3",
            title: "Historia y Fundador",
            content: `# Historia y Fundador

## El Nacimiento de LoVirtual

LoVirtual fue fundada el **21 de febrero de 2021** por **Gamaliel Melecio Cabrera**, un visionario puertorriqueño que identificó una necesidad crítica en el mercado.

---

## La Necesidad que Inspiró Todo

En Puerto Rico, muchos profesionales talentosos buscaban oportunidades de trabajo flexible que les permitieran:

- Trabajar desde casa
- Tener horarios adaptables
- Acceder a clientes internacionales
- Desarrollarse profesionalmente

Al mismo tiempo, empresarios y profesionales en Estados Unidos necesitaban apoyo administrativo confiable y accesible. Gamaliel vio esta oportunidad y actuó.

---

## Nuestro Fundador: Gamaliel Melecio Cabrera

Gamaliel no solo fundó una empresa; creó un movimiento. Su visión siempre ha sido clara: **empoderar a profesionales latinoamericanos** para que puedan competir en el mercado global mientras mantienen su calidad de vida.

### Filosofía de Liderazgo:
- Creer en el potencial de cada persona
- Invertir en la formación continua
- Crear oportunidades reales de crecimiento
- Construir una comunidad, no solo una empresa

---

## Crecimiento y Evolución

Desde aquel febrero de 2021, LoVirtual ha experimentado un crecimiento extraordinario:

**2021**: Fundación e inicio de operaciones
- Primeros asistentes virtuales capacitados
- Establecimiento de procesos base

**2022**: Expansión
- Crecimiento del equipo
- Diversificación de servicios

**2023-2024**: Consolidación
- Estructura organizacional robusta
- Múltiples departamentos especializados
- Cientos de asistentes virtuales activos

**2025 y más allá**: El futuro
- Expansión a nuevos mercados
- Innovación tecnológica continua
- Tú eres parte de este futuro

---

> *"El éxito de LoVirtual no se mide solo en números, sino en las vidas que transformamos."* - Gamaliel Melecio Cabrera`
          },
          {
            id: "lesson-4",
            title: "Estructura Organizacional",
            content: `# Estructura Organizacional

## Conoce Nuestro Organigrama

Para funcionar eficientemente, LoVirtual cuenta con una estructura organizacional bien definida que permite coordinar esfuerzos y maximizar resultados.

---

## Áreas Principales de LoVirtual

Nuestra organización está dividida en departamentos clave que trabajan en conjunto:

### 1. Marketing
**Función:** Promoción y posicionamiento de la marca LoVirtual

- Gestión de redes sociales corporativas
- Campañas de atracción de talento
- Comunicación externa e interna
- Desarrollo de contenido institucional

### 2. Administración
**Función:** Gestión operativa del día a día

- Coordinación de asignaciones
- Supervisión de calidad
- Gestión de procesos internos
- Resolución de incidencias operativas

### 3. Ventas
**Función:** Captación y retención de clientes

- Prospección de nuevos clientes
- Presentación de servicios
- Negociación de contratos
- Seguimiento de satisfacción del cliente

### 4. Recursos Humanos (RRHH)
**Función:** Gestión del talento humano

- Reclutamiento y selección
- Capacitación y desarrollo
- Gestión de beneficios
- Bienestar del colaborador
- Evaluaciones de desempeño

### 5. Finanzas
**Función:** Gestión económica y pagos

- Procesamiento de nómina
- Gestión de pagos quincenales
- Control de cuentas
- Reportes financieros

---

## Flujo de Comunicación

La comunicación fluye de manera estructurada:

1. **Asistentes Virtuales** → Reportan a **Líderes de Grupo**
2. **Líderes de Grupo** → Coordinan con **Administración**
3. **Administración** → Escala a **Dirección** cuando es necesario

---

## Tu Lugar en la Estructura

Como candidato, actualmente estás bajo la supervisión de:

- **Recursos Humanos** (durante la etapa de capacitación)
- Una vez asignado, reportarás a un **Líder de Grupo**

> Recuerda: cada área existe para apoyarte. ¡No dudes en comunicarte cuando lo necesites!`
          }
        ],
        sprint: {
          title: "Sprint: Cultura e Historia",
          description: "Demuestra tu comprensión de la cultura y valores de LoVirtual",
          tasks: [
            {
              id: "task-1-1",
              question: "¿Cuál es la misión de LoVirtual expresada en tres palabras? Explica qué significa cada una para ti."
            },
            {
              id: "task-1-2",
              question: "Menciona los 5 valores fundamentales de LoVirtual y describe cómo aplicarías uno de ellos en tu trabajo diario."
            }
          ]
        },
        exam: {
          title: "Examen: Cultura e Historia",
          description: "Evalúa tus conocimientos sobre la cultura de LoVirtual",
          passingScore: 70,
          questions: [
            {
              id: "q1",
              question: "¿En qué fecha fue fundada LoVirtual?",
              options: ["21 de febrero de 2020", "21 de febrero de 2021", "21 de marzo de 2021", "15 de enero de 2021"],
              correctAnswer: 1
            },
            {
              id: "q2",
              question: "¿Cuál es la misión de LoVirtual expresada en tres palabras?",
              options: ["Crear, Innovar, Liderar", "Educar, Evaluar y Abordar", "Servir, Crecer, Triunfar", "Conectar, Desarrollar, Transformar"],
              correctAnswer: 1
            },
            {
              id: "q3",
              question: "¿Quién es el fundador de LoVirtual?",
              options: ["Carlos Méndez", "Gamaliel Melecio Cabrera", "José Rodríguez", "Miguel Hernández"],
              correctAnswer: 1
            },
            {
              id: "q4",
              question: "¿Cuál NO es uno de los valores fundamentales de LoVirtual?",
              options: ["Integridad", "Competitividad", "Compromiso", "Colaboración"],
              correctAnswer: 1
            },
            {
              id: "q5",
              question: "¿A quién reporta un Asistente Virtual una vez asignado?",
              options: ["Directamente al CEO", "Al Líder de Grupo", "Al cliente", "A Recursos Humanos"],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: "mod-beneficios-ecosistema",
        title: "Beneficios y Ecosistema",
        description: "Descubre los beneficios de ser parte de LoVirtual y el ecosistema de desarrollo",
        theory: [
          {
            id: "lesson-5",
            title: "Beneficios del Candidato",
            content: `# Beneficios del Candidato

## ¿Qué Ganas al Ser Parte de LoVirtual?

Ser parte de LoVirtual viene con una serie de beneficios diseñados para hacer tu experiencia laboral excepcional.

---

## Trabajo 100% Remoto

El beneficio más valorado por nuestro equipo:

- Trabaja desde la comodidad de tu hogar
- Ahorra tiempo y dinero en transporte
- Mejor balance vida-trabajo
- Flexibilidad geográfica

---

## Pago Seguro y Confiable

Tu esfuerzo merece una compensación garantizada:

### Métodos de Pago Disponibles

| Plataforma | Descripción |
|------------|-------------|
| **Binance** | Pagos en criptomonedas (USDT) |
| **Ontop** | Pagos en dólares directos a tu cuenta |

- Pagos **quincenales** puntuales
- Sin retrasos ni complicaciones
- Múltiples opciones de retiro

---

## Apps y Herramientas Digitales

Acceso a tecnología de primer nivel:

### Herramientas que Recibirás

- **Zoho**: Suite completa de productividad
  - Zoho Mail (correo corporativo)
  - Zoho Projects (gestión de tareas)
  - Zoho Cliq (comunicación interna)

- **VPN Corporativa**: Acceso seguro a recursos
  - Navegación protegida
  - Acceso a sistemas internos

- **Canva Pro**: Diseño gráfico profesional
  - Plantillas premium
  - Recursos ilimitados
  - Exportación en alta calidad

---

## Caja de Ahorros y Caja Chica

Después de **1 mes** de trabajo activo, tienes acceso a:

### Caja de Ahorros
- Programa de ahorro voluntario
- Te ayuda a construir un fondo personal
- Descuentos automáticos de tu nómina

### Caja Chica
- Adelantos para emergencias
- Proceso simple de solicitud
- Requisitos claros y justos

---

## Soporte Técnico

Nunca estarás solo ante problemas técnicos:

- **Equipo de Tecnología** disponible
- Soporte para configuración de herramientas
- Ayuda con problemas de conectividad
- Capacitación en el uso de plataformas

---

## Resumen de Beneficios

| Beneficio | Disponibilidad |
|-----------|----------------|
| Trabajo remoto | Desde el día 1 |
| Pago quincenal | Desde el día 1 |
| Herramientas digitales | Desde el día 1 |
| Caja de ahorros | Después de 1 mes |
| Soporte técnico | Permanente |

---

## ¡Y Esto Es Solo el Comienzo!

A medida que crezcas en LoVirtual, accederás a más beneficios y oportunidades de desarrollo.`
          },
          {
            id: "lesson-6",
            title: "Ecosistema de Desarrollo",
            content: `# Ecosistema de Desarrollo

## Tu Crecimiento es Nuestra Prioridad

En LoVirtual no solo te damos un trabajo, te damos un **camino de desarrollo profesional** estructurado y acompañado.

---

## Inducción en Banco de Talentos

Tu viaje comienza aquí:

### ¿Qué es el Banco de Talentos?

Es nuestro sistema de gestión de candidatos donde:

- Se registra tu información profesional
- Se trackea tu progreso en capacitaciones
- Se identifican tus fortalezas y áreas de mejora
- Se te asigna al cliente ideal según tu perfil

### Proceso de Inducción

1. **Registro inicial** de tus datos y habilidades
2. **Evaluación diagnóstica** de competencias
3. **Capacitación inicial** (este curso)
4. **Período de práctica** supervisada
5. **Asignación** a tu primer cliente

---

## Retroalimentación Constante

Creemos en la mejora continua:

> *"El feedback no es crítica, es una herramienta de crecimiento."*

### Tipos de Retroalimentación

| Tipo | Frecuencia | Propósito |
|------|------------|-----------|
| Operativa | Diaria | Correcciones inmediatas |
| De desempeño | Quincenal | Evaluación general |
| De desarrollo | Mensual | Plan de crecimiento |

### Canales de Retroalimentación

- Reuniones 1:1 con tu líder
- Evaluaciones formales periódicas
- Feedback del cliente
- Autoevaluaciones

---

## Capacitación Continua

Tu aprendizaje nunca termina:

### Recursos Disponibles

- **Academia LoVirtual**: Cursos estructurados como este
- **Webinars**: Sesiones en vivo sobre temas específicos
- **Biblioteca de recursos**: Guías, tutoriales y plantillas
- **Mentorías**: Acompañamiento de asistentes senior

### Áreas de Desarrollo

- Habilidades técnicas (herramientas, software)
- Habilidades blandas (comunicación, gestión del tiempo)
- Conocimiento del negocio del cliente
- Liderazgo y gestión de equipos

---

## Métricas de Éxito

Tu progreso se mide con indicadores claros:

- **Calidad**: Precisión y excelencia en entregas
- **Puntualidad**: Cumplimiento de plazos
- **Comunicación**: Claridad y proactividad
- **Satisfacción del cliente**: Feedback positivo

---

## Tu Compromiso

Para aprovechar al máximo este ecosistema:

- Mantén una actitud de aprendizaje
- Solicita feedback activamente
- Implementa las mejoras sugeridas
- Comparte conocimiento con otros`
          }
        ],
        sprint: {
          title: "Sprint: Beneficios y Ecosistema",
          description: "Demuestra tu comprensión de los beneficios y el ecosistema de desarrollo",
          tasks: [
            {
              id: "task-2-1",
              question: "Menciona al menos 3 beneficios de trabajar en LoVirtual y explica cuál consideras más valioso para ti y por qué."
            },
            {
              id: "task-2-2",
              question: "Describe el proceso de inducción en el Banco de Talentos y qué esperas aprender en cada etapa."
            }
          ]
        },
        exam: {
          title: "Examen: Beneficios y Ecosistema",
          description: "Evalúa tus conocimientos sobre los beneficios y el ecosistema",
          passingScore: 70,
          questions: [
            {
              id: "q1",
              question: "¿Cuáles son las plataformas de pago disponibles en LoVirtual?",
              options: ["PayPal y Payoneer", "Binance y Ontop", "Western Union y Zelle", "Transferencia bancaria únicamente"],
              correctAnswer: 1
            },
            {
              id: "q2",
              question: "¿Cuándo tienes acceso a la Caja de Ahorros?",
              options: ["Desde el día 1", "Después de 1 semana", "Después de 1 mes", "Después de 3 meses"],
              correctAnswer: 2
            },
            {
              id: "q3",
              question: "¿Qué es el Banco de Talentos?",
              options: ["Una cuenta de ahorros", "Sistema de gestión de candidatos", "Una herramienta de pago", "Un curso avanzado"],
              correctAnswer: 1
            },
            {
              id: "q4",
              question: "¿Con qué frecuencia se realizan los pagos en LoVirtual?",
              options: ["Semanalmente", "Quincenalmente", "Mensualmente", "Por proyecto"],
              correctAnswer: 1
            },
            {
              id: "q5",
              question: "¿Cuál de estas herramientas NO es proporcionada por LoVirtual?",
              options: ["Zoho Mail", "Canva Pro", "Adobe Creative Suite", "VPN Corporativa"],
              correctAnswer: 2
            }
          ]
        }
      },
      {
        id: "mod-tu-carrera",
        title: "Tu Carrera",
        description: "Conoce los niveles de crecimiento y el camino profesional en LoVirtual",
        theory: [
          {
            id: "lesson-7",
            title: "Escalera de Jerarquía",
            content: `# Escalera de Jerarquía: Tu Camino al Éxito

## Los Niveles de Ascenso en LoVirtual

En LoVirtual, tu crecimiento profesional tiene un camino claro y definido. Aquí te presentamos la escalera de jerarquía que podrás recorrer con dedicación y excelencia.

---

## Los 5 Niveles de Desarrollo

### Nivel 1: Asistente Virtual

**Tu punto de partida**

- Primera posición al ser asignado a un cliente
- Enfoque en aprender y ejecutar tareas asignadas
- Período de adaptación y perfeccionamiento
- Duración típica: 3-6 meses

**Requisitos para avanzar:**
- Desempeño sobresaliente
- Feedback positivo del cliente
- Cumplimiento de KPIs
- Actitud proactiva

---

### Nivel 2: Asistente Ejecutivo

**Mayor responsabilidad y autonomía**

- Manejo de tareas más complejas
- Posibilidad de múltiples clientes
- Toma de decisiones en situaciones cotidianas
- Duración típica: 6-12 meses

**Requisitos para avanzar:**
- Excelencia consistente
- Capacidad de resolver problemas
- Habilidades de comunicación avanzadas

---

### Nivel 3: Asistente Mentor

**Guía para otros**

- Apoyo a nuevos asistentes
- Capacitación y mentoría
- Participación en mejoras de procesos
- Referente técnico del equipo

**Requisitos para avanzar:**
- Habilidades de liderazgo demostradas
- Capacidad de enseñar a otros
- Visión estratégica

---

### Nivel 4: Líder de Grupo

**Gestión de equipos**

- Supervisión de un grupo de asistentes
- Coordinación con administración
- Resolución de conflictos
- Reportes de desempeño del equipo

---

### Nivel 5: Administración

**Gestión organizacional**

- Toma de decisiones estratégicas
- Gestión de operaciones
- Coordinación interdepartamental
- Desarrollo de la organización

---

## Factores de Ascenso

Tu progreso depende de:

1. **Desempeño**: Calidad constante de tu trabajo
2. **Actitud**: Proactividad y compromiso
3. **Desarrollo**: Aprendizaje continuo
4. **Tiempo**: Experiencia acumulada
5. **Oportunidad**: Disponibilidad de posiciones

---

> *En LoVirtual, tu techo lo pones tú. Cada nivel es alcanzable con dedicación y excelencia.*`
          },
          {
            id: "lesson-8",
            title: "El Camino del Asistente",
            content: `# El Camino del Asistente Virtual

## Tu Journey en LoVirtual

Desde que aplicas hasta que te conviertes en un asistente virtual experimentado, pasarás por varias etapas. Conocerlas te ayudará a prepararte mejor.

---

## Etapa 1: Aplicación y Selección

**El primer contacto**

### Lo que necesitas:
- Documento de identidad
- Comprobante de domicilio
- Cuenta bancaria o wallet de criptomonedas
- Disponibilidad de horario confirmada

### El proceso:
1. Aplicación en línea
2. Revisión de documentos
3. Entrevista inicial
4. Evaluación de habilidades
5. Decisión de admisión

---

## Etapa 2: Capacitación Inicial

**Preparándote para el éxito**

Esta es la etapa donde te encuentras ahora:

- Curso "Introducción a LoVirtual" (este curso)
- Evaluaciones de conocimiento
- Prácticas supervisadas
- Desarrollo de habilidades básicas

**Duración:** 1-2 semanas

### Lo que aprenderás:
- Cultura organizacional
- Herramientas esenciales
- Protocolos de comunicación
- Estándares de calidad

---

## Etapa 3: Período de Práctica

**Manos a la obra con supervisión**

- Tareas reales con supervisión cercana
- Feedback constante y correcciones
- Adaptación al ritmo de trabajo
- Construcción de confianza

**Duración:** 1-2 semanas

---

## Etapa 4: Asignación a Cliente

**Tu momento ha llegado**

- Presentación formal al cliente
- Establecimiento de dinámica de trabajo
- Período de ajuste (primeras 2 semanas)
- Inicio de trabajo autónomo

### Primeros 30 días:
- Enfoque en aprender el negocio del cliente
- Comunicación frecuente con tu líder
- Documentación de procesos

---

## Etapa 5: Desarrollo Continuo

**El crecimiento nunca para**

- Evaluaciones periódicas de desempeño
- Capacitaciones adicionales
- Oportunidades de ascenso
- Especialización en áreas de interés

---

## Claves del Éxito en Cada Etapa

| Etapa | Clave Principal |
|-------|-----------------|
| Aplicación | Documentación completa y honesta |
| Capacitación | Atención y participación activa |
| Práctica | Apertura al feedback |
| Asignación | Comunicación proactiva |
| Desarrollo | Actitud de mejora continua |

---

> *Cada etapa es una oportunidad de demostrar tu valor. Aprovéchalas al máximo.*`
          }
        ],
        sprint: {
          title: "Sprint: Tu Carrera",
          description: "Demuestra tu comprensión de la escalera de jerarquía y el journey del asistente",
          tasks: [
            {
              id: "task-3-1",
              question: "Describe los 5 niveles de la escalera de jerarquía de LoVirtual y qué se necesita para avanzar de Asistente Virtual a Asistente Ejecutivo."
            },
            {
              id: "task-3-2",
              question: "En qué etapa del camino te encuentras actualmente y qué acciones tomarás para destacar en la siguiente etapa."
            }
          ]
        },
        exam: {
          title: "Examen: Tu Carrera",
          description: "Evalúa tus conocimientos sobre la carrera en LoVirtual",
          passingScore: 70,
          questions: [
            {
              id: "q1",
              question: "¿Cuál es el primer nivel en la escalera de jerarquía de LoVirtual?",
              options: ["Asistente Ejecutivo", "Asistente Virtual", "Asistente Mentor", "Líder de Grupo"],
              correctAnswer: 1
            },
            {
              id: "q2",
              question: "¿Cuántos niveles tiene la escalera de jerarquía?",
              options: ["3 niveles", "4 niveles", "5 niveles", "6 niveles"],
              correctAnswer: 2
            },
            {
              id: "q3",
              question: "¿Cuál es la duración típica de la etapa de capacitación inicial?",
              options: ["1 día", "1-2 semanas", "1 mes", "3 meses"],
              correctAnswer: 1
            },
            {
              id: "q4",
              question: "¿Qué nivel implica la supervisión de un grupo de asistentes?",
              options: ["Asistente Ejecutivo", "Asistente Mentor", "Líder de Grupo", "Administración"],
              correctAnswer: 2
            },
            {
              id: "q5",
              question: "¿Cuál NO es un factor de ascenso en LoVirtual?",
              options: ["Desempeño", "Antigüedad automática", "Actitud", "Desarrollo continuo"],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: "mod-perfil-profesional",
        title: "El Perfil Profesional",
        description: "Define el perfil ideal del asistente virtual y los departamentos de apoyo",
        theory: [
          {
            id: "lesson-9",
            title: "Departamentos de Apoyo",
            content: `# Departamentos de Apoyo: Quién Te Acompaña

## Nunca Estás Solo en LoVirtual

A lo largo de tu journey, diferentes departamentos estarán a tu lado para apoyarte, guiarte y asegurar tu éxito.

---

## Recursos Humanos (RRHH)

**Tu compañero en la etapa de candidato**

RRHH es tu primer punto de contacto y quien te acompaña durante toda la etapa inicial.

### Funciones principales contigo:

| Área | Apoyo que recibes |
|------|-------------------|
| Reclutamiento | Proceso de selección |
| Onboarding | Inducción y bienvenida |
| Capacitación | Seguimiento de tu progreso |
| Documentación | Gestión de contratos |
| Bienestar | Apoyo personal |

### Cuándo contactar a RRHH:
- ✅ Dudas sobre el proceso de selección
- ✅ Problemas con documentación
- ✅ Consultas sobre beneficios
- ✅ Situaciones personales que afecten tu trabajo
- ✅ Conflictos laborales

---

## Administración

**Tu apoyo operativo diario**

Una vez asignado a un cliente, Administración se convierte en tu punto de contacto principal.

### Funciones principales:
- Coordinación de asignaciones
- Resolución de problemas operativos
- Comunicación con el cliente
- Supervisión de calidad

### Cuándo contactar a Administración:
- ✅ Problemas con tareas del cliente
- ✅ Necesitas cambio de horario
- ✅ Conflictos con el cliente
- ✅ Dudas sobre procesos

---

## Soporte Técnico

**Tu aliado tecnológico**

Cuando la tecnología falla, Soporte Técnico está para ayudarte.

### Servicios que ofrecen:
- Configuración de herramientas
- Solución de problemas de conectividad
- Acceso a plataformas
- Capacitación técnica

### Cuándo contactar a Soporte:
- ✅ Problemas con Zoho o herramientas
- ✅ Fallas de VPN
- ✅ Configuración de equipos
- ✅ Dudas técnicas

---

## Finanzas

**Tu tranquilidad económica**

El departamento de Finanzas asegura que recibas tu compensación correctamente.

### Funciones:
- Procesamiento de nómina
- Gestión de pagos
- Caja de ahorros
- Caja chica

### Cuándo contactar a Finanzas:
- ✅ Dudas sobre tu pago
- ✅ Solicitud de adelantos
- ✅ Problemas con la cuenta de pago

---

## Canales de Comunicación por Departamento

| Departamento | Canal Principal |
|--------------|-----------------|
| RRHH | WhatsApp / Email |
| Administración | WhatsApp / Zoho Cliq |
| Soporte Técnico | Zoho Cliq |
| Finanzas | Email oficial |

---

> *Cada departamento existe para apoyarte. No dudes en comunicarte cuando lo necesites.*`
          },
          {
            id: "lesson-10",
            title: "El Perfil del Asistente Ideal",
            content: `# El Perfil del Asistente Virtual Ideal

## ¿Qué Significa Ser un Asistente Virtual?

Antes de continuar, es fundamental que comprendas qué define a un excelente Asistente Virtual (AV) y cómo puedes desarrollar ese perfil.

---

## ✅ Qué ES un Asistente Virtual

Un Asistente Virtual profesional es:

- **Un profesional independiente** que trabaja remotamente
- **Un solucionador de problemas** que anticipa necesidades
- **Un comunicador efectivo** que mantiene al cliente informado
- **Un gestor del tiempo** que cumple plazos consistentemente
- **Un aprendiz continuo** que mejora constantemente

---

## ❌ Qué NO ES un Asistente Virtual

Ser AV **no significa**:

- Estar disponible 24/7 sin límites
- Hacer cualquier tarea sin cuestionamiento
- Trabajar sin estructura ni organización
- Esperar que te digan cada paso a seguir
- Limitarte a cumplir órdenes

---

## Las 5 Competencias Clave

### 1. Comunicación Excepcional
- Claridad en mensajes escritos y verbales
- Capacidad de síntesis
- Escucha activa
- Adaptación al estilo del cliente

### 2. Organización y Gestión del Tiempo
- Priorización efectiva de tareas
- Cumplimiento de deadlines
- Manejo de múltiples proyectos
- Uso eficiente de herramientas

### 3. Proactividad
- Anticipar necesidades del cliente
- Proponer mejoras sin que te lo pidan
- Resolver problemas antes de escalarlos
- Tomar iniciativa responsablemente

### 4. Adaptabilidad
- Aprender nuevas herramientas rápidamente
- Ajustarse a diferentes estilos de trabajo
- Manejar cambios con flexibilidad
- Mantener la calma bajo presión

### 5. Profesionalismo
- Confidencialidad absoluta
- Puntualidad en todo
- Presentación impecable (incluso virtual)
- Ética de trabajo sólida

---

## Tu Compromiso como AV de LoVirtual

Al formar parte de nuestro equipo, te comprometes a:

1. **Representar los valores de la organización** en cada interacción
2. **Mantener estándares de calidad** superiores
3. **Comunicarte proactivamente** con tu equipo y clientes
4. **Buscar la mejora continua** en todo lo que hagas
5. **Apoyar a tus compañeros** cuando lo necesiten

---

> **Recuerda**: Ser un Asistente Virtual de LoVirtual no es solo un trabajo, es una forma de vida profesional.`
          },
          {
            id: "lesson-11",
            title: "Nuestros Valores en Acción",
            content: `# Quiénes Somos y Nuestros Valores

## Nuestra Historia y Propósito

LoVirtual nació en 2021 con una misión clara: **conectar talento humano con oportunidades de trabajo remoto de forma confiable**. No somos simplemente un servicio de apoyo administrativo, somos **aliados estratégicos** de nuestros clientes.

---

## Nuestro Modelo de Trabajo

Utilizamos tecnología de punta para optimizar cada proceso:

| Herramienta | Uso Principal |
|-------------|---------------|
| **Zoho** | Suite de productividad y gestión |
| **QuickBooks** | Gestión contable y financiera |
| **VoIP** | Comunicaciones telefónicas profesionales |

Sin embargo, lo que nos diferencia es nuestro **enfoque humano**. La tecnología es solo un medio; las personas son el centro de todo lo que hacemos.

---

## Nuestros 5 Valores Innegociables

Estos valores definen quiénes somos y cómo actuamos:

### 1. Transparencia

> *Decir siempre la verdad.*

- Comunicación honesta con clientes y equipo
- Reportes claros y precisos
- Admitir errores y aprender de ellos

**En la práctica:** Si cometes un error, repórtalo inmediatamente en lugar de ocultarlo.

### 2. Responsabilidad

> *Cumplir lo que prometemos.*

- Entregar a tiempo, siempre
- Asumir las consecuencias de nuestras acciones
- No dar excusas, dar soluciones

**En la práctica:** Si no puedes cumplir un plazo, comunícalo con anticipación y propón alternativas.

### 3. Excelencia

> *Hacer las cosas bien desde la primera vez.*

- Atención al detalle en cada tarea
- Buscar superar las expectativas
- Mejora continua constante

**En la práctica:** Revisa tu trabajo antes de enviarlo. Pregúntate: "¿Esto representa lo mejor que puedo hacer?"

### 4. Compromiso

> *Estar presentes, física y mentalmente.*

- Dedicación completa durante tu jornada
- Involucramiento con el éxito del cliente
- Lealtad a la organización

**En la práctica:** Durante tu horario de trabajo, enfócate 100% en tus tareas. Evita distracciones.

### 5. Colaboración

> *Juntos llegamos más lejos.*

- Apoyo entre compañeros
- Compartir conocimientos
- Celebrar éxitos del equipo

**En la práctica:** Si un compañero necesita ayuda y puedes dársela, hazlo.

---

## Viviendo los Valores

Estos valores no son solo palabras en un documento. Son la guía de cada decisión, cada interacción y cada entrega que hacemos.

> *Los valores no se memorizan, se viven.*`
          }
        ],
        sprint: {
          title: "Sprint: El Perfil Profesional",
          description: "Demuestra tu comprensión del perfil ideal y los valores",
          tasks: [
            {
              id: "task-4-1",
              question: "Describe las 5 competencias clave de un Asistente Virtual ideal y da un ejemplo de cómo demostrarías cada una en tu trabajo."
            },
            {
              id: "task-4-2",
              question: "Elige 2 de los 5 valores innegociables de LoVirtual y explica cómo los aplicarías en una situación laboral real."
            }
          ]
        },
        exam: {
          title: "Examen: El Perfil Profesional",
          description: "Evalúa tus conocimientos sobre el perfil profesional",
          passingScore: 70,
          questions: [
            {
              id: "q1",
              question: "¿Cuál es el primer departamento de contacto durante la etapa de candidato?",
              options: ["Administración", "Finanzas", "Recursos Humanos", "Soporte Técnico"],
              correctAnswer: 2
            },
            {
              id: "q2",
              question: "¿Cuántas competencias clave debe tener un Asistente Virtual ideal?",
              options: ["3", "4", "5", "6"],
              correctAnswer: 2
            },
            {
              id: "q3",
              question: "¿Cuál de estos NO es uno de los 5 valores innegociables de LoVirtual?",
              options: ["Transparencia", "Competitividad", "Responsabilidad", "Excelencia"],
              correctAnswer: 1
            },
            {
              id: "q4",
              question: "Según el perfil ideal, un AV debe ser:",
              options: ["Disponible 24/7", "Proactivo y anticipar necesidades", "Esperar instrucciones siempre", "Trabajar sin estructura"],
              correctAnswer: 1
            },
            {
              id: "q5",
              question: "¿A quién debes contactar si tienes problemas con herramientas como Zoho?",
              options: ["RRHH", "Finanzas", "Soporte Técnico", "Administración"],
              correctAnswer: 2
            }
          ]
        }
      },
      {
        id: "mod-procesos-normas",
        title: "Procesos y Normas Operacionales",
        description: "Aprende los protocolos, canales de comunicación y normas operativas",
        theory: [
          {
            id: "lesson-12",
            title: "Canales de Comunicación",
            content: `# Canales de Comunicación

## Herramientas Obligatorias de Comunicación

Para funcionar eficientemente como equipo, es fundamental dominar y mantener activas las siguientes herramientas:

---

## WhatsApp Desktop

- **Debe estar siempre instalado y operativo** en tu computadora
- Es el canal principal de comunicación rápida
- Revisarlo constantemente durante tu jornada

### Uso correcto:
- Mensajes breves y claros
- Respuesta rápida (máximo 15 minutos en horario laboral)
- Grupos de trabajo organizados

---

## Correo Corporativo

- Tu email profesional @lovirtual.net
- Para comunicaciones formales y documentación
- Revisar al inicio y cierre de cada jornada

### Buenas prácticas:
- Asunto claro y descriptivo
- Cuerpo del mensaje estructurado
- Firma profesional siempre

---

## Zoom / Google Meet

- Para reuniones virtuales con clientes y equipo
- Mantener cámara y micrófono en buen estado
- Tener un ambiente profesional para videollamadas

### Preparación para reuniones:
- Verificar conexión 5 minutos antes
- Fondo limpio o profesional
- Iluminación adecuada

---

## Plataformas de Gestión

| Plataforma | Función |
|------------|---------|
| **Zoho People** | Registro de asistencia (después de 2 semanas con cliente) |
| **Mi trabajo virtual** | Nueva intranet para gestión oficial |

---

## Zoho Cliq

- Mensajería interna del equipo
- Canales por departamento y proyecto
- Comunicación rápida con compañeros

---

## Reglas de Comunicación

### Lo que SÍ debes hacer:
- ✅ Responder en tiempo oportuno
- ✅ Ser claro y conciso
- ✅ Usar el canal apropiado para cada tipo de mensaje
- ✅ Mantener un tono profesional

### Lo que NO debes hacer:
- ❌ Ignorar mensajes
- ❌ Usar lenguaje informal excesivo
- ❌ Enviar audios largos sin permiso
- ❌ Compartir información confidencial

---

> *La comunicación efectiva es la base del trabajo remoto exitoso.*`
          },
          {
            id: "lesson-13",
            title: "Tipos de Asignación de Clientes",
            content: `# Tipos de Asignación de Clientes

## El Cliente: Centro de Nuestro Trabajo

El cliente es la razón de ser de nuestro trabajo. Para garantizar que cada cliente reciba la dedicación que merece, clasificamos las asignaciones de manera clara y estructurada.

---

## Clasificación de Asignaciones

### 1. Cliente Completo

**8 horas de trabajo al día** (con 1 hora de descanso incluida)

- **Dedicación exclusiva** a un solo cliente
- Jornada completa de trabajo
- Mayor profundidad en las tareas y proyectos
- Relación más estrecha con el cliente

**Ejemplo de jornada:**

| Horario | Actividad |
|---------|-----------|
| 8:00 AM - 12:00 PM | Trabajo continuo |
| 12:00 PM - 1:00 PM | Descanso/Almuerzo |
| 1:00 PM - 5:00 PM | Trabajo continuo |

---

### 2. Medio Cliente

**4 horas de trabajo al día**

- Jornada parcial con un cliente
- Posibilidad de tener otro medio cliente
- Tareas más específicas y delimitadas

**Beneficios:**
- Diversidad de experiencias
- Flexibilidad de horarios
- Desarrollo de múltiples habilidades

---

## Expectativas por Tipo de Asignación

| Aspecto | Cliente Completo | Medio Cliente |
|---------|------------------|---------------|
| Dedicación | Exclusiva | Compartida |
| Profundidad | Alta | Media |
| Flexibilidad | Menor | Mayor |
| Comunicación | Muy frecuente | Frecuente |

---

## Tu Primera Asignación

Como nuevo asistente, tu primera asignación probablemente será:

- **Medio cliente** para adaptación inicial, o
- **Cliente completo** si hay alta demanda

### Factores que determinan tu asignación:
1. Disponibilidad de clientes
2. Tus habilidades y experiencia
3. Horario disponible
4. Resultados en la capacitación

---

## Compromiso con el Cliente

Sin importar el tipo de asignación:

- **100% de enfoque** durante las horas asignadas
- **Comunicación proactiva** sobre avances y bloqueos
- **Calidad consistente** en cada entrega
- **Confidencialidad** absoluta

---

> *Cada cliente merece lo mejor de ti, sin importar cuántas horas trabajes con ellos.*`
          },
          {
            id: "lesson-14",
            title: "Protocolo de Primer Contacto",
            content: `# Protocolo de Primer Contacto

## La Importancia del Primer Día

> *El primer día es decisivo.*

La primera impresión que generes en tu cliente marcará el tono de toda la relación profesional. Por eso, existe un protocolo estructurado para el primer contacto.

---

## Elementos del Mensaje de Presentación

Tu mensaje inicial debe incluir:

1. **Saludo cordial y profesional**
2. **Tu nombre completo**
3. **Tu cargo** (Asistente Virtual de LoVirtual)
4. **Frase de disposición** que demuestre tu compromiso

### Ejemplo de Mensaje de Presentación:

> *"Buenos días, mi nombre es [Nombre Completo], soy su asistente virtual asignado por LoVirtual. Estoy aquí para facilitarle su día y apoyarle en todas las tareas que necesite.*
>
> *Si gusta, sería ideal coordinar una reunión para establecer la dinámica de trabajo y conocer sus prioridades.*
>
> *Quedo a sus órdenes."*

---

## Primeros Pasos con el Cliente

### Día 1: Presentación y Reconocimiento

1. **Enviar mensaje de presentación**
2. **Coordinar reunión inicial** (15-30 minutos)
3. **Conocer las expectativas** del cliente
4. **Identificar tareas prioritarias**

### Primera Semana: Adaptación

- Aprender los procesos del cliente
- Documentar todo lo que aprendas
- Hacer preguntas cuando sea necesario
- Comunicar progresos diariamente

### Primer Mes: Consolidación

- Establecer rutinas de trabajo
- Proponer mejoras cuando las identifiques
- Demostrar valor consistentemente

---

## Qué Preguntar en la Primera Reunión

1. ¿Cuáles son sus prioridades principales?
2. ¿Qué tareas le gustaría delegar primero?
3. ¿Cuál es su forma preferida de comunicación?
4. ¿Hay horarios específicos para reuniones?
5. ¿Qué herramientas utiliza actualmente?

---

## Errores a Evitar

- ❌ Ser demasiado informal en el primer contacto
- ❌ Prometer más de lo que puedes entregar
- ❌ No tomar notas de lo que el cliente dice
- ❌ Asumir en lugar de preguntar
- ❌ Esperar que el cliente te diga todo

---

> *Los primeros 30 días definen los siguientes 12 meses de relación con tu cliente.*`
          },
          {
            id: "lesson-15",
            title: "Reportes y Comunicación Diaria",
            content: `# Reportes y Comunicación Diaria

## La Importancia de los Reportes

Los reportes son tu forma de mantener visibilidad sobre tu trabajo. En el trabajo remoto, **lo que no se reporta, no existe**.

---

## Canales de Reporte

### WhatsApp

- Para comunicación rápida y reportes diarios
- Grupo de trabajo del equipo
- Comunicación con líder de grupo

---

## Formato de Reportes

### Reporte de Entrada

> *"Buenos días, iniciando labores 8:00 AM. Listo/a para comenzar la jornada."*

### Reporte de Salida

> *"Finalizando jornada 4:00 PM. Tareas completadas: [lista de tareas]. Pendientes para mañana: [si aplica]. Saludos."*

### Reporte de Pausas

> *"Iniciando almuerzo 12:00 PM."*
>
> *"Regresando de almuerzo 1:00 PM."*

---

## Reporte de Actividades

Detallar específicamente qué se realizó:

| Tarea | Cantidad/Detalle |
|-------|------------------|
| Registros procesados | 120 registros completados |
| Correos respondidos | 45 emails gestionados |
| Llamadas realizadas | 15 llamadas de seguimiento |

---

## Frecuencia de Reportes

| Tipo de Reporte | Frecuencia |
|-----------------|------------|
| Entrada | Diario (al iniciar) |
| Pausas | Cada vez que ocurran |
| Salida | Diario (al finalizar) |
| Semanal | Viernes (resumen) |

---

## Plataformas de Registro

### Zoho People
- Registro de asistencia oficial
- Se activa después de 2 semanas con cliente
- Marcar entrada y salida diariamente

### Mi Trabajo Virtual
- Nueva plataforma de gestión
- Reportes de actividades
- Seguimiento de proyectos

---

## Buenas Prácticas

- ✅ Reportar siempre a tiempo
- ✅ Ser específico en las tareas realizadas
- ✅ Mencionar bloqueos o problemas
- ✅ Proponer soluciones cuando reportes problemas

---

> *Un buen reporte demuestra profesionalismo y genera confianza.*`
          },
          {
            id: "lesson-16",
            title: "Normas, Horarios y Salarios",
            content: `# Normas, Horarios y Salarios

## Jornada de Trabajo

La jornada estándar depende de tu contrato:

| Tipo | Duración | Descripción |
|------|----------|-------------|
| **Completa** | 8 horas | Jornada full-time con descanso |
| **Media** | 4 horas | Jornada part-time |

---

## Puntualidad Estricta

- ⏰ **Inicio puntual**: Conectarte exactamente a la hora acordada
- ⏰ **Fin puntual**: Completar tu jornada completa
- ⏰ **Pausas controladas**: Respetar tiempos de descanso

### Tolerancia
- **5 minutos** de gracia para conectarte
- Más de 5 minutos = llegada tarde reportable

---

## Estructura Salarial

El salario está vinculado a dos factores principales:

### 1. Tipo de Asignación
- Cliente completo vs. medio cliente
- Tareas especializadas pueden tener bonificaciones

### 2. Nivel Jerárquico

| Nivel | Posición |
|-------|----------|
| 1 | Asistente Virtual |
| 2 | Asistente Ejecutivo |
| 3 | Asistente Mentor |
| 4 | Líder de Grupo |
| 5 | Administración |

---

## Gestión de Pagos

### Plataformas Oficiales de Pago

Los pagos se realizan exclusivamente a través de:

- **Binance** (criptomonedas)
- **Ontop** (dólares directos)

### Regla Crítica de Pagos

> ⚠️ **NUNCA gestionar cobros directamente con el cliente.**

- ❌ No solicitar adelantos al cliente
- ❌ No negociar pagos fuera de LoVirtual
- ❌ No aceptar propuestas de pago directo

Esta es una **obligación administrativa** que debe gestionarse **internamente** a través de los canales oficiales de la empresa.

---

## Frecuencia de Pago

- Pagos **quincenales**
- Fechas fijas de pago
- Notificación previa de depósito

---

## Normas de Conducta

### Obligatorias:
- ✅ Mantener confidencialidad
- ✅ Cumplir horarios acordados
- ✅ Reportar ausencias con anticipación
- ✅ Mantener comunicación profesional

### Prohibidas:
- ❌ Compartir información del cliente
- ❌ Trabajar para competidores
- ❌ Gestionar pagos directos
- ❌ Abandonar tareas sin aviso

---

> *Las normas existen para protegerte a ti y a la organización.*`
          },
          {
            id: "lesson-17",
            title: "Sistema de Consecuencias",
            content: `# Sistema de Consecuencias

## El Incumplimiento Tiene Consecuencias

El incumplimiento de las normas tiene consecuencias claras y progresivas. Conocerlas te ayudará a evitarlas.

---

## Niveles de Sanción

| Nivel | Tipo | Causa Común |
|-------|------|-------------|
| 1 | **Advertencia verbal** | Primera falta leve |
| 2 | **Advertencia escrita** | Reincidencia en faltas leves |
| 3 | **Suspensión temporal** | Faltas moderadas |
| 4 | **Desvinculación** | Faltas graves |

---

## Faltas Leves

- Llegadas tarde ocasionales
- Reportes incompletos
- Respuestas tardías a mensajes
- Errores menores por descuido

**Consecuencia:** Advertencia verbal → Escrita si reincide

---

## Faltas Moderadas

- Ausencia sin aviso previo
- Incumplimiento repetido de entregas
- Actitud poco profesional
- Uso inadecuado de herramientas

**Consecuencia:** Advertencia escrita → Suspensión temporal

---

## Faltas Graves

- Divulgación de información confidencial
- Gestión de pagos directos con cliente
- Abandono del puesto sin aviso
- Fraude o deshonestidad
- Competencia desleal

**Consecuencia:** Desvinculación inmediata

---

## Proceso de Sanciones

1. **Identificación** de la falta
2. **Investigación** de los hechos
3. **Notificación** al colaborador
4. **Oportunidad de respuesta**
5. **Aplicación** de la sanción correspondiente

---

## Tu Derecho a Defensa

Siempre tienes derecho a:

- Conocer de qué se te acusa
- Presentar tu versión de los hechos
- Aportar evidencia a tu favor
- Apelar decisiones si lo consideras justo

---

## Cómo Evitar Sanciones

La mejor forma de evitar sanciones es:

1. **Conocer las normas** (este curso)
2. **Cumplirlas consistentemente**
3. **Comunicar problemas** antes de que escalen
4. **Pedir ayuda** cuando la necesites
5. **Actuar con integridad** siempre

---

## Cierre del Curso

¡Felicitaciones por llegar hasta aquí! Has completado el curso de **Introducción a LoVirtual**. Ahora conoces:

- ✅ Nuestra cultura e historia
- ✅ Los beneficios de ser parte del equipo
- ✅ Tu camino de crecimiento profesional
- ✅ El perfil ideal del asistente virtual
- ✅ Los procesos y normas operacionales

> *"Delega, crece y lidera."* - Este es el espíritu de LoVirtual.

**¡Bienvenido oficialmente a la familia LoVirtual!**`
          }
        ],
        sprint: {
          title: "Sprint: Procesos y Normas",
          description: "Demuestra tu comprensión de los procesos y normas operacionales",
          tasks: [
            {
              id: "task-5-1",
              question: "Escribe un ejemplo de mensaje de presentación para tu primer contacto con un cliente, siguiendo el protocolo aprendido."
            },
            {
              id: "task-5-2",
              question: "Describe el formato correcto de los reportes diarios (entrada, pausas, salida) y por qué son importantes en el trabajo remoto."
            }
          ]
        },
        exam: {
          title: "Examen Final: Procesos y Normas",
          description: "Evalúa tus conocimientos sobre procesos y normas operacionales",
          passingScore: 70,
          questions: [
            {
              id: "q1",
              question: "¿Cuál es el canal principal de comunicación rápida en LoVirtual?",
              options: ["Email", "WhatsApp Desktop", "Telegram", "Slack"],
              correctAnswer: 1
            },
            {
              id: "q2",
              question: "¿Cuántas horas tiene una jornada de Cliente Completo?",
              options: ["4 horas", "6 horas", "8 horas", "10 horas"],
              correctAnswer: 2
            },
            {
              id: "q3",
              question: "¿Cuál es una falta GRAVE que puede causar desvinculación inmediata?",
              options: ["Llegar 5 minutos tarde", "Reporte incompleto", "Gestionar pagos directos con el cliente", "Error menor en una tarea"],
              correctAnswer: 2
            },
            {
              id: "q4",
              question: "¿Con qué frecuencia se realizan los pagos?",
              options: ["Semanalmente", "Quincenalmente", "Mensualmente", "Diariamente"],
              correctAnswer: 1
            },
            {
              id: "q5",
              question: "¿Qué debe incluir el mensaje de presentación al cliente?",
              options: ["Solo tu nombre", "Nombre, cargo y frase de disposición", "Solo el horario de trabajo", "Tu información bancaria"],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  }
];
