import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electricity and Magnetism"
}

export default async function Page() {
  return (
    <Link href={`/electricity-and-magnetism/coulombs-law`}>Coulomb&apos;s Law</Link>
  )
}
