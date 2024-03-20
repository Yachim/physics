import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "General Relativity"
}


export default async function Home() {
  return (
    <div className="article">
      <Link href="/">Back</Link>
      <h1>General Relativity</h1>
      <LinkH2 id="notation-and-units">Notation and Units</LinkH2>
      <p>
        If not stated otherwise, the system of units used are the <Link href="/miscellaneous/natural-units#unit-converter?system=geometrized">geometrized units</Link>.
        The sign convention is <InlineMath math="(-, +, +, +)" />.
        Latin indices are used for spatial components and greek indices are used for spacetime components.        
      </p>

      <p>Einstein summation convention is employed:</p>
      <BlockMath math="v^i e_i = \sum_i v^i e_i." />

      <p>Partial derivative with respect to spacetime component notation:</p>
      <BlockMath math="\frac{\partial v^{\mu}}{\partial x^{\nu}} = \partial_{\nu} v^{\mu} = v^{\mu}{}_{,\nu}." />
      
      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/schwarzschild">Schwarzschild Metric</Link>
    </div>
  )
}