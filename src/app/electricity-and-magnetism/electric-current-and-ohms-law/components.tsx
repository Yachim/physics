"use client";

import { useMemo, useState } from "react";
import { ResistivityMaterial, data } from "./resistivity";
import { capitalize } from "jsxgraph";
import { BlockMath, InlineMath } from "react-katex";
import { toScientific } from "@/utils/misc";

export function ResistanceCalculator() {
    const [material, setMaterial] = useState<ResistivityMaterial>("copper")
    const [temperature, setTemperature] = useState(15)
    const [length, setLength] = useState(3)
    const [diameter, setDiameter] = useState(2e-3)

    const {rho: rho0, alpha} = useMemo(() => data[material], [material])
    const rho = useMemo(() => rho0 * (1 + alpha * (temperature - 20)), [alpha, temperature, rho0])
    const area = useMemo(() => diameter ** 2 / 4 * Math.PI, [diameter])
    const resistance = useMemo(() => rho * length / area, [rho, length, area])

    return (
        <div className="grid grid-cols-[auto_auto] gap-2 items-center">
            <label className="justify-self-end gap-0">
                Material:
            </label>
            <select className="justify-self-start" value={material} onChange={e => setMaterial(e.target.value as ResistivityMaterial)}>
                {Object.keys(data).map((el, i) => 
                    <option value={el} key={i}>{capitalize(el)}</option>
                )}
            </select>

            <label className="justify-self-end gap-0">
                Temperature
                (<InlineMath math="^{\circ}C"/>)
                :
            </label>
            <input className="justify-self-start" type="number" value={temperature} onChange={e => setTemperature(+e.target.value)} />

            <label className="justify-self-end gap-0">
                Length (<InlineMath math="m"/>):
            </label>
            <input className="justify-self-start" type="number" value={length} onChange={e => setLength(+e.target.value)} />

            <label className="justify-self-end gap-0">
                Diameter (<InlineMath math="m"/>):
            </label>
            <input className="justify-self-start" type="number" value={diameter} onChange={e => setDiameter(+e.target.value)} />

            <div className="col-span-2">
                <BlockMath math={String.raw`
                    \begin{align*}
                        \rho &= ${toScientific(rho)}\ \Omega m \\
                        A &= ${toScientific(area)}\ m^2 \\
                        R &= ${toScientific(resistance)}\ \Omega
                    \end{align*}
                `}/>
            </div>
        </div>
    )

}