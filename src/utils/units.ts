import * as math from "mathjs"
import { G, c } from "./constants"

export const specialRelativityBackwardMatrix = math.matrix([
    [-1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
])
export const specialRelativityForwardMatrix = math.inv(specialRelativityBackwardMatrix)

export const geometrizedBackwardMatrix = math.matrix([
    [-1, -2, 0, 0, 0, 0, 0],
    [1, 3, 0, 0, 0, 0, 0],
    [0, -1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
])
export const geometrizedForwardMatrix = math.inv(geometrizedBackwardMatrix)

export const units = {
    specialRelativity: {
        name: "Special Relativity",
        f: specialRelativityForwardMatrix,
        b: specialRelativityBackwardMatrix,
        units: [
            "c",
            "m", 
            "kg",
            "A",
            "K",
            "cd",
            "mol"
        ],
        consts: [
            c,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    geometrized: {
        name: "Geometrized",
        f: geometrizedForwardMatrix,
        b: geometrizedBackwardMatrix,
        units: [
            "c",
            "G", 
            "kg",
            "A",
            "K",
            "cd",
            "mol"
        ],
        consts: [
            c,
            G,
            1,
            1,
            1,
            1,
            1
        ]
    },
    geometrizedMass: {
        name: "Geometrized with Mass",
        f: geometrizedForwardMatrix,
        b: geometrizedBackwardMatrix,
        units: [
            "c",
            "G", 
            "M",
            "A",
            "K",
            "cd",
            "mol"
        ],
        consts: [
            c,
            G,
            1,
            1,
            1,
            1,
            1
        ]
    }
} as const
export type UnitType = [number, number, number, number, number, number, number]
export type UnitTypeNull = [number | null, number | null, number | null, number | null, number | null, number | null, number | null]
export type UnitSystem = keyof typeof units
export const siUnits = ["s", "m", "kg", "A", "K", "cd", "mol"]
const defaultExtraConsts: UnitTypeNull = [null, null, null, null, null, null, null]

export function addExtraConst(index: number, value: number, extraConsts = defaultExtraConsts): UnitTypeNull {
    extraConsts[index] = value
    return extraConsts
}

export const velocityUnitSI: UnitType = [-1, 1, 0, 0, 0, 0, 0] 
export const lengthUnitSI: UnitType = [0, 1, 0, 0, 0, 0, 0] 
export const timeUnitSI: UnitType = [1, 0, 0, 0, 0, 0, 0] 
export const frequencyUnitSI: UnitType = [-1, 0, 0, 0, 0, 0, 0] 
export const massUnitSI: UnitType = [0, 0, 1, 0, 0, 0, 0] 
export const energyUnitSI: UnitType = [-2, 2, 1, 0, 0, 0, 0] 
export const angularMomentumUnitSI: UnitType = [-1, 2, 1, 0, 0, 0, 0] 

export function getFactor(
    system: UnitSystem,
    unit: UnitType,
    direction: "f" | "b"
): UnitType {
    const vector = math.transpose(math.matrix(unit))
    const matrix = units[system][direction]
    const result = math.transpose(math.multiply(matrix, vector)).toArray() as unknown as UnitType

    return result
}

export function convert(
    value: number,
    siUnit: UnitType,
    system: UnitSystem,
    direction: "f" | "b",
    extraConsts: UnitTypeNull = [null, null, null, null, null, null, null]
): number {
    let factor = getFactor(system, siUnit, "f").reduce((total, el, i) => {
        let constant = extraConsts[i] ?? units[system].consts[i]

        return total * constant ** el
    }, 1)
    if (direction === "f") factor = 1 / factor

    return factor * value
}

export function fromSI(
    value: number,
    siUnit: UnitType,
    system: UnitSystem,
    extraConsts: UnitTypeNull = [null, null, null, null, null, null, null]
): number {
    return convert(value, siUnit, system, "f", extraConsts)        
}

export function toSI(
    value: number,
    siUnit: UnitType,
    system: UnitSystem,
    extraConsts: UnitTypeNull = [null, null, null, null, null, null, null]
): number {
    return convert(value, siUnit, system, "b", extraConsts)        
}

export function toText(unit: UnitType, system: UnitSystem | "si"): string {
    return unit.map((el, i) => {
        if (el === 0) return ""
        let res = siUnits[i]
        if (system !== "si") {
            res = units[system].units[i]
        }
        if (el !== 1) {
            res += `^{${el}}`
        }
        return res + "\\ "
    }).join("")
}