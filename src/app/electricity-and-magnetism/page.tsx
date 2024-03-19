import { LinkH2 } from "@/components/LinkHeadings";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electricity and Magnetism",
};

export default async function Page() {
  return (
    <div className="article">
      <Link href="/">Back</Link>
      <h1>Electricity and Magnetism</h1>

      <LinkH2 id="chapters">Chapters</LinkH2>
      <Link href="/electricity-and-magnetism/coulombs-law">Coulomb&apos;s Law</Link>
      <Link href="/electricity-and-magnetism/electric-field">Electric Field</Link>
      <Link href="/electricity-and-magnetism/gauss-law">Gauss&apos;s Law</Link>
      <Link href="/electricity-and-magnetism/electric-potential-and-voltage">Electric Potential and Voltage</Link>
      <Link href="/electricity-and-magnetism/capacitors">Capacitors</Link>
      <Link href="/electricity-and-magnetism/dielectrics-and-polarization">Dielectrics and Polarization</Link>
      <Link href="/electricity-and-magnetism/electric-current-and-ohms-law">Electric Current and Ohm&apos;s Law</Link>
    </div>
  );
}
