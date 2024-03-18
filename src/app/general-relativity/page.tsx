import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Relativity"
}


export default async function Home() {
  return (
    <div className="article">
      <Link href="/">Back</Link>
      <h1>General Relativity</h1>
      <Link href="/general-relativity/schwarzschild">Schwarzschild Metric</Link>
    </div>
  )
}