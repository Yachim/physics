// k_e
export const k = 9E9

export const epsilon0 = 1 / (4 * Math.PI * k)

export const permitivitty = {
  vacuum: 1,
  air: 1,
  water: 81.6,
} as const

export type PermitivittyMaterial = keyof typeof permitivitty

export const resistivity = {
  silver: 1.59e-8,
  copper: 1.68e-8,
  gold: 2.44e-8,
  aluminium: 2.65e-8,
  zinc: 5.9e-8,
} as const

export type ResistivityMaterial = keyof typeof resistivity
