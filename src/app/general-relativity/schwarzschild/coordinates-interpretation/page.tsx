import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";

export const metadata: Metadata = {
  title: "Derivation of the Schwarzschild Metric"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity/schwarzschild">Back</Link>
      <h1>Interpretation of the Schwarzschild Coordinates</h1>
    </div>
  )
}
