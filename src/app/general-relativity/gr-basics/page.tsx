import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "General Relativity Basics"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>General Relativity Basics</h1>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/gr-basics/poissons-equation">Poisson&apos;s Equation</Link>
      <Link href="/general-relativity/gr-basics/newton-cartan">Newton-Cartan Theory</Link>
      <Link href="/general-relativity/gr-basics/energy-momentum-tensor">Energy-Momentum Tensor</Link>
      <Link href="/general-relativity/gr-basics/einstein-field-equations">Einstein Field Equations</Link>
    </div>
  )
}