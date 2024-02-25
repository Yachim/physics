import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Miscellaneous"
}

export default async function Page() {
  return (
    <div className="article">
      <Link href="/">Back</Link>
      <h1>Miscellaneous</h1>
      <Link href="/miscellaneous/flow-curves">Flow Curves</Link>
    </div>
  )
}
