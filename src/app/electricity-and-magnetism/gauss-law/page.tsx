import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import Image from "next/image"
import getConfig from "next/config"

export const metadata: Metadata = {
  title: "Gauss's Law"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Gauss&apos;s Law</h1>
      <p></p>
      <BlockMath math="
        \begin{align*}
	  \Phi_E &= \frac{Q}{\epsilon_0}, \\
	  \nabla \cdot \boldsymbol{E} &= \frac{\rho}{\epsilon_0 \epsilon_r},
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A}, \\
	  \epsilon_0 &\approx 8.85 \cdot 10^{-12}\ Fm^{-1}.
        \end{align*}
      " />
    </div>
  )
}
