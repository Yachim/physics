import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { ForceMagnitude, ForceVectors } from "./components"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Electric Potential"
}

export default async function Page() {
  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Electric Potential</h1>
      <p></p>
    </div>
  )
}
