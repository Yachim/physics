"use client"

import { addExtraConst, fromSI, getFactor, lengthUnitSI, massUnitSI, timeUnitSI, toSI } from "@/utils/units";
import { useMemo, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export function TimeDilationCalculator() {
    const [m, setM] = useState(0)
    const [r, setR] = useState(0)
    const [t, setT] = useState(0)

    const rGeo = useMemo(() => fromSI(r, lengthUnitSI, "geometrizedMass", addExtraConst(2, m)), [r, m])
    const tGeo = useMemo(() => fromSI(t, timeUnitSI, "geometrizedMass", addExtraConst(2, m)), [t, m])

    const tauGeo = useMemo(() => Math.sqrt(1 - 2/rGeo) * tGeo, [rGeo, tGeo])
    const tau = useMemo(() => toSI(tauGeo, timeUnitSI, "geometrizedMass", addExtraConst(2, m)), [tauGeo, m])

    return (
        <div className="grid grid-cols-[auto_auto] gap-2">
            <label className="gap-0 justify-self-end"><InlineMath math="M\ (kg)"/>:</label>
            <input type="number" value={m} onChange={e => setM(+e.target.value)} className="justify-self-start" />

            <label className="gap-0 justify-self-end"><InlineMath math="r\ (m)"/>:</label>
            <input type="number" value={r} onChange={e => setR(+e.target.value)} className="justify-self-start" />

            <label className="gap-0 justify-self-end"><InlineMath math="t\ "/> (any units):</label>
            <input type="number" value={t} onChange={e => setT(+e.target.value)} className="justify-self-start" />

            <div className="col-span-2">
                <BlockMath math={String.raw`\tau = ${tau}`}/>
            </div>
        </div>
    )
}