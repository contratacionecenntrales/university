export interface FacultyUnit {
  id: string;
  name: string;
  kind: "IA" | "Dirección";
  role: string;
  description: string;
}

export const FACULTY_UNITS: FacultyUnit[] = [
  {
    id: "strategy-core",
    name: "BBU Strategy Core",
    kind: "IA",
    role: "Diseño y validación de modelos de negocio",
    description:
      "Sistema propietario que cruza tu perfil, capital y sector para diseñar una hoja de ruta de negocio validada con datos reales de mercado antes de invertir un solo euro.",
  },
  {
    id: "sales-intelligence",
    name: "BBU Sales Intelligence",
    kind: "IA",
    role: "Optimización comercial y cierre",
    description:
      "Motor de entrenamiento conversacional que analiza tus llamadas y negociaciones, y te devuelve correcciones accionables en minutos, no en semanas.",
  },
  {
    id: "market-radar",
    name: "BBU Market Radar",
    kind: "IA",
    role: "Inteligencia de mercado en tiempo real",
    description:
      "Monitoriza tendencias, demanda y competencia en los ocho sectores del catálogo BBU para que cada decisión se tome con evidencia, no con intuición.",
  },
  {
    id: "operations-direction",
    name: "Dirección de Operaciones",
    kind: "Dirección",
    role: "Mentores de élite · validación de metodología",
    description:
      "Un equipo senior con trayectoria operativa real en cada sector supervisa, audita y actualiza cada sistema de IA y cada módulo del programa de forma continua.",
  },
  {
    id: "automation-engine",
    name: "BBU Automation Engine",
    kind: "IA",
    role: "Automatización y escalado",
    description:
      "Orquesta flujos, integraciones y procesos operativos para que el alumno pase de la teoría a un negocio en funcionamiento en el menor tiempo posible.",
  },
  {
    id: "academic-committee",
    name: "Comité Académico BBU",
    kind: "Dirección",
    role: "Actualización curricular constante",
    description:
      "Revisa y recalibra cada programa cada trimestre para que el contenido nunca quede desfasado frente a un mercado que cambia cada mes.",
  },
];
