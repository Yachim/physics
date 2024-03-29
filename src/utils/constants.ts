// k_e
export const k = 9E9

export const epsilon0 = 1 / (4 * Math.PI * k)

export const permitivitty = {
  vacuum: 1,
  air: 1,
  water: 81.6,
} as const

export type PermitivittyMaterial = keyof typeof permitivitty

export const c = 299_792_458

export const G = 6.67430e-11
