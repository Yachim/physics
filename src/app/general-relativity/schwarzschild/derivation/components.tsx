"use client"

import { toScientific } from "@/utils/misc"
import { UnitTypeNull, addExtraConst, fromSI, getFactor, lengthUnitSI, timeUnitSI, toSI } from "@/utils/units"
import { useMemo, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

export function SchwarzschildRadiusCalculator() {
    const [m, setM] = useState(0)

    const rs = useMemo(() => toSI(2, lengthUnitSI, "geometrizedMass", addExtraConst(2, m)), [m])

    return (
        <div className="grid grid-cols-[auto_auto] gap-2">
            <label className="gap-0 justify-self-end"><InlineMath math="M\ (kg)"/>:</label>
            <input type="number" value={m} onChange={e => setM(+e.target.value)} className="justify-self-start" />

            <div className="col-span-2">
                <BlockMath math={String.raw`r_s = ${toScientific(rs)}\ m`}/>
            </div>
        </div>
    )
}