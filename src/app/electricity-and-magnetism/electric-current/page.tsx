import { LinkH2, LinkH3 } from "@/components/LinkHeadings";
import { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import Image from "next/image";
import getConfig from "next/config";
import { ConstantCurrentCalculator } from "./components";

export const metadata: Metadata = {
  title: "Electric Current",
};

export default async function Page() {
  const {
    publicRuntimeConfig: { basePath },
  } = getConfig();

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Electric Current</h1>
      <p>
        The electric current is the rate at which charge flows through a
        conductor:
      </p>
      <BlockMath math="I = \frac{dQ}{dt}," />
      <p>or if the charge is constant:</p>
      <BlockMath math="I = \frac{Q}{t}." />

      <p>
        The unit of electric current is ampere (<InlineMath math="A" />
        ).
      </p>

      <LinkH2 id="constant-current-calculator">
        Constant Electric Current Calculator
      </LinkH2>
      <ConstantCurrentCalculator />
    </div>
  );
}
