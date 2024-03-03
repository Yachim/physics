"use client"

import useCanvas, { DrawFunc } from "../utils/useCanvas"

type CanvasProps = {
  draw: DrawFunc
  width?: number
  height?: number
  className?: string
}

export default function Canvas({ draw, height, width, className }: CanvasProps) {
  const canvasRef = useCanvas(draw)
  return <canvas className={className} ref={canvasRef} width={width ?? window.innerWidth} height={height ?? window.innerHeight} />
}
