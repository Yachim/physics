import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { CapacitanceCalculator } from "./components"

export const metadata: Metadata = {
  title: "Capacitors"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Capacitors</h1>
      <p>Capacitors are devices that store electrical energy. The charge is proportional to the voltage between them:</p>
      <BlockMath math="
        \begin{align*}
          Q &= C|U|, \\
          C &= \frac{Q}{|U|}.
        \end{align*}
      " />

      <p>The unit of capacitance is farad (<InlineMath math="F" />).</p>

      <LinkH2 id="two-planes-capacitance">Capacitance of Two Parallel Planes</LinkH2>
      <p>Consider two infinite parallel planes at a distance <InlineMath math="d" /> with opposite charges of equal magnitude <InlineMath math="Q" />:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/basic-capacitor.png`}
          width={700}
          height={700}
          alt="Two parallel planes"
          unoptimized
        />
      </div>

      <p>The electric field between the planes as derived in <Link href="/electricity-and-magnetism/gauss-law#two-parallel-infinite-planes">Gauss&apos;s law chapter</Link> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= -\frac{\sigma}{\epsilon_0}\boldsymbol{\hat{z}}, \\
          E &= \frac{\sigma}{\epsilon_0}.
        \end{align*}
      "/>

      <p>The voltage is equal to:</p>
      <BlockMath math="
        \begin{align*}
          U &= - \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= -Ed, \\
          |U| &= Ed.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{Q}{Ed} \\
          &= \frac{Q \epsilon_0}{\sigma d} \\
          &= \frac{A \epsilon_0}{d},
        \end{align*}
      "/>
      <p>where <InlineMath math="A" /> is the area of each of the planes.</p>

      <LinkH2 id="cylindrical-capacitor">Cylindrical Capacitor</LinkH2>
      <p>Cylindrical capacitor consists of a cylinder of radius <InlineMath math="a" /> and a cylindrical shell of radius <InlineMath math="b" /> of equal length <InlineMath math="L" />. The inner cylinder has a positive charge <InlineMath math="Q" /> and the outer shell has a negative charge <InlineMath math="-Q" />:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/cylindrical-capacitor.png`}
          width={700}
          height={700}
          alt="Cylindrical conductor illustration"
          unoptimized
        />
      </div>

      <p>We choose cylinder with radius <InlineMath math="r" /> and equal length <InlineMath math="L" /> as the gaussian surface:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/cylindrical-capacitor2.png`}
          width={700}
          height={700}
          alt="Cylindrical conductor illustration 2"
          unoptimized
        />
      </div>

      <p>The electric field is constant on the cylinder. Using Gauss&apos;s law to get the electric field:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d\boldsymbol{A} \\
          &= E A \\
          &= 2 E \pi r L
          = \frac{q}{\epsilon_0}, \\
          E &= \frac{q}{2 \epsilon_0 \pi r L},
        \end{align*}
      "/>
      <p>where <InlineMath math="q" /> is the charge enclosed by the gaussian surface (black cylinder). If <InlineMath math="r < a" /> then <InlineMath math="q = 0" />. If <InlineMath math="r > b" /> then <InlineMath math="q~=~Q~+~(-Q) = 0" />. This implies <InlineMath math="a < r < b" /> and thus <InlineMath math="q = Q" />. The voltage is equal to:</p>
      <BlockMath math="
        \begin{align*}
          U &= \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \int_a^b \frac{1}{r} dr \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \left[\ln r\right]_a^b \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \ln \frac{b}{a} = |U|.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{2 \epsilon_0 \pi L}{\ln \frac{b}{a}}
        \end{align*}
      " />

      <LinkH2 id="spherical-capacitor">Spherical Capacitor</LinkH2>
      <p>Spherical capacitor consists of two cocentric spheres. The inner sphere has radius <InlineMath math="a" /> and a positive charge <InlineMath math="Q" />. The outer sphere has a negative charge <InlineMath math="-Q" /> and a radius <InlineMath math="b" />. We choose a cocentric sphere of radius <InlineMath math="r" /> as our gaussian surface:</p>

      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/spherical-capacitor.svg`}
          width={700}
          height={700}
          alt="Spherical cylinder illustration"
        />
      </div>

      <p>The electric field is constant on the surface of the gaussian surface. Using Gauss&apos;s law, the electric field is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \phi_E &= \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A} \\
          &= EA \\
          &= 4 E \pi r^2 \\
          &= \frac{q}{\epsilon_0}, \\
          E &= \frac{q}{4 \epsilon_0 \pi r^2},
        \end{align*}
      "/>

      <p>where <InlineMath math="q" /> is the charged enclosed by the gaussian surface. Similarly to the cylindrical capacitor, the charge is nonzero only when <InlineMath math="a < r < b" />, thus <InlineMath math="q = Q" />. We can now calculate the voltage:</p>
      <BlockMath math="
        \begin{align*}
          U &= \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= \frac{Q}{4 \epsilon_0 \pi} \int_a^b \frac{1}{r^2} dr \\
          &= \frac{Q}{4 \epsilon_0 \pi} \left[\frac{1}{r}\right]_b^a \\
          &= \frac{Q}{4 \epsilon_0 \pi} \left(\frac{1}{a} - \frac{1}{b}\right) \\
          &= \frac{Q (b - a)}{4 \epsilon_0 \pi ab} = |U|.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{4 \epsilon_0 \pi ab}{b - a}.
        \end{align*}
      " />

      <p>An isolated capacitor is similar to a setup where the negative capacitor is placed at infinity:</p>
      <BlockMath math="
        \begin{align*}
          C &= \lim_{b \to \infty} \frac{4 \epsilon_0 \pi ab}{b - a} \\
          &= 4 \epsilon_0 \pi \lim_{b \to \infty} \frac{a}{1 - \frac{a}{b}} \\
          &= 4 \epsilon_0 \pi a.
        \end{align*}
      "/>

      <LinkH2 id="total-capacitance">Total Capacitance</LinkH2>
      <p>There are two ways to connect capacitors:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/parallel.svg`}
          width={350}
          height={350}
          alt="Parallel resistors illustration"
        />
        <Image
          src={`${basePath}/assets/capacitors/series.svg`}
          width={350}
          height={350}
          alt="Serial resistors illustration"
        />
      </div>
      <p>The first is parallel and the second is serial. For parallel, the total capacitance is equal to:</p>
      <BlockMath math="C = \sum_i C_i," />

      <p>and for serial:</p>
      <BlockMath math="\frac{1}{C} = \sum_i \frac{1}{C_i} \implies C = \left(\sum_i \frac{1}{C_i}\right)^{-1}." />

      <LinkH3 id="capacitance-calculator">Capacitance Calculator</LinkH3>
      <CapacitanceCalculator />
    </div>
  )
}
