"use client"

import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard";
import { coulombsLawForceMagnitude } from "@/utils/calculations";
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
            |\vec{F}_e| &= ${toScientific(f)}\ N  ${chargeProduct === 0 ? "" : chargeProduct < 0 ? "&\\textrm{Attractive}" : "&\\textrm{Repulsive}"}.
          \end{align*}
        `} />
      </div>
    </div>
  )
}

export function ForceVectors(props: BoardProps) {
  return <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.08, 0.68, 1.2, -0.04]} initFn={(board: JXG.Board) => {
    const charges: [JXG.Point, JXG.Input, JXG.Button][] = []

    const addButton = board.create("button", [0.04, 0.60, "Add charge", addCharge])
    const drawButton = board.create("button", [0.135, 0.60, "Draw"])

    function addCharge() {
      const cnt = charges.length
      const n = cnt + 1

      const point = board.create("point", [0, 0])
      point.setName(n.toString())

      const input = board.create("input", [0.04, 0.56 - cnt * 0.04, 0, `q${n} = `])
      const removeButton = board.create("button", [0.328, 0.56 - cnt * 0.04, "Remove", () => {
        board.removeObject(input.id)
        board.removeObject(point.id)
        board.removeObject(removeButton.id)
        charges.splice(cnt, 1)
      }])

      charges.push([point, input, removeButton])
    }
  }} />
}
