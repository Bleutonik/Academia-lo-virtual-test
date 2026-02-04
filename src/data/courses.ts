import { CourseData } from "@/types/course";

// Helper function to get course by slug
export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return coursesData.find(course => course.slug === slug);
};

export const coursesData: CourseData[] = [
  {
    id: "english-course",
    title: "Inglés para Asistentes Virtuales",
    slug: "english-course",
    description: "Domina el inglés desde nivel básico hasta avanzado. 6 niveles completos (A1-C2) con gramática, vocabulario y ejercicios prácticos.",
    duration: "~40 horas",
    totalLessons: "48 Lecciones + Juegos Interactivos",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    certificate: {
      title: "Certificado de Inglés para Asistentes Virtuales",
      description: "Ha completado satisfactoriamente el curso de Inglés con todos los niveles A1-C2"
    },
    modules: [
      {
        id: "mod-english-a1",
        title: "Nivel A1 - Principiante",
        description: "Fundamentos del inglés: verbo To Be, presente simple, artículos y vocabulario básico",
        theory: [
          {
            id: "lesson-a1-grammar",
            title: "Gramática A1: Fundamentos",
            content: `# Gramática Nivel A1: Fundamentos del Inglés

## 1. Verb To Be (Ser / Estar)

El verbo fundamental del inglés. Se usa para identificar, describir y ubicar.

**Conjugación:**
| Sujeto | Verbo |
|--------|-------|
| I | am |
| You | are |
| He/She/It | is |
| We/They | are |

**Ejemplos:**
- I **am** happy. (Estoy feliz)
- She **is** my friend. (Ella es mi amiga)

---

## 2. Present Simple (Presente Simple)

Para rutinas, hábitos y hechos generales.

**Regla:** He/She/It añade -s o -es al verbo.

**Ejemplos:**
- I **work** every day.
- He **works** here.
- She **likes** pizza.

---

## 3. Present Continuous (Presente Continuo)

Para acciones que ocurren AHORA MISMO.

**Regla:** To Be + Verbo-ING

**Ejemplos:**
- I **am studying** English.
- They **are sleeping** now.
- We **are learning** together.

---

## 4. Articles: A / An

**Regla:**
- **A** + consonante: a car, a book, a house
- **An** + vocal: an apple, an orange, an umbrella

---

## 5. There is / There are

Para expresar existencia (Haber).

**Regla:**
- **There is** + singular: There is a cat.
- **There are** + plural: There are two cars.

---

## 6. Pronouns (Pronombres)

**Sujeto vs Objeto:**

| Sujeto | Objeto |
|--------|--------|
| I | me |
| You | you |
| He | him |
| She | her |
| It | it |
| We | us |
| They | them |

**Ejemplo:** I love **him**. (Yo lo amo a él)

---

## 7. WH Questions

Preguntas abiertas:
- **What** = Qué
- **Where** = Dónde
- **When** = Cuándo
- **Who** = Quién
- **Why** = Por qué
- **How** = Cómo

---

## 8. Demonstratives (Demostrativos)

| Singular | Plural | Distancia |
|----------|--------|-----------|
| This | These | Cerca |
| That | Those | Lejos |

---

## 9. Modal: Can

Expresa habilidad o posibilidad.

**Regla:** Can + verbo base (sin "to")

- She **can** swim.
- **Can** you help me?

---

## 10. Have Got

Para posesión.

**Regla:**
- I/You/We/They **have got**
- He/She/It **has got**

**Ejemplo:** I've got a car. He has got a dog.

---

## 11. Imperatives (Imperativos)

Órdenes o instrucciones. Sin sujeto.

- **Sit** down!
- **Open** the door!
- **Don't** go there!

---

## 12. Adverbs of Frequency

| Adverbio | Frecuencia |
|----------|------------|
| Always | 100% |
| Usually | 80% |
| Often | 60% |
| Sometimes | 40% |
| Rarely | 20% |
| Never | 0% |

**Ejemplo:** I **always** eat breakfast.

---

## 13. Prepositions of Place

- **In** = dentro (in the box)
- **On** = sobre (on the table)
- **Under** = debajo (under the bed)
- **Next to** = al lado (next to the door)
- **Between** = entre (between two chairs)

---

## 14. Prepositions of Time

- **AT** = horas (at 5 o'clock)
- **ON** = días (on Monday)
- **IN** = meses/años (in January, in 2024)

---

## 15. Some / Any

- **Some** = oraciones positivas (I have some money)
- **Any** = negativas/preguntas (I don't have any water)

---

## 16. Past of To Be

| Sujeto | Pasado |
|--------|--------|
| I/He/She/It | was |
| You/We/They | were |

---

## 17. Past Simple: Regular Verbs

Añadir **-ed** al verbo.
- work → worked
- play → played
- watch → watched

---

## 18. Past Simple: Irregular Verbs

Memorizar la forma irregular:
- go → **went**
- have → **had**
- eat → **ate**
- see → **saw**

---

## 19. Comparatives

Para comparar dos cosas:
- Short adjectives: add **-er** (tall → taller)
- Long adjectives: use **more** (expensive → more expensive)

---

## 20. Going To (Future)

Para planes futuros:

**Regla:** To Be + going to + verbo

**Ejemplo:** I **am going to** travel next week.`
          },
          {
            id: "lesson-a1-vocab",
            title: "Vocabulario A1: Básico",
            content: `# Vocabulario Nivel A1

## Números (Numbers)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| One | Uno | One apple |
| Two | Dos | Two cats |
| Three | Tres | Three dogs |
| Four | Cuatro | Four cars |
| Five | Cinco | Five fingers |
| Ten | Diez | Ten toes |
| Twenty | Veinte | Number 20 |
| Fifty | Cincuenta | 50 percent |
| One Hundred | Cien | 100 points |
| Zero | Cero | Zero problems |

---

## Saludos (Greetings)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Hello | Hola | Hello friend! |
| Goodbye | Adiós | Goodbye, see you! |
| Good morning | Buenos días | Good morning mom |
| Good night | Buenas noches | Sleep well, good night |
| How are you? | ¿Cómo estás? | Hi, how are you? |
| Nice to meet you | Encantado/a | I'm Paul, nice to meet you |

---

## Familia (Family)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Mother | Madre | My mother is nice |
| Father | Padre | My father works here |
| Sister | Hermana | I have a sister |
| Brother | Hermano | My brother is tall |
| Grandmother | Abuela | Love you grandma |
| Friend | Amigo/a | Best friend |

---

## Colores (Colors)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Red | Rojo | Red apple |
| Blue | Azul | Blue sky |
| Green | Verde | Green grass |
| Yellow | Amarillo | Yellow sun |
| Black | Negro | Black cat |
| White | Blanco | White snow |

---

## Tiempo (Time)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Monday | Lunes | On Monday |
| Friday | Viernes | Party on Friday |
| Sunday | Domingo | Sunday morning |
| Today | Hoy | Today is hot |
| Tomorrow | Mañana | See you tomorrow |
| Week | Semana | This week |

---

## Práctica de Vocabulario

**Ejercicio:** Completa las oraciones:

1. My _______ is nice. (madre)
2. The sky is _______. (azul)
3. Today is _______. (lunes)
4. _______, how are you? (hola)
5. I have _______ cats. (dos)

**Respuestas:** 1. mother, 2. blue, 3. Monday, 4. Hello, 5. two`
          }
        ],
        sprint: {
          title: "Sprint A1: Fundamentos",
          description: "Demuestra tu dominio del inglés básico",
          tasks: [
            {
              id: "task-a1-1",
              question: "Escribe 5 oraciones usando el verbo TO BE en diferentes personas (I, You, He, She, They)."
            },
            {
              id: "task-a1-2",
              question: "Traduce al inglés: Mi hermano tiene un carro azul. Ella está en la casa. Nosotros vamos al parque mañana."
            }
          ]
        },
        exam: {
          title: "Examen A1",
          description: "Evalúa tus conocimientos del nivel A1",
          passingScore: 70,
          questions: [
            { id: "q1", question: "She ___ happy.", options: ["is", "are", "am"], correctAnswer: 0 },
            { id: "q2", question: "They ___ play soccer.", options: ["doesn't", "don't", "not"], correctAnswer: 1 },
            { id: "q3", question: "___ you speak English?", options: ["Does", "Is", "Do"], correctAnswer: 2 },
            { id: "q4", question: "I am ___ TV now.", options: ["watch", "watching", "watched"], correctAnswer: 1 },
            { id: "q5", question: "There ___ two cats.", options: ["is", "are", "am"], correctAnswer: 1 },
            { id: "q6", question: "I have ___ money.", options: ["some", "any", "a"], correctAnswer: 0 },
            { id: "q7", question: "Past of 'Go'?", options: ["Goed", "Gone", "Went"], correctAnswer: 2 },
            { id: "q8", question: "She ___ play piano.", options: ["can", "cans", "can to"], correctAnswer: 0 },
            { id: "q9", question: "Big → ___ (Comparative)", options: ["More big", "Bigger", "Bigest"], correctAnswer: 1 },
            { id: "q10", question: "___ apple.", options: ["A", "An", "Two"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-english-a2",
        title: "Nivel A2 - Elemental",
        description: "Pasado simple, presente perfecto, futuro con Will/Going to y modales",
        theory: [
          {
            id: "lesson-a2-grammar",
            title: "Gramática A2: Intermedio Bajo",
            content: `# Gramática Nivel A2: Consolidando las Bases

## 1. Past Simple (Pasado Simple)

Acciones terminadas en el pasado.

**Verbos Regulares:** añadir -ed
- play → played
- work → worked

**Verbos Irregulares:** forma especial
- go → went
- see → saw
- have → had

**Ejemplo:** I **visited** London last year.

---

## 2. Past Continuous (Pasado Continuo)

Acciones en progreso en el pasado.

**Regla:** Was/Were + Verb-ING

**Ejemplos:**
- I **was watching** TV at 8pm.
- They **were sleeping** when I called.

---

## 3. Present Perfect (Presente Perfecto)

Experiencias de vida (sin fecha exacta).

**Regla:** Have/Has + Participio (3ª columna)

**Ejemplos:**
- I **have been** to Paris.
- She **has eaten** sushi.
- Have you ever **visited** Japan?

---

## 4. Future: Will vs Going to

| Will | Going to |
|------|----------|
| Decisión rápida | Plan previo |
| Predicción sin evidencia | Predicción con evidencia |

**Ejemplos:**
- I'**ll** help you. (decisión del momento)
- I'**m going to** fly to Madrid. (plan)
- Look at those clouds! It'**s going to** rain. (evidencia)

---

## 5. Must & Have to (Obligación)

| Must | Have to |
|------|---------|
| Obligación interna | Obligación externa |
| Personal | Reglas/Leyes |

**Ejemplos:**
- You **must** be honest. (convicción personal)
- You **have to** wear a uniform. (regla del trabajo)
- You **mustn't** smoke here. (prohibido)

---

## 6. Should (Consejo)

Para dar consejos.

**Regla:** Should + Infinitivo

**Ejemplos:**
- You **should** study more.
- You **shouldn't** eat so much sugar.
- I have a headache. → You **should** rest.

---

## 7. First Conditional

Situaciones reales/posibles en el futuro.

**Regla:** If + Present Simple, Will + Verb

**Ejemplos:**
- **If** it rains, I **will** stay home.
- **If** she comes, I **will be** happy.
- **If** you study, you **will** pass.

---

## 8. Comparatives (Avanzado)

**Igualdad:** as...as
- He is **as tall as** me.

**Superioridad:** more...than / -er than
- This car is **faster than** that one.
- English is **more difficult than** Spanish.

---

## 9. Superlatives

El más... del grupo.

**Regla:**
- Short adjectives: the + adj-**est**
- Long adjectives: the **most** + adj

**Ejemplos:**
- She is the **tallest** student.
- This is the **most interesting** book.

---

## 10. Relative Clauses

Para unir frases y dar información extra.

| Pronombre | Uso |
|-----------|-----|
| Who | Personas |
| Which | Cosas/Animales |
| Where | Lugares |

**Ejemplos:**
- The man **who** called me.
- The book **which** I read.
- The city **where** I was born.

---

## 11. Quantifiers

| Contables | Incontables |
|-----------|-------------|
| Many | Much |
| A few | A little |
| How many? | How much? |

**A lot of** = para ambos

---

## 12. Adverbs of Manner

Cómo se hace algo. Formación: Adjetivo + **-ly**

- slow → slow**ly**
- careful → careful**ly**
- beautiful → beautiful**ly**

**Excepción:** good → **well**

---

## 13. Prepositions of Movement

| Preposition | Significado |
|-------------|-------------|
| Into | Hacia dentro |
| Out of | Hacia fuera |
| Through | A través de |
| Across | Cruzar |
| Over | Por encima |

---

## 14. Possessive Pronouns

| Adj. Posesivo | Pron. Posesivo |
|---------------|----------------|
| my | mine |
| your | yours |
| his | his |
| her | hers |
| our | ours |
| their | theirs |

**Ejemplo:** This bag is **mine**. (No: my)

---

## 15. Gerund vs Infinitive

| + Gerund (-ing) | + Infinitive (to) |
|-----------------|-------------------|
| enjoy | want |
| like/love/hate | hope |
| finish | decide |
| avoid | need |

**Ejemplos:**
- I enjoy **swimming**.
- I want **to go** home.

---

## 16. Phrasal Verbs (Básicos)

| Phrasal Verb | Significado |
|--------------|-------------|
| Get up | Levantarse |
| Look for | Buscar |
| Turn on/off | Encender/Apagar |
| Try on | Probarse (ropa) |
| Put on | Ponerse |

---

## 17. Conjunctions

| Conjunción | Uso |
|------------|-----|
| Because | Razón |
| So | Consecuencia |
| Although | Aunque |
| But | Pero |

---

## 18. Used to

Hábitos del pasado que ya no existen.

**Regla:** Used to + Infinitivo

**Ejemplo:** I **used to** play tennis. (Ya no lo hago)

---

## 19. Passive Voice (Introducción)

Cuando el objeto es más importante.

**Regla:** Be + Participio

**Ejemplos:**
- The letter **was written** by Paul.
- This cake **was made** by me.
- English **is spoken** worldwide.

---

## 20. Suggestions

Para proponer planes.

| Expresión | Ejemplo |
|-----------|---------|
| Shall we...? | Shall we go? |
| Let's... | Let's go! |
| How about...? | How about pizza? |
| Why don't we...? | Why don't we rest? |`
          },
          {
            id: "lesson-a2-vocab",
            title: "Vocabulario A2: Intermedio",
            content: `# Vocabulario Nivel A2

## Viajes (Travel)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Airport | Aeropuerto | Arrive at the airport |
| Luggage | Equipaje | Lost luggage |
| Flight | Vuelo | The flight is delayed |
| Passport | Pasaporte | Show your passport |
| Ticket | Billete | One way ticket |
| Passenger | Pasajero | Passengers please board |
| Delay | Retraso | Sorry for the delay |
| Customs | Aduana | Go through customs |
| Platform | Andén | The train is at platform 4 |
| Suitcase | Maleta | Pack your suitcase |

---

## Trabajo (Work)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Boss | Jefe | My boss is busy |
| Colleague | Compañero | She is my colleague |
| Meeting | Reunión | I have a meeting at 10 |
| Earn | Ganar (dinero) | Earn a salary |
| Staff | Personal | Staff only |
| Factory | Fábrica | Work in a factory |
| Desk | Escritorio | Sit at the desk |
| Job | Empleo | Apply for a job |
| Customer | Cliente | Help the customer |
| Manager | Gerente | Speak to the manager |

---

## Tiempo Atmosférico (Weather)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Cloudy | Nublado | It is cloudy today |
| Foggy | Nebuloso | Drive carefully, it's foggy |
| Storm | Tormenta | A storm is coming |
| Thunder | Trueno | Loud thunder |
| Lightning | Rayo | Lightning struck the tree |
| Windy | Ventoso | It is very windy |
| Degrees | Grados | It's 25 degrees |
| Wet | Mojado/Húmedo | The grass is wet |
| Dry | Seco | Keep it dry |
| Snowing | Nevando | It is snowing outside |

---

## Salud (Health)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Headache | Dolor de cabeza | I have a headache |
| Stomachache | Dolor de estómago | He has a stomachache |
| Medicine | Medicina | Take your medicine |
| Appointment | Cita médica | Doctor's appointment |
| Sick | Enfermo | I feel sick |
| Hurt | Doler/Herir | My leg hurts |
| Broken | Roto | A broken arm |
| Fever | Fiebre | High fever |
| Dentist | Dentista | Visit the dentist |
| Ambulance | Ambulancia | Call an ambulance |

---

## Tecnología (Tech)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Download | Descargar | Download the file |
| Website | Sitio web | Visit our website |
| Keyboard | Teclado | Type on the keyboard |
| Screen | Pantalla | Touch screen |
| Mouse | Ratón | Click the mouse |
| Password | Contraseña | Enter your password |
| File | Archivo | Save the file |
| Online | En línea | Chat online |
| Text | Mensaje de texto | Send a text |
| Digital | Digital | Digital camera |

---

## Práctica: Completa las oraciones

1. I need to show my _______ at customs. (pasaporte)
2. My _______ asked me to finish the report. (jefe)
3. It's very _______ today, take an umbrella! (ventoso)
4. I have a _______, I need medicine. (dolor de cabeza)
5. Please enter your _______ to log in. (contraseña)

**Respuestas:** 1. passport, 2. boss, 3. windy, 4. headache, 5. password`
          }
        ],
        sprint: {
          title: "Sprint A2: Consolidación",
          description: "Demuestra tu dominio del nivel A2",
          tasks: [
            {
              id: "task-a2-1",
              question: "Escribe un párrafo corto sobre tus vacaciones pasadas usando Past Simple y Past Continuous (mínimo 5 oraciones)."
            },
            {
              id: "task-a2-2",
              question: "Crea 3 oraciones con First Conditional sobre situaciones de trabajo como asistente virtual."
            }
          ]
        },
        exam: {
          title: "Examen A2",
          description: "Evalúa tus conocimientos del nivel A2",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Yesterday, I ___ to the cinema.", options: ["go", "gone", "went"], correctAnswer: 2 },
            { id: "q2", question: "While I ___ reading, the phone rang.", options: ["was", "were", "am"], correctAnswer: 0 },
            { id: "q3", question: "Have you ever ___ to London?", options: ["be", "been", "was"], correctAnswer: 1 },
            { id: "q4", question: "If it rains, I ___ stay at home.", options: ["will", "would", "am"], correctAnswer: 0 },
            { id: "q5", question: "You ___ smoke in the hospital.", options: ["must", "don't have to", "mustn't"], correctAnswer: 2 },
            { id: "q6", question: "This car is ___ than that one.", options: ["expensive", "more expensive", "expensiver"], correctAnswer: 1 },
            { id: "q7", question: "She is the ___ girl in class.", options: ["tall", "taller", "tallest"], correctAnswer: 2 },
            { id: "q8", question: "I enjoy ___ football.", options: ["playing", "play", "to play"], correctAnswer: 0 },
            { id: "q9", question: "I ___ to play piano when I was young.", options: ["use", "used", "using"], correctAnswer: 1 },
            { id: "q10", question: "___ we go to the beach?", options: ["Let's", "Shall", "How"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-english-b1",
        title: "Nivel B1 - Intermedio",
        description: "Present Perfect Continuous, Past Perfect, condicionales avanzados y estilo indirecto",
        theory: [
          {
            id: "lesson-b1-grammar",
            title: "Gramática B1: Intermedio",
            content: `# Gramática Nivel B1: Nivel Intermedio

## 1. Present Perfect Continuous

Acciones que empezaron en el pasado y continúan (énfasis en duración).

**Regla:** Have/Has + been + Verb-ING

**Ejemplos:**
- I **have been waiting** for 2 hours.
- She **has been watching** TV all day.
- How long **have you been** learning English?

---

## 2. Past Perfect

El pasado del pasado. Una acción anterior a otra.

**Regla:** Had + Participio (3ª columna)

**Ejemplos:**
- When I arrived, the train **had left**.
- By the time I woke up, he **had** already **gone**.
- I realized I **had forgotten** my keys.

---

## 3. Passive Voice (Completo)

Cuando el objeto es más importante que el sujeto.

**Regla:** To Be + Participio (+ by...)

**Tiempos:**
| Tiempo | Ejemplo |
|--------|---------|
| Present | The letter **is written** |
| Past | The bridge **was built** in 1990 |
| Future | The work **will be finished** |
| Perfect | The car **has been repaired** |

---

## 4. Reported Speech (Estilo Indirecto)

Contar lo que alguien dijo.

**Backshift (retroceso de tiempo):**
| Direct | Reported |
|--------|----------|
| Present → | Past |
| Past → | Past Perfect |
| Will → | Would |
| Can → | Could |

**Ejemplo:**
- She said: "I am tired" → She said she **was** tired.
- He said: "I will call" → He said he **would** call.

---

## 5. Second Conditional

Situaciones imaginarias o hipotéticas en el presente.

**Regla:** If + Past Simple, Would + Verb

**Ejemplos:**
- If I **were** rich, I **would** travel the world.
- If I **had** more time, I **would** learn Japanese.
- What **would** you do if you **won** the lottery?

---

## 6. Third Conditional

Arrepentimientos del pasado (imposible de cambiar).

**Regla:** If + Past Perfect, Would have + Participio

**Ejemplos:**
- If I **had studied**, I **would have passed**.
- If I **had seen** him, I **would have told** him.
- She **would have come** if she **had known**.

---

## 7. Modals of Deduction

Especular sobre la verdad.

| Modal | Certeza | Ejemplo |
|-------|---------|---------|
| Must | 95% seguro | He **must be** rich |
| Might/May | 50% posible | She **might be** at home |
| Can't | 95% imposible | He **can't be** sleeping |

---

## 8. Used to vs Be used to

| Used to | Be used to |
|---------|------------|
| Hábito pasado | Costumbre actual |
| + Infinitive | + Gerund (-ing) |

**Ejemplos:**
- I **used to** smoke. (Ya no fumo)
- I **am used to** getting up early. (Estoy acostumbrado)

---

## 9. Future Continuous

Acción en progreso en un momento futuro.

**Regla:** Will + be + Verb-ING

**Ejemplos:**
- At 8pm, I **will be having** dinner.
- This time tomorrow, I **will be flying** to London.

---

## 10. Quantifiers (Avanzado)

| Contables | Incontables |
|-----------|-------------|
| A few | A little |
| Few (casi ninguno) | Little (casi nada) |
| Several | Plenty of |

---

## 11. Relative Clauses: Defining vs Non-defining

**Defining:** Información esencial (sin comas)
- The woman **who called** is my sister.

**Non-defining:** Información extra (con comas)
- My mom, **who is 60**, cooks well.

**Nota:** Non-defining NO usa "that"

---

## 12. Connectors

| Conector | Uso | Ejemplo |
|----------|-----|---------|
| Although | Aunque | **Although** it rained, we went |
| Despite | A pesar de | **Despite** the rain, we went |
| However | Sin embargo | It rained. **However**, we went |

---

## 13. Indirect Questions

Preguntas educadas (orden afirmativo).

**Regla:** Can you tell me + afirmación?

**Ejemplos:**
- Can you tell me where **the station is**? ✓
- Can you tell me where **is the station**? ✗
- Do you know what time **it is**?

---

## 14. Gerund vs Infinitive: Cambio de Significado

| Verbo | + Gerund | + Infinitive |
|-------|----------|--------------|
| Stop | Stop smoking (dejar de) | Stop to smoke (parar para) |
| Remember | Remember locking (recordar haber) | Remember to lock (acordarse de) |
| Try | Try eating (probar) | Try to eat (intentar) |

---

## 15. The Causative

Que alguien haga algo por ti.

**Regla:** Have/Get + Object + Past Participle

**Ejemplos:**
- I **had my car repaired**.
- I need to **get my hair cut**.
- She **had her nails done**.

---

## 16. So vs Such

| So | Such |
|----|------|
| So + Adjective | Such + (Adj) + Noun |
| It was **so** good | It was **such** a good movie |

---

## 17. Both / Neither / Either

| Palabra | Significado |
|---------|-------------|
| Both | Los dos (ambos) |
| Neither | Ninguno de los dos |
| Either | Cualquiera de los dos |

---

## 18. Question Tags

¿Verdad? al final de la frase.

**Regla:** Positivo → Negativo / Negativo → Positivo

**Ejemplos:**
- You are Spanish, **aren't you**?
- She lives here, **doesn't she**?
- They didn't come, **did they**?

---

## 19. Phrasal Verbs B1

| Phrasal | Significado |
|---------|-------------|
| Look after | Cuidar |
| Run out of | Quedarse sin |
| Give up | Rendirse / Dejar |
| Put off | Posponer |
| Turn down | Rechazar |

---

## 20. Make vs Do

| Make | Do |
|------|-----|
| Make a mistake | Do homework |
| Make a decision | Do exercise |
| Make a phone call | Do the dishes |
| Make friends | Do your best |`
          },
          {
            id: "lesson-b1-vocab",
            title: "Vocabulario B1: Avanzado",
            content: `# Vocabulario Nivel B1

## Negocios (Business)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Employee | Empleado | The company has 50 employees |
| Salary | Salario/Sueldo | She earns a good salary |
| Applying | Solicitando | I am applying for a new job |
| Colleague | Compañero de trabajo | My colleagues are very helpful |
| Promotion | Ascenso | He got a promotion last week |
| Profit | Beneficio/Ganancia | The business made a huge profit |
| Meeting | Reunión | I have a meeting with the boss |
| CV / Resume | Currículum | Send your CV by email |
| Full-time | Jornada completa | It is a full-time job |
| Resign | Dimitir/Renunciar | She decided to resign |

---

## Sentimientos (Feelings)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Delighted | Encantado/a | I'm delighted with the news |
| Disappointed | Decepcionado/a | He was disappointed with the result |
| Embarrassed | Avergonzado/a | She felt embarrassed about the mistake |
| Anxious | Ansioso/Inquieto | I feel anxious before exams |
| Frightened | Asustado/a | Are you frightened of spiders? |
| Proud | Orgulloso/a | I am proud of my son |
| Upset | Disgustado/Molesto | Don't get upset about it |
| Relieved | Aliviado/a | I was relieved to hear you are safe |
| Jealous | Celoso/a | He is jealous of her success |
| Keen on | Interesado/Aficionado a | I am keen on football |

---

## Medio Ambiente (Environment)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Pollution | Contaminación | Air pollution is a problem |
| Global warming | Calentamiento global | We must stop global warming |
| Recycle | Reciclar | You should recycle paper and plastic |
| Waste | Desperdiciar/Residuos | Don't waste water |
| Flood | Inundación | The rain caused a flood |
| Drought | Sequía | Plants died due to the drought |
| Environment | Medio ambiente | Protect the environment |
| Renewable | Renovable | Solar energy is renewable |
| Wildlife | Vida salvaje | Africa has amazing wildlife |
| Litter | Basura (en la calle) | Pick up your litter |

---

## Tecnología Avanzada (Advanced Tech)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Upload | Subir (archivos) | Upload the photo to Instagram |
| Software | Software/Programas | Update your antivirus software |
| Backup | Copia de seguridad | Always make a backup |
| Crash | Colgarse (sistema) | My computer crashed |
| Hardware | Componentes físicos | I need new hardware |
| Router | Router | Reset the router |
| Stream | Retransmitir | Stream a movie online |
| Browser | Navegador | Open your browser |
| Bandwidth | Ancho de banda | Not enough bandwidth |
| Data | Datos | Protect your data |

---

## Expresiones Útiles para el Trabajo

| Expresión | Significado |
|-----------|-------------|
| I'm in charge of... | Estoy a cargo de... |
| Could you clarify...? | ¿Podrías aclarar...? |
| I'll get back to you | Te responderé después |
| Let me double-check | Déjame verificar |
| I'll keep you posted | Te mantendré informado |
| As soon as possible (ASAP) | Lo antes posible |
| Please find attached | Adjunto encontrarás |
| I apologize for the delay | Disculpa la demora |`
          }
        ],
        sprint: {
          title: "Sprint B1: Intermedio",
          description: "Demuestra tu dominio del nivel B1",
          tasks: [
            {
              id: "task-b1-1",
              question: "Escribe un email profesional a un cliente explicando un retraso en la entrega de un proyecto, usando Reported Speech y expresiones formales."
            },
            {
              id: "task-b1-2",
              question: "Crea 3 oraciones usando Second Conditional y 3 usando Third Conditional sobre situaciones laborales."
            }
          ]
        },
        exam: {
          title: "Examen B1",
          description: "Evalúa tus conocimientos del nivel B1",
          passingScore: 70,
          questions: [
            { id: "q1", question: "I ___ for you for 2 hours!", options: ["have waited", "have been waiting", "wait"], correctAnswer: 1 },
            { id: "q2", question: "When I arrived, she ___ already left.", options: ["have", "had", "has"], correctAnswer: 1 },
            { id: "q3", question: "The letter ___ sent yesterday.", options: ["was", "is", "were"], correctAnswer: 0 },
            { id: "q4", question: "She said she ___ come the next day.", options: ["will", "would", "is going to"], correctAnswer: 1 },
            { id: "q5", question: "If I ___ you, I would accept.", options: ["was", "am", "were"], correctAnswer: 2 },
            { id: "q6", question: "If I had known, I ___ you.", options: ["would have called", "would call", "called"], correctAnswer: 0 },
            { id: "q7", question: "She ___ be at home, her car is there.", options: ["must", "can't", "might not"], correctAnswer: 0 },
            { id: "q8", question: "I am used to ___ early.", options: ["wake", "waking", "woke"], correctAnswer: 1 },
            { id: "q9", question: "Do you know where ___?", options: ["is she", "she is", "does she"], correctAnswer: 1 },
            { id: "q10", question: "I need to ___ a decision.", options: ["do", "make", "take"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-english-b2",
        title: "Nivel B2 - Intermedio Alto",
        description: "Mixed conditionals, inversión, futuro perfecto, wish/regrets y estructuras avanzadas",
        theory: [
          {
            id: "lesson-b2-grammar",
            title: "Gramática B2: Avanzado",
            content: `# Gramática Nivel B2: Intermedio Alto

## 1. Mixed Conditionals

Mezcla tiempos del 2º y 3º condicional para situaciones irreales en tiempos distintos.

**Tipo 1: Pasado → Presente**
If + Past Perfect, ... would + Infinitivo
- If I **had studied** harder, I **would be** rich now.

**Tipo 2: Presente → Pasado**
If + Past Simple, ... would have + Participio
- If I **were** braver, I **would have told** her.

---

## 2. Inversion

Usada para énfasis, colocando el verbo auxiliar antes del sujeto.

**Regla:** Negative Adverb + Auxiliar + Sujeto

| Adverbio | Ejemplo |
|----------|---------|
| Never | **Never have I** seen such beauty |
| Rarely | **Rarely do we** see such talent |
| Seldom | **Seldom does she** complain |
| Not only | **Not only did** he win, but... |

---

## 3. Future Perfect

Una acción que estará terminada en un momento concreto del futuro.

**Regla:** Will + have + Participio

**Ejemplos:**
- By 2030, we **will have bought** a house.
- By next week, I **will have finished** the report.
- By then, they **will have left**.

---

## 4. Reporting Passives

Formas impersonales de reportar creencias o hechos (Se dice que...).

**Estructuras:**
- It is said/believed/thought that...
- Subject + is said/believed + to + Infinitive

**Ejemplos:**
- **It is believed that** he is a millionaire.
- He **is believed to be** a millionaire.
- She **is said to have** studied in Paris.

---

## 5. Wish & Regrets

Expresar arrepentimiento o deseos sobre distintos tiempos.

| Tiempo | Estructura | Ejemplo |
|--------|-----------|---------|
| Presente | wish + Past Simple | I wish I **had** more time |
| Pasado | wish + Past Perfect | I wish I **hadn't said** that |
| Futuro | wish + would | I wish you **would** stop |

**If only** = más enfático que "wish"

---

## 6. Cleft Sentences

Estructuras partidas para enfatizar información específica.

**What-cleft:**
- **What I need** is a holiday.
- **What she said** was important.

**It-cleft:**
- **It was John** who/that broke the window.
- **It is this** that concerns me.

---

## 7. Participle Clauses

Reducción de frases relativas o adverbiales.

**Present Participle (-ing):** Activa
- **Feeling** tired, I went to bed.
- **Working** hard, she achieved success.

**Past Participle (-ed):** Pasiva
- **Shocked** by the news, she cried.
- **Built** in 1990, the bridge is old.

---

## 8. Past Modals

Deducciones o especulaciones sobre eventos pasados.

| Modal | Significado | Ejemplo |
|-------|-------------|---------|
| must have | Seguro que sí | He **must have missed** the bus |
| can't have | Seguro que no | She **can't have known** |
| might have | Posiblemente | They **might have forgotten** |
| should have | Debería haber | I **should have called** |

---

## 9. Advanced Relative Clauses

Cláusulas relativas con cuantificadores.

**Ejemplos:**
- I have two brothers, **neither of whom** is married.
- I have many friends, **most of whom** are students.
- The books, **all of which** were old, were expensive.

---

## 10. Would vs Used to

Matices para hábitos en el pasado.

| Would | Used to |
|-------|---------|
| Solo acciones repetidas | Acciones y estados |
| ✗ No para estados | ✓ Para todo |

**Ejemplo:**
- I **used to** live in London. (estado)
- My grandma **would** always bake cakes. (acción repetida)

---

## 11. Gerund/Infinitive: Cambios Sutiles

| Verbo | + Gerund | + Infinitive |
|-------|----------|--------------|
| Mean | Implicar (This means working) | Intentar (I mean to go) |
| Regret | Lamentar pasado | Lamentar presente |
| Try | Experimentar | Hacer esfuerzo |

---

## 12. The Subjunctive

Uso formal tras verbos de demanda/sugerencia.

**Verbos:** suggest, demand, insist, recommend, require

**Regla:** Verb + that + Subject + Base Verb (sin 's')

**Ejemplos:**
- I suggest that he **be** present.
- It is essential that she **arrive** on time.
- He demanded that the evidence **be** revealed.

---

## 13. Bound to / Likely to

| Expresión | Certeza |
|-----------|---------|
| Bound to | Seguro que |
| Likely to | Probable |
| Unlikely to | Improbable |

---

## 14. Whatever/Whenever/Whoever

Indica "no importa qué/cuándo/quién".

- **Whatever** you do, don't give up.
- **Whoever** calls, tell them I'm busy.
- **Whenever** you're ready, let me know.

---

## 15. Advanced So/Such

Inversión con So/Such para énfasis.

**Regla:** So + Adj + Aux + Subject

**Ejemplos:**
- **So angry was he** that he left.
- **So beautiful was** the view that we stayed.
- **Such was** the impact that...

---

## 16. Advanced Connectors

| Conector | Uso |
|----------|-----|
| Nevertheless | Sin embargo (formal) |
| Furthermore | Además |
| Whereas | Mientras que (contraste) |
| Hence | Por lo tanto |

---

## 17. Phrasal Verbs B2

| Phrasal | Significado |
|---------|-------------|
| Look forward to | Esperar con ilusión |
| Come up with | Idear/Proponer |
| Put up with | Tolerar/Soportar |
| Get along with | Llevarse bien con |
| Run into | Encontrarse con |

---

## 18. Common Idioms

| Idiom | Significado |
|-------|-------------|
| Break a leg | ¡Buena suerte! |
| Piece of cake | Pan comido |
| Once in a blue moon | Muy raramente |
| Cost an arm and a leg | Costar un ojo de la cara |

---

## 19. Narrative Tenses

Combinar pasados para contar historias.

**Estructura:**
- Past Continuous: fondo/ambiente
- Past Simple: acción principal
- Past Perfect: acción anterior

**Ejemplo:** The sun **was shining** when I **woke up**. I **had slept** well.

---

## 20. Articles: Advanced

**Excepciones geográficas:**
- The Netherlands, The USA, The UK
- (sin artículo) France, Spain, Everest

**Instituciones:**
- Go to hospital (como paciente)
- Go to **the** hospital (a visitar)`
          },
          {
            id: "lesson-b2-vocab",
            title: "Vocabulario B2: Profesional",
            content: `# Vocabulario Nivel B2

## Empleo (Employment)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Vacancy | Vacante | There is a vacancy in HR |
| Redundancy | Despido (por reducción) | He faced redundancy last year |
| Perks | Beneficios extra | One of the perks is a company car |
| Shift work | Trabajo a turnos | I hate doing shift work |
| Resign | Dimitir | She resigned due to stress |
| Deadline | Fecha límite | The deadline is tomorrow |
| Workload | Carga de trabajo | My workload is very heavy |
| Freelance | Autónomo | I work freelance from home |
| Internship | Prácticas | She is doing a summer internship |
| Recruitment | Contratación/Selección | The recruitment process is long |

---

## Personalidad (Personality)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Conscientious | Meticuloso/Concienzudo | He is a conscientious worker |
| Stubborn | Terco/Cabezota | He is too stubborn to admit it |
| Sympathetic | Compasivo/Empático | She was very sympathetic to my problem |
| Narrow-minded | De mente cerrada | Don't be so narrow-minded |
| Down-to-earth | Con los pies en la tierra | She is very down-to-earth |
| Reliable | Fiable | Is your car reliable? |
| Outgoing | Extrovertido | He is an outgoing person |
| Self-confident | Seguro de sí mismo | You need to be self-confident |
| Bad-tempered | Malhumorado | He gets bad-tempered when hungry |
| Sensible | Sensato | It was a sensible decision |

**Nota:** "Sensible" ≠ Sensible (falso amigo). "Sensitive" = Sensible.

---

## Medios y Tecnología (Media)

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Bias | Sesgo/Parcialidad | The article showed political bias |
| Censorship | Censura | Censorship is common in dictatorships |
| Coverage | Cobertura (mediática) | The event got huge media coverage |
| Headline | Titular | I only read the headlines |
| Paparazzi | Paparazzi | Paparazzi chased the actor |
| Breakthrough | Avance importante | A major scientific breakthrough |
| Cutting-edge | De vanguardia | This is cutting-edge technology |
| Outdated | Obsoleto/Anticuado | This software is outdated |
| Viral | Viral | The video went viral |
| Streaming | Transmisión en directo | Watch streaming services |

---

## Expresiones Idiomáticas (Idioms)

| Idiom | Significado | Ejemplo |
|-------|-------------|---------|
| Break a leg | ¡Mucha suerte! | Break a leg in your exam! |
| Piece of cake | Pan comido | The test was a piece of cake |
| Once in a blue moon | Muy raramente | I see her once in a blue moon |
| Hit the nail on the head | Dar en el clavo | You hit the nail on the head |
| Under the weather | Pachucho/Indispuesto | I'm feeling under the weather |
| Cost an arm and a leg | Costar un ojo de la cara | That car cost an arm and a leg |
| Speak of the devil | Hablando del rey de Roma | Speak of the devil! Hi John! |
| Kill two birds with one stone | Matar dos pájaros de un tiro | I killed two birds with one stone |

---

## Expresiones para Emails Profesionales

| Expresión | Uso |
|-----------|-----|
| I am writing to inquire about... | Para preguntar formalmente |
| Please find attached... | Adjunto encontrarás |
| I would appreciate if you could... | Agradecería si pudieras |
| I look forward to hearing from you | Espero tu respuesta |
| Should you have any questions... | Si tienes alguna pregunta |
| Thank you for your prompt response | Gracias por tu pronta respuesta |
| Please do not hesitate to contact me | No dudes en contactarme |`
          }
        ],
        sprint: {
          title: "Sprint B2: Avanzado",
          description: "Demuestra tu dominio del nivel B2",
          tasks: [
            {
              id: "task-b2-1",
              question: "Escribe un párrafo usando Mixed Conditionals sobre cómo sería tu vida si hubieras tomado decisiones diferentes en el pasado."
            },
            {
              id: "task-b2-2",
              question: "Reescribe estas oraciones usando Inversión: 1) I have never seen such a thing. 2) She not only finished but also won. 3) We rarely go out."
            }
          ]
        },
        exam: {
          title: "Examen B2",
          description: "Evalúa tus conocimientos del nivel B2",
          passingScore: 70,
          questions: [
            { id: "q1", question: "If I ___ harder, I would be successful now.", options: ["worked", "had worked", "work"], correctAnswer: 1 },
            { id: "q2", question: "Rarely ___ such a beautiful view.", options: ["I see", "do I see", "I saw"], correctAnswer: 1 },
            { id: "q3", question: "By next year, I ___ graduated.", options: ["will", "will have", "would have"], correctAnswer: 1 },
            { id: "q4", question: "He is believed ___ very rich.", options: ["be", "to be", "being"], correctAnswer: 1 },
            { id: "q5", question: "I wish I ___ told him the truth.", options: ["have", "hadn't", "didn't"], correctAnswer: 1 },
            { id: "q6", question: "___ I need is a holiday.", options: ["That", "Which", "What"], correctAnswer: 2 },
            { id: "q7", question: "___ by the news, she cried.", options: ["Shocked", "Shocking", "Shock"], correctAnswer: 0 },
            { id: "q8", question: "He must ___ the bus.", options: ["miss", "have missed", "missing"], correctAnswer: 1 },
            { id: "q9", question: "I ___ live in Paris.", options: ["would", "used to", "use to"], correctAnswer: 1 },
            { id: "q10", question: "It is bound ___ rain.", options: ["to", "for", "of"], correctAnswer: 0 }
          ]
        }
      },
      {
        id: "mod-english-c1",
        title: "Nivel C1 - Avanzado",
        description: "Inversión avanzada, subjuntivo formal, cláusulas de participio y conectores sofisticados",
        theory: [
          {
            id: "lesson-c1-grammar",
            title: "Gramática C1: Nivel Avanzado",
            content: `# Gramática Nivel C1: Avanzado

## 1. Inversion (Advanced)

Inversión negativa formal para énfasis dramático o retórico.

**Estructuras avanzadas:**

| Expresión | Ejemplo |
|-----------|---------|
| Little did... | **Little did** she know what awaited |
| No sooner... than | **No sooner had** I arrived **than** it started |
| Under no circumstances | **Under no circumstances** should you leave |
| Not until | **Not until** he called **did** I realize |
| Scarcely... when | **Scarcely had** I sat **when** the bell rang |

---

## 2. Cleft Sentences (Avanzado)

Dividir oraciones para enfatizar una parte específica.

**It-clefts:**
- **It was** her resilience **that** surprised me.
- **It is** this issue **that** we must address.

**What-clefts:**
- **What I object to is** the way he spoke.
- **What distinguishes this** is its quality.

**All-clefts:**
- **All** he did **was** complain.
- **All** I want **is** some peace.

---

## 3. Formal Subjunctive

Uso en contextos formales, legales o de urgencia.

**Verbos que requieren subjuntivo:**
suggest, demand, insist, recommend, require, request, propose

**Regla:** It is vital/imperative/essential that + S + (should) + Base Verb

**Ejemplos:**
- The judge insisted that the evidence **be** revealed.
- It is essential that he **be** informed immediately.
- I recommend that she **take** a break.

---

## 4. Participle Clauses (Avanzado)

Economía del lenguaje: reducir oraciones adverbiales.

**Present Participle (-ing): Activa/Simultánea**
- **Not wanting** to offend him, I stayed silent.
- **Working** late, she finished the project.

**Past Participle (-ed/-en): Pasiva**
- **Stung** by the criticism, he resigned.
- **Surrounded** by enemies, he surrendered.

**Perfect Participle: Acción anterior**
- **Having finished** the work, I went home.
- **Having been warned**, he was careful.

---

## 5. Mixed Conditionals (Advanced)

Mezcla compleja de tiempos.

**Estado permanente → Evento pasado:**
- If I **weren't** so stubborn, I **would have** apologized yesterday.

**Evento pasado → Situación presente:**
- If she **had taken** the job, she **would be** happy now.

---

## 6. Future in the Past

Planes fallidos o perspectivas pasadas sobre el futuro.

**Estructuras:**
| Estructura | Ejemplo |
|------------|---------|
| Was/Were to have + PP | The meeting **was to have taken** place Monday |
| Was/Were going to | I **was going to** call you |
| Was meaning to | I **was meaning to** tell you |
| Would have | She **would have** come, but... |

---

## 7. Nominalisation

Transformar verbos/adjetivos en sustantivos para tono académico.

| Verbo/Adj | Sustantivo |
|-----------|------------|
| implement | implementation |
| analyze | analysis |
| significant | significance |
| possible | possibility |

**Ejemplo:**
- We **analyzed** the data → The **analysis** of the data
- This is very **significant** → The **significance** of this

---

## 8. Discourse Markers

Conectores sofisticados para argumentación y fluidez.

| Marker | Uso |
|--------|-----|
| Albeit | Aunque (formal) |
| Notwithstanding | A pesar de |
| Hence | Por lo tanto |
| Thus | Así pues |
| Thereby | De ese modo |
| Whereby | Por medio del cual |

**Ejemplo:** It was a difficult, **albeit** necessary, decision.`
          },
          {
            id: "lesson-c1-vocab",
            title: "Vocabulario C1: Académico y Profesional",
            content: `# Vocabulario Nivel C1

## Academic & Abstract

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Ubiquitous | Omnipresente / Ubicuo | Smartphones have become ubiquitous |
| Paradigm | Paradigma / Modelo | A shift in the cultural paradigm |
| Anomaly | Anomalía | The result was a statistical anomaly |
| Epitome | Epítome / Ejemplo perfecto | She is the epitome of elegance |
| Pragmatic | Pragmático / Práctico | We need a pragmatic solution |
| Ambiguous | Ambiguo | The instructions were rather ambiguous |
| Scrutinize | Escrutar / Examinar a fondo | The contract was carefully scrutinized |
| Alleviate | Aliviar / Mitigar | Measures to alleviate poverty |

---

## Nuanced Personality

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Apathetic | Apático / Indiferente | Voters are becoming increasingly apathetic |
| Conscientious | Concienzudo / Esmerado | A conscientious worker |
| Gregarious | Gregario / Sociable | He is a gregarious and outgoing person |
| Meticulous | Meticuloso | Meticulous attention to detail |
| Obstinate | Obstinado / Terco | Don't be so obstinate |
| Diffident | Tímido / Falto de confianza | He was diffident about his own success |
| Exuberant | Exuberante / Entusiasta | She has an exuberant personality |
| Cynical | Cínico / Escéptico | He is cynical about politicians |

---

## Professional & Business

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Lucrative | Lucrativo / Rentable | A lucrative business deal |
| Deficit | Déficit | The trade deficit is growing |
| Incentivize | Incentivar | We need to incentivize productivity |
| Merger | Fusión (empresas) | The merger of the two banks |
| Niche | Nicho (mercado) | They found a niche in the market |
| Turnover | Facturación / Rotación | The company has an annual turnover of $1M |
| Arbitration | Arbitraje | The dispute went to arbitration |
| Asset | Activo / Recurso valioso | She is a great asset to the team |

---

## Advanced Idioms

| Idiom | Significado | Ejemplo |
|-------|-------------|---------|
| Sit on the fence | No decidirse / Ser neutral | You can't sit on the fence forever |
| Take with a pinch of salt | No creer del todo | Take his advice with a pinch of salt |
| Jump on the bandwagon | Seguir la moda | Everyone jumped on the bandwagon |
| Devil's advocate | Abogado del diablo | I'm just playing devil's advocate |
| Beat around the bush | Andarse con rodeos | Stop beating around the bush |
| Once in a blue moon | Muy raramente | It happens once in a blue moon |
| Blessing in disguise | Hay mal que por bien no venga | Losing that job was a blessing in disguise |
| Cut corners | Ahorrar esfuerzos/dinero (mal) | Don't cut corners on safety |

---

## Formal Academic Expressions

| Expresión | Uso |
|-----------|-----|
| It is worth noting that... | Vale la pena señalar que... |
| It stands to reason that... | Es lógico que... |
| It is incumbent upon... | Es responsabilidad de... |
| Notwithstanding the challenges... | A pesar de los desafíos... |
| This warrants further investigation | Esto merece más investigación |
| The findings corroborate... | Los hallazgos corroboran... |`
          }
        ],
        sprint: {
          title: "Sprint C1: Avanzado",
          description: "Demuestra tu dominio del nivel C1",
          tasks: [
            {
              id: "task-c1-1",
              question: "Escribe un párrafo académico sobre un tema de tu elección usando nominalización y al menos 3 conectores formales (albeit, notwithstanding, hence, etc.)."
            },
            {
              id: "task-c1-2",
              question: "Transforma estas oraciones usando inversión formal: 1) I had never experienced such hospitality. 2) She not only finished the project but also won an award. 3) I realized the truth only when he confessed."
            }
          ]
        },
        exam: {
          title: "Examen C1",
          description: "Evalúa tus conocimientos del nivel C1",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Barely ___ sat down when the waiter brought the menu.", options: ["I had", "had I", "have I"], correctAnswer: 1 },
            { id: "q2", question: "It is vital that the application ___ submitted by noon.", options: ["is", "be", "will be"], correctAnswer: 1 },
            { id: "q3", question: "The Prime Minister is believed ___ on the verge of resigning.", options: ["to be", "that he is", "being"], correctAnswer: 0 },
            { id: "q4", question: "___ for your help, I would have failed.", options: ["If it not", "Had it not been", "Were it not"], correctAnswer: 1 },
            { id: "q5", question: "It was only when I arrived ___ I realized I had forgotten my keys.", options: ["than", "that", "then"], correctAnswer: 1 },
            { id: "q6", question: "He is, ___ doubt, the best player in the world.", options: ["without", "beyond", "no"], correctAnswer: 0 },
            { id: "q7", question: "Not only ___ talented, but he is also hardworking.", options: ["he is", "is he", "he was"], correctAnswer: 1 },
            { id: "q8", question: "Little ___ she know what was about to happen.", options: ["did", "does", "was"], correctAnswer: 0 },
            { id: "q9", question: "By the time you arrive, we ___ dinner.", options: ["will finish", "will have finished", "finish"], correctAnswer: 1 },
            { id: "q10", question: "___ rain, the event will be cancelled.", options: ["Should it", "If it", "Unless it"], correctAnswer: 0 }
          ]
        }
      },
      {
        id: "mod-english-c2",
        title: "Nivel C2 - Maestría",
        description: "Dominio total: condicionales invertidos, subjuntivo fijo, hedging académico y vocabulario de élite",
        theory: [
          {
            id: "lesson-c2-grammar",
            title: "Gramática C2: Maestría",
            content: `# Gramática Nivel C2: Maestría del Inglés

## 1. Inverted Conditionals

Supresión de "If" mediante inversión auxiliar para registros altamente formales.

**Estructuras:**

| Tipo | Estructura | Ejemplo |
|------|-----------|---------|
| 2nd | Were + S + to | **Were you to** change your mind, let us know |
| 3rd | Had + S + PP | **Had** the government not intervened, chaos would have ensued |
| Mixed | Should + S | **Should** you require assistance, contact us |

---

## 2. Fixed Subjunctive Phrases

Expresiones fosilizadas que mantienen la forma base del verbo.

**Expresiones comunes:**
- **Suffice it to say** (Basta con decir)
- **Be that as it may** (Sea como fuere)
- **So be it** (Así sea)
- **Come what may** (Pase lo que pase)
- **God forbid** (Dios no lo quiera)
- **Heaven help us** (Que Dios nos ayude)

**Ejemplo:** Be that as it may, we must continue with the original plan.

---

## 3. Advanced Cleft Sentences

Estructuras de énfasis complejas.

**Pseudo-clefts con what:**
- **What distinguishes** this theory **is** its reliance on empirical data.
- **What I realized was** how late it had become.

**All-clefts:**
- **All** he ever did **was** complain.
- **The only thing** I want **is** peace.

**Negative clefts:**
- **It was not until** the evidence was presented **that** they believed.

---

## 4. Perfect Participle Clauses

Reducción de oraciones temporales o causales complejas.

**Estructura:** Having + Past Participle, [Main Clause]

**Ejemplos:**
- **Having been warned** twice, he was finally dismissed.
- **Not having read** the instructions carefully, he failed.
- **Having completed** the training, she was promoted.

---

## 5. Future Perfect Continuous

Proyección de duración en un punto futuro específico.

**Regla:** Will have been + Verb-ing

**Ejemplos:**
- By 2030, we **will have been living** here for twenty years.
- Next month, I **will have been working** here for a decade.
- By then, they **will have been waiting** for hours.

---

## 6. Sophisticated Discourse Markers

Conectores arcaicos o literarios para cohesión textual.

| Marker | Significado | Uso |
|--------|-------------|-----|
| Albeit | Aunque | Formal, concesivo |
| Notwithstanding | A pesar de | Muy formal |
| Hereby | Por la presente | Legal/oficial |
| Thereafter | Después de eso | Narrativo formal |
| Whereby | Por medio del cual | Explicativo |
| Hitherto | Hasta ahora | Académico |

**Ejemplo:** The decision was risky, notwithstanding the potential rewards.

---

## 7. Passive Reporting Structures

Distanciamiento periodístico o académico sobre hechos no verificados.

**Estructura:** S + is said/thought/alleged + to have + PP

**Ejemplos:**
- The fugitive **is alleged to have crossed** the border last night.
- The painting **is believed to have been painted** by Da Vinci.
- He **is reported to have fled** the country.

---

## 8. Hedging & Boosters

Matizar afirmaciones (Epistemic modality) para precisión académica.

**Hedging (atenuadores):**
| Expresión | Ejemplo |
|-----------|---------|
| Seemingly | It **seemingly** had no effect |
| Arguably | It is **arguably** the best |
| In all likelihood | **In all likelihood**, they knew |
| It would appear that | **It would appear that** |
| To some extent | **To some extent**, true |

**Boosters (intensificadores):**
| Expresión | Ejemplo |
|-----------|---------|
| Undoubtedly | **Undoubtedly** the finest |
| It stands to reason | **It stands to reason** that |
| There is no denying | **There is no denying** that |`
          },
          {
            id: "lesson-c2-vocab",
            title: "Vocabulario C2: Vocabulario de Élite",
            content: `# Vocabulario Nivel C2

## Literary & Cultured

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Epiphany | Epifanía / Revelación súbita | He had a sudden epiphany about his career |
| Cacophony | Cacofonía / Discordancia | A cacophony of car horns filled the street |
| Ephemeral | Efímero / Fugaz | Fashion trends are often ephemeral |
| Serendipity | Serendipia / Chiripa afortunada | Meeting her there was pure serendipity |
| Obfuscate | Ofuscar / Confundir deliberadamente | He tried to obfuscate the issue with jargon |
| Mellifluous | Melifluo / Dulce al oído | She had a rich, mellifluous voice |
| Quintessential | Por excelencia / Quintesencial | He is the quintessential gentleman |
| Vicarious | Vicario / Indirecto | She gets a vicarious thrill from reading |

---

## Academic & Abstract

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Acquiesce | Consentir / Acceder (a regañadientes) | She eventually acquiesced to their demands |
| Ameliorate | Mejorar / Mitigar (situación) | Steps to ameliorate the housing crisis |
| Disseminate | Diseminar / Difundir (info) | The internet allows us to disseminate information |
| Empirical | Empírico / Basado en observación | There is no empirical evidence to support this |
| Paradigm | Paradigma / Modelo ejemplar | A shift in the prevailing economic paradigm |
| Substantiate | Fundamentar / Corroborar | Can you substantiate your claims with data? |
| Proliferate | Proliferar / Multiplicarse | Rumors proliferated on social media |
| Exacerbate | Exacerbar / Empeorar | Stress can exacerbate existing health problems |

---

## Idioms & Fixed Phrases

| Idiom | Significado | Ejemplo |
|-------|-------------|---------|
| A bone of contention | Manzana de la discordia | Money was a major bone of contention |
| Cut no ice | No convencer / No importar | His excuses cut no ice with the manager |
| Go against the grain | Ir contra la corriente | It goes against the grain to lie |
| Play second fiddle | Estar en segundo plano | He tired of playing second fiddle |
| Take umbrage | Ofenderse / Resentirse | She took umbrage at his remarks |
| The tip of the iceberg | La punta del iceberg | The reported cases are just the tip |
| Throw caution to the wind | Arriesgarse totalmente | They threw caution to the wind |
| Wreak havoc | Causar estragos | The storm wreaked havoc on the coast |

---

## Precision & Nuance

| Inglés | Español | Ejemplo |
|--------|---------|---------|
| Fastidious | Exigente / Meticuloso | He is fastidious about personal hygiene |
| Inadvertently | Inadvertidamente / Sin querer | I inadvertently deleted the file |
| Ostensibly | Aparentemente / Supuestamente | He went to the library, ostensibly to study |
| Plausible | Verosímil / Creíble | A perfectly plausible explanation |
| Scathing | Mordaz / Cáustico (crítica) | He delivered a scathing attack on the policy |
| Uncanny | Insólito / Misterioso | An uncanny resemblance to her mother |
| Voracious | Voraz | A voracious reader of history books |
| Astute | Astuto / Sagaz | An astute observation about human nature |

---

## Advanced Academic Phrases

| Expresión | Uso |
|-----------|-----|
| It behooves us to... | Nos corresponde/incumbe... |
| This warrants scrutiny | Esto merece escrutinio |
| The ramifications of... | Las ramificaciones de... |
| It is incumbent upon... | Es responsabilidad de... |
| The findings corroborate... | Los hallazgos corroboran... |
| This phenomenon transcends... | Este fenómeno trasciende... |
| The dichotomy between... | La dicotomía entre... |
| To discern the nuances... | Discernir los matices... |`
          }
        ],
        sprint: {
          title: "Sprint C2: Maestría",
          description: "Demuestra tu dominio total del inglés",
          tasks: [
            {
              id: "task-c2-1",
              question: "Escribe un ensayo corto (200-250 palabras) sobre un tema académico usando inversión condicional, hedging, y al menos 5 palabras de vocabulario C2."
            },
            {
              id: "task-c2-2",
              question: "Traduce al inglés usando estructuras C2: 'De no haber sido por su intervención, la crisis habría empeorado. Sea como fuere, los resultados fueron mejores de lo esperado. Basta con decir que su contribución fue inestimable.'"
            }
          ]
        },
        exam: {
          title: "Examen C2",
          description: "Evalúa tu maestría del inglés",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Scarcely had the announcement been made ___ the protests began.", options: ["than", "when", "then"], correctAnswer: 1 },
            { id: "q2", question: "Whatever ___ to him, I will never forgive him.", options: ["happens", "may happen", "happened"], correctAnswer: 1 },
            { id: "q3", question: "Were it not for his assistance, we ___ completed the project.", options: ["would not have", "had not", "did not"], correctAnswer: 0 },
            { id: "q4", question: "The Prime Minister is alleged ___ a secret deal.", options: ["to sign", "to have signed", "signing"], correctAnswer: 1 },
            { id: "q5", question: "So intense was the heat ___ we couldn't go outside.", options: ["as", "when", "that"], correctAnswer: 2 },
            { id: "q6", question: "___ for the traffic, I would have arrived on time.", options: ["But", "Had it not been", "Were it not"], correctAnswer: 1 },
            { id: "q7", question: "I'm at a ___ to understand his motives.", options: ["loss", "lack", "miss"], correctAnswer: 0 },
            { id: "q8", question: "It stands to ___ that practice makes perfect.", options: ["reason", "say", "logic"], correctAnswer: 0 },
            { id: "q9", question: "Little ___ he know what fate had in store.", options: ["did", "does", "was"], correctAnswer: 0 },
            { id: "q10", question: "Be that as it ___.", options: ["may", "will", "is"], correctAnswer: 0 }
          ]
        }
      }
    ]
  },
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
- 📁 CLIENTES (con subcarpetas por cliente)
- 📁 PROYECTOS (activos)
- 📁 ACCIÓN (Urgente, Esta semana, Cuando pueda)
- 📁 REFERENCIA (Plantillas, Recursos, Facturas)

### 2. Filtros Automáticos

Procesan emails automáticamente:
- **Newsletters** → Etiqueta "Leer después", archivar
- **Notificaciones automáticas** → Archivar sin bandeja
- **Emails de cliente específico** → Etiqueta del cliente

### 3. Plantillas de Respuesta

Plantillas que todo AV necesita:
- Confirmación de recepción
- Solicitud de más información
- Confirmación de tarea completada
- Propuesta de reunión

### 4. Programación de Envío

Mejores prácticas:
- Envía en horario laboral del destinatario
- Programa emails del fin de semana para lunes

## Atajos de Teclado Esenciales

| Atajo | Acción |
|-------|--------|
| C | Redactar nuevo email |
| R | Responder |
| E | Archivar |
| L | Aplicar etiqueta |

## El Método de los 4 D's

1. **Delete**: No necesitas → Borrar/archivar
2. **Do**: Menos de 2 minutos → Hazlo ahora
3. **Delegate**: No es tu tarea → Reenvía
4. **Defer**: Más de 2 minutos → Lista de tareas`
          },
          {
            id: "lesson-hd-1-2",
            title: "Google Calendar: Gestión del Tiempo",
            content: `# Google Calendar: Gestión Experta del Tiempo

## Configuración Avanzada

### Múltiples Calendarios por Propósito
- 📅 Personal: Citas médicas, familia
- 💼 Trabajo General: Reuniones, deadlines
- 🎯 Deep Work: Bloques de trabajo enfocado
- 👤 Por Cliente: Calendario por cliente

### Zonas Horarias Múltiples
Como AV trabajarás con clientes globales. Configura zonas secundarias.

## Técnicas de Bloqueo de Tiempo

**Ejemplo de día bloqueado:**
- 8:00 - 8:30 ☀️ Planificación
- 8:30 - 9:00 📧 Email
- 9:00 - 11:00 🎯 Deep Work
- 11:00 - 11:15 ☕ Descanso
- 11:15 - 12:30 💬 Reuniones
- 12:30 - 1:30 🍽️ Almuerzo
- 1:30 - 3:30 🎯 Deep Work
- 3:30 - 4:00 📧 Email
- 4:00 - 5:00 📋 Tareas administrativas

### Buffer Time
Nunca agendes reuniones consecutivas. Agrega 15-30 minutos entre ellas.`
          },
          {
            id: "lesson-hd-1-3",
            title: "Google Drive y Docs",
            content: `# Google Drive y Docs: Colaboración Efectiva

## Estructura de Carpetas Profesional

**Sistema recomendado:**
- 📁 1. CLIENTES (subcarpetas por cliente)
- 📁 2. PERSONAL (Portafolio, Plantillas, Certificaciones)
- 📁 3. RECURSOS (Tutoriales, Referencias)
- 📁 4. ARCHIVO (proyectos terminados)

## Funciones Clave de Drive

**Búsqueda Avanzada:**
- type:document - Solo Docs
- owner:email - Por dueño
- before:2024-01-01 - Antes de fecha

**Niveles de Compartir:**
| Nivel | Uso |
|-------|-----|
| Viewer | Solo ver |
| Commenter | Ver y comentar |
| Editor | Modificar |

## Google Docs

Para revisión con clientes: **SIEMPRE usa modo sugerencias**

## Google Sheets

Funciones esenciales:
- BUSCARV: Buscar valores
- Formato Condicional: Reglas visuales
- Validación de Datos: Desplegables
- Tablas Dinámicas: Análisis de datos`
          }
        ],
        sprint: {
          title: "Sprint: Google Workspace",
          description: "Demuestra tu dominio del ecosistema Google",
          tasks: [
            { id: "task-hd-1", question: "Configura tu Gmail con sistema de etiquetas, 2 filtros automáticos y 2 plantillas profesionales." },
            { id: "task-hd-2", question: "Diseña tu día ideal en Google Calendar con time blocking y múltiples calendarios." },
            { id: "task-hd-3", question: "Crea estructura de carpetas en Drive con plantillas de informe semanal y tracking de tiempo." }
          ]
        },
        exam: {
          title: "Evaluación: Google Workspace",
          description: "Evalúa tus conocimientos",
          passingScore: 70,
          questions: [
            { id: "q1", question: "El método 'Inbox Zero' significa:", options: ["Eliminar todos los emails", "Tener cero emails sin procesar", "Responder todo inmediatamente", "No usar email"], correctAnswer: 1 },
            { id: "q2", question: "Ventaja de etiquetas sobre carpetas:", options: ["Tienen colores", "Un email puede tener múltiples etiquetas", "Son más fáciles", "Ocupan menos espacio"], correctAnswer: 1 },
            { id: "q3", question: "Para revisión con clientes usar:", options: ["Modo edición", "Modo sugerencia", "PDF", "Permisos de propietario"], correctAnswer: 1 },
            { id: "q4", question: "Buffer time entre reuniones sirve para:", options: ["Parecer ocupado", "Procesar notas y prepararse", "Requisito de Calendar", "Cobrar más"], correctAnswer: 1 },
            { id: "q5", question: "El método de los 4 D's incluye:", options: ["Download, Delete, Draft, Done", "Delete, Do, Delegate, Defer", "Decide, Deliver, Document, Discuss", "Ninguna"], correctAnswer: 1 }
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
        description: "Domina el arte de escribir emails y mensajes efectivos",
        theory: [
          {
            id: "lesson-ce-1-1",
            title: "Principios de Comunicación Escrita",
            content: `# Principios de la Comunicación Escrita Profesional

## Por Qué la Escritura es tu Superpoder

En el trabajo remoto, el 90% de tu comunicación es escrita.

## El Framework CLEAR

### C - Conciso
Elimina palabras innecesarias. Cada palabra debe aportar valor.

### L - Legible
- Párrafos cortos (3-4 líneas)
- Bullets para listas
- Negritas para puntos clave

### E - Específico
Sé preciso con fechas, cantidades y responsables.

### A - Accionable
Cada comunicación debe tener un propósito claro.

### R - Respetuoso
Mantén un tono profesional.

## Anatomía del Email Perfecto

### Asunto
- [Acción requerida] + Tema + Fecha límite
- [Para tu información] + Resumen

### Cuerpo
- Un tema por email
- Información más importante primero
- Bullets para múltiples puntos

### Cierre
- ¿Qué necesitas del lector?
- ¿Para cuándo?`
          },
          {
            id: "lesson-ce-1-2",
            title: "Mensajería Instantánea",
            content: `# Comunicación en Mensajería Instantánea

## La Regla del Mensaje Completo

**NO hagas esto:**
- Hola
- ¿Cómo estás?
- Tengo una pregunta

**SÍ haz esto:**
- Hola María, pregunta sobre proyecto ABC: ¿El deadline sigue siendo el viernes?

## Principios

### Contexto Antes de Pregunta
### Usa Hilos (Threads)
### Estados y Disponibilidad
- 🟢 Disponible
- 🟡 Ausente
- 🔴 No molestar

## La Regla de los 3 Mensajes

Si un tema requiere más de 3 intercambios, probablemente es mejor una llamada.

## Expectativas con Clientes

"Respondo mensajes dentro de 2-4 horas en horario laboral. Para urgencias, llámame."`
          },
          {
            id: "lesson-ce-1-3",
            title: "Documentación y Reportes",
            content: `# Documentación y Reportes Profesionales

## El Poder de Documentar

- Reduce preguntas repetitivas
- Facilita handoffs
- Demuestra profesionalismo

## Tipos de Documentación

### 1. SOPs (Standard Operating Procedures)
- Objetivo
- Frecuencia
- Tiempo estimado
- Herramientas
- Pasos detallados
- Problemas comunes

### 2. Reportes Semanales
- Resumen ejecutivo (2-3 oraciones)
- Logros de la semana
- Métricas clave
- Desafíos y soluciones
- Próxima semana

### 3. Actas de Reunión
- Fecha, Hora, Participantes
- Agenda
- Resumen
- Decisiones
- Action Items
- Próxima reunión

## Principios

1. Escribe para tu Yo del Futuro
2. Usa Formato Consistente
3. Actualiza Regularmente
4. Hazla Encontrable
5. Incluye Screenshots`
          }
        ],
        sprint: {
          title: "Sprint: Comunicación Profesional",
          description: "Demuestra dominio de la comunicación escrita",
          tasks: [
            { id: "task-ce-1", question: "Reescribe estos emails aplicando CLEAR: 'hola como estas necesito ayuda con algo' y 'URGENTE!!! Necesito el reporte YA!!!'" },
            { id: "task-ce-2", question: "Crea 3 plantillas: onboarding, aviso de retraso, y cierre semanal." },
            { id: "task-ce-3", question: "Crea un SOP completo para un proceso de asistencia virtual." }
          ]
        },
        exam: {
          title: "Evaluación: Comunicación",
          description: "Evalúa tus conocimientos",
          passingScore: 70,
          questions: [
            { id: "q1", question: "En CLEAR, la 'E' significa:", options: ["Elegante", "Específico", "Extenso", "Emotivo"], correctAnswer: 1 },
            { id: "q2", question: "Mejor práctica en Slack:", options: ["Enviar 'Hola' primero", "Mensaje completo con contexto", "Muchos mensajes cortos", "Notas de voz"], correctAnswer: 1 },
            { id: "q3", question: "Regla de los 3 Mensajes:", options: ["Responder 3 veces al día", "Más de 3 intercambios = llamada", "3 mensajes por conversación", "Esperar 3 horas"], correctAnswer: 1 },
            { id: "q4", question: "Asunto de email profesional:", options: ["Solo 'Hola'", "[Acción requerida] + Tema + Fecha", "Email completo en asunto", "Muchos !!!"], correctAnswer: 1 },
            { id: "q5", question: "Un SOP debe incluir:", options: ["Solo pasos", "Objetivo, pasos, herramientas, problemas y soluciones", "Solo video", "Referencias"], correctAnswer: 1 }
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
        description: "Principios y técnicas para gestionar tu tiempo",
        theory: [
          {
            id: "lesson-gt-1-1",
            title: "La Ciencia de la Productividad",
            content: `# La Ciencia de la Productividad

## Productividad Real vs Percibida

**Ocupado:** Muchas horas, muchas tareas, siempre corriendo
**Productivo:** Resultados significativos en tiempo razonable

## Ecuación de la Productividad

Productividad = Valor del Output / (Tiempo + Energía)

## Los Enemigos

### 1. La Multitarea
- El cerebro NO puede hacer multitarea cognitiva
- Cada cambio cuesta 15-25 minutos
- Reduce productividad hasta 40%

### 2. Las Interrupciones
- Interrumpido cada 3-5 minutos
- Recuperar enfoque: 23 minutos
- Solo 2 horas de trabajo enfocado en 8 horas

### 3. La Procrastinación
- Tareas muy grandes
- Tareas aburridas
- Perfeccionismo
- Falta de claridad

## Técnicas Fundamentales

### Time Blocking
Bloques de tiempo específicos para tareas específicas.

### Técnica Pomodoro
25 minutos trabajo, 5 minutos descanso.

### Matriz de Eisenhower
| | Urgente | No Urgente |
|---|---------|------------|
| Importante | HACER YA | AGENDAR |
| No Importante | DELEGAR | ELIMINAR |

### Regla de 2 Minutos
Si toma menos de 2 minutos, hazlo ahora.

### Eat the Frog
Tarea más difícil primero en la mañana.`
          },
          {
            id: "lesson-gt-1-2",
            title: "Planificación Efectiva",
            content: `# Planificación Efectiva

## Los 3 Niveles

### Nivel 1: Planificación Diaria
**Cuándo:** Noche anterior o primera hora
**Duración:** 10-15 minutos

Proceso:
1. Revisar calendario
2. Identificar 3 MITs (Most Important Tasks)
3. Estimar tiempo
4. Bloquear en calendario
5. Dejar 20-30% para imprevistos

### Nivel 2: Planificación Semanal
**Cuándo:** Domingo o lunes
**Duración:** 30-45 minutos

Proceso:
1. Revisar semana anterior
2. Revisar compromisos
3. Definir 3-5 objetivos
4. Distribuir en días

### Nivel 3: Planificación Mensual

## Estimación de Tiempo

### Técnicas
1. **Multiplica por 1.5-2x** tu estimación inicial
2. **Descompón** la tarea en pasos
3. **Usa datos históricos**

## Manejo de Deadlines

Trabajar hacia atrás desde la fecha límite.

Si no llegarás:
- Avisa con anticipación
- Explica brevemente
- Propón nueva fecha
- Ofrece solución parcial`
          },
          {
            id: "lesson-gt-1-3",
            title: "Eliminación de Distracciones",
            content: `# Eliminación de Distracciones

## El Costo Real

Cada distracción tiene costo triple:
1. Tiempo de la interrupción
2. Tiempo para recuperar enfoque (23 min)
3. Errores por pérdida de contexto

5 distracciones de 1 min = **2 horas perdidas**

## Estrategias

### 1. Control de Notificaciones
- Email: Desactivar push, revisar en bloques
- Slack: Solo mensajes directos
- Teléfono: Modo avión en deep work

### 2. Bloqueadores
- Freedom, Cold Turkey, RescueTime
- Forest, Screen Time

### 3. Diseño del Entorno
- Escritorio limpio
- Teléfono fuera de vista
- Audífonos con cancelación de ruido

### 4. Técnicas de Enfoque
- Time Blocking: 90-120 minutos de deep work
- Parking Lot: Anota pensamientos, vuelve a la tarea
- Rituales de Inicio

### 5. Manejo de Personas
- Horarios de disponibilidad claros
- Definir emergencias reales vs puede esperar

## Recuperación del Enfoque

1. Reconoce que te distrajiste
2. Anota dónde estabas
3. Respira 3 veces
4. Relee las últimas líneas
5. Continúa`
          }
        ],
        sprint: {
          title: "Sprint: Sistema de Productividad",
          description: "Diseña tu sistema personal de gestión del tiempo",
          tasks: [
            { id: "task-gt-1", question: "Auditoría de 3 días: registra actividades en bloques de 30 min. Analiza horas de trabajo enfocado y principales distracciones." },
            { id: "task-gt-2", question: "Diseña tu día ideal con time blocking, Pomodoro y Eat the Frog. Implementa 5 días y reporta resultados." },
            { id: "task-gt-3", question: "Crea plan anti-distracciones: notificaciones a desactivar, herramientas, cambios físicos, y ritual de inicio." }
          ]
        },
        exam: {
          title: "Evaluación: Gestión del Tiempo",
          description: "Evalúa tus conocimientos de productividad",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Tiempo para recuperar enfoque después de interrupción:", options: ["2-3 min", "5-10 min", "23 minutos", "45 min"], correctAnswer: 2 },
            { id: "q2", question: "En Matriz de Eisenhower, tu tiempo debe estar en:", options: ["Cuadrante 1: Urgente e Importante", "Cuadrante 2: No Urgente pero Importante", "Cuadrante 3: Urgente No Importante", "Cuadrante 4"], correctAnswer: 1 },
            { id: "q3", question: "Eat the Frog recomienda:", options: ["Dejar tareas difíciles al final", "Hacer tarea difícil primero", "Dividir tareas", "Delegar"], correctAnswer: 1 },
            { id: "q4", question: "Regla de 2 Minutos: si toma menos de 2 min:", options: ["Agendar", "Delegar", "Hacerlo inmediatamente", "Anotar"], correctAnswer: 2 },
            { id: "q5", question: "MITs significa:", options: ["Meetings In Time", "Most Important Tasks", "Monthly Important Targets", "Minutes In Total"], correctAnswer: 1 }
          ]
        }
      }
    ]
  }
];
