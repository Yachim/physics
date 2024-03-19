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
      <p>Geometrized units are also used. But after the derivation they are modified such that <InlineMath math="M = 1" />. Also, at the end of the <Link href="https://youtu.be/dQw4w9WgXcQ">derivation</Link>, the coordinates are setup at constant <InlineMath math="\theta = \frac{\pi}{2}" />.</p>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/general-relativity/schwarzschild/derivation">Derivation of the Schwarzschild Metric</Link>
      <Link href="/general-relativity/schwarzschild/geodesics">Geodesics</Link>
      <Link href="/general-relativity/schwarzschild/gravitational-lensing">Gravitational Lensing</Link>
      <Link href="/general-relativity/schwarzschild/orbital-precession">Orbital Precession</Link>
    </div>
  )
}