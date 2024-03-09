"use client"

import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { k } from "@/utils/constants";
import { sumVectorArray, toScientific, toScientific2DVector } from "@/utils/misc";
import { pointVector } from "@/utils/jxg";
import * as math from "mathjs"
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export function WorkBetweenPotentials() {
  const [q, setQ] = useState<number>(25e-6)
  const [phi1, setPhi1] = useState<number>(200)
  const [phi2, setPhi2] = useState<number>(800)

  return (
    <div className="grid grid-cols-[auto_auto] gap-2">
      <label className="justify-self-end">
        <InlineMath math="q =" />
      </label>
      <input value={q} onChange={e => setQ(+e.target.value)} className="justify-self-start" type="number" />

      <label className="justify-self-end">
        <InlineMath math="\varphi_1 =" />
      </label>
      <input value={phi1} onChange={e => setPhi1(+e.target.value)} className="justify-self-start" type="number" />

      <label className="justify-self-end">
        <InlineMath math="\varphi_1 =" />
      </label>
      <input value={phi2} onChange={e => setPhi2(+e.target.value)} className="justify-self-start" type="number" />

      <div className="col-span-2 flex flex-col items-center">
        <BlockMath math={String.raw`W_{ext} = ${toScientific(q * (phi2 - phi1))}\ J.`} />
      </div>
    </div>
  )
}

export function RadialPotential(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.16, 0.09, 0.16, -0.09]} initFn={(board: JXG.Board) => {
      const chargeInput = board.create("input", [-0.15, 0.08, 30e-9, "$Q =\\ $"])
      board.create("point", [() => 0, () => 0], { name: "Q" })
      const point = board.create("point", [0.06 / Math.SQRT2, 0.06 / Math.SQRT2])

      board.create("text", [-0.15, 0.07, () => String.raw`$\varphi = ${toScientific(k * (+chargeInput.Value()) / (math.norm(pointVector(point)) as number))}\ V$`])
    }} />
  )
}
