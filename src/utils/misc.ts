import * as math from "mathjs"

export function floorToNDigits(num: number, digits: number): number {
  const mult = 10 ** digits
  return Math.floor(num * mult) / mult
}

export function floorTo2Digits(num: number): number {
  return floorToNDigits(num, 2)
}

export function toScientific(num: number) {
  if (num === 0) {
    return "0"
  }

  if (num === 1) {
    return "1"
  }

  let exponent = Math.floor(Math.log10(Math.abs(num)))
  let coefficient = num / Math.pow(10, exponent)

  let exponentPart = String.raw` \cdot 10^{${exponent}}`

  if (exponent === 1) {
    coefficient *= 10
    return String.raw`${floorTo2Digits(coefficient)}`
  }
  else if (exponent === -1) {
    coefficient /= 10
    return String.raw`${floorTo2Digits(coefficient)}`
  }

  if (exponent === 0) {
    exponentPart = ""
  }

  return String.raw`${floorTo2Digits(coefficient)}${exponentPart}`
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

export function cartesianToSpherical(x: number, y: number): [number, number] {
  const r = Math.sqrt(x ** 2 + y ** 2)

  let phi = Math.atan2(y, x)
  if (x === 0 && y === 0) phi = 0

  return [r, phi]
}

export function sphericalToCartesian(r: number, phi: number): [number, number] {
  return [r * Math.cos(phi), r * Math.sin(phi)]
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max)
}

export function clampAngle(n: number) {
  const rotations = Math.floor(n / (2 * Math.PI))
  return n - 2 * Math.PI * rotations
}

export function polynomialToString(coefficients: number[], variable = "x") {
  let firstReturned = false
  return coefficients.map((el, i) => {
    if (el === 0) {
      return ""
    }

    let out = ""
    if (el !== 1 || i === 0) {
      out = toScientific(el)
    }

    if (el > 0 && firstReturned) {
      out = String.raw`+${out}`
    }

    if (i === 1) {
      out += String.raw`${variable}`      
    }
    else if (i !== 0) {
      out += String.raw`${variable}^${i}`      
    }

    firstReturned = true
    return out
  }).join("")
}