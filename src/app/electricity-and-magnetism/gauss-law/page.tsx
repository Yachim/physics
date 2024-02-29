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
      <p>By Gauss&apos;s Law, the electric flux through a closed surface is equal to the total charge enclosed within that surface divided by the permittivity:</p>
      <BlockMath math="
        \begin{align*}
	        \Phi_E &= \frac{Q}{\epsilon_0}, \\
	        \boldsymbol{\nabla} \cdot \boldsymbol{E} &= \frac{\rho}{\epsilon_0 \epsilon_r},
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A}, \\
	        \epsilon_0 &\approx 8.85 \cdot 10^{-12}\ Fm^{-1}, \\
	  k_e &= \frac{1}{4 \pi \epsilon_0} \implies \epsilon_0 = \frac{1}{4 \pi k_e}.
        \end{align*}
      " />
      
      <LinkH2 id="infinite-line-charge">Infinite Line Charge</LinkH2>
      <p>A line has a <b>constant</b> linear charge density <InlineMath math="\lambda" />. Its ends lie in points <InlineMath math="A" /> and <InlineMath math="B" />. What is the electric field at point <InlineMath math="C" />?</p>
      <p>This example builds on the linear algebra of <Link href="/electricity-and-magnetism/electric-field#line-charge">line charge from electric field</Link>, particularly:</p>
      <BlockMath math="
        \begin{align*}
	        h_y &= \boldsymbol{\hat{y}} \cdot (C - A), \\
	        \boldsymbol{h} &= h_y \boldsymbol{\hat{y}}, \\
	        H &= A + \boldsymbol{h}, \\
	        \boldsymbol{s} &= C - H.
        \end{align*}
      " />
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/linec.png`}
          width={700}
          height={700}
          alt="Line charge illustration"
	  unoptimized
        />
      </div>
      <p>Since the charge density <InlineMath math="\lambda"/> is constant, the charge is equal to:</p>
      <BlockMath math="Q = \lambda\ l." />

      <p>Then the electric flux is equal to:</p>
      <BlockMath math="\Phi_E = \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A}  = \frac{\lambda\ l}{\epsilon_0}" />

      <p>Since the electric field has a same direction and same magnitude at constant <InlineMath math="s" />, the equation becomes:</p>
      <BlockMath math="
        \begin{align*}
          E \int dA  &= \frac{\lambda\ l}{\epsilon_0}, \\
          E A  &= \frac{\lambda\ l}{\epsilon_0}.
        \end{align*}
      " />

      <p>The area of a cylinder is equal to:</p>
      <BlockMath math="A = 2 \pi s l." />

      <p>Algebraically solving for <InlineMath math="E" />:</p>
      <BlockMath math="
        \begin{align*}
          2 E \pi s l  &= \frac{\lambda\ l}{\epsilon_0}, \\
          E  &= \frac{\lambda}{2 \pi s \frac{1}{4 \pi k_e}} \\
          &= \frac{\lambda}{s \frac{1}{2 k_e}} \\
          &= \frac{2 k_e \lambda}{s}, \\
        \end{align*}
      " />
      <p>Which is identical to the equation derived in the electric field section.</p>

      <LinkH2 id="spherical-conductor">Spherical conductor</LinkH2>
      <p>A spherical conductor has a <b>constant</b> surface area charge density <InlineMath math="\sigma"/>. What is the electric field at a distance <InlineMath math="r"/>?</p>
    </div>
  )
}
