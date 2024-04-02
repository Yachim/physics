import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { ResistanceCalculator } from "./components"

export const metadata: Metadata = {
  title: "Circuits"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Circuits</h1>
      <LinkH2 id="electromotive-force">Electromotive Force</LinkH2>
      <LinkH2 id="total-resistance">Total Resistance</LinkH2>
      <LinkH3 id="total-resistance-calculator">Total Resistance Calculator</LinkH3>
      <ResistanceCalculator/>
    </div>
  )
}
