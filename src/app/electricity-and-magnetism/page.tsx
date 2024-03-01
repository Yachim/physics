import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electricity and Magnetism"
}

export default async function Page() {
  return (
    <div className="article">
      <Link href="/">Back</Link>
      <h1>Electricity and Magnetism</h1>
      <Link href="/electricity-and-magnetism/coulombs-law">Coulomb&apos;s Law</Link>
      <Link href="/electricity-and-magnetism/electric-field">Electric Field</Link>
      <Link href="/electricity-and-magnetism/gauss-law">Gauss&apos;s Law</Link>
    </div>
  )
}