import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orbital Precession"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Orbital Precession</h1>
    </div>
  )
}