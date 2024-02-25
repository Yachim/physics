"use client"

import JXG from "jsxgraph";
import { useEffect, useRef } from "react";

JXG.Options.text.useMathJax = true

export type BoardProps = {
  bbox?: [number, number, number, number]
  axis?: boolean
  offsetX?: number,
  offsetY?: number,
}

export type FixedInput = JXG.Input & { set(val: any): void }

export function CustomJXGBoard({
  bbox,
  axis,
  initFn,
}: BoardProps & {
  initFn?: (board: JXG.Board) => void
}) {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(el.current!, {
      axis: axis ?? true,
      boundingBox: bbox ?? [-8, 4.5, 8, -4.5],
      showCopyright: false,
      keepAspectRatio: true,
    })

    if (initFn) {
      initFn(board)
    }

    return () => JXG.JSXGraph.freeBoard(board)
  }, [bbox, initFn, axis])

  return (
    <div className="w-full aspect-video" ref={el} />
  )
}
