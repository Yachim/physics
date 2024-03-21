"use client"

import { useMemo, useState } from "react"
import { InlineMath } from "react-katex"
import { useSearchParams } from "next/navigation"
import { UnitSystem, UnitType, getFactor, siUnits, units } from "@/utils/units"

export function UnitConverter() {
    const searchParams = useSearchParams()
    let initialUnitSystem = searchParams.get("system") ?? ""
    if (!Object.keys(units).includes(initialUnitSystem)) {
        initialUnitSystem = "geometrized"
    }

    const [system, setSystem] = useState<UnitSystem>(initialUnitSystem as UnitSystem)
    const [conversion, setConversion] = useState<"f" | "b">("f")

    const [values, setValues] = useState<UnitType>([0, 0, 0, 0, 0, 0, 0])

    const resultArray = useMemo(() => getFactor(system, values, conversion), [system, values, conversion])
    const result = useMemo(() => resultArray.map((el, i) => {
        if (el === 0) return ""
        let res = siUnits[i]
        if (conversion === "f") {
            res = units[system].units[i]
        }
        if (el !== 1) {
            res += `^{${el}}`
        }
        return res + "\\ "
    }).join(""), [conversion, system, resultArray])

    return (
        <div className="flex flex-col items-center gap-2">
            <label className="flex gap-2">
                System:
                <select  value={system} onChange={e => setSystem(e.target.value as UnitSystem)}>
                    {Object.keys(units).map((el, i) => 
                        <option value={el} key={i}>{units[el as UnitSystem].name}</option>
                    )}
                </select>
            </label>
            <p className="flex gap-2">
                Conversion: {`SI ${conversion === "f" ? "→" : "←"} ${units[system].name}`}
                <button onClick={() => setConversion(prev => prev === "f" ? "b" : "f")}>Switch</button>
            </p>
            <div className="flex gap-2">
                {values.map((el, i) => 
                    <label className="flex gap-1" key={i}>
                        <input className="w-20" type="number" value={el} onChange={e => setValues(prev => {
                            prev[i] = +e.target.value
                            return [...prev]
                        })} />
                        <InlineMath math={(conversion === "f" ? siUnits[i] : units[system].units[i]) + "^x"}/>
                    </label>
                )}
            </div>
            <p>Units: <InlineMath math={result === "" ? "1" : result}/></p>
        </div>
    )
}