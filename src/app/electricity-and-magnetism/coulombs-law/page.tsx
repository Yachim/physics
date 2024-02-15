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
      <h1>Coulomb&apos;s law</h1>
      <p>The force between two charges, <InlineMath math={String.raw`q_1, q_2`} /> at a distance <InlineMath math="r" /> is given by the Coulomb&apos;s law:</p>
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

      <LinkH2 id="magnitude-of-force-between-two-charged-balls">Magnitude of force between two charged balls</LinkH2>
      <p>Two balls carrying charges <InlineMath math="q_1 = -20\ nC" /> and <InlineMath math="q_2 = 80\ nC" /> are placed at a distance of <InlineMath math="r = 10\ cm" /> apart. What is the magnitude of the force they act on each other? What is the magnitude of the force if they are placed in water?</p>
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
          e_r &= 81.6, \\
          |\vec{F}_e| &= \frac{k_e}{81.6} \frac{|q_1| |q_2|}{r^2} \\
          &= \frac{9 \cdot 10^9}{81.6} \frac{2^{-8} \cdot 8^{-8}}{0.1^2} \\
          &\approx 1.76 \cdot 10^{-5}\ N.
        \end{align*}
      `} />

      <LinkH2 id="magnitude-calculator">Magnitude calculator</LinkH2>
      <ForceMagnitude initialQ1={-2E-8} initialQ2={8E-8} initialR={0.1} />

      <LinkH2 id="charges-in-space">Charges in space</LinkH2>
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
          \vec{F}_{e2} &= k_e \frac{q_2 q_3}{|\vec{r}_{23}|^2} \hat{r}_{23} \\
          &= 9 \cdot 10^9 \frac{10^{-8} \cdot 2 \cdot 10^{-8}}{0.2^2} \hat{y} \\
          &= 4.5 \cdot 10^{-5}\ m\ \hat{y}.
        \end{align*}
      `} />
      <p>The total force is just sum of these two forces:</p>
      <BlockMath math={String.raw`
        \begin{align*}
          \vec{F}_e &= \vec{F}_{e1} + \vec{F}_{e2} \\
          &= -6.75 \cdot 10^{-5}\ m\ \hat{x} + 4.5 \cdot 10^{-5}\ m\ \hat{y}.
        \end{align*}
      `} />

      <LinkH2 id="plot">Plot</LinkH2>
      <ForceVectors />
    </div>
  )
}
