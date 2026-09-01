export type Locale = "es" | "en";

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  highlights: ProjectHighlight[];
  architecture: string[];
  learnings: string;
  images: ProjectImage[];
  accent: "nyx" | "saas" | "enterprise" | "helix";
  icon: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    stats: { label: string; value: string }[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    problem: string;
    solution: string;
    role: string;
    stack: string;
    highlights: string;
    architecture: string;
    learnings: string;
    gallery: string;
    close: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: { name: string; items: string[] }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
    github: string;
    githubLabel: string;
    githubUrl: string;
  };
  footer: {
    rights: string;
    built: string;
  };
  projectsData: Project[];
}

const nyxImagesEs: ProjectImage[] = [
  {
    src: "./projects/nyx-home.png",
    alt: "Pantalla de inicio de NYX con historias destacadas",
    caption: "Inicio mobile-first con carrusel y recomendaciones",
  },
  {
    src: "./projects/nyx-chat.png",
    alt: "Chat con companion de IA en NYX",
    caption: "Chat 1:1 con memoria emocional e interfaz PWA",
  },
];

const nyxImagesEn: ProjectImage[] = [
  {
    src: "./projects/nyx-home.png",
    alt: "NYX home screen with featured stories",
    caption: "Mobile-first home with carousel and recommendations",
  },
  {
    src: "./projects/nyx-chat.png",
    alt: "AI companion chat in NYX",
    caption: "1:1 chat with emotional memory and PWA interface",
  },
];

const saasImagesEs: ProjectImage[] = [
  {
    src: "./projects/saas-dashboard.png",
    alt: "Panel administrativo de Empleado Digital",
    caption: "Dashboard con métricas, cotizaciones y facturas",
  },
  {
    src: "./projects/saas-inbox.png",
    alt: "Inbox de conversaciones WhatsApp",
    caption: "Inbox unificado para atención y cotización por WhatsApp",
  },
];

const saasImagesEn: ProjectImage[] = [
  {
    src: "./projects/saas-dashboard.png",
    alt: "Empleado Digital admin panel",
    caption: "Dashboard with metrics, quotes, and invoices",
  },
  {
    src: "./projects/saas-inbox.png",
    alt: "WhatsApp conversation inbox",
    caption: "Unified inbox for customer service and quoting",
  },
];

const monitorImagesEs: ProjectImage[] = [
  {
    src: "./projects/monitor-dashboard.png",
    alt: "Tablero en terminal del monitor de carga en vivo — Telecom",
    caption:
      "Monitor en Linux para Oracle, SQL Server e Informix. Sin rutas ni datos internos.",
  },
];

const monitorImagesEn: ProjectImage[] = [
  {
    src: "./projects/monitor-dashboard.png",
    alt: "Live load monitor terminal dashboard — Telecom",
    caption:
      "Linux monitor for Oracle, SQL Server, and Informix. No internal paths or data.",
  },
];

const proceso4ImagesEs: ProjectImage[] = [
  {
    src: "./projects/proceso4-pipeline.png",
    alt: "Diagrama del pipeline batch Proceso 4",
    caption:
      "Flujo: validación → procesamiento por motor → bitácora → carga → notificación.",
  },
];

const proceso4ImagesEn: ProjectImage[] = [
  {
    src: "./projects/proceso4-pipeline.png",
    alt: "Proceso 4 batch pipeline diagram",
    caption:
      "Flow: validation → per-engine processing → logbook → load → notification.",
  },
];

export const translations: Record<Locale, Translations> = {
  es: {
    meta: {
      title: "Portafolio — Alejandra Martínez",
      description:
        "Alejandra Martínez — Backend, datos y productos propios. NYX (App Store), HostHelix, Empleado Digital (MVP) y pipelines en telecom.",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alejandra Martínez",
      role: "Backend, datos y productos propios",
      subtitle:
        "APIs, seguridad y operación: NYX en App Store, HostHelix (lab molecular), Empleado Digital en MVP y pipelines batch en telecom.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      stats: [
        { label: "Proyectos destacados", value: "5" },
        { label: "Stack", value: "Python · .NET · React" },
        { label: "Enfoque", value: "Backend + producto" },
      ],
    },
    about: {
      title: "Sobre mí",
      p1: "Ingeniera en datos y sistemas: backend, validaciones, control de accesos y operación en producción. También diseño y publico productos propios de principio a fin.",
      p2: "NYX está en App Store (chat IA, wallet, IAP y política de contenido). HostHelix es un laboratorio visual de ARN/ADN (iOS y Android). Empleado Digital es un SaaS multi-tenant fiscal en MVP. En telecom construí el pipeline batch Proceso 4 y un monitor de carga en Linux para Oracle, SQL Server e Informix.",
      p3: "Me interesa la intersección entre integridad de datos, seguridad aplicada y sistemas que se pueden operar: límites, webhooks, bitácoras y ambientes DEV / QA / PROD.",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Productos publicados, un SaaS en MVP y herramientas de operación en telecom.",
      viewDetails: "Ver detalles",
      problem: "Problema",
      solution: "Solución",
      role: "Mi rol",
      stack: "Tecnologías",
      highlights: "Funcionalidades clave",
      architecture: "Arquitectura",
      learnings: "Aprendizajes",
      gallery: "Capturas",
      close: "Cerrar",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y áreas en las que trabajo.",
      categories: [
        {
          name: "Lenguajes",
          items: [
            "Python 3.10–3.12",
            "C# / ASP.NET Core 9",
            "TypeScript",
            "SQL",
            "Bash",
          ],
        },
        {
          name: "Backend & APIs",
          items: [
            "FastAPI",
            "ASP.NET Core (Clean Architecture)",
            "REST / JSON",
            "SQLAlchemy · EF Core",
            "OpenAPI / Swagger",
            "Webhooks y jobs",
          ],
        },
        {
          name: "Seguridad & Auth",
          items: [
            "JWT · BCrypt · API keys",
            "OAuth (Google, Sign in with Apple)",
            "TOTP / 2FA · magic links",
            "HMAC (webhooks y firmas)",
            "Rate limiting · multi-tenant",
            "Política de contenido",
          ],
        },
        {
          name: "Datos",
          items: [
            "PostgreSQL",
            "SQL Server · Oracle · Informix",
            "MySQL",
            "ETL / SQL*Loader",
            "CFDI 4.0 vía PAC (sin timbrar en casa)",
          ],
        },
        {
          name: "Cloud, ops & pagos",
          items: [
            "AWS (EC2, procesos, monitoreo)",
            "Docker · Caddy / nginx",
            "DEV / QA / PROD",
            "Apple IAP · Mercado Pago",
            "WhatsApp Cloud API (Meta)",
          ],
        },
        {
          name: "Frontend & mobile",
          items: [
            "React · Vite · TypeScript",
            "Capacitor (iOS / Android)",
            "PWA · i18n (ES / EN / JA)",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Interesado en colaborar, contratar o conocer más sobre mis proyectos? Escríbeme.",
      email: "alexmmartinez1@hotmail.com",
      emailLabel: "Email",
      github: "Ale123qr",
      githubLabel: "GitHub",
      githubUrl: "https://github.com/Ale123qr",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Construido con React + Vite + TypeScript",
    },
    projectsData: [
      {
        id: "nyx",
        name: "NYX",
        tagline: "App iOS de companions, historias e IA — publicada en App Store",
        type: "B2C · App Store · FastAPI + Capacitor",
        problem:
          "Las apps de chat con IA suelen sentirse genéricas, sin continuidad ni control de abuso. Falta memoria por plan, pagos verificados y límites reales de uso.",
        solution:
          "NYX es un producto end-to-end: chat con IA, memoria recortada por plan, mundos (Historia Viva), imágenes, wallet PA y monetización (Apple IAP + Mercado Pago). Auth JWT, OAuth, rate limiting y política de contenido en backend.",
        role: "Fundadora / desarrollo end-to-end: backend FastAPI, app React/TypeScript (Capacitor iOS), wallet, IAP, webhooks, i18n ES/EN/JA, Docker/AWS y ficha en App Store Connect.",
        stack: [
          "FastAPI",
          "Python",
          "React",
          "TypeScript",
          "Capacitor",
          "JWT / OAuth",
          "Apple IAP",
          "Docker",
        ],
        highlights: [
          {
            title: "APIs, planes y abuso",
            description:
              "JWT, Free/Plus/VIP y límites por plan (mensajes, imágenes, mundos, memoria).",
          },
          {
            title: "Wallet y pagos",
            description:
              "Economía PA, Apple IAP (suscripción + restore) y Mercado Pago con webhooks firmados.",
          },
          {
            title: "Seguridad",
            description:
              "Política de contenido, rate limiting y testers de abuso; registro siempre Free en prod.",
          },
          {
            title: "Chat, memoria y mundos",
            description:
              "Streaming, memoria persistente y Historia Viva (canon, capítulos, puente al chat 1:1).",
          },
          {
            title: "App Store",
            description:
              "Publicada en iOS; Sign in with Apple, baja de cuenta e i18n ES/EN/JA.",
          },
        ],
        architecture: [
          "App: React/TS + Capacitor → API same-origin",
          "Backend: FastAPI routers → services → schemas (Pydantic)",
          "Servicios: chat, memory, wallet, payments, images, worlds, safety",
          "Deploy: Docker + Caddy TLS + nginx; tests unit + Playwright e2e",
        ],
        learnings:
          "Aprendí a unir producto de IA con controles reales: entitlements, webhooks que solo acreditan pagos approved y safety en el mismo request path que el chat.",
        images: nyxImagesEs,
        accent: "nyx",
        icon: "✦",
      },
      {
        id: "hosthelix",
        name: "HostHelix",
        tagline: "Laboratorio visual de ARN/ADN — app educativa iOS y Android",
        type: "Educativo · App Store · Capacitor",
        problem:
          "Explicar hélice, patógenos y fármacos en 2D se queda corto. Faltaba un laboratorio visual, sin uso clínico ni datos de salud.",
        solution:
          "App de simulación molecular: hélice, pool celular, ensayos y exportación JSON/PDF. Mismo producto para iPhone, iPad y Android. Auth (correo, Apple, Google), baja de cuenta y compra única en App Store.",
        role: "Desarrollo end-to-end: UI 3D, lógica de ensayos, empaquetado Capacitor, privacidad (sin datos de salud) y ficha en App Store Connect.",
        stack: [
          "React",
          "TypeScript",
          "Capacitor",
          "Firebase Auth",
          "iOS / Android",
        ],
        highlights: [
          {
            title: "Simulación 3D",
            description:
              "Interacción con la hélice, patógenos, fármacos y pool celular. Sin uso clínico.",
          },
          {
            title: "Ensayos y exportación",
            description:
              "Guardado local y salida a JSON/PDF para revisar el experimento.",
          },
          {
            title: "Auth y privacidad",
            description:
              "Correo, Sign in with Apple y Google; eliminación de cuenta; sin permisos innecesarios.",
          },
          {
            title: "Multiplataforma",
            description:
              "Un codebase (Capacitor + React/TS) para iOS y Android; compra única en App Store.",
          },
        ],
        architecture: [
          "Frontend React/TS + vista 3D de simulación",
          "Capacitor para iOS y Android",
          "Auth Firebase (Apple / Google / correo)",
          "Estado local; sin backend clínico ni PHI",
        ],
        learnings:
          "Aprendí a cerrar un producto educativo para tiendas: privacidad explícita, auth de Apple y un solo código para dos plataformas.",
        images: [],
        accent: "helix",
        icon: "◎",
      },
      {
        id: "empleado-digital",
        name: "Empleado Digital",
        tagline: "SaaS B2B multi-tenant — MVP en desarrollo",
        type: "B2B · MVP · PyMEs México",
        problem:
          "Las PyMEs pierden ventas por cotizar a mano en WhatsApp y facturar sin un flujo con reglas. Necesitan aislamiento por empresa y CFDI sin montar un PAC propio.",
        solution:
          "MVP: empleado admin por WhatsApp oficial, CRM, cotización, venta y orquestación CFDI 4.0 vía PAC (sin timbrar en casa). Multi-tenant con JWT y gating por plan. Aún no está en operación comercial.",
        role: "Arquitectura y backend: Clean Architecture en .NET, PostgreSQL, webhook WhatsApp, panel React, validaciones fiscales y planes. PAC productivo y tienda, pendientes.",
        stack: [
          "ASP.NET Core 9",
          "PostgreSQL",
          "React",
          "TypeScript",
          "OpenAI",
          "WhatsApp API",
          "Docker",
          "Clean Architecture",
        ],
        highlights: [
          {
            title: "WhatsApp Cloud API",
            description:
              "Webhook oficial de Meta, inbox unificado y simulador de desarrollo.",
          },
          {
            title: "Cotizador por vertical",
            description:
              "Catálogo configurable por industria, PDF y flujo de aceptación.",
          },
          {
            title: "Multi-tenant",
            description:
              "Registro de tenants, onboarding, políticas e integraciones por negocio.",
          },
          {
            title: "Orquestador fiscal (MVP)",
            description:
              "CFDI 4.0 vía PAC, catálogos SAT, validación de emisor/receptor e idempotencia. Timbrado productivo aún en curso.",
          },
          {
            title: "Reglas antes de facturar",
            description:
              "Plan, datos fiscales y comprobante de pago validado; no se timbra dos veces.",
          },
          {
            title: "Panel admin",
            description:
              "Dashboard, inbox, cotizaciones, facturas e integraciones.",
          },
        ],
        architecture: [
          "4 capas: Domain → Application → Infrastructure → API",
          "PostgreSQL + claim tenant_id en JWT",
          "WhatsApp → reglas/IA → CRM → cotizador → PAC",
          "Admin React; API de piloto (no operación comercial)",
        ],
        learnings:
          "Aprendí a separar orquestación de negocio del timbrado (PAC externo) y a no vender como listo un MVP: lo cerrado es aislamiento, reglas y flujo; falta PAC productivo y tienda.",
        images: saasImagesEs,
        accent: "saas",
        icon: "◈",
      },
      {
        id: "monitor-carga",
        name: "Telecom · Monitor de Carga",
        tagline: "Tablero operativo en Linux para procesos batch multi-motor",
        type: "Enterprise · Telecom · DevOps / Data Ops",
        problem:
          "En telecom, los procesos batch de carga hacia Oracle, SQL Server e Informix no tenían visibilidad unificada: operadores debían revisar múltiples logs manualmente para conocer avance, errores y si el proceso seguía activo.",
        solution:
          "Desarrollé desde cero un monitor en Bash para Linux que consolida bitácora, logs de carga y procesos activos en un tablero en terminal con actualización en vivo, clasificación de errores y porcentaje de avance por motor de base de datos.",
        role: "Desarrollo completo: análisis del proceso, diseño del tablero, parsing de logs (awk, grep), integración con configuración del ambiente y despliegue en servidores Linux de producción.",
        stack: [
          "Bash",
          "Linux",
          "Oracle",
          "SQL Server",
          "Informix",
          "awk",
          "grep",
          "ps",
        ],
        highlights: [
          {
            title: "Tablero en vivo",
            description:
              "Refresh configurable que muestra estado actualizado de cada motor.",
          },
          {
            title: "Métricas por motor",
            description:
              "Total, pendientes, procesados, OK, errores, activos y % de avance.",
          },
          {
            title: "Detalle de errores",
            description:
              "Agrupación por tipo: formato de archivo, lista de envío, códigos ORA.",
          },
          {
            title: "Integración con infraestructura",
            description:
              "Lee configuración del ambiente, bitácoras y directorios de recepción existentes.",
          },
          {
            title: "Uso en producción",
            description:
              "Herramienta operativa usada durante ejecución de cargas batch críticas.",
          },
        ],
        architecture: [
          "Configuración vía variables de ambiente e ini del proceso",
          "Lectura de bitácora pipe-delimited con awk",
          "Conteo de pendientes vía find en directorios de recepción",
          "Detección de procesos activos con ps + grep",
          "Clasificación de errores: bitácora, LOG_ERRORES y logs SQL*Loader",
        ],
        learnings:
          "Aprendí a dar visibilidad operativa en entornos enterprise sin GUI: parsear logs reales, clasificar fallos y entregar información accionable a operadores en tiempo real.",
        images: monitorImagesEs,
        accent: "enterprise",
        icon: "▣",
      },
      {
        id: "proceso-4",
        name: "Telecom · Proceso 4",
        tagline: "Pipeline batch de carga de métricas multi-motor",
        type: "Enterprise · Telecom · Batch / Data Ops",
        problem:
          "La carga diaria de métricas hacia Oracle, SQL Server e Informix carecía de un flujo unificado: validación manual de archivos, errores dispersos en logs, procesamiento paralelo sin control de hilos y poca trazabilidad operativa.",
        solution:
          "Desarrollé desde cero el Proceso 4: orquestador batch en Bash/Linux que valida listas de envío, procesa archivos por motor con bitácora de errores, ejecuta cargas finales vía SQL*Loader, genera archivos de métricas y envía notificaciones por correo (Java).",
        role: "Desarrollo end-to-end del pipeline: orquestación (iniEjeCarMet), validación de archivos (forArcMotSic), procesamiento paralelo por motor, integración SQL*Loader/Perl, notificaciones Java y despliegue en producción.",
        stack: [
          "Bash",
          "Linux",
          "Oracle",
          "SQL Server",
          "Informix",
          "Java",
          "SQL*Loader",
          "Perl",
        ],
        highlights: [
          {
            title: "Orquestador principal",
            description:
              "Flujo completo: validación de listas → procesamiento por motor → carga final → generación de métricas.",
          },
          {
            title: "Validación de archivos",
            description:
              "Nombre, contenido, duplicados y formato antes de procesar cada archivo.",
          },
          {
            title: "Procesamiento paralelo",
            description:
              "Ejecución concurrente por motor con control de hilos y monitoreo de procesos.",
          },
          {
            title: "Bitácora de errores",
            description:
              "Registro pipe-delimited con clasificación: formato, lista de envío, errores de motor.",
          },
          {
            title: "Notificaciones",
            description:
              "Alertas por correo del inicio, fin y estado del proceso vía Java.",
          },
        ],
        architecture: [
          "Entrada: iniEjeCarMet.sh → valArcLisEnv → proArcRecSic por motor",
          "Procesamiento: forArcMotSic (validación + formato) en paralelo",
          "Carga: carArcFinMot + SQL*Loader (Oracle) y equivalentes por motor",
          "Salida: genArcEnvMet + bitácora + envMenEstPro (notificaciones Java)",
          "Complemento: monCarProVivo.sh para visibilidad en tiempo real",
        ],
        learnings:
          "Aprendí a diseñar pipelines batch robustos en producción: validar antes de procesar, controlar concurrencia, registrar cada fallo en bitácora y mantener trazabilidad end-to-end sin depender de intervención manual.",
        images: proceso4ImagesEs,
        accent: "enterprise",
        icon: "⬡",
      },
    ],
  },

  en: {
    meta: {
      title: "Portfolio — Alejandra Martínez",
      description:
        "Alejandra Martínez — Backend, data, and shipped products. NYX (App Store), HostHelix, Empleado Digital (MVP), and telecom pipelines.",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Alejandra Martínez",
      role: "Backend, data, and shipped products",
      subtitle:
        "APIs, security, and operations: NYX on the App Store, HostHelix (molecular lab), Empleado Digital as an MVP, and telecom batch pipelines.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      stats: [
        { label: "Featured projects", value: "5" },
        { label: "Stack", value: "Python · .NET · React" },
        { label: "Focus", value: "Backend + product" },
      ],
    },
    about: {
      title: "About me",
      p1: "Data and systems engineer: backend, validation, access control, and production operations. I also design and ship my own products end to end.",
      p2: "NYX is on the App Store (AI chat, wallet, IAP, content policy). HostHelix is a visual RNA/DNA lab (iOS and Android). Empleado Digital is a multi-tenant fiscal SaaS in MVP. In telecom I built the Proceso 4 batch pipeline and a Linux load monitor for Oracle, SQL Server, and Informix.",
      p3: "I care about data integrity, applied security, and systems you can operate: limits, webhooks, audit logs, and DEV / QA / PROD.",
    },
    projects: {
      title: "Projects",
      subtitle:
        "Shipped products, a B2B SaaS in MVP, and telecom operations tooling.",
      viewDetails: "View details",
      problem: "Problem",
      solution: "Solution",
      role: "My role",
      stack: "Technologies",
      highlights: "Key features",
      architecture: "Architecture",
      learnings: "Learnings",
      gallery: "Screenshots",
      close: "Close",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and areas I work with.",
      categories: [
        {
          name: "Languages",
          items: [
            "Python 3.10–3.12",
            "C# / ASP.NET Core 9",
            "TypeScript",
            "SQL",
            "Bash",
          ],
        },
        {
          name: "Backend & APIs",
          items: [
            "FastAPI",
            "ASP.NET Core (Clean Architecture)",
            "REST / JSON",
            "SQLAlchemy · EF Core",
            "OpenAPI / Swagger",
            "Webhooks and jobs",
          ],
        },
        {
          name: "Security & Auth",
          items: [
            "JWT · BCrypt · API keys",
            "OAuth (Google, Sign in with Apple)",
            "TOTP / 2FA · magic links",
            "HMAC (webhooks and signatures)",
            "Rate limiting · multi-tenant",
            "Content policy",
          ],
        },
        {
          name: "Data",
          items: [
            "PostgreSQL",
            "SQL Server · Oracle · Informix",
            "MySQL",
            "ETL / SQL*Loader",
            "CFDI 4.0 via PAC (no in-house stamping)",
          ],
        },
        {
          name: "Cloud, ops & payments",
          items: [
            "AWS (EC2, processes, monitoring)",
            "Docker · Caddy / nginx",
            "DEV / QA / PROD",
            "Apple IAP · Mercado Pago",
            "WhatsApp Cloud API (Meta)",
          ],
        },
        {
          name: "Frontend & mobile",
          items: [
            "React · Vite · TypeScript",
            "Capacitor (iOS / Android)",
            "PWA · i18n (ES / EN / JA)",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Interested in collaborating, hiring, or learning more about my projects? Reach out.",
      email: "alexmmartinez1@hotmail.com",
      emailLabel: "Email",
      github: "Ale123qr",
      githubLabel: "GitHub",
      githubUrl: "https://github.com/Ale123qr",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React + Vite + TypeScript",
    },
    projectsData: [
      {
        id: "nyx",
        name: "NYX",
        tagline: "iOS companions, stories, and AI — live on the App Store",
        type: "B2C · App Store · FastAPI + Capacitor",
        problem:
          "AI chat apps often feel generic, with no continuity or abuse controls. They lack plan-based memory, verified payments, and real usage limits.",
        solution:
          "NYX is an end-to-end product: AI chat, memory trimmed by plan, Living History worlds, images, PA wallet, and monetization (Apple IAP + Mercado Pago). JWT, OAuth, rate limiting, and a content policy on the backend.",
        role: "Founder / end-to-end: FastAPI backend, React/TypeScript app (Capacitor iOS), wallet, IAP, webhooks, ES/EN/JA i18n, Docker/AWS, and App Store Connect listing.",
        stack: [
          "FastAPI",
          "Python",
          "React",
          "TypeScript",
          "Capacitor",
          "JWT / OAuth",
          "Apple IAP",
          "Docker",
        ],
        highlights: [
          {
            title: "APIs, plans, abuse controls",
            description:
              "JWT, Free/Plus/VIP, and per-plan limits (messages, images, worlds, memory).",
          },
          {
            title: "Wallet and payments",
            description:
              "PA economy, Apple IAP (subscription + restore), and Mercado Pago with signed webhooks.",
          },
          {
            title: "Security",
            description:
              "Content policy, rate limiting, and abuse tests; production signups always start Free.",
          },
          {
            title: "Chat, memory, worlds",
            description:
              "Streaming, persistent memory, and Living History (canon, chapters, 1:1 chat bridge).",
          },
          {
            title: "App Store",
            description:
              "Shipped on iOS; Sign in with Apple, account deletion, and ES/EN/JA.",
          },
        ],
        architecture: [
          "App: React/TS + Capacitor → same-origin API",
          "Backend: FastAPI routers → services → Pydantic schemas",
          "Services: chat, memory, wallet, payments, images, worlds, safety",
          "Deploy: Docker + Caddy TLS + nginx; unit tests + Playwright e2e",
        ],
        learnings:
          "I learned to pair an AI product with real controls: entitlements, webhooks that credit only approved payments, and safety on the same path as chat.",
        images: nyxImagesEn,
        accent: "nyx",
        icon: "✦",
      },
      {
        id: "hosthelix",
        name: "HostHelix",
        tagline: "Visual RNA/DNA lab — educational app for iOS and Android",
        type: "Education · App Store · Capacitor",
        problem:
          "Explaining helices, pathogens, and drugs in 2D falls short. A visual lab was missing — with no clinical use and no health data.",
        solution:
          "Molecular simulation app: helix, cell pool, assays, and JSON/PDF export. Same product for iPhone, iPad, and Android. Auth (email, Apple, Google), account deletion, and a one-time App Store purchase.",
        role: "End-to-end: 3D UI, assay logic, Capacitor packaging, privacy (no health data), and App Store Connect listing.",
        stack: [
          "React",
          "TypeScript",
          "Capacitor",
          "Firebase Auth",
          "iOS / Android",
        ],
        highlights: [
          {
            title: "3D simulation",
            description:
              "Helix, pathogens, drugs, and cell pool. Not for clinical use.",
          },
          {
            title: "Assays and export",
            description:
              "Local save and JSON/PDF output to review the experiment.",
          },
          {
            title: "Auth and privacy",
            description:
              "Email, Sign in with Apple and Google; account deletion; no extra permissions.",
          },
          {
            title: "Cross-platform",
            description:
              "One Capacitor + React/TS codebase for iOS and Android; one-time App Store purchase.",
          },
        ],
        architecture: [
          "React/TS frontend + 3D simulation view",
          "Capacitor for iOS and Android",
          "Firebase Auth (Apple / Google / email)",
          "Local state; no clinical backend or PHI",
        ],
        learnings:
          "I learned to ship an educational product to the stores: explicit privacy, Apple auth, and one codebase for two platforms.",
        images: [],
        accent: "helix",
        icon: "◎",
      },
      {
        id: "empleado-digital",
        name: "Empleado Digital",
        tagline: "Multi-tenant B2B SaaS — MVP in progress",
        type: "B2B · MVP · Mexican SMEs",
        problem:
          "SMEs lose sales quoting by hand on WhatsApp and invoicing without rules. They need per-company isolation and CFDI without running their own PAC.",
        solution:
          "MVP: admin employee on official WhatsApp, CRM, quoting, sales, and CFDI 4.0 orchestration via PAC (no in-house stamping). Multi-tenant JWT and plan gating. Not in commercial operation yet.",
        role: "Architecture and backend: Clean Architecture in .NET, PostgreSQL, WhatsApp webhook, React admin, fiscal checks, and plans. Production PAC and store listing still open.",
        stack: [
          "ASP.NET Core 9",
          "PostgreSQL",
          "React",
          "TypeScript",
          "OpenAI",
          "WhatsApp API",
          "Docker",
          "Clean Architecture",
        ],
        highlights: [
          {
            title: "WhatsApp Cloud API",
            description:
              "Official Meta webhook, unified inbox, and development simulator.",
          },
          {
            title: "Vertical quoter",
            description:
              "Configurable industry catalog, PDF, and acceptance flow.",
          },
          {
            title: "Multi-tenant",
            description:
              "Tenant registration, onboarding, policies, and per-business integrations.",
          },
          {
            title: "Tax orchestrator (MVP)",
            description:
              "CFDI 4.0 via PAC, SAT catalogs, issuer/receiver checks, and idempotency. Production stamping still in progress.",
          },
          {
            title: "Rules before invoicing",
            description:
              "Plan, fiscal data, and a validated payment receipt; no double stamp.",
          },
          {
            title: "Admin panel",
            description:
              "Dashboard, inbox, quotes, invoices, and integrations.",
          },
        ],
        architecture: [
          "4 layers: Domain → Application → Infrastructure → API",
          "PostgreSQL + tenant_id JWT claim",
          "WhatsApp → rules/AI → CRM → quoter → PAC",
          "React admin; pilot API (not commercial operations)",
        ],
        learnings:
          "I learned to keep business orchestration off the stamp path (external PAC) and not to sell an MVP as done: isolation and rules are closed; production PAC and the store are not.",
        images: saasImagesEn,
        accent: "saas",
        icon: "◈",
      },
      {
        id: "monitor-carga",
        name: "Telecom · Live Load Monitor",
        tagline: "Linux operational dashboard for multi-engine batch processes",
        type: "Enterprise · Telecom · DevOps / Data Ops",
        problem:
          "In telecom, batch load processes to Oracle, SQL Server, and Informix had no unified visibility: operators had to manually check multiple logs to know progress, errors, and whether the process was still running.",
        solution:
          "I built from scratch a Bash monitor for Linux that consolidates logbook, load logs, and active processes into a live terminal dashboard with error classification and progress percentage per database engine.",
        role: "Full development: process analysis, dashboard design, log parsing (awk, grep), environment config integration, and deployment on production Linux servers.",
        stack: [
          "Bash",
          "Linux",
          "Oracle",
          "SQL Server",
          "Informix",
          "awk",
          "grep",
          "ps",
        ],
        highlights: [
          {
            title: "Live dashboard",
            description:
              "Configurable refresh showing current status for each engine.",
          },
          {
            title: "Per-engine metrics",
            description:
              "Total, pending, processed, OK, errors, active jobs, and progress %.",
          },
          {
            title: "Error breakdown",
            description:
              "Grouped by type: file format, send list, ORA codes.",
          },
          {
            title: "Infrastructure integration",
            description:
              "Reads environment config, logbooks, and existing reception directories.",
          },
          {
            title: "Production use",
            description:
              "Operational tool used during critical batch load execution.",
          },
        ],
        architecture: [
          "Config via environment variables and process ini files",
          "Pipe-delimited logbook parsing with awk",
          "Pending count via find in reception directories",
          "Active process detection with ps + grep",
          "Error classification: logbook, ERROR_LOG, and SQL*Loader logs",
        ],
        learnings:
          "I learned to provide operational visibility in enterprise environments without a GUI: parse real logs, classify failures, and deliver actionable info to operators in real time.",
        images: monitorImagesEn,
        accent: "enterprise",
        icon: "▣",
      },
      {
        id: "proceso-4",
        name: "Telecom · Proceso 4",
        tagline: "Multi-engine metrics batch load pipeline",
        type: "Enterprise · Telecom · Batch / Data Ops",
        problem:
          "Daily metrics loading to Oracle, SQL Server, and Informix lacked a unified flow: manual file validation, scattered errors in logs, uncontrolled parallel processing, and poor operational traceability.",
        solution:
          "I built Proceso 4 from scratch: a Bash/Linux batch orchestrator that validates send lists, processes files per engine with error logbook, runs final loads via SQL*Loader, generates metrics files, and sends email notifications (Java).",
        role: "End-to-end pipeline development: orchestration (iniEjeCarMet), file validation (forArcMotSic), parallel per-engine processing, SQL*Loader/Perl integration, Java notifications, and production deployment.",
        stack: [
          "Bash",
          "Linux",
          "Oracle",
          "SQL Server",
          "Informix",
          "Java",
          "SQL*Loader",
          "Perl",
        ],
        highlights: [
          {
            title: "Main orchestrator",
            description:
              "Full flow: list validation → per-engine processing → final load → metrics generation.",
          },
          {
            title: "File validation",
            description:
              "Name, content, duplicates, and format checks before processing each file.",
          },
          {
            title: "Parallel processing",
            description:
              "Concurrent execution per engine with thread control and process monitoring.",
          },
          {
            title: "Error logbook",
            description:
              "Pipe-delimited logging with classification: format, send list, engine errors.",
          },
          {
            title: "Notifications",
            description:
              "Email alerts for process start, end, and status via Java.",
          },
        ],
        architecture: [
          "Entry: iniEjeCarMet.sh → valArcLisEnv → proArcRecSic per engine",
          "Processing: forArcMotSic (validation + formatting) in parallel",
          "Load: carArcFinMot + SQL*Loader (Oracle) and equivalents per engine",
          "Output: genArcEnvMet + logbook + envMenEstPro (Java notifications)",
          "Complement: monCarProVivo.sh for real-time visibility",
        ],
        learnings:
          "I learned to design robust production batch pipelines: validate before processing, control concurrency, log every failure, and maintain end-to-end traceability without manual intervention.",
        images: proceso4ImagesEn,
        accent: "enterprise",
        icon: "⬡",
      },
    ],
  },
};
