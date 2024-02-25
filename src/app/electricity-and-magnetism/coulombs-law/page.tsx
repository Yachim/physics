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
      <BlockMath math={String.raw`\begin{equation}|\vec{F}_e| = k_e \frac{|q_1| |q_2|}{r^2},\end{equation}`} />
      <p>where:</p>
      <BlockMath math={String.raw`\begin{equation}k_e = \frac{1}{4 \pi \epsilon_0} \approx 9 \cdot 10^9\ N m^2 C^{-2}.\end{equation}`} />
      <p>If the product <InlineMath math="q_1 q_2" /> is positive, the force is repulsive. If the product is negative, the force is attractive.</p>
      <p>Vector form:</p>
      <BlockMath math={String.raw`\begin{equation}\vec{F}_e = k_e \frac{q_1 q_2}{|\vec{r}_{12}|^2} \hat{r}_{12},\end{equation}`} />
      <p>where:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \vec{r}_{12} &= \vec{r}_1 - \vec{r}_2, \\
          \hat{r}_{12} &= \frac{\vec{r}_{12}}{|\vec{r}_{12}|}.
        \end{align*}
      `} />
      <p>In a non-vacuum environment, we have to use the relative permittivity, <InlineMath math="\epsilon_r" />:</p>
      <BlockMath math={String.raw`
        \begin{align}
          |\vec{F}_e| &= \frac{k_e}{\epsilon_r} \frac{|q_1| |q_2|}{r^2}, \\
          \vec{F}_e &= \frac{k_e}{\epsilon_r} \frac{q_1 q_2}{|\vec{r}_{12}|^2} \hat{r}_{12}.
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

      <LinkH2 id="magnitude-of-force-between-two-charged-balls">Magnitude of Force Between Two Charged Balls</LinkH2>
      <p>Two balls carrying charges <InlineMath math="q_1 = -20\ nC" /> and <InlineMath math="q_2 = 80\ nC" /> are placed at a distance of <InlineMath math="r_{12} = 10\ cm" /> apart. What is the magnitude of the force they act on each other? What is the magnitude of the force if they are placed in water?</p>
      <p>When placed in vacuum:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          q_1 &= -2 \cdot 10^{-8}\ C, \\
          q_2 &= 8 \cdot 10^{-8}\ C, \\
          r &= 0.1\ m, \\
          |\vec{F}_e| &= k_e \frac{|q_1| |q_2|}{r^2} \\
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
          |\vec{F}_e| &= \frac{k_e}{\epsilon_r} \frac{|q_1| |q_2|}{r^2} \\
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
          \vec{r}_1 &= \vec{0}, \\
          \vec{r}_2 &= 0.2\ m\ \hat{x}, \\
          \vec{r}_3 &= 0.2\ m\ \hat{x} + 0.15\ m\ \hat{y}, \\[1.5ex]
          \vec{r}_{21} &= \vec{r}_2 - \vec{r}_1 \\
          &= 0.2\ m\ \hat{x}, \\
          |\vec{r}_{21}| &= 0.2\ m, \\
          \hat{r}_{21} &= \hat{x}, \\[1.5ex]
          \vec{r}_{23} &= \vec{r}_2 - \vec{r}_3 \\
          &= -0.15\ m\ \hat{y}, \\
          |\vec{r}_{23}| &= 0.15\ m, \\
          \hat{r}_{23} &= -\hat{y}.
        \end{align*}
      `} />
      <p>The force on second charge due to the first one:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \vec{F}_{e1} &= k_e \frac{q_2 q_1}{|\vec{r}_{21}|^2} \hat{r}_{21} \\
          &= 9 \cdot 10^9 \frac{-3 \cdot 10^{-8} \cdot 10^{-8}}{0.2^2} \hat{x} \\
          &= -6.75 \cdot 10^{-5}\ m\ \hat{x}.
        \end{align*}
      `} />
      <p>The force on second charge due to the third one:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \vec{F}_{e3} &= k_e \frac{q_2 q_3}{|\vec{r}_{23}|^2} \hat{r}_{23} \\
          &= 9 \cdot 10^9 \frac{- 3 \cdot 10^{-8} \cdot 2 \cdot 10^{-8}}{0.15^2} (- \hat{y}) \\
          &= 2.4 \cdot 10^{-4}\ m\ \hat{y}.
        \end{align*}
      `} />
      <p>The total force is just sum of these two forces:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \vec{F}_e &= \vec{F}_{e1} + \vec{F}_{e3} \\
          &= -6.75 \cdot 10^{-5}\ m\ \hat{x} + 2.4 \cdot 10^{-4}\ m\ \hat{y}.
        \end{align*}
      `} />

      <LinkH3 id="forces-plot">Plot of Forces</LinkH3>
      <ForceVectors />

      <LinkH2 id="charge-density">Charge Density</LinkH2>
      <p>Charge density is an amount of electric charge per unit of length, surface area or volume.</p>
      <p>For a small change in length, <InlineMath math="dl" /> and a small change in charge <InlineMath math="dq" />, the linear charge density, <InlineMath math="\lambda" />, is equal to:</p>
      <BlockMath math="\lambda = \frac{dq}{dl}." />
      <p>For a small change in surface area, <InlineMath math="dS" /> and a small change in charge <InlineMath math="dq" />, the surface charge density, <InlineMath math="\sigma" />, is equal to:</p>
      <BlockMath math="\sigma = \frac{dS}{dl}." />
      <p>For a small change in volume, <InlineMath math="dV" /> and a small change in charge <InlineMath math="dq" />, the volume charge density, <InlineMath math="\rho" />, is equal to:</p>
      <BlockMath math="\rho = \frac{dV}{dl}." />

      <LinkH3 id="linear-density-example">Linear Charge Density</LinkH3>
      <p>A long wire has a linear charge density of <InlineMath math="\lambda = 2\ Cm^{-1}" />. Find the total charge enclosed in a segment of the wire that is <InlineMath math="3\ m" /> long.</p>
      <BlockMath math="
        \begin{align*}
          \lambda &= 2\ Cm^{-1}, \\
          l &= 3 m, \\
          dq &= \lambda\ dl, \\
          q &= \int_0^l \lambda dl \\
          &= \int_0^3 2 dl \\
          &= 2 \cdot 3 \\
          &= 6\ C.
        \end{align*}
      "/>

      <LinkH3 id="surface-density-example">Surface Area Charge Density</LinkH3>
      <p>A flat sheet has a surface charge density of <InlineMath math="\sigma = 5\ Cm^{-2}" />. Calculate the total charge on a circular region of the sheet with radius <InlineMath math="2\ m" />.</p>
      <BlockMath math="
        \begin{align*}
          \sigma &= 5\ Cm^{-2}, \\
          r &= 2\ m, \\
          dq &= \sigma\ dS, \\
          q &= \int_S \sigma dS, \\
          &= \int_0^{2\pi} \int_0^2 5 r\ dr d\theta \\
          &= 5 \int_0^{2\pi} \int_0^2 r\ dr d\theta \\
          &= 5 \int_0^{2\pi} \left[\frac{1}{2} r^2\right]_0^2 d\theta \\
          &= 10 \int_0^{2\pi} d\theta \\
          &= 10 \cdot 2\pi \\
          &= 20 \pi\ C.
        \end{align*}
      "/>

      <LinkH3 id="volume-density-example">Volume Charge Density</LinkH3>
      <p>Inside a cube with sides of length <InlineMath math="a = 4\ m" />, the volume charge density is given by <InlineMath math="\rho = 3\ Cm^{-3}" />. Find the total charge contained within the cube.</p>
      <BlockMath math="
        \begin{align*}
          \rho &= 3\ Cm^{-3}, \\
          a &= 4\ m, \\
          dq &= \rho\ dV, \\
          q &= \int_V \rho\ dV \\
          &= 3 \int_0^4 \int_0^4 \int_0^4\ dx dy dz \\
          &= 12 \int_0^4 \int_0^4\ dy dz \\
          &= 48 \int_0^4 dz \\
          &= 192\ C
        \end{align*}
      "/>

      {/*<LinkH2 id="charges-with-gravity">Charges with Gravity</LinkH2>

      <LinkH2 id="motion-of-charged-particles">Motion of Charged Particles</LinkH2>
      <p>Two charged particles are placed at a distance <InlineMath math="r_0" /> with zero initial velocity. How long does it take the particles to reach a distance of <InlineMath math="r" /> between them? What is the velocity at that moment?</p>
      <p>As per Newton's second law:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \frac{dv}{dt} &= \frac{F}{m}, \\
          \frac{dv}{dr} v &= \frac{F}{m}, \\
          v dv &= \frac{k |q_1||q_2|}{m} r^{-2} dr, \\
          \int_0^{v} v dv &= \frac{k |q_1||q_2|}{m} \int_{r_0}^r r^{-2} dr, \\
          \frac{1}{2} v^2 &= -\frac{k |q_1||q_2|}{m} \left(\frac{1}{r} - \frac{1}{r_0}\right), \\
          v^2 &= \frac{2k |q_1||q_2|}{m} \frac{r - r_0}{r_0r}, \\
          \frac{dr}{dt} &= \sqrt{\frac{2k |q_1||q_2|}{m} \frac{r - r_0}{r_0r}}, \\
          &= \frac{C}{\sqrt{m}} \sqrt{\frac{r - r_0}{r}}, \\
          C &= \sqrt{\frac{2k |q_1||q_2|}{r_0}}.
        \end{align*}
      `} />
      <p>This is the velocity. As for the time:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          dt &= \frac{dr}{v}, \\
          dt &= \frac{\sqrt{m}}{C} \sqrt{\frac{r}{r - r_0}} dr \\
          t &= \frac{\sqrt{m}}{C} \int_{r_0}^r \sqrt{\frac{r}{r - r_0}} dr, \\
          u &= \sqrt{r - r_0}, \\
          r &= u^2 + r_0, \\
          dr &= 2u\, du, \\
          t &= \frac{\sqrt{m}}{C} \int_0^{\sqrt{r - r_0}} \frac{\sqrt{u^2 + r_0}}{u} 2u\, du \\
          &= \frac{2\sqrt{m}}{C} \int_0^{\sqrt{r - r_0}} \sqrt{u^2 + r_0}\, du, \\
          u &= \sqrt{r_0} \sinh \theta, \\
          du &= \sqrt{r_0} \cosh \theta\, d\theta, \\
          t &= \frac{2 r_0 \sqrt{m}}{C} \int_0^{\sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}} \cosh^2 \theta\, d\theta \\
          &= \frac{r_0 \sqrt{m}}{C} \int_0^{\sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}} (\cosh 2 \theta + 1)\, d\theta \\
          &= \frac{r_0 \sqrt{m}}{C} \left[\frac{\sinh 2 \theta}{2} + \theta\right]_0^{\sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}} \\
          &= \frac{r_0 \sqrt{m}}{C} \Big[\sinh \theta \cosh \theta + \theta\Big]_0^{\sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}} \\
          &= \frac{r_0 \sqrt{m}}{C} \left[\sqrt{\frac{r - r_0}{r_0}} \cosh \left(\sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}\right) + \sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}\right] \\
          &= \frac{r_0 \sqrt{m}}{C} \left[\sqrt{\frac{r - r_0}{r_0}} \sqrt{\frac{r}{r_0}} + \sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}\right] \\
          &= \frac{\sqrt{m}}{C} \left[\sqrt{r} \sqrt{r - r_0} + r_0 \sinh^{-1} \sqrt{\frac{r - r_0}{r_0}}\right], \\
          C &= \sqrt{\frac{2k |q_1||q_2|}{r_0}}.
        \end{align*}
      `} />
      <p>This is the time it takes the two particles to reach a distance <InlineMath math="r" /> between them.</p>
      */}
      {/* FIXME: this is only true when assuming the other particle is not moving */}
      {/*
      <LinkH2 id="motion-animation">Animation of Motion</LinkH2>
      <p>Numerically, we can solve for motion, e.g. Euler method:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          r_{n + 1} &= r_n + h \frac{C}{\sqrt{m}} \sqrt{\frac{r_n - r_0}{r_n}}, \\
          C &= \sqrt{\frac{2k |q_1||q_2|}{r_0}}.
        \end{align*}
      `} />
      <ChargeMotion />
      */}
    </div>
  )
}
