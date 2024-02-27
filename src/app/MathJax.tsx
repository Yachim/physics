"use client"

import { useEffect } from "react"

declare const window: {
  MathJax: any
} & Window

export default function MathJax() {
  useEffect(() => {
    window.MathJax = {
      loader: {load: ['[tex]/ams']},
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
