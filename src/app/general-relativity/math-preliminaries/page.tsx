import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";

export const metadata: Metadata = {
  title: "Mathematical Preliminaries"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>Mathematical Preliminaries</h1>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/math-preliminaries/tensor-calculus-intro">Tensor Calculus Introduction</Link>
      <Link href="/general-relativity/math-preliminaries/covariance-and-contravariance">Covariance and Contravariance</Link>
      <Link href="/general-relativity/math-preliminaries/metric-tensor">Arc Length and Metric Tensor</Link>
    </div>
  )
}