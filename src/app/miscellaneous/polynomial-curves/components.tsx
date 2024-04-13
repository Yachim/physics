"use client"

import React, { useMemo, useState } from "react"
import { BlockMath, InlineMath } from "react-katex"
import { clamp, polynomialToString, toScientific } from "@/utils/misc"
import { CustomJXGBoard } from "@/components/JGXBoard"
import * as math from "mathjs"

const curveDrawingBorderPercentage = 20
export function CurveDrawing() {
    // x, y, t
    const [points, setPoints] = useState<[number, number, number][]>([[0, 0, 0], [1, 1, 1]])
    const [axis, setAxis] = useState(true)

    const t0Points = useMemo(() => points.filter(([_x, _y, t]) => t === 0), [points])
    const t1Points = useMemo(() => points.filter(([_x, _y, t]) => t === 1), [points])

    const orderedX = useMemo(() => points.map(([x, _y, _t]) => x).toSorted((a, b) => a - b), [points])
    const orderedY = useMemo(() => points.map(([_x, y, _t]) => y).toSorted((a, b) => a - b), [points])

    const width = useMemo(() => orderedX[orderedX.length - 1] - orderedX[0], [orderedX])
    const height = useMemo(() => orderedY[orderedY.length - 1] - orderedY[0], [orderedY])

    const centerX = useMemo(() => orderedX[0] + width / 2, [orderedX, width])
    const centerY = useMemo(() => orderedY[0] + height / 2, [orderedY, height])

    const [bboxWidth, bboxHeight] = useMemo(() => {
        if (width >= height * 16 / 9) {
            const bboxWidth = width / ((100 - curveDrawingBorderPercentage) / 100)
            return [bboxWidth, bboxWidth * 9 / 16]
        }

        const bboxHeight = height / ((100 - curveDrawingBorderPercentage) / 100)
        return [bboxHeight * 16 / 9, bboxHeight]
    }, [width, height])

    const bbox: [number, number, number, number] = useMemo(() => [centerX - bboxWidth / 2, centerY + bboxHeight / 2, centerX + bboxWidth / 2, centerY - bboxHeight / 2], [centerX, centerY, bboxWidth, bboxHeight])

    const isValid = useMemo(() => t0Points.length > 0 && t1Points.length > 0, [t0Points, t1Points])

    const n = useMemo(() => points.length, [points])

    const xVector = useMemo(() => math.matrix(points.map(([x]) => x)), [points])
    const yVector = useMemo(() => math.matrix(points.map(([_x, y]) => y)), [points])
    const tMatrix = useMemo(() => math.matrix(points.map(([_x, _y, t]) => Array(n).fill(0).map((_el, i) => t ** i))), [points, n])
    const tMatrixDeterminant = useMemo(() => math.det(tMatrix), [tMatrix])

    const [ax, ay]: [number[], number[]] = useMemo(() => {
        if (tMatrixDeterminant === 0) {
            return [[], []]
        }

        const tMatrixInv = math.inv(tMatrix)

        const ax = math.multiply(tMatrixInv, xVector).toArray() as number[]
        const ay = math.multiply(tMatrixInv, yVector).toArray() as number[]

        return [ax, ay]
    }, [tMatrixDeterminant, tMatrix, xVector, yVector])

    return (
        <div className="grid grid-cols-[auto_auto_auto_auto_auto_auto_auto] gap-2 justify-center">
            {points.map(([x, y, t], i) => <React.Fragment key={i}>
                <label className="gap-0"><InlineMath math={String.raw`x_${i}`} />:</label>
                <input value={x} onChange={e => setPoints(prev => {
                    prev[i][0] = +e.target.value
                    return [...prev]
                })} type="number" />
                <label className="gap-0"><InlineMath math={String.raw`y_${i}`} />:</label>
                <input value={y} onChange={e => setPoints(prev => {
                    prev[i][1] = +e.target.value
                    return [...prev]
                })} type="number" />
                <label className="gap-0"><InlineMath math={String.raw`t_${i}`} />:</label>
                <input value={t} onChange={e => setPoints(prev => {
                    const value = clamp(+e.target.value, 0, 1)
                    prev[i][2] = value
                    return [...prev]
                })} type="number" />
                {points.length > 2 ?
                    <button onClick={() => setPoints(prev => [...prev.slice(0, i), ...prev.slice(i + 1)])}>Remove</button>
                : <span/>}
            </React.Fragment>)}
            <button className="col-span-7 justify-self-center" onClick={() => setPoints(prev => [...prev, [0, 0, 0]])}>Add Point</button>

            <label className="col-span-7 justify-self-center">Show axes: <input type="checkbox" checked={axis} onChange={e => setAxis(e.target.checked)} /></label>
            {!isValid && <p className="text-red-500 col-span-7 justify-self-center">There must be at least one point where <InlineMath math="t = 0" /> and at least one point where <InlineMath math="t = 1" />.</p>}
            {tMatrixDeterminant === 0 && <p className="text-red-500 col-span-7 justify-self-center">Invalid data. Determinant is zero.</p>}
            {tMatrixDeterminant !== 0 && <div className="col-span-7 justify-self-center">
                <BlockMath math={String.raw`
                    \begin{align*}
                        x(t) &= ${polynomialToString(ax, "t")}, \\
                        y(t) &= ${polynomialToString(ay, "t")}.
                    \end{align*}
                `} />
            </div>}
            <CustomJXGBoard className="col-span-7" id="curve-drawing" axis={axis} bbox={bbox} initFn={(board: JXG.Board) => {
                if (tMatrixDeterminant === 0) {
                    return
                }

                board.create("curve", [
                    (t: number) => ax.reduce((total, el, i) => total + el * t ** i),
                    (t: number) => ay.reduce((total, el, i) => total + el * t ** i),
                    0, 1
                ])
            }} />
        </div>
    )
}