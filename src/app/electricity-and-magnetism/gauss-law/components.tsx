"use client"

import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { epsilon0 } from "@/utils/constants";
import { pointVector } from "@/utils/jxg";
import { toScientific, toScientific2DVector } from "@/utils/misc";
import * as math from "mathjs"

export function SphericalConductor(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-16, 9, 16, -9]} initFn={(board: JXG.Board) => {
      const radiusInput = board.create("input", [-15, 8, 1, "$r_c =\\ $"])
      const sigmaInput = board.create("input", [-15, 7, 2e-5, "$\\sigma =\\ $"])
      const point = board.create("point", [5 / Math.SQRT2, 5 / Math.SQRT2], { name: "" })

      board.create("circle", [
        [0, 0],
        () => [+radiusInput.Value(), 0],
      ], {
        fillColor: "#0072b2"
      })

      function getElectricField(): math.Matrix {
        const r = pointVector(point)
        const rNorm = math.norm(r) as number
        const rHat = math.divide(r, rNorm)

        const eNorm = (+radiusInput.Value()) ** 2 * (+sigmaInput.Value()) / (rNorm ** 2 * epsilon0)

        return math.multiply(rHat, eNorm) as math.Matrix
      }

      function isOutside(): boolean {
        const rNorm = math.norm(pointVector(point)) as number

        return rNorm > (+radiusInput.Value())
      }

      board.create("text", [-15, 6, () => {
        if (!isOutside()) return "Move the point outside the sphere."

        const electricField = getElectricField()

        return String.raw`$\boldsymbol{E} = ${toScientific2DVector(electricField)}$`
      }], {
        color: () => isOutside() ? "black" : "red"
      })
      board.create("text", [-15, 5, () => {
        if (!isOutside()) return ""

        return String.raw`$E = ${toScientific(math.norm(getElectricField()) as number)}\ NC^{-1}$`
      }])

      board.create("arrow", [
        point,
        () => {
          if (!isOutside()) return [point.X(), point.Y()]

          const electricField = getElectricField()

          return (math.chain(electricField).divide(math.norm(electricField)).add(pointVector(point)).done() as math.Matrix).toArray()
        }
      ], {
        color: "orange",
        lastArrow: {
          type: 2,
        },
      })
    }} />
  )
}
