"use client"

import * as math from "mathjs"
import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { coulombsLawForceMagnitude, coulombsLawForceVector } from "@/utils/calculations";
import { PermitivittyMaterial, permitivitty } from "@/utils/constants";
import { toScientific } from "@/utils/misc";
import { capitalize } from "jsxgraph";
import { useMemo, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export function ForceMagnitude({ initialQ1, initialQ2, initialR }: {
  initialQ1: number
  initialQ2: number
  initialR: number
}) {
  const [q1, setQ1] = useState<number>(initialQ1)
  const [q2, setQ2] = useState<number>(initialQ2)
  const [r, setR] = useState<number>(initialR)
  const [material, setMaterial] = useState<PermitivittyMaterial>("vacuum")

  const chargeProduct = useMemo(() => q1 * q2, [q1, q2])

  const epsilon = useMemo(() => permitivitty[material], [material])
  const f = useMemo(() => coulombsLawForceMagnitude(q1, q2, r, epsilon), [q1, q2, r, epsilon])

  return (
    <div className="grid grid-cols-[auto_auto] gap-2">
      <label className="justify-self-end">
        <InlineMath math="q_1 =" />
      </label>
      <input value={q1} onChange={e => setQ1(+e.target.value)} className="justify-self-start" type="number" />

      <label className="justify-self-end">
        <InlineMath math="q_2 =" />
      </label>
      <input value={q2} onChange={e => setQ2(+e.target.value)} className="justify-self-start" type="number" />

      <label className="justify-self-end">
        <InlineMath math="r =" />
      </label>
      <input value={r} onChange={e => setR(+e.target.value)} className="justify-self-start" type="number" />

      <label className="justify-self-end">
        Material:
      </label>
      <select value={material} onChange={e => setMaterial(e.target.value as PermitivittyMaterial)} className="justify-self-start">
        {Object.keys(permitivitty).map((mat, i) =>
          <option value={mat} key={i}>{capitalize(mat)}</option>
        )}
      </select>

      <div className="col-span-2 flex flex-col items-center">
        <BlockMath math={String.raw`
          \begin{align*}
            \epsilon_r &= ${epsilon} \\
            F_e &= ${toScientific(f)}\ N  ${chargeProduct === 0 ? "" : chargeProduct < 0 ? "&\\textrm{Attractive}" : "&\\textrm{Repulsive}"}.
          \end{align*}
        `} />
      </div>
    </div>
  )
}

export function ForceVectors(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.02, 0.34, 0.6, -0.02]} initFn={(board: JXG.Board) => {
      // x, y, charge
      const initialData = [
        [0, 0, 1E-8],
        [0.2, 0, -3E-8],
        [0.2, 0.15, 2E-8],
      ]

      const q1: JXG.Input = board.create("input", [0.02, 0.30, 1E-8, "$q_1 =\\ $"])
      const q2: JXG.Input = board.create("input", [0.02, 0.28, -3E-8, "$q_2 =\\ $"])
      const q3: JXG.Input = board.create("input", [0.02, 0.26, 2E-8, "$q_3 =\\ $"])
      const scale = board.create("input", [0.02, 0.24, 500, "Scale: "])

      const p1: JXG.Point = board.create("point", [0, 0], {
        visible: () => +q1.Value() !== 0,
        color: () => +q1.Value() < 0 ? "red" : "green",
        name: "1"
      })
      const p2: JXG.Point = board.create("point", [0.2, 0], {
        visible: () => +q2.Value() !== 0,
        color: () => +q2.Value() < 0 ? "red" : "green",
        name: "2",
      })
      const p3: JXG.Point = board.create("point", [0.2, 0.15], {
        visible: () => +q3.Value() !== 0,
        color: () => +q3.Value() < 0 ? "red" : "green",
        name: "3",
      })

      function calculateForce(
        [targetPoint, targetCharge]: [JXG.Point, JXG.Input],
        charges: [JXG.Point, JXG.Input][]
      ): math.Matrix {
        const targetPos = math.matrix([targetPoint.X(), targetPoint.Y()])
        const targetChargeValue = +targetCharge.Value()
        let force = math.chain(math.matrix([0, 0]))
        charges.forEach(([point, charge]) => {
          const pos = math.matrix([point.X(), point.Y()])
          force = force.add(coulombsLawForceVector(targetChargeValue, +charge.Value(), targetPos, pos))
        })

        return force.done()
      }

      function getForcePointX(
        target: [JXG.Point, JXG.Input],
        charges: [JXG.Point, JXG.Input][]
      ): number {
        const force = calculateForce(target, charges)
        const [targetPoint] = target
        return targetPoint.X() + (force.toArray() as number[])[0] * +scale.Value()
      }
      function getForcePointY(
        target: [JXG.Point, JXG.Input],
        charges: [JXG.Point, JXG.Input][]
      ): number {
        const force = calculateForce(target, charges)
        const [targetPoint] = target
        return targetPoint.Y() + (force.toArray() as number[])[1] * +scale.Value()
      }

      const forcePoint1 = board.create("point", [
        () => getForcePointX(
          [p1, q1],
          [
            [p2, q2],
            [p3, q3],
          ]
        ),
        () => getForcePointY(
          [p1, q1],
          [
            [p2, q2],
            [p3, q3],
          ]
        )
      ], { visible: false })
      const forcePoint2 = board.create("point", [
        () => getForcePointX(
          [p2, q2],
          [
            [p1, q1],
            [p3, q3],
          ]
        ),
        () => getForcePointY(
          [p2, q2],
          [
            [p1, q1],
            [p3, q3],
          ]
        )
      ], { visible: false })
      const forcePoint3 = board.create("point", [
        () => getForcePointX(
          [p3, q3],
          [
            [p1, q1],
            [p2, q2],
          ]
        ),
        () => getForcePointY(
          [p3, q3],
          [
            [p1, q1],
            [p2, q2],
          ]
        )
      ], { visible: false })

      const force1 = board.create("arrow", [p1, forcePoint1], { lastArrow: { type: 2 } })
      const force2 = board.create("arrow", [p2, forcePoint2], { lastArrow: { type: 2 } })
      const force3 = board.create("arrow", [p3, forcePoint3], { lastArrow: { type: 2 } })

      function getLabel(
        target: [JXG.Point, JXG.Input],
        charges: [JXG.Point, JXG.Input][],
        index: number,
      ): string {
        const force = calculateForce(target, charges)
        const forceX = (force.toArray() as number[])[0]
        const forceY = (force.toArray() as number[])[1]

        return String.raw`$\boldsymbol{F}_${index} = [${toScientific(forceX)},\ ${toScientific(forceY)}]$`
      }

      const label1 = board.create("text", [0.45, 0.30, () => getLabel(
        [p1, q1],
        [
          [p2, q2],
          [p3, q3],
        ],
        1
      )])
      const label2 = board.create("text", [0.45, 0.25, () => getLabel(
        [p2, q2],
        [
          [p1, q1],
          [p3, q3],
        ],
        2
      )])
      const label3 = board.create("text", [0.45, 0.20, () => getLabel(
        [p3, q3],
        [
          [p1, q1],
          [p2, q2],
        ],
        3
      )])

      function getMagnitudeLabel(
        target: [JXG.Point, JXG.Input],
        charges: [JXG.Point, JXG.Input][],
        index: number,
      ): string {
        const force = math.norm(calculateForce(target, charges)) as number
        return String.raw`$F_${index} = ${toScientific(force)}\ N$`
      }

      const magnitudeLabel1 = board.create("text", [0.45, 0.28, () => getMagnitudeLabel(
        [p1, q1],
        [
          [p2, q2],
          [p3, q3],
        ],
        1
      )])
      const magnitudeLabel2 = board.create("text", [0.45, 0.23, () => getMagnitudeLabel(
        [p2, q2],
        [
          [p1, q1],
          [p3, q3],
        ],
        2
      )])
      const magnitudeLabel3 = board.create("text", [0.45, 0.18, () => getMagnitudeLabel(
        [p3, q3],
        [
          [p1, q1],
          [p2, q2],
        ],
        3
      )])

      const charges: [JXG.Point, JXG.Input][] = [
        [p1, q1],
        [p2, q2],
        [p3, q3],
      ]

      const resetButton = board.create("button", [0.02, 0.22, "Reset", () => {
        charges.forEach(([point, charge], i) => {
          point.moveTo([initialData[i][0], initialData[i][1]]);
          (charge as FixedInput).set(initialData[i][2].toString())
        });
        (scale as FixedInput).set("500")
      }])
    }} />
  )
}
