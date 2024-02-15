"use client"

import JXG from "jsxgraph";
import { useEffect, useId, useMemo } from "react";

export type BoardProps = {
  id?: string
  bbox?: [number, number, number, number]
  axis?: boolean
  offsetX?: number,
  offsetY?: number,
}

export function CustomJXGBoard({
  id,
  bbox,
  axis,
  initFn,
}: BoardProps & {
  initFn?: (board: JXG.Board) => void
}) {
  const generatedId = useId()
  const jxgId = useMemo(() => !id ? generatedId : id, [id, generatedId])

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(jxgId, {
      axis: axis ?? true,
      boundingBox: bbox ?? [-8, 4.5, 8, -4.5],
      showCopyright: false,
    })

    if (initFn) {
      initFn(board)
    }

    return () => JXG.JSXGraph.freeBoard(board)
  }, [jxgId, bbox, initFn, axis])

  return (
    <div className="w-full aspect-video" id={jxgId} />
  )
}
