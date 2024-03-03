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
      <p>Capacitors are devices that store electrical energy. Their capacitance is the derivative of charge with respect to voltage:</p>
      <BlockMath math="C = \frac{dQ}{dU}," />
      <p>or if the charge is constant:</p>
      <BlockMath math="C = \frac{Q}{U}." />

      <p>The unit of capacitance is farad (<InlineMath math="F" />).</p>

      <LinkH2 id="total-capacitance">Total Capacitance</LinkH2>
      <p>There are two ways to connect capacitors:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/parallel.svg`}
          width={350}
          height={350}
          alt="Radial potential illustration"
        />
        <Image
          src={`${basePath}/assets/capacitors/series.svg`}
          width={350}
          height={350}
          alt="Radial potential illustration"
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
