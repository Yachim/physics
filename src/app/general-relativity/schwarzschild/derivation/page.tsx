import Link from "next/link";

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Derivation of the Schwarzschild Metric</h1>
    </div>
  )
}