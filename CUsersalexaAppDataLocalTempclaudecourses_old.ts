import { CourseData } from "@/types/course";

export const coursesData: CourseData[] = [
  {
    id: "intro-lovirtual",
    title: "Introducción a LoVirtual",
    slug: "introduccion-lovirtual",
    description: "El primer paso de tu carrera. Conoce nuestra cultura, historia y las bases para ser un Asistente Virtual exitoso.",
    duration: "2 Semanas",
    totalLessons: "15 Lecciones",
    icon: "Rocket",
    color: "from-blue-500 to-cyan-500",
    certificate: {
      title: "Certificado de Introducción a LoVirtual",
      description: "Ha completado satisfactoriamente el curso de Introducción a LoVirtual"
    },
    modules: [
      {
        id: "mod-intro-1",
        title: "Fundamentos del Asistente Virtual",
        description: "Comprende el ecosistema del trabajo remoto y el rol estratégico del AV",
        theory: [
          {
            id: "lesson-intro-1-1",
            title: "La Revolución del Trabajo Remoto",
            content: `# La Revolución del Trabajo Remoto

## El Nuevo Paradigma Laboral

El mundo del trabajo ha experimentado una transformación sin precedentes. Lo que antes era una opción minoritaria, hoy se ha convertido en la norma para millones de profesionales alrededor del mundo.

### Estadísticas que Importan

- **73%** de los equipos tendrán trabajadores remotos para 2028 (Upwork)
- **77%** de los trabajadores remotos reportan mayor productividad
- El mercado de asistentes virtuales crecerá **25.7% anual** hasta 2030
- Las empresas ahorran en promedio **$11,000 USD** por empleado remoto al año

## ¿Qué es un Asistente Virtual?

Un Asistente Virtual (AV) es un profesional independiente que proporciona servicios administrativos, técnicos, creativos o de soporte a clientes desde una ubicación remota.

### Diferencias con un Empleado Tradicional

| Aspecto | Empleado Tradicional | Asistente Virtual |
|---------|---------------------|-------------------|
| Ubicación | Oficina física | Remoto |
| Horario | Fijo | Flexible |
| Contratación | Nómina | Por proyecto/horas |
| Herramientas | Proporcionadas | Propias |
| Clientes | Un empleador | Múltiples clientes |

## El Mercado Actual

### Industrias que más contratan AVs:
1. **E-commerce y Retail** - Gestión de pedidos, atención al cliente
2. **Marketing Digital** - Gestión de redes, email marketing
3. **Bienes Raíces** - Coordinación de citas, seguimiento de leads
4. **Coaching y Consultoría** - Gestión de agenda, facturación
5. **Startups y Emprendedores** - Soporte integral

### Rangos de Tarifas Globales

- **Nivel Entrada**: $5-15 USD/hora
- **Nivel Intermedio**: $15-30 USD/hora
- **Nivel Especializado**: $30-75 USD/hora
- **Nivel Ejecutivo**: $75-150+ USD/hora

## Tu Oportunidad

Como futuro AV de LoVirtual, tendrás acceso a:

1. **Formación Continua**: Cursos actualizados constantemente
2. **Red de Clientes**: Empresas verificadas que buscan talento
3. **Comunidad de Apoyo**: Miles de AVs compartiendo experiencias
4. **Mentoría**: Acompañamiento de profesionales experimentados

> **Reflexión**: El trabajo remoto no es el futuro, es el presente. La pregunta no es SI deberías convertirte en AV, sino CUÁNDO comenzarás.`
          },
          {
            id: "lesson-intro-1-2",
            title: "Tipos de Asistentes Virtuales",
            content: `# Tipos de Asistentes Virtuales

## Especialización: La Clave del Éxito

En un mercado cada vez más competitivo, la especialización te permite:
- Cobrar tarifas más altas
- Atraer clientes ideales
- Desarrollar expertise profundo
- Diferenciarte de la competencia

## Categorías Principales de AVs

### 1. Asistente Virtual Administrativo

**Servicios típicos:**
- Gestión de correo electrónico (inbox zero)
- Coordinación de calendarios y citas
- Creación de documentos y presentaciones
- Organización de archivos digitales
- Transcripción y toma de notas
- Investigación y recopilación de datos

**Herramientas clave:** Google Workspace, Microsoft 365, Notion, Calendly

**Tarifa promedio:** $12-25 USD/hora

---

### 2. Asistente Virtual de Marketing

**Servicios típicos:**
- Gestión de redes sociales
- Email marketing y automatizaciones
- Creación de contenido
- SEO básico y investigación de keywords
- Gestión de pauta publicitaria
- Análisis de métricas

**Herramientas clave:** Hootsuite, Mailchimp, Canva, Google Analytics, Meta Business Suite

**Tarifa promedio:** $15-35 USD/hora

---

### 3. Asistente Virtual de E-commerce

**Servicios típicos:**
- Gestión de productos (listings, precios, inventario)
- Atención al cliente pre y post venta
- Procesamiento de pedidos
- Gestión de devoluciones
- Coordinación con proveedores
- Análisis de ventas

**Herramientas clave:** Shopify, WooCommerce, Amazon Seller Central, Zendesk

**Tarifa promedio:** $12-28 USD/hora

---

### 4. Asistente Virtual Ejecutivo

**Servicios típicos:**
- Gestión integral de agenda ejecutiva
- Coordinación de viajes corporativos
- Preparación de reuniones de directorio
- Gestión de gastos y reportes
- Comunicación con stakeholders
- Proyectos especiales confidenciales

**Herramientas clave:** Expensify, TripIt, Slack, Asana, Zoom

**Tarifa promedio:** $25-50 USD/hora

---

### 5. Asistente Virtual Técnico

**Servicios típicos:**
- Soporte técnico nivel 1
- Gestión de CRM y bases de datos
- Automatización de procesos
- Configuración de herramientas
- Testing de software
- Documentación técnica

**Herramientas clave:** Salesforce, HubSpot, Zapier, Monday.com, Jira

**Tarifa promedio:** $18-40 USD/hora

---

### 6. Asistente Virtual Creativo

**Servicios típicos:**
- Diseño gráfico para redes sociales
- Edición básica de video
- Creación de presentaciones
- Diseño de materiales de marketing
- Branding básico
- Edición de podcasts

**Herramientas clave:** Canva, Adobe Creative Suite, Figma, CapCut, Descript

**Tarifa promedio:** $15-45 USD/hora

## ¿Cómo Elegir tu Especialización?

### Paso 1: Evalúa tu Experiencia
- ¿Qué has hecho antes profesionalmente?
- ¿Qué habilidades ya dominas?

### Paso 2: Identifica tu Interés
- ¿Qué tipo de tareas disfrutas?
- ¿Qué te gustaría aprender más?

### Paso 3: Investiga el Mercado
- ¿Qué tipo de AVs tienen más demanda?
- ¿Dónde hay menos competencia?

### Paso 4: Comienza y Ajusta
- Empieza con servicios generales
- Especialízate según descubras tu fortaleza

> **Consejo Pro**: No necesitas elegir una sola especialización de inmediato. Muchos AVs exitosos combinan 2-3 áreas complementarias.`
          },
          {
            id: "lesson-intro-1-3",
            title: "Mindset del Profesional Remoto",
            content: `# Mindset del Profesional Remoto

## La Mentalidad lo es Todo

El 90% del éxito como AV no depende de tus habilidades técnicas, sino de tu mentalidad. Puedes aprender cualquier herramienta, pero desarrollar el mindset correcto requiere trabajo consciente.

## Los 7 Pilares del Mindset Exitoso

### 1. Mentalidad de Dueño, No de Empleado

**Empleado piensa:** "Hago lo que me piden"
**Dueño piensa:** "¿Cómo puedo agregar más valor?"

Como AV, eres el CEO de tu propio negocio de servicios. Esto significa:
- Tomar decisiones estratégicas sobre tu carrera
- Invertir en tu desarrollo profesional
- Buscar activamente oportunidades de crecimiento
- Asumir responsabilidad total por tus resultados

---

### 2. Proactividad sobre Reactividad

**Reactivo:** Espera instrucciones para cada tarea
**Proactivo:** Anticipa necesidades y propone soluciones

**Ejemplo práctico:**
- ❌ Reactivo: "El cliente no me ha dicho qué hacer"
- ✅ Proactivo: "Noté que su bandeja tiene emails sin responder, ¿le gustaría que los organice por prioridad?"

---

### 3. Comunicación Transparente

La distancia física requiere comunicación excepcional:

**Las 3 Cs de la Comunicación Remota:**
1. **Clara**: Sin ambigüedades ni suposiciones
2. **Concisa**: Directa al punto, respetando el tiempo
3. **Constante**: Updates regulares sin que te los pidan

**Regla de Oro:** Sobre-comunicar siempre es mejor que sub-comunicar en trabajo remoto.

---

### 4. Autodisciplina Radical

Sin un jefe mirándote, necesitas:

**Estructura tu día:**
- Horario de inicio y fin definido
- Bloques de trabajo enfocado
- Pausas programadas
- Ritual de cierre del día

**Elimina distracciones:**
- Espacio de trabajo dedicado
- Notificaciones desactivadas durante deep work
- Herramientas de bloqueo (Freedom, Cold Turkey)

---

### 5. Resiliencia ante la Incertidumbre

El trabajo freelance incluye:
- Meses de muchos clientes y meses lentos
- Clientes que cancelan sin aviso
- Proyectos que cambian de alcance
- Pagos que se retrasan

**Cómo construir resiliencia:**
- Fondo de emergencia (3-6 meses de gastos)
- Diversificación de clientes (nunca más del 40% de ingresos de uno solo)
- Habilidades transferibles
- Red de apoyo profesional

---

### 6. Aprendizaje Continuo

**El AV que deja de aprender, deja de crecer:**

- Dedica mínimo 5 horas/semana a aprendizaje
- Sigue tendencias de tu industria
- Aprende una herramienta nueva cada trimestre
- Busca feedback activamente

**Recursos recomendados:**
- Cursos de LoVirtual (obviamente 😉)
- YouTube para tutoriales técnicos
- Podcasts de productividad
- Comunidades de AVs

---

### 7. Mentalidad de Servicio Genuino

Tu éxito está directamente ligado al éxito de tus clientes.

**Preguntas que debes hacerte:**
- ¿Cómo puedo hacer la vida de mi cliente más fácil?
- ¿Qué problema puedo resolver que no me han pedido?
- ¿Cómo puedo superar las expectativas?

> **Verdad Incómoda:** Los AVs que ven su trabajo solo como "tareas a completar" nunca destacan. Los que ven cada cliente como un partnership a largo plazo, construyen carreras extraordinarias.

## Ejercicio de Reflexión

Califica del 1-10 tu nivel actual en cada pilar:

1. Mentalidad de dueño: ___
2. Proactividad: ___
3. Comunicación: ___
4. Autodisciplina: ___
5. Resiliencia: ___
6. Aprendizaje continuo: ___
7. Mentalidad de servicio: ___

Identifica los 2 pilares con menor puntaje. Esos serán tu enfoque de desarrollo.`
          }
        ],
        sprint: {
          id: "sprint-intro-1",
          title: "Sprint: Fundamentos del AV Profesional",
          description: "Demuestra tu comprensión del rol y desarrolla tu visión profesional",
          tasks: [
            {
              id: "task-intro-1-1",
              question: "Análisis de Mercado Personal: Investiga en plataformas como Upwork, Fiverr o LinkedIn y encuentra 3 perfiles de Asistentes Virtuales exitosos. Para cada uno, analiza: (1) Su especialización, (2) Sus tarifas, (3) Qué los hace destacar, (4) Qué servicios ofrecen. Presenta tu análisis de forma estructurada."
            },
            {
              id: "task-intro-1-2",
              question: "Plan de Especialización: Basándote en tu experiencia previa, intereses y el análisis de mercado, define tu camino de especialización ideal. Responde: (1) ¿Qué tipo de AV quieres ser y por qué?, (2) ¿Qué habilidades ya tienes que te dan ventaja?, (3) ¿Qué habilidades necesitas desarrollar?, (4) ¿Cómo planeas diferenciarte de otros AVs?"
            },
            {
              id: "task-intro-1-3",
              question: "Autoevaluación de Mindset: Completa el ejercicio de los 7 pilares del mindset exitoso con puntuaciones honestas (1-10). Luego, para los 2 pilares con menor puntaje, crea un plan de acción específico con 3 acciones concretas que tomarás en los próximos 30 días para mejorar cada uno."
            }
          ]
        },
        exam: {
          id: "exam-intro-1",
          title: "Evaluación: Fundamentos del Asistente Virtual",
          questions: [
            {
              id: "q-intro-1-1",
              question: "Un cliente te contrata como AV administrativo pero después de 2 semanas, empieza a pedirte tareas de diseño gráfico que no están en tu contrato y para las cuales no tienes experiencia. ¿Cuál es la mejor manera de manejar esta situación?",
              options: [
                "Intentar hacer el diseño aunque no tengas experiencia, para no perder al cliente",
                "Comunicar claramente que eso está fuera del alcance acordado y ofrecer: (a) renegociar términos si quieres aprender, o (b) recomendar un especialista",
                "Ignorar las solicitudes de diseño y solo hacer las tareas administrativas",
                "Terminar la relación laboral inmediatamente porque el cliente no respeta los acuerdos"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-2",
              question: "¿Cuál es la regla más importante sobre la diversificación de ingresos para un Asistente Virtual?",
              options: [
                "Tener exactamente 10 clientes para estar seguro",
                "Trabajar solo con clientes de tu país para evitar complicaciones",
                "Nunca depender de un solo cliente para más del 40% de tus ingresos",
                "Cobrar lo mismo a todos los clientes sin importar el tipo de trabajo"
              ],
              correctAnswer: 2
            },
            {
              id: "q-intro-1-3",
              question: "Un AV con 'mentalidad de dueño' se caracteriza principalmente por:",
              options: [
                "Cobrar las tarifas más altas del mercado",
                "Tomar decisiones estratégicas sobre su carrera y buscar activamente agregar valor",
                "Tener muchos clientes al mismo tiempo",
                "Trabajar más horas que otros AVs"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-4",
              question: "¿Qué significa ser 'proactivo' en el contexto del trabajo remoto?",
              options: [
                "Responder rápidamente cuando el cliente escribe",
                "Anticipar necesidades y proponer soluciones antes de que te las pidan",
                "Enviar reportes diarios de todo lo que hiciste",
                "Estar disponible 24/7 para cualquier solicitud"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-5",
              question: "Según las proyecciones de mercado, el sector de Asistentes Virtuales crecerá aproximadamente:",
              options: [
                "5% anual hasta 2030",
                "10% anual hasta 2030",
                "25.7% anual hasta 2030",
                "50% anual hasta 2030"
              ],
              correctAnswer: 2
            },
            {
              id: "q-intro-1-6",
              question: "Las '3 Cs de la Comunicación Remota' son:",
              options: [
                "Creativa, Consistente, Calmada",
                "Clara, Concisa, Constante",
                "Completa, Correcta, Cordial",
                "Casual, Corta, Continua"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-7",
              question: "¿Cuál es el rango de tarifa promedio para un Asistente Virtual Ejecutivo?",
              options: [
                "$5-15 USD/hora",
                "$12-25 USD/hora",
                "$25-50 USD/hora",
                "$100-200 USD/hora"
              ],
              correctAnswer: 2
            },
            {
              id: "q-intro-1-8",
              question: "Cuando enfrentas un período de pocos clientes, la actitud correcta según el mindset de resiliencia es:",
              options: [
                "Bajar tus tarifas drásticamente para conseguir cualquier trabajo",
                "Usar el tiempo para aprender nuevas habilidades y fortalecer tu marketing personal",
                "Buscar un empleo tradicional porque el freelance no funciona",
                "Esperar pasivamente hasta que lleguen nuevos clientes"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-9",
              question: "¿Por qué se recomienda sobre-comunicar en el trabajo remoto?",
              options: [
                "Para demostrar que estás trabajando muchas horas",
                "Porque la distancia física elimina las señales no verbales y puede generar malentendidos",
                "Para que el cliente no tenga tiempo de pedirte más tareas",
                "Porque los clientes remotos son más exigentes"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-1-10",
              question: "¿Cuál es la recomendación para elegir una especialización como AV nuevo?",
              options: [
                "Elegir inmediatamente el nicho más rentable sin importar tu experiencia",
                "Nunca especializarte para poder tomar cualquier trabajo",
                "Comenzar con servicios generales y especializarte según descubras tus fortalezas",
                "Copiar exactamente lo que hace el AV más exitoso que encuentres"
              ],
              correctAnswer: 2
            }
          ]
        }
      },
      {
        id: "mod-intro-2",
        title: "Tu Espacio y Herramientas de Trabajo",
        description: "Configura tu oficina virtual profesional y domina las herramientas esenciales",
        theory: [
          {
            id: "lesson-intro-2-1",
            title: "Configuración del Home Office Profesional",
            content: `# Configuración del Home Office Profesional

## Tu Espacio de Trabajo = Tu Productividad

El 67% de los trabajadores remotos reportan que la calidad de su espacio de trabajo impacta directamente su productividad y bienestar. No necesitas una oficina lujosa, pero sí un espacio optimizado.

## Elementos Esenciales

### 1. El Espacio Físico

**Requisitos mínimos:**
- Área dedicada exclusivamente al trabajo
- Buena iluminación (preferiblemente natural)
- Ventilación adecuada
- Mínimo de distracciones y ruido

**Configuración ideal:**
- Escritorio de mínimo 120cm x 60cm
- Silla ergonómica con soporte lumbar
- Monitor a la altura de los ojos
- Espacio para moverse

### 2. Equipamiento Tecnológico

**Computadora - Especificaciones mínimas:**
- Procesador: Intel i5 / AMD Ryzen 5 o superior
- RAM: 8GB mínimo (16GB recomendado)
- Almacenamiento: 256GB SSD mínimo
- Sistema operativo actualizado

**Internet - El recurso más crítico:**
- Velocidad mínima: 25 Mbps descarga / 5 Mbps subida
- Conexión estable (preferir cable sobre WiFi)
- Plan de respaldo (hotspot móvil)
- Router de calidad

**Audio y Video:**
- Webcam HD (720p mínimo, 1080p recomendado)
- Micrófono con cancelación de ruido
- Auriculares cómodos para uso prolongado

### 3. Iluminación para Videollamadas

**La regla de la iluminación:**
- Luz frontal: Ilumina tu rostro
- Evitar luz trasera: Genera silueta
- Luz natural: La mejor opción

**Setup económico:**
- Aro de luz ($15-30)
- Posición frente a ventana
- Evitar luces fluorescentes directas

## Ergonomía: Cuida tu Cuerpo

### Posición Correcta
- Pies planos en el suelo
- Rodillas a 90 grados
- Espalda recta con soporte lumbar
- Pantalla a distancia de un brazo
- Parte superior de pantalla a nivel de ojos
- Hombros relajados

### La Regla 20-20-20
Cada 20 minutos:
- Mira algo a 20 pies (6 metros) de distancia
- Durante 20 segundos
- Reduce fatiga visual significativamente

### Pausas Activas
- Cada hora, 5 minutos de movimiento
- Estiramientos de cuello y hombros
- Caminar brevemente

## Ambiente Profesional para Videollamadas

### Tu Fondo Importa

**Evitar:**
- Camas visibles
- Desorden
- Personas pasando
- Televisores encendidos

**Opciones profesionales:**
- Pared limpia con planta o cuadro
- Estantería ordenada
- Fondo virtual de calidad
- Panel divisor

### Checklist Pre-Videollamada
- [ ] Fondo ordenado y profesional
- [ ] Iluminación frontal adecuada
- [ ] Micrófono y cámara probados
- [ ] Notificaciones silenciadas
- [ ] Ambiente silencioso
- [ ] Vestimenta apropiada (sí, también la parte de abajo)

## Presupuesto para Iniciar

### Opción Económica (~$200)
- Escritorio básico: $50
- Silla con respaldo: $60
- Webcam Logitech C270: $25
- Audífonos con micrófono: $30
- Aro de luz básico: $20
- Mejora de internet: $15/mes

### Opción Intermedia (~$500)
- Escritorio ajustable: $150
- Silla ergonómica: $150
- Webcam Logitech C920: $70
- Micrófono USB: $50
- Kit de iluminación: $50
- Soporte de monitor: $30

### Opción Premium (~$1,500+)
- Standing desk eléctrico: $400
- Silla Herman Miller: $500
- Webcam 4K: $150
- Micrófono Yeti: $100
- Kit iluminación profesional: $150
- Segundo monitor: $200

> **Consejo:** Empieza con lo mínimo viable y mejora progresivamente según tus ingresos. Un AV con buen internet y comunicación clara es más valioso que uno con setup caro pero conexión inestable.`
          },
          {
            id: "lesson-intro-2-2",
            title: "Stack de Herramientas Esenciales",
            content: `# Stack de Herramientas Esenciales

## El Kit Digital del AV Profesional

Dominar las herramientas correctas multiplica tu productividad y valor. Esta guía cubre el stack fundamental que todo AV debe conocer.

## 1. Comunicación

### Videollamadas
**Zoom** (Estándar de la industria)
- Versión gratuita: 40 min límite, 100 participantes
- Aprende: Compartir pantalla, breakout rooms, grabación
- Tip: Usa fondos virtuales solo si tu PC lo soporta bien

**Google Meet** (Integrado con Google)
- Gratuito con cuenta Google
- Ideal para clientes que usan Google Workspace
- Más ligero que Zoom

**Microsoft Teams** (Entorno corporativo)
- Integrado con Microsoft 365
- Común en empresas grandes
- Funciones de colaboración avanzadas

### Mensajería Profesional
**Slack** (El más popular)
- Canales por tema/proyecto
- Integraciones con +2,000 apps
- Búsqueda poderosa de historial
- Tip: Configura estados para mostrar disponibilidad

**WhatsApp Business** (Latinoamérica)
- Respuestas rápidas predefinidas
- Etiquetas para organizar chats
- Catálogo de servicios
- Horarios de atención

## 2. Gestión de Proyectos y Tareas

### Para Gestión Personal
**Todoist**
- Simple pero poderoso
- Fechas naturales ("mañana", "próximo lunes")
- Proyectos y etiquetas
- Versión gratuita muy completa

**Notion**
- Todo-en-uno: notas, tareas, wikis, bases de datos
- Plantillas infinitas
- Curva de aprendizaje media
- Ideal para documentar procesos

### Para Gestión con Clientes
**Asana**
- Visual e intuitivo
- Timeline y calendario
- Múltiples vistas (lista, tablero, cronograma)
- Popular en startups

**Trello**
- Sistema Kanban simple
- Muy visual (tableros y tarjetas)
- Fácil de aprender
- Power-ups para funcionalidades extra

**Monday.com**
- Muy personalizable
- Automatizaciones potentes
- Dashboards visuales
- Común en empresas medianas

**ClickUp**
- El más completo (puede ser abrumador)
- Múltiples vistas y funcionalidades
- Documentos integrados
- Buena versión gratuita

## 3. Almacenamiento y Documentos

### Google Workspace (Antes G Suite)
**Gmail**: Email profesional
**Google Drive**: 15GB gratis
**Google Docs**: Documentos colaborativos
**Google Sheets**: Hojas de cálculo
**Google Calendar**: Gestión de agenda

### Microsoft 365
**Outlook**: Email y calendario
**OneDrive**: Almacenamiento en nube
**Word, Excel, PowerPoint**: Suite ofimática
**OneNote**: Notas digitales

### Almacenamiento Extra
**Dropbox**: Simple y confiable
**Box**: Popular en corporativo

## 4. Gestión del Tiempo

### Calendarios y Agenda
**Calendly** (Esencial para AVs)
- Clientes agendan directamente
- Integra con Google/Outlook
- Evita el ping-pong de "¿cuándo puedes?"
- Versión gratuita: 1 tipo de evento

**Cal.com** (Alternativa open source)
- Gratuito y sin límites
- Muy personalizable
- Auto-hospedado opcional

### Tracking de Tiempo
**Toggl Track**
- Simple y preciso
- Reportes por cliente/proyecto
- Versión gratuita completa
- App móvil excelente

**Clockify**
- 100% gratuito
- Funcionalidades similares a Toggl
- Bueno para equipos

## 5. Automatización

### Conexión entre Apps
**Zapier** (El más popular)
- +5,000 integraciones
- 5 zaps gratis
- Automatiza tareas repetitivas

**Make (antes Integromat)**
- Más poderoso que Zapier
- Visual y flexible
- Mejor precio para uso intensivo

### Ejemplos de Automatizaciones Útiles
- Email recibido → Tarea creada en Asana
- Nuevo cliente en Calendly → Registro en Google Sheets
- Factura pagada → Notificación en Slack

## 6. Finanzas y Facturación

**Wave** (Gratuito)
- Facturación ilimitada
- Seguimiento de gastos
- Reportes básicos

**PayPal / Wise**
- Cobros internacionales
- Wise: mejores tasas de cambio
- Esencial para clientes globales

## Domina Antes de Expandir

### Nivel Básico (Primeros 30 días)
1. Gmail + Google Calendar
2. Google Docs + Sheets
3. Zoom
4. Slack o WhatsApp Business
5. Toggl Track

### Nivel Intermedio (30-90 días)
6. Calendly
7. Notion o Todoist
8. Canva
9. Asana o Trello
10. Zapier básico

### Nivel Avanzado (90+ días)
11. Automatizaciones complejas
12. Herramientas específicas del nicho
13. Integraciones personalizadas

> **Regla de Oro**: Es mejor dominar 5 herramientas que conocer superficialmente 20. La maestría en herramientas clave te hace más valioso que el conocimiento básico de muchas.`
          },
          {
            id: "lesson-intro-2-3",
            title: "Seguridad Digital y Protección de Datos",
            content: `# Seguridad Digital y Protección de Datos

## Por Qué la Seguridad es No Negociable

Como AV, manejarás información sensible de tus clientes:
- Credenciales de acceso
- Información financiera
- Datos de clientes de tus clientes
- Estrategias de negocio confidenciales

Una brecha de seguridad puede:
- Destruir tu reputación profesional
- Tener consecuencias legales
- Causar pérdidas financieras a tus clientes
- Terminar tu carrera como AV

## Fundamentos de Seguridad Digital

### 1. Contraseñas Seguras

**Características de una contraseña fuerte:**
- Mínimo 12 caracteres
- Combina mayúsculas, minúsculas, números y símbolos
- No contiene información personal
- Única para cada cuenta

**Ejemplo:**
- ❌ Débil: "password123"
- ❌ Débil: "MariaTorres1990"
- ✅ Fuerte: "K9$mP2#xL5&nQ8w"

### Gestores de Contraseñas (Obligatorio)

**1Password** (Recomendado)
- $36/año personal
- Compartir contraseñas con clientes de forma segura
- Watchtower: alerta de brechas

**Bitwarden** (Gratuito)
- Open source
- Casi todas las funciones gratis
- Auto-hospedable

**LastPass** (Popular)
- Versión gratuita limitada
- Familiar para muchos clientes

### 2. Autenticación de Dos Factores (2FA)

**Actívalo en TODAS las cuentas importantes:**
- Email principal
- Cuentas bancarias
- Redes sociales
- Herramientas de trabajo
- Gestor de contraseñas

**Apps de 2FA recomendadas:**
- Google Authenticator (simple)
- Authy (backup en nube)
- Microsoft Authenticator

**Nunca uses SMS como 2FA primario** (vulnerable a SIM swapping)

### 3. Seguridad del Dispositivo

**Computadora:**
- Sistema operativo actualizado siempre
- Antivirus activo (Windows Defender es suficiente)
- Firewall activado
- Encriptación de disco (BitLocker/FileVault)
- Bloqueo automático tras 5 min de inactividad

**Red WiFi:**
- Contraseña WPA3 o WPA2 fuerte
- Red separada para invitados
- Router con firmware actualizado
- Evitar redes públicas para trabajo

**VPN para trabajo sensible:**
- NordVPN, ExpressVPN, ProtonVPN
- Úsalo en redes públicas (cafés, aeropuertos)
- Algunos clientes lo requieren

### 4. Manejo de Credenciales de Clientes

**Reglas de oro:**
1. **Nunca pidas contraseñas por chat/email**
2. **Usa gestores de contraseñas con compartir seguro**
3. **Solicita acceso limitado cuando sea posible**
4. **Documenta qué accesos tienes**
5. **Elimina accesos cuando termina la relación**

**Mejores prácticas:**
- Pedir que te agreguen como usuario en vez de compartir credenciales
- Usar la función "compartir" de 1Password o Bitwarden
- Para cuentas críticas, solicitar acceso temporal
- Mantener un registro de todos los accesos

### 5. Backup y Recuperación

**Regla 3-2-1:**
- 3 copias de datos importantes
- 2 tipos de almacenamiento diferentes
- 1 copia fuera de sitio (nube)

**Implementación práctica:**
- Archivos en computadora local
- Sincronización con Google Drive/Dropbox
- Backup mensual en disco externo

### 6. Phishing y Ingeniería Social

**Señales de phishing:**
- Urgencia extrema ("tu cuenta será suspendida HOY")
- Errores ortográficos o gramaticales
- Direcciones de email sospechosas
- Links que no coinciden con la empresa
- Solicitudes inusuales de información

**Antes de hacer clic:**
1. Verifica el remitente
2. Pasa el cursor sobre links sin hacer clic
3. En caso de duda, accede directo al sitio oficial
4. Nunca descargues adjuntos inesperados

## Protocolo de Seguridad con Clientes

### Al Iniciar con un Cliente Nuevo

1. **Discute expectativas de seguridad**
   - ¿Tienen políticas específicas?
   - ¿Requieren VPN o software específico?

2. **Solicita accesos de forma segura**
   - Nunca por email
   - Preferir invitaciones de usuario

3. **Documenta los accesos recibidos**
   - Qué plataformas
   - Nivel de acceso
   - Fecha de inicio

### Durante la Relación

- No guardes contraseñas en texto plano
- No compartas accesos con terceros
- Reporta cualquier actividad sospechosa
- Mantén tus dispositivos seguros

### Al Terminar la Relación

1. Lista todos los accesos que tienes
2. Notifica al cliente para que los revoque
3. Elimina credenciales de tu gestor
4. Borra archivos confidenciales (según acuerdo)
5. Confirma por escrito que todo fue devuelto/eliminado

## Checklist de Seguridad Digital

- [ ] Gestor de contraseñas instalado y configurado
- [ ] 2FA activado en todas las cuentas críticas
- [ ] Sistema operativo y software actualizado
- [ ] Backup automático configurado
- [ ] WiFi con contraseña fuerte
- [ ] Antivirus/firewall activo
- [ ] Pantalla con bloqueo automático
- [ ] VPN disponible para uso cuando necesario

> **Mentalidad de Seguridad**: La seguridad no es un producto que compras, es una práctica diaria. Un momento de descuido puede borrar años de trabajo.`
          }
        ],
        sprint: {
          id: "sprint-intro-2",
          title: "Sprint: Configuración Profesional",
          description: "Configura tu espacio de trabajo y herramientas de forma profesional",
          tasks: [
            {
              id: "task-intro-2-1",
              question: "Auditoría de Home Office: Toma fotos de tu espacio de trabajo actual y realiza un análisis crítico. Incluye: (1) Descripción del espacio actual, (2) 5 fortalezas que ya tienes, (3) 5 áreas de mejora identificadas, (4) Plan de mejora priorizado con presupuesto estimado para los próximos 3 meses."
            },
            {
              id: "task-intro-2-2",
              question: "Stack de Herramientas Personal: Crea tu stack tecnológico personal. Lista: (1) 3 herramientas de comunicación que usarás y por qué, (2) 2 herramientas de gestión de tareas/proyectos, (3) Tu sistema de almacenamiento y backup, (4) Herramienta de tracking de tiempo elegida. Para cada una, explica por qué la elegiste sobre las alternativas."
            },
            {
              id: "task-intro-2-3",
              question: "Implementación de Seguridad: Demuestra que implementaste las medidas de seguridad básicas. Describe: (1) Qué gestor de contraseñas instalaste y cómo lo configuraste, (2) En qué cuentas activaste 2FA, (3) Tu protocolo personal para manejar credenciales de clientes, (4) Tu plan de backup actual."
            }
          ]
        },
        exam: {
          id: "exam-intro-2",
          title: "Evaluación: Espacio y Herramientas Profesionales",
          questions: [
            {
              id: "q-intro-2-1",
              question: "¿Cuál es la velocidad mínima de internet recomendada para un AV profesional?",
              options: [
                "5 Mbps descarga / 1 Mbps subida",
                "25 Mbps descarga / 5 Mbps subida",
                "100 Mbps descarga / 50 Mbps subida",
                "10 Mbps descarga / 2 Mbps subida"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-2",
              question: "¿Qué es la 'Regla 20-20-20' en ergonomía de oficina?",
              options: [
                "Trabajar 20 horas, descansar 20 minutos, repetir 20 veces",
                "Cada 20 minutos, mirar algo a 20 pies de distancia por 20 segundos",
                "Tomar 20 descansos de 20 minutos cada 20 horas",
                "Ajustar la silla 20 centímetros cada 20 minutos"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-3",
              question: "¿Por qué NO se recomienda usar SMS como método principal de autenticación de dos factores (2FA)?",
              options: [
                "Porque los mensajes tardan mucho en llegar",
                "Porque es vulnerable a ataques de SIM swapping",
                "Porque cuesta dinero recibir SMS",
                "Porque no funciona sin internet"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-4",
              question: "La 'Regla 3-2-1' de backup significa:",
              options: [
                "3 computadoras, 2 discos duros, 1 USB",
                "3 copias de datos, 2 tipos de almacenamiento, 1 copia fuera de sitio",
                "Backup cada 3 días, 2 veces al mes, 1 vez al año completo",
                "3 contraseñas, 2 factores de autenticación, 1 gestor"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-5",
              question: "¿Cuál herramienta es considerada el estándar de la industria para videollamadas?",
              options: [
                "Skype",
                "Google Meet",
                "Zoom",
                "WhatsApp"
              ],
              correctAnswer: 2
            },
            {
              id: "q-intro-2-6",
              question: "¿Qué característica NO es de una contraseña segura?",
              options: [
                "Mínimo 12 caracteres",
                "Incluye tu fecha de nacimiento para recordarla fácilmente",
                "Combina mayúsculas, minúsculas, números y símbolos",
                "Es única para cada cuenta"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-7",
              question: "¿Qué debes hacer al terminar una relación laboral con un cliente respecto a los accesos?",
              options: [
                "Mantener los accesos por si el cliente necesita algo en el futuro",
                "Listar todos los accesos, notificar al cliente para que los revoque, y eliminar credenciales",
                "Simplemente dejar de usarlos",
                "Cambiar todas las contraseñas por nuevas"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-8",
              question: "Para iluminación en videollamadas, la luz debe estar:",
              options: [
                "Detrás de ti para crear un efecto dramático",
                "Frente a ti para iluminar tu rostro",
                "Directamente arriba de tu cabeza",
                "Apagada para que solo se vea la pantalla"
              ],
              correctAnswer: 1
            },
            {
              id: "q-intro-2-9",
              question: "¿Qué herramienta permite que los clientes agenden citas directamente sin el ping-pong de emails?",
              options: [
                "Google Calendar",
                "Toggl Track",
                "Calendly",
                "Asana"
              ],
              correctAnswer: 2
            },
            {
              id: "q-intro-2-10",
              question: "¿Cuál es la forma correcta de recibir credenciales de acceso de un cliente?",
              options: [
                "Por email, ya que queda documentado",
                "Por chat de WhatsApp con mensaje que desaparece",
                "Usando la función de compartir seguro de un gestor de contraseñas",
                "Que te las dicten en una llamada y las anotes"
              ],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: "herramientas-digitales",
    title: "Herramientas Digitales",
    slug: "herramientas-digitales",
    description: "Domina Google Workspace, Microsoft 365, gestores de proyectos y las herramientas esenciales del trabajo remoto.",
    duration: "3 Semanas",
    totalLessons: "24 Lecciones",
    icon: "Laptop",
    color: "from-purple-500 to-pink-500",
    certificate: {
      title: "Certificado en Herramientas Digitales",
      description: "Ha demostrado dominio de las herramientas digitales esenciales para el trabajo remoto"
    },
    modules: [
      {
        id: "mod-hd-1",
        title: "Google Workspace Profesional",
        description: "Domina el ecosistema de Google para maximizar tu productividad",
        theory: [
          {
            id: "lesson-hd-1-1",
            title: "Gmail: Gestión Profesional del Correo",
            content: `# Gmail: Gestión Profesional del Correo

## Inbox Zero: El Santo Grial de la Productividad

El método Inbox Zero no significa tener cero emails, sino tener **cero emails sin procesar**. Cada email debe tener una acción clara.

## Configuración Profesional de Gmail

### 1. Organización con Etiquetas

Las etiquetas son más poderosas que las carpetas porque un email puede tener múltiples etiquetas.

**Sistema de etiquetas recomendado:**
\`\`\`
📁 CLIENTES
   └── Cliente A
   └── Cliente B
   └── Cliente C
📁 PROYECTOS
   └── Proyecto Activo 1
   └── Proyecto Activo 2
📁 ACCIÓN
   └── 🔴 Urgente
   └── 🟡 Esta semana
   └── 🟢 Cuando pueda
📁 REFERENCIA
   └── Plantillas
   └── Recursos
   └── Facturas
\`\`\`

### 2. Filtros Automáticos

Los filtros procesan emails automáticamente según reglas.

**Filtros esenciales:**
1. **Newsletters** → Etiqueta "Leer después", archivar
2. **Notificaciones automáticas** → Archivar sin bandeja
3. **Emails de cliente específico** → Etiqueta del cliente, estrella

**Cómo crear un filtro:**
1. Configuración ⚙️ → Ver todos los ajustes
2. Filtros y direcciones bloqueadas
3. Crear nuevo filtro
4. Define criterios y acciones

### 3. Plantillas de Respuesta

Ahorra horas creando plantillas para respuestas comunes.

**Activar plantillas:**
1. Configuración → Avanzado → Plantillas → Activar

**Plantillas que todo AV necesita:**
- Confirmación de recepción de email
- Solicitud de más información
- Confirmación de tarea completada
- Respuesta de fuera de oficina personalizada
- Propuesta de reunión

**Ejemplo de plantilla:**

\`\`\`
Asunto: Re: [Tema]

Hola [Nombre],

Gracias por tu mensaje. He recibido tu solicitud sobre [tema].

[Espacio para personalización]

Confirmo que estaré trabajando en esto y tendrás una actualización antes del [fecha].

¿Hay algo adicional que deba tener en cuenta?

Saludos,
[Tu nombre]
\`\`\`

### 4. Programación de Envío

Respeta zonas horarias y crea impresión de profesionalismo.

**Cómo programar:**
- Redacta el email
- Clic en flecha junto a "Enviar"
- Selecciona "Programar envío"
- Elige fecha y hora

**Mejores prácticas:**
- Envía en horario laboral del destinatario
- Evita enviar a medianoche (parece desorganizado)
- Programa emails del fin de semana para lunes temprano

### 5. Funciones Avanzadas

**Snooze (Posponer):**
- Quita el email temporalmente
- Reaparece cuando lo necesitas
- Perfecto para "necesito responder el viernes"

**Modo confidencial:**
- Emails que expiran
- Requieren código para abrir
- No se pueden reenviar ni descargar

**Deshacer envío:**
- Configuración → General → Deshacer envío
- Aumenta a 30 segundos
- Salvavidas para errores

## Atajos de Teclado Esenciales

| Atajo | Acción |
|-------|--------|
| C | Redactar nuevo email |
| R | Responder |
| A | Responder a todos |
| F | Reenviar |
| E | Archivar |
| # | Eliminar |
| L | Aplicar etiqueta |
| / | Buscar |
| G + I | Ir a bandeja de entrada |
| G + S | Ir a destacados |

(Activa en: Configuración → Ver todos → Combinaciones de teclas → Activar)

## Estrategia de Procesamiento

### El Método de los 4 D's

Para cada email, decide inmediatamente:

1. **Delete (Eliminar)**: No necesitas → Borrar/archivar
2. **Do (Hacer)**: Menos de 2 minutos → Hazlo ahora
3. **Delegate (Delegar)**: No es tu tarea → Reenvía
4. **Defer (Diferir)**: Más de 2 minutos → Añade a lista de tareas

### Bloques de Email

**No revises email constantemente.** Programa bloques:
- 9:00 AM - Procesamiento matutino (30 min)
- 1:00 PM - Revisión de mediodía (15 min)
- 5:00 PM - Cierre del día (30 min)

> **Pro Tip**: Desactiva notificaciones de email en tu teléfono. Revisa intencionalmente, no reactivamente.`
          },
          {
            id: "lesson-hd-1-2",
            title: "Google Calendar: Gestión Experta del Tiempo",
            content: `# Google Calendar: Gestión Experta del Tiempo

## El Centro de Control de tu Tiempo

Google Calendar no es solo para recordar citas. Es una herramienta estratégica para proteger tu tiempo, maximizar productividad y gestionar múltiples clientes.

## Configuración Avanzada

### 1. Múltiples Calendarios por Propósito

**Crea calendarios separados para:**
- 📅 **Personal**: Citas médicas, familia
- 💼 **Trabajo General**: Reuniones, deadlines
- 🎯 **Deep Work**: Bloques de trabajo enfocado
- 📚 **Aprendizaje**: Tiempo para cursos y desarrollo
- 👤 **Cliente A, B, C...**: Calendario por cliente

**Beneficios:**
- Activa/desactiva vistas según contexto
- Colores distintivos por categoría
- Comparte solo calendarios relevantes

### 2. Zonas Horarias Múltiples

Como AV trabajarás con clientes globales.

**Configurar:**
1. Configuración ⚙️ → Zona horaria
2. Mostrar zona horaria secundaria
3. Selecciona zonas de tus clientes principales

**World Time Buddy**: Herramienta complementaria para comparar múltiples zonas.

### 3. Horario Laboral

Protege tu tiempo personal.

**Configurar:**
1. Configuración → Horario laboral
2. Define días y horas disponibles
3. Los demás ven cuando intentan agendar fuera

### 4. Tipos de Eventos

**Evento Regular**: Reuniones, citas
**Evento de Todo el Día**: Deadlines, recordatorios
**Tarea**: To-dos con fecha (aparecen en la parte superior)
**Recordatorio**: Notas personales
**Tiempo de Enfoque**: Bloquea automáticamente para deep work
**Fuera de oficina**: Declina invitaciones automáticamente

## Técnicas de Bloqueo de Tiempo

### Time Blocking Básico

Asigna cada hora del día a una actividad específica.

**Ejemplo de día bloqueado:**
\`\`\`
8:00 - 8:30   ☀️ Rutina matutina, planificación
8:30 - 9:00   📧 Email - Procesamiento
9:00 - 11:00  🎯 Deep Work - Cliente A
11:00 - 11:15 ☕ Descanso
11:15 - 12:30 💬 Reuniones / Llamadas
12:30 - 1:30  🍽️ Almuerzo (¡bloquéalo!)
1:30 - 3:30   🎯 Deep Work - Cliente B
3:30 - 4:00   📧 Email - Segunda revisión
4:00 - 5:00   📋 Tareas administrativas
5:00 - 5:30   📝 Revisión del día, planificación mañana
\`\`\`

### Day Theming

Asigna temas a días completos.

**Ejemplo:**
- **Lunes**: Planificación semanal + Cliente A
- **Martes**: Deep work + Contenido
- **Miércoles**: Reuniones + Colaboración
- **Jueves**: Deep work + Cliente B
- **Viernes**: Administrativo + Cierre semanal

### Buffer Time

**Nunca agendes reuniones consecutivas.**

Agrega buffers de 15-30 minutos para:
- Procesar notas de la reunión anterior
- Prepararte para la siguiente
- Manejar imprevistos
- Ir al baño 😅

## Integraciones Poderosas

### Con Calendly (Agendamiento)
- Clientes agendan en slots disponibles
- Se sincroniza automáticamente
- Evita doble reservación

### Con Zoom/Meet
- Agrega videollamada automáticamente
- Link incluido en la invitación

### Con Slack
- Actualiza estado automáticamente
- "En reunión hasta las 3pm"

### Con Asana/Todoist
- Tareas con fecha aparecen en calendario
- Sincronización bidireccional

## Funciones que Debes Conocer

### 1. Buscar Horarios
- Invita participantes
- Click en "Buscar horarios"
- Ve disponibilidad de todos
- Elige slot que funcione para todos

### 2. Eventos Recurrentes Inteligentes
- "Cada 2 semanas el martes"
- "Primer lunes de cada mes"
- "Todos los días laborables"

### 3. Notificaciones Múltiples
- 1 día antes: Preparación
- 1 hora antes: Recordatorio
- 10 minutos antes: Alistarse

### 4. Adjuntar Documentos
- Agenda de reunión
- Documentos de referencia
- Todos los participantes tienen acceso

### 5. Notas de Evento
- Agenda antes de la reunión
- Notas durante
- Action items después

## Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| C | Crear evento |
| T | Ir a hoy |
| D | Vista de día |
| W | Vista de semana |
| M | Vista de mes |
| A | Vista de agenda |
| ← → | Navegar período |

## Template: Revisión Semanal

**Cada viernes, 30 min bloqueados:**

1. **Revisar semana pasada** (10 min)
   - ¿Qué completé?
   - ¿Qué quedó pendiente?
   - ¿Qué aprendí?

2. **Planificar próxima semana** (15 min)
   - Revisar tareas pendientes
   - Bloquear tiempo para prioridades
   - Agendar reuniones necesarias

3. **Ajustar sistema** (5 min)
   - ¿El time blocking funcionó?
   - ¿Necesito más/menos buffers?
   - ¿Algún ajuste necesario?

> **Mentalidad**: Tu calendario es tu intención. Lo que está bloqueado es lo que importa. Protege tu tiempo como protegerías tu dinero.`
          },
          {
            id: "lesson-hd-1-3",
            title: "Google Drive y Docs: Colaboración Efectiva",
            content: `# Google Drive y Docs: Colaboración Efectiva

## Google Drive: Tu Oficina en la Nube

### Estructura de Carpetas Profesional

Una buena estructura de carpetas te ahorra horas de búsqueda.

**Sistema recomendado:**
\`\`\`
📁 1. CLIENTES
   └── 📁 [Nombre Cliente A]
       └── 📁 01_Información
       └── 📁 02_Proyectos
           └── 📁 [Nombre Proyecto]
               └── 📁 Assets
               └── 📁 Entregables
               └── 📁 Comunicación
       └── 📁 03_Facturación
   └── 📁 [Nombre Cliente B]
       └── ...

📁 2. PERSONAL
   └── 📁 Portafolio
   └── 📁 Plantillas
   └── 📁 Certificaciones
   └── 📁 Contratos

📁 3. RECURSOS
   └── 📁 Tutoriales
   └── 📁 Referencias
   └── 📁 Herramientas

📁 4. ARCHIVO (proyectos terminados)
\`\`\`

**Convención de nombres:**
- Fecha al inicio: "2024-01-15_Propuesta_ClienteA"
- Versiones: "v1", "v2", "FINAL", "FINAL_FINAL_v2" ❌
- Mejor: "Propuesta_v2024-01-15"

### Funciones Clave de Drive

**1. Acceso Rápido**
- Drive aprende qué archivos usas más
- Aparecen automáticamente arriba
- Usa "Agregar a destacados" ⭐ para forzar

**2. Búsqueda Avanzada**
Operadores de búsqueda:
- \`type:document\` - Solo Docs
- \`owner:email@ejemplo.com\` - Por dueño
- \`before:2024-01-01\` - Antes de fecha
- \`"frase exacta"\` - Búsqueda exacta

**3. Compartir Estratégico**

| Nivel | Uso |
|-------|-----|
| Viewer | Solo ver, no modificar |
| Commenter | Ver y comentar |
| Editor | Modificar contenido |
| Owner | Control total |

**Mejores prácticas:**
- Comparte carpetas, no archivos individuales
- Revisa permisos periódicamente
- Usa "Cualquier persona con el link" con precaución
- Para clientes: crea carpeta compartida específica

**4. Versiones**
- Click derecho → Historial de versiones
- Restaura versiones anteriores
- Nombra versiones importantes

---

## Google Docs: Documentos Colaborativos

### Formato Profesional

**Estilos consistentes:**
- Título: Usar "Título" no solo texto grande
- Encabezados: H1, H2, H3 jerárquicamente
- Permite crear tabla de contenidos automática

**Crear tabla de contenidos:**
1. Insertar → Tabla de contenidos
2. Se actualiza automáticamente
3. Click para navegar

### Colaboración en Tiempo Real

**Sugerencias vs Ediciones:**
- **Modo Edición**: Cambios directos
- **Modo Sugerencia**: Cambios como propuestas

Para revisión con clientes: **SIEMPRE usa sugerencias**
- Cliente ve qué cambió
- Puede aprobar/rechazar cada cambio
- Historial claro de modificaciones

**Comentarios efectivos:**
- Selecciona texto + Ctrl+Alt+M
- Asigna comentario a persona (@nombre)
- Resuelve cuando está atendido

### Plantillas que Debes Crear

**1. Plantilla de Informe Semanal**
\`\`\`
# Informe Semanal - [Cliente]
## Semana del [fecha] al [fecha]

### Resumen Ejecutivo
[2-3 oraciones del progreso general]

### Tareas Completadas
- [ ] Tarea 1
- [ ] Tarea 2

### En Progreso
- [ ] Tarea 3 (80% completado)

### Próxima Semana
- Prioridad 1
- Prioridad 2

### Métricas Clave
| Métrica | Esta Semana | Anterior |
|---------|-------------|----------|
| Emails procesados | 150 | 120 |

### Notas/Observaciones
[Cualquier cosa que el cliente deba saber]
\`\`\`

**2. Plantilla de Acta de Reunión**
\`\`\`
# Acta de Reunión
**Fecha:**
**Participantes:**
**Duración:**

## Agenda
1. Tema 1
2. Tema 2

## Puntos Discutidos
### Tema 1
- Punto clave
- Decisión tomada

## Acciones a Tomar
| Acción | Responsable | Fecha Límite |
|--------|-------------|--------------|
| | | |

## Próxima Reunión
**Fecha:**
**Temas tentativos:**
\`\`\`

---

## Google Sheets: Datos y Análisis

### Funciones Esenciales

**1. BUSCARV (VLOOKUP)**
Busca un valor en una columna y devuelve valor de otra columna.
\`\`\`
=BUSCARV(valor_buscado, rango, columna_resultado, FALSO)
\`\`\`

**2. Formato Condicional**
- Selecciona rango
- Formato → Formato condicional
- Define reglas (ej: rojo si < 50, verde si > 80)

**3. Validación de Datos**
- Datos → Validación de datos
- Crea desplegables
- Evita errores de entrada

**4. Tablas Dinámicas**
- Insertar → Tabla dinámica
- Analiza grandes cantidades de datos
- Agrupa, suma, cuenta automáticamente

### Plantillas Útiles

**Tracker de Tiempo por Cliente:**
| Fecha | Cliente | Proyecto | Tarea | Horas | Tarifa | Total |
|-------|---------|----------|-------|-------|--------|-------|

**Tracker de Gastos:**
| Fecha | Categoría | Descripción | Monto | Método de Pago |
|-------|-----------|-------------|-------|----------------|

**CRM Simple:**
| Nombre | Email | Teléfono | Estado | Última Contacto | Notas |
|--------|-------|----------|--------|-----------------|-------|

> **Pro Tip**: Google Sheets + Google Forms = Sistema de captura de datos automático. Crea un formulario, las respuestas llegan a una hoja automáticamente.

## Atajos Universales de Google

| Atajo | Acción |
|-------|--------|
| Ctrl + / | Ver todos los atajos |
| Ctrl + K | Insertar link |
| Ctrl + Alt + C | Copiar formato |
| Ctrl + Alt + V | Pegar formato |
| Ctrl + Shift + V | Pegar sin formato |`
          }
        ],
        sprint: {
          id: "sprint-hd-1",
          title: "Sprint: Dominio de Google Workspace",
          description: "Demuestra tu dominio práctico del ecosistema Google",
          tasks: [
            {
              id: "task-hd-1-1",
              question: "Configuración de Gmail Profesional: Configura tu Gmail con el sistema de etiquetas recomendado en la lección. Crea: (1) Mínimo 3 categorías principales con subcategorías, (2) Al menos 2 filtros automáticos funcionales, (3) 2 plantillas de respuesta profesional. Describe cada elemento creado y cómo mejorará tu productividad."
            },
            {
              id: "task-hd-1-2",
              question: "Sistema de Calendario Personalizado: Diseña e implementa tu sistema de gestión del tiempo en Google Calendar. Incluye: (1) Tu estructura de calendarios múltiples con propósito de cada uno, (2) Un día completo bloqueado con tu rutina ideal, (3) La configuración de zonas horarias y horario laboral. Explica tu lógica detrás de cada decisión."
            },
            {
              id: "task-hd-1-3",
              question: "Estructura de Drive y Plantillas: Crea tu estructura de carpetas profesional en Google Drive siguiendo las mejores prácticas. Además, crea una carpeta 'Plantillas' con: (1) Una plantilla de informe semanal, (2) Una plantilla de acta de reunión, (3) Un Google Sheet para tracking de tiempo. Comparte el link con permisos de visualización."
            }
          ]
        },
        exam: {
          id: "exam-hd-1",
          title: "Evaluación: Google Workspace",
          questions: [
            {
              id: "q-hd-1-1",
              question: "El método 'Inbox Zero' significa:",
              options: [
                "Eliminar todos los emails cada día",
                "Tener cero emails sin procesar, donde cada uno tiene una acción clara",
                "Responder todos los emails inmediatamente",
                "No usar email y preferir otras herramientas"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-2",
              question: "¿Cuál es la principal ventaja de las etiquetas sobre las carpetas en Gmail?",
              options: [
                "Las etiquetas tienen colores",
                "Un email puede tener múltiples etiquetas pero solo puede estar en una carpeta",
                "Las etiquetas son más fáciles de crear",
                "Las carpetas ocupan más espacio"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-3",
              question: "Al compartir documentos con clientes para revisión, debes usar:",
              options: [
                "Modo de edición para que puedan cambiar directamente",
                "Modo de sugerencia para que vean los cambios propuestos y puedan aprobarlos",
                "Enviar el documento como PDF adjunto",
                "Darles permisos de propietario"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-4",
              question: "¿Por qué es importante agregar 'buffer time' entre reuniones en el calendario?",
              options: [
                "Para que las reuniones se vean más importantes",
                "Para procesar notas, prepararse para la siguiente reunión y manejar imprevistos",
                "Porque Google Calendar lo requiere",
                "Para cobrar más horas al cliente"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-5",
              question: "La función BUSCARV (VLOOKUP) en Google Sheets sirve para:",
              options: [
                "Buscar texto dentro de una celda",
                "Verificar si una celda tiene valor",
                "Buscar un valor en una columna y devolver un valor de otra columna de la misma fila",
                "Ordenar datos de A a Z"
              ],
              correctAnswer: 2
            },
            {
              id: "q-hd-1-6",
              question: "La recomendación para revisar emails es:",
              options: [
                "Revisar cada vez que llega una notificación",
                "Mantener Gmail abierto todo el día",
                "Programar bloques específicos de revisión 2-3 veces al día",
                "Revisar solo una vez a la semana"
              ],
              correctAnswer: 2
            },
            {
              id: "q-hd-1-7",
              question: "El método de los '4 D's' para procesar emails incluye:",
              options: [
                "Download, Delete, Draft, Done",
                "Delete, Do, Delegate, Defer",
                "Decide, Deliver, Document, Discuss",
                "Delete, Duplicate, Divide, Deliver"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-8",
              question: "¿Cuál operador de búsqueda en Google Drive encuentra archivos de un dueño específico?",
              options: [
                "from:email@ejemplo.com",
                "owner:email@ejemplo.com",
                "by:email@ejemplo.com",
                "user:email@ejemplo.com"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-9",
              question: "Para nombrar archivos profesionalmente, la mejor práctica es:",
              options: [
                "Usar nombres descriptivos cortos como 'Doc1', 'Doc2'",
                "Incluir la fecha al inicio en formato año-mes-día: '2024-01-15_NombreArchivo'",
                "Usar solo mayúsculas para que destaquen",
                "Agregar 'FINAL' al nombre cuando esté terminado"
              ],
              correctAnswer: 1
            },
            {
              id: "q-hd-1-10",
              question: "Para crear una tabla de contenidos automática en Google Docs, primero debes:",
              options: [
                "Escribir manualmente los títulos de sección",
                "Usar estilos de encabezado (H1, H2, H3) consistentemente en el documento",
                "Instalar un complemento especial",
                "Solicitar la función a Google"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "comunicacion-efectiva",
    title: "Comunicación Efectiva",
    slug: "comunicacion-efectiva",
    description: "Domina el arte de la comunicación escrita y verbal para destacar en el entorno profesional remoto.",
    duration: "2 Semanas",
    totalLessons: "12 Lecciones",
    icon: "MessageSquare",
    color: "from-green-500 to-teal-500",
    certificate: {
      title: "Certificado en Comunicación Efectiva",
      description: "Ha demostrado excelencia en comunicación profesional remota"
    },
    modules: [
      {
        id: "mod-ce-1",
        title: "Comunicación Escrita Profesional",
        description: "Domina el arte de escribir emails, mensajes y documentos que generen resultados",
        theory: [
          {
            id: "lesson-ce-1-1",
            title: "Principios de la Comunicación Escrita",
            content: `# Principios de la Comunicación Escrita Profesional

## Por Qué la Escritura es tu Superpoder

En el trabajo remoto, el 90% de tu comunicación es escrita. Tu capacidad de escribir con claridad determina directamente:
- Cómo te perciben profesionalmente
- La eficiencia de tu trabajo
- La satisfacción de tus clientes
- Tu potencial de crecimiento

## El Framework CLEAR para Escritura Profesional

### C - Conciso
Elimina palabras innecesarias. Cada palabra debe aportar valor.

**Antes (43 palabras):**
"Te escribo este correo para informarte que ya he terminado de realizar todas las tareas que me habías asignado durante nuestra última reunión y quería saber si hay algo más en lo que pueda ayudarte."

**Después (18 palabras):**
"Completé todas las tareas de nuestra última reunión. ¿Hay algo adicional en lo que pueda ayudar?"

### L - Legible
Estructura tu texto para lectura rápida:
- Párrafos cortos (3-4 líneas máximo)
- Bullets para listas
- Negritas para puntos clave
- Espacios en blanco

### E - Específico
Evita ambigüedades. Sé preciso con:
- Fechas: "viernes 15 de marzo" no "la próxima semana"
- Cantidades: "3 revisiones" no "algunas revisiones"
- Responsables: "María revisará" no "alguien revisará"

### A - Accionable
Cada comunicación debe tener un propósito claro:
- ¿Qué quieres que haga el lector?
- ¿Para cuándo?
- ¿Cómo debe responder?

### R - Respetuoso
Mantén un tono profesional:
- Evita mayúsculas (gritar)
- Usa "por favor" y "gracias"
- Considera el contexto cultural
- Relee antes de enviar

## Anatomía del Email Perfecto

### Asunto: Tu Primera Impresión
El asunto determina si tu email se abre o se ignora.

**Fórmulas efectivas:**
- [Acción requerida] + Tema + Fecha límite
- [Para tu información] + Resumen
- [Urgente] + Problema específico (usar con moderación)

**Ejemplos:**
- ✅ "[Revisión requerida] Propuesta Q2 - necesito feedback antes del viernes"
- ✅ "[FYI] Resumen reunión cliente ABC - 15 marzo"
- ❌ "Hola" / "Pregunta" / "Urgente!!!"

### Saludo: Establece el Tono
- Formal: "Estimado/a [Nombre]:"
- Semi-formal: "Hola [Nombre],"
- Informal (relación establecida): "Hola [Nombre]!"

### Primera Línea: El Gancho
El lector decide en 3 segundos si sigue leyendo.

**Técnicas:**
- Ir directo al punto principal
- Contexto breve si es necesario
- Evitar "Te escribo para..."

### Cuerpo: Información Estructurada
- Un tema por email (idealmente)
- Información más importante primero
- Bullets para múltiples puntos
- Resalta acciones con negritas

### Cierre: Call to Action Claro
- ¿Qué necesitas del lector?
- ¿Para cuándo?
- Ofrece alternativas si aplica

### Firma: Profesionalismo
\`\`\`
Saludos,
[Tu nombre]
Asistente Virtual | [Tu especialidad]
[Email] | [Teléfono/WhatsApp]
[LinkedIn - opcional]
\`\`\`

## Plantillas de Email Esenciales

### 1. Seguimiento de Tarea
\`\`\`
Asunto: [Update] Progreso de [Tarea] - [Fecha]

Hola [Nombre],

Actualización rápida sobre [tarea]:

✅ Completado:
- [Item 1]
- [Item 2]

🔄 En progreso:
- [Item 3] - estimado para [fecha]

⏳ Pendiente:
- [Item 4] - esperando [qué necesitas]

¿Alguna pregunta o ajuste necesario?

Saludos,
[Tu nombre]
\`\`\`

### 2. Solicitud de Información
\`\`\`
Asunto: [Información requerida] [Tema] - antes del [fecha]

Hola [Nombre],

Para avanzar con [proyecto/tarea], necesito:

1. [Información específica 1]
2. [Información específica 2]
3. [Información específica 3]

¿Podrías enviarme esto antes del [fecha]?

Si tienes dudas sobre algún punto, estoy disponible para una llamada rápida.

Gracias,
[Tu nombre]
\`\`\`

### 3. Respuesta a Problema/Queja
\`\`\`
Asunto: Re: [Tema original]

Hola [Nombre],

Gracias por informarme sobre [problema]. Entiendo tu preocupación.

**Qué pasó:** [Explicación breve y honesta]

**Solución:** [Acción concreta que tomarás]

**Próximos pasos:**
1. [Paso 1] - [fecha/hora]
2. [Paso 2] - [fecha/hora]

¿Hay algo adicional que pueda hacer?

Saludos,
[Tu nombre]
\`\`\`

## Errores Comunes que Debes Evitar

### 1. El Email Eterno
- Problema: Emails de 500+ palabras
- Solución: Si necesitas tanto texto, considera una llamada o documento aparte

### 2. El Respondedor Automático
- Problema: "Ok", "Recibido", "Gracias"
- Solución: Agrega valor: "Recibido. Lo tendré listo el viernes."

### 3. El Escritor Pasivo
- Problema: "Se necesitaría que se hiciera..."
- Solución: "Necesito que [Nombre] haga..."

### 4. El Urgente Crónico
- Problema: Todo marcado como urgente
- Solución: Reserva "urgente" para verdaderas emergencias

> **Regla de Oro**: Antes de enviar, pregúntate: "Si yo recibiera este email, ¿tendría toda la información necesaria para actuar?"`
          },
          {
            id: "lesson-ce-1-2",
            title: "Comunicación en Mensajería Instantánea",
            content: `# Comunicación en Mensajería Instantánea

## El Arte de los Mensajes Cortos

Slack, WhatsApp, Teams - la mensajería instantánea es el corazón de la comunicación remota. Pero su inmediatez puede ser una trampa.

## Principios de Mensajería Profesional

### 1. Respeta el Tiempo del Otro

**La regla del mensaje completo:**
NO hagas esto:
\`\`\`
Tú: Hola
Tú: ¿Cómo estás?
Tú: Tengo una pregunta
Tú: Es sobre el proyecto
Tú: ¿Tienes un minuto?
\`\`\`

SÍ haz esto:
\`\`\`
Tú: Hola María, espero que estés bien.
Tengo una pregunta sobre el proyecto ABC:
¿El deadline del reporte sigue siendo el viernes
o se movió? Gracias!
\`\`\`

**Por qué importa:**
- Cada mensaje genera una notificación
- Interrumpe el flujo de trabajo
- Causa ansiedad mientras escribes

### 2. Contexto Antes de Pregunta

**Malo:**
"¿Puedo hacerte una pregunta?"

**Bueno:**
"Pregunta sobre [tema]: [la pregunta completa]"

### 3. Usa Hilos (Threads)

En Slack y Teams:
- Mantiene conversaciones organizadas
- No satura el canal principal
- Fácil de seguir después

### 4. Estados y Disponibilidad

Configura y respeta estados:
- 🟢 Disponible
- 🟡 Ausente / En reunión
- 🔴 No molestar / Enfocado
- ⚫ Desconectado

## Etiqueta de Mensajería por Plataforma

### Slack - Entorno Profesional

**Canales:**
- Mantente en tema
- Usa threads para discusiones
- @menciones con moderación
- @here y @channel solo cuando sea necesario

**Mensajes Directos:**
- Para temas que no necesitan registro público
- Información sensible
- Conversaciones 1:1

**Reacciones con emoji:**
- ✅ = Entendido / Completado
- 👀 = Lo estoy revisando
- 🙏 = Gracias
- ➕ = De acuerdo

### WhatsApp Business - Clientes Directos

**Configuración profesional:**
- Foto de perfil profesional
- Estado con horario de atención
- Respuestas rápidas configuradas
- Catálogo de servicios (opcional)

**Mejores prácticas:**
- Responde en horario laboral (salvo emergencias)
- Usa notas de voz con moderación
- Confirma recepción de mensajes importantes
- Evita grupos innecesarios

**Respuestas rápidas sugeridas:**
- Saludo inicial
- Confirmación de recepción
- Fuera de horario
- Solicitud de más información

### Microsoft Teams - Entorno Corporativo

**Particularidades:**
- Integración con calendario
- Menciones en documentos
- Reuniones rápidas desde chat
- Más formal que Slack generalmente

## Situaciones Comunes y Cómo Manejarlas

### Cuando No Sabes la Respuesta
\`\`\`
"Buena pregunta. No tengo la respuesta ahora mismo,
pero la investigo y te confirmo antes de [hora/fecha]."
\`\`\`

### Cuando Necesitas Más Tiempo
\`\`\`
"Recibido. Estoy trabajando en algo urgente ahora.
¿Te parece si lo revisamos en [X horas]?"
\`\`\`

### Cuando el Mensaje No Es Claro
\`\`\`
"Quiero asegurarme de entender bien:
¿me estás pidiendo que [tu interpretación]?
¿O te refieres a [alternativa]?"
\`\`\`

### Cuando Hay Tensión
\`\`\`
"Parece que hay un malentendido.
¿Podemos hacer una llamada rápida de 5 min
para alinearnos? Creo que será más eficiente."
\`\`\`

## Comunicación Asíncrona vs Síncrona

### Cuándo Usar Mensaje (Asíncrono)
- Updates que no requieren respuesta inmediata
- Información de referencia
- Preguntas no urgentes
- Documentación de decisiones

### Cuándo Usar Llamada (Síncrono)
- Temas complejos o sensibles
- Brainstorming
- Feedback extenso
- Cuando hay malentendidos
- Negociaciones

### La Regla de los 3 Mensajes
Si un tema requiere más de 3 intercambios de mensajes, probablemente es mejor una llamada.

## Gestión de Notificaciones

### Para tu Productividad
- Desactiva notificaciones durante deep work
- Configura horarios de "no molestar"
- Revisa mensajes en bloques (cada 1-2 horas)
- Prioriza por urgencia real, no percibida

### Expectativas con Clientes
Establece desde el inicio:
- Tiempos de respuesta esperados
- Canales para urgencias vs normales
- Horarios de disponibilidad

**Ejemplo de acuerdo:**
"Respondo mensajes de Slack dentro de 2-4 horas en horario laboral. Para urgencias reales, llámame al [número]."

> **Mentalidad**: La mensajería instantánea es una herramienta, no un jefe. Tú controlas cuándo y cómo respondes.`
          },
          {
            id: "lesson-ce-1-3",
            title: "Documentación y Reportes Profesionales",
            content: `# Documentación y Reportes Profesionales

## El Poder de Documentar

La documentación diferencia a un AV promedio de uno excepcional:
- Reduce preguntas repetitivas
- Facilita handoffs y vacaciones
- Demuestra profesionalismo
- Protege a ambas partes

## Tipos de Documentación Esencial

### 1. SOPs (Standard Operating Procedures)

Procedimientos paso a paso para tareas recurrentes.

**Estructura de un SOP:**
\`\`\`
# [Nombre del Proceso]

## Objetivo
Qué logra este proceso y por qué existe.

## Frecuencia
Diario / Semanal / Cuando se necesite

## Tiempo Estimado
X minutos/horas

## Herramientas Necesarias
- Herramienta 1
- Herramienta 2

## Pasos

### Paso 1: [Nombre del paso]
1. Acción específica
2. Acción específica
   - Nota importante o excepción

### Paso 2: [Nombre del paso]
[...]

## Problemas Comunes y Soluciones
| Problema | Solución |
|----------|----------|
| X no funciona | Hacer Y |

## Contacto para Dudas
[Nombre] - [cómo contactar]

## Historial de Cambios
| Fecha | Cambio | Autor |
|-------|--------|-------|
\`\`\`

### 2. Reportes de Progreso

**Reporte Diario (si se requiere):**
\`\`\`
## Reporte [Fecha]

### Completado Hoy
- ✅ [Tarea 1]
- ✅ [Tarea 2]

### En Progreso
- 🔄 [Tarea 3] - X% completado

### Bloqueadores
- ⚠️ [Problema] - esperando [qué]

### Mañana
- [ ] [Prioridad 1]
- [ ] [Prioridad 2]
\`\`\`

**Reporte Semanal:**
\`\`\`
# Reporte Semanal - [Fecha inicio] a [Fecha fin]

## Resumen Ejecutivo
[2-3 oraciones del progreso general]

## Logros de la Semana
1. **[Logro principal]**: [Impacto/resultado]
2. **[Segundo logro]**: [Impacto/resultado]

## Métricas Clave
| Métrica | Esta Semana | Semana Anterior | Tendencia |
|---------|-------------|-----------------|-----------|
| Emails procesados | 150 | 120 | ⬆️ +25% |
| Tareas completadas | 23 | 20 | ⬆️ +15% |

## Desafíos y Soluciones
- **Desafío**: [Problema enfrentado]
- **Solución**: [Cómo lo resolviste]

## Próxima Semana
### Prioridades
1. [Prioridad alta]
2. [Prioridad media]

### Necesito de ti
- [Decisión/información/recurso]

## Notas Adicionales
[Observaciones, sugerencias, oportunidades]
\`\`\`

### 3. Actas de Reunión

**Template completo:**
\`\`\`
# Acta de Reunión

**Fecha:** [DD/MM/YYYY]
**Hora:** [HH:MM] - [HH:MM]
**Participantes:** [Nombres]
**Tipo:** [Seguimiento / Kickoff / Brainstorm / etc.]

---

## Agenda
1. [Tema 1]
2. [Tema 2]
3. [Tema 3]

---

## Resumen de Discusión

### [Tema 1]
- Punto clave discutido
- Opiniones compartidas
- **Decisión tomada:** [si aplica]

### [Tema 2]
[...]

---

## Decisiones Tomadas
| Decisión | Responsable | Fecha Límite |
|----------|-------------|--------------|
| [Decisión 1] | [Nombre] | [Fecha] |

---

## Action Items
| # | Tarea | Responsable | Fecha Límite | Estado |
|---|-------|-------------|--------------|--------|
| 1 | [Tarea] | [Nombre] | [Fecha] | Pendiente |
| 2 | [Tarea] | [Nombre] | [Fecha] | Pendiente |

---

## Próxima Reunión
**Fecha:** [DD/MM/YYYY]
**Hora:** [HH:MM]
**Temas tentativos:**
- [Tema 1]
- [Tema 2]

---

*Acta preparada por: [Tu nombre]*
*Fecha de envío: [Fecha]*
\`\`\`

## Principios de Documentación Efectiva

### 1. Escribe para tu Yo del Futuro
¿Entenderás esto en 6 meses sin contexto adicional?

### 2. Usa Formato Consistente
- Mismos headers
- Misma estructura
- Misma ubicación de archivos

### 3. Actualiza Regularmente
Documentación desactualizada es peor que no tener documentación.

### 4. Hazla Encontrable
- Nombres descriptivos
- Ubicación lógica
- Índice si hay muchos documentos

### 5. Incluye Screenshots
Una imagen vale más que mil palabras, especialmente para procesos técnicos.

## Herramientas Recomendadas

### Para Documentación
- **Notion**: Todo en uno, flexible
- **Google Docs**: Simple, colaborativo
- **Confluence**: Corporativo, estructurado
- **Gitbook**: Técnico, organizado

### Para Screenshots
- **Loom**: Video + screen recording
- **CloudApp**: Screenshots con anotaciones
- **Snagit**: Profesional, muchas opciones

### Para Diagramas
- **Miro**: Colaborativo, visual
- **Lucidchart**: Diagramas de flujo
- **Whimsical**: Simple, elegante

## Ejercicio: Documenta un Proceso

Elige una tarea que hagas regularmente y créale un SOP:
1. Define el objetivo
2. Lista los pasos
3. Agrega screenshots
4. Incluye excepciones
5. Pide a alguien que lo siga sin tu ayuda

> **Mentalidad de Documentación**: Si haces algo más de 2 veces, documéntalo. Tu futuro yo (y tu cliente) te lo agradecerán.`
          }
        ],
        sprint: {
          id: "sprint-ce-1",
          title: "Sprint: Comunicación Escrita Profesional",
          description: "Demuestra dominio de la comunicación escrita en contextos profesionales",
          tasks: [
            {
              id: "task-ce-1-1",
              question: "Transformación de Emails: Toma los siguientes 2 emails mal escritos y reescríbelos aplicando el framework CLEAR. Email 1: 'hola como estas te escribo para ver si me puedes ayudar con algo que necesito porque tengo un problema con el proyecto y no se que hacer y necesito que me digas que piensas gracias'. Email 2: 'URGENTE!!! Necesito el reporte YA porque mi jefe lo pidió y es super importante y no puedo esperar más!!!'. Para cada uno explica qué errores identificaste y cómo los corregiste."
            },
            {
              id: "task-ce-1-2",
              question: "Creación de Plantillas: Crea 3 plantillas de email profesionales para situaciones que enfrentarás como AV: (1) Email de onboarding para presentarte a un nuevo cliente, (2) Email para informar que no podrás cumplir un deadline y proponer alternativas, (3) Email de cierre semanal con resumen de logros. Cada plantilla debe seguir la estructura del email perfecto."
            },
            {
              id: "task-ce-1-3",
              question: "SOP Completo: Crea un SOP (Standard Operating Procedure) detallado para un proceso de tu elección relacionado con asistencia virtual. Debe incluir: objetivo, frecuencia, tiempo estimado, herramientas, mínimo 5 pasos detallados con sub-pasos, problemas comunes y soluciones, y sección de contacto. El SOP debe ser lo suficientemente claro para que cualquier persona pueda seguirlo sin ayuda adicional."
            }
          ]
        },
        exam: {
          id: "exam-ce-1",
          title: "Evaluación: Comunicación Escrita",
          questions: [
            {
              id: "q-ce-1-1",
              question: "En el framework CLEAR, ¿qué significa la 'E'?",
              options: [
                "Elegante - usar vocabulario sofisticado",
                "Específico - ser preciso con fechas, cantidades y responsables",
                "Extenso - incluir toda la información posible",
                "Emotivo - conectar emocionalmente con el lector"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-2",
              question: "¿Cuál es la mejor práctica al enviar mensajes en Slack o WhatsApp?",
              options: [
                "Enviar 'Hola' primero y esperar respuesta antes de hacer la pregunta",
                "Enviar el mensaje completo con contexto y pregunta en un solo mensaje",
                "Usar muchos mensajes cortos para mantener la conversación activa",
                "Siempre usar notas de voz porque son más personales"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-3",
              question: "La 'Regla de los 3 Mensajes' sugiere que:",
              options: [
                "Debes responder máximo 3 veces al día",
                "Si un tema requiere más de 3 intercambios, probablemente es mejor una llamada",
                "Solo debes enviar 3 mensajes por conversación",
                "Espera 3 horas entre cada mensaje"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-4",
              question: "En un asunto de email profesional, ¿cuál es la mejor práctica?",
              options: [
                "Usar solo 'Hola' o 'Importante' para mantenerlo simple",
                "Incluir [Acción requerida] + Tema específico + Fecha límite si aplica",
                "Escribir el email completo en el asunto para ahorrar tiempo",
                "Usar muchos signos de exclamación para llamar la atención"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-5",
              question: "¿Qué debe incluir un SOP (Standard Operating Procedure)?",
              options: [
                "Solo los pasos básicos del proceso",
                "Objetivo, pasos detallados, herramientas necesarias, problemas comunes y soluciones",
                "Un video explicativo únicamente",
                "Referencias a otros documentos sin explicación propia"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-6",
              question: "Cuando no sabes la respuesta a una pregunta del cliente, debes:",
              options: [
                "Inventar una respuesta para no parecer incompetente",
                "Ignorar el mensaje hasta que tengas la respuesta",
                "Responder que investigarás y dar un tiempo específico para confirmar",
                "Transferir la pregunta a otra persona sin avisar"
              ],
              correctAnswer: 2
            },
            {
              id: "q-ce-1-7",
              question: "¿Cuál es el propósito principal de documentar procesos como AV?",
              options: [
                "Crear más trabajo para justificar tus horas",
                "Reducir preguntas repetitivas, facilitar handoffs y demostrar profesionalismo",
                "Impresionar al cliente con documentos largos",
                "Cumplir un requisito obligatorio de todas las empresas"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-8",
              question: "Al usar reacciones con emoji en Slack, ✅ generalmente significa:",
              options: [
                "Me gusta tu mensaje",
                "Entendido / Completado / De acuerdo",
                "Necesito más información",
                "Estoy en desacuerdo"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-9",
              question: "¿Cuándo es apropiado usar comunicación síncrona (llamada) en lugar de mensajes?",
              options: [
                "Para cualquier pregunta simple",
                "Cuando hay temas complejos, sensibles o malentendidos que requieren más de 3 mensajes",
                "Siempre, porque es más personal",
                "Nunca, los mensajes son siempre más eficientes"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ce-1-10",
              question: "En un reporte semanal, el 'Resumen Ejecutivo' debe contener:",
              options: [
                "Todos los detalles de cada tarea realizada",
                "2-3 oraciones con el progreso general de la semana",
                "Solo las métricas numéricas",
                "Las quejas y problemas encontrados"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "gestion-tiempo",
    title: "Gestión del Tiempo",
    slug: "gestion-tiempo",
    description: "Aprende técnicas avanzadas de productividad para maximizar tu eficiencia como profesional remoto.",
    duration: "2 Semanas",
    totalLessons: "12 Lecciones",
    icon: "Clock",
    color: "from-orange-500 to-amber-500",
    certificate: {
      title: "Certificado en Gestión del Tiempo",
      description: "Ha demostrado dominio de técnicas de productividad profesional"
    },
    modules: [
      {
        id: "mod-gt-1",
        title: "Fundamentos de Productividad",
        description: "Domina los principios y técnicas esenciales para gestionar tu tiempo efectivamente",
        theory: [
          {
            id: "lesson-gt-1-1",
            title: "La Ciencia de la Productividad",
            content: `# La Ciencia de la Productividad

## Productividad Real vs Percibida

Estar ocupado NO es lo mismo que ser productivo.

**Ocupado:** Muchas horas trabajando, muchas tareas, siempre corriendo
**Productivo:** Resultados significativos en tiempo razonable

## La Ecuación de la Productividad

\`\`\`
Productividad = (Valor del Output) / (Tiempo + Energía invertidos)
\`\`\`

No se trata de trabajar más horas, sino de maximizar el valor de cada hora.

## Los Enemigos de la Productividad

### 1. La Multitarea (El Gran Mito)

**La verdad científica:**
- El cerebro NO puede hacer multitarea con tareas cognitivas
- Lo que hace es "context switching" (cambiar entre tareas)
- Cada cambio tiene un "costo de cambio" de 15-25 minutos
- La multitarea reduce productividad hasta 40%

**Ejemplo:**
Si cambias de tarea 10 veces al día y cada cambio cuesta 20 minutos de re-enfoque, pierdes 3+ horas diarias.

### 2. Las Interrupciones

**Estadísticas alarmantes:**
- Trabajador promedio: interrumpido cada 3-5 minutos
- Tiempo para recuperar enfoque: 23 minutos
- Solo 2 horas de trabajo enfocado en un día de 8 horas

**Fuentes comunes:**
- Notificaciones de email/chat
- Redes sociales
- Llamadas no programadas
- Ambiente físico (ruido, personas)

### 3. La Procrastinación

**Por qué procrastinamos:**
- Tareas abrumadoras (muy grandes)
- Tareas aburridas (baja dopamina)
- Perfeccionismo (miedo a fallar)
- Falta de claridad (no saber por dónde empezar)

**La solución científica:**
- Dividir tareas grandes en pasos pequeños
- Empezar con solo 2 minutos
- Recompensas inmediatas
- Clarificar el primer paso concreto

## Técnicas Fundamentales

### 1. Time Blocking

Asigna bloques de tiempo específicos a tareas específicas.

**Implementación:**
\`\`\`
6:00 - 7:00   🏃 Rutina matutina
7:00 - 7:30   📋 Planificación del día
7:30 - 10:00  🎯 Deep Work (tarea principal)
10:00 - 10:15 ☕ Descanso
10:15 - 12:00 📧 Email + tareas administrativas
12:00 - 1:00  🍽️ Almuerzo
1:00 - 3:00   🎯 Deep Work (segunda prioridad)
3:00 - 4:00   📞 Reuniones / Llamadas
4:00 - 5:00   📋 Cierre del día + planificación mañana
\`\`\`

### 2. Técnica Pomodoro

Trabajo en intervalos de 25 minutos con descansos.

**El método:**
1. Elige una tarea
2. Trabaja 25 minutos sin interrupciones
3. Descanso de 5 minutos
4. Cada 4 pomodoros, descanso largo (15-30 min)

**Variaciones:**
- 50/10 para trabajo creativo
- 90/20 para deep work (ciclos ultradianos)
- 15/3 para tareas que requieren muchos cambios

### 3. La Matriz de Eisenhower

Clasifica tareas por urgencia e importancia:

| | Urgente | No Urgente |
|---|---------|------------|
| **Importante** | HACER YA | AGENDAR |
| **No Importante** | DELEGAR | ELIMINAR |

**Cuadrante 1 (Urgente + Importante):** Crisis, deadlines
**Cuadrante 2 (No Urgente + Importante):** Planificación, desarrollo, relaciones
**Cuadrante 3 (Urgente + No Importante):** Interrupciones, algunas reuniones
**Cuadrante 4 (No Urgente + No Importante):** Distracciones, tiempo perdido

**Clave:** La mayoría de tu tiempo debería estar en el Cuadrante 2.

### 4. La Regla de los 2 Minutos (GTD)

Si una tarea toma menos de 2 minutos, hazla inmediatamente.

**Por qué funciona:**
- El costo de registrarla y recordarla es mayor que hacerla
- Reduce tu lista de pendientes
- Genera momentum

### 5. Eat the Frog (Traga el Sapo)

Haz la tarea más difícil/importante primero en la mañana.

**Beneficios:**
- Máxima energía y willpower en la mañana
- El resto del día se siente más fácil
- Elimina la procrastinación por anticipación

## Tu Sistema Personal de Productividad

### Elementos esenciales:
1. **Captura:** Sistema para capturar todas las ideas/tareas
2. **Clarificación:** Proceso para definir siguiente acción
3. **Organización:** Lugar para cada tipo de tarea
4. **Reflexión:** Revisión regular del sistema
5. **Acción:** Criterios para elegir qué hacer ahora

### Herramientas recomendadas:
- **Captura:** Todoist, Notion, Apple Notes
- **Calendario:** Google Calendar
- **Tracking:** Toggl Track
- **Enfoque:** Forest, Freedom

> **Verdad incómoda:** El mejor sistema de productividad es el que realmente usas. Empieza simple y ajusta según necesites.`
          },
          {
            id: "lesson-gt-1-2",
            title: "Planificación Efectiva",
            content: `# Planificación Efectiva

## Por Qué Planificar es No Negociable

**Sin planificación:**
- Reaccionas a lo urgente, ignoras lo importante
- Terminas el día preguntándote "¿qué hice?"
- Estrés constante por no saber qué sigue

**Con planificación:**
- Control sobre tu tiempo
- Enfoque en lo que importa
- Satisfacción de progreso visible

## Los 3 Niveles de Planificación

### Nivel 1: Planificación Diaria

**Cuándo:** Noche anterior o primera hora de la mañana
**Duración:** 10-15 minutos

**Proceso:**
1. Revisa calendario del día
2. Identifica las 3 tareas MÁS importantes (MIT - Most Important Tasks)
3. Estima tiempo para cada tarea
4. Bloquea tiempo en calendario
5. Deja espacio para imprevistos (20-30%)

**Template diario:**
\`\`\`
## [Fecha]

### 🎯 MITs (Must do today)
1. [ ] [Tarea principal] - [tiempo estimado]
2. [ ] [Segunda prioridad] - [tiempo estimado]
3. [ ] [Tercera prioridad] - [tiempo estimado]

### 📋 Secundarias (Nice to have)
- [ ] Tarea 4
- [ ] Tarea 5

### 📅 Eventos/Reuniones
- [Hora]: [Evento]

### 📝 Notas del día
[Espacio para apuntes]
\`\`\`

### Nivel 2: Planificación Semanal

**Cuándo:** Domingo noche o lunes primera hora
**Duración:** 30-45 minutos

**Proceso:**
1. **Revisar semana anterior**
   - ¿Qué completé?
   - ¿Qué quedó pendiente? ¿Por qué?
   - ¿Qué aprendí?

2. **Revisar compromisos**
   - Reuniones agendadas
   - Deadlines de la semana
   - Compromisos personales

3. **Definir objetivos semanales**
   - 3-5 resultados clave para la semana
   - Vinculados a objetivos mensuales

4. **Distribuir en días**
   - Asignar tareas grandes a días específicos
   - Dejar días más ligeros para imprevistos

**Template semanal:**
\`\`\`
## Semana del [fecha] al [fecha]

### 🎯 Objetivos de la Semana
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

### 📊 Proyectos en Progreso
| Proyecto | Estado | Próximo paso |
|----------|--------|--------------|
| | | |

### 📅 Vista de la Semana
| Día | Enfoque Principal | Reuniones |
|-----|-------------------|-----------|
| Lun | [Tema] | [X reuniones] |
| Mar | [Tema] | [X reuniones] |
| Mié | [Tema] | [X reuniones] |
| Jue | [Tema] | [X reuniones] |
| Vie | [Tema] | [X reuniones] |

### ⚠️ Deadlines
- [Fecha]: [Deadline]
\`\`\`

### Nivel 3: Planificación Mensual/Trimestral

**Cuándo:** Fin/inicio de mes
**Duración:** 1-2 horas

**Enfoque:**
- Objetivos de alto nivel
- Proyectos grandes
- Desarrollo profesional
- Evaluación de progreso

## La Estimación de Tiempo

### Por Qué Siempre Subestimamos

**Ley de Hofstadter:** "Siempre toma más tiempo del esperado, incluso cuando tienes en cuenta la Ley de Hofstadter."

**Causas:**
- Optimismo no realista
- No considerar interrupciones
- Olvidar tareas de setup/cierre
- Subestimar complejidad

### Técnicas de Estimación

**1. Multiplica por 1.5-2x**
Tu estimación inicial × 1.5 (tareas conocidas) o × 2 (tareas nuevas)

**2. Descompón la tarea**
En lugar de "Crear presentación - 2 horas":
- Investigación: 45 min
- Estructura: 30 min
- Diseño slides: 1.5 horas
- Revisión: 30 min
- Total real: 3.25 horas

**3. Usa datos históricos**
Trackea tu tiempo real vs estimado. Ajusta según patrones.

## Manejo de Deadlines

### Tipos de Deadlines

**Hard deadline:** Fecha inamovible (evento, lanzamiento)
**Soft deadline:** Fecha objetivo flexible
**Self-imposed:** Fecha que tú defines

### Trabajar Hacia Atrás

Para un deadline del viernes:
1. Viernes 5pm: Entrega final
2. Viernes 2pm: Buffer para imprevistos
3. Jueves: Revisiones finales
4. Miércoles: Primera versión completa
5. Martes: Avance 70%
6. Lunes: Inicio + estructura

### Comunica Proactivamente

Si ves que no llegarás:
- Avisa con anticipación (no el día del deadline)
- Explica brevemente el motivo
- Propón nueva fecha realista
- Ofrece solución parcial si es posible

## Revisión y Mejora Continua

### Revisión Diaria (5 min)
- ¿Completé mis MITs?
- ¿Qué funcionó/no funcionó?
- ¿Qué ajusto para mañana?

### Revisión Semanal (30 min)
- Progreso vs objetivos
- Lecciones aprendidas
- Ajustes al sistema

### Revisión Mensual (1-2 hrs)
- Tendencias y patrones
- Objetivos para próximo mes
- Desarrollo profesional

> **El secreto:** La planificación no es un evento, es un hábito. 15 minutos diarios de planificación te ahorran horas de trabajo reactivo.`
          },
          {
            id: "lesson-gt-1-3",
            title: "Eliminación de Distracciones",
            content: `# Eliminación de Distracciones

## El Costo Real de las Distracciones

**Cada distracción tiene un costo triple:**
1. Tiempo de la interrupción misma
2. Tiempo para recuperar el enfoque (23 min promedio)
3. Errores por pérdida de contexto

**Matemática simple:**
- 5 distracciones de 1 minuto = 5 minutos directos
- 5 × 23 minutos de recuperación = 115 minutos
- **Total perdido: 2 horas** por solo 5 distracciones "pequeñas"

## Mapa de Tus Distracciones

### Distracciones Externas
- Notificaciones (email, chat, apps)
- Llamadas no programadas
- Personas interrumpiendo
- Ruido ambiental
- Redes sociales

### Distracciones Internas
- Pensamientos sobre otras tareas
- Preocupaciones personales
- Aburrimiento con la tarea actual
- Hambre, sed, cansancio
- Impulso de revisar el teléfono

## Estrategias de Eliminación

### 1. Control de Notificaciones

**Regla general:** Las notificaciones deben estar desactivadas por defecto.

**Configuración recomendada:**

**Email:**
- Desactiva notificaciones push
- Revisa en bloques programados (3x al día)
- Usa pestañas/filtros para priorizar

**Slack/Teams:**
- Notificaciones solo para mensajes directos
- Silencia canales de bajo valor
- Usa "No molestar" durante deep work

**Teléfono:**
- Modo avión durante trabajo enfocado
- Solo permitir llamadas de contactos clave
- Desinstala apps innecesarias

### 2. Bloqueadores de Distracciones

**Para computadora:**
- **Freedom:** Bloquea sitios y apps en todos los dispositivos
- **Cold Turkey:** Bloqueo estricto (no se puede desactivar)
- **RescueTime:** Monitorea uso + bloqueo opcional

**Para teléfono:**
- **Forest:** Gamifica el no tocar el teléfono
- **Screen Time (iOS) / Digital Wellbeing (Android):** Límites de apps
- **One Sec:** Agrega fricción antes de abrir apps

### 3. Diseño del Entorno

**Espacio físico:**
- Escritorio limpio (solo lo necesario)
- Teléfono fuera de vista (en otro cuarto si es posible)
- Audífonos con cancelación de ruido
- Puerta cerrada o señal de "no molestar"

**Espacio digital:**
- Cierra pestañas innecesarias
- Un solo proyecto/tarea visible
- Desktop limpio
- Modo pantalla completa para tarea actual

### 4. Técnicas de Enfoque

**Time Blocking Estricto:**
- Bloques de 90-120 minutos de "deep work"
- Cero interrupciones permitidas
- Notificar a otros de tu horario de enfoque

**La Técnica del "Parking Lot":**
- Cuando pienses en otra tarea, anótala
- Vuelve inmediatamente a la tarea actual
- Revisa el parking lot después del bloque

**Rituales de Inicio:**
- Secuencia que indica "ahora es tiempo de trabajar"
- Ejemplo: hacer café, poner música específica, sentarse
- El cerebro asocia el ritual con enfoque

### 5. Manejo de Personas

**Con clientes:**
- Establece horarios de disponibilidad claros
- Usa Calendly para que agenden en tus horarios
- "Respondo mensajes entre 9-10am y 3-4pm"

**Con familia/compañeros de casa:**
- Explica qué significa tu señal de "no molestar"
- Define emergencias reales vs puede esperar
- Ofrece horarios específicos para interrupciones

**Cómo decir no (profesionalmente):**
- "Estoy en medio de algo. ¿Puede esperar 30 minutos?"
- "Déjame terminar esto y te busco a las [hora]."
- "¿Es urgente? Si no, agéndame un tiempo en mi calendario."

## Recuperación del Enfoque

### Cuando Ya Te Distrajiste

1. **Reconoce** que te distrajiste (sin culpa)
2. **Anota** rápidamente dónde estabas en la tarea
3. **Respira** 3 veces profundo
4. **Relee** las últimas líneas/acciones
5. **Continúa** desde donde quedaste

### Prevención de Futuras Distracciones

Después de cada distracción, pregunta:
- ¿Cómo entró esta distracción?
- ¿Cómo puedo bloquearla en el futuro?

## Tu Plan Anti-Distracciones

### Audit de 1 Semana
1. Registra cada distracción
2. Categoriza por tipo y fuente
3. Identifica las 3 peores
4. Crea plan para eliminarlas

### Implementación Gradual
- Semana 1: Elimina notificaciones innecesarias
- Semana 2: Instala bloqueadores
- Semana 3: Rediseña tu espacio
- Semana 4: Establece límites con otros

### Métricas de Éxito
- Horas de trabajo enfocado por día
- Número de interrupciones por día
- Tareas importantes completadas

> **Mentalidad:** Las distracciones son decisiones. Cada vez que cedes a una distracción, estás eligiendo esa distracción sobre tu trabajo importante. Elige conscientemente.`
          }
        ],
        sprint: {
          id: "sprint-gt-1",
          title: "Sprint: Sistema de Productividad Personal",
          description: "Diseña e implementa tu sistema personal de gestión del tiempo",
          tasks: [
            {
              id: "task-gt-1-1",
              question: "Auditoría de Tiempo: Durante 3 días consecutivos, registra TODAS tus actividades en bloques de 30 minutos (puedes usar Toggl o una hoja de cálculo). Luego analiza: (1) ¿Cuántas horas reales de trabajo enfocado tuviste?, (2) ¿Cuáles fueron tus 5 principales fuentes de distracción?, (3) ¿Qué patrones identificas?, (4) ¿Qué porcentaje del tiempo fue productivo vs improductivo?"
            },
            {
              id: "task-gt-1-2",
              question: "Diseño de Día Ideal: Usando las técnicas aprendidas (time blocking, Pomodoro, Eat the Frog), diseña tu día de trabajo ideal. Incluye: (1) Horario bloqueado hora por hora desde que empiezas hasta que terminas, (2) Justificación de por qué organizaste cada bloque así, (3) Cuándo revisarás email/mensajes, (4) Cuándo harás deep work, (5) Buffers para imprevistos. Implementa este horario por 5 días y reporta los resultados."
            },
            {
              id: "task-gt-1-3",
              question: "Plan Anti-Distracciones: Crea tu plan completo para eliminar distracciones. Incluye: (1) Lista de todas las notificaciones que desactivarás y en qué dispositivos, (2) Qué herramientas de bloqueo usarás y cómo las configurarás, (3) Cambios físicos que harás en tu espacio de trabajo, (4) Script de lo que dirás a familia/compañeros sobre tu tiempo de enfoque, (5) Tu ritual de inicio de trabajo enfocado."
            }
          ]
        },
        exam: {
          id: "exam-gt-1",
          title: "Evaluación: Gestión del Tiempo",
          questions: [
            {
              id: "q-gt-1-1",
              question: "¿Cuánto tiempo promedio toma recuperar el enfoque después de una interrupción?",
              options: [
                "2-3 minutos",
                "5-10 minutos",
                "23 minutos",
                "45 minutos"
              ],
              correctAnswer: 2
            },
            {
              id: "q-gt-1-2",
              question: "En la Matriz de Eisenhower, ¿dónde debería estar la mayoría de tu tiempo?",
              options: [
                "Cuadrante 1: Urgente e Importante",
                "Cuadrante 2: No Urgente pero Importante",
                "Cuadrante 3: Urgente pero No Importante",
                "Cuadrante 4: No Urgente y No Importante"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-3",
              question: "La técnica 'Eat the Frog' recomienda:",
              options: [
                "Dejar las tareas difíciles para el final del día",
                "Hacer la tarea más difícil/importante primero en la mañana",
                "Dividir las tareas difíciles en partes pequeñas",
                "Delegar las tareas que no te gustan"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-4",
              question: "Según la Regla de los 2 Minutos (GTD), si una tarea toma menos de 2 minutos debes:",
              options: [
                "Agendarla para después",
                "Delegarla a alguien más",
                "Hacerla inmediatamente",
                "Anotarla en tu lista de pendientes"
              ],
              correctAnswer: 2
            },
            {
              id: "q-gt-1-5",
              question: "¿Cuál es la recomendación para estimar tiempo en tareas nuevas?",
              options: [
                "Confiar en tu primera intuición",
                "Multiplicar tu estimación inicial por 1.5 a 2",
                "Siempre estimar el mínimo posible",
                "No estimar y trabajar hasta terminar"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-6",
              question: "¿Con qué frecuencia se recomienda hacer la planificación diaria?",
              options: [
                "Una vez por semana",
                "Cada noche anterior o primera hora de la mañana",
                "Solo cuando hay mucho trabajo",
                "Al inicio de cada mes"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-7",
              question: "La técnica Pomodoro estándar consiste en:",
              options: [
                "Trabajar 60 minutos, descansar 15",
                "Trabajar 25 minutos, descansar 5",
                "Trabajar 45 minutos, descansar 10",
                "Trabajar sin parar hasta terminar"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-8",
              question: "¿Qué son los 'MITs' en la planificación diaria?",
              options: [
                "Meetings In Time - reuniones programadas",
                "Most Important Tasks - las 3 tareas más importantes del día",
                "Monthly Important Targets - objetivos mensuales",
                "Minutes In Total - tiempo total disponible"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-9",
              question: "La técnica del 'Parking Lot' sirve para:",
              options: [
                "Organizar el espacio físico de trabajo",
                "Anotar pensamientos/tareas que surgen durante el trabajo enfocado para revisarlos después",
                "Estacionar proyectos que no son prioritarios",
                "Guardar archivos temporales"
              ],
              correctAnswer: 1
            },
            {
              id: "q-gt-1-10",
              question: "¿Por qué la multitarea reduce la productividad?",
              options: [
                "Porque las computadoras no pueden hacer multitarea",
                "Porque el cerebro necesita 15-25 minutos para cambiar de contexto entre tareas",
                "Porque está prohibida en la mayoría de empresas",
                "Porque solo los expertos pueden hacerla bien"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "atencion-cliente",
    title: "Atención al Cliente",
    slug: "atencion-cliente",
    description: "Conviértete en un experto en servicio al cliente que genera lealtad y satisfacción.",
    duration: "2 Semanas",
    totalLessons: "12 Lecciones",
    icon: "HeadphonesIcon",
    color: "from-pink-500 to-rose-500",
    certificate: {
      title: "Certificado en Atención al Cliente",
      description: "Ha demostrado excelencia en servicio y atención al cliente"
    },
    modules: [
      {
        id: "mod-ac-1",
        title: "Fundamentos del Servicio Excepcional",
        description: "Aprende los principios que transforman clientes en fans",
        theory: [
          {
            id: "lesson-ac-1-1",
            title: "La Psicología del Cliente",
            content: `# La Psicología del Cliente

## Por Qué el Servicio al Cliente es tu Diferenciador

En un mundo donde productos y precios son similares, el servicio al cliente es EL diferenciador.

**Estadísticas que importan:**
- 86% de clientes pagan más por mejor experiencia
- 73% consideran la experiencia factor clave de compra
- Un cliente insatisfecho cuenta su experiencia a 9-15 personas
- Cuesta 5-25x más adquirir un cliente nuevo que retener uno

## Las 5 Necesidades Emocionales del Cliente

### 1. Ser Escuchado
No solo oír, sino demostrar que comprendiste.

**Señales de escucha activa:**
- Parafrasear: "Entonces lo que me dices es..."
- Preguntas de clarificación
- No interrumpir
- Tomar notas

### 2. Ser Valorado
Sentir que son importantes, no solo un número.

**Cómo demostrar valor:**
- Usar su nombre
- Recordar interacciones previas
- Personalizar respuestas
- Agradecer su preferencia genuinamente

### 3. Ser Comprendido
Empatía con su situación.

**Frases empáticas:**
- "Entiendo lo frustrante que debe ser..."
- "Tiene toda la razón en sentirse así..."
- "Si yo estuviera en su lugar, también me preocuparía..."

### 4. Sentirse en Control
Tener opciones y claridad.

**Dar control:**
- Ofrecer alternativas
- Explicar el proceso y tiempos
- Permitir que elijan la solución preferida

### 5. Resolución
Al final, quieren que su problema se resuelva.

**Elementos de buena resolución:**
- Solución efectiva al problema
- Comunicación clara de próximos pasos
- Seguimiento hasta confirmar satisfacción

## El Ciclo de Servicio al Cliente

### 1. Contacto Inicial
- Primera impresión (tienes 7 segundos)
- Saludo cálido y profesional
- Disponibilidad inmediata para ayudar

### 2. Identificación de Necesidad
- Preguntas abiertas
- Escucha activa
- Confirmación del entendimiento

### 3. Solución
- Respuesta clara y completa
- Alternativas si no hay solución directa
- Tiempos realistas

### 4. Cierre
- Confirmar satisfacción
- Ofrecer ayuda adicional
- Despedida memorable

### 5. Seguimiento
- Verificar que todo funcionó
- Solicitar feedback
- Mantener relación

## Tipos de Clientes y Cómo Tratarlos

### El Analítico
- **Características:** Quiere datos, detalles, pruebas
- **Estrategia:** Sé preciso, da información completa, usa hechos

### El Expresivo
- **Características:** Emocional, hablador, busca conexión
- **Estrategia:** Muestra entusiasmo, construye rapport, escucha historias

### El Conductor
- **Características:** Directo, impaciente, orientado a resultados
- **Estrategia:** Ve al grano, ofrece soluciones rápidas, respeta su tiempo

### El Amigable
- **Características:** Paciente, evita conflictos, busca consenso
- **Estrategia:** Sé cálido, asegúrale que todo estará bien, no lo presiones

## Manejo del Lenguaje

### Palabras que Conectan
- "Entiendo..."
- "Absolutamente..."
- "Con mucho gusto..."
- "Excelente pregunta..."
- "Permítame ayudarle con eso..."

### Palabras a Evitar
- "No puedo" → "Lo que sí puedo hacer es..."
- "Ese no es mi trabajo" → "Le conecto con quien mejor puede ayudarle"
- "Tiene que..." → "Le sugiero..."
- "Pero..." → "Y además..."
- "Problema" → "Situación" o "Desafío"

## La Experiencia Memorable

### Momentos de Verdad
Cada interacción es una oportunidad de brillar o fallar.

### Superar Expectativas
No solo cumplir, sino sorprender positivamente.

**Ejemplos:**
- Responder más rápido de lo prometido
- Incluir algo extra inesperado
- Hacer seguimiento sin que lo pidan
- Recordar detalles personales

> **Mentalidad:** No atiendes clientes, creas experiencias. Cada interacción es una oportunidad de hacer la diferencia en el día de alguien.`
          },
          {
            id: "lesson-ac-1-2",
            title: "Manejo de Quejas y Clientes Difíciles",
            content: `# Manejo de Quejas y Clientes Difíciles

## Las Quejas son Oportunidades

**Perspectiva transformadora:**
- Por cada cliente que se queja, 26 permanecen en silencio
- 70% de clientes que se quejan vuelven si resuelves su problema
- 95% vuelven si resuelves rápidamente
- Clientes recuperados son más leales que los que nunca tuvieron problemas

## El Método HEARD para Quejas

### H - Hear (Escucha)
- Deja que se desahoguen completamente
- No interrumpas
- Toma notas
- Mantén contacto visual (en video) o confirmaciones verbales

### E - Empathize (Empatiza)
- Valida sus emociones
- "Entiendo perfectamente su frustración"
- No minimices el problema
- Ponte genuinamente en su lugar

### A - Apologize (Disculpa)
- Discúlpate por la experiencia, no por "si se sintió mal"
- "Lamento mucho que haya tenido esta experiencia"
- Sé genuino, no mecánico
- No culpes a otros departamentos/personas

### R - Resolve (Resuelve)
- Ofrece solución concreta
- Si necesitas investigar, da tiempo específico
- Presenta opciones cuando sea posible
- Confirma que la solución es satisfactoria

### D - Diagnose (Diagnostica)
- ¿Por qué pasó esto?
- ¿Cómo evitarlo en el futuro?
- Documenta para mejorar procesos

## Tipos de Clientes Difíciles

### El Enojado
**Señales:** Voz elevada, palabras fuertes, impaciencia
**Estrategia:**
- Mantén la calma (no lo tomes personal)
- Baja tu tono de voz
- Usa su nombre
- Enfócate en la solución
- "Entiendo su frustración. Esto es lo que voy a hacer ahora mismo..."

### El Quejumbroso Crónico
**Señales:** Nada está bien, historial de quejas
**Estrategia:**
- Documenta todo meticulosamente
- Establece expectativas claras
- Enfócate en lo que SÍ puedes hacer
- Mantén límites profesionales

### El Indeciso
**Señales:** Muchas preguntas, no puede decidir
**Estrategia:**
- Simplifica opciones
- Haz recomendaciones claras
- Da seguridad sobre su elección
- No presiones

### El Sabelotodo
**Señales:** Cree saber más que tú, contradice
**Estrategia:**
- Reconoce su conocimiento
- No compitas
- Usa "Tiene razón, y además..."
- Ofrece información como "complemento"

### El Silencioso
**Señales:** Respuestas cortas, no da información
**Estrategia:**
- Preguntas abiertas específicas
- Paciencia y pausas
- No llenes todos los silencios
- Ofrece opciones para que elija

## Frases Mágicas para Situaciones Difíciles

### Para Desescalar
- "Tiene toda la razón en sentirse así"
- "Yo también estaría frustrado en su lugar"
- "Gracias por traer esto a nuestra atención"

### Para Tomar Control
- "Esto es lo que voy a hacer por usted ahora mismo..."
- "Permítame encargarme de esto personalmente"
- "Tengo una solución que creo le va a funcionar"

### Cuando No Puedes Dar lo que Piden
- "Entiendo lo que necesita. Lo que sí puedo hacer es..."
- "Aunque eso no es posible, tengo una alternativa..."
- "Le ofrezco esta opción que puede funcionar..."

### Para Confirmar Satisfacción
- "¿Esto resuelve su inquietud?"
- "¿Hay algo más en lo que pueda ayudarle hoy?"
- "¿Quedó satisfecho con la solución?"

## El Arte de Decir No

### Estructura del No Positivo
1. **Empatiza** con la solicitud
2. **Explica** brevemente por qué no es posible
3. **Ofrece** una alternativa
4. **Reafirma** tu deseo de ayudar

**Ejemplo:**
"Entiendo que necesita el reembolso inmediato (empatía). Nuestro proceso requiere 5 días hábiles por verificación del banco (explicación). Lo que puedo hacer es iniciar el proceso ahora mismo y enviarle confirmación por email para que pueda dar seguimiento (alternativa). ¿Le parece bien? (confirmación)"

## Autogestión Emocional

### Antes de Responder
- Respira profundo
- Cuenta hasta 3
- Recuerda: no es personal

### Durante la Interacción
- Mantén tono de voz bajo y constante
- Postura relajada pero profesional
- Enfócate en el problema, no en la persona

### Después de Interacciones Difíciles
- Toma un descanso si es posible
- Habla con un colega si necesitas desahogarte
- Reflexiona sobre qué funcionó
- Suéltalo, no te lo lleves a casa

> **Mantra:** "Esta persona está frustrada con la situación, no conmigo. Mi trabajo es ayudar a resolver la situación."`
          },
          {
            id: "lesson-ac-1-3",
            title: "Servicio al Cliente Multicanal",
            content: `# Servicio al Cliente Multicanal

## La Realidad Omnicanal

Los clientes de hoy usan múltiples canales y esperan experiencia consistente en todos.

**Canales comunes:**
- Email
- Chat en vivo
- WhatsApp/Mensajería
- Teléfono
- Redes sociales
- Formularios web

## Servicio por Email

### Tiempos de Respuesta
- **Ideal:** Menos de 4 horas
- **Aceptable:** Dentro de 24 horas
- **Urgente:** Menos de 1 hora

### Estructura del Email de Soporte
\`\`\`
Asunto: [Ticket #XXX] Re: [Tema original del cliente]

Hola [Nombre],

[Agradecimiento o reconocimiento del problema]

[Solución o respuesta clara]

[Próximos pasos si aplica]

[Oferta de ayuda adicional]

Saludos,
[Tu nombre]
[Firma con datos de contacto]
\`\`\`

### Mejores Prácticas
- Responde todas las preguntas, no solo algunas
- Usa formato para legibilidad (bullets, negritas)
- Incluye links a recursos cuando ayude
- Personaliza, no uses respuestas genéricas

## Servicio por Chat en Vivo

### Características Únicas
- Inmediatez esperada
- Conversacional pero profesional
- Multitasking (puedes atender varios)

### Tiempos de Respuesta
- **Primera respuesta:** <30 segundos
- **Entre mensajes:** <1-2 minutos

### Mejores Prácticas
- Saludo rápido al inicio
- Confirma que estás atendiendo
- Usa respuestas predefinidas para eficiencia
- Pero personaliza siempre
- Si necesitas investigar: "Dame un momento para verificar esto"
- Cierre claro: "¿Hay algo más en lo que pueda ayudarte?"

### Manejo de Múltiples Chats
- Máximo 3-4 simultáneos
- Prioriza por urgencia/tiempo de espera
- Comunica si hay demora
- Mejor calidad que cantidad

## Servicio por WhatsApp

### Tono
- Más informal que email
- Pero mantén profesionalismo
- Emojis con moderación (1-2 máximo)

### Estructura de Respuesta
1. Saludo con nombre
2. Confirmación de recepción
3. Respuesta/solución
4. Pregunta de seguimiento

### Mejores Prácticas
- Responde en horario laboral (salvo emergencias)
- Usa notas de voz solo si el cliente las usa primero
- Confirma información importante por escrito
- Evita mensajes muy largos (divide en varios)

## Servicio por Teléfono

### Estructura de Llamada
1. **Saludo:** "Gracias por llamar a [Empresa], habla [Nombre], ¿cómo puedo ayudarle?"
2. **Escucha:** Deja que expliquen, toma notas
3. **Confirmación:** Parafrasea el problema
4. **Solución:** Explica claramente
5. **Cierre:** Confirma satisfacción, despedida cálida

### Tips para Comunicación Telefónica
- Sonríe (se escucha en tu voz)
- Habla claro y a ritmo moderado
- Usa el nombre del cliente
- Evita muletillas (eh, mmm, este)
- No pongas en espera sin avisar

### Manejo de Esperas
- "¿Me permite un momento mientras verifico?"
- No más de 1-2 minutos
- Regresa con updates si tarda más
- Agradece la paciencia

## Servicio en Redes Sociales

### Particularidades
- Respuestas públicas (todos ven)
- Velocidad crítica (esperan respuesta en 1 hora)
- Tono acorde a la plataforma
- Oportunidad de mostrar tu servicio a todos

### Estrategia
1. Responde públicamente con apertura
2. Mueve a privado para detalles sensibles
3. "Te enviamos DM para ayudarte mejor"
4. Vuelve a lo público con resolución: "Nos alegra haber podido resolver tu inquietud"

### Manejo de Quejas Públicas
- Responde siempre (el silencio es peor)
- No borres comentarios negativos
- Sé humilde y profesional
- Ofrece solución, no excusas

## Consistencia Multicanal

### El Cliente Debe Sentir
- Que lo conoces (sin repetir info)
- Mismo nivel de servicio en todos los canales
- Continuidad si cambia de canal

### Cómo Lograrlo
- CRM unificado con historial
- Notas detalladas de cada interacción
- Protocolos consistentes
- Información del cliente accesible

## Métricas de Servicio al Cliente

### KPIs Fundamentales
- **Tiempo de Primera Respuesta:** ¿Qué tan rápido respondes?
- **Tiempo de Resolución:** ¿Cuánto tarda en resolverse?
- **Satisfacción del Cliente (CSAT):** Encuesta post-servicio
- **Net Promoter Score (NPS):** ¿Recomendarían?
- **Tasa de Resolución al Primer Contacto:** ¿Se resolvió sin escalación?

### Cómo Mejorar tus Métricas
- Templates para respuestas comunes
- Base de conocimiento actualizada
- Escalación clara para casos complejos
- Feedback continuo de clientes

> **Mentalidad multicanal:** El canal es solo el medio. La experiencia de servicio debe ser excelente independientemente de cómo te contacten.`
          }
        ],
        sprint: {
          id: "sprint-ac-1",
          title: "Sprint: Excelencia en Servicio al Cliente",
          description: "Demuestra tu capacidad de manejar situaciones reales de servicio al cliente",
          tasks: [
            {
              id: "task-ac-1-1",
              question: "Manejo de Quejas: Redacta respuestas profesionales para estos 3 escenarios usando el método HEARD: (1) Un cliente furioso porque su pedido llegó dañado y exige reembolso inmediato, (2) Un cliente que se queja públicamente en redes sociales de que nadie le responde hace 3 días, (3) Un cliente que insiste en un descuento que no puedes autorizar. Para cada respuesta, explica tu estrategia y qué elementos del método HEARD aplicaste."
            },
            {
              id: "task-ac-1-2",
              question: "Guión Multicanal: Crea guiones de atención para un mismo tipo de consulta (elige: solicitud de información de producto, seguimiento de pedido, o solicitud de cambio/devolución) en 3 canales diferentes: (1) Email, (2) Chat en vivo, (3) WhatsApp. Los guiones deben mantener consistencia en la información pero adaptarse al tono y formato de cada canal."
            },
            {
              id: "task-ac-1-3",
              question: "Análisis de Caso: Un cliente te escribe lo siguiente: 'Llevo 2 semanas esperando mi producto y nadie me da respuesta. Llamé 3 veces y cada vez me dicen algo diferente. Ya no confío en ustedes y voy a poner una queja pública. Quiero mi dinero de vuelta YA.' Redacta: (1) Tu respuesta completa al cliente, (2) El proceso interno que seguirías para investigar, (3) El seguimiento que harías después de resolver, (4) Recomendaciones para evitar que esto pase de nuevo."
            }
          ]
        },
        exam: {
          id: "exam-ac-1",
          title: "Evaluación: Atención al Cliente",
          questions: [
            {
              id: "q-ac-1-1",
              question: "En el método HEARD, ¿qué representa la 'E'?",
              options: [
                "Explain (Explicar)",
                "Empathize (Empatizar)",
                "Evaluate (Evaluar)",
                "Execute (Ejecutar)"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ac-1-2",
              question: "Cuando un cliente está enojado, lo primero que debes hacer es:",
              options: [
                "Ofrecer un descuento inmediatamente",
                "Transferirlo a un supervisor",
                "Escucharlo completamente sin interrumpir y validar sus emociones",
                "Explicar por qué el error no fue tu culpa"
              ],
              correctAnswer: 2
            },
            {
              id: "q-ac-1-3",
              question: "¿Cuál es el tiempo ideal de primera respuesta en chat en vivo?",
              options: [
                "Menos de 5 minutos",
                "Menos de 30 segundos",
                "Menos de 2 horas",
                "Cuando tengas tiempo disponible"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ac-1-4",
              question: "En lugar de decir 'No puedo hacer eso', deberías decir:",
              options: [
                "'Ese no es mi trabajo'",
                "'Tiene que hablar con otra persona'",
                "'Lo que sí puedo hacer es...'",
                "'Las políticas no me lo permiten'"
              ],
              correctAnswer: 2
            },
            {
              id: "q-ac-1-5",
              question: "Cuando recibes una queja pública en redes sociales, debes:",
              options: [
                "Borrar el comentario para que otros no lo vean",
                "Ignorarlo y esperar que el cliente se calme",
                "Responder públicamente con apertura y mover a privado para detalles",
                "Responder públicamente con todos los detalles del caso"
              ],
              correctAnswer: 2
            },
            {
              id: "q-ac-1-6",
              question: "¿Qué porcentaje de clientes insatisfechos simplemente se van sin quejarse?",
              options: [
                "26 de cada 27 (96%)",
                "5 de cada 10 (50%)",
                "1 de cada 10 (10%)",
                "Todos se quejan si tienen un problema"
              ],
              correctAnswer: 0
            },
            {
              id: "q-ac-1-7",
              question: "Con un cliente 'conductor' (directo, impaciente), la mejor estrategia es:",
              options: [
                "Hablar de temas personales para construir rapport",
                "Ir al grano, ofrecer soluciones rápidas y respetar su tiempo",
                "Dar muchos detalles y opciones",
                "Tomar las cosas con calma y no presionarlo"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ac-1-8",
              question: "La frase 'Entiendo lo frustrante que debe ser esta situación' es un ejemplo de:",
              options: [
                "Disculpa",
                "Empatía",
                "Solución",
                "Diagnóstico"
              ],
              correctAnswer: 1
            },
            {
              id: "q-ac-1-9",
              question: "Después de una interacción difícil con un cliente, deberías:",
              options: [
                "Quejarte con otros clientes sobre lo mal educado que fue",
                "Guardar resentimiento para la próxima vez que contacte",
                "Tomar un descanso, reflexionar sobre qué funcionó y soltar la emoción",
                "Enviar un email al cliente diciéndole que fue grosero"
              ],
              correctAnswer: 2
            },
            {
              id: "q-ac-1-10",
              question: "¿Cuál de las siguientes NO es una de las 5 necesidades emocionales del cliente?",
              options: [
                "Ser escuchado",
                "Ser valorado",
                "Tener siempre la razón",
                "Sentirse en control"
              ],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: "diseno-canva",
    title: "Diseño Gráfico con Canva",
    slug: "diseno-canva",
    description: "Crea diseños profesionales para redes sociales, presentaciones y materiales de marketing sin ser diseñador.",
    duration: "2 Semanas",
    totalLessons: "12 Lecciones",
    icon: "Palette",
    color: "from-violet-500 to-purple-500",
    certificate: {
      title: "Certificado en Diseño con Canva",
      description: "Ha demostrado competencia en diseño gráfico usando Canva"
    },
    modules: [
      {
        id: "mod-dc-1",
        title: "Fundamentos de Diseño y Canva",
        description: "Aprende los principios de diseño y domina la herramienta Canva",
        theory: [
          {
            id: "lesson-dc-1-1",
            title: "Principios Básicos de Diseño",
            content: `# Principios Básicos de Diseño

## No Necesitas Ser Diseñador

Los principios de diseño son reglas simples que, al seguirlas, hacen que cualquier diseño se vea profesional.

## Los 4 Principios Fundamentales (C.R.A.P.)

### 1. Contraste (Contrast)

El contraste crea interés visual y jerarquía.

**Tipos de contraste:**
- **Tamaño:** Grande vs pequeño
- **Color:** Claro vs oscuro
- **Peso:** Bold vs light
- **Forma:** Cuadrado vs circular

**Regla:** Si dos elementos son diferentes, hazlos MUY diferentes. El contraste tímido parece un error.

**Ejemplo práctico:**
- Título: 48px, bold, color oscuro
- Subtítulo: 24px, regular, color gris
- Cuerpo: 16px, light, color gris claro

### 2. Repetición (Repetition)

La repetición crea consistencia y unidad.

**Elementos a repetir:**
- Colores (paleta limitada)
- Tipografías (máximo 2-3)
- Espaciados
- Estilos de elementos (bordes, sombras)

**Beneficio:** El cerebro reconoce patrones. La repetición hace que el diseño se sienta cohesivo.

### 3. Alineación (Alignment)

Cada elemento debe estar visualmente conectado con otro.

**Reglas de alineación:**
- Nada debe estar colocado arbitrariamente
- Encuentra una línea invisible y alinea elementos a ella
- Evita usar múltiples alineaciones (izquierda Y centro Y derecha)
- La alineación izquierda es la más fácil de leer

**Error común:** Centrar todo. La alineación centrada es más difícil de hacer bien.

### 4. Proximidad (Proximity)

Agrupa elementos relacionados. Separa elementos no relacionados.

**Regla:** El espacio entre elementos comunica relación.
- Elementos juntos = relacionados
- Elementos separados = diferentes categorías

**Ejemplo:** En una tarjeta de contacto, nombre y título juntos. Email y teléfono juntos, pero separados del nombre.

## Teoría del Color

### La Rueda de Color

**Colores primarios:** Rojo, Azul, Amarillo
**Colores secundarios:** Verde, Naranja, Violeta
**Colores terciarios:** Mezclas de primarios y secundarios

### Esquemas de Color

**Monocromático:**
- Un color en diferentes tonos
- Elegante, fácil de usar
- Ideal para principiantes

**Complementario:**
- Colores opuestos en la rueda
- Alto contraste
- Ej: Azul y naranja

**Análogo:**
- Colores adyacentes en la rueda
- Armónico, bajo contraste
- Ej: Azul, azul-verde, verde

**Triádico:**
- Tres colores equidistantes
- Vibrante, equilibrado
- Más complejo de usar

### Psicología del Color

| Color | Asociaciones | Uso común |
|-------|--------------|-----------|
| Azul | Confianza, calma, profesionalismo | Finanzas, tecnología |
| Rojo | Energía, urgencia, pasión | Ofertas, CTAs |
| Verde | Naturaleza, crecimiento, salud | Ecología, wellness |
| Amarillo | Optimismo, claridad, calidez | Precaución, atención |
| Naranja | Creatividad, entusiasmo | Llamados a acción |
| Violeta | Lujo, creatividad, sabiduría | Premium, belleza |
| Negro | Elegancia, poder, sofisticación | Lujo, moda |

## Tipografía Básica

### Categorías de Fuentes

**Serif (con patines):**
- Times New Roman, Georgia, Playfair
- Tradicional, elegante, formal
- Mejor para textos largos impresos

**Sans-serif (sin patines):**
- Arial, Helvetica, Open Sans, Montserrat
- Moderna, limpia, legible
- Ideal para pantallas y web

**Script (cursiva):**
- Pacifico, Great Vibes
- Elegante pero difícil de leer
- Solo para acentos, nunca texto largo

**Display (decorativa):**
- Para títulos y logos únicamente
- Nunca para texto de cuerpo

### Reglas de Combinación

1. **Máximo 2-3 fuentes por diseño**
2. **Contrasta las fuentes:** Una serif con una sans-serif
3. **Jerarquía clara:** Diferente tamaño/peso para cada nivel
4. **Consistencia:** Mismas fuentes en todo el proyecto

### Legibilidad

- Tamaño mínimo para cuerpo: 16px (pantalla), 10pt (impreso)
- Interlineado: 1.4-1.6 del tamaño de fuente
- Ancho de línea: 50-75 caracteres ideal
- Contraste suficiente texto/fondo

## Espacio en Blanco

**El espacio vacío NO es desperdicio.** Es un elemento de diseño.

**Beneficios:**
- Mejora legibilidad
- Crea elegancia
- Dirige la atención
- Da respiro visual

**Regla:** Cuando dudes, agrega más espacio.

> **Mentalidad de diseñador:** El buen diseño no es agregar más cosas. Es quitar hasta que solo quede lo esencial.`
          },
          {
            id: "lesson-dc-1-2",
            title: "Dominando Canva",
            content: `# Dominando Canva

## ¿Por Qué Canva?

- Gratuito (versión Pro con más features)
- Fácil de aprender
- Miles de templates profesionales
- Colaboración en tiempo real
- Exportación en múltiples formatos

## Navegación de Canva

### Dashboard Principal

**Secciones clave:**
- **Crear diseño:** Inicia nuevo proyecto
- **Proyectos:** Tus diseños guardados
- **Plantillas:** Miles de templates
- **Brand Kit (Pro):** Colores y fuentes de marca
- **Carpetas:** Organiza tus diseños

### Editor de Canva

**Barra lateral izquierda:**
- Plantillas
- Elementos (formas, líneas, gráficos)
- Texto
- Uploads (tus imágenes)
- Fotos (biblioteca de Canva)
- Más (apps, audio, video)

**Barra superior:**
- Tamaño del diseño
- Archivo (guardar, descargar)
- Compartir

**Área de trabajo:**
- Canvas donde creas
- Zoom y navegación
- Múltiples páginas

## Funciones Esenciales

### 1. Tamaños Predefinidos

Canva tiene tamaños optimizados para cada plataforma:

**Redes Sociales:**
- Instagram Post: 1080 x 1080 px
- Instagram Story: 1080 x 1920 px
- Facebook Post: 1200 x 630 px
- LinkedIn Post: 1200 x 1200 px

**Documentos:**
- Presentación: 1920 x 1080 px
- A4: 21 x 29.7 cm
- Carta: 8.5 x 11 in

### 2. Uso de Plantillas

**Pasos:**
1. Elige plantilla que te guste
2. Click para aplicar
3. Modifica texto, colores, imágenes
4. Mantén la estructura, personaliza el contenido

**Tip:** Busca por industria o propósito: "marketing", "minimal", "corporate"

### 3. Elementos

**Formas:**
- Rectángulos, círculos, líneas
- Usa para crear fondos, separadores, marcos

**Marcos:**
- Arrastras imagen y se ajusta a la forma
- Ideal para fotos en círculos, formas creativas

**Gráficos:**
- Iconos, ilustraciones, stickers
- Busca por palabra clave
- Filtra por "Free" si no tienes Pro

### 4. Texto

**Agregar texto:**
- Click en "Texto" → "Agregar título/subtítulo/cuerpo"
- O usa combinaciones prediseñadas

**Editar texto:**
- Fuente, tamaño, color, espaciado
- Efectos (sombra, curva, glow)
- Alineación

### 5. Imágenes

**Fuentes de imágenes:**
- Tus uploads
- Biblioteca de Canva (fotos, videos)
- Integraciones (Pexels, Pixabay)

**Edición de imágenes:**
- Filtros predefinidos
- Ajustes (brillo, contraste, saturación)
- Recortar, voltear, rotar
- Eliminar fondo (Pro)

### 6. Capas y Posición

**Orden de capas:**
- Click derecho → Traer al frente / Enviar atrás
- O usa atajos de teclado

**Alineación:**
- Selecciona múltiples elementos
- Click en "Posición" → Alinear

**Agrupar:**
- Selecciona elementos → Click derecho → Agrupar
- Muévelos juntos

## Atajos de Teclado Esenciales

| Atajo | Acción |
|-------|--------|
| T | Agregar texto |
| R | Agregar rectángulo |
| L | Agregar línea |
| C | Agregar círculo |
| Ctrl/Cmd + C/V | Copiar/Pegar |
| Ctrl/Cmd + Z | Deshacer |
| Ctrl/Cmd + G | Agrupar |
| Shift + Click | Selección múltiple |
| Alt + Drag | Duplicar elemento |

## Organización y Workflow

### Carpetas
- Crea carpetas por cliente o proyecto
- Nombra claramente: "Cliente_TipoContenido_Fecha"

### Brand Kit (Pro)
- Guarda colores de marca
- Sube fuentes corporativas
- Logos en diferentes versiones
- Aplica con un click

### Colaboración
- Comparte diseños con clientes
- Comentarios en el diseño
- Permisos de ver vs editar

### Exportación

**Formatos:**
- **PNG:** Imágenes con transparencia, alta calidad
- **JPG:** Fotos, archivos más pequeños
- **PDF:** Documentos, impresión
- **MP4/GIF:** Contenido animado

**Configuración:**
- Calidad (alta para impresión)
- Páginas específicas
- Fondo transparente (PNG)

> **Workflow profesional:** Crea templates base para cada cliente, con sus colores y fuentes. Luego solo duplica y modifica contenido.`
          },
          {
            id: "lesson-dc-1-3",
            title: "Diseño para Redes Sociales",
            content: `# Diseño para Redes Sociales

## El Contenido Visual Domina

**Estadísticas:**
- Posts con imágenes tienen 650% más engagement
- El cerebro procesa imágenes 60,000x más rápido que texto
- 90% de información transmitida al cerebro es visual

## Anatomía del Post Perfecto

### 1. El Gancho Visual (Hook)
Lo primero que ven debe capturar atención.
- Imagen impactante
- Texto bold grande
- Color llamativo
- Elemento inesperado

### 2. El Mensaje Central
Qué quieres comunicar.
- Una idea por post
- Claro y conciso
- Jerarquía visual clara

### 3. El Call to Action
Qué quieres que hagan.
- Guardar, compartir, comentar
- Ir a link en bio
- Comprar, inscribirse

### 4. Branding
Que sepan quién eres.
- Logo sutil
- Colores consistentes
- Estilo reconocible

## Diseño por Plataforma

### Instagram Feed (1080x1080)

**Tipos de contenido:**
- Carruseles educativos
- Quotes/frases
- Producto/servicio
- Behind the scenes

**Tips:**
- Paleta de colores consistente
- El feed completo debe verse cohesivo
- Texto legible en móvil (mínimo 30px)
- Deja espacio para caption

**Template carrusel educativo:**
1. Slide 1: Hook/Título impactante
2. Slides 2-8: Contenido de valor
3. Slide 9: Resumen + CTA
4. Slide 10: Logo + "Síguenos para más"

### Instagram Stories (1080x1920)

**Características:**
- Formato vertical completo
- Efímero (24 horas)
- Interactivo (encuestas, preguntas)

**Tips:**
- Texto en el centro (evita bordes)
- Stickers interactivos
- Movimiento/animación
- 15 segundos máximo de lectura

### LinkedIn (1200x1200 o 1200x627)

**Tono:**
- Más profesional
- Datos y estadísticas
- Insight de industria
- Menos colores saturados

**Tipos efectivos:**
- Infografías con datos
- Quotes de liderazgo
- Celebraciones profesionales
- Documentos/carruseles educativos

### Facebook (1200x630)

**Consideraciones:**
- Audiencia más diversa en edad
- Texto más visible (menos restricciones)
- Compartir es importante

## Creando Consistencia de Marca

### Brand Board Simple

Define y documenta:
1. **Colores:** 3-5 colores (primario, secundario, acento)
2. **Tipografías:** 2 fuentes máximo
3. **Estilo de fotos:** Filtros, tonos
4. **Elementos gráficos:** Formas, iconos, patrones

### Aplicación Práctica

**Para cada cliente, crea:**
- Template de post cuadrado
- Template de historia
- Template de carrusel
- Paleta de colores guardada

## Errores Comunes a Evitar

### 1. Demasiado Texto
- Redes sociales = visual primero
- Regla 20%: No más del 20% del diseño en texto

### 2. Mala Legibilidad
- Texto sobre imagen sin contraste
- Fuentes muy pequeñas
- Demasiadas fuentes diferentes

### 3. Diseño Genérico
- No tener estilo propio
- Copiar trends sin adaptarlos
- Inconsistencia en el feed

### 4. Ignorar el Móvil
- 90%+ ve en móvil
- Siempre previsualiza en tamaño real
- Texto debe ser legible en pantalla pequeña

## Checklist Pre-Publicación

- [ ] ¿El hook es lo primero que se ve?
- [ ] ¿El mensaje es claro y conciso?
- [ ] ¿Hay jerarquía visual clara?
- [ ] ¿Los colores son de marca?
- [ ] ¿El texto es legible en móvil?
- [ ] ¿Hay CTA claro?
- [ ] ¿El branding está presente pero no dominante?
- [ ] ¿Se ve bien en el feed general?
- [ ] ¿El formato es correcto para la plataforma?

> **Mentalidad:** El mejor diseño es el que comunica claramente y genera la acción deseada. La estética sirve a la función, no al revés.`
          }
        ],
        sprint: {
          id: "sprint-dc-1",
          title: "Sprint: Diseño Profesional en Canva",
          description: "Demuestra tu capacidad de crear diseños profesionales para diferentes propósitos",
          tasks: [
            {
              id: "task-dc-1-1",
              question: "Kit de Marca Visual: Crea un brand board para una marca ficticia o real que incluya: (1) Paleta de colores (5 colores con códigos hex), (2) 2 tipografías que combinen bien y justificación de la elección, (3) 3 variaciones del logo o marca (principal, secundario, icono), (4) Estilo de fotografía/imágenes con 3 ejemplos. Presenta todo en un documento de Canva de una página."
            },
            {
              id: "task-dc-1-2",
              question: "Pack de Redes Sociales: Usando la marca del ejercicio anterior, crea un pack completo que incluya: (1) 3 posts de Instagram feed (1080x1080) con diferentes propósitos (educativo, promocional, engagement), (2) 2 Stories de Instagram (1080x1920), (3) 1 post de LinkedIn profesional (1200x1200). Todos deben verse parte de la misma marca y seguir los principios C.R.A.P."
            },
            {
              id: "task-dc-1-3",
              question: "Carrusel Educativo: Crea un carrusel de 10 slides para Instagram sobre un tema de tu elección relacionado con asistencia virtual. Debe incluir: (1) Slide de hook/portada impactante, (2) 7-8 slides de contenido valioso y bien diseñado, (3) Slide de resumen/cierre, (4) Slide con CTA y branding. El diseño debe ser consistente, legible en móvil y seguir los principios de diseño aprendidos."
            }
          ]
        },
        exam: {
          id: "exam-dc-1",
          title: "Evaluación: Diseño con Canva",
          questions: [
            {
              id: "q-dc-1-1",
              question: "Los 4 principios fundamentales de diseño (C.R.A.P.) son:",
              options: [
                "Color, Resolución, Animación, Proporción",
                "Contraste, Repetición, Alineación, Proximidad",
                "Creatividad, Ritmo, Arte, Perspectiva",
                "Composición, Reglas, Abstracción, Profundidad"
              ],
              correctAnswer: 1
            },
            {
              id: "q-dc-1-2",
              question: "El principio de Proximidad establece que:",
              options: [
                "Los elementos deben estar lo más cerca posible",
                "Los elementos relacionados deben estar juntos y los no relacionados separados",
                "Todo debe estar centrado",
                "Debe haber el mismo espacio entre todos los elementos"
              ],
              correctAnswer: 1
            },
            {
              id: "q-dc-1-3",
              question: "¿Cuántas fuentes se recomienda usar máximo en un diseño?",
              options: [
                "1 fuente solamente",
                "2-3 fuentes",
                "5-6 fuentes",
                "No hay límite"
              ],
              correctAnswer: 1
            },
            {
              id: "q-dc-1-4",
              question: "El tamaño correcto para un post de Instagram feed es:",
              options: [
                "1200 x 630 px",
                "1080 x 1920 px",
                "1080 x 1080 px",
                "1920 x 1080 px"
              ],
              correctAnswer: 2
            },
            {
              id: "q-dc-1-5",
              question: "Las fuentes 'Sans-serif' se caracterizan por:",
              options: [
                "Tener patines decorativos en los extremos",
                "Ser cursivas y elegantes",
                "No tener patines, siendo más limpias y modernas",
                "Ser solo para títulos grandes"
              ],
              correctAnswer: 2
            },
            {
              id: "q-dc-1-6",
              question: "El color azul generalmente se asocia con:",
              options: [
                "Urgencia y energía",
                "Naturaleza y crecimiento",
                "Confianza, calma y profesionalismo",
                "Creatividad y lujo"
              ],
              correctAnswer: 2
            },
            {
              id: "q-dc-1-7",
              question: "Respecto al espacio en blanco en diseño:",
              options: [
                "Es espacio desperdiciado que debe llenarse",
                "Es un elemento de diseño que mejora legibilidad y elegancia",
                "Solo se usa en diseños minimalistas",
                "Debe evitarse en redes sociales"
              ],
              correctAnswer: 1
            },
            {
              id: "q-dc-1-8",
              question: "El mejor formato para exportar una imagen con fondo transparente es:",
              options: [
                "JPG",
                "PDF",
                "PNG",
                "MP4"
              ],
              correctAnswer: 2
            },
            {
              id: "q-dc-1-9",
              question: "En un carrusel de Instagram, el primer slide debe:",
              options: [
                "Mostrar el logo grande de la marca",
                "Tener un hook visual impactante que capture la atención",
                "Incluir toda la información importante",
                "Ser completamente blanco para generar curiosidad"
              ],
              correctAnswer: 1
            },
            {
              id: "q-dc-1-10",
              question: "¿Qué porcentaje máximo de texto se recomienda en un post de redes sociales?",
              options: [
                "50%",
                "20%",
                "80%",
                "No hay límite"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "ingles-negocios",
    title: "Inglés para Negocios",
    slug: "ingles-negocios",
    description: "Desarrolla habilidades de comunicación en inglés para el entorno profesional internacional.",
    duration: "4 Semanas",
    totalLessons: "20 Lecciones",
    icon: "Globe",
    color: "from-red-500 to-orange-500",
    certificate: {
      title: "Certificado en Inglés para Negocios",
      description: "Ha demostrado competencia en inglés profesional para negocios"
    },
    modules: [
      {
        id: "mod-in-1",
        title: "Comunicación Escrita en Inglés",
        description: "Domina emails, mensajes y documentos profesionales en inglés",
        theory: [
          {
            id: "lesson-in-1-1",
            title: "Email Writing for Business",
            content: `# Email Writing for Business

## Why Business English Matters

Como AV trabajando con clientes internacionales, el inglés es tu herramienta para acceder a un mercado mucho más grande y mejor pagado.

**Estadísticas:**
- 75% de clientes en Upwork son de países angloparlantes
- AVs bilingües ganan 30-50% más en promedio
- El inglés es el idioma de negocios global

## Email Structure in English

### 1. Subject Line (Línea de Asunto)

**Effective patterns:**
- [Action Required] + Topic + Deadline
- Quick question about [topic]
- Following up on [topic]
- [FYI] Information about [topic]

**Examples:**
- ✅ "Meeting reschedule request - Thursday 3pm"
- ✅ "Quick question about the Q2 report"
- ❌ "Hi" / "Question" / "URGENT!!!"

### 2. Greeting (Saludo)

**Formal:**
- Dear Mr./Ms. [Last Name],
- Dear [First Name], (when you know them)

**Semi-formal:**
- Hello [Name],
- Hi [Name],

**When you don't know the name:**
- Dear Hiring Manager,
- Dear Sir or Madam, (very formal)
- Hello, (general)

### 3. Opening Lines (Líneas de Apertura)

**Starting the conversation:**
- I hope this email finds you well.
- Thank you for your email.
- Following up on our conversation...
- I'm writing to inquire about...
- I wanted to reach out regarding...

**Avoid:**
- "I am writing to inform you that..." (outdated)
- Starting with "I" when possible (vary sentence structure)

### 4. Body (Cuerpo)

**Keep it:**
- Brief and to the point
- One topic per paragraph
- Bullet points for lists
- Clear action items

**Useful phrases:**

*Requesting:*
- Could you please...
- Would it be possible to...
- I would appreciate if you could...

*Informing:*
- I wanted to let you know that...
- Please be advised that...
- Just a heads up that...

*Confirming:*
- I can confirm that...
- This is to confirm...
- As discussed, ...

*Apologizing:*
- I apologize for...
- Sorry for the delay in responding.
- I'm sorry for any inconvenience caused.

### 5. Closing Lines (Líneas de Cierre)

- Please let me know if you have any questions.
- I look forward to hearing from you.
- Don't hesitate to reach out if you need anything.
- Thank you for your time.
- Looking forward to your response.

### 6. Sign-off (Despedida)

**Formal:**
- Best regards,
- Kind regards,
- Sincerely,

**Semi-formal:**
- Best,
- Thanks,
- Cheers, (UK/Australia)

## Common Email Templates

### Template 1: Introduction Email

\`\`\`
Subject: Introduction - [Your Name], Virtual Assistant

Hello [Name],

I hope this message finds you well. My name is [Your Name],
and I'll be your virtual assistant starting [date].

A little about me: I specialize in [your skills] and have
[X years] of experience in [field].

I'm excited to work together and support you with [specific tasks].

Please feel free to share any initial information or tasks
you'd like me to start with.

Looking forward to our collaboration!

Best regards,
[Your Name]
\`\`\`

### Template 2: Status Update

\`\`\`
Subject: Weekly Update - [Date Range]

Hi [Name],

Here's a quick update on this week's progress:

**Completed:**
• [Task 1]
• [Task 2]

**In Progress:**
• [Task 3] - estimated completion: [date]

**Pending:**
• [Task 4] - waiting for [what you need]

Please let me know if you'd like me to prioritize anything
differently.

Best,
[Your Name]
\`\`\`

### Template 3: Asking for Clarification

\`\`\`
Subject: Quick clarification needed - [Topic]

Hi [Name],

I wanted to make sure I understand correctly before proceeding.

Regarding [topic], are you asking me to:
a) [Option 1]
b) [Option 2]

Please let me know which approach you prefer, and I'll
get started right away.

Thanks!
[Your Name]
\`\`\`

## Common Mistakes to Avoid

### 1. False Friends (Falsos Amigos)
- Actually ≠ Actualmente (use: currently)
- Eventually ≠ Eventualmente (use: possibly/perhaps)
- Assist ≠ Asistir (use: attend for events)

### 2. Direct Translation Errors
- ❌ "I have 25 years" → ✅ "I am 25 years old"
- ❌ "I am agree" → ✅ "I agree"
- ❌ "Make a question" → ✅ "Ask a question"

### 3. Tone Issues
- Too informal: "Hey! What's up?" (to a new client)
- Too formal: "I hereby declare..." (for casual communication)

> **Pro Tip:** When in doubt, slightly more formal is better than too casual with clients you don't know well.`
          },
          {
            id: "lesson-in-1-2",
            title: "Professional Vocabulary",
            content: `# Professional Vocabulary

## Essential Business Vocabulary

### Meeting & Scheduling

| English | Spanish | Example |
|---------|---------|---------|
| Schedule a meeting | Agendar reunión | "Let's schedule a meeting for tomorrow" |
| Reschedule | Reagendar | "I need to reschedule our call" |
| Availability | Disponibilidad | "What's your availability this week?" |
| Time slot | Espacio de tiempo | "I have a slot open at 2 PM" |
| ASAP | Lo antes posible | "I need this ASAP" |
| EOD | Fin del día | "Please send by EOD" |
| ETA | Tiempo estimado | "What's the ETA on the report?" |

### Project Management

| English | Spanish | Example |
|---------|---------|---------|
| Deadline | Fecha límite | "The deadline is Friday" |
| Deliverable | Entregable | "What are the main deliverables?" |
| Milestone | Hito | "We hit an important milestone" |
| Scope | Alcance | "That's outside the project scope" |
| Stakeholder | Parte interesada | "I'll update the stakeholders" |
| Follow up | Dar seguimiento | "I'll follow up on this tomorrow" |
| Touch base | Ponerse en contacto | "Let's touch base next week" |

### Communication

| English | Spanish | Example |
|---------|---------|---------|
| Loop in | Incluir en comunicación | "Let me loop in the team" |
| Keep in the loop | Mantener informado | "Please keep me in the loop" |
| Get back to | Responder/volver a | "I'll get back to you by tomorrow" |
| Reach out | Contactar | "Feel free to reach out anytime" |
| Circle back | Volver a un tema | "Let's circle back on this later" |
| On the same page | En sintonía | "I want to make sure we're on the same page" |

### Tasks & Work

| English | Spanish | Example |
|---------|---------|---------|
| Prioritize | Priorizar | "Let me prioritize these tasks" |
| Delegate | Delegar | "I can delegate this task" |
| Streamline | Optimizar | "We need to streamline this process" |
| Implement | Implementar | "Let's implement the new system" |
| Handle | Manejar/encargarse | "I can handle that for you" |
| Take care of | Encargarse de | "I'll take care of the emails" |

### Results & Status

| English | Spanish | Example |
|---------|---------|---------|
| On track | En camino/según plan | "The project is on track" |
| Behind schedule | Retrasado | "We're slightly behind schedule" |
| Ahead of schedule | Adelantado | "Great news - we're ahead!" |
| Bottleneck | Cuello de botella | "There's a bottleneck in the process" |
| Workaround | Solución alternativa | "I found a workaround" |
| Quick win | Victoria rápida | "Here's a quick win we can achieve" |

## Phrasal Verbs for Business

### Essential Phrasal Verbs

**Set up** - Configurar/establecer
- "I'll set up the meeting room"
- "Let me set up your account"

**Follow up** - Dar seguimiento
- "I'll follow up with the client"
- "Following up on my previous email..."

**Look into** - Investigar
- "Let me look into that for you"
- "I'll look into the issue"

**Figure out** - Resolver/entender
- "I'm trying to figure out the problem"
- "Let me figure out the best approach"

**Wrap up** - Finalizar
- "Let's wrap up this meeting"
- "I'll wrap up the project today"

**Put together** - Preparar/armar
- "I'll put together a report"
- "Let me put together some options"

**Run by** - Consultar
- "Can I run something by you?"
- "Let me run this by the team"

**Fill in** - Informar/completar
- "Can you fill me in on what happened?"
- "Please fill in the form"

## Expressions for Common Situations

### When You Don't Understand
- "Could you please clarify what you mean by...?"
- "I'm not sure I understand. Could you explain further?"
- "Just to make sure I understand correctly..."

### When You Need More Time
- "I'll need a bit more time to complete this properly."
- "Would it be possible to extend the deadline?"
- "I want to make sure I do this right - can I have until [day]?"

### When You Made a Mistake
- "I apologize for the error. I'll fix it right away."
- "That was my oversight. Let me correct it."
- "Thanks for catching that. I'll make the correction immediately."

### When You Disagree Professionally
- "I see your point, however..."
- "That's one approach. Another option might be..."
- "I understand, but have you considered...?"

### When Giving Bad News
- "Unfortunately, I have to inform you that..."
- "I'm afraid that won't be possible because..."
- "I wish I had better news, but..."

## Pronunciation Tips

### Commonly Mispronounced Business Words

| Word | Wrong | Correct |
|------|-------|---------|
| Schedule | /skediul/ | /ˈskedʒuːl/ (US) /ˈʃedjuːl/ (UK) |
| Budget | /budget/ | /ˈbʌdʒɪt/ |
| Report | /report/ | /rɪˈpɔːrt/ |
| Analysis | /ana-li-sis/ | /əˈnæləsɪs/ |
| Statistics | /esta-dis-tics/ | /stəˈtɪstɪks/ |
| Colleague | /co-le-gue/ | /ˈkɒliːɡ/ |

### Silent Letters to Remember
- Wednesday: /ˈwenzdeɪ/ (silent 'd')
- Receipt: /rɪˈsiːt/ (silent 'p')
- Business: /ˈbɪznəs/ (silent 'i')

> **Practice Tip:** Record yourself speaking and compare with native speakers. Apps like Elsa Speak can help with pronunciation.`
          },
          {
            id: "lesson-in-1-3",
            title: "Video Calls in English",
            content: `# Video Calls in English

## Preparing for English Calls

### Before the Call

**Technical preparation:**
- Test audio and video
- Have stable internet
- Quiet environment
- Professional background

**Language preparation:**
- Review key vocabulary for the topic
- Prepare main points in writing
- Have common phrases ready
- Practice out loud if nervous

## Call Structure and Phrases

### 1. Starting the Call

**Greetings:**
- "Hi everyone, thanks for joining."
- "Hello, can everyone hear me okay?"
- "Good morning/afternoon/evening."

**Small talk (1-2 minutes):**
- "How's your day going?"
- "How was your weekend?"
- "How's the weather where you are?"

**Transitioning to business:**
- "So, shall we get started?"
- "Let's dive in, shall we?"
- "I know everyone's busy, so let's begin."

### 2. During the Call

**Stating the agenda:**
- "Today, I'd like to cover..."
- "The purpose of this call is to..."
- "We have three main topics to discuss."

**Asking for input:**
- "What are your thoughts on this?"
- "Does anyone have questions?"
- "I'd love to hear your input."

**Agreeing:**
- "That's a great point."
- "I completely agree."
- "Absolutely."

**Disagreeing (politely):**
- "I see where you're coming from, but..."
- "That's interesting. Have you considered...?"
- "I have a slightly different perspective."

**Asking for clarification:**
- "Sorry, could you repeat that?"
- "I didn't quite catch that."
- "Could you explain what you mean by...?"

**When you don't understand:**
- "I'm sorry, I'm having trouble understanding. Could you speak a bit slower?"
- "My connection might be bad. Could you say that again?"
- "Sorry, could you rephrase that?"

### 3. Technical Issues

**Audio problems:**
- "You're breaking up a little."
- "Can you hear me okay?"
- "Let me try reconnecting."
- "I think there's some lag."

**Video problems:**
- "I can't see your screen."
- "Your video froze for a second."
- "Let me turn off my video to improve the connection."

### 4. Closing the Call

**Summarizing:**
- "So, to summarize..."
- "Let me recap what we discussed."
- "The main action items are..."

**Next steps:**
- "I'll send a follow-up email with the notes."
- "Let's schedule our next call."
- "I'll have that ready by [date]."

**Saying goodbye:**
- "Thanks everyone for your time."
- "Great talking with you all."
- "Have a great rest of your day/week."
- "Talk to you soon."

## Handling Difficult Situations

### When You Need a Moment to Think

- "That's a good question. Let me think about that for a moment."
- "I want to make sure I give you an accurate answer. Can I get back to you on that?"
- "Let me gather my thoughts on that."

### When You Don't Know Something

- "I'm not 100% sure, but I believe..."
- "I'll need to double-check that and get back to you."
- "I don't want to give you incorrect information. Let me verify and follow up."

### When Someone Speaks Too Fast

- "Sorry, could you slow down a bit? I want to make sure I don't miss anything."
- "Would you mind repeating that a bit slower?"
- "I'm taking notes - could you give me a second to catch up?"

### When There's Conflict

- "I understand your concern. Let's work together to find a solution."
- "I hear what you're saying. Perhaps we could..."
- "Let's take a step back and look at this from both perspectives."

## Improving Your Spoken English

### Daily Practices

1. **Shadowing:** Listen and repeat native speakers
2. **Record yourself:** Compare with native pronunciation
3. **Think in English:** Narrate your day mentally in English
4. **Conversation practice:** Language exchange apps (Tandem, HelloTalk)

### Resources

**Podcasts:**
- Business English Pod
- All Ears English
- The English We Speak (BBC)

**YouTube:**
- English with Lucy
- Rachel's English
- Business English - Learn with Videos

### Confidence Tips

- Preparation reduces anxiety
- It's okay to pause and think
- Mistakes are part of learning
- Native speakers appreciate the effort
- Focus on communication, not perfection

> **Mindset:** Your accent is not a problem. Clear communication is the goal, not sounding "native." Many successful international professionals have accents and communicate excellently.`
          }
        ],
        sprint: {
          id: "sprint-in-1",
          title: "Sprint: Business English in Action",
          description: "Demuestra tu capacidad de comunicarte profesionalmente en inglés",
          tasks: [
            {
              id: "task-in-1-1",
              question: "Email Portfolio: Write 4 professional emails in English for different scenarios: (1) Introduction email to a new US-based client explaining your services, (2) A polite email declining a project because you're at capacity, offering alternatives, (3) A follow-up email after a client hasn't responded in a week, (4) An email apologizing for a mistake you made and explaining how you'll fix it. Each email should follow proper business English structure and tone."
            },
            {
              id: "task-in-1-2",
              question: "Vocabulary Application: Create a document with 20 sentences using business English vocabulary and phrasal verbs learned in this module. Each sentence must be in a realistic business context and demonstrate correct usage. Include at least 5 phrasal verbs, 5 scheduling terms, 5 project management terms, and 5 communication expressions."
            },
            {
              id: "task-in-1-3",
              question: "Video Call Script: Write a complete script for a 10-minute video call with an English-speaking client. The scenario: You're presenting a weekly progress update and need to inform them of a delay in one deliverable. Include: (1) Opening/small talk, (2) Agenda statement, (3) Progress update, (4) Explaining the delay professionally with solutions, (5) Next steps, (6) Closing. Use appropriate phrases from the lesson for each section."
            }
          ]
        },
        exam: {
          id: "exam-in-1",
          title: "Evaluación: Business English",
          questions: [
            {
              id: "q-in-1-1",
              question: "Which is the correct way to start a formal email to someone you don't know?",
              options: [
                "Hey there!",
                "Dear Sir or Madam,",
                "Hola!",
                "Sup?"
              ],
              correctAnswer: 1
            },
            {
              id: "q-in-1-2",
              question: "What does 'EOD' mean in business communication?",
              options: [
                "End of Discussion",
                "Early on Delivery",
                "End of Day",
                "Every Other Day"
              ],
              correctAnswer: 2
            },
            {
              id: "q-in-1-3",
              question: "'Let me circle back on this' means:",
              options: [
                "Let me go around in circles",
                "Let me return to this topic later",
                "Let me ask my team",
                "Let me cancel this"
              ],
              correctAnswer: 1
            },
            {
              id: "q-in-1-4",
              question: "Which phrase is appropriate when you don't understand something in a call?",
              options: [
                "'What?' repeated loudly",
                "'Could you please clarify what you mean by...?'",
                "'I don't get it'",
                "'Speak English!'"
              ],
              correctAnswer: 1
            },
            {
              id: "q-in-1-5",
              question: "'Actually' in English means:",
              options: [
                "Actualmente (currently)",
                "En realidad (in reality/truth)",
                "Posiblemente (possibly)",
                "Eventualmente (eventually)"
              ],
              correctAnswer: 1
            },
            {
              id: "q-in-1-6",
              question: "The correct phrase is:",
              options: [
                "'I am agree with you'",
                "'I am agreed with you'",
                "'I agree with you'",
                "'I have agree with you'"
              ],
              correctAnswer: 2
            },
            {
              id: "q-in-1-7",
              question: "To 'loop someone in' means:",
              options: [
                "To confuse someone",
                "To include someone in communication",
                "To exclude someone",
                "To put someone in a loop"
              ],
              correctAnswer: 1
            },
            {
              id: "q-in-1-8",
              question: "Which closing is appropriate for a professional email?",
              options: [
                "XOXO,",
                "Later dude,",
                "Best regards,",
                "Bye bye!"
              ],
              correctAnswer: 2
            },
            {
              id: "q-in-1-9",
              question: "When you need time to think during a call, you should say:",
              options: [
                "Wait, I'm thinking",
                "Ummmm....",
                "That's a good question. Let me think about that for a moment.",
                "I don't know"
              ],
              correctAnswer: 2
            },
            {
              id: "q-in-1-10",
              question: "Which is the correct sentence?",
              options: [
                "'I have 30 years'",
                "'I am 30 years'",
                "'I am 30 years old'",
                "'I have 30 years old'"
              ],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  }
];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return coursesData.find(course => course.slug === slug);
};

export const getCourseById = (id: string): CourseData | undefined => {
  return coursesData.find(course => course.id === id);
};
