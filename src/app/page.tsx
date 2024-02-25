import Link from "next/link";

export default async function Home() {
  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Electricity and Magnetism</Link>
      <Link href="/miscellaneous">Miscellaneous</Link>
    </div>
  )
}
