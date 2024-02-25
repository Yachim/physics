"use client"

import { useEffect } from "react"

declare const window: {
  MathJax: any
} & Window

export default function MathJax() {
  useEffect(() => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      },
      svg: {
        fontCache: 'global'
      }
    }
  }, [])

  return <></>
}
