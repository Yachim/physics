"use client"

import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { k } from "@/utils/constants";
import { sumVectorArray, toScientific, toScientific2DVector } from "@/utils/misc";
import { pointVector } from "@/utils/jxg";
import * as math from "mathjs"

export function WorkDueToVoltage(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.16, 0.09, 0.16, -0.09]} initFn={(board: JXG.Board) => {
      const sInput = board.create("input", [-0.15, 0.08, 0.12, "$s =\\ $"])
      const voltageInput = board.create("input", [-0.15, 0.07, 600, "$U =\\ $"])
      const chargeInput = board.create("input", [-0.15, 0.06, 45e-9, "$Q =\\ $"])

      board.create("line", [
        () => [-sInput.Value() / 2, 0],
        () => [-sInput.Value() / 2, 1]
      ], { color: "green" })
      board.create("line", [
        () => [+sInput.Value() / 2, 0],
        () => [+sInput.Value() / 2, 1]
      ], { color: "red" })

      const pointA = board.create("point", [-0.04, -0.03])
      const pointB = board.create("point", [0.04, 0.03])

      board.create("arrow", [pointA, pointB], {
        color: "orange",
        lastArrow: {
          type: 2
        }
      })

      function getV() {
        return math.subtract(pointVector(pointB), pointVector(pointA))
      }

      function getElectricFieldMagnitude() {
        return (+voltageInput.Value()) / (+sInput.Value())
      }

      function isInside() {
        const x1 = pointA.X()
        const x2 = pointB.X()
        const xMin = -sInput.Value() / 2
        const xMax = +sInput.Value() / 2

        const x1Valid = x1 > xMin && x1 < xMax
        const x2Valid = x2 > xMin && x2 < xMax

        return x1Valid && x2Valid
      }

      function getWork() {
        const v = getV()
        const vx = v.toArray()[0] as number
        const electricField = getElectricFieldMagnitude()

        return +chargeInput.Value() * vx * electricField
      }

      board.create("text", [
        -0.15, 0.05, () => String.raw`$E = ${toScientific(getElectricFieldMagnitude())}\ Vm^{-1}$`
      ])
      board.create("text", [
        -0.15, 0.04, () => isInside() ? String.raw`$W = ${toScientific(getWork())}\ J$` : "Move both points between the lines"
      ], {
        color: () => isInside() ? "black" : "red"
      })
    }} />
  )
}
