import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { ForceMagnitude, ForceVectors } from "./components"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Coulomb's Law"
}

export default async function Page() {
  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Coulomb&apos;s Law</h1>
      <p>The force between two charges, <InlineMath math={String.raw`q_1, q_2`} /> at a distance <InlineMath math="r_{12}" /> is given by the Coulomb&apos;s law:</p>
      <BlockMath math={String.raw`\begin{equation}F_e = k_e \frac{|q_1| |q_2|}{r^2},\end{equation}`} />
      <p>where:</p>
      <BlockMath math={String.raw`\begin{equation}k_e = \frac{1}{4 \pi \epsilon_0} \approx 9 \cdot 10^9\ N m^2 C^{-2}.\end{equation}`} />
      <p>If the product <InlineMath math="q_1 q_2" /> is positive, the force is repulsive. If the product is negative, the force is attractive.</p>
      <p>Vector form:</p>
      <BlockMath math={String.raw`\begin{equation}\boldsymbol{F}_e = k_e \frac{q_1 q_2}{r_{12}^2} \boldsymbol{\hat{r}_{12}},\end{equation}`} />
      <p>where:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \boldsymbol{r}_{12} &= \boldsymbol{r}_1 - \boldsymbol{r}_2, \\
          \boldsymbol{\hat{r}_{12}} &= \frac{\boldsymbol{r}_{12}}{r_{12}}.
        \end{align*}
      `} />
      <p>In a non-vacuum environment, we have to use the relative permittivity, <InlineMath math="\epsilon_r" />:</p>
      <BlockMath math={String.raw`
        \begin{align}
          F_e &= \frac{k_e}{\epsilon_r} \frac{|q_1| |q_2|}{r^2}, \\
          \boldsymbol{F}_e &= \frac{k_e}{\epsilon_r} \frac{q_1 q_2}{r_{12}^2} \boldsymbol{\hat{r}_{12}}.
        \end{align}
      `} />
      <table className="mx-[20%]">
        <colgroup>
          <col className="w-1/2" />
          <col className="w-1/2" />
        </colgroup>
        <tbody>
          <tr>
            <th>Material</th>
            <th>Relative permittivity</th>
          </tr>
          <tr>
            <td>Vacuum</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Air</td>
            <td><InlineMath math={String.raw`\approx 1`} /></td>
          </tr>
          <tr>
            <td>Water</td>
            <td>81,6</td>
          </tr>
        </tbody>
      </table>

      <p>The smallest charge, the elementary charge <InlineMath math="e"/> is equal to:</p>
      <BlockMath math="e \approx 1.602 \cdot 10^{-19}\ C."/>

      <LinkH2 id="magnitude-of-force-between-two-charged-balls">Magnitude of Force Between Two Charged Balls</LinkH2>
      <p>Two balls carrying charges <InlineMath math="q_1 = -20\ nC" /> and <InlineMath math="q_2 = 80\ nC" /> are placed at a distance of <InlineMath math="r_{12} = 10\ cm" /> apart. What is the magnitude of the force they act on each other? What is the magnitude of the force if they are placed in water?</p>
      <p>When placed in vacuum:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          q_1 &= -2 \cdot 10^{-8}\ C, \\
          q_2 &= 8 \cdot 10^{-8}\ C, \\
          r &= 0.1\ m, \\
          F_e &= k_e \frac{|q_1| |q_2|}{r^2} \\
          &= 9 \cdot 10^9 \frac{2^{-8} \cdot 8^{-8}}{0.1^2} \\
          &= 1.44 \cdot 10^{-3}\ N.
        \end{align*}
      `} />
      <p>When placed in water:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          q_1 &= -2 \cdot 10^{-8}\ C, \\
          q_2 &= 8 \cdot 10^{-8}\ C, \\
          r &= 0.1\ m, \\
          \epsilon_r &= 81.6, \\
          F_e &= \frac{k_e}{\epsilon_r} \frac{|q_1| |q_2|}{r^2} \\
          &= \frac{9 \cdot 10^9}{81.6} \frac{2^{-8} \cdot 8^{-8}}{0.1^2} \\
          &\approx 1.76 \cdot 10^{-5}\ N.
        \end{align*}
      `} />

      <LinkH3 id="magnitude-calculator">Magnitude Calculator</LinkH3>
      <ForceMagnitude initialQ1={-2E-8} initialQ2={8E-8} initialR={0.1} />

      <LinkH2 id="charges-in-space">Charges in Space</LinkH2>
      <p>A <InlineMath math="10\ nC" /> is placed at the origin and a <InlineMath math="-30\ nC" /> charge is placed <InlineMath math="20\ cm" /> to the right. A third <InlineMath math="15\ nC" /> charge is placed <InlineMath math="15\ cm" /> above the second charge. What is the total force on the second charge due to the other two?</p>
      <BlockMath math={String.raw`
        \begin{align*}
          q_1 &= 10^{-8}\ C, \\
          q_2 &= -3 \cdot 10^{-8}\ C, \\
          q_3 &= 2 \cdot 10^{-8} \ C, \\
          \boldsymbol{r}_1 &= \boldsymbol{0}, \\
          \boldsymbol{r}_2 &= 0.2\ m\ \boldsymbol{\hat{x}}, \\
          \boldsymbol{r}_3 &= 0.2\ m\ \boldsymbol{\hat{x}} + 0.15\ m\ \boldsymbol{\hat{y}}, \\[1.5ex]
          \boldsymbol{r}_{21} &= \boldsymbol{r}_2 - \boldsymbol{r}_1 \\
          &= 0.2\ m\ \boldsymbol{\hat{x}}, \\
          r_{21} &= 0.2\ m, \\
          \boldsymbol{\hat{r}_{21}} &= \boldsymbol{\hat{x}}, \\[1.5ex]
          \boldsymbol{r}_{23} &= \boldsymbol{r}_2 - \boldsymbol{r}_3 \\
          &= -0.15\ m\ \boldsymbol{\hat{y}}, \\
          r_{23} &= 0.15\ m, \\
          \boldsymbol{\hat{r}_{23}} &= -\boldsymbol{\hat{y}}.
        \end{align*}
      `} />
      <p>The force on second charge due to the first one:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \boldsymbol{F}_{e1} &= k_e \frac{q_2 q_1}{r_{21}^2} \boldsymbol{\hat{r}_{21}} \\
          &= 9 \cdot 10^9 \frac{-3 \cdot 10^{-8} \cdot 10^{-8}}{0.2^2} \boldsymbol{\hat{x}} \\
          &= -6.75 \cdot 10^{-5}\ m\ \boldsymbol{\hat{x}}.
        \end{align*}
      `} />
      <p>The force on second charge due to the third one:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \boldsymbol{F}_{e3} &= k_e \frac{q_2 q_3}{r_{23}^2} \boldsymbol{\hat{r}_{23}} \\
          &= 9 \cdot 10^9 \frac{- 3 \cdot 10^{-8} \cdot 2 \cdot 10^{-8}}{0.15^2} (- \boldsymbol{\hat{y}}) \\
          &= 2.4 \cdot 10^{-4}\ m\ \boldsymbol{\hat{y}}.
        \end{align*}
      `} />
      <p>The total force is just sum of these two forces:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \boldsymbol{F}_e &= \boldsymbol{F}_{e1} + \boldsymbol{F}_{e3} \\
          &= -6.75 \cdot 10^{-5}\ m\ \boldsymbol{\hat{x}} + 2.4 \cdot 10^{-4}\ m\ \boldsymbol{\hat{y}}.
        \end{align*}
      `} />

      <LinkH3 id="forces-plot">Plot of Forces</LinkH3>
      <ForceVectors />

      <LinkH2 id="charge-density">Charge Density</LinkH2>
      <p>Charge density is an amount of electric charge per unit of length, surface area or volume.</p>
      <p>For a small change in length, <InlineMath math="dl" /> and a small change in charge <InlineMath math="dq" />, the linear charge density, <InlineMath math="\lambda" />, is equal to:</p>
      <BlockMath math="\lambda = \frac{dq}{dl}." />
      <p>For a small change in surface area, <InlineMath math="dS" /> and a small change in charge <InlineMath math="dq" />, the surface charge density, <InlineMath math="\sigma" />, is equal to:</p>
      <BlockMath math="\sigma = \frac{dq}{dS}." />
      <p>For a small change in volume, <InlineMath math="dV" /> and a small change in charge <InlineMath math="dq" />, the volume charge density, <InlineMath math="\rho" />, is equal to:</p>
      <BlockMath math="\rho = \frac{dq}{dV}." />

      <p>For constant charge densities, the equations simplify to:</p>
      <BlockMath math="
        \begin{align*}
          \lambda &= \frac{q}{l}, \\
          \sigma &= \frac{q}{S}, \\
          \rho &= \frac{q}{V}.
        \end{align*}
      " />
    </div>
  )
}
