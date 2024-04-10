"use client"

import { useMemo, useState } from "react"
import { InlineMath } from "react-katex"
import { useSearchParams } from "next/navigation"
import { UnitSystem, UnitType, UnitTypeNull, convert, getFactor, siUnits, toText, units } from "@/utils/units"

export function UnitConverter() {
    const searchParams = useSearchParams()
    let initialUnitSystem = searchParams.get("system") ?? ""
    if (!Object.keys(units).includes(initialUnitSystem)) {
        initialUnitSystem = "geometrized"
    }

    const [system, setSystem] = useState<UnitSystem>(initialUnitSystem as UnitSystem)
    const [conversion, setConversion] = useState<"f" | "b">("f")

    const [values, setValues] = useState<UnitType>([0, 0, 0, 0, 0, 0, 0])
    const inputUnit = useMemo(() => toText(values, conversion === "f" ? "si" : system), [conversion, system, values])

    const resultArray = useMemo(() => getFactor(system, values, conversion), [system, values, conversion])
    const result = useMemo(() => toText(resultArray, conversion === "b" ? "si" : system), [conversion, system, resultArray])

    const [extraConsts, setExtraConsts] = useState<UnitTypeNull>([null, null, null, null, null, null, null])
    const [convertingValue, setConvertingValue] = useState(0)

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
            <p>Extra constants:</p>
            <div className="flex gap-2">
                {extraConsts.map((el, i) => 
                    <label className="flex gap-1" key={i}>
                        <input className="w-20" type="number" value={el ?? ""} onChange={e => setExtraConsts(prev => {
                            prev[i] = e.target.value === "" ? null : +e.target.value
                            return [...prev]
                        })} />
                    </label>
                )}
            </div>

            <label className="mt-3">
                Value: <input type="number" value={convertingValue} onChange={e => setConvertingValue(+e.target.value)}/> <InlineMath math={inputUnit} />
            </label>
            <p>Converted value: {convert(convertingValue, conversion === "f" ? values : resultArray, system, conversion, extraConsts)} <InlineMath math={result} /></p>
        </div>
    )
}