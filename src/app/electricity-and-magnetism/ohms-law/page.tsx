import { LinkH2, LinkH3 } from "@/components/LinkHeadings";
import { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import Image from "next/image";
import getConfig from "next/config";

export const metadata: Metadata = {
  title: "Ohm's Law",
};

export default async function Page() {
  const {
    publicRuntimeConfig: { basePath },
  } = getConfig();

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Ohm&apos;s Law</h1>
      <p>
        Ohm&apos;s law states that the electric current is equal to the voltage
        divided by resistance:
      </p>
      <BlockMath math="I = \frac{U}{R}." />
    </div>
  );
}
