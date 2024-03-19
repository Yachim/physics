"use client"

import { capitalize } from "@/utils/misc"
import * as math from "mathjs"
import { useMemo, useState } from "react"
import { InlineMath } from "react-katex"
import { geometrizedBackwardMatrix, geometrizedForwardMatrix } from "./matrices"
import { useSearchParams } from "next/navigation"

const units = {
    geometrized: {
        f: geometrizedForwardMatrix,
        b: geometrizedBackwardMatrix,
        units: [
            "c",
            "G", 
            "kg",
            "A",
            "K",
            "cd",
            "mol"
        ]
    }
} as const
type UnitSystem = keyof typeof units
const siUnits = ["s", "m", "kg", "A", "K", "cd", "mol"]

export default function UnitConverter() {
    const searchParams = useSearchParams()
    let initialUnitSystem = searchParams.get("system") ?? ""
    if (!Object.keys(units).includes(initialUnitSystem)) {
        initialUnitSystem = "geometrized"
    }

    const [system, setSystem] = useState<UnitSystem>(initialUnitSystem as UnitSystem)
    const [conversion, setConversion] = useState<"f" | "b">("f")

    const matrix = useMemo(() => units[system][conversion], [system, conversion])

    const [values, setValues] = useState<[number, number, number, number, number, number, number]>([0, 0, 0, 0, 0, 0, 0])
    const vector = useMemo(() => math.transpose(math.matrix(values)), [values])

    const resultArray = useMemo(() => math.transpose(math.multiply(matrix, vector)).toArray() as unknown as number[], [matrix, vector])
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
                        <option value={el} key={i}>{capitalize(el)}</option>
                    )}
                </select>
            </label>
            <p className="flex gap-2">
                Conversion: {`SI ${conversion === "f" ? "→" : "←"} ${capitalize(system)}`}
                <button onClick={() => setConversion(prev => prev === "f" ? "b" : "f")}>Switch</button>
            </p>
            <div className="flex gap-2">
                {values.map((el, i) => 
                    <label className="flex gap-1">
                        <input className="w-20" type="number" value={el} key={i} onChange={e => setValues(prev => {
                            prev[i] = +e.target.value
                            return [...prev]
                        })} />
                        <InlineMath math={conversion === "f" ? siUnits[i] : units[system].units[i]}/>
                    </label>
                )}
            </div>
            <p>Units: <InlineMath math={result === "" ? "1" : result}/></p>
        </div>
    )
}