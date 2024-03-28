import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "Gravitational Lensing"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Gravitational Lensing</h1>
        <p>I will reuse equation for energy from the <Link href="/general-relativity/schwarzschild/geodesics#relativistic-orbits">geodesics</Link> chapter:</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} + \frac{2}{r} \epsilon - \epsilon." />

        <p>We are considering the path of light rays (<InlineMath math="\epsilon = 0" />)</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3}." />
    </div>
  )
}