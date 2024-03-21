import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2, LinkH3 } from "@/components/LinkHeadings";
import { TimeDilationCalculator } from "./components";

export const metadata: Metadata = {
  title: "Interpretation of the Schwarzschild Coordinates"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/general-relativity/schwarzschild">Back</Link>
      <h1>Interpretation of the Schwarzschild Coordinates</h1>
      <p>The metric is in the form:</p>
      <BlockMath math="ds^2 = -\left(1 - \frac{2}{r}\right) (dx^0)^2 + \left(1 - \frac{2}{r}\right) (dx^1)^2 + r^2 (dx^3)^2." />

      <LinkH2 id="time-dilation-constant-position">Time Dilation for Constant Position</LinkH2>
      <p>For constant <InlineMath math="(r, \theta, \phi)"/> the metric reduces to:</p>
      <BlockMath math="ds^2 = -\left(1 - \frac{2}{r}\right) (dx^0)^2." />

      <p>This is equal to the negative proper time <InlineMath math="\tau"/>:</p>
      <BlockMath math="
        \begin{align*}
          -d\tau^2 &= -\left(1 - \frac{2}{r}\right) (dx^0)^2, \\
          d\tau^2 &= \left(1 - \frac{2}{r}\right) (dx^0)^2, \\
          d\tau &= \sqrt{1 - \frac{2}{r}} dt, \\
          \int_0^{\tau} d\tau &= \sqrt{1 - \frac{2}{r}} \int_0^t dt, \\
          \tau &= \sqrt{1 - \frac{2}{r}} t. \\
        \end{align*}
      " />

      <p>Below is a table evaluating the time dilation at different <InlineMath math="r"/> coordinates:</p>
      <table>
        <colgroup>
          <col className="w-1/2"/>
          <col className="w-1/2"/>
        </colgroup>
        <tbody>
          <tr>
            <th><InlineMath math="\boldsymbol{r}"/></th>
            <th><InlineMath math="\boldsymbol{\tau}"/></th>
          </tr>
          <tr>
            <th><InlineMath math="r_s"/></th>
            <th><InlineMath math="0"/></th>
          </tr>
          <tr>
            <th><InlineMath math="2r_s"/></th>
            <th><InlineMath math="\approx 0.71t"/></th>
          </tr>
          <tr>
            <th><InlineMath math="\infty"/></th>
            <th><InlineMath math="t"/></th>
          </tr>
        </tbody>
      </table>

      <LinkH3 id="time-dilation-calculator">Time Dilation Calculator</LinkH3>
      <TimeDilationCalculator/>
    </div>
  )
}
