"use client"

import Canvas from "@/components/canvas"
import { capitalize, sumArray } from "@/utils/misc"
import { faArrowDown, faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { InlineMath } from "react-katex"

type ConnectionType = "parallel" | "serial"

export function CapacitanceCalculator() {
  const [type, setType] = useState<ConnectionType>("parallel")
  const [condensators, setCondensators] = useState<number[]>([0])

  function getOtherType(current = type): ConnectionType {
    return current === "parallel" ? "serial" : "parallel"
  }

  function calculateParallelCapacitance() {
    return sumArray(condensators)
  }

  function calculateSerialCapacitance() {
    return 1 / sumArray(condensators.map(val => 1 / val))
  }

  function calculateCapacitance() {
    return type === "parallel" ? calculateParallelCapacitance() : calculateSerialCapacitance()
  }

  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <p className="flex gap-2">
        {capitalize(type)} connection
        <button onClick={() => setType(getOtherType)}>Switch to {getOtherType()}</button>
      </p>

      <p><InlineMath math={String.raw`C = ${calculateCapacitance()}`} /></p>

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
  )
}
