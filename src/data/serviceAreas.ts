export const serviceAreas = [
  {
    id: "potrero",
    name: "Potrero",
  },
  {
    id: "flamingo",
    name: "Flamingo",
  },
  {
    id: "tamarindo",
    name: "Tamarindo",
  },
  {
    id: "brasilito",
    name: "Brasilito",
  },
  {
    id: "las-catalinas",
    name: "Las Catalinas",
  },
  {
    id: "surfside",
    name: "Surfside",
  },
  {
    id: "huacas",
    name: "Huacas",
  },
] as const;

export type ServiceAreaId = (typeof serviceAreas)[number]["id"];