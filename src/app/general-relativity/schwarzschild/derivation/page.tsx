import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derivation of the Schwarzschild Metric"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Derivation of the Schwarzschild Metric</h1>
    </div>
  )
}