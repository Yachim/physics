import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schwarzschild Metric"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>Schwarschild Metric</h1>
      <Link href="/general-relativity/schwarzschild/derivation">Derivation of the Schwarzschild Metric</Link>
      <Link href="/general-relativity/schwarzschild/geodesics">Geodesics</Link>
      <Link href="/general-relativity/schwarzschild/gravitational-lensing">Gravitational Lensing</Link>
      <Link href="/general-relativity/schwarzschild/orbital-precession">Orbital Precession</Link>
    </div>
  )
}