import Link from "next/link";
import { LinkH2 } from "@/components/LinkHeadings"
import { InlineMath } from "react-katex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faBolt } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  return (
    <div className="article">
      <LinkH2 id="notation">Notation</LinkH2>
      <p>Arbitrary vectors are written in bold undercase letters (e.g. <InlineMath math="\boldsymbol{a}, \boldsymbol{v}" />). Unless stated otherwise, magnitudes of vectors are written as normal undercase letters (e.g. <InlineMath math="a, v" />). Physical quantities, like force (<InlineMath math="\boldsymbol{F}" />) are used by standard conventions. Matricies are written in bold uppercase letters (e.g. <InlineMath math="\boldsymbol{R}" />). Points are written in normal uppercase letters (e.g. <InlineMath math="P" />). When working with tensors, they are denoted by normal font with indices (e.g. <InlineMath math="R^{\rho}{}_{\mu\sigma\nu}, g_{\mu\nu}"/>)</p>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/electricity-and-magnetism">Electricity and Magnetism <FontAwesomeIcon icon={faBolt}/></Link>
      <Link href="/general-relativity">General Relativity <FontAwesomeIcon icon={faAppleAlt}/></Link>
      <Link href="/miscellaneous">Miscellaneous</Link>
    </div>
  )
}
