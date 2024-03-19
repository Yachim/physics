import Link from "next/link";
import { LinkH2 } from "@/components/LinkHeadings"
import { InlineMath } from "react-katex"

export default async function Home() {
  return (
    <div className="article">
      <LinkH2 id="notation">Notation</LinkH2>
      <p>Arbitrary vectors are written in bold undercase letters (e.g. <InlineMath math="\boldsymbol{a}, \boldsymbol{v}" />). Unless stated otherwise, magnitudes of vectors are written as normal undercase letters (e.g. <InlineMath math="a, v" />). Physical quantities, like force (<InlineMath math="\boldsymbol{F}" />) are used by standard conventions. Matricies are written in bold uppercase letters (e.g. <InlineMath math="\boldsymbol{R}" />). Points are written in normal uppercase letters (e.g. <InlineMath math="P" />).</p>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/electricity-and-magnetism">Electricity and Magnetism</Link>
      <Link href="/general-relativity">General Relativity</Link>
      <Link href="/miscellaneous">Miscellaneous</Link>
    </div>
  )
}
