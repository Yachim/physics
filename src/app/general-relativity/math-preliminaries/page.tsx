import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "Mathematical Preliminaries"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>Mathematical Preliminaries</h1>

      <p>For exterior position vectors, I am using capital letters (e.g. <InlineMath math="\boldsymbol{R}" />). For general vectors, I am using lowercase letters (e.g. <InlineMath math="\boldsymbol{v}" />).</p>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/math-preliminaries/tensor-calculus-intro">Tensor Calculus Introduction</Link>
      <Link href="/general-relativity/math-preliminaries/covariance-and-contravariance">Covariance and Contravariance</Link>
      <Link href="/general-relativity/math-preliminaries/metric-tensor">Arc Length and Metric Tensor</Link>
      <Link href="/general-relativity/math-preliminaries/gradient">Gradient</Link>
      <Link href="/general-relativity/math-preliminaries/geodesics">Geodesics and Christoffel Symbols</Link>
      <Link href="/general-relativity/math-preliminaries/covariant-derivative">Covariant Derivative</Link>
      <Link href="/general-relativity/math-preliminaries/lie-bracket-torsion-tensor">Lie Bracket and Torsion Tensor</Link>
      <Link href="/general-relativity/math-preliminaries/riemann-tensor">Riemann Tensor</Link>
      <Link href="/general-relativity/math-preliminaries/ricci-tensor">Ricci Tensor</Link>
      <Link href="/general-relativity/math-preliminaries/lie-derivative">Lie Derivative</Link>
      <Link href="/general-relativity/math-preliminaries/killing-vectors">Killing Vectors</Link>
    </div>
  )
}