"use client"

import { useEffect } from "react"

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
  })
  
  return (function () {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    script.async = true
    script.id = "mathjax"

    document.head.appendChild(script)
  })()
}
