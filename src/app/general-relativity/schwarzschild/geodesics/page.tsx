import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geodesics"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Geodesics</h1>
    </div>
  )
}