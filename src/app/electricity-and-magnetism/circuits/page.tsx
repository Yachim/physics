import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { ResistanceCalculator } from "./components"

export const metadata: Metadata = {
  title: "Circuits"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Circuits</h1>
      <LinkH2 id="electromotive-force">Electromotive Force</LinkH2>
      <p>To maintain a constant current in a closed circuit, electrical energy must be supplied. The source of the energy is commonly called the electromotive force (emf) <InlineMath math="\varepsilon" />:</p>
      <BlockMath math="\varepsilon = \frac{dW}{dq}." />
      <p>The unit of electromotive force is the volt (<InlineMath math="V" />).</p>
      
      <p>Assume a circuit with battery and with voltage equal to <InlineMath math="\varepsilon" /> and a resistor with resistance <InlineMath math="R" />. Assume the battery has no internal resistance. To drive the current around the circuit, the battery undergoes a discharging process:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/circuits/circuits.svg`}
          width={500}
          height={500}
          alt="Circuit"
        />
      </div>

      <p>The electrostatic force is conservative, meaning the work done to move charge <InlineMath math="q" /> around the circuit is zero:</p>
      <BlockMath math="W = -q \oint_C \boldsymbol{E} \cdot d\boldsymbol{s} = 0." />

      <p>Let <InlineMath math="a" /> in the above image be the starting point. When crossing the battery, the potential increases by <InlineMath math="\varepsilon" /> and when crossing the resistor, the potential decreases by <InlineMath math="IR" />. Assuming the wire carries no resistance, upon completing the loop the net potential difference is zero:</p>
      <BlockMath math="\varepsilon - IR = 0 \implies I = \frac{\varepsilon}{R}." />

      <p>A real battery always has some internal resistance <InlineMath math="r" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/circuits/circuits2.svg`}
          width={500}
          height={500}
          alt="Circuit with internal resistance"
        />
      </div>

      <p>The voltage across the battery terminals are:</p>
      <BlockMath math="U = \varepsilon - Ir." />

      <p>Again, the net potential difference around a closed loop is zero:</p>
      <BlockMath math="
        \begin{align*}
          U - IR &= \varepsilon - Ir - IR \\
          &= \varepsilon - I (r + R) = 0, \\
          I &= \frac{\varepsilon}{r + R}.
        \end{align*}
      " />

      <p>For a source with emf <InlineMath math="\varepsilon" />, the power is:</p>
      <BlockMath math="P = I \varepsilon = I^2 (r + R)." />

      <LinkH2 id="total-resistance">Total Resistance</LinkH2>
      <p>Resistors with resistance <InlineMath math="R_i" /> are connected in series to a battery with voltage <InlineMath math="U" />. By current conservation, the same current <InlineMath math="I" /> is flowing through each resistor:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/circuits/serial.svg`}
          width={700}
          height={700}
          alt="Serial resistors"
        />
      </div>
      <p>After crossing a resistor, the voltage drops by <InlineMath math="U_i = I R_i" />. The total voltage drop <InlineMath math="U" /> is the sum of the individual voltage drops:</p>
      <BlockMath math="U = \sum_i U_i = \sum_i I R_i = I \sum_i R_i." />

      <p>The resistors can be replaced by a resistor with resistance <InlineMath math="R" /> with the identical voltage drop <InlineMath math="U = IR" />:</p>
      <BlockMath math="
        \begin{align*}
          U = IR &= I \sum_i R_i, \\
          R &= \sum_i R_i.
        \end{align*}
      " />

      <p>Now, consider resistors with resistance <InlineMath math="R_i" /> connected in parallel to a battery with voltage <InlineMath math="U" />. By current conservation, the current <InlineMath math="I" /> that passes through the battery is divided into currents <InlineMath math="I_i" /> that pass through the resistors:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/circuits/parallel.svg`}
          width={700}
          height={700}
          alt="Parallel resistors"
        />
      </div>

      <p>Each resistor has a voltage <InlineMath math="U_i = I_i R_i" />, but the voltage across all the resistors is the same:</p>
      <BlockMath math="
        \begin{align*}
          U &= U_i = I_i R_i, \\
          I &= \sum_i I_i = \sum_i \frac{U}{R_i}.
        \end{align*}
      " />

      <p>The resistors may be replaced by a resistor with resistance <InlineMath math="R = \frac{U}{I}" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{U}{R} &= \sum_i \frac{U}{R_i}, \\
          \frac{1}{R} &= \sum_i \frac{1}{R_i}.
        \end{align*}
      " />

      <LinkH3 id="total-resistance-calculator">Total Resistance Calculator</LinkH3>
      <ResistanceCalculator/>
    </div>
  )
}
