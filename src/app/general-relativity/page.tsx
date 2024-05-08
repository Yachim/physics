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

      {/* FIXME: not consistent before covariant derivative. Also, basis vectors should be del (R/del x^{\mu}) and not (del R/del R^{\mu}) */}
      <p>For components of vector <InlineMath math="\boldsymbol{v}" />, I am using <InlineMath math="v^{\mu}" />. For coordinates, I am using <InlineMath math="x^{\mu}" />.</p>

      <p>Einstein summation convention is employed:</p>
      <BlockMath math="v^i e_i = \sum_i v^i e_i." />

      <p>Partial derivative with respect to spacetime component notation:</p>
      <BlockMath math="\frac{\partial v^{\mu}}{\partial x^{\nu}} \equiv \partial_{\nu} v^{\mu} \equiv v^{\mu}{}_{,\nu}." />
      
      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/math-preliminaries">Mathematical Preliminaries</Link>
      <Link href="/general-relativity/gr-basics">General Relativity Basics</Link>
      <Link href="/general-relativity/schwarzschild">Schwarzschild Metric</Link>

      <LinkH2 id="acknowledgements">Acknowledgements</LinkH2>
      <p>I would like to thank <Link href="https://www.youtube.com/@eigenchris">eigenchris</Link> and his courses on <Link href="https://www.youtube.com/playlist?list=PLJHszsWbB6hrkmmq57lX8BV-o-YIOFsiG">tensors</Link>, <Link href="https://www.youtube.com/playlist?list=PLJHszsWbB6hpk5h8lSfBkVrpjsqvUGTCx">tensor calculus</Link> and <Link href="https://www.youtube.com/playlist?list=PLJHszsWbB6hqlw73QjgZcFh4DrkQLSCQa">relativity</Link>. These notes are from his courses. I would also like to thank Sean Carroll for freely providing his <Link href="https://www.preposterousuniverse.com/grnotes/">Lecture Notes on General Relativity</Link> which I sometimes used for reference.</p>
      <p>For <Link href="https://youtu.be/HG3TTsx8PR0">Lie derivative</Link> and <Link href="https://youtu.be/ZXrwhhQAEss?list=TLPQMDgwNTIwMjQR7xLCBuTYXw">Killing vectors</Link>, I used <Link href="https://www.youtube.com/@TensorCalculusRobertDavie">Robert Davie&apos;s</Link> videos and also <Link href="https://phys.libretexts.org/Bookshelves/Relativity/General_Relativity_(Crowell)/07%3A_Symmetries/7.01%3A_Killing_Vectors">Physics LibreTexts</Link> for reference.</p>
    </div>
  )
}