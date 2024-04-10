"use client"

import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard"

const covectorCurvesFactor = 5/16
const covectorCurvesA = -15
const covectorCurvesB = 15

export function CovectorCurves(props: BoardProps) {
  return (
    <CustomJXGBoard className="scroll-mt-12" id="covector-curves-plot" {...props} bbox={props.bbox ?? [-16 * covectorCurvesFactor, 9 * covectorCurvesFactor, 16 * covectorCurvesFactor, -9 * covectorCurvesFactor]} initFn={(board: JXG.Board) => {
        const a1Input = board.create("input", [-15 * covectorCurvesFactor, 8 * covectorCurvesFactor, 2, "$a_1 =\\ $"], {frozen: true})
        const a2Input = board.create("input", [-15 * covectorCurvesFactor, 7 * covectorCurvesFactor, 1, "$a_2 =\\ $"], {frozen: true})

        board.create("arrow", [
            [0, 0],
            () => [+a1Input.Value(), +a2Input.Value()]
        ])

        for (let i = covectorCurvesA; i <= covectorCurvesB; i++) {
          board.create("curve", [
            (t: number) => {
              const a1 = +a1Input.Value()
              const a2 = +a2Input.Value()

              if (a1 === 0 && a2 === 0) {
                return NaN
              }
              else if (a2 !== 0) {
                return t
              }
              return (i - a2 * t) / a1
            },
            (t: number) => {
              const a1 = +a1Input.Value()
              const a2 = +a2Input.Value()

              if (a1 === 0 && a2 === 0) {
                return NaN
              }
              else if (a2 !== 0) {
                return (i - a1 * t) / a2
              }
              return t
            }
          ], {"name": i, withLabel: true})
        }

        const xInput = board.create("input", [-15 * covectorCurvesFactor, 6 * covectorCurvesFactor, 1, "$x =\\ $"], {frozen: true})
        const yInput = board.create("input", [-15 * covectorCurvesFactor, 5 * covectorCurvesFactor, 1, "$y =\\ $"], {frozen: true})

        board.create("arrow", [
            [0, 0],
            () => [+xInput.Value(), +yInput.Value()]
        ], {color: "red"})

        board.create("text", [-15 * covectorCurvesFactor, 4 * covectorCurvesFactor, () => String.raw`$a(\boldsymbol{v}) = ${(+a1Input.Value()) *( +xInput.Value()) + (+a2Input.Value()) * (+yInput.Value())}$`], {frozen: true})
    }} />
  )
}