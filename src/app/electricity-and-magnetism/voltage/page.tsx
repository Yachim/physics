import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { WorkDueToVoltage } from "./components"

export const metadata: Metadata = {
  title: "Voltage"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article" >
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Voltage</h1>
      <p>If we insert a charge q into an electric field, an electric force will start to act on it and it will start moving it. The work <InlineMath math="W" /> is given by:</p>
      <BlockMath math="
        \begin{align*}
          W &= \int_C \boldsymbol{F_e} \cdot d\boldsymbol{s} \\
          &= \int_C q \boldsymbol{E} \cdot d\boldsymbol{s}.
        \end{align*}
      "/>

      <p>The voltage is defined as the amount of work per unit charge:</p>
      <BlockMath math="
        \begin{align*}
          U &= \frac{W}{q} \\
          &= \frac{1}{q} \int_C q \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= \int_C \boldsymbol{E} \cdot d\boldsymbol{s},
        \end{align*}
      "/>

      <p>or if the electric field is not variable:</p>
      <BlockMath math="
        \begin{align*}
          U &= \boldsymbol{E} \cdot \boldsymbol{s} \\
          &= Es \cos \theta.
        \end{align*}
      " />

      <LinkH2 id="work-due-to-voltage">Work Due to Voltage</LinkH2>
      <p>Between two parallel lines at a distance <InlineMath math="s" /> was measured a voltage of <InlineMath math="U" />. Calculate the electric field between the lines and determine the work needed to move a particle of charge <InlineMath math="q" /> from a point <InlineMath math="A" /> to a point <InlineMath math="B" />.</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/voltage/voltage.svg`}
          width={700}
          height={700}
          alt="Voltage illustration"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          U &= Es, \\
          E &= \frac{U}{s}, \\
          \boldsymbol{E} &= \frac{U}{s} \hat{x}.
        \end{align*}
      "/>

      <p>Let <InlineMath math="\boldsymbol{v}" /> be the displacement vector between <InlineMath math="A" /> and <InlineMath math="B" />:</p>
      <BlockMath math="\boldsymbol{v} = B - A" />

      <p>Then the work is equal to:</p>
      <BlockMath math="
        \begin{align*}
          W &= q \boldsymbol{E} \cdot \boldsymbol{v} \\
          &= q E v \cos{\theta} \\
          &= q E v \frac{v_x}{v} \\
          &= q E v_x.
        \end{align*}
      " />

      <LinkH3 id="work-due-to-voltage-plot">Work Due to Voltage Plot</LinkH3>
      <WorkDueToVoltage />
    </div>
  )
}
