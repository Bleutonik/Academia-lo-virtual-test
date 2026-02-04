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
  },
  {
    id: "diseno-grafico",
    title: "Diseño Gráfico para Asistentes Virtuales",
    slug: "diseno-grafico",
    description: "Domina los fundamentos del diseño gráfico profesional. Desde percepción visual y psicología del color hasta identidad de marca, flujos de trabajo y comunicación con clientes.",
    duration: "~25 horas",
    totalLessons: "20 Lecciones + Proyectos Prácticos",
    icon: "Palette",
    color: "from-purple-500 to-pink-500",
    certificate: {
      title: "Certificado en Diseño Gráfico para Asistentes Virtuales",
      description: "Ha completado satisfactoriamente el curso de Diseño Gráfico con dominio en fundamentos visuales, branding e identidad de marca"
    },
    modules: [
      {
        id: "mod-dg-1",
        title: "Fundamentos de Diseño y Brief Creativo",
        description: "Domina los principios científicos del diseño visual, psicología del color, tipografía estratégica y el proceso de conceptualización creativa",
        theory: [
          {
            id: "lesson-dg-1-1",
            title: "La Ciencia de la Percepción Visual",
            content: `# La Ciencia de la Percepción Visual

## Introducción

Antes de diseñar, debemos entender cómo el cerebro humano procesa la información visual. La neurociencia del diseño revela que el **90% de la información** transmitida al cerebro es visual, y procesamos imágenes **60,000 veces más rápido** que texto.

---

## Principios Fundamentales

### 1. Jerarquía Visual

El cerebro busca orden. Lo que se ve primero define la importancia percibida.

**Patrones de Lectura:**

| Patrón | Uso | Implicación |
|--------|-----|-------------|
| **Patrón F** | Páginas con mucho texto | Info crítica arriba y a la izquierda |
| **Patrón Z** | Páginas con poco texto | CTA idealmente abajo-derecha |

**Dato importante:** Los estudios de eye-tracking de Nielsen Norman Group muestran que en páginas de resultados de búsqueda, los usuarios casi nunca miran el lado derecho.

---

### 2. Contraste y Diferenciación

Sin contraste suficiente, todos los elementos compiten igual y ninguno destaca.

**Formas de lograr contraste:**
- **Tamaño:** grande vs pequeño
- **Color:** claro vs oscuro, complementarios
- **Peso:** bold vs light
- **Forma:** orgánico vs geométrico
- **Textura:** suave vs rugoso
- **Dirección:** horizontal vs vertical

---

### 3. Alineación (Orden Invisible)

La alineación crea conexiones visuales implícitas. La desalineación (incluso de pocos píxeles) genera una sensación subliminal de "algo está mal".

**Tipos de alineación:**
- **Izquierda:** La más natural para idiomas occidentales
- **Centrada:** Formal, tradicional, pero dificulta escaneo
- **Derecha:** Inusual, crea tensión visual (usar con propósito)
- **Justificada:** Solo para bloques de texto largos, evitar en web

---

### 4. Espacio Negativo

El espacio vacío no es desperdicio; es una herramienta activa de diseño:

✓ Dirige la atención a lo importante
✓ Comunica premium y sofisticación
✓ Reduce la fatiga visual
✓ Mejora la comprensión y retención

> **Ejemplo:** Las marcas de lujo usan abundante espacio negativo. Las marcas "baratas" llenan cada centímetro.

---

## Teoría del Color Digital

### RGB vs CMYK

| Característica | RGB | CMYK |
|----------------|-----|------|
| Modelo | Aditivo (luz) | Sustractivo (tinta) |
| Uso | Pantallas, web, apps | Impresión |
| Rango | 16.7 millones de colores | Gamut más limitado |

**Importante para accesibilidad:**
- WCAG requiere ratio mínimo de **4.5:1** para texto normal
- El contraste de luminosidad es más importante que el contraste de tono

---

## Tip Práctico

> Antes de empezar cualquier diseño, define tu sistema de jerarquía: ¿qué es lo MÁS importante que debe ver el usuario? Diseña ESO primero, luego añade elementos secundarios.

## Reflexión

Abre el sitio web de tu marca favorita y entrecierra los ojos hasta que todo se vea borroso. ¿Qué elementos sigues distinguiendo? Esos son los que tienen mayor peso visual.
`
          },
          {
            id: "lesson-dg-1-2",
            title: "Psicología del Color Aplicada",
            content: `# Psicología del Color Aplicada al Diseño

## Introducción

El color influye entre el **62% y el 90%** de la evaluación inicial de un producto. No es decoración; es comunicación. Cada color evoca asociaciones emocionales, culturales y psicológicas.

---

## Impacto Emocional de los Colores

### Azul
- **Transmite:** Seguridad, lógica, confianza, profesionalismo
- **Usado por:** Bancos, tecnológicas, redes sociales (Facebook, LinkedIn, PayPal)
- **Precaución:** Puede percibirse frío o impersonal si se usa solo

### Turquesa
- Ubicado entre azul y verde
- **Transmite:** Calma, claridad mental, comunicación, frescura
- **Usado por:** Salud, bienestar, tecnología humanizada

### Verde
- **Transmite:** Naturaleza, crecimiento, salud, dinero
- **Usado por:** Salud, finanzas, productos ecológicos (Spotify, Starbucks)

### Rojo
- **Transmite:** Urgencia, pasión, energía, peligro
- El color más "ruidoso" visualmente - acelera el pulso
- **Usado por:** CTAs, ofertas, alimentación (Coca-Cola, Netflix)
- **Precaución:** Sobreuso causa fatiga

### Naranja
- **Transmite:** Energía, creatividad, accesibilidad
- Menos agresivo que rojo pero igualmente llamativo
- **Usado por:** Tecnología accesible, creatividad (Amazon)

### Amarillo
- **Transmite:** Optimismo, alegría, atención, advertencia
- **Precaución:** Sobre blanco es invisible; necesita alto contraste

### Morado
- **Transmite:** Creatividad, lujo, misterio, espiritualidad
- **Usado por:** Belleza, lujo, tecnología premium (Twitch)

### Negro
- **Transmite:** Elegancia, poder, sofisticación, lujo
- **Usado por:** Moda, tecnología premium (Chanel, Apple)

---

## La Regla 60-30-10

Proporciones matemáticas para paletas equilibradas:

| Proporción | Uso | Ejemplo |
|------------|-----|---------|
| **60%** | Color neutro/dominante | Fondo, canvas principal |
| **30%** | Color secundario/marca | Headers, iconos, navegación |
| **10%** | Color acento/acción | CTAs, alertas, elementos destacados |

---

## Consideraciones Culturales

| Color | Occidente | Asia |
|-------|-----------|------|
| Blanco | Pureza | Luto (partes de Asia) |
| Rojo | Peligro | Suerte/prosperidad (China) |
| Verde | Seguro/go | Islam (Medio Oriente) |

---

## Tip Práctico

> Crea tus paletas en **HSL** (Hue, Saturation, Lightness) en lugar de HEX. Te permite ajustar luminosidad y saturación manteniendo el tono, facilitando crear variantes claras/oscuras para estados hover, disabled, etc.

## Reflexión

Piensa en 3 marcas que asocias inmediatamente con un color específico. ¿Qué sentirías si cambiaran a un color completamente diferente?
`
          },
          {
            id: "lesson-dg-1-3",
            title: "Tipografía y Voz de Marca",
            content: `# Tipografía y Voz de Marca

## Introducción

La tipografía es la voz de la marca. Así como una persona comunica tanto con qué dice como con cómo lo dice, una marca comunica a través del contenido y la tipografía que lo presenta.

---

## Categorías Tipográficas

### Serif (Con Remates)
- **Personalidad:** Tradición, confianza, elegancia, autoridad
- **Subcategorías:**
  - Old Style (Garamond): Clásico, literario
  - Transitional (Times): Equilibrado, periodístico
  - Modern (Bodoni): Moda, lujo, alto contraste
  - Slab Serif (Rockwell): Robusto, técnico
- **Mejor para:** Cuerpos de texto largo, marcas tradicionales

### Sans Serif (Sin Remates)
- **Personalidad:** Modernidad, simplicidad, accesibilidad
- **Subcategorías:**
  - Grotesque (Helvetica): Neutral, corporativo
  - Geometric (Futura, Montserrat): Moderno, geométrico
  - Humanist (Open Sans): Cálido, legible
- **Mejor para:** Digital, interfaces, startups

### Display/Decorativas
- Diseñadas para impacto en tamaños grandes
- **Uso:** SOLO títulos y elementos destacados, NUNCA cuerpo

### Script/Manuscritas
- Imitan escritura a mano
- **Precaución:** Muy difíciles de leer en tamaños pequeños

---

## Micro-Tipografía

### Kerning
- Espacio entre pares específicos de letras
- Crítico en logotipos y títulos grandes

### Tracking (letter-spacing)
- Espacio uniforme entre todas las letras
- Aumentar en mayúsculas pequeñas mejora legibilidad

### Leading (line-height)
- Espacio entre líneas de texto
- **Regla general:** 120-150% del tamaño de fuente para cuerpo

---

## Jerarquía Tipográfica

| Nivel | Uso | Características |
|-------|-----|-----------------|
| H1 | El más grande | Una por página |
| H2 | Secciones principales | Clara diferenciación de H1 |
| H3 | Subsecciones | Más pequeño que H2 |
| Body | Lectura sostenida | El más legible |
| Caption | Info secundaria | Metadata, legal |

---

## Combinación de Fuentes

**Máximo 2-3 familias por proyecto:**

✓ **Contraste con propósito:** Serif para títulos + Sans para cuerpo
✓ **Afinidad invisible:** Deben compartir algo (altura x, proporciones)

**Ejemplo clásico:**
- Headlines: Playfair Display (serif display)
- Body: Source Sans Pro (sans humanista)

---

## Tip Práctico

> Antes de elegir tipografías, escribe 3 adjetivos que describan la personalidad de la marca. Luego busca tipografías que encarnen esos adjetivos.

## Reflexión

¿Puedes reconocer algunas marcas solo por su tipografía? (Google, Coca-Cola, FedEx, Apple) ¿Qué hace que sean tan memorables?
`
          },
          {
            id: "lesson-dg-1-4",
            title: "El Brief Creativo Profesional",
            content: `# El Brief Creativo: Fundamento Estratégico

## Introducción

El brief de diseño es la piedra angular de cualquier proyecto creativo exitoso. Los proyectos con brief bien estructurado tienen un **60% menos de revisiones** y se completan un **40% más rápido**.

---

## Las Tres Verdades del Brief

| Verdad | Preguntas Clave |
|--------|-----------------|
| **Del Negocio** | ¿Por qué este proyecto ahora? ¿Qué métricas queremos impactar? |
| **De la Audiencia** | ¿Quién consumirá esto? ¿Qué les importa? |
| **Creativa** | ¿Qué territorio visual está disponible? ¿Qué hará esto memorable? |

---

## El Costo de No Tener Brief

Sin brief claro, los proyectos sufren de:
- **Scope creep:** El proyecto crece sin control
- **Revisiones infinitas:** Sin criterios, todo es opinión
- **Frustración mutua:** Cliente y diseñador hablan idiomas diferentes
- **Resultados mediocres:** Sin dirección clara, el diseño es genérico

---

## Anatomía del Brief Profesional

### Sección 1: Contexto
- Antecedentes: ¿Por qué existe este proyecto?
- Problema a resolver: La raíz, no el síntoma
- Oportunidad: ¿Qué ganamos si es exitoso?

### Sección 2: Objetivos SMART
- **S**pecific: Define exactamente qué lograr
- **M**easurable: Incluye métricas cuantificables
- **A**chievable: Realista con recursos disponibles
- **R**elevant: Alineado con objetivos de negocio
- **T**ime-bound: Con fecha límite clara

### Sección 3: Audiencia
- Perfil demográfico
- Perfil psicográfico
- Comportamientos y hábitos

### Sección 4: Mensaje
- Mensaje principal (una oración)
- Mensajes de soporte (2-3)
- Tono de voz

### Sección 5: Especificaciones
- Lista de entregables exactos
- Formatos y dimensiones
- Restricciones técnicas y legales

### Sección 6: Gestión
- Cronograma con milestones
- Presupuesto aprobado
- Stakeholders y proceso de aprobación

---

## Ejemplo de Brief Transformado

**Antes:** "Necesitamos un logo moderno"

**Después:** "Necesitamos diferenciarnos de 3 competidores específicos, proyectar credibilidad para contratos enterprise, y funcionar tanto en LinkedIn como en tarjetas físicas."

---

## Tip Práctico

> Antes de cualquier reunión de brief, envía un cuestionario de pre-trabajo: "¿Qué 3 marcas admiras y por qué?" "¿Cuál es el mayor problema de negocio que enfrentas?"

## Reflexión

Piensa en un proyecto pasado con muchas revisiones. ¿Qué preguntas no hiciste al inicio? ¿Qué información asumiste que debiste confirmar?
`
          },
          {
            id: "lesson-dg-1-5",
            title: "Del Insight al Concepto Creativo",
            content: `# Del Insight al Concepto Creativo

## Introducción

El concepto creativo es donde la estrategia se transforma en dirección visual. Es la "gran idea" que unifica todas las piezas de comunicación y les da sentido.

---

## El Proceso de Conceptualización

### Fase 1: Inmersión (1-3 horas)
- Relee el brief completo
- Investiga la competencia
- Busca referencias de inspiración

### Fase 2: Destilación (30-60 min)

**Insight = Verdad del producto + Verdad de la audiencia**

**Ejemplo:**
- Producto: Software de contabilidad para freelancers
- Verdad del producto: Automatiza tareas que odian hacer
- Verdad de la audiencia: Eligieron libertad, pero la administración les roba esa libertad
- **Insight:** "La verdadera libertad está en no pensar en facturas"
- **Concepto:** "Facturación invisible"

### Fase 3: Ideación Divergente (2-4 horas)
- Genera 15-20 conceptos sin juzgar
- Usa técnicas: mapas mentales, asociación libre
- Incluye ideas "locas"

### Fase 4: Evaluación Convergente
Filtra usando criterios del brief:
✓ ¿Cumple el objetivo de negocio?
✓ ¿Resuena con la audiencia?
✓ ¿Es diferenciador?
✓ ¿Es ejecutable?
✓ ¿Es memorable?

### Fase 5: Desarrollo
Para cada concepto finalista:
1. El Insight (1-2 oraciones)
2. La Gran Idea (frase memorable)
3. El Territorio Visual (mood board)
4. Ejecución Ejemplo
5. Extensibilidad

---

## El Concepto Como Sistema

Un buen concepto debe poder responder:
- ¿Cómo se ve un post de Instagram bajo este concepto?
- ¿Cómo se ve un email bajo este concepto?
- ¿Cómo sería una campaña navideña bajo este concepto?

---

## Técnicas de Ideación

| Técnica | Pregunta |
|---------|----------|
| **Reversión** | ¿Qué haría lo opuesto a la competencia? |
| **Analogía** | ¿Qué otra industria resuelve un problema similar? |
| **Extremos** | ¿Cómo sería con presupuesto ilimitado? |
| **Persona** | ¿Cómo resolvería esto [artista que admiras]? |

---

## La Regla de las 3 Opciones

Al presentar, ofrece:
1. **Evolutiva:** Mejora segura del status quo
2. **Equilibrada:** Tu recomendación real
3. **Revolucionaria:** Arriesgada pero memorable

---

## Tip Práctico

> Cuando presentes conceptos, explica el "por qué" antes del "qué". No muestres el diseño inmediatamente; primero establece contexto, insight y lógica estratégica.

## Reflexión

Piensa en una campaña que te impactó. ¿Puedes identificar el concepto detrás? ¿Qué insight crees que descubrieron?
`
          }
        ],
        sprint: {
          title: "Sprint: Fundamentos y Brief Creativo",
          description: "Aplica los principios de diseño y desarrolla un brief profesional",
          tasks: [
            {
              id: "task-dg-1-1",
              question: "Analiza una página web que consideres bien diseñada. Identifica: jerarquía visual (qué se ve primero), uso del espacio negativo, paleta de colores (regla 60-30-10), y tipografías utilizadas. Explica por qué funciona."
            },
            {
              id: "task-dg-1-2",
              question: "Crea un brief creativo completo para un negocio ficticio o real. Debe incluir: contexto, objetivos SMART, perfil de audiencia, mensaje clave, y lista de entregables."
            },
            {
              id: "task-dg-1-3",
              question: "A partir de tu brief, desarrolla un concepto creativo con: insight (verdad del producto + verdad de la audiencia), gran idea (frase memorable), y descripción del territorio visual que utilizarías."
            }
          ]
        },
        exam: {
          title: "Examen: Fundamentos de Diseño",
          description: "Evalúa tus conocimientos sobre percepción visual, color, tipografía y brief creativo",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es el objetivo principal de un brief de diseño?", options: ["Documentar el presupuesto", "Conectar la visión del cliente con la ejecución creativa", "Listar herramientas de software", "Registrar diseños anteriores"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué método se recomienda para definir objetivos de diseño?", options: ["Método aleatorio", "Método SMART", "Método rápido", "Método creativo"], correctAnswer: 1 },
            { id: "q3", question: "¿Cuántos conceptos creativos se recomienda generar antes de filtrar?", options: ["Solo 1, el mejor", "Exactamente 3", "Al menos 10-15", "No importa la cantidad"], correctAnswer: 2 },
            { id: "q4", question: "En la regla 60-30-10, ¿qué representa el 10%?", options: ["Color de fondo", "Tipografía principal", "Color de acento/CTAs", "Espacio negativo"], correctAnswer: 2 },
            { id: "q5", question: "¿Qué tipo de tipografía es mejor para interfaces digitales?", options: ["Serif tradicional", "Sans Serif", "Script decorativa", "Display grande"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-dg-2",
        title: "Identidad Visual y Branding",
        description: "Aprende a construir identidades de marca consistentes, sistemas de color profesionales, manuales de marca y auditorías de calidad visual",
        theory: [
          {
            id: "lesson-dg-2-1",
            title: "Fundamentos de Identidad Visual",
            content: `# Fundamentos de Identidad Visual y Consistencia de Marca

## Introducción

La consistencia de marca es presentar una identidad visual y verbal uniforme en todos los puntos de contacto. Las marcas consistentes ven un aumento de hasta **33% en ingresos** según estudios de Lucidpress.

---

## Pilares de la Consistencia

### Consistencia Visual

**Elementos a mantener alineados:**

| Elemento | Qué definir |
|----------|-------------|
| **Logotipo** | Versiones, proporciones, espacios de respeto |
| **Colores** | Códigos en todos los sistemas (HEX, RGB, CMYK, Pantone) |
| **Tipografía** | Familias, jerarquías, pesos permitidos |
| **Fotografía** | Iluminación, color grading, composición |
| **Iconografía** | Estilo, peso de línea, nivel de detalle |

### Consistencia Verbal

- **Tono de voz:** ¿Formal o casual? ¿Serio o juguetón?
- **Vocabulario:** Palabras que usa vs palabras que evita
- **Estructura:** ¿Oraciones cortas o complejas? ¿Tutear o usted?

---

## Consistencia ≠ Aburrimiento

La consistencia es sobre la esencia, no la ejecución exacta.

**Adaptación válida:**
✓ Diferentes tonos para diferentes audiencias (B2B formal, B2C casual)
✓ Visuales adaptados a plataformas (LinkedIn profesional, TikTok dinámico)
✓ Campañas especiales que "rompen" reglas estratégicamente

---

## El Test del Parpadeo

Cubre el logo de cualquier material de la marca. ¿Sigues reconociendo que es de esa marca?

Si no, hay un problema de consistencia.

> Las marcas más fuertes son reconocibles por su paleta, tipografía y estilo visual ANTES de ver el logo.

---

## Ejemplos de Consistencia

**Apple:** Reconocible por minimalismo extremo, espacios en blanco generosos, fotografía perfecta. La experiencia es inconfundiblemente Apple sin el logo.

**Coca-Cola:** Mantiene su rojo icónico (PMS 484) pero adapta comunicación desde nostálgica hasta juvenil. La esencia permanece constante.

---

## El Costo de la Inconsistencia

- **Confusión:** ¿Es esta la misma empresa que vi ayer?
- **Desconfianza:** Si no cuidan su imagen, ¿cuidarán mi pedido?
- **Dilución:** Cada pieza inconsistente no suma al equity de marca
- **Ineficiencia:** Sin reglas claras, cada diseño empieza de cero

---

## Tip Práctico

> Realiza el "Test del Parpadeo" regularmente: toma 10 piezas de la marca, quita los logos, mézclalas con competidores. ¿Puedes identificar las tuyas en 2 segundos?
`
          },
          {
            id: "lesson-dg-2-2",
            title: "Sistemas de Color para Marcas",
            content: `# Psicología del Color y Sistemas Cromáticos para Marcas

## Introducción

El color aumenta el reconocimiento de marca hasta un **80%** y el 85% de los consumidores citan el color como la razón principal de compra.

---

## Construyendo un Sistema de Color

### Estructura del Sistema

| Tipo | Cantidad | Uso |
|------|----------|-----|
| **Primarios** | 1-2 | Logo y elementos principales |
| **Secundarios** | 2-3 | Complementan, dan flexibilidad |
| **Neutros** | 2-3 | Fondos, textos (blancos, grises, negros) |
| **Semánticos** | 4 | Error (rojo), éxito (verde), advertencia, info |

### Especificaciones Técnicas

Cada color debe definirse en:
- **HEX:** #0066CC (web)
- **RGB:** 0, 102, 204 (pantallas)
- **CMYK:** 100, 60, 0, 0 (impresión)
- **Pantone:** 2935 C (impresión premium)

---

## Ejemplo de Sistema Completo

**Fintech Disruptiva:**

| Color | Código | Transmite |
|-------|--------|-----------|
| Primario: Azul eléctrico | #0066FF | Confianza + modernidad |
| Secundario: Verde menta | #00D9A5 | Crecimiento, dinero positivo |
| Acento: Morado | #7B61FF | Innovación |
| Neutro oscuro | #1A1A2E | Profesionalismo |
| Neutro claro | #FFFFFF | Limpieza |

---

## Errores Comunes

**Error por contexto:** Una app de meditación usó rojo como primario ("para ser diferentes"). El rojo contradecía el mensaje de calma. Después de cambiar a azules y verdes, conversiones subieron 40%.

**Error cultural:** Marca de bodas occidental se expandió a China con blanco y negro "elegante". En China, son colores de funerales. Rediseñaron con rojo y dorado.

---

## Accesibilidad y Contraste

### Ratios WCAG

| Uso | Ratio mínimo |
|-----|--------------|
| Texto normal | 4.5:1 |
| Texto grande | 3:1 |
| Elementos UI | 3:1 |

### Modo Oscuro

No es simplemente invertir colores:
- Reducir brillo de blancos (no usar #FFFFFF puro)
- Ajustar saturación (muy saturados "vibran")
- Mantener jerarquía con tonos de gris
- Probar colores de acento en ambos modos

---

## Tip Práctico

> Siempre prueba tu paleta en escala de grises. Si no hay suficiente contraste de luminosidad, habrá problemas de accesibilidad. Un diseño que funciona en blanco y negro funcionará en color.

## Reflexión

Piensa en 3 marcas que reconoces por su color. ¿Qué pasaría si Coca-Cola fuera azul o Facebook rojo?
`
          },
          {
            id: "lesson-dg-2-3",
            title: "Tipografía Estratégica para Marcas",
            content: `# Tipografía Estratégica: Más Allá de Elegir Fuentes

## Introducción

La tipografía correcta puede aumentar la comprensión lectora en un **20%** y el tiempo de permanencia en un sitio significativamente.

---

## Jerarquía Tipográfica

Una jerarquía clara guía al lector sin esfuerzo consciente.

| Nivel | Uso | Características |
|-------|-----|-----------------|
| **H1 - Headlines** | El más prominente | Puede usar display expresiva |
| **H2/H3 - Subheadlines** | Organiza secciones | Conecta con H1 pero más contenido |
| **Body** | Texto principal | Extremadamente legible (16-18px web) |
| **Supporting** | Captions, footnotes | Más pequeño pero legible |
| **UI Elements** | Botones, labels | Claridad sobre estilo |

---

## Combinación de Fuentes

### Principios

1. **Contraste con propósito:** Combina categorías diferentes (serif + sans)
2. **Afinidad invisible:** Deben compartir algo (altura x, proporciones)
3. **Máximo 2-3 fuentes:** Headlines, body, y opcionalmente UI

### Ejemplo de Sistema

| Uso | Fuente | Por qué |
|-----|--------|---------|
| Headlines | Playfair Display | Serif display, autoridad |
| Body | Source Sans Pro | Sans humanista, legibilidad |
| Código/UI | IBM Plex Mono | Monoespaciada, claridad |

---

## Consideraciones Técnicas

### Licencias
¿Es gratuita para uso comercial? ¿Web y print? ¿App?

### Performance Web
- Cada weight adicional añade tiempo de carga
- Considera variable fonts para optimizar

### Fallbacks
¿Qué fuente del sistema se usa si la principal no carga?

**Ejemplo CSS:** font-family: 'Playfair Display', Georgia, serif;

---

## Ejemplo Práctico

**Sistema para banco digital:**
- **Headline:** GT America (sans geometric - modernidad, confianza)
- **Body:** Inter (sans humanist - legibilidad digital superior)
- **UI:** System fonts para performance

Resultado: Moderno pero accesible, diferenciado de bancos tradicionales.

---

## Error Común

Usar el mismo tamaño y peso para títulos, subtítulos y cuerpo, cambiando solo el color. Resultado: usuarios no saben qué leer primero, tiempo en página cae 40%.

**Solución:** Jerarquía clara (32px bold / 20px medium / 16px regular)

---

## Tip Práctico

> Antes de elegir tipografías, escribe 5 adjetivos de la personalidad de marca. Para cada fuente candidata, pregunta: ¿Esta fuente comunica estos adjetivos?

## Reflexión

Toma un texto y renderízalo en 5 tipografías diferentes. Sin leer el contenido, ¿qué asumes sobre el emisor en cada caso?
`
          },
          {
            id: "lesson-dg-2-4",
            title: "Manuales de Marca Efectivos",
            content: `# Construcción de Manuales de Marca Efectivos

## Introducción

Un manual de marca es la constitución de la identidad visual. Pero el manual más completo es inútil si nadie lo consulta. El desafío es crear documentación completa pero accesible.

---

## Estructura del Manual

### Sección 1: Fundamentos
- Visión, misión, valores
- Historia y propósito
- Personalidad de marca
- Tono de voz con ejemplos

### Sección 2: Logotipo
- Versiones aprobadas (horizontal, vertical, monocromático)
- Construcción y proporciones
- Espacios de respeto
- Tamaños mínimos (digital e impreso)
- Uso sobre fondos
- **Usos incorrectos** (con ejemplos visuales)

### Sección 3: Colores
- Primarios con todos los códigos
- Secundarios y neutros
- Proporciones de uso (60-30-10)
- Combinaciones permitidas
- Ratios de accesibilidad

### Sección 4: Tipografía
- Familias y jerarquías
- Tamaños, pesos, line-heights
- Fallbacks para cada contexto

### Sección 5: Fotografía e Ilustración
- Estilo fotográfico
- Tratamiento de imágenes
- Estilo de iconografía

### Sección 6: Aplicaciones
Ejemplos en contexto real (web, social, email, print)

---

## Sistema de Capas para Usabilidad

| Capa | Contenido | Formato |
|------|-----------|---------|
| **Quick Reference** | Solo lo esencial | 1-2 páginas, poster |
| **Guía Operativa** | Info completa para diseñadores | 10-20 páginas, PDF/web |
| **Documentación Completa** | Todo el detalle | Archivo maestro |

---

## Formatos Modernos

- **Guías interactivas:** Frontify, Zeroheight, Notion
- **Design systems en Figma:** Componentes + documentación
- **Websites de marca internos**
- **Integración con DAM** (Digital Asset Management)

---

## Qué NO Hacer

**Manual de 85 páginas en PDF** → nadie lo abre, encontrar info toma 10 minutos, cada diseño es inconsistente.

**Solución:** Guía interactiva con búsqueda + quick reference de una página.

---

## Sección "Qué NO Hacer"

En lugar de solo texto "No estirar el logo", muestra:
- Logo estirado horizontalmente ❌
- Logo con sombra añadida ❌
- Logo sobre fondo sin contraste ❌

Lo visual es más memorable y claro.

---

## Tip Práctico

> Incluye siempre un contacto de "soporte de marca" para dudas no cubiertas. Esto te da visibilidad sobre qué información falta y permite actualizar proactivamente.

## Reflexión

Piensa en la última guía de marca que consultaste. ¿Fue fácil encontrar lo que necesitabas? ¿Cómo la mejorarías?
`
          },
          {
            id: "lesson-dg-2-5",
            title: "Auditorías de Marca",
            content: `# Auditorías de Marca y Control de Calidad Visual

## Introducción

Las auditorías de marca son el "chequeo médico" que detecta inconsistencias antes de que erosionen el brand equity. Sin auditorías regulares, la marca se fragmenta silenciosamente.

---

## Proceso en 5 Fases

### Fase 1: Inventario

Recopila todos los touchpoints:

**Materiales impresos:**
- Tarjetas, papelería, brochures
- Packaging, señalética

**Presencia digital:**
- Website (todas las páginas)
- Apps, emails, firmas
- Documentos y presentaciones

**Redes sociales:**
- Perfiles, posts, stories, ads

**Materiales de partners:**
- Co-branding, portales de distribuidores

### Fase 2: Captura
Para cada touchpoint: screenshot, URL, fecha, responsable.

### Fase 3: Evaluación

**Checklist por elemento:**

☐ **Logotipo:** ¿Versión correcta? ¿Proporciones respetadas?
☐ **Colores:** ¿Códigos exactos? ¿Contraste de accesibilidad?
☐ **Tipografía:** ¿Familias correctas? ¿Jerarquías respetadas?
☐ **Tono de voz:** ¿Consistente? ¿Apropiado para el canal?

### Fase 4: Documentación

Categoriza por severidad:

| Nivel | Descripción | Acción |
|-------|-------------|--------|
| 🔴 **Crítico** | Daña activamente la marca | Inmediata |
| 🟠 **Alto** | Inconsistencia notable | Próximo ciclo |
| 🟡 **Medio** | Desviación menor | Cuando sea conveniente |
| 🟢 **Bajo** | Oportunidad de optimización | Próxima versión |

### Fase 5: Acción
- Prioriza: severidad × impacto × facilidad
- Asigna responsables y fechas
- Comunica a equipos afectados
- Programa verificación

---

## Frecuencia Recomendada

| Tipo | Frecuencia |
|------|------------|
| Auditoría completa | Anual |
| Revisión canales principales | Trimestral |
| Nuevos materiales | Continuo (antes de publicar) |
| Post-campañas | Después de cada lanzamiento |

---

## Hallazgo Crítico (Ejemplo Real)

"Portal de partners externos (200+ partners) muestra paleta anterior y tipografía incorrecta. Partners crean materiales co-branded con elementos obsoletos."

**Impacto:** Dilución multiplicada por red de partners.

**Acción:** Actualización prioritaria + comunicación urgente + assets actualizados.

---

## Tip Práctico

> Crea un "embajador de marca" en cada departamento con acceso a assets actualizados. Descentraliza el cuidado sin perder control.

## Reflexión

Si realizaras una auditoría hoy, ¿cuáles serían los 3 problemas más probables? ¿Por qué no se han corregido?
`
          }
        ],
        sprint: {
          title: "Sprint: Identidad Visual",
          description: "Desarrolla elementos de identidad de marca y documentación",
          tasks: [
            {
              id: "task-dg-2-1",
              question: "Crea un sistema de color completo para una marca (real o ficticia): 2 colores primarios, 2 secundarios, 3 neutros. Incluye códigos HEX, RGB y describe el razonamiento psicológico detrás de cada elección."
            },
            {
              id: "task-dg-2-2",
              question: "Diseña un mini manual de marca (quick reference de 1-2 páginas) que incluya: versiones del logo con usos correctos e incorrectos, paleta de colores con proporciones, y sistema tipográfico."
            },
            {
              id: "task-dg-2-3",
              question: "Realiza una auditoría básica de una marca existente (puede ser local o conocida). Evalúa su consistencia en 3 canales diferentes (web, redes sociales, material impreso/físico) y documenta 3 hallazgos con recomendaciones."
            }
          ]
        },
        exam: {
          title: "Examen: Identidad Visual",
          description: "Evalúa tus conocimientos sobre branding y consistencia de marca",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué es la consistencia de marca?", options: ["Cambiar el logo frecuentemente", "Presentar la marca igual en todas las plataformas", "Usar diferentes colores por campaña", "Modificar el mensaje según el cliente"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué significa BAM en gestión de marca?", options: ["Brand Automatic Management", "Brand Asset Management", "Business Asset Monitoring", "Brand Analysis Method"], correctAnswer: 1 },
            { id: "q3", question: "¿Cada cuánto se recomienda una auditoría completa de marca?", options: ["Anualmente", "Mensualmente", "Solo al inicio", "Nunca"], correctAnswer: 0 },
            { id: "q4", question: "¿Qué debe incluir siempre un manual de marca?", options: ["Solo el logo", "Usos correctos e incorrectos del logo", "Solo colores", "Solo tipografías"], correctAnswer: 1 },
            { id: "q5", question: "En una auditoría, ¿qué severidad tiene un logo incorrecto en material de alto impacto?", options: ["Bajo", "Medio", "Alto", "Crítico"], correctAnswer: 3 }
          ]
        }
      },
      {
        id: "mod-dg-3",
        title: "Herramientas y Flujos de Trabajo",
        description: "Domina el ecosistema de herramientas profesionales, diseño multi-formato, sistemas de diseño escalables y automatización del flujo creativo",
        theory: [
          {
            id: "lesson-dg-3-1",
            title: "Ecosistema de Herramientas Profesionales",
            content: `# Ecosistema de Herramientas para Flujos de Diseño Profesional

## Introducción

La diferencia entre un freelancer que trabaja 60 horas semanales y uno que trabaja 35 con los mismos resultados frecuentemente está en la eficiencia de sus sistemas y herramientas.

---

## Mapeo del Ecosistema

### 1. Gestión de Proyectos

| Escala | Herramienta | Características |
|--------|-------------|-----------------|
| Freelancer | Trello, Notion, Todoist | Simple, visual, gratis |
| Equipo pequeño | Asana, Monday | Robusto, integraciones |
| Agencia | Productive, Teamwork | Gestión + rentabilidad |

### 2. Diseño y Creación

**Diseño UI/Web:**
- **Figma:** Estándar de la industria, colaborativo, web-based
- **Sketch:** Mac only, maduro pero perdiendo terreno
- **Adobe XD:** Integración con CC

**Diseño gráfico/print:**
- **Adobe Illustrator:** Vectores, logos, print
- **Adobe Photoshop:** Fotos, composición
- **Affinity:** Alternativa sin suscripción

**Motion/Video:**
- **After Effects:** Estándar para motion graphics
- **Premiere Pro:** Edición de video
- **DaVinci Resolve:** Alternativa gratuita potente

### 3. Colaboración y Comunicación

| Propósito | Herramientas |
|-----------|--------------|
| Comunicación | Slack, Teams, Discord |
| Archivos | Google Drive, Dropbox |
| Feedback asíncrono | Loom, Figma comments |

### 4. Automatización

- **Zapier:** 5000+ apps, interfaz amigable
- **Make:** Más potente, curva mayor
- **Figma plugins:** Automatizan tareas comunes

---

## Stack Recomendado

### Freelancer Eficiente (~$50/mes)
- Notion (proyectos + CRM + docs)
- Figma (todo el diseño)
- Google Drive (archivos finales)
- Loom (presentaciones asíncronas)
- Calendly (scheduling)

### Estudio Pequeño (~$300/mes)
- Asana (proyectos)
- Figma (diseño)
- Slack (comunicación)
- Google Workspace (docs + email)
- Zapier (automatizaciones)

---

## Ejemplo de Automatización

**Cuando proyecto en Asana cambia a "Completado":**
1. Zapier mueve archivos finales a carpeta de archivo
2. Envía email al cliente con link de descarga
3. Crea entrada en spreadsheet de proyectos
4. Programa survey de satisfacción para 7 días después

**Ahorro:** 5 horas/semana

---

## Tip Práctico

> No intentes implementar todo de una vez. Empieza con una herramienta nueva, úsala 2 semanas, luego añade la siguiente. Un stack simple bien usado supera a uno complejo que nadie entiende.

## Reflexión

Mapea tu flujo actual desde que recibes un proyecto hasta que lo entregas. ¿Dónde hay fricción? ¿Qué información buscas repetidamente?
`
          },
          {
            id: "lesson-dg-3-2",
            title: "Diseño Multi-Formato",
            content: `# Diseño Multi-Formato: De Social Media a Print

## Introducción

Una campaña puede necesitar stories verticales (9:16), posts cuadrados (1:1), banners horizontales (16:9), emails, landing pages y material impreso. Diseñar eficientemente requiere un enfoque sistemático.

---

## Formatos Esenciales

### Redes Sociales

| Plataforma | Formato | Dimensiones |
|------------|---------|-------------|
| Instagram Feed | Cuadrado | 1080×1080 (1:1) |
| Instagram Feed | Vertical | 1080×1350 (4:5) mejor engagement |
| Instagram Story/Reel | Vertical | 1080×1920 (9:16) |
| Facebook Post | Horizontal | 1200×630 (1.9:1) |
| LinkedIn Post | Horizontal | 1200×627 (1.91:1) |
| Twitter/X | Horizontal | 1200×675 (16:9) |

### Display Advertising (IAB)
- Medium Rectangle: 300×250 (más común)
- Leaderboard: 728×90
- Mobile Leaderboard: 320×50

### Print
- Tarjeta presentación: 90×55mm
- A4: 210×297mm (+ 3-5mm bleed)
- Poster A3: 297×420mm

---

## Estrategia Mobile-First

Diseña primero para el formato más restrictivo (story vertical) donde cada píxel cuenta.

**Orden recomendado:**
1. **Story (9:16)** - Más restrictivo
2. **Feed cuadrado (1:1)** - Espacio limitado
3. **Feed horizontal (16:9)** - Espacio moderado
4. **Banner web** - Más espacio horizontal
5. **Print** - Máximo espacio

---

## Sistema de Zonas Seguras

Define un área central con elementos esenciales:
- Logo/marca
- Headline principal
- CTA o mensaje clave
- Producto/imagen hero

Esta zona debe permanecer visible sin importar cómo se recorte.

---

## Templates en Figma

1. Usa **Auto Layout** para que componentes se adapten
2. Crea **variantes** para diferentes proporciones
3. Usa **constraints** para reposicionamiento automático
4. Exporta todo con un clic usando plugins

---

## Texto Adaptativo

| Formato | Headline mínimo | Body mínimo |
|---------|-----------------|-------------|
| Story | 32px | 16px |
| Display ads | 24px (300×250) | Ajustar según tamaño |
| Print | Considerar distancia de lectura |

---

## Ejemplo Práctico

**Campaña Black Friday:**
1. Diseño Story con zona segura: logo arriba, "50% OFF" centrado, "Comprar ahora" abajo
2. En post cuadrado: mismo texto central, añado productos en esquinas
3. En banner horizontal: productos van a los lados
4. En email: mensaje central se mantiene, productos debajo

---

## Tip Práctico

> Crea un "kit de exportación" con todos los formatos que regularmente necesitas. Invierte 2 horas configurándolo una vez, ahorra 30 minutos en cada campaña futura.

## Reflexión

En tu última campaña multi-formato, ¿cuánto tiempo dedicaste a adaptar vs diseñar desde cero? ¿Qué harías diferente?
`
          },
          {
            id: "lesson-dg-3-3",
            title: "Sistemas de Diseño Escalables",
            content: `# Sistemas de Diseño y Componentes Escalables

## Introducción

Un sistema de diseño (design system) es una colección de componentes reutilizables, guías y principios que permiten crear experiencias consistentes a escala.

---

## Anatomía de un Design System

### Nivel 1: Design Tokens

Los valores fundamentales:

**Colores:**
- Primitivos: blue-500, gray-100 (valores base)
- Semánticos: primary, error, success (significado)
- Component-specific: button-primary (uso)

**Tipografía:**
- Font families, sizes (12, 14, 16, 18, 24, 32...)
- Weights (400, 500, 600, 700), line heights

**Espaciado:**
- Scale consistente: 4, 8, 12, 16, 24, 32, 48, 64...

**Otros:**
- Border radius, shadows, breakpoints, transitions

### Nivel 2: Componentes

**Átomos (básicos):**
- Button, Input, Checkbox, Badge, Icon

**Moléculas (combinaciones):**
- Form field (label + input + helper + error)
- Card (image + title + description + CTA)

**Organismos (secciones):**
- Header, Footer, Sidebar, Modal

### Nivel 3: Patrones

Soluciones a problemas comunes:
- Autenticación (login, registro)
- Onboarding, navegación
- Feedback (toasts, modals)
- Data display (tablas, grids)

### Nivel 4: Documentación

Cada componente documenta:
- Descripción y propósito
- Cuándo usar (y cuándo NO)
- Variantes, props, estados
- Ejemplos y accesibilidad

---

## ROI del Design System

**Antes:** 3 pantallas/semana, onboarding 3 semanas
**Después:** 8 pantallas/semana, onboarding 1 semana

---

## Estructura en Figma

**Estructura:**
- 📁 Design System
  - 📄 Tokens (colores, tipografía, spacing)
  - 📄 Foundations (grids, iconografía)
  - 📄 Components (todos los componentes)
  - 📄 Patterns (soluciones comunes)
  - 📄 Templates (páginas tipo)

---

## Componente Bien Documentado

**Button - Primary**
- **Uso:** CTAs principales, una por sección visible
- **Variantes:** size (sm, md, lg), state (default, hover, loading, disabled)
- **No usar:** Para acciones destructivas, navegación secundaria
- **Accesibilidad:** Mínimo 44px touch target, contraste 4.5:1

---

## Tip Práctico

> No construyas un design system completo de una vez. Empieza con tokens básicos y 5-10 componentes más usados. Expande basado en necesidades reales.

## Reflexión

En tu último proyecto grande, ¿cuántas veces recreaste el mismo botón o card con pequeñas variaciones? ¿Cuánto tiempo perdiste en inconsistencias?
`
          },
          {
            id: "lesson-dg-3-4",
            title: "Automatización del Flujo Creativo",
            content: `# Automatización y Optimización del Flujo Creativo

## Introducción

Diseñadores pasan hasta **40% de su tiempo** en tareas operativas que podrían automatizarse. La automatización libera tiempo para trabajo creativo de alto valor.

---

## Identificando Candidatos

**Señales de que algo debe automatizarse:**
✓ Lo haces más de 3 veces por semana
✓ Es mecánico y no requiere creatividad
✓ Tiene pasos predecibles y consistentes
✓ Errores humanos son frecuentes
✓ Te genera frustración

---

## Candidatos Comunes

### Procesamiento de imágenes
- Redimensionar para múltiples formatos
- Aplicar ajustes de color consistentes
- Comprimir para web
- Renombrar archivos masivamente

### Exportación
- Exportar artboards a múltiples formatos
- Generar versiones @1x, @2x, @3x
- Organizar exports en carpetas

### Flujos de trabajo
- Crear estructura de carpetas para nuevos proyectos
- Mover archivos completados a archivo
- Notificar stakeholders de entregas

---

## Herramientas de Automatización

### Dentro de Apps

| App | Herramienta | Uso |
|-----|-------------|-----|
| Photoshop | Actions | Secuencias de pasos |
| Photoshop | Batch Processing | Actions a carpetas |
| Illustrator | Actions + Scripts | Operaciones complejas |
| Figma | Plugins + API | Automatizaciones avanzadas |

### Entre Apps

- **Zapier:** Popular, 5000+ apps, amigable
- **Make:** Más potente, curva mayor
- **n8n:** Open source, gratuito

---

## Ejemplos Prácticos

### Action de Photoshop "Web Ready"
1. Resize al lado mayor a 2000px
2. Convertir a sRGB
3. Smart sharpen (0.3px, 50%)
4. Export como JPEG quality 85%
5. Añadir sufijo "-web" al nombre

**Resultado:** Tarea de 2 min → 3 segundos

### Zapier para Entregas
**Trigger:** Proyecto en Asana marcado "Completado"
**Acciones:**
1. Mover archivos a "Entregados" en Drive
2. Enviar email al cliente con link
3. Crear fila en spreadsheet
4. Programar encuesta para 7 días después

---

## Cálculo de ROI

**Cálculo:**
- Tiempo para crear automatización: 2 horas
- Tiempo ahorrado por uso: 5 minutos
- Usos por mes: 100
- Ahorro mensual: 500 min = 8.3 horas
- ROI: Recuperas inversión en semana 1

---

## Tip Práctico

> Documenta cada automatización: qué hace, cómo usarla, requisitos. Tu yo de 6 meses no recordará cómo funciona. Además, permite compartir con el equipo.

## Reflexión

Esta semana, lleva registro de tareas repetitivas. ¿Cuánto tiempo podrías recuperar si las automatizaras?
`
          },
          {
            id: "lesson-dg-3-5",
            title: "Entrega Profesional de Proyectos",
            content: `# Entrega Profesional y Handoff de Proyectos

## Introducción

La entrega no es enviar un ZIP con archivos; es asegurar que el cliente reciba exactamente lo que necesita, organizado para uso inmediato, con documentación clara.

---

## Estructura de Entrega Profesional

**Estructura de carpetas:**
- 📁 [Cliente]_[Proyecto]_Entrega_[Fecha]
  - 📁 01_Archivos_Editables
    - Proyecto_Principal.fig / .ai / .psd
    - Fuentes_Utilizadas.zip (con licencias)
  - 📁 02_Logotipos
    - 📁 Principal (todas las variantes)
    - 📁 Secundario
    - 📁 Favicon
  - 📁 03_Formatos_Digitales
    - 📁 Web (PNG, JPEG optimizados)
    - 📁 Redes_Sociales
    - 📁 Email
  - 📁 04_Formatos_Impresion
    - 📁 Alta_Resolucion (TIFF, PDF/X con bleed)
  - 📁 05_Documentacion
    - Manual_de_Marca.pdf
  - 📄 README.txt
  - 📄 Licencias.txt

---

## Contenido del README

**Ejemplo de README:**

PROYECTO: [Nombre] | CLIENTE: [Cliente] | FECHA: [Fecha]

**GUÍA RÁPIDA:**
- Para web: /03_Formatos_Digitales/Web/
- Para impresión: /04_Formatos_Impresion/
- Para redes: /03_Formatos_Digitales/Redes_Sociales/

**COLORES:** Primario: HEX #XXXXXX | RGB X,X,X | CMYK X,X,X,X

**TIPOGRAFÍAS:** Principal: [Nombre] - [Dónde obtenerla]

**¿PREGUNTAS?** Contactar antes de modificar.

---

## Formatos por Uso

| Uso | Formatos | Notas |
|-----|----------|-------|
| Web | JPEG, PNG, SVG, WebP | Quality 80-85% |
| Impresión | PDF/X, TIFF | 300dpi, CMYK, bleed |
| Pantalla | PNG @1x, @2x, @3x | Para Retina/HiDPI |

---

## Checklist Pre-Entrega

☐ Todos los archivos abren correctamente
☐ Nomenclatura consistente y descriptiva
☐ Fuentes incluidas o en curvas
☐ Colores en espacio correcto
☐ README completo
☐ Sin archivos temporales
☐ Link de descarga probado

---

## Capacitación del Cliente

La entrega ideal incluye:
1. Email con link + resumen escrito
2. **Video Loom** de 5-10 min mostrando contenido
3. Sesión en vivo (30-60 min) si amerita
4. Soporte post-entrega (típico: 30 días)

---

## Ejemplo de Éxito

Cliente recibió carpeta perfectamente organizada, README con instrucciones, video Loom, y sesión de 45 min.

**Resultado:** Cero preguntas de soporte, 3 referidos el siguiente año: "la entrega más profesional que he recibido".

---

## Tip Práctico

> Crea un template de estructura de carpetas y README que reutilices. Los clientes recurrentes apreciarán saber exactamente dónde encontrar todo.

## Reflexión

Piensa en la última entrega que recibiste como cliente. ¿Fue fácil entender qué hacer? ¿Tus entregas pasan ese test?
`
          }
        ],
        sprint: {
          title: "Sprint: Herramientas y Flujos",
          description: "Optimiza tu flujo de trabajo y crea sistemas eficientes",
          tasks: [
            {
              id: "task-dg-3-1",
              question: "Mapea tu flujo de trabajo actual desde que recibes un proyecto hasta que lo entregas. Identifica 3 puntos de fricción y propón una solución (herramienta o automatización) para cada uno."
            },
            {
              id: "task-dg-3-2",
              question: "Crea un template de exportación multi-formato en tu herramienta de diseño preferida. Debe incluir al menos 5 formatos diferentes (story, post cuadrado, banner, etc.) con sistema de zonas seguras documentado."
            },
            {
              id: "task-dg-3-3",
              question: "Diseña una estructura de entrega profesional completa: carpetas organizadas, README con guía de uso, y checklist de verificación pre-entrega. Aplícalo a un proyecto real o simulado."
            }
          ]
        },
        exam: {
          title: "Examen: Herramientas y Flujos",
          description: "Evalúa tus conocimientos sobre herramientas y procesos profesionales",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué establece la regla 60-30-10 en diseño UI?", options: ["Tiempo por fase", "Distribución de colores", "Porcentaje texto vs imágenes", "Cantidad de reuniones"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuál es la estrategia recomendada para múltiples formatos?", options: ["Diseñar para el más grande primero", "Diseñar para el más restrictivo primero", "Diseñar todos al mismo tiempo", "Solo diseñar para web"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué tipo de tareas son candidatas ideales para automatización?", options: ["Tareas creativas únicas", "Tareas repetitivas basadas en reglas", "Reuniones con clientes", "Conceptualización"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué es un Design Token?", options: ["Un logo", "Valores fundamentales reutilizables (colores, spacing)", "Un tipo de fuente", "Un plugin de Figma"], correctAnswer: 1 },
            { id: "q5", question: "Una entrega profesional debe incluir:", options: ["Solo los archivos", "Archivos + README + estructura organizada", "Solo el PDF final", "Link de WeTransfer"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-dg-4",
        title: "Feedback y Comunicación con Clientes",
        description: "Aprende a recibir e interpretar feedback, iterar inteligentemente y presentar propuestas de diseño de manera persuasiva",
        theory: [
          {
            id: "lesson-dg-4-1",
            title: "Psicología del Feedback",
            content: `# Psicología del Feedback: Recibirlo Sin Sufrirlo

## Introducción

El diseño es personal; la crítica se siente personal. Pero la capacidad de recibir feedback sin reacción defensiva es lo que separa a diseñadores que crecen de los que se estancan.

---

## La Neurociencia del Feedback

Cuando recibimos crítica, la **amígdala** (centro del miedo) se activa antes que la **corteza prefrontal** (pensamiento racional). Por eso sentimos la reacción emocional antes de analizarla.

**Síntomas físicos:**
- Aceleración del pulso
- Tensión muscular
- Respiración superficial
- Impulso de interrumpir o defenderse

---

## Técnicas para Manejar la Reacción

### 1. La Pausa de 3 Segundos
Antes de responder, cuenta mentalmente hasta 3. Da tiempo al cerebro racional.

### 2. Respiración Consciente
Una respiración profunda reinicia el sistema nervioso.

### 3. Reformulación Mental
Cambia "me están atacando" por "me están dando información para mejorar".

### 4. Postura Física
Postura abierta (brazos descruzados) influye en el estado mental.

---

## Protocolo de Recepción

| Paso | Acción |
|------|--------|
| **1. Escucha** | No interrumpas, toma notas, asiente |
| **2. Clarifica** | "¿Puedes darme un ejemplo específico?" |
| **3. Reformula** | "Si entiendo bien, lo que dices es..." |
| **4. Agradece** | "Gracias por tomarte el tiempo" (no implica acuerdo) |

---

## Tipos de Feedback

### Específico y Accionable
"El botón debería ser más grande y en verde"
→ Fácil de implementar. Evalúa mérito y actúa.

### Vago
"No me convence" / "Le falta algo"
→ Requiere excavación. Pregunta hasta llegar a la raíz.

### Basado en Gusto Personal
"No me gusta el azul" (sin razón de negocio)
→ Educación gentil sobre decisiones estratégicas.

### Contradictorio
"Hazlo más limpio" + "Añade más información"
→ Clarifica prioridades. No puedes hacer ambos.

---

## El Diario de Feedback

Registra:
- Feedback recibido (textual)
- Tu reacción inicial
- La acción que tomaste
- El resultado

**Busca patrones:** Si múltiples personas dan el mismo feedback repetidamente, es área de mejora sistemática.

---

## Tip Práctico

> Antes de reuniones de feedback, recuérdate: "El objetivo es mejorar el trabajo, no ganar una discusión." Este mindset cambia toda tu energía.

## Reflexión

Piensa en la última vez que recibiste feedback que te molestó. ¿Cuál fue tu reacción interna vs externa? Con distancia, ¿tenía algo de válido?
`
          },
          {
            id: "lesson-dg-4-2",
            title: "Interpretación Estratégica de Comentarios",
            content: `# Interpretación Estratégica de Comentarios del Cliente

## Introducción

El cliente rara vez articula exactamente lo que necesita. Tu trabajo es traducir declaraciones superficiales en problemas reales y soluciones efectivas.

---

## Traducción de Feedback Común

| El cliente dice | Probablemente significa | Preguntar |
|-----------------|------------------------|-----------|
| "Hazlo pop" | Falta contraste, jerarquía débil | "¿Qué elemento debería destacar más?" |
| "Se ve muy simple" | Ansiedad de espacio vacío | "¿Hay información adicional que incluir?" |
| "Más premium" | Más espacio en blanco, tipografía refinada | "¿Qué marcas consideras premium?" |
| "Más moderno" | Temor de parecer anticuado | "¿Qué marcas te parecen modernas?" |
| "Hazlo más grande" | El elemento no destaca | "¿Es porque no se ve o porque quieres más énfasis?" |

---

## Framework de Categorización

| Categoría | Descripción | Acción |
|-----------|-------------|--------|
| **Correcciones Objetivas** | Errores, typos, datos incorrectos | Implementar inmediatamente |
| **Mejoras Alineadas** | Mejora cumplimiento de objetivos | Prioridad alta, discutir soluciones |
| **Preferencias sin Impacto** | Gustos que no afectan objetivos | Discutir, explicar, negociar |
| **Cambios Dañinos** | Perjudicarían el proyecto | Educar con datos, proponer alternativas |

---

## El Método de los 5 Por Qués

**Cliente:** "Haz el logo más grande"
- ¿Por qué? → "Porque no se nota"
- ¿Por qué no se nota? → "Hay muchas cosas compitiendo"
- ¿Por qué tantas cosas? → "Legal pidió añadir disclaimer"
- ¿Por qué disclaimer tan prominente? → "No sé, así lo pusieron"

**Solución real:** Reorganizar para que legal esté menos prominente, no agrandar logo.

---

## Preguntas Estratégicas Pre-Feedback

Antes de que den feedback abierto, guía:
- "¿Cuál fue tu primera impresión?"
- "¿Qué te gusta más de esta propuesta?"
- "¿Cómo crees que reaccionará tu audiencia?"
- "¿Hay algo que sientes que falta?"

---

## Documentación Post-Reunión

**Plantilla de email:**

Resumen de feedback - [Proyecto] - [Fecha]

Asistentes: [nombres]

**Feedback recibido:**
1. [Punto textual]
2. [Punto textual]

**Interpretación y acciones:**
1. [Tu interpretación + solución]

**Próximos pasos:**
- [Acción] - [Responsable] - [Fecha]

Por favor confirmen que refleja la conversación.

---

## Defensa con Datos

**Cliente:** Quiere carrusel de 8 slides en la home.

**Respuesta:** "Entiendo que quieres mostrar todo. Los datos de UX muestran que solo 2-3% de usuarios pasan del tercer slide. ¿Qué te parece si destacamos los 3 más importantes y creamos sección dedicada para el resto?"

---

## Tip Práctico

> Cuando no entiendas feedback, nunca asumas. La frase "Ayúdame a entender qué quieres decir con..." muestra humildad y evita trabajo rehecho.

## Reflexión

Recuerda un proyecto donde implementaste literalmente todo el feedback y el resultado fue mediocre. ¿Qué traducción no hiciste?
`
          },
          {
            id: "lesson-dg-4-3",
            title: "Iteración Inteligente",
            content: `# Iteración Inteligente: Mejorar Sin Perder la Esencia

## Introducción

El peligro de la iteración mal manejada es el "diseño por comité" donde cada stakeholder añade su preferencia hasta que el resultado es un Frankenstein sin personalidad.

---

## Gestión Estructurada de Iteraciones

### En el Acuerdo Inicial
- Número de rondas incluidas (típico: 2-3)
- Qué constituye una "ronda" (feedback consolidado)
- Costo de rondas adicionales
- Timeline por ronda

### Estructura Recomendada

| Ronda | Foco | Esperar |
|-------|------|---------|
| **1: Validación** | ¿Dirección correcta? ¿Mensaje claro? | Cambios potencialmente significativos |
| **2: Refinamiento** | Ajustes específicos, detalles | Cambios menores a moderados |
| **3: Aprobación** | Solo correcciones de errores | Aprobación o micro-ajustes |

---

## Control de Versiones

**Nomenclatura:**
- v1.0 - Concepto inicial presentado
- v1.1 - Ajustes post feedback ronda 1
- v2.0 - Nueva dirección (si hubo cambio mayor)
- v2.1 - Ajustes post feedback ronda 2
- vFINAL - Versión aprobada

**Regla de oro:** Guarda cada versión. Nunca sobrescribas.

---

## Señales de Alarma

⚠️ Ya no puedes explicar el concepto en una oración
⚠️ Los cambios se contradicen entre sí
⚠️ El diseño ya no cumple los objetivos del brief
⚠️ Cada iteración añade sin quitar nada
⚠️ Sientes que "arreglas" en lugar de "mejoras"
⚠️ Más de 4 rondas y cliente sigue insatisfecho

---

## Qué Hacer Cuando Esto Ocurre

1. **Pausa el trabajo** - No sigas en dirección incorrecta

2. **Conversación honesta:**
   "Noto dificultad para llegar a una versión satisfactoria. ¿Podemos revisar los objetivos originales?"

3. **Comparación visual:**
   Versión original vs actual. "¿Seguimos resolviendo el mismo problema?"

4. **Opciones claras:**
   - A) Volver a versión anterior + cambios específicos
   - B) Redefinir objetivos + nuevo concepto
   - C) Continuar aceptando consecuencias

---

## Defender vs Ceder

| Defiende cuando... | Cede cuando... |
|--------------------|----------------|
| Cambio contradice objetivos del brief | Es preferencia estética sin impacto |
| Daña usabilidad/accesibilidad | Cliente tiene info del mercado que no tienes |
| Tienes datos que respaldan | La batalla no vale el costo de relación |
| Crea inconsistencia con sistema | Es cambio menor con fuerte opinión del cliente |

---

## El Cementerio de Ideas

Archiva conceptos descartados:
- Clientes a veces cambian de opinión
- Pueden servir para otros proyectos
- Documenta tu proceso creativo
- Demuestra trabajo realizado si hay disputas

---

## Tip Práctico

> Nunca elimines versiones anteriores. Cuando el cliente dice "preferíamos algo anterior", poder mostrarla inmediatamente te da credibilidad.

## Reflexión

En un proyecto con muchas iteraciones, ¿el resultado final fue mejor que versiones intermedias? ¿En qué momento dejó de mejorar?
`
          },
          {
            id: "lesson-dg-4-4",
            title: "Presentación Persuasiva de Propuestas",
            content: `# Presentación Persuasiva de Propuestas de Diseño

## Introducción

Un diseño brillante presentado pobremente será rechazado; un diseño bueno presentado brillantemente será celebrado. La presentación determina si tu trabajo se implementa, se modifica innecesariamente, o se descarta.

---

## Estructura de Presentación Efectiva

### Parte 1: Contexto (2-3 min)

**Recordatorio del brief:**
"El objetivo acordado es [X]. La audiencia es [Y]. El mensaje clave es [Z]."

**Resumen del feedback anterior (si aplica):**
"En la última ronda mencionaron [feedback]. Esta propuesta lo aborda."

**Expectativas:**
"Hoy muestro [X opciones]. Necesito de ustedes [tipo de feedback]."

### Parte 2: Presentación del Diseño (5-10 min)

Para cada opción:
1. **Muestra en contexto** - Mockups realistas, no archivos planos
2. **Explica el razonamiento** - "Elegimos esta tipografía porque..."
3. **Conecta con el brief** - "Esto resuelve el objetivo de [X] porque..."

### Parte 3: Tu Recomendación (2 min)

**Sé claro y decisivo:**
"De estas opciones, mi recomendación profesional es [X] porque [razones 1, 2, 3]."

> Nunca digas: "Todas son buenas, ustedes decidan." Eso abdica tu responsabilidad profesional.

### Parte 4: Discusión Guiada

Preguntas específicas (no "¿qué opinan?"):
- "¿Este diseño comunica [mensaje clave] claramente?"
- "¿Cómo creen que reaccionará [audiencia]?"
- "¿Hay algo que les preocupe respecto a [objetivo]?"

---

## Formatos de Presentación

| Formato | Ventajas | Tips |
|---------|----------|------|
| **En vivo** | Controlas ritmo, observas reacciones | Prepara deck, no dejes que salten adelante |
| **Asíncrono (Loom)** | Cliente ve cuando está enfocado | 5-10 min máximo, termina con preguntas |
| **Documento** | Cuando no hay alternativa | Incluye texto explicativo, mockups, recomendación clara |

---

## Mockups de Contexto

**Nunca presentes:**
❌ JPG plano del diseño
❌ Figma sin preparar
❌ Sin escala ni contexto

**Siempre presenta:**
✅ En dispositivo realista
✅ En contexto de uso
✅ A escala que simule experiencia real

---

## Manejo de Objeciones

| Objeción | Respuesta |
|----------|-----------|
| "¿Podemos ver otro color?" | "¿Qué te motiva a explorar otro color? Así muestro la opción más relevante." |
| "Mi [esposo/jefe] dice que..." | "¿Esa persona está en nuestro público objetivo?" |
| "No estoy seguro, algo no me convence" | "¿Podemos explorar qué genera esa sensación?" |
| "¿Y si hacemos X en su lugar?" | "¿Qué problema resolvería eso?" |

---

## Ejemplo Efectivo

"En nuestra última reunión mencionaste que el mensaje no era claro. Para esta versión, simplifiqué el headline a una oración, añadí subtítulo de soporte, y moví el CTA donde naturalmente cae la mirada según el F-pattern.

[Muestra mockup en iPhone]

Así se vería en el contexto real. Mi recomendación es la Opción A porque logra el balance entre claridad e impacto. ¿Este mensaje ahora es claro para ti?"

---

## Tip Práctico

> Graba un video de 3-5 min explicando cada propuesta aunque la presentación sea en vivo. Sirve como respaldo para ausentes y referencia posterior.

## Reflexión

Piensa en la mejor presentación de diseño que hayas visto. ¿Qué la hizo efectiva? ¿Qué técnicas puedes incorporar?
`
          }
        ],
        sprint: {
          title: "Sprint: Feedback y Comunicación",
          description: "Practica la comunicación profesional con clientes",
          tasks: [
            {
              id: "task-dg-4-1",
              question: "Describe una situación real o hipotética donde recibiste/recibirías feedback negativo sobre un diseño. Aplica el protocolo de recepción (escucha, clarifica, reformula, agradece) y documenta cómo responderías profesionalmente."
            },
            {
              id: "task-dg-4-2",
              question: "Toma un feedback vago ('hazlo pop', 'más moderno', 'no me convence') y desarrolla las preguntas de clarificación que harías. Luego propón 2 posibles interpretaciones y soluciones para cada una."
            },
            {
              id: "task-dg-4-3",
              question: "Crea un script de presentación para un proyecto de diseño (real o simulado). Incluye: contexto (brief resumido), explicación del razonamiento de diseño, tu recomendación clara, y 3 preguntas guiadas para el cliente."
            }
          ]
        },
        exam: {
          title: "Examen: Feedback y Comunicación",
          description: "Evalúa tus conocimientos sobre comunicación profesional con clientes",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué debes hacer primero al recibir feedback negativo?", options: ["Defender tu trabajo inmediatamente", "Escuchar completamente antes de responder", "Ignorar el comentario", "Cambiar todo el diseño"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuántas rondas de revisión se recomiendan definir en un contrato?", options: ["Ilimitadas", "Solo 1", "Típicamente 2-3", "Al menos 10"], correctAnswer: 2 },
            { id: "q3", question: "¿Cómo se recomienda presentar las revisiones al cliente?", options: ["Enviar archivos sin contexto", "Solo enviar la opción favorita", "Usar mockups en contexto con razonamiento", "Esperar a que pida ver opciones"], correctAnswer: 2 },
            { id: "q4", question: "Cuando el cliente dice 'hazlo pop', probablemente significa:", options: ["Añadir más colores", "Falta contraste o jerarquía visual", "Hacer todo más grande", "Cambiar la tipografía"], correctAnswer: 1 },
            { id: "q5", question: "En una presentación profesional, ¿debes dar tu recomendación?", options: ["No, el cliente debe decidir solo", "Sí, con razones claras", "Solo si lo piden", "Nunca, es imponer tu criterio"], correctAnswer: 1 }
          ]
        }
      }
    ]
  },
  {
    id: "community-manager",
    title: "Community Manager Profesional",
    slug: "community-manager",
    description: "Conviértete en un Community Manager estratégico. Domina auditorías digitales, herramientas profesionales, gestión de crisis, tendencias de IA y construye tu carrera en marketing digital.",
    duration: "~30 horas",
    totalLessons: "45 Lecciones + Sprints Prácticos",
    icon: "Users",
    color: "from-blue-500 to-cyan-500",
    certificate: {
      title: "Certificado en Community Management Profesional",
      description: "Ha completado satisfactoriamente el curso de Community Manager con dominio en auditoría digital, herramientas, gestión de crisis y estrategia"
    },
    modules: [
      {
        id: "mod-cm-1",
        title: "Auditoría de Presencia Digital",
        description: "Domina el arte de evaluar y diagnosticar la salud digital de cualquier marca: identidad, redes sociales, SEO y publicidad",
        theory: [
          {
            id: "lesson-cm-1-1",
            title: "Introducción a la Auditoría Digital",
            content: `# Introducción a la Auditoría Digital

## ¿Qué es una Auditoría de Presencia Digital?

Una auditoría de presencia digital es un análisis exhaustivo de todos los puntos de contacto que una marca tiene en el entorno online. Este proceso evalúa la coherencia, efectividad y rendimiento de la identidad digital de una organización.

---

## La Importancia en 2026

En el ecosistema digital actual, la presencia online ya no es opcional: es el **primer punto de contacto** entre marcas y consumidores. El **87% de los clientes** investigan online antes de realizar cualquier compra o decisión de negocio.

---

## Componentes de una Auditoría

| Componente | Qué Evalúa |
|------------|------------|
| **Identidad Visual** | Logo, colores, tipografía, consistencia |
| **Sitio Web** | UX, velocidad, SEO técnico |
| **Redes Sociales** | Engagement, crecimiento, contenido |
| **SEO** | Posicionamiento, keywords, backlinks |
| **Publicidad Digital** | ROAS, segmentación, creatividades |
| **Reputación** | Menciones, sentimiento, reviews |

---

## Objetivo Principal

El objetivo es identificar:
- **Fortalezas** a potenciar
- **Debilidades** a corregir
- **Oportunidades** de crecimiento
- **Amenazas** competitivas

Este diagnóstico sirve como base para cualquier estrategia de marketing digital efectiva.

---

## Tip Práctico

> Antes de comenzar cualquier auditoría, define claramente los KPIs que importan al negocio. Una auditoría sin métricas de referencia es solo una opinión.
`
          },
          {
            id: "lesson-cm-1-2",
            title: "Análisis de Identidad Digital",
            content: `# Análisis de Identidad Digital

## ¿Qué es la Identidad Digital?

La identidad digital es la representación de tu marca en el ecosistema online. Incluye elementos visuales (logo, colores, tipografía), verbales (tono de voz, mensajes clave) y experienciales (cómo se siente interactuar con la marca).

---

## Preguntas Clave de Auditoría

Para auditar la identidad digital debes responder:

1. ¿Es consistente la imagen de marca en todas las plataformas?
2. ¿El tono de comunicación es coherente?
3. ¿Los valores de marca se transmiten claramente?
4. ¿La experiencia es uniforme en todos los canales?

---

## Matriz de Consistencia

Crea una matriz donde evalúes cada canal contra los elementos de identidad:

| Canal | Logo | Colores | Tono | Mensajes | Puntuación |
|-------|------|---------|------|----------|------------|
| Web | 5 | 5 | 4 | 5 | 4.75 |
| Instagram | 5 | 4 | 3 | 4 | 4.0 |
| LinkedIn | 4 | 5 | 5 | 4 | 4.5 |
| Email | 3 | 4 | 4 | 3 | 3.5 |

Califica de 1-5 la coherencia de cada elemento.

---

## Impacto de la Inconsistencia

Las inconsistencias en identidad digital:
- Reducen la **confianza del consumidor en un 67%**
- Un cliente que encuentra diferentes "personalidades" de marca tiene **3x más probabilidades de abandonar**

---

## Tip Práctico

> Haz capturas de pantalla de todos los canales de la marca y colócalas lado a lado. Las inconsistencias se vuelven inmediatamente evidentes cuando ves todo junto.
`
          },
          {
            id: "lesson-cm-1-3",
            title: "Auditoría del Sitio Web",
            content: `# Auditoría del Sitio Web

## El Hub Central Digital

El sitio web es el hub central de la presencia digital. Una auditoría web completa evalúa cuatro pilares fundamentales:

---

## Los 4 Pilares de Auditoría Web

### 1. Rendimiento Técnico
- Velocidad de carga
- Mobile-first design
- Core Web Vitals

### 2. Experiencia de Usuario (UX)
- Navegación intuitiva
- Diseño accesible
- Arquitectura de información

### 3. SEO Técnico
- Indexación correcta
- Estructura de URLs
- Metadatos optimizados

### 4. Conversión
- CTAs claros
- Formularios funcionales
- Embudos optimizados

---

## Herramientas Esenciales

| Herramienta | Uso |
|-------------|-----|
| **Google PageSpeed Insights** | Velocidad y Core Web Vitals |
| **Google Search Console** | SEO técnico e indexación |
| **Hotjar / Microsoft Clarity** | Comportamiento de usuarios |
| **Google Analytics 4** | Métricas de conversión |

---

## Métricas Clave

| Métrica | Objetivo |
|---------|----------|
| Tiempo de carga | < 3 segundos |
| Tasa de rebote | < 40% |
| Páginas por sesión | > 2 |
| Tiempo en sitio | > 2 minutos |

---

## Checklist de Auditoría Web

- ☐ ¿El sitio carga en menos de 3 segundos?
- ☐ ¿Es responsive y funciona bien en móvil?
- ☐ ¿Tiene certificado SSL activo?
- ☐ ¿La navegación es intuitiva?
- ☐ ¿Los CTAs son claros y visibles?
- ☐ ¿Los formularios funcionan correctamente?
`
          },
          {
            id: "lesson-cm-1-4",
            title: "Evaluación de Redes Sociales",
            content: `# Evaluación de Redes Sociales

## Análisis por Plataforma

Cada red social requiere un análisis específico. Evalúa estos 8 pilares fundamentales:

| Pilar | Qué Evaluar | Herramientas |
|-------|-------------|--------------|
| **Perfil** | Bio, foto, enlaces, destacados | Manual |
| **Frecuencia** | Posts/semana, consistencia | Metricool |
| **Calidad** | Visual, copywriting, valor | Manual |
| **Engagement** | Likes, comentarios, shares | Nativo + tools |
| **Crecimiento** | Tendencia de seguidores | Social Blade |
| **Respuesta** | Tiempo y calidad de replies | Manual |
| **Contenido** | Mix de formatos | Análisis manual |
| **Coherencia** | Alineación con marca | Matriz de consistencia |

---

## Engagement Rate Benchmarks 2026

| Plataforma | Bajo | Promedio | Bueno | Excelente |
|------------|------|----------|-------|-----------|
| **Instagram** | <1% | 1-2% | 2-4% | >4% |
| **LinkedIn** | <1% | 1-2% | 2-4% | >4% |
| **TikTok** | <3% | 3-5% | 5-10% | >10% |
| **Facebook** | <0.3% | 0.3-0.5% | 0.5-1% | >1% |
| **Twitter/X** | <0.5% | 0.5-1% | 1-2% | >2% |

**Fórmulas por plataforma:**
- **Instagram:** (Likes + Comentarios + Saves) / Seguidores × 100
- **LinkedIn:** (Reactions + Comentarios + Shares) / Seguidores × 100
- **TikTok:** (Likes + Comentarios + Shares) / Vistas × 100

---

## Framework de Análisis de Contenido Top

**Metodología de los 10 Posts:**

1. Extrae los 10 posts con mejor engagement de los últimos 90 días
2. Analiza cada uno con esta matriz:

| Post | Formato | Tema | Hora | Hook | CTA | Engagement |
|------|---------|------|------|------|-----|------------|
| 1 | Carrusel | Educativo | 9am | Pregunta | Guardar | 5.2% |
| 2 | Reel | BTS | 7pm | Curiosidad | Seguir | 8.1% |
| ... | ... | ... | ... | ... | ... | ... |

3. Identifica patrones: ¿Qué tienen en común los top performers?

---

## Matriz de Auditoría Competitiva

Analiza **mínimo 5 competidores directos**:

| Métrica | Tu Marca | Comp. A | Comp. B | Comp. C | Benchmark |
|---------|----------|---------|---------|---------|-----------|
| Seguidores | 10K | 25K | 8K | 45K | 22K |
| Crecimiento/mes | +2% | +5% | +1% | +3% | +2.75% |
| Posts/semana | 3 | 7 | 2 | 5 | 4.25 |
| Engagement | 2.5% | 4.1% | 1.8% | 2.9% | 2.8% |
| Formato top | Carrusel | Reels | Imagen | Stories | - |
| Respuesta avg | 4h | 1h | 24h | 2h | 7.75h |

**Análisis de gaps:**
- ¿Qué formatos usan ellos que tú no?
- ¿Qué temas cubren que tú ignoras?
- ¿En qué horarios publican con éxito?

---

## Métricas Avanzadas a Evaluar

**Más allá del engagement básico:**

- **Saves/Guardados:** Indica contenido de alto valor
- **Shares:** Indica contenido que la gente quiere asociar con su imagen
- **DMs generados:** Indica conversión a conversación
- **Link clicks:** Indica interés en acción
- **Follower/Following ratio:** Indica autoridad percibida
- **Comentarios con más de 5 palabras:** Indica engagement genuino

---

## Red Flags en Auditoría

⚠️ Engagement rate < 1% con audiencia grande → posibles seguidores falsos
⚠️ Picos de seguidores sin contenido viral → compra de followers
⚠️ Comentarios genéricos repetitivos → bots o pods
⚠️ Proporción likes/comentarios > 100:1 → audiencia pasiva
⚠️ Sin respuestas a comentarios → falta de gestión de comunidad

---

## Tip Práctico

> No te obsesiones con el número de seguidores. Un engagement rate del 5% con 5K seguidores (250 interacciones) es más valioso que 0.5% con 100K (500 interacciones de una audiencia no comprometida).
`
          },
          {
            id: "lesson-cm-1-5",
            title: "Fundamentos de SEO",
            content: `# Fundamentos de SEO

## ¿Qué es SEO?

SEO (Search Engine Optimization) es la disciplina de mejorar la visibilidad orgánica en buscadores. Una auditoría SEO evalúa tres pilares:

---

## Los 3 Pilares del SEO

### 1. SEO Técnico
- Rastreo e indexación
- Velocidad de carga
- Estructura del sitio

### 2. SEO On-Page
- Contenido de calidad
- Keywords optimizadas
- Meta tags

### 3. SEO Off-Page
- Backlinks de calidad
- Autoridad de dominio
- Menciones de marca

---

## Herramientas de Auditoría SEO

| Herramienta | Uso | Costo |
|-------------|-----|-------|
| **Google Search Console** | Oficial de Google | Gratis |
| **Semrush / Ahrefs** | Análisis completo | Pago |
| **Screaming Frog** | Auditoría técnica | Freemium |
| **PageSpeed Insights** | Rendimiento | Gratis |

---

## Checklist SEO Técnico

- ☐ Sitemap.xml presente y actualizado
- ☐ Robots.txt configurado correctamente
- ☐ Sin errores de rastreo en Search Console
- ☐ URLs amigables y descriptivas
- ☐ Etiquetas canónicas correctas
- ☐ Datos estructurados implementados
- ☐ HTTPS activo en todo el sitio

---

## Análisis de Keywords

Identifica las **20 palabras clave principales** para la marca:

| Keyword | Posición Actual | Volumen | Dificultad |
|---------|-----------------|---------|------------|
| [término 1] | 15 | 5,400 | Media |
| [término 2] | 8 | 2,900 | Baja |
| [término 3] | No rankea | 12,000 | Alta |

Identifica content gaps respecto a competidores.
`
          },
          {
            id: "lesson-cm-1-6",
            title: "Creación del Informe de Auditoría",
            content: `# Creación del Informe de Auditoría

## Estructura del Informe Profesional

Un informe de auditoría efectivo debe ser **claro, accionable y priorizado**:

---

## Estructura Recomendada

### 1. Resumen Ejecutivo (1 página)
- 3-5 hallazgos más importantes
- Recomendaciones principales
- Métricas clave de un vistazo

### 2. Metodología
- Herramientas utilizadas
- Período de análisis
- Alcance de la auditoría

### 3. Hallazgos por Área
- Identidad digital
- Sitio web
- Redes sociales
- SEO
- Publicidad

### 4. Recomendaciones Priorizadas
- Quick wins
- Proyectos a mediano plazo
- Iniciativas estratégicas

### 5. Plan de Acción
- Timeline de implementación
- Recursos necesarios
- KPIs de seguimiento

---

## Matriz de Priorización

Usa una matriz de **Impacto vs Esfuerzo**:

| Prioridad | Características | Acción |
|-----------|-----------------|--------|
| **Quick Wins** | Alto impacto, bajo esfuerzo | Inmediata |
| **Proyectos Estratégicos** | Alto impacto, alto esfuerzo | Planificar |
| **Mejoras Incrementales** | Bajo impacto, bajo esfuerzo | Cuando haya tiempo |
| **Evitar** | Bajo impacto, alto esfuerzo | No priorizar |

---

## Visualización de Datos

- Usa **gráficos** para comparativas
- **Tablas** para métricas detalladas
- **Código de colores** (rojo/amarillo/verde) para status
- **Screenshots** para ilustrar problemas

---

## Tip Práctico

> El resumen ejecutivo es lo más importante. Debe poder leerse en 2 minutos y contener TODO lo que un directivo necesita saber para tomar decisiones.
`
          }
        ],
        sprint: {
          title: "Sprint: Auditoría Express de una Marca",
          description: "Realiza una mini auditoría digital de una marca de tu elección",
          tasks: [
            {
              id: "task-cm-1-1",
              question: "Selecciona una marca local o pequeña empresa. Lista su nombre y todos sus canales digitales (web, redes sociales, etc.)."
            },
            {
              id: "task-cm-1-2",
              question: "Evalúa la identidad visual de la marca: ¿Es consistente el logo, colores y tipografía en todos sus canales? Lista 3 fortalezas y 3 debilidades."
            },
            {
              id: "task-cm-1-3",
              question: "Analiza sus últimas 5 publicaciones en redes sociales. Calcula el engagement rate aproximado e identifica el tipo de contenido más utilizado."
            },
            {
              id: "task-cm-1-4",
              question: "Escribe un mini informe (100-150 palabras) con las 3 recomendaciones principales para mejorar la presencia digital de la marca."
            }
          ]
        },
        exam: {
          title: "Examen: Auditoría Digital",
          description: "Evalúa tus conocimientos sobre auditoría de presencia digital",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es el primer paso para realizar una auditoría de presencia digital?", options: ["Crear contenido nuevo", "Analizar la identidad de marca actual", "Cambiar todas las redes sociales", "Invertir en publicidad"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué herramienta es esencial para auditar el rendimiento de un sitio web?", options: ["Canva", "Google Analytics", "Hootsuite", "Buffer"], correctAnswer: 1 },
            { id: "q3", question: "¿Cuál es un KPI clave para redes sociales?", options: ["Número de empleados", "Tasa de engagement", "Costo de oficina", "Número de productos"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué debe incluir un informe de auditoría?", options: ["Solo aspectos positivos", "Diagnóstico, hallazgos y recomendaciones", "Únicamente el presupuesto", "Solo capturas de pantalla"], correctAnswer: 1 },
            { id: "q5", question: "¿Qué es el SEO on-page?", options: ["Publicidad en redes sociales", "Optimización dentro del sitio web", "Email marketing", "Diseño de logos"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-cm-2",
        title: "Herramientas del Community Manager",
        description: "Domina el ecosistema de herramientas profesionales: planificación, diseño, analítica, automatización e inteligencia artificial",
        theory: [
          {
            id: "lesson-cm-2-1",
            title: "Ecosistema de Herramientas 2026",
            content: `# Ecosistema de Herramientas 2026

## El CM Moderno

El Community Manager de 2026 opera en un ecosistema de herramientas interconectadas. Ya no basta con dominar una o dos plataformas: se requiere fluidez en **planificación, diseño, analítica, automatización y gestión**.

---

## Categorías Esenciales

| Categoría | Herramientas |
|-----------|--------------|
| **Planificación** | Hootsuite, Buffer, Metricool |
| **Diseño** | Canva, CapCut, InVideo |
| **Analítica** | GA4, Brand24, Talkwalker |
| **Automatización** | Zapier, Make |
| **Gestión** | Trello, Notion, Asana |
| **IA** | ChatGPT, Claude, Midjourney |

---

## La Clave: Integración

Las herramientas deben "hablar" entre sí para crear flujos eficientes:

**Ejemplo de flujo integrado:**
1. **Trello** → Planificar contenido
2. **Canva** → Diseñar creatividades
3. **Hootsuite** → Programar publicaciones
4. **GA4** → Medir resultados
5. **Zapier** → Automatizar reportes

---

## Criterios de Selección

Al elegir herramientas, considera:

- ✓ Curva de aprendizaje
- ✓ Integraciones disponibles
- ✓ Relación coste/beneficio
- ✓ Escalabilidad
- ✓ Soporte y comunidad
- ✓ Alineación con tus necesidades

---

## Tip Práctico

> No intentes dominar todas las herramientas a la vez. Empieza con una por categoría, úsala 2 semanas, luego añade la siguiente. Un stack simple bien usado supera a uno complejo que nadie entiende.
`
          },
          {
            id: "lesson-cm-2-2",
            title: "Planificación: Hootsuite y Buffer",
            content: `# Planificación y Programación: Hootsuite y Buffer

## Gestión Centralizada

Hootsuite y Buffer son herramientas líderes para gestionar múltiples redes sociales desde un solo dashboard. Permiten programar contenido, monitorizar menciones y analizar rendimiento.

---

## Hootsuite

**Destaca por:**
- Gestión de equipos con diferentes permisos
- Streams personalizables para monitoreo en tiempo real
- Integraciones robustas con CRMs
- Reportes avanzados y personalizables

**Ideal para:** Equipos y agencias con múltiples clientes

---

## Buffer

**Destaca por:**
- Interfaz simple e intuitiva
- Extensión de navegador para compartir rápido
- Sugerencias de mejor hora para publicar
- Plan gratuito generoso para empezar

**Ideal para:** Freelancers y pequeñas empresas

---

## Mejores Prácticas de Programación

| Práctica | Beneficio |
|----------|-----------|
| Programa con 1-2 semanas de antelación | Consistencia garantizada |
| Deja slots para contenido reactivo | Flexibilidad para tendencias |
| Usa etiquetas para categorizar posts | Organización y análisis |
| Revisa analytics semanalmente | Optimización continua |

---

## Tip Práctico

> Programa tu contenido evergreen con semanas de anticipación, pero deja siempre 20% de capacidad para contenido reactivo y trending topics.
`
          },
          {
            id: "lesson-cm-2-3",
            title: "Metricool: Gestión y Analítica",
            content: `# Metricool: Gestión y Analítica Integrada

## Plataforma Todo-en-Uno

Metricool combina planificación, publicación, analítica y reportes en una interfaz amigable con excelente relación calidad-precio. Es especialmente popular en el mercado hispanohablante.

---

## Funcionalidades Clave

- **Planificador visual** con drag-and-drop
- **Análisis de competencia** integrado
- **Métricas unificadas** de todas las redes
- **Reportes automáticos** personalizables
- **SmartLinks** para bio de Instagram

---

## Análisis de Competencia

Metricool permite monitorizar hasta **5 competidores gratuitamente**:

| Métrica | Tu Marca | Competidor A | Competidor B |
|---------|----------|--------------|--------------|
| Publicaciones/semana | 4 | 7 | 3 |
| Engagement rate | 3.2% | 4.5% | 2.1% |
| Crecimiento mensual | +2% | +5% | +1% |

---

## Flujo de Trabajo Recomendado

| Día | Actividad |
|-----|-----------|
| **Lunes** | Revisión de métricas y planificación semanal |
| **Miércoles** | Análisis de competencia |
| **Viernes** | Programación de contenido próxima semana |
| **Mensual** | Generación de reporte para cliente/dirección |

---

## Tip Práctico

> Configura reportes automáticos que se envíen cada lunes. Así empiezas la semana con datos frescos sin esfuerzo manual.
`
          },
          {
            id: "lesson-cm-2-4",
            title: "Diseño con Canva",
            content: `# Diseño de Contenidos con Canva

## Diseño Democratizado

Canva ha democratizado el diseño gráfico. Con sus plantillas profesionales, cualquier CM puede crear contenido visual de alta calidad sin conocimientos avanzados de diseño.

---

## Funcionalidades Esenciales

| Función | Uso |
|---------|-----|
| **Templates por plataforma** | Instagram, LinkedIn, TikTok, etc. |
| **Brand Kit** | Colores, fuentes, logos consistentes |
| **Magic Resize** | Adapta a diferentes formatos |
| **Colaboración** | Trabajo en equipo en tiempo real |

---

## Canva AI (Magic Studio)

Las funciones de IA de Canva en 2026:

- **Magic Write** - Genera textos para diseños
- **Background Remover** - Elimina fondos automáticamente
- **Magic Resize** - Redimensiona inteligentemente
- **Text to Image** - Genera imágenes desde prompts

El CM de 2026 debe dominar estas funciones.

---

## Organización Profesional

**Estructura de carpetas recomendada:**

- 📁 Cliente A
  - 📁 Brand Assets
  - 📁 Instagram
  - 📁 LinkedIn
  - 📁 Historias
- 📁 Cliente B
  - ...

---

## Tip Práctico

> Crea plantillas maestras para cada tipo de contenido recurrente (posts, stories, carruseles). Te ahorrará horas cada semana.
`
          },
          {
            id: "lesson-cm-2-5",
            title: "Video con CapCut e InVideo",
            content: `# Edición de Video: CapCut e InVideo

## El Video Domina

El video corto domina las redes sociales en 2026. **Reels, TikToks y Shorts** son formatos esenciales. CapCut e InVideo permiten crear contenido profesional sin experiencia previa.

---

## CapCut

**Destaca por:**
- Edición intuitiva en móvil y desktop
- Efectos y transiciones trending
- Sincronización automática con música
- Subtítulos automáticos con IA
- Exportación optimizada por plataforma

**Ideal para:** Contenido rápido y trending

---

## InVideo

**Destaca por:**
- Templates profesionales listos para usar
- Biblioteca de stock incluida
- Edición colaborativa en la nube
- Mejor para videos más largos

**Ideal para:** Contenido corporativo y explicativo

---

## Workflow para Reels/TikTok

| Elemento | Recomendación |
|----------|---------------|
| **Hook** | Primeros 3 segundos cautivadores |
| **Duración** | 15-30 segundos óptimo |
| **Subtítulos** | Siempre (80% ve sin sonido) |
| **CTA** | Claro al final |
| **Música** | Trending cuando sea apropiado |

---

## Tip Práctico

> Graba siempre en vertical (9:16) para Reels y TikTok. Es más difícil adaptar horizontal a vertical que al revés.
`
          },
          {
            id: "lesson-cm-2-6",
            title: "Google Analytics 4",
            content: `# Google Analytics 4: Analítica Web

## La Nueva Generación

Google Analytics 4 es la nueva generación de analítica web. A diferencia de Universal Analytics, GA4 está **basado en eventos** y preparado para un mundo sin cookies de terceros.

---

## Conceptos Clave de GA4

| Concepto | Descripción |
|----------|-------------|
| **Eventos** | Toda interacción es un evento |
| **Parámetros** | Datos adicionales de cada evento |
| **Conversiones** | Eventos importantes para el negocio |
| **Audiencias** | Segmentos de usuarios |
| **Exploraciones** | Análisis personalizados |

---

## Configuración Esencial para CM

1. **Define conversiones relevantes**
   - Formulario de contacto
   - Descargas
   - Compras

2. **Crea eventos personalizados**
   - Scroll depth
   - Clics en CTAs
   - Reproducciones de video

3. **Configura audiencias para remarketing**
   - Visitantes que no convirtieron
   - Usuarios comprometidos

4. **Conecta con Google Ads**

---

## Reportes Clave para CM

| Reporte | Qué Muestra |
|---------|-------------|
| **Adquisición** | De dónde vienen los usuarios |
| **Engagement** | Qué hacen en el sitio |
| **Conversiones** | Objetivos cumplidos |
| **Demografía** | Quiénes son tus usuarios |

Enfócate en tráfico desde redes sociales y comportamiento de esos usuarios.

---

## Tip Práctico

> Crea un dashboard personalizado con las 5-7 métricas más importantes para tu cliente. Menos es más cuando se trata de reportar.
`
          },
          {
            id: "lesson-cm-2-7",
            title: "Automatización con Zapier",
            content: `# Automatización: Zapier y Make

## Multiplicadores de Productividad

Zapier y Make permiten conectar aplicaciones y automatizar flujos de trabajo **sin código**. Son esenciales para el CM moderno.

---

## Zapier vs Make

| Aspecto | Zapier | Make |
|---------|--------|------|
| **Facilidad** | Más simple | Más complejo |
| **Integraciones** | +5000 apps | +1000 apps |
| **Flujos** | Lineales | Complejos con ramificaciones |
| **Precio** | Más caro | Más económico |

---

## Automatizaciones Útiles para CM

**1. Nuevo post de blog → Compartir en redes**
- Trigger: RSS del blog
- Acción: Publicar en Twitter, LinkedIn, Facebook

**2. Mención negativa → Alerta en Slack**
- Trigger: Mention con sentimiento negativo
- Acción: Mensaje en canal de alertas

**3. Reporte semanal automático**
- Trigger: Cada lunes a las 9am
- Acción: Generar y enviar reporte por email

**4. Nuevo lead → Secuencia completa**
- Trigger: Formulario completado
- Acciones: Añadir a CRM + Email de bienvenida + Notificación al equipo

---

## Ejemplo de Automatización

**Cuando proyecto en Asana cambia a "Completado":**
1. Mover archivos a carpeta de archivo
2. Enviar email al cliente con link
3. Crear entrada en spreadsheet
4. Programar survey de satisfacción

**Ahorro:** 5 horas/semana

---

## Tip Práctico

> Empieza con una automatización simple que uses frecuentemente. Una vez funcione, añade complejidad gradualmente.
`
          },
          {
            id: "lesson-cm-2-8",
            title: "IA para Community Managers",
            content: `# Inteligencia Artificial para CM

## La Transformación del Rol

La IA ha transformado el trabajo del CM. En 2026, el rol ha pasado de crear contenido manualmente a **supervisar, editar y validar** contenido generado por IA. El CM es ahora un "director de orquesta".

---

## Ecosistema de Herramientas IA 2026

| Categoría | Herramienta | Mejor Para | Costo |
|-----------|-------------|------------|-------|
| **Texto** | ChatGPT-4 | Versatilidad | $20/mes |
| **Texto** | Claude | Análisis largo, ética | $20/mes |
| **Texto** | Jasper | Marketing específico | $49/mes |
| **Imágenes** | Midjourney | Calidad artística | $10/mes |
| **Imágenes** | DALL-E 3 | Integración ChatGPT | Incluido |
| **Video** | Runway | Edición IA | $15/mes |
| **Video** | HeyGen | Avatares | $24/mes |
| **Audio** | ElevenLabs | Voiceover realista | $5/mes |

---

## Framework de Prompt Engineering para CM

**Estructura CRISP:**

- **C**ontexto: "Eres un CM experto en [industria]"
- **R**ol: "Actúa como [tipo de especialista]"
- **I**nstrucción: "Escribe/Crea/Genera [tarea específica]"
- **S**alida: "En formato de [estructura deseada]"
- **P**arámetros: "Con máximo [límites], tono [estilo]"

**Ejemplo completo:**
"Eres un CM experto en moda sostenible (C). Actúa como copywriter creativo (R). Escribe 5 captions para Instagram sobre nuestra nueva colección de verano (I). En formato de: hook + descripción + CTA + hashtags (S). Máximo 150 caracteres por caption, tono fresco y juvenil, incluye emoji relevante (P)."

---

## Biblioteca de Prompts para CM

**Para ideación:**
"Dame 20 ideas de contenido para [marca/industria] que combinen [tendencia actual] con [valor de marca]. Formato: título + descripción breve + formato sugerido (reel/carrusel/post)"

**Para copies:**
"Escribe 3 versiones de caption para [tipo de post] de [marca]. Versión A: informativa. Versión B: emocional. Versión C: humorística. Incluye CTA y hashtags relevantes."

**Para respuestas:**
"Como CM de [marca], redacta respuesta a este comentario: [comentario]. Tono: [empático/profesional/divertido]. Objetivo: [resolver/agradecer/convertir]."

**Para análisis:**
"Analiza estos 10 posts de [competidor] y extrae: temas recurrentes, formato más usado, horarios de publicación, estilo de copywriting, CTAs utilizados."

---

## Flujo de Trabajo CM + IA Optimizado

| Fase | Acción | Tiempo | % del Total |
|------|--------|--------|-------------|
| 1. Brief | Definir objetivo y parámetros | 5 min | 10% |
| 2. Prompt | Escribir instrucciones precisas | 10 min | 20% |
| 3. Generación | Output de IA | 2 min | 5% |
| 4. Revisión | Verificar y fact-check | 15 min | 30% |
| 5. Edición | Personalizar al tono de marca | 10 min | 20% |
| 6. Optimización | Ajustar para plataforma | 5 min | 10% |
| 7. Aprobación | Validación final | 3 min | 5% |

**Total: 50 min vs 2-3 horas manual**

---

## Checklist de Validación de Contenido IA

Antes de publicar contenido generado por IA:

- ☐ ¿La información es factualmente correcta?
- ☐ ¿Suena como la voz de la marca?
- ☐ ¿Aporta valor real a la audiencia?
- ☐ ¿Podría malinterpretarse o ofender?
- ☐ ¿Está adaptado a la plataforma específica?
- ☐ ¿Los hashtags son relevantes y actuales?
- ☐ ¿El CTA es claro y apropiado?
- ☐ ¿No hay "alucinaciones" o datos falsos?

---

## Limitaciones Críticas

| Limitación | Impacto | Mitigación |
|------------|---------|------------|
| Alucinaciones | Info falsa publicada | Fact-check SIEMPRE |
| Corte de conocimiento | Datos desactualizados | Verificar tendencias actuales |
| Contenido genérico | Falta de diferenciación | Prompts específicos + edición |
| Derechos de autor | Problemas legales | Revisar políticas de uso |
| Falta de contexto | Mensajes inapropiados | Supervisión humana |

---

## Tip Práctico

> Crea una "Biblioteca de Prompts" documentada para tu marca/clientes. Incluye prompts probados para cada tipo de contenido. Esto garantiza consistencia y ahorra tiempo de iteración.
`
          }
        ],
        sprint: {
          title: "Sprint: Configura tu Stack de Herramientas",
          description: "Crea cuentas y configura las herramientas básicas de Community Management",
          tasks: [
            {
              id: "task-cm-2-1",
              question: "Crea una cuenta en Canva y diseña un post de prueba para Instagram. Adjunta el enlace o captura del diseño."
            },
            {
              id: "task-cm-2-2",
              question: "Crea una cuenta gratuita en Buffer o Metricool. Conecta al menos una red social de prueba y describe tu experiencia."
            },
            {
              id: "task-cm-2-3",
              question: "Accede a la cuenta demo de Google Analytics 4 y familiarízate con el dashboard. Describe 3 métricas que consideres más relevantes para un CM."
            },
            {
              id: "task-cm-2-4",
              question: "Usa ChatGPT o Claude para generar 3 ideas de contenido para una marca ficticia. Incluye los prompts que utilizaste y las ideas generadas."
            }
          ]
        },
        exam: {
          title: "Examen: Herramientas del CM",
          description: "Evalúa tus conocimientos sobre las herramientas profesionales",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué herramienta se especializa en programación de contenido?", options: ["Photoshop", "Hootsuite", "Final Cut Pro", "Microsoft Word"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué plataforma es ideal para diseño sin conocimientos técnicos?", options: ["Adobe Premiere", "Canva", "AutoCAD", "Excel"], correctAnswer: 1 },
            { id: "q3", question: "¿Para qué sirve Google Analytics 4?", options: ["Crear videos", "Medir y analizar tráfico web", "Editar fotos", "Programar emails"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué herramienta permite automatizar tareas entre aplicaciones?", options: ["Canva", "Zapier", "Photoshop", "PowerPoint"], correctAnswer: 1 },
            { id: "q5", question: "¿Cuál es una función principal de Metricool?", options: ["Edición de video profesional", "Análisis y planificación de redes sociales", "Creación de sitios web", "Diseño de logos"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-cm-3",
        title: "Gestión de Crisis en Redes Sociales",
        description: "Aprende a prevenir, detectar y gestionar crisis reputacionales con protocolos profesionales y comunicación estratégica",
        theory: [
          {
            id: "lesson-cm-3-1",
            title: "La Reputación como Activo Estratégico",
            content: `# La Reputación Digital como Activo Estratégico

## El Activo Más Volátil

En el ecosistema digital de 2026, la reputación es el activo más volátil y valioso de una organización. Una crisis mal gestionada puede destruir en **horas** el valor construido durante **años**.

---

## La Oportunidad en la Crisis

Sin embargo, un manejo profesional y transparente puede transformarse en una **oportunidad única**:

- Demostrar la integridad de la marca
- Reforzar la confianza de la comunidad
- Salir fortalecido de la adversidad

---

## ¿Qué es una Crisis en Redes?

Una crisis en redes sociales se define como una situación en la que la perspectiva o posición de la empresa es **criticada y repudiada** por el público, manifestándose a través de comentarios y críticas que **escalan rápidamente**.

---

## Objetivo de la Gestión de Crisis

> Actuar con **estrategia**, no con **pánico**.

Esto requiere:
- Preparación previa
- Protocolos claros
- Equipo entrenado
- Respuesta coordinada y profesional

---

## Tip Práctico

> La mejor gestión de crisis es la prevención. Invierte tiempo en crear protocolos ANTES de necesitarlos, no durante la emergencia.
`
          },
          {
            id: "lesson-cm-3-2",
            title: "Escucha Social: Sistema de Alerta Temprana",
            content: `# Escucha Social Activa: Sistema de Alerta Temprana

## Monitorización 24/7

La monitorización en tiempo real es una función **crítica e innegociable**. El objetivo es detectar el **75% de los comentarios negativos** antes de que escalen a crisis.

---

## Herramientas de Escucha Social

| Herramienta | Mejor Para |
|-------------|------------|
| **Brand24** | Monitoreo en tiempo real y alertas |
| **Sprout Social** | Gestión integrada |
| **Metricool** | Monitoreo básico |
| **Hootsuite** | Streams personalizados |
| **Google Alerts** | Complemento gratuito |

---

## Configuración de Alertas

Monitoriza siempre:

- ✓ Nombre de marca y variaciones
- ✓ Nombres de productos/servicios
- ✓ Nombres de directivos clave
- ✓ Hashtags de campaña
- ✓ Términos de crisis (queja, denuncia, estafa, etc.)

---

## Protocolo de Monitoreo

| Frecuencia | Acción |
|------------|--------|
| **Cada 2 horas** | Revisión en horario laboral |
| **Automático** | Alertas para sentimiento negativo |
| **Inmediato** | Escalación si se detectan patrones |
| **Siempre** | Documentación de todo incidente |

---

## Tip Práctico

> Configura alertas por email Y por Slack/WhatsApp. Las crisis no esperan a que revises tu correo.
`
          },
          {
            id: "lesson-cm-3-3",
            title: "El Equipo de Crisis",
            content: `# Definición del Equipo de Crisis

## Comunicación Centralizada

Para evitar mensajes contradictorios, es imperativo centralizar la comunicación en un **equipo de crisis predefinido**. Cada miembro debe conocer su rol.

---

## Roles del Equipo

### Community Manager
- Monitorización 24/7 de todos los canales
- Detección inicial y clasificación del riesgo
- Ejecución de respuestas según protocolo
- Documentación de la evolución

### Social Media Manager
- Redacción de comunicados y mensajes clave
- Coordinación de la estrategia de respuesta
- Enlace con el equipo directivo
- Decisión sobre pausa de contenido programado

### Director de Marketing / CEO
- Aprobación de comunicados oficiales
- Toma de decisiones estratégicas
- Portavoz en casos graves
- Contacto con medios si es necesario

### Legal
- Revisión de comunicaciones sensibles
- Asesoramiento sobre implicaciones legales

---

## Matriz de Escalación

| Nivel | Quién Actúa | Quién Aprueba |
|-------|-------------|---------------|
| Bajo | CM | CM |
| Medio | CM + SMM | SMM |
| Alto | Equipo completo | Director |
| Crítico | Equipo + Legal | CEO |

---

## Tip Práctico

> Ten una lista de contactos de emergencia con teléfonos personales. Durante una crisis a las 11pm, el email corporativo no sirve.
`
          },
          {
            id: "lesson-cm-3-4",
            title: "Manual de Actuación",
            content: `# Manual de Actuación y Mensajes Clave

## El Recurso Más Valioso

Un plan de crisis preaprobado es el recurso más valioso durante una emergencia. **Reduce el tiempo de respuesta** y minimiza errores humanos bajo presión.

---

## Componentes del Manual

1. **Lista de contactos clave**
   - Teléfono y email de todo el equipo

2. **Protocolo por nivel de riesgo**
   - Acciones específicas para cada nivel

3. **Plantillas de mensajes preaprobados**
   - Escenarios comunes cubiertos

4. **Guía de tono y lenguaje**
   - Qué decir y qué NO decir

5. **Canales oficiales**
   - Dónde comunicar qué tipo de mensaje

---

## Plantillas de Respuesta

| Tipo | Ejemplo |
|------|---------|
| **Reconocimiento** | "Hemos visto tu mensaje y lo estamos revisando" |
| **Disculpa** | "Lamentamos la experiencia que has tenido" |
| **Escalación** | "Te enviamos un DM para ayudarte mejor" |
| **En proceso** | "Estamos investigando y te informaremos" |

---

## Tiempos de Respuesta Objetivo

| Nivel | Tiempo Máximo |
|-------|---------------|
| Bajo | 4 horas |
| Medio | 2 horas |
| Alto | 1 hora |
| Crítico | 30 minutos |

---

## Tip Práctico

> Revisa y actualiza el manual cada 6 meses. Los escenarios de crisis evolucionan y tu preparación debe evolucionar con ellos.
`
          },
          {
            id: "lesson-cm-3-5",
            title: "Clasificación de Niveles de Riesgo",
            content: `# Clasificación de Niveles de Riesgo

## No Todo es Crisis

No todas las situaciones negativas son crisis. Es crucial clasificar correctamente el nivel de riesgo para responder **proporcionalmente**.

---

## Matriz de Clasificación

### Nivel Bajo
- 1-2 comentarios negativos sin viralización
- Queja puntual de cliente
- Fácilmente resoluble
- **Acción:** CM gestiona directamente

### Nivel Medio
- Múltiples comentarios sobre el mismo tema
- Mención en blogs o medios menores
- Potencial de escalada
- **Acción:** SMM coordina, notifica a dirección

### Nivel Alto
- Viralización activa
- Trending topic local
- Cobertura en medios
- **Acción:** Equipo completo activado

### Nivel Crítico
- Viralización masiva
- Trending topic nacional
- Impacto en ventas/reputación evidente
- **Acción:** CEO involucrado, posible comunicado oficial

---

## Indicadores de Escalada

⚠️ Velocidad de crecimiento de menciones
⚠️ Participación de influencers
⚠️ Cobertura de medios tradicionales
⚠️ Cambio de sentimiento general
⚠️ Hashtags negativos ganando tracción

---

## Tip Práctico

> Mejor sobre-clasificar que sub-clasificar. Una crisis tratada como nivel medio cuando es nivel alto puede explotar. Lo contrario solo gasta algunos recursos extra.
`
          },
          {
            id: "lesson-cm-3-6",
            title: "Protocolo de Respuesta Inmediata",
            content: `# Protocolo de Respuesta Inmediata

## La Regla de Oro: Los Primeros 60 Minutos

Los primeros 60 minutos de una crisis son críticos. Estudios muestran que las marcas que responden en la primera hora tienen **63% más probabilidades** de contener la crisis exitosamente.

---

## Timeline de Respuesta Detallado

### Minutos 0-15: DETECCIÓN Y EVALUACIÓN

| Acción | Responsable | Entregable |
|--------|-------------|------------|
| Identificar origen | CM | Fuente primaria documentada |
| Clasificar nivel | CM | Nivel asignado (1-4) |
| Capturar evidencia | CM | Screenshots con timestamp |
| Evaluar alcance | CM | Número de menciones, tendencia |

**IMPORTANTE:** NO responder públicamente en esta fase.

### Minutos 15-30: NOTIFICACIÓN Y COORDINACIÓN

| Nivel | A quién notificar | Cómo |
|-------|-------------------|------|
| Bajo | SMM | Slack/Email |
| Medio | SMM + Director | Llamada |
| Alto | Equipo completo | Videollamada urgente |
| Crítico | + CEO + Legal | War room |

**Checklist de coordinación:**
- ☐ Equipo notificado y disponible
- ☐ Mensaje inicial redactado
- ☐ Portavoz designado
- ☐ Contenido programado pausado/revisado
- ☐ Canales de escalación activos

### Minutos 30-60: RESPUESTA INICIAL

| Acción | Detalle |
|--------|---------|
| Publicar primer mensaje | En canal donde inició la crisis |
| Activar monitoreo intensivo | Cada 5 minutos |
| Documentar reacciones | Sentiment tracking |
| Preparar Q&A | Anticipar preguntas |

---

## Plantillas de Primer Mensaje por Escenario

**Queja de producto/servicio:**
"Hemos visto tu experiencia con [producto] y lamentamos que no haya sido la esperada. Estamos investigando y un miembro de nuestro equipo te contactará por DM en los próximos minutos para resolver esto. 🤝"

**Acusación de mal comportamiento:**
"Tomamos muy en serio los reportes sobre [tema]. Estamos investigando internamente y compartiremos más información una vez tengamos los hechos claros. Mientras tanto, pueden contactarnos en [canal]."

**Error de la marca:**
"Cometimos un error y lo reconocemos. [Breve descripción]. Estamos trabajando para [solución]. Actualizaremos aquí en las próximas horas. Gracias por su paciencia."

**Información falsa circulando:**
"Hemos visto información incorrecta circulando sobre [tema]. Queremos aclarar: [hecho verificado]. Compartiremos un comunicado completo pronto."

---

## Lo que NUNCA hacer en los primeros 60 minutos

| ❌ NO hacer | Por qué |
|-------------|---------|
| Borrar comentarios | Amplifica (efecto Streisand) |
| Responder emocionalmente | Escala el conflicto |
| Culpar a otros | Muestra falta de responsabilidad |
| Dar explicaciones largas | Puede contradecirse después |
| Prometer soluciones sin verificar | Puede no cumplirse |
| Ignorar/silencio | Se interpreta como culpa |

---

## Dashboard de Crisis (Template)

Durante la primera hora, actualiza cada 15 minutos:

| Hora | Menciones | Sentiment | Acción Tomada | Próximo Paso |
|------|-----------|-----------|---------------|--------------|
| 10:00 | 15 | -80% | Detectado | Clasificar |
| 10:15 | 45 | -75% | Clasificado Medio | Notificar |
| 10:30 | 120 | -82% | Equipo reunido | Responder |
| 10:45 | 150 | -70% | Mensaje publicado | Monitorear |
| 11:00 | 140 | -55% | Respondiendo DMs | Preparar update |

---

## Tip Práctico

> Prepara un "Kit de Crisis" con: lista de contactos de emergencia, plantillas de mensajes pre-aprobadas, accesos a todas las cuentas, y un documento con la cadena de aprobación. Tenlo accesible 24/7.
`
          },
          {
            id: "lesson-cm-3-7",
            title: "Comunicación Durante la Crisis",
            content: `# Comunicación Durante la Crisis

## Principios Fundamentales

| Principio | Significado |
|-----------|-------------|
| **Transparencia** | No mentir ni ocultar |
| **Empatía** | Reconocer el impacto en afectados |
| **Consistencia** | Mismo mensaje en todos los canales |
| **Proactividad** | Adelantarse a las preguntas |

---

## Trolls vs Críticas Legítimas

| Trolls | Críticas Legítimas |
|--------|-------------------|
| Buscan provocar | Buscan solución |
| Sin queja real | Queja específica |
| Suelen ser anónimos | Clientes reales |
| **No alimentar, bloquear si violan normas** | **Responder profesionalmente** |

---

## Cuándo Guardar Silencio

El silencio estratégico es válido cuando:

- La respuesta puede empeorar las cosas
- Hay implicaciones legales sin asesoramiento
- El tema está muriendo naturalmente
- No tienes información verificada

> El silencio estratégico es diferente de ignorar.

---

## Errores Comunes a Evitar

- ❌ Borrar comentarios negativos (amplifica)
- ❌ Responder emocionalmente
- ❌ Echar culpas
- ❌ Prometer lo que no puedes cumplir
- ❌ Usar humor inapropiado
- ❌ Respuestas copiadas sin personalización

---

## Tip Práctico

> Antes de publicar cualquier respuesta, pregúntate: "¿Cómo se vería esto en una captura de pantalla en un medio de comunicación?"
`
          },
          {
            id: "lesson-cm-3-8",
            title: "Análisis Post-Crisis",
            content: `# Fase Post-Crisis: Análisis y Aprendizaje

## El Trabajo No Termina

Una vez contenida la crisis, el trabajo no termina. La fase post-crisis es crucial para **aprender, mejorar y prevenir**.

---

## Reunión de Análisis (48 horas)

Preguntas a responder:

1. ¿Qué pasó exactamente?
2. ¿Cómo respondimos?
3. ¿Qué funcionó bien?
4. ¿Qué podríamos haber hecho mejor?
5. ¿Qué cambios debemos implementar?

---

## Documentación Requerida

| Elemento | Detalle |
|----------|---------|
| **Cronología** | Línea de tiempo detallada |
| **Métricas** | Alcance, sentimiento, pérdida de seguidores |
| **Evidencia** | Screenshots y capturas |
| **Comunicaciones** | Todo lo enviado |
| **Feedback** | Reacciones recibidas |

---

## Actualización de Protocolos

Después de cada crisis:

- ✓ Incorporar nuevos escenarios al manual
- ✓ Ajustar tiempos de respuesta si fueron insuficientes
- ✓ Actualizar lista de contactos
- ✓ Programar simulacros
- ✓ Compartir aprendizajes con todo el equipo

---

## Tip Práctico

> Crea un "post-mortem" formal después de cada crisis, incluso las pequeñas. Los patrones emergen cuando documentas consistentemente.
`
          }
        ],
        sprint: {
          title: "Sprint: Simula una Crisis de Redes",
          description: "Practica la respuesta a una crisis de reputación simulada",
          tasks: [
            {
              id: "task-cm-3-1",
              question: "Imagina que un cliente insatisfecho publica una queja viral sobre un producto defectuoso. Escribe el 'comentario viral' del cliente (máximo 280 caracteres)."
            },
            {
              id: "task-cm-3-2",
              question: "Usa la matriz de riesgo para clasificar el nivel de la crisis (bajo, medio, alto, crítico). Justifica tu clasificación en 2-3 oraciones."
            },
            {
              id: "task-cm-3-3",
              question: "Redacta la primera respuesta pública de la marca (empática, rápida, profesional). Máximo 300 caracteres."
            },
            {
              id: "task-cm-3-4",
              question: "Define 3 acciones de seguimiento para resolver la situación y recuperar la confianza. Incluye responsable y timeline para cada una."
            }
          ]
        },
        exam: {
          title: "Examen: Gestión de Crisis",
          description: "Evalúa tus conocimientos sobre gestión de crisis en redes sociales",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es el primer paso ante una crisis en redes sociales?", options: ["Borrar todos los comentarios", "Evaluar la situación sin reaccionar impulsivamente", "Cerrar las redes sociales", "Culpar a otros"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué es el social listening?", options: ["Escuchar música en redes", "Monitorear menciones y conversaciones sobre la marca", "Grabar podcasts", "Crear playlists"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué debe contener un manual de crisis?", options: ["Solo números de teléfono", "Protocolos, portavoces y plantillas de respuesta", "Recetas de cocina", "Horarios de trabajo"], correctAnswer: 1 },
            { id: "q4", question: "¿Cuándo se debe responder públicamente a una crisis?", options: ["Nunca", "Cuando afecta la reputación pública de la marca", "Solo si hay más de 1000 comentarios", "Después de un año"], correctAnswer: 1 },
            { id: "q5", question: "¿Qué es un análisis post-crisis?", options: ["Borrar evidencia", "Evaluar qué funcionó y qué mejorar", "Ignorar lo sucedido", "Cambiar de marca"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-cm-4",
        title: "Tendencias y Futuro del Marketing Digital",
        description: "Prepárate para el futuro: IA generativa, análisis predictivo, psicología del consumidor y las habilidades que definirán el éxito profesional",
        theory: [
          {
            id: "lesson-cm-4-1",
            title: "El CM de 2026: Nuevo Paradigma",
            content: `# El Community Manager de 2026: Nuevo Paradigma

## De Ejecutor a Estratega

El Community Manager de 2026 ha trascendido la simple publicación de contenido. Hoy es un **estratega** que valida producción de IA, gestiona crisis en tiempo real y construye comunidades basándose en datos.

---

## Evolución del Rol

| Aspecto | CM 2024 | CM 2026 |
|---------|---------|---------|
| **Rol principal** | Operacional | Estratégico |
| **Creación de contenido** | 70% manual | 80% supervisado por IA |
| **Análisis** | Métricas básicas | Predictivo en tiempo real |
| **Enfoque** | Ejecutar | Orquestar y validar |

---

## Skills Críticos del CM 2026

- ✓ Dominio de redes sociales
- ✓ Prompt engineering para IA
- ✓ Análisis de datos avanzado
- ✓ Psicología del consumidor
- ✓ Gestión de crisis
- ✓ Pensamiento estratégico

---

## El Valor Diferencial

El valor ya no está en ejecutar tareas mecánicas (la IA lo hace), sino en:

- **Criterio estratégico**
- **Creatividad auténtica**
- **Empatía humana**
- **Conectar datos con decisiones de negocio**

---

## Tip Práctico

> Dedica 20% de tu tiempo a aprender nuevas herramientas y tendencias. El CM que deja de aprender deja de ser relevante.
`
          },
          {
            id: "lesson-cm-4-2",
            title: "IA Generativa en Marketing",
            content: `# Inteligencia Artificial Generativa en Marketing

## La Revolución Creativa

La IA generativa ha revolucionado la creación de contenido. El CM debe dominar estas herramientas como **extensiones de su creatividad**.

---

## Herramientas por Tipo

| Tipo | Herramientas |
|------|--------------|
| **Texto** | ChatGPT, Claude, Gemini |
| **Imágenes** | Midjourney, DALL-E 3, Stable Diffusion |
| **Video** | Runway, Pika, HeyGen |
| **Audio** | ElevenLabs, Murf |

---

## Prompt Engineering para CM

La calidad del output depende de la calidad del input.

**Estructura de prompt efectivo:**
1. **Rol:** "Actúa como..."
2. **Contexto:** "Para una marca de..."
3. **Tarea:** "Escribe 5 copies para..."
4. **Formato:** "En formato de..."
5. **Restricciones:** "Máximo X caracteres"

---

## Flujo de Trabajo con IA

1. Brief claro de lo que necesitas
2. Prompt inicial
3. Revisión del output
4. Iteración/refinamiento
5. Edición humana final
6. Adaptación al tono de marca

> La IA no reemplaza tu criterio, lo amplifica.

---

## Limitaciones a Considerar

- ⚠️ Puede "alucinar" información falsa
- ⚠️ No tiene contexto actual
- ⚠️ Genera contenido genérico sin guía clara
- ⚠️ Derechos de autor en área gris legal

---

## Tip Práctico

> Crea una biblioteca de prompts probados que funcionen para tu marca. Reutilizar prompts optimizados ahorra tiempo y mejora consistencia.
`
          },
          {
            id: "lesson-cm-4-3",
            title: "Análisis Predictivo",
            content: `# Análisis Predictivo en Tiempo Real

## Anticiparse al Futuro

El análisis predictivo usa datos históricos y machine learning para **anticipar comportamientos futuros**. En marketing, permite predecir qué contenido funcionará, cuándo publicar y qué audiencias convertirán.

---

## Herramientas de Análisis Predictivo

| Herramienta | Capacidades |
|-------------|-------------|
| **Sprinklr** | IA predictiva integrada |
| **Brandwatch** | Predicción de tendencias |
| **Meta Business Suite** | Predicciones de rendimiento |
| **GA4** | Segmentos predictivos |
| **Crayon** | Inteligencia competitiva |

---

## Aplicaciones Prácticas

- **Predicción de viralidad** de contenido
- **Identificación de micro-tendencias** antes de que exploten
- **Anticipación de crisis** por patrones de sentimiento
- **Optimización de horarios** por predicción de engagement

---

## Mentalidad Data-Driven

> Deja de publicar por intuición. Cada decisión debe estar respaldada por datos.

**Ciclo de mejora:**
Hipótesis → Experimento → Datos → Aprendizaje → Iteración

El CM de 2026 es un **científico del comportamiento digital**.

---

## Tip Práctico

> Antes de cada campaña, define qué métricas medirás y qué resultado considerarías exitoso. Sin esto, no hay aprendizaje real.
`
          },
          {
            id: "lesson-cm-4-4",
            title: "Psicología del Consumidor Digital",
            content: `# Psicología del Consumidor Digital

## Principios que Impulsan el Engagement

Las redes sociales explotan principios psicológicos fundamentales. Entenderlos te hace mejor CM:

---

## Principios Psicológicos Clave

| Principio | Aplicación en Redes |
|-----------|-------------------|
| **Prueba social** | Mostrar seguidores, testimonios, números |
| **Reciprocidad** | Dar valor genera ganas de devolver |
| **Escasez** | Ofertas limitadas, countdown timers |
| **Autoridad** | Expertos, certificaciones, premios |
| **Consistencia** | Micro-compromisos que escalan |

---

## La Economía de la Atención

El recurso más escaso es la atención. Tienes **3 segundos** para capturarla.

**Estrategias:**
- Hooks potentes al inicio
- Patrones disruptivos (lo inesperado destaca)
- Beneficio claro inmediato
- Curiosity gaps

---

## Construcción de Comunidad

Las comunidades fuertes comparten:

- **Identidad común:** "Somos los que..."
- **Rituales compartidos:** Contenido recurrente, inside jokes
- **Enemigo común:** No negativo, pero un "otro"
- **Exclusividad:** Sensación de pertenencia

---

## Engagement Profundo vs Vanity Metrics

| Superficial | Profundo |
|-------------|----------|
| Likes | Comentarios con conversación |
| Vistas | Saves |
| Impresiones | Shares |
| | DMs |

Diseña contenido que genere **acción significativa**, no solo aprobación pasiva.

---

## Tip Práctico

> Observa qué contenido guardas TÚ en Instagram. Eso es engagement profundo. Ahora crea contenido que otros quieran guardar.
`
          },
          {
            id: "lesson-cm-4-5",
            title: "El CM como Estratega de Negocio",
            content: `# El CM como Estratega de Negocio

## Conectando con Resultados

El CM de 2026 no solo gestiona redes, **conecta su trabajo con resultados de negocio**. Esto requiere entender el funnel completo.

---

## El Funnel de Marketing

1. **Awareness** → Conocen la marca
2. **Consideration** → Evalúan opciones
3. **Conversion** → Compran/contratan
4. **Retention** → Vuelven a comprar
5. **Advocacy** → Recomiendan a otros

El CM impacta en TODAS las etapas.

---

## Métricas que Importan al Negocio

| No digas | Di |
|----------|-----|
| "Tuvimos 10K likes" | "Generamos 500 leads cualificados" |
| "Crecimos seguidores" | "Coste por adquisición bajó 30%" |
| "El post fue viral" | "Revenue atribuido a social: $50K" |

Traduce tu trabajo al **idioma de dirección**.

---

## Atribución y ROI

- ✓ Configura UTMs en todos los enlaces
- ✓ Usa GA4 para tracking de conversiones
- ✓ Implementa modelos de atribución multi-touch
- ✓ Documenta el journey del cliente

---

## Presentar Resultados a Dirección

**Estructura recomendada:**
1. Objetivo del período
2. Acciones realizadas
3. Resultados (con números de negocio)
4. Aprendizajes
5. Plan para siguiente período

---

## Tip Práctico

> Antes de cada reunión de resultados, pregúntate: "¿Qué decisión de negocio puede tomar mi jefe con esta información?" Si no hay decisión clara, replantea tu reporte.
`
          }
        ],
        sprint: {
          title: "Sprint: Experimenta con IA Generativa",
          description: "Aplica herramientas de IA para crear contenido de marketing",
          tasks: [
            {
              id: "task-cm-4-1",
              question: "Usa ChatGPT o Claude para crear 5 variaciones de un post promocional para una marca (puede ser ficticia). Incluye los prompts utilizados y las 5 versiones generadas."
            },
            {
              id: "task-cm-4-2",
              question: "Usa DALL-E, Midjourney, o Canva AI para generar una imagen para redes sociales. Describe el prompt utilizado y adjunta o describe la imagen resultante."
            },
            {
              id: "task-cm-4-3",
              question: "Pide a una IA que analice las tendencias actuales de marketing digital para 2026. Lista las 5 tendencias más relevantes que identificó."
            },
            {
              id: "task-cm-4-4",
              question: "Diseña un prompt reutilizable para generar contenido semanal para redes sociales. Documenta el prompt completo con todas sus variables."
            }
          ]
        },
        exam: {
          title: "Examen: Tendencias y Futuro",
          description: "Evalúa tus conocimientos sobre las tendencias del marketing digital",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cómo está cambiando el rol del CM con la IA?", options: ["Será completamente reemplazado", "Se está volviendo más estratégico y menos operativo", "No hay ningún cambio", "Solo trabaja con robots"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué es la IA generativa?", options: ["IA que solo analiza datos", "IA capaz de crear contenido nuevo", "Un tipo de hardware", "Software de contabilidad"], correctAnswer: 1 },
            { id: "q3", question: "¿Para qué sirve el análisis predictivo en marketing?", options: ["Predecir el clima", "Anticipar comportamientos y tendencias del consumidor", "Crear logos", "Editar videos"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué principio psicológico es útil en marketing digital?", options: ["Teoría de cuerdas", "Principio de escasez y urgencia", "Ley de gravedad", "Ecuación de Einstein"], correctAnswer: 1 },
            { id: "q5", question: "¿Cuál es una tendencia emergente en marketing digital?", options: ["Fax marketing", "Marketing con inteligencia artificial", "Publicidad en periódicos", "Telemarketing tradicional"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "mod-cm-5",
        title: "Formación y Desarrollo Profesional",
        description: "Construye tu carrera: certificaciones valoradas, portfolio profesional, optimización de LinkedIn y preparación para entrevistas",
        theory: [
          {
            id: "lesson-cm-5-1",
            title: "Por Qué las Certificaciones Importan",
            content: `# Por Qué las Certificaciones Importan

## Validación Profesional

Las certificaciones profesionales son una forma tangible de demostrar competencias en un mercado laboral competitivo. No reemplazan la experiencia, pero la **complementan y validan**.

---

## Beneficios de las Certificaciones

- ✓ Validación externa de conocimientos
- ✓ Diferenciación en procesos de selección
- ✓ Acceso a comunidades profesionales
- ✓ Actualización estructurada de habilidades
- ✓ Credibilidad ante clientes y empleadores

---

## No Todas Valen Igual

**Prioriza certificaciones de:**
- Plataformas oficiales (Meta, Google, HubSpot)
- Reconocidas en tu mercado objetivo
- Con contenido actualizado regularmente

**Evita:**
- Certificaciones de terceros desconocidos
- Cursos sin respaldo de la industria
- Títulos sin verificación posible

---

## Estrategia de Certificación

1. **Empieza con gratuitas** (HubSpot, Google)
2. **Construye base sólida** de conocimientos
3. **Invierte en las de pago** que más valor aporten
4. **Mantén actualizadas** las que expiran

---

## Tip Práctico

> No colecciones certificaciones por coleccionar. Elige las que realmente se alineen con tus objetivos de carrera y dedica tiempo a dominar el contenido.
`
          },
          {
            id: "lesson-cm-5-2",
            title: "Certificaciones Recomendadas",
            content: `# Certificaciones Recomendadas

## Las Más Valoradas en 2026

### HubSpot Social Media Marketing
- **Costo:** Gratis
- **Validez:** No expira
- **Contenido:** Inbound, estrategia social, ROI
- **Ideal para:** Principiantes

### Meta Certified Community Manager
- **Costo:** ~$150 USD
- **Validez:** 1 año
- **Contenido:** Gestión de comunidades en Meta
- **Ideal para:** Especialistas en Facebook/Instagram

### Google Analytics 4
- **Costo:** Gratis
- **Validez:** 1 año
- **Contenido:** Analítica web completa
- **Ideal para:** Todos (casi obligatoria)

### Hootsuite Social Marketing
- **Costo:** ~$200 USD
- **Validez:** 2 años
- **Contenido:** Estrategia y gestión de redes
- **Ideal para:** CM que usan Hootsuite

---

## Ruta Recomendada

| Orden | Certificación | Por qué |
|-------|---------------|---------|
| 1 | HubSpot (gratis) | Base sólida, sin riesgo |
| 2 | GA4 (gratis) | Fundamental para cualquier rol |
| 3 | Meta (pago) | Alta demanda en el mercado |
| 4 | Hootsuite (pago) | Diferenciación adicional |

---

## Tip Práctico

> Añade las certificaciones a tu LinkedIn inmediatamente después de obtenerlas. Usa los badges digitales cuando estén disponibles.
`
          },
          {
            id: "lesson-cm-5-3",
            title: "Construcción de Portfolio",
            content: `# Construcción de Portfolio Profesional

## Muestra, No Cuentes

Un portfolio es **5x más efectivo** que un CV tradicional. Los recruiters dedican 7 segundos a un CV, pero 2-3 minutos a un buen portfolio.

---

## Estructura de Caso de Estudio (Método STAR-R)

### S - Situación (20% del caso)
- Cliente (anonimizado si necesario)
- Industria y contexto
- Desafío específico
- Métricas iniciales

### T - Tarea (10%)
- Tu rol específico
- Objetivos medibles
- Timeline y restricciones

### A - Acción (30%)
- Estrategia desarrollada
- Tácticas implementadas
- Herramientas utilizadas
- Decisiones clave tomadas

### R - Resultado (30%)
- Métricas antes vs después
- % de mejora
- ROI si es posible
- Testimonios del cliente

### R - Reflexión (10%)
- Qué aprendiste
- Qué harías diferente
- Cómo aplicarías esto a otros proyectos

---

## Ejemplo de Caso de Estudio Completo

**TÍTULO:** "Cómo aumentamos el engagement 340% para marca de moda sostenible"

**SITUACIÓN:**
Marca de ropa sostenible con 3K seguidores, engagement de 0.8%, sin estrategia definida. Objetivo: posicionarse como referente en moda ética.

**MI ROL:**
CM responsable de estrategia, contenido y comunidad. 3 meses de proyecto.

**ACCIÓN:**
- Auditoría completa de presencia digital
- Redefinición de pilares de contenido (educación 40%, producto 30%, comunidad 30%)
- Implementación de calendario editorial con 5 posts/semana
- Estrategia de hashtags localizada
- Programa de UGC con clientes
- Respuesta a comentarios en <2 horas

**RESULTADOS:**
| Métrica | Antes | Después | Cambio |
|---------|-------|---------|--------|
| Seguidores | 3,000 | 12,500 | +317% |
| Engagement | 0.8% | 3.5% | +337% |
| Saves promedio | 5 | 45 | +800% |
| Tráfico a web | 120/mes | 890/mes | +642% |
| Conversiones | 8/mes | 34/mes | +325% |

**REFLEXIÓN:**
El contenido educativo sobre sostenibilidad fue el mayor driver. Para futuros proyectos similares, empezaría con esta estrategia desde el día 1.

---

## Proyectos Sin Clientes (Para Principiantes)

**Opción 1: Auditoría No Solicitada**
- Elige marca local que admires
- Haz auditoría completa
- Crea estrategia de mejora
- Muéstrala como "caso de estudio conceptual"

**Opción 2: Proyecto Ficticio**
- Inventa marca (o usa brief de competencia online)
- Desarrolla estrategia completa
- Crea contenido de ejemplo
- Documenta como si fuera real

**Opción 3: Tu Marca Personal**
- Tú eres el cliente
- Documenta tu crecimiento
- Muestra métricas de tu LinkedIn/Instagram profesional

---

## Formatos de Portfolio con Pros y Contras

| Formato | Pros | Contras | Mejor Para |
|---------|------|---------|------------|
| **Notion** | Gratis, flexible, fácil actualizar | Menos "profesional" | Freelancers, juniors |
| **Behance** | Comunidad, descubrimiento | Menos personalización | Roles creativos |
| **Web propia** | Control total, SEO | Costo, mantenimiento | CM senior, agencias |
| **PDF** | Envío directo, offline | Difícil actualizar | Aplicaciones específicas |
| **Carrd** | Simple, barato, rápido | Limitado | Landing profesional |

---

## Tip Práctico

> Actualiza tu portfolio cada mes con algo nuevo, aunque sea pequeño. Un portfolio "vivo" muestra que estás activo y en crecimiento. Un portfolio estático de hace 2 años genera desconfianza.
`
          },
          {
            id: "lesson-cm-5-4",
            title: "LinkedIn para Marketing Digital",
            content: `# LinkedIn para Profesionales del Marketing

## Tu Perfil Trabaja 24/7

Un perfil de LinkedIn optimizado es tu **mejor vendedor**: trabaja mientras duermes. Los perfiles completos reciben **40x más oportunidades** que los incompletos.

---

## Anatomía del Perfil Perfecto

### Foto de Perfil (Primera Impresión)
- Resolución mínima 400x400px
- Tu cara ocupa 60% del encuadre
- Fondo neutro o relacionado con tu industria
- Sonrisa genuina, contacto visual
- Vestimenta acorde a tu industria objetivo

**Dato:** Perfiles con foto reciben 21x más visitas y 36x más mensajes.

### Banner (1584x396px)
Ideas efectivas:
- Tu propuesta de valor en texto
- Logos de empresas/clientes
- Resultados clave ("+300% engagement")
- Contacto o CTA

### Headline (220 caracteres - aprovecha TODO)

**Fórmula:** [Rol] + [A quién ayudas] + [Cómo lo haces] + [Resultado/Prueba social]

**Ejemplos:**
- ❌ "Community Manager en Empresa X"
- ✓ "Community Manager | Ayudo a startups B2B a construir comunidades que convierten | +50 marcas | Ex-HubSpot"
- ✓ "Especialista en Redes Sociales | De 0 a 100K seguidores para e-commerce | Estrategia + Contenido + Paid"

### About/Acerca de (2600 caracteres)

**Estructura que funciona:**

**Hook (primeras 2 líneas visibles):**
"¿Tu marca publica contenido pero no genera ventas? En los últimos 3 años, he ayudado a +50 empresas a transformar sus redes en máquinas de conversión."

**Tu historia (2-3 párrafos):**
Cómo llegaste aquí, qué te apasiona, tu enfoque único.

**Resultados (bullet points):**
• Aumenté engagement 340% para marca de moda en 3 meses
• Gestioné crisis viral para fintech (convertida en PR positivo)
• +500K seguidores gestionados en total

**CTA claro:**
"¿Tienes un proyecto? Escríbeme a [email] o agenda una llamada: [link]"

---

## Experiencia: Logros, No Tareas

| ❌ No escribas | ✓ Escribe |
|----------------|-----------|
| "Responsable de redes sociales" | "Crecí comunidad de 5K a 45K en 8 meses" |
| "Gestión de contenido" | "Publiqué +500 posts con engagement promedio 4.2%" |
| "Atención al cliente digital" | "Reduje tiempo de respuesta de 24h a 2h" |
| "Creación de reportes" | "Implementé dashboard que ahorró 5h/semana al equipo" |

---

## Estrategia de Contenido LinkedIn

### Frecuencia Recomendada

| Acción | Frecuencia | Impacto |
|--------|------------|---------|
| Publicar | 3-5 posts/semana | Alto |
| Comentar en otros | 5-10/día | Muy alto |
| Compartir con valor añadido | 1-2/semana | Medio |
| Enviar mensajes | 5-10/semana | Medio |

### Tipos de Posts que Funcionan

1. **Storytelling personal** (tu mejor y peor momento profesional)
2. **Lecciones aprendidas** (fracasos convertidos en aprendizaje)
3. **Cómo hice X** (tutoriales, procesos)
4. **Opiniones polarizantes** (con respeto y fundamento)
5. **Datos/estadísticas** con tu análisis
6. **Celebraciones de tu red** (generosidad visible)

### Anatomía del Post Viral

**Hook (primeras 2 líneas):** Captura atención
**Historia/Problema:** Contexto relatable
**Insight/Solución:** Tu aporte de valor
**CTA:** Pregunta que invite a comentar

---

## Plantilla de Mensaje de Conexión

**Para recruiters:**
"Hola [nombre], vi que trabajas en [empresa] y me interesa mucho su enfoque en [tema específico]. Me encantaría conectar y aprender más sobre las oportunidades en marketing digital. Adjunto mi perfil con algunos resultados de mis últimos proyectos."

**Para potenciales clientes:**
"Hola [nombre], noté que [observación específica sobre su marca/contenido]. Tengo algunas ideas que podrían ayudar con [problema específico]. ¿Te interesaría una llamada de 15 minutos para compartirlas? Sin compromiso."

---

## Tip Práctico

> La regla 10-4-1: Por cada 10 interacciones en posts de otros, crea 4 posts propios de valor y haz 1 promoción directa. La generosidad visible construye autoridad.
`
          },
          {
            id: "lesson-cm-5-5",
            title: "Preparación para Entrevistas",
            content: `# Preparación para Entrevistas de CM

## Los Tres Tipos de Evaluación

Las entrevistas para CM suelen combinar:
1. Preguntas tradicionales
2. Casos prácticos
3. Revisión de portfolio

---

## Preguntas Frecuentes

- ¿Cómo definirías una estrategia de redes desde cero?
- ¿Cómo medirías el éxito de una campaña?
- ¿Cómo manejarías una crisis en redes?
- ¿Qué herramientas dominas?
- ¿Cómo te mantienes actualizado?
- Cuéntame sobre una campaña exitosa que hayas gestionado

---

## Casos Prácticos Comunes

Pueden pedirte:
- Crear estrategia para cliente hipotético
- Analizar métricas y proponer mejoras
- Redactar copies en el momento
- Resolver escenario de crisis

**Tip:** Practica pensando en voz alta

---

## Método STAR para Respuestas

| Elemento | Qué incluir |
|----------|-------------|
| **S**ituación | Contexto del desafío |
| **T**area | Tu responsabilidad específica |
| **A**cción | Qué hiciste exactamente |
| **R**esultado | Métricas y outcomes |

---

## Técnicas para Destacar

- ✓ Lleva ejemplos concretos de tu trabajo
- ✓ Haz preguntas inteligentes sobre la empresa
- ✓ Muestra curiosidad y ganas de aprender
- ✓ Investiga la empresa antes de la entrevista
- ✓ Prepara preguntas para el entrevistador

---

## Tip Práctico

> Grábate respondiendo las preguntas comunes. Te sorprenderá lo mucho que mejorarás al verte y ajustar. La práctica hace al maestro.
`
          }
        ],
        sprint: {
          title: "Sprint: Prepara tu Perfil Profesional",
          description: "Optimiza tu presencia profesional para destacar en el mercado",
          tasks: [
            {
              id: "task-cm-5-1",
              question: "Actualiza (o crea) tu headline de LinkedIn con palabras clave de marketing digital. Escribe tu nuevo headline (máximo 120 caracteres)."
            },
            {
              id: "task-cm-5-2",
              question: "Escribe tu elevator pitch: una presentación de 30 segundos sobre ti como profesional de marketing (máximo 100 palabras)."
            },
            {
              id: "task-cm-5-3",
              question: "Investiga 3 certificaciones gratuitas valoradas en marketing digital. Lista el nombre, plataforma, enlace y duración estimada de cada una."
            },
            {
              id: "task-cm-5-4",
              question: "Define un proyecto para tu portafolio: puede ser personal, ficticio o un caso de estudio. Describe el proyecto en 3-5 oraciones incluyendo objetivo, estrategia y métricas que medirías."
            }
          ]
        },
        exam: {
          title: "Examen: Desarrollo Profesional",
          description: "Evalúa tus conocimientos sobre desarrollo de carrera en marketing digital",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Por qué son importantes las certificaciones?", options: ["No tienen ningún valor", "Validan conocimientos y mejoran empleabilidad", "Solo sirven para decoración", "Son obligatorias por ley"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué debe incluir un portafolio de CM?", options: ["Solo fotos personales", "Casos de éxito, métricas y ejemplos de trabajo", "Recetas favoritas", "Lista de películas"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué plataforma es esencial para networking profesional?", options: ["TikTok", "LinkedIn", "Snapchat", "Pinterest"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué certificación ofrece Google para marketing digital?", options: ["HubSpot Academy", "Google Analytics", "Meta Blueprint", "Hootsuite Academy"], correctAnswer: 1 },
            { id: "q5", question: "¿Qué es importante preparar para una entrevista de CM?", options: ["Nada, improvisar es mejor", "Casos de éxito y métricas de resultados", "Solo el currículum", "Una canción"], correctAnswer: 1 }
          ]
        }
      }
    ]
  },
  {
    id: "contabilidad-asistentes",
    title: "Contabilidad para Asistentes Virtuales",
    slug: "contabilidad",
    description: "Transforma tu rol de digitador a consultor estratégico. Domina conciliaciones, análisis financiero, gestión de flujo de caja y presentación ejecutiva para convertirte en un aliado indispensable para cualquier negocio.",
    modules: [
      {
        id: "module-conta-intro",
        title: "El Rol del Asistente Contable Proactivo",
        description: "Descubre cómo transformar tu rol de digitador a consultor estratégico",
        icon: "Briefcase",
        lessons: [
          {
            id: "lesson-conta-intro-1",
            title: "Más Allá de la Digitación",
            duration: "15 min",
            content: `# El Rol del Asistente Contable Proactivo

## Más Allá de la Digitación

Como Asistente Virtual Contable, tu rol trasciende el simple registro de transacciones. Eres un **aliado estratégico** que educa, orienta y anticipa las necesidades financieras de tus clientes.

---

## Nuestra Filosofía de Servicio

> "El Asistente Virtual Contable no solo lleva cuentas; educa, orienta y es proactivo para el crecimiento del capital del cliente."

---

## Los 4 Pilares del Servicio Integral

| Pilar | Descripción | Impacto |
|-------|-------------|---------|
| **Servicio Integral** | No solo registramos, analizamos y recomendamos | Decisiones informadas |
| **Educación Financiera** | Enseñamos al cliente a entender sus números | Autonomía del cliente |
| **Concientización Tributaria** | Preparamos para obligaciones fiscales con anticipación | Sin sorpresas de impuestos |
| **Gestión Documental** | Organizamos información para decisiones ágiles | Eficiencia operativa |

---

## La Meta Final

Tu objetivo como profesional contable proactivo es lograr:

- **Planificación anticipada** de flujos y obligaciones
- **Aumento de utilidades reales** mediante control y análisis
- **Tranquilidad financiera** para que el cliente se enfoque en su negocio

---

## El Cambio de Mentalidad

| Enfoque Tradicional | Enfoque Proactivo |
|---------------------|-------------------|
| Registro de datos | Análisis de información |
| Reaccionar a problemas | Anticipar situaciones |
| Entregar reportes | Explicar decisiones |
| Cumplir tareas | Agregar valor |

---

## Tu Propuesta de Valor

**El asistente contable tradicional dice:** "Aquí están tus reportes del mes"

**El asistente contable proactivo dice:** "Aquí están tus reportes, pero más importante: detecté que tus gastos de marketing subieron 40% sin aumento en ventas. Deberíamos revisar la efectividad de esas campañas."

> **Bienvenido a LoVirtual Academy.** Aquí formarás las competencias que te convertirán en un profesional indispensable para cualquier negocio.
`
          }
        ],
        sprint: {
          title: "Sprint: Define tu Propuesta de Valor",
          description: "Establece las bases de tu servicio contable proactivo",
          tasks: [
            {
              id: "task-conta-intro-1",
              question: "Escribe tu declaración de valor como asistente contable proactivo en 2-3 oraciones. ¿Qué problema resuelves y cómo te diferencias de un asistente tradicional?"
            },
            {
              id: "task-conta-intro-2",
              question: "Lista 5 preguntas proactivas que podrías hacer a un nuevo cliente para entender mejor su negocio (más allá de datos contables básicos)."
            },
            {
              id: "task-conta-intro-3",
              question: "Describe un escenario donde un asistente tradicional solo entregaría reportes, pero tú agregarías valor con análisis o recomendación."
            }
          ]
        },
        exam: {
          title: "Examen: Fundamentos del Rol Proactivo",
          description: "Evalúa tu comprensión del rol del asistente contable proactivo",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es la filosofía principal del Asistente Virtual Contable según LoVirtual?", options: ["Solo registrar transacciones con precisión", "Educar, orientar y ser proactivo para el crecimiento del capital del cliente", "Entregar reportes mensuales al contador", "Automatizar todos los procesos contables"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuáles son los 4 pilares del servicio integral?", options: ["Velocidad, Precisión, Automatización, Reportes", "Servicio Integral, Educación Financiera, Concientización Tributaria, Gestión Documental", "Contabilidad, Finanzas, Impuestos, Auditoría", "Excel, QuickBooks, Facturación, Nómina"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué significa tener un 'enfoque proactivo' en contabilidad?", options: ["Trabajar más horas que los demás", "Anticipar situaciones y agregar valor, no solo reaccionar a problemas", "Usar software más avanzado", "Cobrar más por los servicios"], correctAnswer: 1 },
            { id: "q4", question: "La meta final del asistente contable proactivo incluye:", options: ["Automatizar el 100% de los procesos", "Planificación anticipada y aumento de utilidades reales", "Eliminar la necesidad de un contador certificado", "Reducir el trabajo al mínimo posible"], correctAnswer: 1 },
            { id: "q5", question: "¿Por qué es importante la educación financiera al cliente?", options: ["Para que el cliente haga su propia contabilidad", "Para que el cliente entienda sus números y tome mejores decisiones", "Para reducir nuestro trabajo futuro", "Es un requisito legal obligatorio"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-1",
        title: "Fundamentos y Precisión Conceptual",
        description: "Domina los conceptos base: caja vs. devengado, categorización y GAAP",
        icon: "BookOpen",
        lessons: [
          {
            id: "lesson-conta-1-1",
            title: "Contabilidad de Caja vs. Devengado",
            duration: "20 min",
            content: `# Fundamentos y Precisión Conceptual

## La Base de Todo: Entender Cómo Fluye el Dinero

Antes de registrar cualquier transacción, debes comprender dos métodos fundamentales que cambian completamente cómo "vemos" la realidad financiera de un negocio.

---

## Método de Caja (Cash Basis)

| Característica | Descripción |
|----------------|-------------|
| **Ingresos** | Se registran cuando recibes el dinero |
| **Gastos** | Se registran cuando pagas efectivamente |
| **Ventaja** | Más simple, ideal para pequeños negocios |
| **Desventaja** | Puede distorsionar realidad en negocios con mucho crédito |

---

## Método de Devengado (Accrual Basis)

| Característica | Descripción |
|----------------|-------------|
| **Ingresos** | Se registran cuando se genera el derecho (facturación) |
| **Gastos** | Se registran cuando se genera la obligación |
| **Ventaja** | Refleja mejor la realidad económica |
| **Requisito** | Obligatorio para empresas medianas/grandes |

---

## Ejemplo Práctico Comparativo

| Situación | Método Caja | Método Devengado |
|-----------|-------------|------------------|
| Facturas $10,000 el 15 de enero, cobra el 15 de febrero | Ingreso en febrero | Ingreso en enero |
| Recibe factura de luz en diciembre, paga en enero | Gasto en enero | Gasto en diciembre |
| Anticipo de cliente recibido hoy, servicio en 2 meses | Ingreso hoy | Ingreso en 2 meses |

---

## ¿Cuándo Usar Cada Método?

**Método de Caja es ideal para:**
- Freelancers y consultores independientes
- Pequeños negocios con transacciones simples
- Negocios que cobran al momento de la venta

**Método de Devengado es necesario para:**
- Empresas con inventario significativo
- Negocios con muchas ventas a crédito
- Empresas que requieren auditoría externa
- Cualquier negocio que supere cierto umbral de ingresos

---

## Tu Responsabilidad

> **Pregunta clave al inicio:** "¿Qué método contable utiliza este negocio?"

Registrar una transacción con el método equivocado distorsiona completamente los estados financieros y puede generar problemas fiscales.
`
          },
          {
            id: "lesson-conta-1-2",
            title: "Categorización y Principios GAAP",
            duration: "20 min",
            content: `# La Importancia de la Categorización y GAAP

## La Categorización Exacta es Crítica

Una transacción mal categorizada puede:

- ❌ Distorsionar los reportes financieros
- ❌ Generar errores en declaraciones de impuestos
- ❌ Impedir análisis comparativos correctos
- ❌ Afectar la toma de decisiones del cliente
- ❌ Causar problemas en auditorías

> **Regla de Oro:** Cuando dudes, investiga. Es mejor preguntar que asumir.

---

## Errores Comunes de Categorización

| Error | Consecuencia | Corrección |
|-------|--------------|------------|
| Computadora en "Suministros de oficina" | Infla gastos, oculta activos | Activos Fijos → Depreciar |
| Préstamo recibido como "Ingreso" | Paga impuestos sobre lo que no es ganancia | Pasivo → Préstamo por pagar |
| Retiro de dueño como "Gasto" | Reduce utilidad artificialmente | Capital → Retiros |
| Depósito de cliente como "Venta" | Reconoce ingreso antes de tiempo | Pasivo → Anticipo de clientes |

---

## Principios GAAP Básicos

Los **Generally Accepted Accounting Principles** son las reglas del juego:

### 1. Principio de Entidad
El negocio es una entidad **separada** del dueño. Sus finanzas personales no se mezclan con las del negocio.

### 2. Principio de Continuidad
Asumimos que el negocio **seguirá operando** indefinidamente (no está en proceso de cierre).

### 3. Principio de Consistencia
Mantener los **mismos métodos** contables período a período para permitir comparaciones válidas.

### 4. Principio de Materialidad
Enfocarse en lo **significativo**. Un error de $5 no amerita el mismo tratamiento que uno de $5,000.

---

## Aplicación Práctica

**Escenario:** El dueño paga la gasolina de su auto personal con la tarjeta de la empresa.

- ❌ **Incorrecto:** Registrar como "Gasto de transporte del negocio"
- ✅ **Correcto:** Registrar como "Retiro del dueño" o solicitar reembolso

**¿Por qué?** El Principio de Entidad requiere separar gastos personales del negocio.

---

## Tu Compromiso con la Precisión

> "Como asistente contable, tu reputación se construye sobre la **exactitud**. Un error pequeño hoy puede convertirse en un problema grande en auditoría."

**Checklist antes de categorizar:**
- [ ] ¿Entiendo la naturaleza de esta transacción?
- [ ] ¿Tengo documentación de soporte?
- [ ] ¿Esta categoría refleja la realidad económica?
- [ ] ¿Es consistente con transacciones similares anteriores?
`
          }
        ],
        sprint: {
          title: "Sprint: Análisis de Transacciones",
          description: "Practica la categorización correcta de transacciones",
          tasks: [
            {
              id: "task-conta-1-1",
              question: "Un cliente paga $5,000 hoy por un servicio que entregarás en 3 meses. ¿Cómo lo registras bajo método devengado? Explica tu razonamiento."
            },
            {
              id: "task-conta-1-2",
              question: "El dueño compró una laptop de $1,500 para el negocio pero la pagó con su tarjeta personal. Describe los asientos contables necesarios."
            },
            {
              id: "task-conta-1-3",
              question: "Identifica el error en esta categorización: 'Compra de camioneta de reparto por $25,000 registrada como Gasto de transporte'. ¿Cómo debería registrarse correctamente?"
            }
          ]
        },
        exam: {
          title: "Examen: Fundamentos Contables",
          description: "Evalúa tu comprensión de los conceptos base de contabilidad",
          passingScore: 70,
          questions: [
            { id: "q1", question: "En el método de caja, ¿cuándo se registra un ingreso?", options: ["Cuando se emite la factura", "Cuando se recibe el dinero efectivamente", "Cuando el cliente confirma recepción del producto", "Al final del mes contable"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué método refleja mejor la realidad económica de un negocio con muchas ventas a crédito?", options: ["Método de caja", "Método mixto", "Método de devengado", "Método de inventario"], correctAnswer: 2 },
            { id: "q3", question: "¿Qué establece el Principio de Entidad en GAAP?", options: ["Que todas las entidades deben usar el mismo software", "Que el negocio es una entidad separada de su dueño", "Que solo entidades grandes necesitan contabilidad", "Que las entidades deben reportar anualmente"], correctAnswer: 1 },
            { id: "q4", question: "Una transacción mal categorizada puede causar:", options: ["Solo errores estéticos en reportes", "Problemas en impuestos, análisis y toma de decisiones", "Únicamente multas menores", "No tiene consecuencias reales"], correctAnswer: 1 },
            { id: "q5", question: "El Principio de Consistencia significa:", options: ["Todos los contadores deben usar los mismos métodos", "Mantener los mismos métodos contables período a período", "Ser consistente en los horarios de trabajo", "Usar siempre el mismo software"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-2",
        title: "La Conciliación Manual en Excel",
        description: "Domina el cruce manual de datos y detección de errores",
        icon: "FileSpreadsheet",
        lessons: [
          {
            id: "lesson-conta-2-1",
            title: "Fundamentos de Conciliación Bancaria",
            duration: "25 min",
            content: `# La Conciliación Manual en Excel

## ¿Por Qué No Confiar Ciegamente en la Automatización?

Los bancos y software contables ofrecen conciliación automática, pero **ningún sistema es perfecto**. Razones para dominar la conciliación manual:

- Transacciones duplicadas que el sistema no detecta
- Fechas desfasadas entre banco y libros
- Errores de importación de datos
- Cheques pendientes de cobro
- Depósitos en tránsito

---

## La Conciliación: Tu Momento de Verdad

> La conciliación bancaria es donde demuestras tu valor. Es el proceso de hacer que el **saldo del banco coincida con el saldo en libros**, identificando y explicando cada diferencia.

---

## Conceptos Fundamentales

### Cheque en Tránsito (Outstanding Check)

**Definición:** Un cheque que ya registraste en tus libros contables, pero que el banco aún no ha procesado porque el beneficiario no lo ha cobrado.

| Aspecto | Detalle |
|---------|---------|
| **Saldo en banco** | Mayor que libros |
| **Acción** | Restar del saldo bancario en conciliación |
| **¿Es error?** | NO, es diferencia de timing |

**Ejemplo:** Emitiste cheque de $200 el 28 de enero. En tus libros ya está registrado (saldo = $9,800), pero el proveedor lo depositó hasta febrero. El banco muestra $10,000.

---

### Depósitos en Tránsito

Depósitos que ya registraste en libros pero el banco aún no acreditó (por ejemplo, depósitos hechos después del horario de corte).

| Aspecto | Detalle |
|---------|---------|
| **Saldo en banco** | Menor que libros |
| **Acción** | Sumar al saldo bancario en conciliación |
| **¿Es error?** | NO, es diferencia de timing |

---

## El Cuadre Final

Tu conciliación debe mostrar:

**Formato estándar:**

- Saldo según banco: $XX,XXX.XX
- (+) Depósitos en tránsito: $X,XXX.XX
- (-) Cheques en tránsito: $X,XXX.XX
- (=) Saldo conciliado: $XX,XXX.XX
- (=) Saldo según libros: $XX,XXX.XX ✓

> **Recuerda:** Una diferencia de $0.01 es tan importante como una de $10,000. Ambas indican que algo no está bien.
`
          },
          {
            id: "lesson-conta-2-2",
            title: "Técnicas de Cruce en Excel y Detección de Errores",
            duration: "30 min",
            content: `# Técnicas de Cruce en Excel

## Preparación de Datos

**Columnas necesarias:**
- Fecha
- Descripción
- Monto (Débito/Crédito)
- Saldo
- Estado (Conciliado/Pendiente)

---

## Funciones Clave de Excel

| Función | Uso | Ejemplo |
|---------|-----|---------|
| **BUSCARV (VLOOKUP)** | Encontrar transacciones coincidentes | =BUSCARV(A2,Banco!A:D,4,FALSO) |
| **SUMAR.SI** | Totalizar por categoría | =SUMAR.SI(B:B,"Cheque",C:C) |
| **COINCIDIR** | Identificar posición de valores | =COINCIDIR(A2,Banco!A:A,0) |
| **CONTAR.SI** | Detectar duplicados | =CONTAR.SI(A:A,A2) |
| **Formato Condicional** | Resaltar discrepancias | Valores >1 en rojo |

---

## Proceso Paso a Paso

1. **Importa** el estado de cuenta bancario
2. **Exporta** el libro mayor de la cuenta de banco
3. **Ordena** ambos por fecha y monto
4. **Cruza** usando BUSCARV o COINCIDIR
5. **Marca** las transacciones que coinciden
6. **Investiga** las que no coinciden
7. **Documenta** las diferencias encontradas

---

## Errores Comunes y Cómo Detectarlos

### Error de Transposición

**Definición:** Los dígitos de un número se invierten al escribirlos.

| Real | Registrado | Diferencia |
|------|------------|------------|
| $5,400 | $4,500 | $900 |
| $1,234 | $1,324 | $90 |

> **Truco profesional:** Si la diferencia es divisible exactamente entre 9, probablemente sea transposición.

---

### Cargos Bancarios No Registrados

**Escenario:** Aparece cargo de $500 en banco pero no en libros. Es un seguro anual automático.

**Acción correcta:**
1. Identifica el cargo desconocido
2. Investiga su origen (contacta al cliente si necesario)
3. Registra el gasto en la categoría correcta
4. Adjunta documentación de soporte
5. Notifica al cliente sobre cargos automáticos que olvidó

> ⚠️ **NUNCA** borres transacciones del banco ni las ignores.

---

## La Trampa de la "Diferencia Cero"

> ⚠️ **Advertencia Crítica:** Que tu conciliación muestre diferencia de cero **NO significa que terminaste**. Debes revisar la **antigüedad** de las transacciones pendientes.

### El Problema de Transacciones Antiguas

Si tienes transacciones "pendientes de conciliar" de hace meses o años:
- Cheques que nunca se cobraron (posible write-off)
- Errores de duplicación antiguos
- Transacciones fantasma que distorsionan registros

**Recomendación:** Investiga cualquier transacción pendiente de más de 90 días. Propón al cliente limpiar partidas obsoletas mediante ajustes contables (write-offs).
`
          }
        ],
        sprint: {
          title: "Sprint: Conciliación Práctica",
          description: "Aplica técnicas de conciliación bancaria",
          tasks: [
            {
              id: "task-conta-2-1",
              question: "El saldo del banco es $10,000 y el de libros es $9,800. Encontraste un cheque emitido hace 2 meses por $200 que el proveedor no ha cobrado. ¿Cómo clasificas esta diferencia y qué recomiendas al cliente?"
            },
            {
              id: "task-conta-2-2",
              question: "Al conciliar, encuentras dos cargos idénticos de $150 al mismo proveedor con la misma fecha. ¿Cuál es tu proceso de investigación?"
            },
            {
              id: "task-conta-2-3",
              question: "La diferencia en tu conciliación es de $63. ¿Qué tipo de error sospechas y por qué? (Pista: piensa en divisibilidad)"
            }
          ]
        },
        exam: {
          title: "Examen: Conciliación Bancaria",
          description: "Evalúa tus habilidades de conciliación",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Un cargo aparece en el banco pero NO en libros. Es un seguro anual automático. ¿Qué haces?", options: ["Ignorarlo hasta el próximo mes", "Registrar el gasto inmediatamente en libros y adjuntar comprobante", "Borrar la transacción del banco"], correctAnswer: 1 },
            { id: "q2", question: "El saldo del banco es $10,000 y libros $9,800. La diferencia de $200 es un cheque emitido hace 3 meses sin cobrar. ¿Cómo se clasifica?", options: ["Un error del banco", "Un cheque en tránsito (Outstanding Check)", "Un ingreso no registrado"], correctAnswer: 1 },
            { id: "q3", question: "Encuentras dos cargos idénticos de $150 al mismo proveedor con la misma fecha. ¿Qué es lo más probable?", options: ["Cargo duplicado por error; alertar al cliente para solicitar reembolso", "Seguro compró dos cosas iguales; registras doble", "Borras uno sin consultar"], correctAnswer: 0 },
            { id: "q4", question: "El cliente registró depósito de $4,500 pero el banco muestra $5,400. La diferencia es $900. ¿Qué tipo de error es?", options: ["Error de omisión", "Error de transposición (inversión de números)", "Fraude bancario"], correctAnswer: 1 },
            { id: "q5", question: "Tu conciliación muestra diferencia cero, pero hay transacciones de hace más de un año sin conciliar. ¿Qué recomiendas?", options: ["Dejarlas ahí para siempre", "Investigar y proponer al cliente limpiarlas (Write-off)", "Cambiarles la fecha al día de hoy"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-3",
        title: "Gestión de Cartera (Cuentas por Cobrar)",
        description: "Seguimiento de facturas, etiqueta de cobro y reportes de antigüedad",
        icon: "Receipt",
        lessons: [
          {
            id: "lesson-conta-3-1",
            title: "El Dinero que Te Deben",
            duration: "20 min",
            content: `# Gestión de Cartera (Cuentas por Cobrar - A/R)

## El Dinero que Te Deben: Tu Responsabilidad

Las Cuentas por Cobrar (Accounts Receivable o A/R) representan el dinero que los clientes deben al negocio. Una gestión deficiente de A/R puede **quebrar empresas rentables** por falta de liquidez.

---

## El Impacto Real

> "Una venta no está completa hasta que el dinero está en el banco."

**La paradoja del negocio rentable pero quebrado:**
- Muchos negocios muestran utilidades en papel
- Pero no pueden pagar sus obligaciones
- Porque el dinero está "atrapado" en facturas sin cobrar

---

## Sistema de Alertas por Antigüedad

| Días Vencido | Prioridad | Acción Requerida |
|--------------|-----------|------------------|
| **1-15 días** | Normal | Recordatorio amable |
| **16-30 días** | Media | Llamada de seguimiento |
| **31-60 días** | Alta | Comunicación formal |
| **61-90 días** | Crítica | Escalamiento a gerencia |
| **+90 días** | Urgente | Evaluar provisión de incobrable |

---

## La Etiqueta de Cobro: Cómo Cobrar Sin Perder al Cliente

> El cobro es un arte. Un mal manejo puede dañar relaciones comerciales valiosas.

### Principios del Cobro Profesional

1. **Ser firme pero respetuoso**
2. **Documentar cada comunicación**
3. **Ofrecer soluciones, no solo presión**
4. **Mantener la relación comercial**

---

## Plantillas de Comunicación

### Primer Recordatorio (1-15 días)

> "Estimado [Cliente], esperamos que todo esté bien. Le recordamos amablemente que la factura #XXX por $X,XXX venció el [fecha]. ¿Podemos ayudarle con algo para procesar el pago?"

### Seguimiento Formal (30+ días)

> "Estimado [Cliente], notamos que la factura #XXX permanece pendiente desde hace [X] días. Entendemos que pueden surgir situaciones, ¿podemos acordar un plan de pago que funcione para ambos?"

### Escalamiento (60+ días)

> "Estimado [Cliente], hemos intentado comunicarnos respecto a la factura #XXX de $X,XXX con [X] días de retraso. Es importante resolver esta situación esta semana para evitar afectar nuestra relación comercial. Por favor contáctenos hoy."
`
          },
          {
            id: "lesson-conta-3-2",
            title: "Aging Reports e Indicadores Clave",
            duration: "20 min",
            content: `# Reportes de Antigüedad e Indicadores

## El Aging Report: Tu Mapa del Tesoro

El Aging Report muestra exactamente dónde está el dinero pendiente y su antigüedad.

---

## Estructura del Reporte

| Cliente | Actual | 1-30 | 31-60 | 61-90 | +90 | Total |
|---------|--------|------|-------|-------|-----|-------|
| Cliente A | $500 | $0 | $200 | $0 | $0 | $700 |
| Cliente B | $0 | $300 | $0 | $150 | $100 | $550 |
| Cliente C | $1,000 | $0 | $0 | $0 | $0 | $1,000 |
| **TOTAL** | **$1,500** | **$300** | **$200** | **$150** | **$100** | **$2,250** |

---

## Indicadores Clave (KPIs)

### DSO (Days Sales Outstanding)

**Definición:** Días promedio que toma cobrar las facturas.

**Fórmula:** (Cuentas por Cobrar / Ventas a Crédito) × Días del período

| DSO | Interpretación |
|-----|----------------|
| < 30 días | Excelente gestión de cobro |
| 30-45 días | Normal para muchas industrias |
| 45-60 días | Área de mejora |
| > 60 días | Problema serio de cobranza |

---

### Índice de Morosidad

**Fórmula:** (Cartera Vencida / Cartera Total) × 100

| Índice | Interpretación |
|--------|----------------|
| < 5% | Saludable |
| 5-15% | Atención requerida |
| 15-30% | Problema significativo |
| > 30% | Crisis de cobranza |

---

### Efectividad de Cobro

**Fórmula:** (Monto Recuperado / Monto Vencido) × 100

---

## Tu Rol Proactivo

> No esperes a que el cliente pague. **Anticipa, comunica y facilita** el proceso de cobro.

### Acciones Proactivas

1. **Envía recordatorio 3 días ANTES del vencimiento**
2. **Ofrece múltiples métodos de pago**
3. **Detecta patrones de morosidad por cliente**
4. **Sugiere políticas de crédito más estrictas si es necesario**
5. **Presenta el Aging Report mensualmente al cliente con análisis**

---

## Escenario de Alerta

**Situación:** El 40% de la cartera tiene más de 60 días vencida.

**Tu recomendación:**

> "Esto representa un riesgo significativo para el flujo de caja. Sugiero: (1) Contactar a estos clientes esta semana, (2) Considerar provisionar un % como incobrable, (3) Revisar la política de crédito para nuevos clientes."
`
          }
        ],
        sprint: {
          title: "Sprint: Gestión de Cobranza",
          description: "Practica técnicas de seguimiento de cartera",
          tasks: [
            {
              id: "task-conta-3-1",
              question: "Redacta un mensaje de cobro para una factura de $3,500 con 45 días de vencida. El cliente ha sido buen pagador históricamente."
            },
            {
              id: "task-conta-3-2",
              question: "El DSO de tu cliente es de 65 días cuando el promedio de la industria es 35 días. ¿Qué 3 acciones específicas recomendarías implementar?"
            },
            {
              id: "task-conta-3-3",
              question: "Crea un mini Aging Report con 5 clientes ficticios y calcula el índice de morosidad. Incluye recomendaciones basadas en tu análisis."
            }
          ]
        },
        exam: {
          title: "Examen: Cuentas por Cobrar",
          description: "Evalúa tu comprensión de la gestión de cartera",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Por qué un negocio con utilidades puede tener problemas de liquidez?", options: ["Porque los reportes están mal", "Porque el dinero está atrapado en cuentas por cobrar sin cobrar", "Porque paga muchos impuestos", "Porque tiene demasiados empleados"], correctAnswer: 1 },
            { id: "q2", question: "Una factura tiene 45 días de vencida. ¿Cuál es la acción apropiada?", options: ["Enviar recordatorio amable por email", "Ignorarla hasta que cumpla 60 días", "Comunicación formal y seguimiento directo", "Enviarla directamente a cobranza legal"], correctAnswer: 2 },
            { id: "q3", question: "¿Qué significa DSO (Days Sales Outstanding)?", options: ["Días de stock en bodega", "Días promedio que toma cobrar las facturas", "Descuento por ventas ocasionales", "Días sin operaciones"], correctAnswer: 1 },
            { id: "q4", question: "Al comunicarte con un cliente moroso, ¿cuál es el mejor enfoque?", options: ["Amenazar con acciones legales inmediatamente", "Ignorar la situación", "Ser firme pero respetuoso, ofreciendo soluciones", "Dejar de proveer servicios sin aviso"], correctAnswer: 2 },
            { id: "q5", question: "El Aging Report muestra 40% de cartera con más de 60 días vencida. ¿Qué indica?", options: ["Es normal en cualquier negocio", "Problema serio de gestión de cobro que requiere acción inmediata", "El negocio es muy exitoso", "Los clientes son muy confiables"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-4",
        title: "Investigación Analítica y Cierre de Mes",
        description: "Checklist de cierre, investigación de transacciones y validación",
        icon: "CheckSquare",
        lessons: [
          {
            id: "lesson-conta-4-1",
            title: "El Checklist de Cierre Mensual",
            duration: "25 min",
            content: `# Investigación Analítica y Cierre de Mes Integral

## El Cierre: Tu Momento de Brillar

El cierre de mes no es solo "cerrar los libros". Es tu oportunidad de demostrar profesionalismo, atención al detalle y valor agregado.

---

## El Checklist de Cierre Mensual

### Semana 1 del Mes Siguiente

**Transacciones:**
- [ ] Conciliación bancaria completada
- [ ] Todas las facturas de venta registradas
- [ ] Facturas de proveedores ingresadas
- [ ] Tarjetas de crédito conciliadas
- [ ] Nómina registrada correctamente

**Validaciones Críticas:**
- [ ] No hay transacciones en "Ask my Accountant"
- [ ] Cuentas de balance cuadradas
- [ ] Ingresos clasificados correctamente
- [ ] Gastos en las categorías apropiadas
- [ ] Préstamos y pagos alineados

---

## Validación de Saldos de Balance

| Cuenta | Debe ser igual a |
|--------|------------------|
| Bancos | Estado de cuenta conciliado |
| Cuentas por Cobrar | Suma de facturas pendientes |
| Cuentas por Pagar | Suma de facturas por pagar |
| Préstamos | Saldo según acreedor |
| Tarjetas de Crédito | Estado de cuenta |

---

## Señales de Alerta

⚠️ **Investiga inmediatamente si ves:**

- Saldos negativos donde no deberían existir
- Diferencias con meses anteriores sin explicación
- Cuentas con movimiento inusual
- Transacciones grandes sin documentar
- La cuenta "Ask my Accountant" con saldo

---

## Mentalidad de Cierre

> "No cierro el mes hasta estar 100% seguro de que los números cuentan la historia correcta."

**Tu compromiso:**
- Cada transacción tiene categoría correcta
- Cada saldo es verificable
- Cada diferencia está explicada
- Cada anomalía está documentada
`
          },
          {
            id: "lesson-conta-4-2",
            title: "Investigación de Transacciones Sin Clasificar",
            duration: "20 min",
            content: `# Investigación de Transacciones Sin Clasificar

## La Cuenta "Ask my Accountant"

Esta cuenta (o equivalente) es donde van las transacciones que no se pudieron clasificar.

> ⚠️ **Esta cuenta debe estar en $0 al cerrar el mes.**

---

## Proceso de Investigación

### Paso 1: Identificar
Lista todas las transacciones pendientes de clasificar.

### Paso 2: Buscar Documentación
- Revisa emails del cliente
- Busca facturas o recibos
- Consulta estados de cuenta

### Paso 3: Contactar al Cliente
Si no encuentras información, prepara preguntas específicas:
- ¿Quién es el beneficiario/pagador?
- ¿Cuál fue el propósito de la transacción?
- ¿Hay factura o recibo de soporte?
- ¿Es recurrente o extraordinario?
- ¿Afecta impuestos de alguna manera?

### Paso 4: Clasificar Correctamente
Con la información obtenida, asigna la categoría apropiada.

### Paso 5: Documentar
Guarda la explicación y soporte para futuras referencias.

---

## Errores Comunes a Evitar

| Error | Consecuencia | Solución |
|-------|--------------|----------|
| Clasificar en "Misceláneos" | Pierde visibilidad del gasto | Investigar y categorizar correctamente |
| Asumir la categoría | Puede ser incorrecto | Siempre verificar con cliente |
| Dejar para después | Se acumula y se olvida | Resolver antes de cerrar el mes |
| No documentar | Se repetirá el problema | Crear nota para el futuro |

---

## El Reporte de Cierre

Al finalizar, prepara un resumen ejecutivo:

**REPORTE DE CIERRE - [MES/AÑO]**

**Hallazgos Importantes:**
1. [Descripción del hallazgo 1]
2. [Descripción del hallazgo 2]

**Transacciones Pendientes de Confirmación:** X

**Ajustes Realizados:** X

**Recomendaciones para el Próximo Mes:**
- [Recomendación 1]
- [Recomendación 2]

**Status:** CERRADO / PENDIENTE
`
          }
        ],
        sprint: {
          title: "Sprint: Cierre de Mes",
          description: "Practica el proceso de cierre mensual",
          tasks: [
            {
              id: "task-conta-4-1",
              question: "Crea tu propio checklist de cierre mensual personalizado con al menos 15 items, organizados por categoría (bancos, facturación, nómina, etc.)."
            },
            {
              id: "task-conta-4-2",
              question: "Hay una transacción de $2,500 en 'Ask my Accountant' con descripción 'TRF DIGITAL'. Describe tu proceso completo de investigación."
            },
            {
              id: "task-conta-4-3",
              question: "Redacta el template de tu Reporte de Cierre mensual que enviarías al cliente, incluyendo todas las secciones necesarias."
            }
          ]
        },
        exam: {
          title: "Examen: Cierre Mensual",
          description: "Evalúa tu proceso de cierre de mes",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál debe ser el saldo de 'Ask my Accountant' al cerrar el mes?", options: ["Puede tener cualquier saldo razonable", "Debe ser $0 - todas las transacciones clasificadas", "Depende del tamaño del negocio", "Solo importa al cierre anual"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuál es el primer paso al investigar una transacción sin clasificar?", options: ["Clasificarla en gastos varios", "Eliminarla del sistema", "Identificarla y buscar documentación de soporte", "Esperar a que el cliente pregunte"], correctAnswer: 2 },
            { id: "q3", question: "El saldo de Cuentas por Cobrar debe ser igual a:", options: ["El total de ventas del mes", "La suma de todas las facturas pendientes de cobro", "El saldo bancario", "Las utilidades del período"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué indica un saldo negativo en la cuenta de bancos?", options: ["Es normal en ciertos negocios", "Hay un error de registro o sobregiro que debe investigarse", "El banco cometió un error", "Se pagaron muchos impuestos"], correctAnswer: 1 },
            { id: "q5", question: "El checklist de cierre mensual debe incluir:", options: ["Solo la conciliación bancaria", "Conciliación, registro de facturas, tarjetas, nómina y validación de cuentas", "Únicamente el cálculo de impuestos", "La firma del contador certificado"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-5",
        title: "Análisis de Variación (P&L vs. Presupuesto)",
        description: "Comparar real vs. planeado e identificar fugas de dinero",
        icon: "TrendingUp",
        lessons: [
          {
            id: "lesson-conta-5-1",
            title: "El Arte de Explicar los Números",
            duration: "25 min",
            content: `# Análisis de Variación (P&L vs. Presupuesto)

## El Arte de Explicar los Números

Un Estado de Resultados (P&L - Profit & Loss) cuenta una historia. Tu trabajo es **descifrar esa historia** y comunicarla de manera que el cliente pueda tomar acción.

---

## ¿Qué es el Análisis de Variación?

Es la comparación entre:
- **Lo Real:** Lo que efectivamente ocurrió
- **Lo Planeado:** El presupuesto o expectativa

La diferencia entre ambos es la **variación**, y tu trabajo es explicar el **por qué**.

---

## Tipos de Variaciones

| Tipo | Significado | Color Típico | Ejemplo |
|------|-------------|--------------|---------|
| **Favorable** | Mejor que lo esperado | Verde | Gastos menores al presupuesto |
| **Desfavorable** | Peor que lo esperado | Rojo | Ingresos menores al plan |

---

## Cálculo de Variación

**Variación Absoluta:** Real - Presupuesto

**Variación Porcentual:** (Variación / Presupuesto) × 100

**Regla general:** Investiga variaciones mayores al 10% o montos absolutos significativos.

---

## Preguntas Clave para Investigar

1. ¿Fue un evento único o recurrente?
2. ¿Es una diferencia de timing?
3. ¿Hay un error de clasificación (CAPEX vs OPEX)?
4. ¿Falta algún accrual?
5. ¿Hay factores externos que lo expliquen?

---

## Comunicación al Cliente

> El cliente no quiere un reporte técnico. Quiere **respuestas claras**.

### Estructura de Explicación

1. **Resumen ejecutivo:** "Este mes tuviste $X más/menos de utilidad que lo planeado"
2. **Factores principales:** "Las 3 razones más importantes son..."
3. **Recomendaciones:** "Para el próximo mes, sugiero..."

### Ejemplo de Comunicación Efectiva

❌ **Mal:** "La variación en gastos operativos fue de -$3,500 representando un 15% desfavorable sobre el presupuesto de la categoría 6200."

✅ **Bien:** "Gastaste $3,500 más de lo planeado en operaciones, principalmente por la reparación de emergencia del aire acondicionado. Esto fue un evento único que no debería repetirse."
`
          },
          {
            id: "lesson-conta-5-2",
            title: "Timing, CAPEX vs OPEX y Accruals",
            duration: "30 min",
            content: `# Conceptos Clave para el Análisis

## Timing Difference (Diferencia Temporal)

**Definición:** Un gasto grande se paga en un solo mes, pero su beneficio se extiende a varios meses.

### Ejemplo Clásico

| Concepto | Valor |
|----------|-------|
| Presupuesto de Marketing mensual | $2,000 |
| Gasto real en Marzo | $5,000 |
| Razón | Pagó campaña anual completa |
| ¿Es problema? | **NO**, es diferencia de timing |

**Cómo explicarlo:** "Es una variación temporal. El gasto es alto ahora pero será $0 los próximos meses. En el año, estarás dentro del presupuesto."

---

## CAPEX vs. OPEX: Clasificación Crítica

| Concepto | Significado | Ejemplos | Tratamiento |
|----------|-------------|----------|-------------|
| **CAPEX** | Gastos que se convierten en activos | Computadoras, muebles, maquinaria | Activo Fijo → Depreciar |
| **OPEX** | Gastos operativos del día a día | Reparaciones, suministros, servicios | Gasto del período |

### Error Grave Común

❌ Clasificar una computadora Mac de $2,500 como "Reparación de Oficina"

**Impacto del error:**
- Infla los gastos del mes artificialmente
- Distorsiona análisis de variación (300% de aumento en "Reparaciones")
- Afecta la toma de decisiones del cliente

**Solución:** Mover a Activos Fijos y depreciar según vida útil.

---

## Accruals (Devengados)

**Definición:** Registrar un gasto (o ingreso) en el mes que **ocurre**, aunque se **pague** después.

### Ejemplo de Nómina

| Concepto | Detalle |
|----------|---------|
| Nómina de última semana de Enero | Se paga el 5 de Febrero |
| ¿Cuándo se registra el gasto? | En **Enero** (cuando se trabajó) |
| Si no hay accrual | Enero parece más rentable de lo real |

**Por qué importa:** Si ves variación "favorable" en nómina, verifica si falta registrar un accrual. Puede que no sea buena noticia, sino registro incompleto.

---

## La Paradoja: Alta Utilidad pero Sin Efectivo

> **Concepto Crítico:** Tener ventas altas y utilidades altas **NO garantiza** tener dinero en el banco.

**El diagnóstico:**
- Cliente tiene alta "Utilidad Neta" pero no puede pagar sus cuentas
- Revisas el Balance: ¿Aumentaron las "Cuentas por Cobrar"?
- Significa: Ventas registradas (en papel) pero no cobradas (en efectivo)

**Tu recomendación:** "Tienes un problema de **cobranza**, no de ventas. Hay que gestionar las Cuentas por Cobrar."
`
          }
        ],
        sprint: {
          title: "Sprint: Análisis de Variación",
          description: "Practica el análisis y explicación de variaciones",
          tasks: [
            {
              id: "task-conta-5-1",
              question: "El presupuesto de Suministros era $500 pero el gasto real fue $2,800. Al revisar, ves una compra de laptop de $2,300. Explica el error y cómo corregirlo con términos que el cliente entienda."
            },
            {
              id: "task-conta-5-2",
              question: "Crea una tabla de variaciones para 5 categorías de gastos (inventadas) con: presupuesto, real, variación absoluta, variación %, y una explicación breve para cada una."
            },
            {
              id: "task-conta-5-3",
              question: "El cliente dice 'Tengo muchas ganancias pero no tengo dinero'. ¿Cómo le explicas esta paradoja y qué le recomiendas investigar?"
            }
          ]
        },
        exam: {
          title: "Examen: Análisis de Variación",
          description: "Evalúa tu capacidad de análisis financiero",
          passingScore: 70,
          questions: [
            { id: "q1", question: "El presupuesto de Marketing era $2,000 pero el gasto fue $5,000 por una campaña anual. ¿Cómo explicas esta variación?", options: ["Gastaste demasiado, hay que cortar gastos", "Es una variación temporal; será $0 los próximos meses", "Alguien cometió un error contable"], correctAnswer: 1 },
            { id: "q2", question: "Una computadora Mac de $2,500 está clasificada como 'Reparaciones de Oficina'. ¿Cuál es el error?", options: ["Error de clasificación CAPEX vs OPEX; debe ir a Activos Fijos", "No hay error, es una reparación costosa", "Debes aumentar el presupuesto de reparaciones"], correctAnswer: 0 },
            { id: "q3", question: "Ingresos están 20% abajo y Costo de Ventas también 20% abajo. ¿Qué indica?", options: ["La eficiencia se mantiene; la baja en costos es coherente con la baja en ventas", "El negocio está perdiendo dinero por robo", "Los proveedores bajaron los precios"], correctAnswer: 0 },
            { id: "q4", question: "El cliente tiene alta Utilidad Neta pero poco dinero en banco, y las Cuentas por Cobrar aumentaron. ¿Cuál es tu diagnóstico?", options: ["El banco escondió el dinero", "Hay ventas registradas pero no cobradas; problema de cobranza", "La contabilidad está mal hecha"], correctAnswer: 1 },
            { id: "q5", question: "Hay variación 'favorable' en Nómina pero contrataron gente nueva. ¿Qué investigas?", options: ["Nada, es buena noticia", "Si falta procesar quincena o hay accruals pendientes", "Pedir un bono por ahorro"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-6",
        title: "Gestión de Cuentas por Pagar y Flujo de Caja",
        description: "Organización de facturas, programación de pagos y liquidez",
        icon: "CreditCard",
        lessons: [
          {
            id: "lesson-conta-6-1",
            title: "El Otro Lado de la Moneda: A/P",
            duration: "20 min",
            content: `# Gestión de Cuentas por Pagar (A/P) y Flujo de Caja

## El Otro Lado de la Moneda

Si las Cuentas por Cobrar son el dinero que te deben, las **Cuentas por Pagar (A/P)** son el dinero que debes.

---

## Beneficios de una Gestión Inteligente de A/P

- ✅ Mantener buenas relaciones con proveedores
- ✅ Evitar cargos por mora
- ✅ Optimizar el flujo de caja
- ✅ Aprovechar descuentos por pronto pago

---

## Sistema de Gestión de Facturas

| Etapa | Descripción |
|-------|-------------|
| **1. Recepción** | Fecha de ingreso al sistema |
| **2. Verificación** | Confirmar que el servicio/producto fue recibido |
| **3. Aprobación** | Autorización para pago |
| **4. Programación** | Fecha de pago planificada |
| **5. Ejecución** | Pago realizado |
| **6. Archivo** | Documentación guardada |

---

## Información Clave por Factura

**Datos esenciales a registrar:**
- Número de factura
- Proveedor
- Fecha de emisión
- Fecha de vencimiento
- Monto
- Términos de pago (Net 30, 2/10 Net 30, etc.)
- Estado (Pendiente/Programada/Pagada)

---

## Términos de Pago Comunes

| Término | Significado |
|---------|-------------|
| **Net 30** | Pago total en 30 días |
| **Net 60** | Pago total en 60 días |
| **2/10 Net 30** | 2% descuento si pagas en 10 días, o total en 30 |
| **COD** | Contra entrega (Cash on Delivery) |
| **CIA** | Pago anticipado (Cash in Advance) |

---

## Ejemplo: Descuento 2/10 Net 30

**Situación:** Factura de $10,000 con términos 2/10 Net 30

| Opción | Monto a Pagar | Cuándo |
|--------|---------------|--------|
| Con descuento | $9,800 | En 10 días |
| Sin descuento | $10,000 | En 30 días |

**Ahorro:** $200

**Tasa anualizada equivalente:** ~36%

> **Decisión:** Si tienes el efectivo disponible, aprovecha el descuento.
`
          },
          {
            id: "lesson-conta-6-2",
            title: "Programación Estratégica de Pagos",
            duration: "20 min",
            content: `# Programación Estratégica de Pagos

## El Balance: No Demasiado Rápido, No Demasiado Tarde

> "No se trata de pagar lo más rápido posible, ni de retener lo más posible. Se trata de **optimizar el flujo**."

---

## Factores para Programar Pagos

| Factor | Impacto en Decisión |
|--------|---------------------|
| Descuento por pronto pago | Pagar antes si descuento > costo de oportunidad |
| Flujo de caja disponible | No comprometer liquidez operativa |
| Relación con proveedor | Proveedores críticos = prioridad |
| Términos contractuales | Respetar acuerdos |

---

## Evitando Recargos por Mora

Los cargos por pago tardío:
- ❌ Aumentan costos innecesariamente
- ❌ Dañan la relación comercial
- ❌ Pueden afectar términos futuros
- ❌ Reflejan desorganización

### Estrategia Preventiva

1. Calendario de vencimientos visible
2. Alertas 7 días antes del vencimiento
3. Revisión semanal de A/P
4. Comunicación proactiva si habrá retraso

---

## El Ciclo de Conversión de Efectivo

**Fórmula:**

Días de Inventario + Días de Cobro - Días de Pago = Ciclo de Efectivo

**Meta:** Minimizar el ciclo para tener más efectivo disponible.

### Ejemplo

| Concepto | Días |
|----------|------|
| Inventario en bodega | 30 días |
| Tiempo para cobrar ventas | 45 días |
| Tiempo para pagar proveedores | 30 días |
| **Ciclo de Efectivo** | **45 días** |

---

## Reportes Clave de A/P

1. **Aging de A/P:** Similar al de A/R, muestra antigüedad de deudas
2. **Forecast de Pagos:** Proyección de salidas de efectivo
3. **Vendor Summary:** Resumen por proveedor

---

## Comunicación Proactiva

**Si vas a retrasarte en un pago:**

> "Estimado [Proveedor], le escribo para informarle que tendremos un retraso de [X] días en el pago de la factura #XXX. Estamos trabajando para resolver la situación y esperamos completar el pago el [fecha]. Agradecemos su comprensión y nos disculpamos por cualquier inconveniente."

**SIEMPRE:** Comunica ANTES de que venza, no después.
`
          }
        ],
        sprint: {
          title: "Sprint: Gestión de Pagos",
          description: "Practica la programación estratégica de pagos",
          tasks: [
            {
              id: "task-conta-6-1",
              question: "Tienes una factura de $5,000 con términos 2/10 Net 30. Calcula: (a) ahorro con descuento, (b) tasa anualizada equivalente del descuento, (c) tu recomendación si el cliente tiene $6,000 en banco."
            },
            {
              id: "task-conta-6-2",
              question: "Crea un calendario de pagos para la próxima semana con 5 facturas ficticias, priorizadas según criterios estratégicos. Explica tu razonamiento."
            },
            {
              id: "task-conta-6-3",
              question: "Redacta un mensaje proactivo a un proveedor avisando que el pago se retrasará 10 días, ofreciendo una solución parcial."
            }
          ]
        },
        exam: {
          title: "Examen: Cuentas por Pagar",
          description: "Evalúa tu gestión de pagos a proveedores",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Un proveedor ofrece '2/10 Net 30'. ¿Qué significa?", options: ["Pagar 2% ahora y el resto en 10 días", "2% de descuento si pagas en 10 días, total completo si pagas en 30", "Pagar en 2 cuotas", "El precio aumenta 2% después de 10 días"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuál es el riesgo de pagar todas las facturas inmediatamente?", options: ["No hay ningún riesgo", "Puede comprometer la liquidez operativa del negocio", "Los proveedores pueden desconfiar", "Es ilegal en algunos países"], correctAnswer: 1 },
            { id: "q3", question: "El Ciclo de Conversión de Efectivo mide:", options: ["La velocidad del software contable", "El tiempo entre pagar a proveedores y cobrar a clientes", "La cantidad de cuentas bancarias", "El número de empleados en finanzas"], correctAnswer: 1 },
            { id: "q4", question: "Si vas a retrasarte en un pago, la mejor práctica es:", options: ["Ignorar las llamadas del proveedor", "Comunicar proactivamente ANTES del vencimiento y negociar", "Pagar una parte sin avisar", "Esperar a que te demanden"], correctAnswer: 1 },
            { id: "q5", question: "¿Por qué verificar que el producto/servicio fue recibido antes de aprobar una factura?", options: ["Es solo formalismo burocrático", "Para evitar pagar por algo no recibido, duplicados o errores", "Porque el proveedor lo exige", "Solo aplica para compras grandes"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-7",
        title: "Proyección de Flujo de Caja (Forecasting)",
        description: "Mirar al futuro, prevenir déficits y tomar decisiones basadas en datos",
        icon: "LineChart",
        lessons: [
          {
            id: "lesson-conta-7-1",
            title: "Mirar al Futuro: Tu Superpoder Contable",
            duration: "25 min",
            content: `# Proyección de Flujo de Caja (Forecasting)

## Mirar al Futuro: Tu Superpoder Contable

La diferencia entre un asistente contable común y uno excepcional es la capacidad de **ver hacia adelante**. El forecasting de flujo de caja te permite anticipar problemas y oportunidades.

---

## ¿Qué es el Cash Flow Forecast?

Es una proyección de:
- **Cuánto dinero entrará** (y cuándo)
- **Cuánto dinero saldrá** (y cuándo)
- **El saldo resultante** en cada período

---

## El Modelo de 13 Semanas (13-Week Cash Flow)

> **¿Por qué 13 semanas?** Es el período más **accionable** para identificar y resolver crisis de corto plazo. Proyectar a un año es útil para planificación estratégica, pero las decisiones de supervivencia se toman semana a semana.

### Ventajas del Modelo de 13 Semanas

| Característica | Beneficio |
|----------------|-----------|
| Horizonte trimestral | Suficiente para ver patrones |
| Detalle semanal | Precisión para detectar semanas críticas |
| Actualización constante | Rolling forecast que mejora |
| Accionable | Tiempo suficiente para reaccionar |

---

## Estructura Básica del Forecast

| Concepto | Sem 1 | Sem 2 | Sem 3 | ... | Sem 13 |
|----------|-------|-------|-------|-----|--------|
| **ENTRADAS** | | | | | |
| Cobros de clientes | $X | $X | $X | | $X |
| Otros ingresos | $X | $X | $X | | $X |
| **Total Entradas** | $X | $X | $X | | $X |
| **SALIDAS** | | | | | |
| Nómina | $X | $X | $X | | $X |
| Proveedores | $X | $X | $X | | $X |
| Alquiler | $X | - | - | | $X |
| Impuestos | - | - | - | | $X |
| **Total Salidas** | $X | $X | $X | | $X |
| **Flujo Neto** | $X | $X | $X | | $X |
| Saldo Inicial | $X | $X | $X | | $X |
| **SALDO FINAL** | $X | $X | $X | | $X |

---

## El Poder de Anticipar

**Escenario:** Tu proyección muestra que en Semana 4 el saldo será negativo (-$500), pero esperas un pago grande en Semana 5.

**Sin forecast:** Descubres el problema cuando el banco rechaza un pago.

**Con forecast:** Negocias con un proveedor para retrasar pago una semana, evitando la crisis.

> "El valor del forecasting es ver problemas ANTES de que ocurran."
`
          },
          {
            id: "lesson-conta-7-2",
            title: "Jerarquía de Pagos y Rentabilidad vs. Liquidez",
            duration: "25 min",
            content: `# Jerarquía de Pagos y Conceptos Críticos

## Jerarquía de Pagos en Crisis de Liquidez

> **Regla de Oro:** Cuando no hay suficiente dinero para pagar todo, la **Nómina (Payroll) siempre es prioridad** sobre proveedores.

### ¿Por Qué la Nómina es Prioritaria?

| Factor | Nómina | Proveedores |
|--------|--------|-------------|
| Obligación legal | Alta (leyes laborales) | Menor (contractual) |
| Riesgo de demandas | Inmediato y costoso | Generalmente negociable |
| Impacto moral | Empleados dependen de ti | Relación comercial |
| Flexibilidad | Poca | Alta (planes de pago) |

### Escenario Ejemplo

- Tienes **$4,000** en el banco
- Debes **$3,000** de nómina mañana
- Debes **$2,000** a un proveedor (vencido)

**Recomendación:** Asegurar la nómina primero ($3,000) y negociar plan de pago con el proveedor por los $2,000.

---

## Rentabilidad vs. Liquidez: La Diferencia Vital

> ⚠️ **Advertencia Crítica:** Ser **rentable** (tener utilidades) **NO es lo mismo** que tener **liquidez** (dinero en el banco). Puedes quebrar siendo rentable si no cobras.

### La Paradoja del Negocio Rentable pero Quebrado

**El cliente dice:** "Tengo muchas utilidades, soy rico"

**Tú miras:** Flujo Operativo negativo mes tras mes

**¿Qué significa?** El negocio genera utilidades en **papel**, pero no genera **efectivo**

### Causas Típicas

| Causa | Diagnóstico |
|-------|-------------|
| Inventario estancado | Dinero atrapado en productos sin vender |
| Cobranza lenta | Ventas registradas pero no cobradas |
| Crecimiento mal financiado | Expandirse con capital operativo |

---

## Prevenir Déficits

Un déficit proyectado no es el fin del mundo si lo ves con anticipación:

1. **Acelerar cobros:** Incentivos por pronto pago
2. **Retrasar pagos:** Negociar con proveedores (no nómina)
3. **Línea de crédito:** Activarla ANTES de necesitarla
4. **Reducir gastos:** Identificar lo no esencial
5. **Aplazar inversiones:** Si no son urgentes

---

## Tu Rol como Forecaster

No solo creas el reporte. Lo **interpretas**, **alertas** sobre riesgos y **recomiendas** acciones.

> "La intuición es valiosa, pero los datos son más confiables."

**El forecast permite responder:**
- ¿Puedo contratar a alguien nuevo?
- ¿Cuándo es el mejor momento para comprar equipo?
- ¿Necesito una línea de crédito?
- ¿Puedo tomarme vacaciones sin afectar operaciones?
`
          }
        ],
        sprint: {
          title: "Sprint: Proyección de Flujo de Caja",
          description: "Crea tu primer forecast de 13 semanas",
          tasks: [
            {
              id: "task-conta-7-1",
              question: "Crea un forecast de flujo de caja de 4 semanas para un negocio ficticio con: ingresos semanales de $5,000, nómina quincenal de $3,000, alquiler mensual de $2,000, y gastos variables de $1,500/semana. Saldo inicial: $4,000."
            },
            {
              id: "task-conta-7-2",
              question: "En el forecast anterior, identifica la semana con menor saldo y propón 3 acciones específicas para evitar un déficit."
            },
            {
              id: "task-conta-7-3",
              question: "Tu cliente tiene $4,000, debe $3,500 de nómina y $2,000 a un proveedor. Redacta tu recomendación completa incluyendo: priorización, mensaje al proveedor, y plan de seguimiento."
            }
          ]
        },
        exam: {
          title: "Examen: Proyección de Flujo de Caja",
          description: "Evalúa tu capacidad de forecasting financiero",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Tu forecast muestra saldo negativo en Semana 4 pero pago esperado en Semana 5. ¿Qué recomiendas HOY?", options: ["No te preocupes, el dinero llega después", "Negociar retrasar un pago o usar línea de crédito temporalmente", "Cerrar el negocio"], correctAnswer: 1 },
            { id: "q2", question: "El cliente quiere comprar maquinaria de $10,000 al contado, pero eso dejaría caja en $100. ¿Qué sugieres?", options: ["Comprarla de todos modos", "Financiar a plazos para no descapitalizar la operación", "No registrar la compra hasta el año siguiente"], correctAnswer: 1 },
            { id: "q3", question: "¿Por qué el modelo de 13 semanas es más confiable que proyectar a un año?", options: ["Las previsiones de cobros y pagos son más certeras y accionables a corto plazo", "Excel no permite más columnas", "Al cliente no le importa el largo plazo"], correctAnswer: 0 },
            { id: "q4", question: "Tienes $4,000, nómina de $3,000 mañana y proveedor vencido de $2,000. ¿Qué priorizas?", options: ["Pagar al proveedor y deber nómina", "Asegurar nómina primero y negociar con proveedor", "Pagar mitad y mitad"], correctAnswer: 1 },
            { id: "q5", question: "El cliente dice 'tengo muchas utilidades' pero el Flujo Operativo es negativo. ¿Qué significa?", options: ["Que el cliente tiene razón", "El negocio es rentable en papel pero no genera efectivo", "Que hay que pagar menos impuestos"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-8",
        title: "Auditoría de Nómina (Pre-Procesamiento)",
        description: "Revisión de horas, comisiones, bonos y cumplimiento de retenciones",
        icon: "Users",
        lessons: [
          {
            id: "lesson-conta-8-1",
            title: "Antes de Pagar: Revisar",
            duration: "25 min",
            content: `# Auditoría de Nómina (Pre-Procesamiento)

## Antes de Pagar: Revisar

La nómina es probablemente el gasto más grande y más sensible de cualquier negocio. Un error en nómina afecta:

- 😟 La moral de los empleados
- ⚖️ El cumplimiento legal
- 💰 Los impuestos de la empresa
- 🤝 La confianza del equipo

---

## El Pre-Procesamiento: Tu Primera Línea de Defensa

Antes de que se procese cualquier pago, tu rol es **verificar que todo esté correcto**.

---

## Checklist de Horas

- [ ] Horas regulares coinciden con registros de tiempo
- [ ] Horas extras aprobadas por supervisor
- [ ] Ausencias registradas (vacaciones, enfermedad, permisos)
- [ ] Feriados aplicados correctamente
- [ ] Tiempo de comida descontado según política

---

## Verificación de Comisiones

| Verificación | Acción |
|--------------|--------|
| Ventas cerradas | Confirmar con reporte de ventas |
| Porcentaje correcto | Verificar escala de comisiones |
| Cliente pagó | Algunas empresas pagan al cobrar |
| Período correcto | No duplicar ni omitir |

---

## Verificación de Bonos

- ¿Está autorizado por escrito?
- ¿Es recurrente o extraordinario?
- ¿Tiene implicaciones fiscales especiales?
- ¿Está dentro del presupuesto?

---

## Retenciones Obligatorias

En la mayoría de jurisdicciones:
- **Impuesto sobre la Renta** (retención según tabla)
- **Seguridad Social / FICA** (empleado y empleador)
- **Medicare** (si aplica)
- **Impuestos locales/estatales** (según ubicación)

---

## Documentación Requerida por Empleado

- Formulario de datos fiscales (W-4 o equivalente)
- Comprobante de identidad
- Autorización de depósito directo
- Registro de beneficios y deducciones

---

## Responsabilidad Compartida

> "La nómina incorrecta no es solo un error numérico; es una falla de confianza."

Aunque el procesamiento final pueda estar en manos de otro departamento, tu auditoría previa protege al negocio y a los empleados.
`
          },
          {
            id: "lesson-conta-8-2",
            title: "Señales de Alerta y Proceso de Auditoría",
            duration: "20 min",
            content: `# Señales de Alerta y Proceso de Auditoría

## Señales de Alerta en Nómina

⚠️ **Investiga inmediatamente si ves:**

| Señal | Posible Problema |
|-------|------------------|
| Empleados con horas excesivas sin aprobación | Fraude de tiempo o error de registro |
| Cambios de cuenta bancaria repentinos | Posible fraude externo |
| Nuevos empleados sin documentación completa | Riesgo legal y fiscal |
| Comisiones que no coinciden con ventas | Error o fraude de comisiones |
| Deducciones inusuales o nuevas | Verificar autorización |

---

## Proceso de Auditoría Pre-Nómina

### Paso 1: Recibir
Obtener datos de recursos humanos con tiempo suficiente.

### Paso 2: Comparar
Revisar contra período anterior para identificar variaciones.

### Paso 3: Verificar
Investigar cada variación significativa.

### Paso 4: Documentar
Registrar hallazgos y decisiones.

### Paso 5: Aprobar o Rechazar
Dar visto bueno para procesamiento o devolver para corrección.

### Paso 6: Comunicar
Informar discrepancias al responsable.

---

## Calendario de Nómina

| Día | Actividad |
|-----|-----------|
| **-5** | Recibir información |
| **-4** | Auditoría inicial |
| **-3** | Resolver discrepancias |
| **-2** | Aprobación final |
| **-1** | Procesamiento |
| **0** | Día de pago |

---

## Cambios de Cuenta Bancaria: Protocolo de Seguridad

**Escenario:** Un empleado solicita cambiar su cuenta bancaria 2 días antes del pago.

**Protocolo:**
1. **NUNCA** hagas el cambio solo por email
2. Verifica identidad del solicitante
3. Confirma DIRECTAMENTE con el empleado (llamada o en persona)
4. Documenta la confirmación
5. Si hay dudas, pospón el cambio al siguiente período

> **¿Por qué?** El fraude de desvío de nómina es común. Un tercero puede hackear el email del empleado y solicitar cambio de cuenta.

---

## Tu Valor como Auditor de Nómina

- Proteges a la empresa de errores costosos
- Proteges a los empleados de pagos incorrectos
- Aseguras cumplimiento legal
- Detectas fraudes potenciales
- Generas confianza en el proceso
`
          }
        ],
        sprint: {
          title: "Sprint: Auditoría de Nómina",
          description: "Practica la revisión de nómina antes del procesamiento",
          tasks: [
            {
              id: "task-conta-8-1",
              question: "Crea un checklist de auditoría de nómina de 15 puntos que usarías antes de aprobar el procesamiento de nómina."
            },
            {
              id: "task-conta-8-2",
              question: "Un empleado tiene 65 horas en una semana sin aprobación de horas extras. Describe paso a paso tu proceso de investigación y resolución."
            },
            {
              id: "task-conta-8-3",
              question: "Un empleado solicita cambio de cuenta bancaria por email 2 días antes del pago. Redacta el protocolo completo que seguirías, incluyendo comunicaciones."
            }
          ]
        },
        exam: {
          title: "Examen: Auditoría de Nómina",
          description: "Evalúa tus habilidades de auditoría de nómina",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Por qué es importante la auditoría pre-procesamiento de nómina?", options: ["Solo para cumplir requisito burocrático", "Para detectar errores antes del pago y mantener confianza", "Porque el software lo exige", "Solo es importante en empresas grandes"], correctAnswer: 1 },
            { id: "q2", question: "Un empleado muestra 65 horas sin aprobación de horas extras. ¿Qué debes hacer?", options: ["Pagarlo porque ya trabajó las horas", "Verificar con supervisor y solicitar aprobación antes de procesar", "Ignorarlo porque es responsabilidad de RRHH", "Reducir las horas a 40 automáticamente"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué documentación mínima debe tener cada empleado?", options: ["Solo el contrato de trabajo", "Formulario fiscal, identidad, autorización de depósito y deducciones", "Únicamente su currículum", "Solo autorización de depósito"], correctAnswer: 1 },
            { id: "q4", question: "Un empleado solicita cambiar cuenta bancaria 2 días antes del pago. ¿Qué haces?", options: ["Cambiarlo inmediatamente", "Verificar identidad y confirmar directamente con el empleado", "Ignorar la solicitud hasta próximo mes", "Solo aceptar cambios por carta notariada"], correctAnswer: 1 },
            { id: "q5", question: "Las comisiones de ventas deben verificarse contra:", options: ["Solo lo que dice el vendedor", "El reporte de ventas confirmadas y, si aplica, el cobro efectivo", "El estimado del gerente", "El presupuesto del año anterior"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-conta-9",
        title: "El Paquete de Cierre Ejecutivo",
        description: "Presentación de resultados, paquete ejecutivo y reunión de entrega",
        icon: "PresentationChart",
        lessons: [
          {
            id: "lesson-conta-9-1",
            title: "La Entrega que Define tu Profesionalismo",
            duration: "25 min",
            content: `# El Paquete de Cierre Ejecutivo

## La Entrega que Define tu Profesionalismo

Después de todo el trabajo del mes, llega el momento de **presentar los resultados**. Esta es tu oportunidad de demostrar que no eres solo un registrador de datos, sino un **aliado estratégico**.

---

## El Resumen Ejecutivo: Tu Entregable Más Importante

> **Concepto Clave:** El entregable más importante NO es el Excel gigante con miles de filas. Es el **Resumen Ejecutivo** de una sola página.

### ¿Por Qué el Resumen Ejecutivo Primero?

El dueño de negocio:
- ❌ No tiene tiempo para revisar 50 páginas
- ❌ No entiende terminología contable avanzada
- ✅ Necesita **decisiones**, no datos
- ✅ Quiere saber: "¿Cómo va mi negocio?"

---

## Estructura del Resumen Ejecutivo Ideal

**📊 RESUMEN EJECUTIVO - [MES/AÑO]**

### 1. EL MES EN UN VISTAZO
- Ingresos: $XX,XXX (↑ 5% vs mes anterior)
- Utilidad Neta: $X,XXX (Meta: $X,XXX)
- Efectivo disponible: $XX,XXX

### 2. LOS 3-5 PUNTOS CLAVE
- ✓ [Logro o hallazgo positivo]
- ⚠️ [Área de atención]
- 📈 [Tendencia importante]

### 3. SUGERENCIAS DE ACCIÓN
- → [Recomendación 1]
- → [Recomendación 2]

### 4. PRÓXIMOS PASOS
- □ [Pendiente con fecha]

---

## Explicando Variaciones con Contexto

> **Principio Fundamental:** Las variaciones deben explicarse con **contexto de negocio**, no con jerga contable.

### Ejemplo

**Situación:** La utilidad neta bajó $8,000 porque se compró inventario para temporada navideña.

❌ **Mal:** "Gastamos demasiado dinero. Hay que reducir costos."

✅ **Bien:** "Es una baja planificada: tu dinero no desapareció, se transformó en **Activo (Inventario)** para vender más en Navidad. Operativamente seguimos fuertes."

---

## Las Notas a los Estados Financieros

> **Concepto Vital:** Las Notas explican las **anomalías humanas** detrás de los números fríos.

### ¿Qué Incluir en las Notas?

1. Políticas contables aplicadas
2. Eventos significativos del período
3. Transacciones inusuales explicadas
4. Contingencias o riesgos identificados
5. Comparación con períodos anteriores
`
          },
          {
            id: "lesson-conta-9-2",
            title: "La Reunión de Entrega y Demostrar Valor",
            duration: "20 min",
            content: `# La Reunión de Entrega

## No Solo Envíes un PDF

> Presenta los resultados en una reunión (virtual o presencial).

---

## Estructura de la Reunión (30 minutos)

| Tiempo | Tema |
|--------|------|
| 0-5 min | Resumen ejecutivo: "El mes en un vistazo" |
| 5-15 min | Hallazgos principales con contexto |
| 15-20 min | Comparación con meses anteriores/presupuesto |
| 20-25 min | Recomendaciones y próximos pasos |
| 25-30 min | Preguntas y aclaraciones |

---

## El Paquete Ejecutivo Completo

Tu entrega final debe incluir:

### 1. Resumen Ejecutivo (Primera Página)
Lo más importante, lo primero.

### 2. Balance General
Muestra la posición financiera en un momento específico.

### 3. Estado de Resultados (P&L)
Muestra el rendimiento durante un período.

### 4. Notas a los Estados Financieros
Explican lo que los números no pueden decir solos.

---

## Comunicación Proactiva: Tu Valor Agregado

### Detectando Problemas Antes que el Cliente

**Escenario:** Al revisar el Balance, notas que "Impuestos por Pagar" es muy alto y el efectivo es bajo.

❌ **Actitud pasiva:** Enviar el reporte y esperar a que el cliente lo note el día del pago.

✅ **Actitud proactiva:** Crear alerta visual en el reporte y sugerir reunión urgente para planificar flujo de caja.

---

## Demostrando Valor en Cada Interacción

**Escenario:** El cliente dice "Gracias por los reportes, los revisaré luego".

❌ **Respuesta pasiva:** "Está bien, nos vemos el próximo mes para cobrar."

✅ **Respuesta proactiva:** "Perfecto, pero le pido solo 2 minutos para mostrarle una tendencia de gastos que detecté y que podría ahorrarle un 10% si tomamos acción esta semana."

---

## La Diferencia que te Hace Indispensable

> "El contador que solo entrega números es reemplazable. El que entrega claridad y dirección es invaluable."

### Asistente Contable Tradicional:
- Entrega reportes
- Espera preguntas
- Reacciona a problemas

### Asistente Contable Proactivo (TÚ):
- Presenta insights
- Anticipa necesidades
- Propone soluciones
- Agrega valor estratégico

---

## ¡Felicitaciones! 🎓

Has completado esta especialización. Ahora tienes las herramientas para ser un **Asistente Virtual Contable Proactivo** que no solo registra, sino que **transforma** la relación financiera de tus clientes con sus negocios.
`
          }
        ],
        sprint: {
          title: "Sprint: Tu Paquete Ejecutivo",
          description: "Crea tu propio paquete de cierre ejecutivo",
          tasks: [
            {
              id: "task-conta-9-1",
              question: "Crea un Resumen Ejecutivo completo de una página para un negocio ficticio, incluyendo: cifras clave, 3-5 hallazgos, 2 recomendaciones y próximos pasos."
            },
            {
              id: "task-conta-9-2",
              question: "Redacta una Nota a los Estados Financieros explicando por qué el inventario aumentó $20,000 en diciembre (compras para temporada navideña)."
            },
            {
              id: "task-conta-9-3",
              question: "El cliente dice 'gracias por los reportes, los revisaré luego'. Escribe exactamente qué le dirías para demostrar tu valor y captar su atención en 30 segundos."
            },
            {
              id: "task-conta-9-4",
              question: "Diseña la agenda de tu reunión de entrega de 30 minutos, incluyendo: temas, tiempos, materiales visuales que usarías, y 3 preguntas que harías al cliente."
            }
          ]
        },
        exam: {
          title: "Examen Final: Paquete Ejecutivo",
          description: "Evalúa tu capacidad de presentación profesional de resultados",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué incluyes como primera página del paquete de cierre para un cliente ocupado?", options: ["El libro diario con todos los débitos y créditos", "Un Resumen Ejecutivo con 3-5 puntos clave y sugerencias de acción", "Solo el Balance General sin explicación"], correctAnswer: 1 },
            { id: "q2", question: "La Utilidad Neta bajó porque se compró inventario para Navidad. ¿Cómo lo explicas?", options: ["El negocio va mal este mes", "Es una baja planificada: el dinero se transformó en Activo (Inventario) para vender más", "No sé, solo registro facturas"], correctAnswer: 1 },
            { id: "q3", question: "¿Por qué son vitales las Notas a los Estados Financieros?", options: ["Para llenar espacio en el reporte", "Para explicar variaciones inusuales y dar contexto humano a los números", "Para contar anécdotas personales"], correctAnswer: 1 },
            { id: "q4", question: "Notas que 'Impuestos por Pagar' es muy alto y el efectivo es bajo. ¿Qué haces?", options: ["Envías el reporte y esperas", "Creas alerta visual y sugieres reunión urgente para planificar flujo de caja", "Ocultas la deuda en otra cuenta"], correctAnswer: 1 },
            { id: "q5", question: "El cliente dice 'gracias por los reportes, los revisaré luego'. ¿Cómo demuestras valor?", options: ["Está bien, nos vemos el próximo mes", "Le pides 2 minutos para mostrarle una tendencia que detectaste que podría ahorrarle dinero", "Le obligas a escuchar todo el reporte"], correctAnswer: 1 }
          ]
        }
      }
    ]
  },
  {
    id: "administracion-gestion",
    title: "Administración y Gestión Empresarial",
    slug: "administracion",
    description: "Domina las competencias fundamentales de administración empresarial: planificación estratégica, gestión de proyectos, liderazgo, toma de decisiones y optimización de operaciones para convertirte en un profesional integral.",
    modules: [
      {
        id: "module-admin-1",
        title: "Fundamentos de la Administración Empresarial",
        description: "Comprende los principios básicos que rigen toda organización exitosa",
        icon: "Building2",
        lessons: [
          {
            id: "lesson-admin-1-1",
            title: "¿Qué es la Administración?",
            duration: "20 min",
            content: `# Fundamentos de la Administración Empresarial

## ¿Qué es la Administración?

La administración es el proceso de **planificar, organizar, dirigir y controlar** los recursos de una organización para alcanzar sus objetivos de manera eficiente y eficaz.

---

## Las 4 Funciones Fundamentales

| Función | Descripción | Pregunta Clave |
|---------|-------------|----------------|
| **Planificar** | Definir metas y estrategias | ¿Qué queremos lograr? |
| **Organizar** | Estructurar recursos y tareas | ¿Cómo lo vamos a hacer? |
| **Dirigir** | Liderar y motivar al equipo | ¿Quién lo va a hacer? |
| **Controlar** | Monitorear y corregir | ¿Cómo vamos? |

---

## Eficiencia vs. Eficacia

> **Eficiencia:** Hacer las cosas bien (usar recursos óptimamente)
>
> **Eficacia:** Hacer las cosas correctas (lograr los objetivos)

| Concepto | Enfoque | Ejemplo |
|----------|---------|---------|
| **Eficiencia** | Los medios | Producir más con menos recursos |
| **Eficacia** | Los fines | Lograr las ventas objetivo del mes |
| **Ideal** | Ambos | Lograr objetivos usando recursos óptimamente |

---

## Los Niveles de Administración

### 1. Alta Dirección (Nivel Estratégico)
- CEO, Directores, Gerentes Generales
- Decisiones a largo plazo
- Visión global de la organización

### 2. Mandos Medios (Nivel Táctico)
- Gerentes de área, Jefes de departamento
- Traducen estrategia en planes operativos
- Coordinan entre niveles

### 3. Supervisión (Nivel Operativo)
- Supervisores, Coordinadores
- Ejecución diaria de tareas
- Contacto directo con operaciones

---

## Habilidades Administrativas por Nivel

| Habilidad | Alta Dirección | Mandos Medios | Supervisión |
|-----------|----------------|---------------|-------------|
| **Conceptuales** | ████████ Alta | ████ Media | █ Baja |
| **Humanas** | ████ Media | ████████ Alta | ████ Media |
| **Técnicas** | █ Baja | ████ Media | ████████ Alta |

---

## El Administrador del Siglo XXI

Las competencias modernas incluyen:

- ✅ Pensamiento estratégico y sistémico
- ✅ Adaptabilidad al cambio
- ✅ Competencia digital
- ✅ Inteligencia emocional
- ✅ Capacidad de innovación
- ✅ Visión global y multicultural
`
          },
          {
            id: "lesson-admin-1-2",
            title: "Evolución del Pensamiento Administrativo",
            duration: "25 min",
            content: `# Evolución del Pensamiento Administrativo

## De Taylor a la Era Digital

Conocer la historia de la administración te ayuda a entender por qué las organizaciones funcionan como lo hacen hoy.

---

## Las Principales Escuelas

### 1. Administración Científica (1900s)
**Frederick Taylor - "El padre de la administración científica"**

| Principio | Aplicación |
|-----------|------------|
| Estudio de tiempos y movimientos | Optimizar cada tarea |
| Selección científica del trabajador | Persona correcta para cada puesto |
| Cooperación obrero-patronal | Alinear incentivos |
| División del trabajo | Especialización |

**Legado:** Eficiencia operativa, estándares de producción.

---

### 2. Administración Clásica (1910s)
**Henri Fayol - "El padre de la administración moderna"**

Los 14 principios de Fayol (los más relevantes hoy):

1. **División del trabajo** - Especialización aumenta eficiencia
2. **Autoridad y responsabilidad** - El derecho de mandar viene con obligaciones
3. **Unidad de mando** - Un empleado, un jefe
4. **Unidad de dirección** - Un plan para cada objetivo
5. **Subordinación del interés individual** - El bien común primero
6. **Centralización** - Balance entre concentrar y delegar

---

### 3. Relaciones Humanas (1930s)
**Elton Mayo - Experimentos de Hawthorne**

> "Los trabajadores no son solo máquinas; son seres sociales motivados por factores emocionales y relacionales."

**Descubrimientos clave:**
- La productividad aumenta cuando los trabajadores se sienten valorados
- Los grupos informales influyen en el comportamiento
- Las relaciones humanas son tan importantes como las condiciones físicas

---

### 4. Teoría de Sistemas (1960s)

La organización como un **sistema abierto**:

- **Entradas:** Recursos, información, personas
- **Proceso:** Transformación, operaciones
- **Salidas:** Productos, servicios, resultados
- **Retroalimentación:** Información del entorno

---

### 5. Administración Moderna (Hoy)

| Enfoque | Característica |
|---------|----------------|
| **Calidad Total** | Mejora continua, satisfacción del cliente |
| **Reingeniería** | Rediseño radical de procesos |
| **Organizaciones que Aprenden** | Conocimiento como ventaja competitiva |
| **Agilidad** | Adaptación rápida al cambio |
| **Transformación Digital** | Tecnología como habilitador |

---

## Lecciones para el Presente

> "No reinventamos la rueda, pero sí la adaptamos al terreno actual."

- De Taylor: La importancia de medir y optimizar
- De Fayol: Principios de organización claros
- De Mayo: Las personas son el centro
- De Sistemas: Todo está conectado
- De hoy: Adaptarse o quedarse atrás
`
          }
        ],
        sprint: {
          title: "Sprint: Análisis Organizacional",
          description: "Aplica los fundamentos de administración a casos reales",
          tasks: [
            {
              id: "task-admin-1-1",
              question: "Elige una empresa que conozcas (puede ser donde trabajas o una famosa). Identifica cómo aplican las 4 funciones administrativas: planificar, organizar, dirigir y controlar. Da un ejemplo concreto de cada una."
            },
            {
              id: "task-admin-1-2",
              question: "Describe un ejemplo donde una empresa fue eficiente pero no eficaz, y otro donde fue eficaz pero no eficiente. ¿Cuál es el problema en cada caso?"
            },
            {
              id: "task-admin-1-3",
              question: "Analiza tu propio trabajo o rol actual. ¿En qué nivel administrativo te ubicas? ¿Qué habilidades (conceptuales, humanas, técnicas) necesitas desarrollar más?"
            }
          ]
        },
        exam: {
          title: "Examen: Fundamentos de Administración",
          description: "Evalúa tu comprensión de los conceptos básicos de administración",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuáles son las 4 funciones fundamentales de la administración?", options: ["Vender, producir, cobrar, pagar", "Planificar, organizar, dirigir, controlar", "Contratar, capacitar, evaluar, despedir", "Comprar, almacenar, distribuir, vender"], correctAnswer: 1 },
            { id: "q2", question: "¿Cuál es la diferencia entre eficiencia y eficacia?", options: ["Son sinónimos", "Eficiencia es hacer las cosas bien, eficacia es hacer las cosas correctas", "Eficacia es más importante que eficiencia", "No hay diferencia práctica"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué descubrió Elton Mayo en los experimentos de Hawthorne?", options: ["Que las máquinas son más productivas que las personas", "Que los trabajadores son seres sociales motivados por factores emocionales", "Que el salario es el único motivador", "Que la supervisión estricta aumenta productividad"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué nivel administrativo requiere más habilidades técnicas?", options: ["Alta dirección", "Mandos medios", "Nivel de supervisión", "Todos por igual"], correctAnswer: 2 },
            { id: "q5", question: "El principio de 'unidad de mando' de Fayol establece que:", options: ["Solo debe haber un gerente general", "Un empleado debe tener un solo jefe", "Todos deben ganar el mismo salario", "Las decisiones deben ser unánimes"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-2",
        title: "Planificación Estratégica",
        description: "Aprende a definir visión, misión, objetivos y estrategias organizacionales",
        icon: "Target",
        lessons: [
          {
            id: "lesson-admin-2-1",
            title: "El Proceso de Planificación",
            duration: "25 min",
            content: `# Planificación Estratégica

## ¿Por Qué Planificar?

> "Si no sabes a dónde vas, cualquier camino te llevará allí." - Lewis Carroll

La planificación es el proceso de definir **a dónde queremos llegar** y **cómo vamos a llegar**.

---

## Tipos de Planificación

| Tipo | Horizonte | Nivel | Ejemplo |
|------|-----------|-------|---------|
| **Estratégica** | 3-5+ años | Alta dirección | Expandirse a nuevos mercados |
| **Táctica** | 1-3 años | Mandos medios | Plan de marketing anual |
| **Operativa** | < 1 año | Supervisión | Programa de producción mensual |

---

## Componentes de la Planificación Estratégica

### 1. Misión
**¿Por qué existimos?**

La razón de ser de la organización. Define:
- Qué hace la empresa
- Para quién lo hace
- Cómo lo hace (su diferenciador)

**Ejemplo:**
> "Organizar la información del mundo y hacerla universalmente accesible y útil." - Google

---

### 2. Visión
**¿A dónde queremos llegar?**

El estado futuro deseado. Debe ser:
- Inspiradora
- Desafiante pero alcanzable
- Clara y memorable

**Ejemplo:**
> "Ser la empresa más centrada en el cliente del mundo." - Amazon

---

### 3. Valores
**¿Cómo nos comportamos?**

Los principios que guían las decisiones y acciones:
- Integridad
- Innovación
- Trabajo en equipo
- Excelencia
- Responsabilidad social

---

### 4. Objetivos
**¿Qué queremos lograr específicamente?**

Deben ser **SMART**:

| Letra | Significado | Pregunta |
|-------|-------------|----------|
| **S** | Específico | ¿Qué exactamente? |
| **M** | Medible | ¿Cómo sabremos que lo logramos? |
| **A** | Alcanzable | ¿Es realista? |
| **R** | Relevante | ¿Importa para nuestra misión? |
| **T** | Temporal | ¿Para cuándo? |

**Ejemplo SMART:**
❌ "Aumentar ventas" (vago)
✅ "Aumentar ventas en 20% en el mercado latinoamericano para diciembre 2026"
`
          },
          {
            id: "lesson-admin-2-2",
            title: "Análisis Estratégico: FODA y más",
            duration: "30 min",
            content: `# Análisis Estratégico

## El Análisis FODA (SWOT)

Herramienta fundamental para diagnosticar la situación de una organización.

---

## Matriz FODA

|  | **Positivo** | **Negativo** |
|--|--------------|--------------|
| **Interno** | **F**ortalezas | **D**ebilidades |
| **Externo** | **O**portunidades | **A**menazas |

### Análisis Interno (Fortalezas y Debilidades)
Lo que **controlamos**:
- Recursos humanos
- Recursos financieros
- Tecnología
- Procesos
- Cultura organizacional

### Análisis Externo (Oportunidades y Amenazas)
Lo que **no controlamos**:
- Competencia
- Economía
- Tecnología del mercado
- Regulaciones
- Tendencias sociales

---

## Ejemplo de FODA: Cafetería Local

| Fortalezas | Debilidades |
|------------|-------------|
| Ubicación céntrica | Espacio limitado |
| Café de alta calidad | Precios más altos que cadenas |
| Servicio personalizado | Poca presencia digital |
| Clientes fieles | Dependencia de un proveedor |

| Oportunidades | Amenazas |
|---------------|----------|
| Crecimiento del trabajo remoto | Nueva Starbucks cerca |
| Tendencia de café artesanal | Aumento de costos de insumos |
| Delivery apps en la zona | Crisis económica |
| Alianzas con oficinas cercanas | Cambios en hábitos post-pandemia |

---

## Estrategias derivadas del FODA

| Estrategia | Combinación | Ejemplo |
|------------|-------------|---------|
| **FO (Maxi-Maxi)** | Usar fortalezas para aprovechar oportunidades | Usar calidad para captar trabajadores remotos |
| **DO (Mini-Maxi)** | Superar debilidades aprovechando oportunidades | Crear presencia digital con delivery apps |
| **FA (Maxi-Mini)** | Usar fortalezas para mitigar amenazas | Usar clientes fieles como embajadores vs Starbucks |
| **DA (Mini-Mini)** | Minimizar debilidades y amenazas | Diversificar proveedores ante crisis |

---

## Análisis PESTEL

Para analizar el **macroentorno**:

| Factor | Ejemplos |
|--------|----------|
| **P**olítico | Estabilidad, políticas gubernamentales |
| **E**conómico | Inflación, tasas de interés, PIB |
| **S**ocial | Demografía, cultura, tendencias |
| **T**ecnológico | Innovaciones, automatización, IA |
| **E**cológico | Regulaciones ambientales, sostenibilidad |
| **L**egal | Leyes laborales, protección al consumidor |

---

## Las 5 Fuerzas de Porter

Para analizar la **industria**:

1. **Rivalidad entre competidores** - ¿Qué tan intensa es la competencia?
2. **Amenaza de nuevos entrantes** - ¿Es fácil entrar al mercado?
3. **Poder de los proveedores** - ¿Pueden imponer condiciones?
4. **Poder de los compradores** - ¿Pueden negociar precios?
5. **Amenaza de sustitutos** - ¿Hay alternativas al producto/servicio?

> **Tip:** A mayor intensidad de estas fuerzas, menor rentabilidad potencial de la industria.
`
          }
        ],
        sprint: {
          title: "Sprint: Tu Plan Estratégico",
          description: "Desarrolla habilidades de planificación estratégica",
          tasks: [
            {
              id: "task-admin-2-1",
              question: "Redacta una Misión, Visión y 3 Valores para un negocio ficticio (o real) de tu elección. Asegúrate de que la misión responda: qué hace, para quién, y cómo se diferencia."
            },
            {
              id: "task-admin-2-2",
              question: "Crea un análisis FODA completo para ese mismo negocio. Incluye al menos 4 elementos en cada cuadrante y sugiere una estrategia FO y una estrategia DA."
            },
            {
              id: "task-admin-2-3",
              question: "Convierte este objetivo vago en uno SMART: 'Mejorar la satisfacción del cliente'. Especifica qué, cuánto, cómo medirlo y para cuándo."
            }
          ]
        },
        exam: {
          title: "Examen: Planificación Estratégica",
          description: "Evalúa tu comprensión de la planificación estratégica",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Qué responde la Misión de una organización?", options: ["A dónde queremos llegar en 10 años", "Por qué existimos y qué hacemos", "Cuánto dinero queremos ganar", "Quiénes son nuestros competidores"], correctAnswer: 1 },
            { id: "q2", question: "En el análisis FODA, las Oportunidades son:", options: ["Factores internos positivos", "Factores externos positivos que podemos aprovechar", "Lo mismo que las fortalezas", "Factores que controlamos"], correctAnswer: 1 },
            { id: "q3", question: "¿Qué significa la 'M' en objetivos SMART?", options: ["Motivador", "Medible", "Moderno", "Monetario"], correctAnswer: 1 },
            { id: "q4", question: "El análisis PESTEL evalúa:", options: ["Las fortalezas internas", "El macroentorno externo", "Los objetivos financieros", "La estructura organizacional"], correctAnswer: 1 },
            { id: "q5", question: "Según Porter, si los proveedores tienen alto poder de negociación:", options: ["Es positivo para la empresa", "Pueden imponer condiciones que reducen rentabilidad", "No afecta a la empresa", "Aumenta la competencia"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-3",
        title: "Gestión del Tiempo y Productividad",
        description: "Técnicas y herramientas para maximizar tu efectividad personal y profesional",
        icon: "Clock",
        lessons: [
          {
            id: "lesson-admin-3-1",
            title: "Principios de Gestión del Tiempo",
            duration: "25 min",
            content: `# Gestión del Tiempo y Productividad

## El Recurso Más Valioso

> "El tiempo es lo que más queremos, pero lo que peor usamos." - William Penn

A diferencia del dinero, el tiempo:
- No se puede ahorrar
- No se puede pedir prestado
- No se puede recuperar
- Todos tenemos la misma cantidad: 24 horas

---

## La Matriz de Eisenhower

Clasifica tareas según **urgencia** e **importancia**:

| | **Urgente** | **No Urgente** |
|-|-------------|----------------|
| **Importante** | **Q1: HACER** Crisis, deadlines | **Q2: PLANIFICAR** Estrategia, desarrollo |
| **No Importante** | **Q3: DELEGAR** Interrupciones, algunas reuniones | **Q4: ELIMINAR** Distracciones, tiempo perdido |

### Dónde Enfocarte

- **Q2 es donde debes pasar más tiempo** - Previene crisis (Q1)
- **Q1** - Atiende pero busca reducirlo con mejor planificación
- **Q3** - Delega o automatiza
- **Q4** - Elimina sin remordimiento

---

## La Ley de Pareto (80/20)

> "El 80% de los resultados proviene del 20% de los esfuerzos."

**Aplicaciones prácticas:**
- El 20% de clientes genera el 80% de ingresos
- El 20% de tareas produce el 80% de resultados
- El 20% de errores causa el 80% de problemas

**Acción:** Identifica tu 20% de alto impacto y priorízalo.

---

## La Ley de Parkinson

> "El trabajo se expande hasta llenar el tiempo disponible para su realización."

Si tienes 2 horas para una tarea, tomará 2 horas.
Si tienes 1 hora, probablemente la termines en 1 hora.

**Estrategia:** Establece **deadlines ajustados** pero realistas.

---

## Ladrones del Tiempo

| Ladrón | Solución |
|--------|----------|
| **Interrupciones** | Bloques de tiempo protegidos |
| **Reuniones innecesarias** | Agenda clara, duración limitada |
| **Email constante** | Revisar en horarios específicos |
| **Redes sociales** | Bloqueadores, horarios definidos |
| **Multitasking** | Enfoque en una tarea a la vez |
| **Procrastinación** | Técnica Pomodoro, dividir tareas |
| **Perfeccionismo** | "Suficientemente bueno" a veces es mejor |

---

## El Costo de Cambiar de Contexto

Cada vez que cambias de tarea:
- Pierdes 15-25 minutos en recuperar concentración
- Aumenta la probabilidad de errores
- Se reduce la calidad del trabajo

> **Solución:** Agrupa tareas similares (batching) y minimiza interrupciones.
`
          },
          {
            id: "lesson-admin-3-2",
            title: "Técnicas y Herramientas de Productividad",
            duration: "25 min",
            content: `# Técnicas y Herramientas de Productividad

## Técnica Pomodoro

**Método de Francesco Cirillo:**

1. Elige una tarea
2. Trabaja 25 minutos (1 Pomodoro)
3. Descanso corto de 5 minutos
4. Después de 4 Pomodoros, descanso largo (15-30 min)

**Beneficios:**
- Combate la procrastinación
- Mantiene la concentración
- Previene el agotamiento
- Permite medir productividad

---

## Time Blocking (Bloques de Tiempo)

Agenda tu día en bloques dedicados:

| Hora | Actividad |
|------|-----------|
| 8:00-9:30 | Trabajo profundo (sin interrupciones) |
| 9:30-10:00 | Revisar emails |
| 10:00-11:00 | Reuniones |
| 11:00-12:30 | Trabajo profundo |
| 12:30-13:30 | Almuerzo |
| 13:30-14:00 | Tareas administrativas |
| 14:00-16:00 | Proyectos |
| 16:00-16:30 | Planificar día siguiente |

---

## Getting Things Done (GTD)

**Método de David Allen en 5 pasos:**

### 1. Capturar
Registra TODO lo que llega a tu mente (ideas, tareas, compromisos).

### 2. Clarificar
Para cada ítem pregunta: ¿Es accionable?
- **No:** Eliminar, archivar o incubar
- **Sí:** ¿Cuál es la siguiente acción concreta?

### 3. Organizar
Coloca en el sistema apropiado:
- Calendario (fecha/hora específica)
- Lista de próximas acciones
- Lista de proyectos
- Lista de "algún día/tal vez"

### 4. Reflexionar
Revisión semanal para mantener el sistema actualizado.

### 5. Ejecutar
Elige qué hacer basándote en contexto, tiempo disponible, energía y prioridad.

---

## Herramientas Digitales

### Gestión de Tareas
- **Todoist** - Simple y potente
- **Asana** - Ideal para equipos
- **Notion** - Todo en uno
- **Trello** - Visual con tableros Kanban

### Calendario y Agenda
- **Google Calendar** - Integración amplia
- **Calendly** - Programar reuniones

### Notas y Documentación
- **Notion** - Base de conocimiento
- **Evernote** - Captura de información
- **Obsidian** - Notas vinculadas

### Enfoque y Concentración
- **Forest** - Gamifica la concentración
- **Freedom** - Bloquea distracciones
- **Focus@Will** - Música para concentración

---

## Rituales de Productividad

### Al Iniciar el Día
1. Revisa tu agenda y prioridades
2. Identifica las 3 tareas más importantes (MIT)
3. Empieza con la tarea más difícil ("Eat the Frog")

### Al Terminar el Día
1. Revisa lo logrado
2. Planifica el día siguiente
3. Cierra loops abiertos (responde pendientes)
4. Desconecta mentalmente

> "La productividad no es hacer más cosas, es hacer las cosas correctas."
`
          }
        ],
        sprint: {
          title: "Sprint: Tu Sistema de Productividad",
          description: "Diseña tu propio sistema de gestión del tiempo",
          tasks: [
            {
              id: "task-admin-3-1",
              question: "Lista todas tus tareas de esta semana y clasifícalas en la Matriz de Eisenhower. ¿En qué cuadrante pasas más tiempo? ¿Dónde deberías estar?"
            },
            {
              id: "task-admin-3-2",
              question: "Identifica tus 3 principales 'ladrones de tiempo'. Para cada uno, describe una estrategia específica que implementarás para neutralizarlo."
            },
            {
              id: "task-admin-3-3",
              question: "Diseña tu día ideal usando Time Blocking. Crea una agenda de 8 horas que incluya: trabajo profundo, tareas administrativas, descansos, y tiempo para imprevistos."
            },
            {
              id: "task-admin-3-4",
              question: "Prueba la Técnica Pomodoro durante un día completo de trabajo. Documenta: cuántos Pomodoros completaste, qué interrupciones tuviste, y qué aprendiste."
            }
          ]
        },
        exam: {
          title: "Examen: Gestión del Tiempo",
          description: "Evalúa tu comprensión de las técnicas de productividad",
          passingScore: 70,
          questions: [
            { id: "q1", question: "En la Matriz de Eisenhower, ¿dónde debes pasar más tiempo?", options: ["Q1: Urgente e Importante", "Q2: No Urgente pero Importante", "Q3: Urgente pero No Importante", "Q4: Ni Urgente ni Importante"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué establece la Ley de Pareto?", options: ["El trabajo se expande para llenar el tiempo disponible", "El 80% de resultados proviene del 20% de esfuerzos", "Debemos trabajar 80 horas semanales", "20% del tiempo es improductivo"], correctAnswer: 1 },
            { id: "q3", question: "¿Cuánto dura un 'Pomodoro' en la técnica del mismo nombre?", options: ["15 minutos", "25 minutos", "45 minutos", "60 minutos"], correctAnswer: 1 },
            { id: "q4", question: "¿Cuál es el costo de cambiar constantemente de tarea (multitasking)?", options: ["No hay costo, es más eficiente", "Pierdes 15-25 minutos en recuperar concentración cada vez", "Solo afecta si cambias más de 10 veces al día", "Es beneficioso para la creatividad"], correctAnswer: 1 },
            { id: "q5", question: "El concepto 'Eat the Frog' sugiere:", options: ["Desayunar bien antes de trabajar", "Empezar el día con la tarea más difícil o desagradable", "Dividir tareas grandes en pequeñas", "Delegar las tareas que no te gustan"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-4",
        title: "Gestión de Proyectos",
        description: "Planifica, ejecuta y controla proyectos exitosamente con metodologías probadas",
        icon: "FolderKanban",
        lessons: [
          {
            id: "lesson-admin-4-1",
            title: "Fundamentos de Gestión de Proyectos",
            duration: "25 min",
            content: `# Gestión de Proyectos

## ¿Qué es un Proyecto?

Un proyecto es un esfuerzo **temporal** para crear un producto, servicio o resultado **único**.

### Características de un Proyecto
- **Temporal:** Tiene inicio y fin definidos
- **Único:** El resultado es diferente a otros
- **Elaboración progresiva:** Se detalla a medida que avanza
- **Recursos limitados:** Presupuesto, tiempo, personas

---

## La Triple Restricción

Todo proyecto balancea tres variables:

| Variable | Pregunta |
|----------|----------|
| **Alcance** | ¿Qué entregaremos? |
| **Tiempo** | ¿Para cuándo? |
| **Costo** | ¿Con qué recursos? |

> Si cambias una, afectas las otras. Más alcance = más tiempo o más costo.

**El cuarto factor:** Calidad (está en el centro, afectada por las tres).

---

## Ciclo de Vida de un Proyecto

### 1. Inicio
- Definir el proyecto y su justificación
- Identificar stakeholders
- Crear el acta de constitución (Project Charter)

### 2. Planificación
- Detallar el alcance (WBS)
- Crear cronograma
- Estimar costos y presupuesto
- Planificar recursos, riesgos, comunicación

### 3. Ejecución
- Realizar el trabajo planificado
- Gestionar el equipo
- Comunicar avances
- Gestionar calidad

### 4. Monitoreo y Control
- Medir avance vs. plan
- Gestionar cambios
- Controlar costos y cronograma
- Reportar estado

### 5. Cierre
- Verificar completitud
- Documentar lecciones aprendidas
- Liberar recursos
- Cerrar formalmente

---

## El Project Charter (Acta de Constitución)

Documento que autoriza formalmente el proyecto:

| Sección | Contenido |
|---------|-----------|
| **Nombre del proyecto** | Título descriptivo |
| **Justificación** | Por qué se hace el proyecto |
| **Objetivos** | Qué se logrará (SMART) |
| **Alcance de alto nivel** | Qué incluye y qué NO incluye |
| **Hitos principales** | Fechas clave |
| **Presupuesto estimado** | Recursos financieros |
| **Stakeholders clave** | Quiénes están involucrados |
| **Riesgos iniciales** | Amenazas identificadas |
| **Sponsor** | Quién autoriza y respalda |
| **Project Manager** | Quién lidera |
`
          },
          {
            id: "lesson-admin-4-2",
            title: "Metodologías: Tradicional vs. Ágil",
            duration: "30 min",
            content: `# Metodologías de Gestión de Proyectos

## Enfoque Tradicional (Cascada/Waterfall)

### Características
- Fases secuenciales (una tras otra)
- Planificación detallada al inicio
- Requisitos definidos y estables
- Documentación exhaustiva
- Cambios costosos y difíciles

### Fases de Waterfall
1. Requisitos → 2. Diseño → 3. Desarrollo → 4. Pruebas → 5. Implementación → 6. Mantenimiento

### Ideal para:
- Proyectos con requisitos claros y estables
- Regulaciones estrictas
- Presupuestos y fechas fijas
- Equipos distribuidos o grandes

---

## Enfoque Ágil

### Manifiesto Ágil (Valores)
1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentación extensiva
3. **Colaboración con el cliente** sobre negociación contractual
4. **Responder al cambio** sobre seguir un plan

### Características
- Iteraciones cortas (sprints)
- Entrega incremental de valor
- Adaptación continua
- Colaboración estrecha con cliente
- Equipos auto-organizados

---

## Scrum (Framework Ágil más popular)

### Roles
| Rol | Responsabilidad |
|-----|-----------------|
| **Product Owner** | Define qué construir, prioriza |
| **Scrum Master** | Facilita el proceso, remueve obstáculos |
| **Development Team** | Construye el producto |

### Eventos
| Evento | Propósito | Duración |
|--------|-----------|----------|
| **Sprint** | Iteración de trabajo | 1-4 semanas |
| **Sprint Planning** | Planificar el sprint | 2-4 horas |
| **Daily Standup** | Sincronización diaria | 15 minutos |
| **Sprint Review** | Demostrar lo construido | 1-2 horas |
| **Sprint Retrospective** | Mejorar el proceso | 1-2 horas |

### Artefactos
- **Product Backlog:** Lista priorizada de todo lo que se necesita
- **Sprint Backlog:** Trabajo seleccionado para el sprint actual
- **Incremento:** Producto funcional al final del sprint

---

## Kanban

### Principios
1. Visualizar el flujo de trabajo
2. Limitar el trabajo en progreso (WIP)
3. Gestionar el flujo
4. Hacer explícitas las políticas
5. Implementar ciclos de retroalimentación
6. Mejorar colaborativamente

### Tablero Kanban Básico
| Por Hacer | En Progreso (máx 3) | En Revisión | Hecho |
|-----------|---------------------|-------------|-------|
| Tarea 1 | Tarea 4 | Tarea 6 | Tarea 8 |
| Tarea 2 | Tarea 5 | | Tarea 9 |
| Tarea 3 | | | |

---

## ¿Cuándo usar cada enfoque?

| Criterio | Tradicional | Ágil |
|----------|-------------|------|
| Requisitos | Claros y estables | Cambiantes o inciertos |
| Cliente | Disponibilidad limitada | Muy involucrado |
| Tamaño de equipo | Grande | Pequeño (5-9) |
| Documentación | Necesaria y extensa | Mínima necesaria |
| Cambios | Costosos | Bienvenidos |
| Entrega | Al final | Incremental |
`
          }
        ],
        sprint: {
          title: "Sprint: Tu Primer Proyecto",
          description: "Aplica técnicas de gestión de proyectos",
          tasks: [
            {
              id: "task-admin-4-1",
              question: "Crea un Project Charter para un proyecto de tu elección (puede ser personal o profesional). Incluye: nombre, justificación, objetivos SMART, alcance (qué incluye y qué NO), hitos principales, y riesgos iniciales."
            },
            {
              id: "task-admin-4-2",
              question: "Diseña un tablero Kanban para gestionar las tareas de ese proyecto. Define las columnas que usarás y el límite de WIP para 'En Progreso'. Explica por qué elegiste esos límites."
            },
            {
              id: "task-admin-4-3",
              question: "Compara: ¿Usarías enfoque tradicional (Waterfall) o Ágil para tu proyecto? Justifica tu respuesta considerando: claridad de requisitos, disponibilidad del cliente, tamaño del equipo, y tolerancia a cambios."
            }
          ]
        },
        exam: {
          title: "Examen: Gestión de Proyectos",
          description: "Evalúa tu comprensión de las metodologías de proyectos",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuáles son las tres variables de la 'Triple Restricción'?", options: ["Calidad, Seguridad, Velocidad", "Alcance, Tiempo, Costo", "Personal, Tecnología, Presupuesto", "Inicio, Desarrollo, Cierre"], correctAnswer: 1 },
            { id: "q2", question: "¿Qué documento autoriza formalmente el inicio de un proyecto?", options: ["El presupuesto", "El Project Charter (Acta de Constitución)", "El cronograma", "El contrato de trabajo"], correctAnswer: 1 },
            { id: "q3", question: "En Scrum, ¿quién es responsable de definir qué construir y priorizar?", options: ["Scrum Master", "Development Team", "Product Owner", "El cliente directamente"], correctAnswer: 2 },
            { id: "q4", question: "¿Cuál es el propósito del Daily Standup en Scrum?", options: ["Reportar al jefe", "Sincronización diaria del equipo (15 min)", "Planificar todo el proyecto", "Celebrar logros"], correctAnswer: 1 },
            { id: "q5", question: "En Kanban, 'WIP' significa:", options: ["Work in Progress - Trabajo en progreso", "Weekly Important Projects", "Work Impact Plan", "Workflow Integration Process"], correctAnswer: 0 }
          ]
        }
      },
      {
        id: "module-admin-5",
        title: "Gestión de Recursos Humanos",
        description: "Atrae, desarrolla y retén el talento que impulsa a las organizaciones",
        icon: "Users",
        lessons: [
          {
            id: "lesson-admin-5-1",
            title: "El Ciclo de Gestión del Talento",
            duration: "25 min",
            content: `# Gestión de Recursos Humanos

## Las Personas: El Activo Más Valioso

> "Cuida de tus empleados y ellos cuidarán de tus clientes." - Richard Branson

Los recursos humanos (o gestión del talento) abarca todo el ciclo de vida del empleado en la organización.

---

## El Ciclo de Gestión del Talento

### 1. Atracción y Reclutamiento
**Objetivo:** Atraer a los mejores candidatos

| Etapa | Acciones |
|-------|----------|
| Análisis del puesto | Definir responsabilidades, requisitos, competencias |
| Publicación | Portales de empleo, redes, referencias |
| Employer Branding | Construir marca empleadora atractiva |
| Sourcing | Búsqueda proactiva de candidatos |

### 2. Selección
**Objetivo:** Elegir al candidato adecuado

- Revisión de CVs
- Entrevistas (estructuradas, por competencias)
- Pruebas técnicas y psicométricas
- Verificación de referencias
- Decisión y oferta

### 3. Onboarding (Incorporación)
**Objetivo:** Integrar exitosamente al nuevo empleado

| Semana | Actividades |
|--------|-------------|
| Pre-ingreso | Documentación, accesos, bienvenida |
| Semana 1 | Orientación, presentaciones, cultura |
| Mes 1 | Capacitación, asignación de mentor |
| Mes 3 | Evaluación de adaptación, feedback |

### 4. Desarrollo
**Objetivo:** Potenciar habilidades y carrera

- Capacitación y formación
- Planes de carrera
- Mentoring y coaching
- Rotación de puestos
- Proyectos desafiantes

### 5. Retención
**Objetivo:** Mantener al talento comprometido

- Compensación competitiva
- Ambiente de trabajo positivo
- Reconocimiento
- Balance vida-trabajo
- Oportunidades de crecimiento

### 6. Separación (cuando ocurre)
**Objetivo:** Gestionar la salida profesionalmente

- Entrevista de salida
- Transferencia de conocimiento
- Proceso administrativo
- Mantener relación positiva

---

## Perfil de Puesto

Documento fundamental que define:

| Sección | Contenido |
|---------|-----------|
| **Título del puesto** | Nombre oficial del cargo |
| **Objetivo** | Para qué existe el puesto |
| **Responsabilidades** | Qué hace en el día a día |
| **Requisitos** | Educación, experiencia, idiomas |
| **Competencias** | Habilidades técnicas y blandas |
| **Reporta a** | Posición del jefe directo |
| **Supervisa a** | Puestos bajo su cargo |
| **Indicadores** | Cómo se mide el éxito |
`
          },
          {
            id: "lesson-admin-5-2",
            title: "Evaluación de Desempeño y Compensación",
            duration: "25 min",
            content: `# Evaluación de Desempeño y Compensación

## ¿Por Qué Evaluar el Desempeño?

- Alinear objetivos individuales con organizacionales
- Identificar fortalezas y áreas de mejora
- Tomar decisiones de compensación y promoción
- Planificar desarrollo y capacitación
- Documentar rendimiento

---

## Métodos de Evaluación

### 1. Evaluación por Objetivos (MBO)
Evalúa el logro de metas específicas acordadas.

| Objetivo | Peso | Meta | Logrado | Calificación |
|----------|------|------|---------|--------------|
| Ventas | 40% | $100K | $95K | 95% |
| Nuevos clientes | 30% | 20 | 25 | 125% |
| Satisfacción | 30% | 85% | 88% | 103% |

### 2. Evaluación 360°
Retroalimentación de múltiples fuentes:
- Jefe directo
- Pares/colegas
- Subordinados (si aplica)
- Clientes (internos/externos)
- Autoevaluación

### 3. Evaluación por Competencias
Evalúa comportamientos observables:

| Competencia | 1 | 2 | 3 | 4 | 5 |
|-------------|---|---|---|---|---|
| Comunicación | | | | ✓ | |
| Trabajo en equipo | | | ✓ | | |
| Orientación a resultados | | | | | ✓ |

---

## Feedback Efectivo

### El Modelo SBI (Situación-Comportamiento-Impacto)

**Estructura:**
1. **Situación:** Cuándo y dónde ocurrió
2. **Comportamiento:** Qué hizo la persona (observable)
3. **Impacto:** Qué efecto tuvo

**Ejemplo:**
> "En la reunión de ayer (S), cuando interrumpiste a María mientras presentaba (C), ella perdió el hilo y el equipo no entendió su propuesta (I)."

### Feedback Constructivo vs. Destructivo

| Constructivo ✅ | Destructivo ❌ |
|-----------------|----------------|
| Específico | Vago o general |
| Sobre comportamientos | Sobre la persona |
| Orientado al futuro | Enfocado en culpas |
| Privado (si es negativo) | Público |
| Con ejemplos | Sin evidencia |

---

## Compensación Total

La compensación va más allá del salario:

| Componente | Ejemplos |
|------------|----------|
| **Salario base** | Pago fijo mensual/anual |
| **Variable** | Bonos, comisiones, utilidades |
| **Beneficios** | Seguro médico, plan de pensiones |
| **Compensación no monetaria** | Flexibilidad, desarrollo, reconocimiento |

### Factores que Determinan el Salario

1. **Mercado:** ¿Cuánto pagan otras empresas?
2. **Equidad interna:** ¿Es justo vs. otros puestos internos?
3. **Desempeño:** ¿Cómo rinde el empleado?
4. **Presupuesto:** ¿Qué puede pagar la empresa?
5. **Experiencia:** ¿Qué trae el empleado?

---

## Motivación más allá del Dinero

**Teoría de Herzberg:**

| Factores Higiénicos (evitan insatisfacción) | Factores Motivadores (generan satisfacción) |
|---------------------------------------------|---------------------------------------------|
| Salario adecuado | Logro y reconocimiento |
| Condiciones de trabajo | Trabajo interesante |
| Seguridad laboral | Responsabilidad |
| Políticas justas | Crecimiento profesional |

> El dinero evita la insatisfacción, pero no necesariamente motiva.
`
          }
        ],
        sprint: {
          title: "Sprint: Gestión del Talento",
          description: "Aplica técnicas de recursos humanos",
          tasks: [
            {
              id: "task-admin-5-1",
              question: "Crea un perfil de puesto completo para un cargo de tu elección. Incluye: título, objetivo, 5 responsabilidades principales, requisitos (educación, experiencia), 5 competencias clave, y 3 indicadores de éxito."
            },
            {
              id: "task-admin-5-2",
              question: "Diseña un plan de onboarding de 4 semanas para un nuevo empleado en ese puesto. Detalla las actividades de cada semana y quién es responsable de cada una."
            },
            {
              id: "task-admin-5-3",
              question: "Redacta un feedback usando el modelo SBI para estas dos situaciones: (a) un empleado que entregó un proyecto antes de tiempo con excelente calidad, (b) un empleado que llegó tarde 3 veces esta semana."
            }
          ]
        },
        exam: {
          title: "Examen: Gestión de Recursos Humanos",
          description: "Evalúa tu comprensión de la gestión del talento",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es el orden correcto del ciclo de gestión del talento?", options: ["Selección, Reclutamiento, Desarrollo, Retención", "Atracción, Selección, Onboarding, Desarrollo, Retención", "Contratación, Capacitación, Promoción, Despido", "Entrevista, Contrato, Trabajo, Renuncia"], correctAnswer: 1 },
            { id: "q2", question: "La evaluación 360° incluye feedback de:", options: ["Solo el jefe directo", "Jefe, pares, subordinados, clientes y autoevaluación", "Solo los clientes externos", "Solo el departamento de RRHH"], correctAnswer: 1 },
            { id: "q3", question: "En el modelo SBI de feedback, la 'I' significa:", options: ["Información", "Impacto", "Intención", "Instrucción"], correctAnswer: 1 },
            { id: "q4", question: "Según Herzberg, ¿qué tipo de factor es el salario?", options: ["Factor motivador", "Factor higiénico (evita insatisfacción pero no motiva)", "No es relevante", "Es el único factor importante"], correctAnswer: 1 },
            { id: "q5", question: "Un perfil de puesto debe incluir:", options: ["Solo el salario ofrecido", "Responsabilidades, requisitos, competencias e indicadores de éxito", "Solo la experiencia requerida", "El nombre del candidato seleccionado"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-6",
        title: "Comunicación Empresarial",
        description: "Domina las habilidades de comunicación efectiva en entornos profesionales",
        icon: "MessageSquare",
        lessons: [
          {
            id: "lesson-admin-6-1",
            title: "Fundamentos de la Comunicación Efectiva",
            duration: "25 min",
            content: `# Comunicación Empresarial

## El Proceso de Comunicación

> "El mayor problema de la comunicación es la ilusión de que ha ocurrido." - George Bernard Shaw

---

## Elementos del Proceso

| Elemento | Descripción |
|----------|-------------|
| **Emisor** | Quien envía el mensaje |
| **Mensaje** | La información transmitida |
| **Canal** | Medio de transmisión (email, verbal, etc.) |
| **Receptor** | Quien recibe el mensaje |
| **Retroalimentación** | Respuesta del receptor |
| **Ruido** | Interferencias que distorsionan |

---

## Barreras de Comunicación

### Barreras Físicas
- Distancia geográfica
- Ruido ambiental
- Problemas técnicos

### Barreras Psicológicas
- Prejuicios y estereotipos
- Emociones intensas
- Falta de atención

### Barreras Semánticas
- Jerga técnica
- Diferentes idiomas
- Ambigüedad

### Barreras Organizacionales
- Jerarquías rígidas
- Sobrecarga de información
- Cultura de desconfianza

---

## Comunicación Verbal vs. No Verbal

| Tipo | Porcentaje de impacto |
|------|----------------------|
| Palabras (qué dices) | 7% |
| Tono de voz (cómo lo dices) | 38% |
| Lenguaje corporal | 55% |

> **Regla de Mehrabian:** Cuando hay incongruencia, creemos más al lenguaje no verbal.

---

## Elementos de Lenguaje Corporal

| Elemento | Positivo | Negativo |
|----------|----------|----------|
| **Contacto visual** | Directo, natural | Evitar mirada, mirar abajo |
| **Postura** | Erguida, abierta | Encorvada, brazos cruzados |
| **Gestos** | Manos visibles, moderados | Inquietos, tocarse la cara |
| **Espacio** | Respetar distancia apropiada | Invadir o alejarse demasiado |
| **Expresión facial** | Acorde al mensaje | Incongruente, tensa |

---

## Escucha Activa

### Los 5 Niveles de Escucha

1. **Ignorar** - No prestar atención
2. **Fingir** - Aparentar que escuchas
3. **Selectiva** - Solo lo que te interesa
4. **Atenta** - Escuchar las palabras
5. **Empática** - Entender sentimientos e intención

### Técnicas de Escucha Activa

| Técnica | Ejemplo |
|---------|---------|
| **Parafrasear** | "Entonces lo que dices es..." |
| **Preguntar** | "¿Podrías darme un ejemplo?" |
| **Resumir** | "En resumen, los puntos principales son..." |
| **Reflejar emociones** | "Parece que eso te frustró..." |
| **Silencio** | Dar espacio para pensar |
`
          },
          {
            id: "lesson-admin-6-2",
            title: "Comunicación Escrita y Reuniones Efectivas",
            duration: "25 min",
            content: `# Comunicación Escrita y Reuniones

## Comunicación Escrita Profesional

### Principios del Email Efectivo

| Principio | Aplicación |
|-----------|------------|
| **Claridad** | Un email, un tema principal |
| **Brevedad** | Ir al punto, eliminar palabrería |
| **Estructura** | Saludo, cuerpo, cierre, firma |
| **Acción clara** | ¿Qué necesitas del receptor? |
| **Revisión** | Ortografía, tono, destinatarios |

### Estructura de Email Profesional

**Asunto:** Específico y descriptivo (no "Consulta")

**Cuerpo:**
1. Saludo personalizado
2. Contexto breve (si es necesario)
3. Mensaje principal (lo más importante primero)
4. Acción requerida y fecha límite
5. Cierre cordial
6. Firma profesional

### Ejemplo

**Asunto:** Aprobación requerida: Presupuesto Marketing Q1 - respuesta antes del viernes

> Hola María,
>
> Te comparto el presupuesto de Marketing para Q1 para tu revisión y aprobación.
>
> **Resumen:**
> - Presupuesto total: $50,000
> - Principales inversiones: Publicidad digital (60%), Eventos (25%), Materiales (15%)
>
> **Acción requerida:** Por favor confirma tu aprobación antes del viernes 15 para proceder con la contratación de proveedores.
>
> El documento detallado está adjunto. Quedo atenta a tus comentarios.
>
> Saludos,
> Ana

---

## Reuniones Efectivas

### El Costo Oculto de las Reuniones

Una reunión de 1 hora con 8 personas = 8 horas de productividad

> **Pregunta antes de convocar:** ¿Se puede resolver con un email, llamada o chat?

### Anatomía de una Reunión Efectiva

**ANTES:**
- [ ] Definir objetivo claro
- [ ] Crear agenda con tiempos
- [ ] Invitar solo a quienes deben estar
- [ ] Enviar materiales con anticipación

**DURANTE:**
- [ ] Empezar y terminar a tiempo
- [ ] Seguir la agenda
- [ ] Asignar roles (facilitador, tomador de notas)
- [ ] Fomentar participación
- [ ] Documentar decisiones y acciones

**DESPUÉS:**
- [ ] Enviar minuta con acciones y responsables
- [ ] Dar seguimiento a compromisos

### Formato de Agenda

| # | Tema | Responsable | Tiempo | Tipo |
|---|------|-------------|--------|------|
| 1 | Revisión de ventas | Juan | 10 min | Informativo |
| 2 | Aprobación de presupuesto | María | 15 min | Decisión |
| 3 | Brainstorm campaña | Equipo | 20 min | Discusión |
| 4 | Próximos pasos | Ana | 5 min | Cierre |

### Formato de Minuta

**Reunión:** [Nombre]
**Fecha:** [Fecha]
**Asistentes:** [Lista]

**Decisiones tomadas:**
1. [Decisión]

**Acciones acordadas:**
| Acción | Responsable | Fecha límite |
|--------|-------------|--------------|
| [Qué] | [Quién] | [Cuándo] |

**Próxima reunión:** [Fecha y hora]
`
          }
        ],
        sprint: {
          title: "Sprint: Comunicación Efectiva",
          description: "Mejora tus habilidades de comunicación profesional",
          tasks: [
            {
              id: "task-admin-6-1",
              question: "Reescribe este email haciéndolo más profesional y efectivo: 'Hola, te escribo para ver si puedes revisar el documento que te mandé hace unos días, es urgente, gracias.'"
            },
            {
              id: "task-admin-6-2",
              question: "Crea una agenda para una reunión de 45 minutos cuyo objetivo es decidir la estrategia de lanzamiento de un nuevo producto. Incluye: temas, responsables, tiempos y tipo de discusión."
            },
            {
              id: "task-admin-6-3",
              question: "Identifica las barreras de comunicación en este escenario: 'El gerente envía un email técnico lleno de siglas a todo el equipo a las 11pm, esperando respuesta para las 7am. El equipo está en 3 zonas horarias diferentes.'"
            },
            {
              id: "task-admin-6-4",
              question: "Practica escucha activa: La próxima vez que alguien te cuente algo, usa al menos 3 técnicas de escucha activa. Documenta qué técnicas usaste y cómo respondió la otra persona."
            }
          ]
        },
        exam: {
          title: "Examen: Comunicación Empresarial",
          description: "Evalúa tus habilidades de comunicación profesional",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Según la regla de Mehrabian, ¿qué porcentaje del impacto de la comunicación corresponde al lenguaje corporal?", options: ["7%", "38%", "55%", "100%"], correctAnswer: 2 },
            { id: "q2", question: "¿Cuál es el nivel más alto de escucha?", options: ["Escucha atenta", "Escucha selectiva", "Escucha empática", "Escucha fingida"], correctAnswer: 2 },
            { id: "q3", question: "Un email profesional debe tener:", options: ["Asunto vago para generar intriga", "Asunto específico, mensaje claro y acción requerida", "Múltiples temas para ser eficiente", "Emojis para parecer amigable"], correctAnswer: 1 },
            { id: "q4", question: "Antes de convocar una reunión, debes preguntarte:", options: ["¿Cuántas personas puedo invitar?", "¿Se puede resolver con email, llamada o chat?", "¿Qué snacks servir?", "¿Cuánto durará el café?"], correctAnswer: 1 },
            { id: "q5", question: "La minuta de una reunión debe incluir:", options: ["Solo la lista de asistentes", "Decisiones tomadas, acciones con responsables y fechas", "La transcripción completa de todo lo dicho", "Solo los temas pendientes"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-7",
        title: "Toma de Decisiones y Resolución de Problemas",
        description: "Desarrolla pensamiento crítico para enfrentar desafíos complejos",
        icon: "Lightbulb",
        lessons: [
          {
            id: "lesson-admin-7-1",
            title: "El Proceso de Toma de Decisiones",
            duration: "25 min",
            content: `# Toma de Decisiones y Resolución de Problemas

## La Importancia de Decidir Bien

> "En cualquier momento de decisión, lo mejor que puedes hacer es lo correcto, lo siguiente mejor es lo incorrecto, y lo peor es no hacer nada." - Theodore Roosevelt

---

## Tipos de Decisiones

| Tipo | Características | Ejemplo |
|------|-----------------|---------|
| **Programadas** | Rutinarias, reglas establecidas | Aprobar vacaciones según política |
| **No programadas** | Nuevas, complejas, sin precedente | Decidir entrar a un nuevo mercado |
| **Estratégicas** | Largo plazo, alto impacto | Fusión con otra empresa |
| **Operativas** | Corto plazo, día a día | Asignar tareas del día |

---

## Proceso Racional de Decisiones

### Paso 1: Identificar el Problema
- ¿Cuál es la situación actual vs. la deseada?
- ¿Es un síntoma o la causa raíz?
- ¿Qué tan urgente es?

### Paso 2: Establecer Criterios de Decisión
- ¿Qué factores son importantes?
- ¿Cómo priorizarlos?

| Criterio | Peso |
|----------|------|
| Costo | 30% |
| Calidad | 25% |
| Tiempo | 20% |
| Riesgo | 15% |
| Alineación estratégica | 10% |

### Paso 3: Generar Alternativas
- Lluvia de ideas sin juzgar
- Considerar opciones creativas
- No descartar prematuramente

### Paso 4: Evaluar Alternativas

| Alternativa | Costo (30%) | Calidad (25%) | Tiempo (20%) | Total |
|-------------|-------------|---------------|--------------|-------|
| Opción A | 8 × 0.3 = 2.4 | 7 × 0.25 = 1.75 | 6 × 0.2 = 1.2 | 5.35 |
| Opción B | 6 × 0.3 = 1.8 | 9 × 0.25 = 2.25 | 8 × 0.2 = 1.6 | 5.65 |

### Paso 5: Seleccionar la Mejor Alternativa
- La de mayor puntuación ponderada
- Considerar intuición y experiencia
- Validar con stakeholders clave

### Paso 6: Implementar
- Plan de acción
- Comunicar la decisión
- Asignar recursos

### Paso 7: Evaluar Resultados
- ¿Se logró el objetivo?
- ¿Qué aprendimos?

---

## Sesgos Cognitivos que Afectan las Decisiones

| Sesgo | Descripción | Cómo evitarlo |
|-------|-------------|---------------|
| **Confirmación** | Buscar solo info que confirme tu creencia | Buscar activamente info contraria |
| **Anclaje** | Depender demasiado de primera información | Considerar múltiples fuentes |
| **Disponibilidad** | Sobreestimar lo que recuerdas fácilmente | Usar datos, no solo memoria |
| **Costo hundido** | Continuar por lo ya invertido | Evaluar solo el futuro |
| **Exceso de confianza** | Creer que sabes más de lo que sabes | Pedir feedback, cuestionar supuestos |
`
          },
          {
            id: "lesson-admin-7-2",
            title: "Herramientas de Análisis y Resolución",
            duration: "25 min",
            content: `# Herramientas de Análisis y Resolución

## Los 5 Porqués (Root Cause Analysis)

Técnica para llegar a la causa raíz de un problema.

**Ejemplo:**

**Problema:** El cliente está insatisfecho

1. ¿Por qué? → El pedido llegó tarde
2. ¿Por qué? → El envío se retrasó
3. ¿Por qué? → El producto no estaba en inventario
4. ¿Por qué? → El proveedor no entregó a tiempo
5. ¿Por qué? → No teníamos contrato con fecha de entrega garantizada

**Causa raíz:** Falta de acuerdos de nivel de servicio con proveedores

---

## Diagrama de Ishikawa (Espina de Pescado)

Organiza posibles causas por categorías:

**Las 6 M's:**
- **Mano de obra** - Personas
- **Métodos** - Procesos
- **Máquinas** - Equipos
- **Materiales** - Insumos
- **Medición** - Métricas
- **Medio ambiente** - Entorno

---

## Matriz de Decisión

Para comparar alternativas sistemáticamente:

| Criterio | Peso | Opción A | Opción B | Opción C |
|----------|------|----------|----------|----------|
| Costo | 25% | 8 (2.0) | 6 (1.5) | 9 (2.25) |
| Calidad | 30% | 7 (2.1) | 9 (2.7) | 6 (1.8) |
| Rapidez | 20% | 9 (1.8) | 5 (1.0) | 7 (1.4) |
| Riesgo | 25% | 6 (1.5) | 8 (2.0) | 7 (1.75) |
| **TOTAL** | 100% | **7.4** | **7.2** | **7.2** |

---

## Árbol de Decisiones

Para decisiones con incertidumbre y múltiples escenarios:

**Estructura:**
- **Nodos de decisión** (cuadrados): Opciones que controlas
- **Nodos de azar** (círculos): Eventos inciertos con probabilidades
- **Resultados** (triángulos): Valores finales

**Ejemplo simplificado:**

Decisión: ¿Lanzar producto nuevo?

- Lanzar
  - Éxito (60%): Ganancia $500K
  - Fracaso (40%): Pérdida $200K
  - **Valor esperado:** (0.6 × $500K) + (0.4 × -$200K) = $220K
- No lanzar
  - **Valor esperado:** $0

**Decisión recomendada:** Lanzar (valor esperado positivo)

---

## Técnicas de Creatividad

### Brainstorming
1. Cantidad sobre calidad
2. Sin críticas durante la generación
3. Ideas locas bienvenidas
4. Construir sobre ideas de otros

### SCAMPER
Preguntas para generar ideas:

| Letra | Pregunta |
|-------|----------|
| **S**ustituir | ¿Qué puedo reemplazar? |
| **C**ombinar | ¿Qué puedo unir? |
| **A**daptar | ¿Qué puedo ajustar? |
| **M**odificar | ¿Qué puedo cambiar? |
| **P**oner otros usos | ¿Para qué más sirve? |
| **E**liminar | ¿Qué puedo quitar? |
| **R**eorganizar | ¿Qué puedo reordenar? |

---

## Decisiones en Grupo

### Técnicas de Consenso

| Técnica | Cuándo usar |
|---------|-------------|
| **Votación** | Decisiones rápidas, opciones claras |
| **Consenso** | Compromiso de todos es crítico |
| **Delegación** | Experto claro, decisión técnica |
| **Consulta** | Input de varios, uno decide |

### Evitar el Pensamiento Grupal

- Asignar un "abogado del diablo"
- Pedir opiniones individuales antes de discutir
- Invitar perspectivas externas
- Liderazgo no debe expresar preferencia primero
`
          }
        ],
        sprint: {
          title: "Sprint: Análisis y Decisiones",
          description: "Practica técnicas de resolución de problemas",
          tasks: [
            {
              id: "task-admin-7-1",
              question: "Aplica los '5 Porqués' a un problema real o ficticio hasta llegar a la causa raíz. Documenta cada 'porqué' y tu análisis final."
            },
            {
              id: "task-admin-7-2",
              question: "Crea una Matriz de Decisión para elegir entre 3 opciones de tu elección (puede ser comprar un producto, elegir un proveedor, etc.). Define al menos 4 criterios con pesos y califica cada opción."
            },
            {
              id: "task-admin-7-3",
              question: "Identifica 3 sesgos cognitivos que podrían afectar una decisión importante en tu trabajo o vida personal. Para cada uno, describe una estrategia específica para contrarrestarlo."
            }
          ]
        },
        exam: {
          title: "Examen: Toma de Decisiones",
          description: "Evalúa tus habilidades de análisis y decisión",
          passingScore: 70,
          questions: [
            { id: "q1", question: "¿Cuál es el objetivo de la técnica de los '5 Porqués'?", options: ["Hacer muchas preguntas", "Llegar a la causa raíz de un problema", "Evaluar 5 alternativas", "Consultar a 5 personas"], correctAnswer: 1 },
            { id: "q2", question: "El sesgo de 'costo hundido' nos hace:", options: ["Continuar algo solo porque ya invertimos en ello", "Buscar solo información que confirme nuestra creencia", "Sobreestimar nuestra capacidad", "Depender de la primera información recibida"], correctAnswer: 0 },
            { id: "q3", question: "En un Árbol de Decisiones, los nodos cuadrados representan:", options: ["Eventos aleatorios", "Decisiones que controlamos", "Resultados finales", "Probabilidades"], correctAnswer: 1 },
            { id: "q4", question: "¿Qué regla es fundamental en un Brainstorming?", options: ["Criticar ideas para mejorarlas", "No criticar durante la generación de ideas", "Solo el jefe puede proponer ideas", "Limitar a 5 ideas por persona"], correctAnswer: 1 },
            { id: "q5", question: "Para evitar el 'pensamiento grupal' en decisiones de equipo, se recomienda:", options: ["Que el líder dé su opinión primero", "Asignar un 'abogado del diablo'", "Votar rápidamente sin discutir", "Evitar perspectivas externas"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-8",
        title: "Liderazgo y Motivación",
        description: "Desarrolla las habilidades para inspirar y guiar equipos hacia el éxito",
        icon: "Award",
        lessons: [
          {
            id: "lesson-admin-8-1",
            title: "Estilos de Liderazgo",
            duration: "25 min",
            content: `# Liderazgo y Motivación

## ¿Qué es el Liderazgo?

> "El liderazgo no se trata de estar al mando. Se trata de cuidar a las personas a tu cargo." - Simon Sinek

**Liderazgo:** La capacidad de influir en otros para lograr objetivos comunes.

**Diferencia con la gestión:**
| Gestión | Liderazgo |
|---------|-----------|
| Planifica y presupuesta | Establece dirección |
| Organiza y asigna | Alinea personas |
| Controla y resuelve | Motiva e inspira |
| Produce orden | Produce cambio |

> Lo ideal: Ser líder Y gestor según la situación.

---

## Estilos de Liderazgo

### 1. Autocrático
- El líder decide solo
- Comunicación unidireccional
- **Cuándo usar:** Crisis, decisiones urgentes, equipo inexperto

### 2. Democrático/Participativo
- Involucra al equipo en decisiones
- Fomenta la participación
- **Cuándo usar:** Equipo experimentado, se necesita compromiso

### 3. Laissez-faire (Delegativo)
- Mínima intervención del líder
- Alta autonomía del equipo
- **Cuándo usar:** Equipo muy experimentado y automotivado

### 4. Transformacional
- Inspira con visión
- Desarrolla a las personas
- Genera cambio significativo
- **Cuándo usar:** Transformación organizacional, desarrollo de talento

### 5. Situacional (Hersey & Blanchard)
Adapta el estilo según la madurez del colaborador:

| Nivel del Colaborador | Estilo del Líder |
|----------------------|------------------|
| Baja competencia, bajo compromiso | **Dirigir** (alta tarea, baja relación) |
| Alguna competencia, bajo compromiso | **Entrenar** (alta tarea, alta relación) |
| Alta competencia, variable compromiso | **Apoyar** (baja tarea, alta relación) |
| Alta competencia, alto compromiso | **Delegar** (baja tarea, baja relación) |

---

## Inteligencia Emocional en el Liderazgo

### Los 5 Componentes (Daniel Goleman)

| Componente | Descripción | Ejemplo |
|------------|-------------|---------|
| **Autoconciencia** | Conocer tus emociones | Reconocer cuando estás frustrado |
| **Autorregulación** | Controlar impulsos | No explotar ante críticas |
| **Motivación** | Impulso interno | Persistir ante obstáculos |
| **Empatía** | Entender emociones de otros | Percibir preocupación de un empleado |
| **Habilidades sociales** | Gestionar relaciones | Resolver conflictos constructivamente |

---

## El Líder como Coach

### El Modelo GROW

| Etapa | Pregunta Clave |
|-------|----------------|
| **G**oal (Meta) | ¿Qué quieres lograr? |
| **R**eality (Realidad) | ¿Dónde estás ahora? |
| **O**ptions (Opciones) | ¿Qué podrías hacer? |
| **W**ill (Voluntad) | ¿Qué vas a hacer? |

**Ejemplo de conversación de coaching:**

- **G:** "¿Qué te gustaría lograr en los próximos 6 meses?"
- **R:** "¿Qué has intentado hasta ahora? ¿Qué obstáculos has encontrado?"
- **O:** "¿Qué otras opciones podrías considerar? ¿Qué pasaría si...?"
- **W:** "¿Qué harás específicamente? ¿Para cuándo? ¿Cómo sabré que lo lograste?"
`
          },
          {
            id: "lesson-admin-8-2",
            title: "Teorías de Motivación",
            duration: "25 min",
            content: `# Teorías de Motivación

## ¿Qué nos Motiva?

> "Las personas trabajan por dinero, pero van más allá por reconocimiento, elogio y recompensas." - Dale Carnegie

---

## Pirámide de Maslow

Las necesidades humanas en orden jerárquico:

| Nivel | Necesidad | En el Trabajo |
|-------|-----------|---------------|
| 5 | **Autorrealización** | Desarrollo, creatividad, desafíos |
| 4 | **Estima** | Reconocimiento, logros, respeto |
| 3 | **Sociales** | Pertenencia, trabajo en equipo, relaciones |
| 2 | **Seguridad** | Estabilidad laboral, beneficios, ambiente seguro |
| 1 | **Fisiológicas** | Salario justo, descansos, condiciones básicas |

> Debemos satisfacer los niveles inferiores antes de aspirar a los superiores.

---

## Teoría de Herzberg (Dos Factores)

| Factores Higiénicos | Factores Motivadores |
|---------------------|----------------------|
| Evitan insatisfacción | Generan satisfacción |
| Salario, condiciones, políticas | Logro, reconocimiento |
| Seguridad, supervisión | Trabajo interesante |
| Relaciones laborales | Responsabilidad, crecimiento |

> **Clave:** Mejorar factores higiénicos previene quejas, pero para motivar debes trabajar los motivadores.

---

## Teoría de las Expectativas (Vroom)

**Motivación = Expectativa × Instrumentalidad × Valencia**

| Factor | Pregunta |
|--------|----------|
| **Expectativa** | ¿Puedo hacerlo? (esfuerzo → desempeño) |
| **Instrumentalidad** | ¿Me dará resultado? (desempeño → recompensa) |
| **Valencia** | ¿Quiero esa recompensa? (valor personal) |

> Si cualquier factor es cero, la motivación es cero.

**Ejemplo:** Un empleado no estará motivado si:
- No cree poder lograr la meta (baja expectativa)
- Cree que aunque logre la meta no le darán el bono (baja instrumentalidad)
- No le importa el bono ofrecido (baja valencia)

---

## Motivación Intrínseca vs. Extrínseca

| Intrínseca | Extrínseca |
|------------|------------|
| Desde adentro | Desde afuera |
| Satisfacción personal | Recompensas externas |
| "Me gusta lo que hago" | "Me pagan por hacerlo" |
| Más duradera | Puede disminuir con el tiempo |

---

## Cómo Motivar a tu Equipo

### Estrategias Prácticas

1. **Reconoce logros** - Público para grandes logros, privado para mejoras
2. **Da autonomía** - Permite decidir el "cómo"
3. **Conecta con propósito** - Explica el "por qué" importa su trabajo
4. **Ofrece desarrollo** - Oportunidades de aprender y crecer
5. **Proporciona feedback** - Frecuente, específico, constructivo
6. **Elimina obstáculos** - Facilita que puedan hacer su trabajo
7. **Celebra victorias** - Grandes y pequeñas

### Errores Comunes

❌ Asumir que todos se motivan igual
❌ Solo reconocer cuando hay problemas
❌ Prometer lo que no puedes cumplir
❌ Microgestionar talento experimentado
❌ Ignorar el balance vida-trabajo

---

## El Poder del Reconocimiento

| Tipo | Ejemplo |
|------|---------|
| **Verbal** | "Excelente trabajo en la presentación" |
| **Escrito** | Email de felicitación copiando al equipo |
| **Público** | Mención en reunión general |
| **Tangible** | Bono, día libre, regalo |
| **Desarrollo** | Asignar proyecto desafiante |

> El reconocimiento sincero, específico y oportuno es una de las herramientas más poderosas y económicas de motivación.
`
          }
        ],
        sprint: {
          title: "Sprint: Tu Liderazgo",
          description: "Desarrolla tus habilidades de liderazgo y motivación",
          tasks: [
            {
              id: "task-admin-8-1",
              question: "Reflexiona sobre tu estilo de liderazgo actual. ¿Cuál de los estilos (Autocrático, Democrático, Laissez-faire, Transformacional) usas más frecuentemente? ¿En qué situaciones funciona y en cuáles deberías adaptar?"
            },
            {
              id: "task-admin-8-2",
              question: "Usando el modelo GROW, diseña una conversación de coaching para ayudar a un colaborador que quiere mejorar sus habilidades de presentación. Escribe al menos 2 preguntas para cada etapa (G, R, O, W)."
            },
            {
              id: "task-admin-8-3",
              question: "Piensa en un miembro de tu equipo (real o ficticio). Usando la Teoría de las Expectativas, analiza su motivación actual. ¿Cuál de los tres factores (Expectativa, Instrumentalidad, Valencia) podría estar bajo? ¿Qué harías para mejorarlo?"
            },
            {
              id: "task-admin-8-4",
              question: "Crea un plan de reconocimiento para tu equipo que incluya al menos 5 formas diferentes de reconocer logros (no todas pueden ser monetarias). Especifica cuándo usarías cada una."
            }
          ]
        },
        exam: {
          title: "Examen: Liderazgo y Motivación",
          description: "Evalúa tu comprensión del liderazgo y la motivación",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Según el Liderazgo Situacional, ¿qué estilo usar con alguien de alta competencia y alto compromiso?", options: ["Dirigir", "Entrenar", "Apoyar", "Delegar"], correctAnswer: 3 },
            { id: "q2", question: "En la Pirámide de Maslow, ¿qué nivel está en la cima?", options: ["Seguridad", "Estima", "Sociales", "Autorrealización"], correctAnswer: 3 },
            { id: "q3", question: "Según Herzberg, ¿qué tipo de factor es el salario?", options: ["Factor motivador", "Factor higiénico", "Factor de autorrealización", "No es un factor relevante"], correctAnswer: 1 },
            { id: "q4", question: "En el modelo GROW de coaching, la 'R' significa:", options: ["Resultado", "Realidad", "Recursos", "Reconocimiento"], correctAnswer: 1 },
            { id: "q5", question: "La motivación intrínseca proviene de:", options: ["Bonos y aumentos", "La satisfacción personal y el interés en la tarea", "La presión del jefe", "Las políticas de la empresa"], correctAnswer: 1 }
          ]
        }
      },
      {
        id: "module-admin-9",
        title: "Gestión del Cambio e Innovación",
        description: "Lidera transformaciones organizacionales y fomenta la cultura de innovación",
        icon: "RefreshCw",
        lessons: [
          {
            id: "lesson-admin-9-1",
            title: "El Proceso del Cambio Organizacional",
            duration: "25 min",
            content: `# Gestión del Cambio e Innovación

## ¿Por Qué el Cambio es Difícil?

> "No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que responde mejor al cambio." - Charles Darwin

### Razones de Resistencia al Cambio

| Razón | Ejemplo |
|-------|---------|
| **Miedo a lo desconocido** | "¿Y si no funciona?" |
| **Pérdida de control** | "Siempre lo hice así" |
| **Incertidumbre laboral** | "¿Perderé mi trabajo?" |
| **Esfuerzo adicional** | "Ahora tengo que aprender algo nuevo" |
| **Malas experiencias pasadas** | "El último cambio fue un desastre" |

---

## El Modelo de Kotter (8 Pasos)

### Fase 1: Crear el Clima para el Cambio

**1. Crear sentido de urgencia**
- Mostrar por qué el cambio es necesario AHORA
- Identificar amenazas y oportunidades
- "Si no cambiamos, esto pasará..."

**2. Formar una coalición poderosa**
- Reunir líderes influyentes
- No solo jerárquicos, también informales
- Equipo diverso y comprometido

**3. Crear una visión para el cambio**
- Claridad de hacia dónde vamos
- Inspiradora y alcanzable
- Fácil de comunicar (30 segundos)

### Fase 2: Involucrar y Habilitar

**4. Comunicar la visión**
- Repetir, repetir, repetir
- Múltiples canales
- Modelar el cambio (walk the talk)

**5. Eliminar obstáculos**
- Remover barreras estructurales
- Capacitar en nuevas habilidades
- Alinear sistemas y procesos

**6. Generar victorias a corto plazo**
- Planificar éxitos visibles y tempranos
- Reconocer a quienes contribuyen
- Demostrar que el cambio funciona

### Fase 3: Implementar y Sostener

**7. Consolidar los logros**
- Usar credibilidad para más cambio
- No declarar victoria prematuramente
- Contratar y promover agentes de cambio

**8. Anclar el cambio en la cultura**
- Conectar nuevos comportamientos con éxito
- Institucionalizar las mejoras
- Desarrollar sucesores que mantengan el cambio

---

## La Curva del Cambio (Kübler-Ross adaptada)

Etapas emocionales durante el cambio:

| Etapa | Comportamiento | Qué hacer |
|-------|----------------|-----------|
| **1. Negación** | "Esto no nos afectará" | Comunicar realidad, dar información |
| **2. Resistencia** | Enojo, frustración | Escuchar, empatizar, no ignorar |
| **3. Exploración** | Buscar alternativas | Dar espacio para experimentar |
| **4. Compromiso** | Aceptación activa | Reforzar, celebrar |

> **Clave:** Las personas atraviesan estas etapas a diferente velocidad. Paciencia y apoyo.
`
          },
          {
            id: "lesson-admin-9-2",
            title: "Cultura de Innovación",
            duration: "25 min",
            content: `# Cultura de Innovación

## ¿Qué es Innovar?

> "Innovación no es solo tener una idea; es ejecutarla y crear valor."

**Tipos de innovación:**

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Incremental** | Mejoras pequeñas y continuas | Nueva versión de software |
| **Disruptiva** | Cambia reglas del juego | Netflix vs. Blockbuster |
| **De producto** | Nuevo producto o servicio | iPhone |
| **De proceso** | Nueva forma de hacer algo | Producción lean |
| **De modelo de negocio** | Nueva forma de crear valor | Uber, Airbnb |

---

## Creando una Cultura Innovadora

### Elementos Clave

1. **Tolerancia al fracaso**
   - El fracaso es aprendizaje
   - "Fail fast, learn fast"
   - Celebrar los intentos, no solo éxitos

2. **Tiempo para explorar**
   - Google: 20% del tiempo para proyectos propios
   - Espacios de experimentación
   - Hackathons y laboratorios de innovación

3. **Diversidad de perspectivas**
   - Equipos multidisciplinarios
   - Inclusión de voces diferentes
   - Colaboración cross-funcional

4. **Incentivos alineados**
   - Reconocer innovadores
   - No castigar el riesgo calculado
   - Premiar ideas implementadas

---

## Design Thinking

Metodología centrada en el usuario para resolver problemas:

### Las 5 Etapas

| Etapa | Objetivo | Actividades |
|-------|----------|-------------|
| **1. Empatizar** | Entender al usuario | Observar, entrevistar, sumergirse |
| **2. Definir** | Clarificar el problema | Sintetizar insights, definir reto |
| **3. Idear** | Generar soluciones | Brainstorming, SCAMPER, mapas mentales |
| **4. Prototipar** | Construir para pensar | Modelos rápidos y baratos |
| **5. Testear** | Aprender y iterar | Probar con usuarios reales |

---

## Lean Startup

Metodología para innovación con recursos limitados:

### Ciclo Build-Measure-Learn

1. **Build (Construir):** Crear MVP (Producto Mínimo Viable)
2. **Measure (Medir):** Recolectar datos del mercado
3. **Learn (Aprender):** Validar o invalidar hipótesis

> **MVP:** La versión más simple del producto que permite aprender del mercado.

### Pivotar vs. Perseverar

| Pivotar | Perseverar |
|---------|------------|
| Los datos muestran que la hipótesis es incorrecta | Los datos validan la dirección |
| Cambiar estrategia basado en aprendizaje | Continuar optimizando |
| Ejemplo: cambiar segmento de clientes | Ejemplo: escalar lo que funciona |

---

## Barreras a la Innovación

| Barrera | Solución |
|---------|----------|
| "Siempre lo hicimos así" | Cuestionar el status quo sistemáticamente |
| Miedo al fracaso | Crear ambiente seguro para experimentar |
| Silos organizacionales | Equipos cross-funcionales, colaboración |
| Falta de recursos | Innovación frugal, tiempo dedicado |
| Presión por resultados inmediatos | Balance entre corto y largo plazo |

---

## Métricas de Innovación

| Métrica | Qué Mide |
|---------|----------|
| # de ideas generadas | Volumen de input creativo |
| # de experimentos | Actividad de exploración |
| Tasa de éxito de proyectos | Efectividad de selección |
| Time-to-market | Velocidad de ejecución |
| % de ingresos de productos nuevos | Impacto en resultados |
`
          }
        ],
        sprint: {
          title: "Sprint: Liderando el Cambio",
          description: "Aplica técnicas de gestión del cambio e innovación",
          tasks: [
            {
              id: "task-admin-9-1",
              question: "Piensa en un cambio que tu organización (o una ficticia) necesite implementar. Usando el modelo de Kotter, diseña los primeros 3 pasos: cómo crearías urgencia, quiénes formarían tu coalición, y cómo sería tu visión del cambio."
            },
            {
              id: "task-admin-9-2",
              question: "Identifica 3 barreras a la innovación en tu entorno de trabajo actual. Para cada una, propón una acción específica para superarla."
            },
            {
              id: "task-admin-9-3",
              question: "Aplica Design Thinking a un problema real: (1) describe a tu usuario y sus necesidades (Empatizar), (2) define el problema en una oración (Definir), (3) genera 5 posibles soluciones (Idear)."
            },
            {
              id: "task-admin-9-4",
              question: "Define un MVP (Producto Mínimo Viable) para probar una idea de negocio o mejora. ¿Qué sería lo mínimo que necesitas construir para aprender si tu idea funciona? ¿Qué métricas usarías para evaluar?"
            }
          ]
        },
        exam: {
          title: "Examen Final: Cambio e Innovación",
          description: "Evalúa tu capacidad para liderar cambio y fomentar innovación",
          passingScore: 70,
          questions: [
            { id: "q1", question: "Según Kotter, ¿cuál es el primer paso para liderar un cambio exitoso?", options: ["Comunicar la visión", "Crear sentido de urgencia", "Formar coalición", "Celebrar victorias"], correctAnswer: 1 },
            { id: "q2", question: "En la Curva del Cambio, después de la Negación viene:", options: ["Compromiso", "Exploración", "Resistencia", "Aceptación"], correctAnswer: 2 },
            { id: "q3", question: "¿Qué significa MVP en Lean Startup?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Proposition", "Market Validation Process"], correctAnswer: 1 },
            { id: "q4", question: "La primera etapa de Design Thinking es:", options: ["Prototipar", "Definir", "Empatizar", "Idear"], correctAnswer: 2 },
            { id: "q5", question: "¿Qué caracteriza a una innovación disruptiva?", options: ["Pequeñas mejoras graduales", "Cambia las reglas del juego en una industria", "Solo aplica a tecnología", "Es más cara que las alternativas"], correctAnswer: 1 }
          ]
        }
      }
    ]
  }
];
