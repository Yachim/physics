import * as math from "mathjs"

export function toScientific(num: number) {
  if (num === 0) {
    return "0"
  }

  let exponent = Math.floor(Math.log10(Math.abs(num)))
  let coefficient = num / Math.pow(10, exponent)

  return `${coefficient.toFixed(2)} \\cdot 10^{${exponent}}`
}

export function sumArray(arr: number[], initial = 0): number {
  return arr.reduce((total, n) => total + n, initial)
}

export function sumVectorArray(arr: math.Matrix[], initial = math.matrix([0, 0])): math.Matrix {
  return arr.reduce((total, n) => math.add(total, n), initial)
}

export function toScientific2DVector(vec: math.Matrix): string {
  const x = (vec.toArray() as number[])[0]
  const y = (vec.toArray() as number[])[1]

  return `[${toScientific(x)}, ${toScientific(y)}]`
}

export function oddRoot(num: number, e = 3) {
  return Math.sign(num) * Math.abs(num) ** (1 / e)
}
