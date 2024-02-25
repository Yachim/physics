import { k } from "./constants";
import * as math from "mathjs"

// epsilon - permittivity
export function coulombsLawForceMagnitude(
  q1: number,
  q2: number,
  r: number,
  epsilon = 1
) {
  return k / epsilon * Math.abs(q1 * q2) / (r ** 2)
}

export function coulombsLawForceVector(
  q1: number,
  q2: number,
  r1: math.Matrix,
  r2: math.Matrix,
  epsilon = 1
): math.Matrix {
  const r12 = math.subtract(r1, r2)
  const norm = math.number(math.norm(r12))
  const unit = math.divide(r12, norm)
  const force = math.multiply(k / epsilon * q1 * q2 / (norm ** 2), unit) as math.Matrix
  return force
}

// MUST BE DIVIDED BY sqrt(m)
export function eulerStepCoulombsLawMotionDiff(
  q1: number,
  q2: number,
  r1: math.Matrix,
  r2: math.Matrix,
  r0: number,
  h: number
): math.Matrix {
  const c = Math.sqrt(2 * k * Math.abs(q1 * q2) / r0)

  const r12 = math.subtract(r1, r2)
  const r12Norm = math.number(math.norm(r12))

  const sqrt = Math.sqrt(Math.abs(r12Norm - r0) / r12Norm)

  const rHat: math.Matrix = math.chain(r12)
    .divide(r12Norm)
    .multiply(-1 * Math.abs(q1 * q2))
    .done() as math.Matrix
  return math.multiply(h * c * sqrt, rHat)
}
