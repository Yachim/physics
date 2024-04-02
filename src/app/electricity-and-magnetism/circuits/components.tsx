"use client"

import { capitalize, sumArray, toScientific } from "@/utils/misc"
import { useCallback, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

type ConnectionType = "parallel" | "serial"

export function ResistanceCalculator() {
  const [type, setType] = useState<ConnectionType>("parallel")
  const [resistors, setResistors] = useState<number[]>([0])

  const getOtherType: (current?: ConnectionType) => ConnectionType = useCallback((current = type) =>
    current === "parallel" ? "serial" : "parallel"
    , [type])

  const calculateParallelResistance = useCallback(() =>
    1 / sumArray(resistors.map(val => 1 / val))
    , [resistors])

  const calculateSerialResistance = useCallback(() =>
    sumArray(resistors)
    , [resistors])

  const calculateCapacitance = useCallback(() =>
    type === "parallel" ? calculateParallelResistance() : calculateSerialResistance()
    , [type, calculateParallelResistance, calculateSerialResistance])

  return (
    <div className="w-full flex justify-center">
      <div className=" flex flex-col gap-2">
        <p className="flex gap-2">
          {capitalize(type)} connection
          <button onClick={() => setType(getOtherType)}>Switch to {getOtherType()}</button>
        </p>

        <BlockMath math={String.raw`R = ${toScientific(calculateCapacitance())}\ \Omega`} />

        {resistors.map((val, i) =>
          <label key={i} className="flex gap-2">
            <InlineMath math={String.raw`R_${i + 1} = `} />
            <input type="number" value={val} onChange={e => setResistors(prev => {
              prev[i] = +e.target.value
              return [...prev]
            })} />
            <button onClick={() => setResistors(prev => {
              prev.splice(i, 1)
              return [...prev]
            })}>Remove</button>
          </label>
        )}

        <button onClick={() => setResistors(prev => [...prev, 0])}>Add resistor</button>
      </div>
    </div>
  )
}
