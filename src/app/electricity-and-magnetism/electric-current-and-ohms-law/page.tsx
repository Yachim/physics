import { LinkH2, LinkH3 } from "@/components/LinkHeadings";
import { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import Image from "next/image";
import getConfig from "next/config";
import { ResistivityMaterial, data } from "./resistivity";
import { capitalize } from "jsxgraph";
import { toScientific } from "@/utils/misc";
import { ResistanceCalculator } from "./components";

export const metadata: Metadata = {
  title: "Electric Current and Ohm's Law",
};

export default async function Page() {
  const {
    publicRuntimeConfig: { basePath },
  } = getConfig();

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Electric Current and Ohm&apos;s Law</h1>
      <p>Electric current is the rate at which charge flows through a surface:</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/current/intro.svg`}
          width={500}
          height={500}
          alt="Electric current illustration"
        />
      </div>

      <p>If a charge <InlineMath math="Q"/> flows through in a time interval <InlineMath math="t"/>, the average current is:</p>
      <BlockMath math="I_{avg} = \frac{Q}{t}." />
      <p>In the limit <InlineMath math="t \to 0"/>, the instantaneous current is equal to:</p>
      <BlockMath math="I = \frac{Q}{t}." />

      <p>The unit of electric current is ampere (<InlineMath math="A" />).</p>

      <LinkH2 id="current-density">Current Density</LinkH2>
      <p>Suppose a cylindrical conductor with cross sectional area <InlineMath math="A"/> with <InlineMath math="n"/> charges <b>per unit volume</b>. The charges have equal magnitude <InlineMath math="q"/> flowing at a velocity <InlineMath math="\boldsymbol{v_d}"/> (known as the drift velocity - velocity at which charges move when an external electric field is applied):</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/current/current-density.svg`}
          width={700}
          height={700}
          alt="Electric current density illustration"
        />
      </div>
      <p>the current is equal to:</p>
      <BlockMath math="I = \iint_S \boldsymbol{J} \cdot d\boldsymbol{A},"/>
      <p>where <InlineMath math="\boldsymbol{A}"/> is the vector pointing perpendicular to the cross sectional area.</p>
      
      <p>Suppose that in time <InlineMath math="t"/> the charges move by <InlineMath math="x = v_d t"/>, then <InlineMath math="Q = q n A x = q n A v_d t"/> and the average current is equal to:</p>
      <BlockMath math="
        \begin{align*}
          I_{avg} &= \frac{Q}{t} \\
          &= q n A v_d.
        \end{align*}
      "/>

      <p>Current density is the current per unit area:</p>
      <BlockMath math="\boldsymbol{J} = nq \boldsymbol{v_d},"/>
      <p><InlineMath math="\boldsymbol{J}"/> and <InlineMath math="\boldsymbol{v_d}"/> point in the same direction for positive charges and in opposite direction for negative charges.</p>

      <p>Next, we will find the drift velocity <InlineMath math="\boldsymbol{v_d}"/>. By Newton&apos;s second law, an electron experiences an acceleration equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{a} &= \frac{\boldsymbol{F_e}}{m_e} \\
          &= -\frac{e \boldsymbol{E}}{m_e},
        \end{align*}
      "/>
      <p>where <InlineMath math="e \approx 1.6 \cdot 10^{-19}\ C"/> is the elementary charge.</p>

      <p>Let the velocity of an electron immediately after a collision be <InlineMath math="\boldsymbol{v_i}"/> the velocity of the same electron immediately before the next collision is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{v_f} &= \boldsymbol{v_i} + \boldsymbol{a}t \\
          &= \boldsymbol{v_i} - \frac{e \boldsymbol{E}}{m_e}t.
        \end{align*}
      "/>

      <p>The average of <InlineMath math="\boldsymbol{v_f}"/> is equal to:</p>
      <BlockMath math="\langle\boldsymbol{v_f}\rangle = \langle\boldsymbol{v_i}\rangle - \frac{e \boldsymbol{E}}{m_e} \langle t\rangle,"/>
      <p>which is equal to the drift velocity.</p>

      <p>In the absence of electric field the motion is completely random, where <InlineMath math="\langle\boldsymbol{v_i}\rangle = \boldsymbol{0}"/>. If <InlineMath math="\langle t\rangle = \tau"/>, the average characteristics time between collisions, the drift velocity is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{v_d} &= - \frac{e \boldsymbol{E}}{m_e} \tau.
        \end{align*}
      "/>

      <p>The current density is then equal to:</p>
      <BlockMath math="\boldsymbol{J} = -n e \boldsymbol{v_d} = \frac{n e^2 \tau}{m_e} \boldsymbol{E}."/>
      <p>Note: <InlineMath math="\boldsymbol{J}"/> and <InlineMath math="\boldsymbol{E}"/> will always be in the same direction.</p>

      <LinkH2 id="ohms-law">Ohm&apos;s Law</LinkH2>
      <p>The current density is usually expressed as:</p>
      <BlockMath math="\boldsymbol{J} = \sigma \boldsymbol{E},"/>
      <p>where <InlineMath math="\sigma = \frac{n e^2 \tau}{m_e}"/> is called the conductivity of the material. The above equation is known as the (microscopic) Ohm&apos;s law.</p>
      <p>Suppose a cylindrical conductor of length <InlineMath math="l"/> with uniform electric field <InlineMath math="\boldsymbol{E}"/> and with cross sectional area <InlineMath math="A"/>:</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/current/ohms-law.svg`}
          width={500}
          height={500}
          alt="Electric current illustration"
        />
      </div>

      <p>The voltage is equal to:</p>
      <BlockMath math="
        \begin{align*}
          U &= V_b - V_a \\
          &= -\int_a^b \boldsymbol{E} \cdot d\boldsymbol{s} \\          
          &= El,
        \end{align*}
      "/>

      <p>implying <InlineMath math="E = \frac{U}{l}"/>. The magnitude of the current density is equal to:</p>
      <BlockMath math="J = \sigma \frac{U}{l},"/>

      <p>implying <InlineMath math="U = \frac{J l}{\sigma}"/>, where <InlineMath math="J = \frac{I}{A}"/>:</p>
      <BlockMath math="U = \frac{I l}{A \sigma} = RI,"/>
      <p>where <InlineMath math="R = \frac{l}{\sigma A}"/> is the resistance of the conductor. The equation <InlineMath math="U = IR"/> is the "macroscopic" version of the Ohm&apos;s law. The unit of resistance is ohm (<InlineMath math="\Omega"/>).</p>

      <p>The resistivity <InlineMath math="\rho"/> of a material is the reciprocal of conductivity:</p>
      <BlockMath math="\rho = \frac{1}{\sigma} = \frac{m_e}{n e^2 \tau}."/>

      <p>Using <InlineMath math="E = \frac{U}{l}"/> and <InlineMath math="J = \frac{I}{A}"/>, the resistance can be derived:</p>
      <BlockMath math="
        \begin{align*}
          J &= \frac{E}{\rho} \implies \rho = \frac{E}{J}, \\
          \rho &= \frac{UA}{Il} \\
          &= \frac{RA}{l}, \\
          R &= \frac{\rho l}{A}.
        \end{align*}
      "/>
      
      <p>The resistivity varies with temperature <InlineMath math="T"/>:</p>
      <BlockMath math="\rho = \rho_0 [1 + \alpha(T - T_0)],"/>
      <p>where <InlineMath math="\alpha"/> is the temperature coefficient of resistivity, <InlineMath math="\rho_0"/> is the resistivity at the temperature <InlineMath math="T_0"/>. Below is a table of some materials at <InlineMath math="20\ ^{\circ} C"/>:</p>
      <table className="mx-[20%]">
        <colgroup>
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
        </colgroup>
        <tbody>
          <tr>
            <th>Material</th>
            <th><InlineMath math="\boldsymbol{\rho_0}"/></th>
            <th><InlineMath math="\boldsymbol{\sigma_0}"/></th>
            <th><InlineMath math="\boldsymbol{\alpha}"/></th>
          </tr>
          {Object.keys(data).map((el, i) => {
            const {rho, alpha} = data[el as ResistivityMaterial]
            const sigma = 1 / rho

            return (
              <tr key={i}>
                <td>{capitalize(el)}</td>
                <td><InlineMath math={toScientific(rho)}/></td>
                <td><InlineMath math={toScientific(sigma)}/></td>
                <td><InlineMath math={toScientific(alpha)}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <LinkH2 id="resistance-calculator">Resistance Calculator</LinkH2>
      <ResistanceCalculator/>

      <LinkH2 id="power">Power</LinkH2>
      <p>Consider a circuit with a battery and a resistor of resistance <InlineMath math="R"/>:</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/current/circuit.svg`}
          width={500}
          height={500}
          alt="Electric current illustration"
        />
      </div>
      <p>The voltage between the points <InlineMath math="a"/> and <InlineMath math="b"/> is <InlineMath math="U = \varphi_b - \varphi_a > 0"/>. If a charge <InlineMath math="q"/> is moved from <InlineMath math="a"/> to <InlineMath math="b"/> through the battery, its electric potential energy is increased by:</p>
      <BlockMath math="\Delta E_p = q U."/>

      <p>The charge <InlineMath math="q"/> is unchanged upon returning to <InlineMath math="a"/>. When the charge moves through the resistor, its potential energy is decreased. The rate of energy loss is equal to:</p>
      <BlockMath math="
        \begin{align*}
          P &= \frac{\Delta E_p}{t} \\
          &= \frac{q}{t}U \\
          &= IU,
        \end{align*}
      "/>
      <p>this is the power supplied by the battery. Using <InlineMath math="U = IR"/>, the equation can be rewritten:</p>
      <BlockMath math="P = I^2 R = \frac{U^2}{R}."/>
    </div>
  )
}
