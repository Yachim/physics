"use client"

import Canvas from "@/components/canvas"
import { toScientific } from "@/utils/misc"
import { addExtraConst, angularMomentumUnitSI, energyUnitSI, frequencyUnitSI, fromSI, lengthUnitSI, massUnitSI, toSI, velocityUnitSI } from "@/utils/units"
import { useCallback, useMemo, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

export function NewtonianOrbitPredictor() {
    const [bigM, setBigM] = useState(1.97e30)
    const [m, setM] = useState(5.97e24)
    const [r0, setR0] = useState(147.1e9)
    const [v0, setV0] = useState(0)
    const [omega0, setOmega0] = useState(2.06e-7)
    const [vPerp0, setVPerp0] = useState(30290)
    const [speedType, setSpeedType] = useState<"perp" | "angular">("perp")

    const mGeo = useMemo(() => fromSI(m, massUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [m, bigM])
    const r0Geo = useMemo(() => fromSI(r0, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [r0, bigM])
    const v0Geo = useMemo(() => fromSI(v0, velocityUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [v0, bigM])
    const omega0Geo = useMemo(() => fromSI(speedType === "angular" ? omega0 : vPerp0 / r0, frequencyUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [omega0, bigM, r0, speedType, vPerp0])

    const lGeo = useMemo(() => mGeo * r0Geo ** 2 * omega0Geo, [mGeo, r0Geo, omega0Geo])

    const uEff = useCallback((r: number) => 
        (lGeo ** 2) / (2 * mGeo * r ** 2) - mGeo / r
    , [lGeo, mGeo])

    const eGeo = useMemo(() => 0.5 * mGeo * (v0Geo ** 2) + uEff(r0Geo), [mGeo, v0Geo, r0Geo, uEff])

    const lSI = useMemo(() => toSI(lGeo, angularMomentumUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [lGeo, bigM])
    const eSI = useMemo(() => toSI(eGeo, energyUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [eGeo, bigM])

    const sqrtD = useMemo(() => Math.sqrt(mGeo ** 2 + 2 * eGeo * (lGeo ** 2) / mGeo), [mGeo, eGeo, lGeo])
    console.log(sqrtD)
    const r1Geo = useMemo(() => - (mGeo - sqrtD) / (2 * eGeo), [mGeo, sqrtD])
    const r2Geo = useMemo(() => - (mGeo + sqrtD) / (2 * eGeo), [mGeo, sqrtD])

    const r1SI = useMemo(() => toSI(r1Geo, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [r1Geo, bigM])
    const r2SI = useMemo(() => toSI(r2Geo, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [r2Geo, bigM])

    // ellipse variables
    const aGeo = useMemo(() => Math.abs(r1Geo + r2Geo) / 2, [r1Geo, r2Geo])
    const cGeo = useMemo(() => aGeo - r1Geo, [aGeo, r1Geo])
    const bGeo = useMemo(() => Math.sqrt(aGeo ** 2 - cGeo ** 2), [aGeo, cGeo])

    const aSI = useMemo(() => toSI(aGeo, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [aGeo, bigM])
    const cSI = useMemo(() => toSI(cGeo, lengthUnitSI, "geometrizedMass", addExtraConst(2, bigM)), [cGeo, bigM])

    return (
        <div className="grid gap-2 grid-cols-[auto_auto]">
            <label className="justify-self-end gap-0"><InlineMath math="M (kg)" />:</label>
            <input className="justify-self-start" type="number" value={bigM} onChange={e => setBigM(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math="m (kg)" />:</label>
            <input className="justify-self-start" type="number" value={m} onChange={e => setM(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math="r_0 (m)" />:</label>
            <input className="justify-self-start" type="number" value={r0} onChange={e => setR0(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math="v_0 (m\ s^{-1})" />:</label>
            <input className="justify-self-start" type="number" value={v0} onChange={e => setV0(+e.target.value)}/>

            <label className="justify-self-end gap-0"><InlineMath math={speedType === "angular" ? "\\omega_0 (s^{-1})" : "v_{perp0} (m\\ s^{-1})"} />:</label>
            <div className="flex gap-2">
                <input 
                    className="justify-self-start" 
                    type="number"
                    value={speedType === "angular" ? omega0 : vPerp0} 
                    onChange={speedType === "angular" ? e => setOmega0(+e.target.value) : e => setVPerp0(+e.target.value)}
                />
                <button onClick={() => setSpeedType(prev => prev === "angular" ? "perp" : "angular")}>Switch to <InlineMath math={speedType === "angular" ? "v_{perp0}": "\\omega_0"} /></button>
            </div>

            <div className="col-span-2 flex flex-col gap-2 items-center">
                <BlockMath math={String.raw`
                    \begin{align*}
                        L &= ${toScientific(lSI)}\ kg\ m^2\ s^{-1}, \\
                        E &= ${toScientific(eSI)}\ J, \\
                        r_1 &= ${toScientific(r1SI)}\ m, \\
                        r_2 &= ${toScientific(r2SI)}\ m.
                    \end{align*}
                `} />

                <p className="text-lg">Ellipse Data</p>
                <p>Semi-major axis: <InlineMath math={`${toScientific(aSI)}\ m`} /></p>
                <p>Distance of star from center: <InlineMath math={`${toScientific(cSI)}\ m`} /></p>
                <Canvas width={800} height={450} draw={(ctx: CanvasRenderingContext2D) => {
                    const width = ctx.canvas.width
                    const height = ctx.canvas.height
                    const centerX = width / 2
                    const centerY = height / 2

                    let ellipseHeight = height * (3/4)
                    let ellipseWidth = ellipseHeight * (aGeo / bGeo)

                    if (ellipseWidth > width * 3/4) {
                        ellipseWidth = width * (3/4);
                        ellipseHeight = ellipseWidth * (bGeo / aGeo);
                    }

                    ctx.beginPath();
                    ctx.ellipse(centerX, centerY, ellipseWidth / 2, ellipseHeight / 2, 0, 0, 2 * Math.PI)
                    ctx.strokeStyle = 'lightblue'
                    ctx.lineWidth = 2
                    ctx.stroke()

                    const distanceFromCenter = cGeo / aGeo * ellipseHeight / 2
                    const dotX = centerX + distanceFromCenter
                    const dotY = centerY
                    const dotRadius = 5
                    ctx.beginPath()
                    ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI)
                    ctx.fillStyle = 'orange'
                    ctx.fill()
                }}/>
            </div>
        </div>
    )
}