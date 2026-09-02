export interface LeaderboardEntry {
  id: string;
  alias: string;
  initials: string;
  program: string;
  points: number;
  color: string;
}

/**
 * Seed data for the gamified "live" ranking widget. Aliases are illustrative
 * handles, not identified real students, and points are a composite
 * gamification score — never a revenue figure — precisely to stay clear of
 * misleading-earnings-claim rules under Spanish advertising law.
 */
export const LEADERBOARD_SEED: LeaderboardEntry[] = [
  { id: "l1", alias: "M. Torres", initials: "MT", program: "E-commerce", points: 18420, color: "#00e6a8" },
  { id: "l2", alias: "R. Kaine", initials: "RK", program: "Trading", points: 17110, color: "#22d3ee" },
  { id: "l3", alias: "A. Duval", initials: "AD", program: "Amazon FBA", points: 16875, color: "#c9a961" },
  { id: "l4", alias: "S. Bracho", initials: "SB", program: "IA Aplicada", points: 15990, color: "#00e6a8" },
  { id: "l5", alias: "J. Ferreira", initials: "JF", program: "Cierre de Ventas", points: 15340, color: "#22d3ee" },
  { id: "l6", alias: "N. Ostrowski", initials: "NO", program: "Inmobiliaria Digital", points: 14760, color: "#c9a961" },
  { id: "l7", alias: "P. Vidal", initials: "PV", program: "Ciberseguridad", points: 13980, color: "#00e6a8" },
  { id: "l8", alias: "C. Reyes", initials: "CR", program: "Importación Vehículos", points: 13215, color: "#22d3ee" },
];
