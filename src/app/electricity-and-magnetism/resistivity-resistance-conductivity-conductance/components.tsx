"use client"

import { ResistivityMaterial, resistivity } from "@/utils/constants"
import { capitalize, sumArray, toScientific } from "@/utils/misc"
import { useCallback, useEffect, useMemo, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"

export function ResistanceAndConductanceCalculator() {
  const [area, setArea] = useState(0)
  const [radius, setRadius] = useState(0)
  const [length, setLength] = useState(0)

  useEffect(() => {
    setArea(Math.PI * radius ** 2)
  }, [radius])

  useEffect(() => {
    setRadius(Math.sqrt(area / Math.PI))
  }, [area])

  const [material, setMaterial] = useState<ResistivityMaterial>("copper")

  const rho: number = useMemo(() => resistivity[material], [material])
  const sigma = useMemo(() => 1 / rho, [rho])

  const resistance = useMemo(() => rho * length / area, [rho, length, area])
  const conductance = useMemo(() => 1 / resistance, [resistance])

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-2 items-start">
        <label className="flex gap-2">
          Material:
          <select value={material} onChange={e => setMaterial(e.target.value as ResistivityMaterial)} className="justify-self-start">
            {Object.keys(resistivity).map((mat, i) =>
              <option value={mat} key={i}>{capitalize(mat)}</option>
            )}
          </select>
        </label>

        <span className="flex gap-2">
          <label className="flex gap-2">
            <InlineMath math="A = " />
            <input value={area} onChange={e => setArea(+e.target.value)} className="justify-self-start" type="number" />
          </label>

          <label className="flex gap-2">
            <InlineMath math="r = " />
            <input value={radius} onChange={e => setRadius(+e.target.value)} className="justify-self-start" type="number" />
          </label>
        </span>
        <label className="flex gap-2">
          <InlineMath math="l = " />
          <input value={length} onChange={e => setLength(+e.target.value)} className="justify-self-start" type="number" />
        </label>

        <div className="flex flex-col items-center">
          <BlockMath math={String.raw`
          \begin{align*}
            \rho &= ${toScientific(rho)}\ \Omega m, \\
            \sigma &= ${toScientific(sigma)}\ Sm^{-1}, \\
            R &= ${toScientific(resistance)}\ \Omega, \\
            G &= ${toScientific(conductance)}\ S.
          \end{align*}
        `} />
        </div>
      </div>
    </div>
  )
}

type ConnectionType = "parallel" | "serial"

export function ResistanceAndConductanceCalculatorCircuit() {
  const [type, setType] = useState<ConnectionType>("parallel")
  const [resistors, setResistors] = useState<number[]>([0])

  const getOtherType: (current?: ConnectionType) => ConnectionType = useCallback((current = type) =>
    current === "parallel" ? "serial" : "parallel"
    , [type])

  const calculateSerialResistance = useCallback(() =>
    sumArray(resistors)
    , [resistors])

  const calculateParallelResistance = useCallback(() =>
    1 / sumArray(resistors.map(val => 1 / val))
    , [resistors])

  const calculateResistance = useCallback(() =>
    type === "parallel" ? calculateParallelResistance() : calculateSerialResistance()
    , [type, calculateSerialResistance, calculateParallelResistance])

  const resistance = useMemo(() => calculateResistance(), [calculateResistance])

  return (
    <div className="w-full flex justify-center">
      <div className=" flex flex-col gap-2">
        <p className="flex gap-2">
          {capitalize(type)} connection
          <button onClick={() => setType(getOtherType)}>Switch to {getOtherType()}</button>
        </p>

        <BlockMath math={String.raw`
          \begin{align*}
            R &= ${toScientific(resistance)}\ \Omega, \\
            G &= ${toScientific(1 / resistance)}\ S,
          \end{align*}
        `} />

        {resistors.map((val, i) =>
          <label key={i} className="flex gap-2">
            <InlineMath math={String.raw`R_${i + 1} = `} />
            <input type="number" value={val} onChange={e => setResistors(prev => {
              prev[i] = +e.target.value
              return [...prev]
            })} />
            <button onClick={() => setResistors(prev => {
              prev.splice(i)
              return [...prev]
            })}>Remove</button>
          </label>
        )}

        <button onClick={() => setResistors(prev => [...prev, 0])}>Add condensator</button>
      </div>
    </div>
  )
}
