import Link from "next/link";
import { Metadata } from "next";
import { InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";

export const metadata: Metadata = {
  title: "Schwarzschild Metric"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>Schwarschild Metric</h1>
      <p>Geometrized units are also used. But after the derivation they are modified such that <InlineMath math="M = 1" /> - <Link href="/miscellaneous/natural-units?system=geometrizedMass#unit-converter">unit converter</Link>. Also, at the end of the <Link href="/general-relativity/schwarzschild/derivation#simplifying-geodesic-equations">derivation</Link>, the coordinates are setup at constant <InlineMath math="\theta = \frac{\pi}{2}" />.</p>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/schwarzschild/derivation">Derivation of the Schwarzschild Metric</Link>
      <Link href="/general-relativity/schwarzschild/coordinates-interpretation">Interpretation of the Schwarzschild Coordinates</Link>
      <Link href="/general-relativity/schwarzschild/geodesics">Geodesics</Link>
      <Link href="/general-relativity/schwarzschild/geodesics-simulation">Geodesics Simulation</Link>
      <Link href="/general-relativity/schwarzschild/perihelion-shift">Perihelion Shift</Link>
      <Link href="/general-relativity/schwarzschild/gravitational-lensing">Gravitational Lensing</Link>
    </div>
  )
}