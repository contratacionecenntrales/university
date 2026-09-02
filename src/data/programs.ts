export interface Program {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  duration: string;
  format: string;
  level: string;
  highlights: string[];
  modules: { title: string; description: string }[];
  outcomes: string[];
}

export const PROGRAMS: Program[] = [
  {
    slug: "amazon-marketplace",
    title: "Curso en Amazon FBA",
    shortTitle: "Amazon FBA",
    description:
      "Construye un modelo rentable en Amazon mediante análisis de producto, estrategia de posicionamiento y optimización operativa.",
    category: "E-commerce",
    duration: "12 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Validación de producto con datos reales de demanda",
      "Estrategia de posicionamiento y ficha optimizada para conversión",
      "Gestión de proveedores, márgenes y logística FBA/FBM",
      "Sistema de IA para investigación de nicho y competencia",
    ],
    modules: [
      { title: "Investigación y validación de producto", description: "Herramientas y criterios para elegir un nicho rentable antes de invertir." },
      { title: "Estrategia de marca y posicionamiento", description: "Construcción de marca, ficha de producto y diferenciación competitiva." },
      { title: "Operaciones y proveedores", description: "Sourcing, control de calidad, márgenes y logística internacional." },
      { title: "Escalado y publicidad", description: "PPC, expansión de catálogo y automatización de procesos operativos." },
    ],
    outcomes: [
      "Seleccionar y validar producto con criterio de datos",
      "Lanzar y posicionar una ficha competitiva en Amazon",
      "Controlar márgenes, stock y proveedores con método",
      "Escalar el catálogo con una estructura empresarial real",
    ],
  },
  {
    slug: "ecommerce",
    title: "Curso en E-commerce",
    shortTitle: "E-commerce",
    description: "Aprende a crear, validar y escalar marcas digitales con proyección internacional y estructura empresarial.",
    category: "E-commerce",
    duration: "12 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Validación de nicho y oferta antes de construir la tienda",
      "Stack tecnológico y automatizaciones esenciales",
      "Adquisición de tráfico rentable y CRO",
      "Estructura financiera y control de unit economics",
    ],
    modules: [
      { title: "Validación de mercado y oferta", description: "Método para detectar demanda real antes de invertir en producto o stock." },
      { title: "Construcción de la tienda", description: "Arquitectura, stack tecnológico y experiencia de compra optimizada." },
      { title: "Adquisición y conversión", description: "Tráfico pagado, orgánico y optimización de la tasa de conversión." },
      { title: "Escalado internacional", description: "Expansión de mercado, logística y control financiero del negocio." },
    ],
    outcomes: [
      "Validar y lanzar una marca de e-commerce con criterio de datos",
      "Diseñar una experiencia de compra que convierte",
      "Gestionar adquisición de tráfico de forma rentable",
      "Escalar con control financiero real, no intuición",
    ],
  },
  {
    slug: "trading-mercados-financieros",
    title: "Curso en Trading y Mercados Financieros",
    shortTitle: "Trading",
    description: "Opera en mercados financieros con disciplina, gestión estructurada del riesgo y visión profesional.",
    category: "Finanzas",
    duration: "12 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Análisis técnico y fundamental aplicado",
      "Gestión de riesgo y capital con reglas claras",
      "Psicotrading y control emocional operativo",
      "Simuladores y práctica supervisada antes de operar en real",
    ],
    modules: [
      { title: "Fundamentos de mercado", description: "Estructura de mercados, activos e instrumentos financieros." },
      { title: "Análisis técnico y fundamental", description: "Lectura de gráficos, indicadores y contexto macroeconómico." },
      { title: "Gestión del riesgo", description: "Dimensionamiento de posición, stop loss y control de capital." },
      { title: "Sistema y disciplina operativa", description: "Plan de trading propio, journaling y control psicológico." },
    ],
    outcomes: [
      "Operar con un plan de trading estructurado y probado",
      "Gestionar el riesgo con reglas de capital claras",
      "Interpretar mercado con análisis técnico y fundamental",
      "Sostener la disciplina operativa a largo plazo",
    ],
  },
  {
    slug: "ia-aplicada-negocio",
    title: "Curso en IA Aplicada a Negocio",
    shortTitle: "IA Aplicada",
    description: "Diseña sistemas basados en IA que automaticen procesos, optimicen ventas y generen activos digitales escalables.",
    category: "Tecnología",
    duration: "12 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Automatización de procesos comerciales y operativos",
      "Construcción de agentes de IA aplicados a ventas y soporte",
      "Integración con CRM, webhooks y herramientas de negocio",
      "Casos reales de monetización de sistemas de IA",
    ],
    modules: [
      { title: "Fundamentos de IA aplicada", description: "Herramientas, modelos y criterios de selección para negocio." },
      { title: "Automatización de procesos", description: "Flujos, integraciones y agentes que sustituyen tareas manuales." },
      { title: "IA para ventas y marketing", description: "Cualificación de leads, copywriting y optimización de conversión." },
      { title: "Monetización y escalado", description: "Modelos de negocio construidos alrededor de sistemas de IA." },
    ],
    outcomes: [
      "Diseñar automatizaciones que ahorran horas operativas reales",
      "Integrar IA en procesos comerciales existentes",
      "Construir un activo digital basado en sistemas de IA",
      "Evaluar y elegir herramientas con criterio, no por moda",
    ],
  },
  {
    slug: "cierre-de-ventas",
    title: "Curso en Cierre de Ventas",
    shortTitle: "Cierre de Ventas",
    description: "Desarrolla una estructura profesional para cerrar ventas de alto valor con método, criterio estratégico y enfoque consultivo.",
    category: "Ventas",
    duration: "8 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Metodología de venta consultiva para ticket alto",
      "Manejo de objeciones con estructura, no con guion",
      "Entrenamiento con IA sobre llamadas reales",
      "Diseño de proceso comercial y CRM propio",
    ],
    modules: [
      { title: "Fundamentos de venta consultiva", description: "Diagnóstico, escucha activa y cualificación real del cliente." },
      { title: "Estructura de cierre", description: "Guion flexible, manejo de objeciones y anclaje de valor." },
      { title: "Entrenamiento con IA", description: "Análisis de llamadas y feedback accionable en minutos." },
      { title: "Proceso comercial y CRM", description: "Pipeline, seguimiento y previsibilidad de ingresos." },
    ],
    outcomes: [
      "Cerrar ventas de alto valor con método replicable",
      "Manejar objeciones sin perder el control de la conversación",
      "Construir un proceso comercial medible y escalable",
      "Mejorar la tasa de cierre con entrenamiento asistido por IA",
    ],
  },
  {
    slug: "importacion-vehiculos",
    title: "Curso en Importación y Compra-Venta de Vehículos",
    shortTitle: "Importación de Vehículos",
    description: "Estructura un negocio internacional del motor con método, control del margen y seguridad jurídica.",
    category: "Comercio internacional",
    duration: "10 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Selección y valoración de vehículos con margen real",
      "Trámites de importación, homologación y fiscalidad",
      "Red de proveedores y canales de venta",
      "Seguridad jurídica en cada operación",
    ],
    modules: [
      { title: "Mercado y valoración", description: "Criterios de selección y cálculo de margen antes de comprar." },
      { title: "Importación y trámites", description: "Documentación, aduanas, homologación y fiscalidad aplicable." },
      { title: "Red comercial", description: "Proveedores, canales de venta y negociación profesional." },
      { title: "Estructura y seguridad jurídica", description: "Contratos, garantías y protección legal del negocio." },
    ],
    outcomes: [
      "Valorar vehículos con criterio de margen y demanda",
      "Gestionar el proceso de importación sin errores costosos",
      "Construir una red de proveedores y compradores estable",
      "Operar con seguridad jurídica y fiscal en cada venta",
    ],
  },
  {
    slug: "ciberseguridad",
    title: "Curso en Ciberseguridad",
    shortTitle: "Ciberseguridad",
    description: "Especialízate en uno de los sectores con mayor proyección global y aprende a operar con estructura en entornos digitales críticos.",
    category: "Tecnología",
    duration: "14 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Fundamentos de seguridad ofensiva y defensiva",
      "Auditoría de sistemas y detección de vulnerabilidades",
      "Laboratorios prácticos supervisados",
      "Preparación orientada a certificaciones del sector",
    ],
    modules: [
      { title: "Fundamentos de ciberseguridad", description: "Arquitectura de redes, amenazas y superficie de ataque." },
      { title: "Seguridad ofensiva", description: "Pentesting ético y detección de vulnerabilidades en laboratorio." },
      { title: "Seguridad defensiva", description: "Hardening, monitorización y respuesta ante incidentes." },
      { title: "Proyección profesional", description: "Preparación para certificaciones y salida al mercado laboral." },
    ],
    outcomes: [
      "Auditar sistemas e identificar vulnerabilidades críticas",
      "Aplicar buenas prácticas de seguridad ofensiva y defensiva",
      "Responder ante incidentes con protocolo estructurado",
      "Prepararte para certificaciones reconocidas del sector",
    ],
  },
  {
    slug: "intermediacion-inmobiliaria-digital",
    title: "Curso en Intermediación Inmobiliaria Digital",
    shortTitle: "Inmobiliaria Digital",
    description: "Construye un modelo inmobiliario digital, legal y escalable sin depender de estructuras tradicionales.",
    category: "Inmobiliario",
    duration: "10 semanas",
    format: "100% online · sesiones en directo + grabado",
    level: "Sin experiencia previa requerida",
    highlights: [
      "Captación digital de propiedades y clientes",
      "Marco legal de la intermediación inmobiliaria",
      "Automatización del proceso comercial",
      "Modelo de negocio sin oficina física",
    ],
    modules: [
      { title: "Modelo de negocio digital", description: "Estructura, posicionamiento y propuesta de valor sin oficina física." },
      { title: "Captación digital", description: "Generación de leads de propietarios y compradores cualificados." },
      { title: "Marco legal", description: "Contratos, mandatos y cumplimiento normativo del sector." },
      { title: "Automatización y escalado", description: "CRM, seguimiento automatizado y crecimiento del volumen operativo." },
    ],
    outcomes: [
      "Captar propiedades y clientes por canales digitales",
      "Operar con seguridad dentro del marco legal vigente",
      "Automatizar el seguimiento comercial con CRM",
      "Escalar el volumen de operaciones sin estructura tradicional",
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((program) => program.slug === slug);
}
