import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Poisson's Equation"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/gr-basics">Back</Link>
      <h1>Poisson&apos;s Equation</h1>
      <p>Recall the Newton&apos;s law of universal gravitation:</p>
      <BlockMath math="\boldsymbol{F} = - \frac{G M m}{r^2} \boldsymbol{\hat{r}}," />
      <p>where <InlineMath math="G" /> is the gravitational constant, <InlineMath math="M" /> is the mass of the source body, <InlineMath math="m" /> is the mass of the falling body and <InlineMath math="\boldsymbol{\hat{r}}" /> is the unit vector pointing from <InlineMath math="M" /> to <InlineMath math="m" />. Since we are using geometrized units, the above equation is:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{F} &= - \frac{M m}{r^2} \boldsymbol{\hat{r}}, \\
          F &= \frac{M m}{r^2}.
        \end{align*}
      " />

      <p>By <InlineMath math="\boldsymbol{F} = m \boldsymbol{a}" />, the gravitational acceleration (gravitational field denoted by <InlineMath math="\boldsymbol{g}" />) is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{g} &= - \frac{M}{r^2} \boldsymbol{\hat{r}}, \\
          g &= \frac{M}{r^2}.
        \end{align*}
      " />
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/gr-basics/poissons-equation/newton-law.svg`}
              width={350}
              height={350}
              alt="Newton's law of universal gravitation"
          />
      </div>

      <p>The gravitational force is conservative:</p>
      <BlockMath math="\oint_C \boldsymbol{F} \cdot d\boldsymbol{s} = 0," />
      <p>meaning the work is independent on the path taken and depends only on the initial and end point.</p>

      <LinkH2 id="potential">Potential</LinkH2>
      <p>The potential energy is defined as the work done to move an object of mass <InlineMath math="m" /> from infinity to a distance <InlineMath math="r" />. The work done by gravity</p>
      <BlockMath math="
        \begin{align*}
          W_g &= \int \boldsymbol{F} \cdot d\boldsymbol{r} \\
          &= - \int_{\infty}^r F\ dr \\
          &= M m \int_{\infty}^r -\frac{1}{r^2} \\
          &= M m \lim_{n \to \infty} \left[\frac{1}{r}\right]_n^r \\
          &= \frac{M m}{r}.
        \end{align*}
      " />
      <p>And the external work <InlineMath math="W_e" /> is the negative work done by the gravity:</p>
      <BlockMath math="W_e = - W = - \frac{M m}{r}." />

      <p>The potential is equal to:</p>
      <BlockMath math="\phi = \frac{W_e}{m} = -\frac{M}{r}." />

      <p>The negative gradient of the potential is the gravitational acceleration:</p>
      <BlockMath math="\boldsymbol{g} = -\nabla \phi." />

      <LinkH2 id="gauss-law">Gauss&apos;s Law</LinkH2>
      <p>The flux of the gravitational field</p>
      <BlockMath math="\oiint_{\partial V} \boldsymbol{g} \cdot d\boldsymbol{A} = - 4 \pi M." />
      
      <p>For sphere, this would be:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/gr-basics/poissons-equation/gauss-law.png`}
          width={700}
          height={700}
          alt="Gauss's law illustration"
          unoptimized
        />
      </div>
      <BlockMath math="
        \begin{align*}
          \oiint_{\partial V} \boldsymbol{g} \cdot d\boldsymbol{A} &= - \oiint_{\partial V} g\ dA \\
          &= - g A \\
          &= - \frac{M}{r^2} 4 \pi r^2 \\
          &= - 4 \pi M,
        \end{align*}
      " />
      <p>where <InlineMath math="M" /> is mass enclosed by the surface <InlineMath math="\partial V" />. <InlineMath math="\partial V" /> is the boundary surface of the volume <InlineMath math="V" />.</p>

      <p>By the divergence theorem:</p>
      <BlockMath math="
        \begin{align*}
          \oiint_{\partial V} \boldsymbol{g} \cdot d\boldsymbol{A} = \iiint_V (\nabla \cdot \boldsymbol{g})\ dV &= - 4 \pi M, \\
          \iiint_V (\nabla \cdot \boldsymbol{g})\ dV &= \iiint_V - 4 \pi \rho \ dV, \\
          \nabla \cdot \boldsymbol{g} &= - 4 \pi \rho.
        \end{align*}
      " />

      <LinkH2 id="poissons-equation">Poisson&apos;s Equation</LinkH2>
      <p>Recall that gravitational acceleration is the negative gradient of the potential:</p>
      <BlockMath math="\boldsymbol{g} = -\nabla \phi." />

      <p>If we substitute this into Gauss&apos;s law, we obtain Poisson&apos;s equation:</p>
      <BlockMath math="
        \begin{align*}
          \nabla \cdot \boldsymbol{g} &= - 4 \pi \rho, \\
          \nabla \cdot (- \nabla \phi) &= - 4 \pi \rho, \\
          \nabla^2 \phi &= 4 \pi \rho.
        \end{align*}
      " />
    </div>
  )
}