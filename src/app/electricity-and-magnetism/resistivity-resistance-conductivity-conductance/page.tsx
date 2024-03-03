import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import Image from "next/image"
import getConfig from "next/config"
import { ResistanceAndConductanceCalculator, ResistanceAndConductanceCalculatorCircuit } from "./components"

export const metadata: Metadata = {
  title: "Resistivity, Resistance, Conductivity, Conductance"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Resistivity, Resistance, Conductivity, Conductance</h1>
      <p>Resistivity (<InlineMath math="\rho" />) is a property of a material that measures its ability to resist the electric current. The unit of resistivity is ohm meter (<InlineMath math="\Omega m" />).</p>
      <table className="mx-[20%]">
        <colgroup>
          <col className="w-1/2" />
          <col className="w-1/2" />
        </colgroup>
        <tbody>
          <tr>
            <th>Material</th>
            <th>Resistivity at <InlineMath math="20\ \degree C" /></th>
          </tr>
          <tr>
            <td>Silver</td>
            <td><InlineMath math="1.59 \cdot 10^{-8}" /></td>
          </tr>
          <tr>
            <td>Copper</td>
            <td><InlineMath math="1.68 \cdot 10^{-8}" /></td>
          </tr>
          <tr>
            <td>Gold</td>
            <td><InlineMath math="2.44 \cdot 10^{-8}" /></td>
          </tr>
          <tr>
            <td>Aluminium</td>
            <td><InlineMath math="2.65 \cdot 10^{-8}" /></td>
          </tr>
          <tr>
            <td>Zinc</td>
            <td><InlineMath math="5.90 \cdot 10^{-8}" /></td>
          </tr>
        </tbody>
      </table>

      <p>Conductivity is the reciprocal of resistivity:</p>
      <BlockMath math="\sigma = \frac{1}{\rho}," />
      <p>the unit of conductivity is siemens per meter (<InlineMath math="S m^{-1}" />).</p>

      <p>The resistance <InlineMath math="R" /> and conductance <InlineMath math="G" /> of a conductor is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R &= \rho \frac{l}{A}, \\
          G &= \sigma \frac{A}{l} = \frac{1}{R},
        \end{align*}
      " />
      <p>where <InlineMath math="l" /> is the length of the conductor and <InlineMath math="A" /> is the cross-sectional area.</p>

      <p>The unit of resistance is ohm (<InlineMath math="\Omega" />) and the unit of conductance is siemens (<InlineMath math="S" />).</p>

      <LinkH2 id="resistance-and-conductance-calculator">Resistance and Conductance Calculator</LinkH2>
      <ResistanceAndConductanceCalculator />

      <LinkH2 id="total-capacitance">Total Resistance</LinkH2>
      <p>There are two ways to connect resistors:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/resistance/parallel.svg`}
          width={350}
          height={350}
          alt="Parallel resistors illustation"
        />
        <Image
          src={`${basePath}/assets/resistance/serial.svg`}
          width={350}
          height={350}
          alt="Serial resistors illustation"
        />
      </div>
      <p>The first is parallel and the second is serial. For parallel, the total resistance is equal to:</p>
      <BlockMath math="\frac{1}{R} = \sum_i \frac{1}{R_i} \implies R = \left(\sum_i \frac{1}{R_i}\right)^{-1}," />

      <p>and for serial:</p>
      <BlockMath math="R = \sum_i R_i." />

      <LinkH3 id="capacitance-calculator">Resistance and Conductance Calculator</LinkH3>
      <ResistanceAndConductanceCalculatorCircuit />
    </div>
  )
}
