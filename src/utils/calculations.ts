import { k } from "./constants";
import math from "mathjs"

// epsilon - permittivity
export function coulombsLawForceMagnitude(q1: number, q2: number, r: number, epsilon = 1) {
  return k / epsilon * Math.abs(q1 * q2) / (r ** 2)
}

export function coulombsLawForceVector(q1: number, q2: number, r12: math.Matrix, epsilon = 1) {
  const norm = math.number(math.norm(r12))
  const unit = math.divide(r12, norm)
  return math.matrix(math.multiply(k / epsilon * q1 * q2 / (norm ** 2), unit) as math.Matrix)
}
