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
      <p>Consider two infinite parallel planes at a distance <InlineMath math="d"/> with opposite charges of equal magnitude <InlineMath math="Q"/>:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/basic-capacitor.png`}
          width={700}
          height={700}
          alt="Two parallel planes"
          unoptimized
        />
      </div>

      <p>The electric field between the planes as derived in <Link href="/electricity-and-magnetism/gauss-law#two-parallel-infinite-planes">Gauss's law chapter</Link> is equal to:</p>
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
      <p>where <InlineMath math="A"/> is the area of each of the planes.</p>

      <LinkH2 id="cylindrical-capacitor">Cylindrical Capacitor</LinkH2>
      <p>Cylindrical capacitor consists of a cylinder of radius <InlineMath math="a"/> and a cylindrical shell of radius <InlineMath math="b"/> of equal length <InlineMath math="l"/>. The inner cylinder has a positive charge <InlineMath math="Q"/> and the outer shell has a negative charge <InlineMath math="-Q"/>:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/cylindrical-capacitor.png`}
          width={700}
          height={700}
          alt="Cylindrical conductor illustration"
          unoptimized
        />
      </div>

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
