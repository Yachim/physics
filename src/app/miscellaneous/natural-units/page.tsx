import Link from "next/link";

export default async function Home() {
  return (
    <div className="article">
      <Link href="/miscellaneous">Back</Link>
      <h1>Natural Units</h1>
    </div>
  )
}