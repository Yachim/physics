import * as math from "mathjs"

export function toScientific(num: number) {
  if (num === 0) {
    return "0"
  }

  if (num === 1) {
    return "1"
  }

  let exponent = Math.floor(Math.log10(Math.abs(num)))
  let coefficient = Math.floor(num / Math.pow(10, exponent) * 100) / 100

  let exponentPart = String.raw` \cdot 10^{${exponent}}`

  if (exponent === 1) {
    return String.raw`${coefficient * 10}`
  }

  if (exponent === 0) {
    exponentPart = ""
  }

  return String.raw`${coefficient}${exponentPart}`
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

export function capitalize(s: string) {
  return s.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

export function matrixToLatex(matrix: math.Matrix): string {
  const [_, cols] = matrix.size()
  return "\\begin{bmatrix}" + matrix.toArray().map(row => {
    if (cols === 1) return row
    return (row as math.MathNumericType[]).join(" & ")
  }).join("\\\\ \r \n") + "\\end{bmatrix}"
}
