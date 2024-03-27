"use client"

import { toScientific } from "@/utils/misc"
import { addExtraConst, frequencyUnitSI, fromSI, lengthUnitSI, timeUnitSI, toSI } from "@/utils/units"
import { useMemo, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

export function OrbitalPrecessionCalculator() {
    const [bigM, setBigM] = useState(1.97e30)
    const [r0, setR0] = useState(46e9)
    const [omega0, setOmega0] = useState(1.5e-6)
    const [vPerp0, setVPerp0] = useState(58970)
    const [speedType, setSpeedType] = useState<"perp" | "angular">("perp")

    const r0Geo = useMemo(() => fromSI(r0, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [r0, bigM])
    const omega0Geo = useMemo(() => fromSI(speedType === "angular" ? omega0 : vPerp0 / r0, frequencyUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [omega0, bigM, r0, speedType, vPerp0])

    const l = useMemo(() => r0Geo ** 2 * omega0Geo, [r0Geo, omega0Geo])
    const alpha = useMemo(() => 3 / (l ** 2), [l])

    const deltaPhi = useMemo(() => 2 * Math.PI * alpha, [alpha])

    const [period, setPeriod] = useState(88)
    // deltaPhi is dimensionless
    const deltaPhiCentury = useMemo(() => deltaPhi / period * 365 * 100, [deltaPhi, period])
    const deltaPhiArcsecCentury = useMemo(() => deltaPhiCentury * 180 / Math.PI * 3600, [deltaPhiCentury])

    return (
        <div className="grid grid-cols-[auto_auto] gap-2">
            <label className="justify-self-end gap-0"><InlineMath math="M\ (kg)" />:</label>
            <input className="justify-self-start" type="number" value={bigM} onChange={e => setBigM(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math="r\ (m)" />:</label>
            <input className="justify-self-start" type="number" value={r0} onChange={e => setR0(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math={speedType === "angular" ? "\\omega_0\\ (s^{-1})" : "v_{perp0}\\ (m\\ s^{-1})"} />:</label>
            <div className="flex gap-2">
                <input 
                    className="justify-self-start" 
                    type="number"
                    value={speedType === "angular" ? omega0 : vPerp0} 
                    onChange={speedType === "angular" ? e => setOmega0(+e.target.value) : e => setVPerp0(+e.target.value)}
                />
                <button onClick={() => setSpeedType(prev => prev === "angular" ? "perp" : "angular")}>Switch to <InlineMath math={speedType === "angular" ? "v_{perp0}": "\\omega_0"} /></button>
            </div>

            <label className="justify-self-end gap-0"><InlineMath math="T\ (\textrm{days})" />:</label>
            <input className="justify-self-start" type="number" value={period} onChange={e => setPeriod(+e.target.value)}/>

            <div className="col-span-2">
                <BlockMath math={String.raw`
                    \begin{align*}
                        \Delta \phi &= ${toScientific(deltaPhi)}\ \textrm{rad/period} \\
                        &= ${toScientific(deltaPhiCentury)}\ \textrm{rad/century} \\
                        &= ${toScientific(deltaPhiArcsecCentury)}\ \textrm{arcsec/century}
                    \end{align*}
                `} />
            </div>
        </div>
    )
}