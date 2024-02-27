import * as math from "mathjs"

export function pointVector(vec: JXG.Point): math.Matrix {
  return math.matrix([vec.X(), vec.Y()])
}
