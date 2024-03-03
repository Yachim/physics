import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { RadialPotential, WorkBetweenPotentials } from "./components"

export const metadata: Metadata = {
  title: "Electric Potential"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article" >
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Electric Potential</h1>
      <p>The electric potential is the potential energy per unit charge. When we put into an electric field a charge of value <InlineMath math="q" />, the electric potential is equal to:</p>
      <BlockMath math="\varphi = \frac{E_p}{q}." />

      <p>The unit of electric potential is volt (<InlineMath math="V" />).</p>

      <p>The voltage can be defined as the difference in potential energies:</p>
      <BlockMath math="
        \begin{align*}
          W &= \Delta E_p = E_{p2} - E_{p1}, \\
          \frac{W}{q} &= \frac{E_{p2}}{q} - \frac{E_{p1}}{q}, \\
          U &= \frac{E_{p2}}{q} - \frac{E_{p1}}{q}, \\
          &= \varphi_2 - \varphi_1.
        \end{align*}
      " />

      <p>Potential energy is also equal to the work required to move a charge <InlineMath math="q" /> from an infinite distance to a position described by the displacement vector <InlineMath math="\boldsymbol{r}" />:</p>
      <BlockMath math="
        \begin{align*}
        W &= \int_C \boldsymbol{F_e} \cdot d\boldsymbol{s} \\
        &= \int_C q \boldsymbol{E} \cdot d\boldsymbol{s}. \\
        \end{align*}
      " />

      <p>The separation vector <InlineMath math="\boldsymbol{s}" /> described by radial coordinates is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{s}(t) &= t \frac{r_x}{r} \boldsymbol{\hat{x}} + t \frac{r_y}{r} \boldsymbol{\hat{y}}, \\
          s(t) &= t, \\
          \boldsymbol{\hat{s}}(t) &= \frac{r_x}{r} \boldsymbol{\hat{x}} + \frac{r_y}{r} \boldsymbol{\hat{y}}, \\
          \boldsymbol{s'}(t) &= \frac{r_x}{r} \boldsymbol{\hat{x}} + \frac{r_y}{r} \boldsymbol{\hat{y}}, \\
          r &\leq t \leq \infty.
        \end{align*}
      " />

      <p>Then the electric potential is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \varphi &= \frac{1}{q} \int_C q \boldsymbol{E} \cdot d\boldsymbol{s}, \\
          &= \int_r^{\infty} k_e \frac{Q}{s(t)^2} \boldsymbol{\hat{s}} \cdot \boldsymbol{s'}(t) dt \\
          &= k_e Q \int_{\infty}^r -\frac{1}{t^2} \left(\frac{r_x}{r} \boldsymbol{\hat{x}} + \frac{r_y}{r} \boldsymbol{\hat{y}}\right) \cdot \left(\frac{r_x}{r} \boldsymbol{\hat{x}} + \frac{r_y}{r} \boldsymbol{\hat{y}}\right) dt \\
          &= k_e Q \left[\frac{1}{t}\right]_r^{\infty} \\
          &= \frac{k_e Q}{r}.
        \end{align*}
      " />

      <LinkH2 id="work-between-potentials">Work Required to Move From One Potential to Another</LinkH2>
      <p>What is the work required to move a charge <InlineMath math="q" /> from a point with potential <InlineMath math="\varphi_1" /> to a point with potential <InlineMath math="\varphi_2" />?</p>
      <p>The work can be derived from the voltage:</p>
      <BlockMath math="
        \begin{align*}
          U &= \frac{W}{q} = \varphi_2 - \varphi_1, \\
          W &= q (\varphi_2 - \varphi_1).
        \end{align*}
      " />

      <LinkH3 id="work-between-potentials-calculator">Work Required to Move From One Potential to Another Calculator</LinkH3>
      <WorkBetweenPotentials />

      <LinkH2 id="potential-radial">Potential in a Radial Electric Field</LinkH2>
      <p>A point of charge <InlineMath math="Q" /> is creating a radial electric field. Calculate the electric potential at point <InlineMath math="A" />.</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electric-potential/potential.svg`}
          width={700}
          height={700}
          alt="Radial potential illustration"
        />
      </div>
      <p>The displacement between <InlineMath math="A" /> and <InlineMath math="Q" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{r} &= A - Q.
        \end{align*}
      " />

      <p>Reusing the electric potential derived from work:</p>
      <BlockMath math="\varphi = \frac{k_e Q}{r}." />

      <LinkH3 id="potential-radial-plot">Potential in a Radial Electric Field Plot</LinkH3>
      <RadialPotential />
    </div>
  )
}
