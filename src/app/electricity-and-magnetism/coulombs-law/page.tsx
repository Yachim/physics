import { LinkH2 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { ForceMagnitude, ForceVectors } from "./components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coulomb's law"
}

export default async function Page() {
  return (
    <div className="article">
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

      <LinkH2 id="magnitude-calculator">Magnitude Calculator</LinkH2>
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

      <LinkH2 id="forces-plot">Forces Plot</LinkH2>
      <ForceVectors />

      <LinkH2 id="charges-with-gravity">Charges with Gravity</LinkH2>

      <LinkH2 id="motion-of-charged-particles">Motion of Charged Particles</LinkH2>
      {/*
      <p>As per Newton's second law:</p>
      <BlockMath math={String.raw`
        \begin{align*}
	  \vec{a} &= \frac{\vec{F}_e}{m} \\
	  &= k_e \frac{q_1 q_2}{m} \frac{\hat{r}_{12}}{|\vec{r}_{12}|^2} \\
	  &= k_e \frac{q_1 q_2}{m} \frac{\vec{r}_{12}}{|\vec{r}_{12}|^3} \\
	  &= k_e \frac{q_1 q_2}{m} \frac{r_{12,x} \hat{x} + r_{12,y} \hat{y}}{(r_{12,x}^2 + r_{12,y}^2)^\frac{3}{2}} \\
	  &= a_x \hat{x} + a_y \hat{y},
        \end{align*}
      `} />

      <p>which implies:</p>
      <BlockMath math={String.raw`
        \begin{align*}
	  a_x &= \frac{d^2 r_{12,x}}{dt^2} = k_e \frac{q_1 q_2}{m} \frac{r_{12,x}}{(r_{12,x}^2 + r_{12,y}^2)^\frac{3}{2}}, \\
	  a_y &= \frac{d^2 r_{12,y}}{dt^2} = k_e \frac{q_1 q_2}{m} \frac{r_{12,y}}{(r_{12,x}^2 + r_{12,y}^2)^\frac{3}{2}},
        \end{align*}
      `} />

      <p>or generally:</p>
      <BlockMath math={String.raw`a_i = \frac{d^2 r_{12,i}}{dt^2} = k_e \frac{q_1 q_2}{m} \frac{r_{12,i}}{(\sum_j r_{12,j}^2)^\frac{3}{2}}`} />

      <p>Let <InlineMath math="v_i = \frac{dr_{12,i}}{dt}"/>, then:</p>
      <BlockMath math={String.raw`
        \begin{align*}
	  \frac{dv_i}{dt} &= k_e \frac{q_1 q_2}{m} \frac{r_{12,i}}{(\sum_j r_{12,j}^2)^\frac{3}{2}}, \\
	  \sum_j \frac{dv_i}{dr_{12,j}} \frac{dr_{12,j}}{dt} &= k_e \frac{q_1 q_2}{m} \frac{r_{12,i}}{(\sum_j r_{12,j}^2)^\frac{3}{2}}, \\
	  \frac{dv_i}{dr_{12,i}} v_i &= k_e \frac{q_1 q_2}{m} \frac{r_{12,i}}{(r_{12,i}^2 + \sum_{j \neq i} r_{12,j}^2)^\frac{3}{2}}
        \end{align*}
      `} />
      */}

      <p>Let <InlineMath math="a, v, r" /> be the magnitudes of the acceleration, velocity and distance between two charged particles. As per Newton's second law:</p>
      {/*FIXME: r_0 = infinity => loss of generality?*/}
      <BlockMath math={String.raw`
        \begin{align*}
	  a &= \frac{dv}{dt} \\
	  &= \frac{|\vec{F}_e|}{m} \\
	  &= k_e \frac{|q_1| |q_2|}{m} \frac{1}{r^2}, \\
	  \frac{dv}{dt} &= \frac{dv}{dr} \frac{dr}{dt} = k_e \frac{|q_1| |q_2|}{m} \frac{1}{r^2}, \\
	  \frac{dv}{dr} v &= k_e \frac{|q_1| |q_2|}{m} \frac{1}{r^2}, \\
	  v\, dv &= k_e \frac{|q_1| |q_2|}{m} \frac{1}{r^2}\, dr, \\
	  \int_{v_0}^v v\, dv &= k_e \frac{|q_1| |q_2|}{m} \int_{r_0}^r \frac{1}{r^2}\, dr, \\
	  \left[\frac{1}{2} v^2\right]_{v_0}^v &= k_e \frac{|q_1| |q_2|}{m} \left[-\frac{1}{r}\right]_{r_0}^r, \\
	  v^2 - v_0^2 &= 2 k_e \frac{|q_1| |q_2|}{m} \left(-\frac{1}{r} + \frac{1}{r_0}\right), \\
	  v &= \pm \sqrt{2 k_e \frac{|q_1| |q_2|}{m} \left(-\frac{1}{r} + \frac{1}{r_0}\right) + v_0^2}, \\
	  \vec{v} &= \mathrm{sgn}(q_1 q_2) \sqrt{2 k_e \frac{|q_1| |q_2|}{m} \left(-\frac{1}{|\vec{r}_{12}|} + \frac{1}{|\vec{r}_{12,0}|}\right) + v_0^2}\, \hat r_{12}. \\
        \end{align*}
      `} />
      <p>Note: <InlineMath math="v_0"/> is not a vector. It is the magnitude of the initial velocity in the <InlineMath math={String.raw`\hat{r}`} /> direction.</p>
    </div>
  )
}
