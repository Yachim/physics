import { LinkH2 } from "@/components/LinkHeadings";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import { UnitConverter } from "./components";
import { Metadata } from "next";
import { matrixToLatex } from "@/utils/misc";
import { geometrizedBackwardMatrix, geometrizedForwardMatrix } from "./matrices";

export const metadata: Metadata = {
  title: "Natural Units"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/miscellaneous">Back</Link>
      <h1>Natural Units</h1>
      <p>I am building up on <Link href="https://youtu.be/bI-FS7aZJpY">this video</Link> by Kieran Borovac. I will provide forward (from SI, labeled <InlineMath math="\boldsymbol{F}"/>) and backward (to SI, labeled <InlineMath math="\boldsymbol{B}"/>) matrices for each system, where the rows represent SI values and columns the corresponding system values. The columns represent SI units: <InlineMath math="s, m, kg, A, K, cd, mol"/>. The units are represented by column vectors and are multiplied with the matrix for conversion.</p>

      <LinkH2 id="geometrized-units">Geometrized Units</LinkH2>
      <p>The columns represent <InlineMath math="c, G, kg, A, K, cd, mol"/>.</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \boldsymbol{F} &= ${matrixToLatex(geometrizedForwardMatrix)} & \boldsymbol{B} &= ${matrixToLatex(geometrizedBackwardMatrix)}          
        \end{align*}
      `}/>

      <LinkH2 id="unit-converter">Unit Converter</LinkH2>
      <UnitConverter/>
    </div>
  )
}