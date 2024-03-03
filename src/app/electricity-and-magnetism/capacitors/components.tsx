"use client"

import { capitalize, sumArray, toScientific } from "@/utils/misc"
import { useCallback, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

type ConnectionType = "parallel" | "serial"

export function CapacitanceCalculator() {
  const [type, setType] = useState<ConnectionType>("parallel")
  const [condensators, setCondensators] = useState<number[]>([0])

  const getOtherType: (current?: ConnectionType) => ConnectionType = useCallback((current = type) =>
    current === "parallel" ? "serial" : "parallel"
    , [type])

  const calculateParallelCapacitance = useCallback(() =>
    sumArray(condensators)
    , [condensators])

  const calculateSerialCapacitance = useCallback(() =>
    1 / sumArray(condensators.map(val => 1 / val))
    , [condensators])

  const calculateCapacitance = useCallback(() =>
    type === "parallel" ? calculateParallelCapacitance() : calculateSerialCapacitance()
    , [type, calculateSerialCapacitance, calculateParallelCapacitance])

  return (
    <div className="w-full flex justify-center">
      <div className=" flex flex-col gap-2">
        <p className="flex gap-2">
          {capitalize(type)} connection
          <button onClick={() => setType(getOtherType)}>Switch to {getOtherType()}</button>
        </p>

        <BlockMath math={String.raw`C = ${toScientific(calculateCapacitance())}\ F`} />

        {condensators.map((val, i) =>
          <label key={i} className="flex gap-2">
            <InlineMath math={String.raw`C_${i + 1} = `} />
            <input type="number" value={val} onChange={e => setCondensators(prev => {
              prev[i] = +e.target.value
              return [...prev]
            })} />
            <button onClick={() => setCondensators(prev => {
              prev.splice(i)
              return [...prev]
            })}>Remove</button>
          </label>
        )}

        <button onClick={() => setCondensators(prev => [...prev, 0])}>Add condensator</button>
      </div>
    </div>
  )
}
