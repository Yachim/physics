"use client"

import * as math from "mathjs"
import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard";
import { coulombsLawForceMagnitude, coulombsLawForceVector } from "@/utils/calculations";
import { PermitivittyMaterial, permitivitty } from "@/utils/constants";
import { toScientific, toScientificHtml } from "@/utils/misc";
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
            |\vec{F}_e| &= ${toScientific(f)}\ N  ${chargeProduct === 0 ? "" : chargeProduct < 0 ? "&\\textrm{Attractive}" : "&\\textrm{Repulsive}"}.
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

      const p1 = board.create("point", [0, 0], { color: "green", name: "1" })
      const p2 = board.create("point", [0.2, 0], { color: "red", name: "2" })
      const p3 = board.create("point", [0.2, 0.15], { color: "green", name: "3" })

      const q1 = board.create("input", [0.02, 0.30, 1E-8, "q_1 = "])
      const q2 = board.create("input", [0.02, 0.28, -3E-8, "q_2 = "])
      const q3 = board.create("input", [0.02, 0.26, 2E-8, "q_3 = "])

      const label1 = board.create("text", [0.45, 0.30, String.raw`\vec{F}_1 = 0 N`])
      const label2 = board.create("text", [0.45, 0.28, String.raw`\vec{F}_2 = 0 N`])
      const label3 = board.create("text", [0.45, 0.26, String.raw`\vec{F}_3 = 0 N`])

      const charges: [JXG.Point, JXG.Input, JXG.Text][] = [
        [p1, q1],
        [p2, q2],
        [p3, q3],
      ]

      const vectors: JXG.Arrow[] = []
      function removeVectors() {
        vectors.forEach(v => board.removeObject(v.id))
      }

      const resetButton = board.create("button", [0.045, 0.24, "Reset", () => {
        removeVectors()
        charges.forEach(([point, charge], i) => {
          point.moveTo([initialData[i][0], initialData[i][1]])
          charge.set(initialData[i][2])
	  point.setAttribute({
            color: +charge.Value() > 0 ? "green" : "red",
	    visible: +charge.Value() !== 0,
	  })
        })
      }])

      const drawButton = board.create("button", [0.02, 0.24, "Draw", () => {
        removeVectors()
        charges.forEach(([point1, charge1], i1) => {
          point1.setAttribute({
	    visible: +charge1.Value() !== 0,
            color: +charge1.Value() > 0 ? "green" : "red",
          })
          if (+charge1.Value() === 0) {
            point1.setAttribute({
              visible: false,
            })
          }

          let force = math.chain(math.matrix([0, 0]))
          charges.toSpliced(i1, 1).forEach(([point2, charge2], i2) => {
            const r1 = math.matrix([point1.X(), point1.Y()])
            const r2 = math.matrix([point2.X(), point2.Y()])
            const r12 = math.subtract(r1, r2)

            const chargeForce = coulombsLawForceVector(+charge1.Value(), +charge2.Value(), r12)

            force = force.add(chargeForce)
          })
	  const scale = 500
	  const forceMagnitude = force.norm().done()
	  console.log(math.number(forceMagnitude))
	  const forceX = force.subset(math.index(0)).done()
	  const forceY = force.subset(math.index(1)).done()

          const forceArrow = board.create("arrow", [point1, [+point1.X() + forceX * scale, +point1.Y() + forceY * scale]])
          vectors.push(forceArrow)
        })
      }])
    }} />
  )
}
