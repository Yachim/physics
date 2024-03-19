export const data = {
    silver: {
        rho: 1.59e-8,
        alpha: 3.8e-3
    },
    copper: {
        rho: 1.72e-8,
        alpha: 3.9e-3
    },
    aluminum: {
        rho: 2.82e-8,
        alpha: 3.9e-3
    },
    iron: {
        rho: 1e-7,
        alpha: 5e-3
    },
    platinum: {
        rho: 10.6e-8,
        alpha: 3.9e-3
    },
    carbon: {
        rho: 3.5e-5,
        alpha: -5e-4
    },
    silicon: {
        rho: 640,
        alpha: -0.075
    },
}
export type ResistivityMaterial = keyof typeof data