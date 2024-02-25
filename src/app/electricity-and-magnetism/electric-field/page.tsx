import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import { ElectricDipolePlot, TwoChargesElectricField } from "./components"
import Image from "next/image"
import getConfig from "next/config"

export const metadata: Metadata = {
  title: "Electric Field"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Electric Field</h1>
      <p>The electric field created by a charge, <InlineMath math="Q" />, acting on a charge <InlineMath math="q" />, is given by:</p>
      <BlockMath math="|\vec{E}| = \frac{|\vec{F_e}|}{q} = k_e\frac{|Q|}{r^2}." />
      <p>Or in vector form:</p>
      <BlockMath math="\vec{E} = \frac{\vec{F_e}}{q} = k_e\frac{Q}{r^2} \hat{r}," />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
          r &= |\vec{r}_q - \vec{r}_Q|, \\
          \hat{r} &= \frac{\vec{r}_q - \vec{r}_Q}{r},
        \end{align*}
      " />
      <p>where <InlineMath math="\vec{r}_Q" /> is the position of the source charge and <InlineMath math="\vec{r}_q" /> is the position of the charge that the electric field acts on.</p>

      <LinkH2 id="electric-field-two-charges">Electric Field Created By Two Charges</LinkH2>
      <p>A <InlineMath math="10\ nC" /> charge is placed at the origin. A second <InlineMath math="-20\ nC" /> charge is placed <InlineMath math="50\ cm" /> to the right of the first charge. What is the magnitude and direction of the electric field <InlineMath math="20\ cm" /> above the first charge?</p>
      <BlockMath math="
        \begin{align*}
          Q_1 &= 10^{-8}\ C, \\
          Q_2 &= -2 \cdot 10^{-8}\ C, \\
          \vec{r}_1 &= \vec{0}, \\
          \vec{r}_2 &= 0.5\ m\ \hat{x}, \\
          \vec{r}_t &= 0.2\ m\ \hat{y}, \\[1.5ex]
          \vec{r}_{t1} &= 0.2\ m\ \hat{y}, \\
          |\vec{r}_{t1}| &= 0.2\ m, \\
          \hat{r}_{t1} &= \hat{y}, \\[1.5ex]
          \vec{r}_{t2} &= -0.5\ m\ \hat{x} + 0.2\ m\ \hat{y}, \\
          |\vec{r}_{t2}| &= \frac{\sqrt{29}}{10}\ m, \\
          \hat{r}_{t2} &= -\frac{5 \sqrt{29}}{29}\ \hat{x} + \frac{2 \sqrt{29}}{29}\ \hat{y}, \\[1.5ex]
          \vec{E}_1 &= k_e \frac{Q_1}{|\vec{r}_{t1}|^2} \hat{r}_{t1} \\
          &= 2250\ NC^{-1}\ \hat{y}, \\
          \vec{E}_2 &= k_e \frac{Q_2}{|\vec{r}_{t2}|^2} \hat{r}_{t2} \\
          &= -\frac{18000}{29}\ NC^{-1}\ \hat{r}_{t2} \\
          &= \frac{90000 \sqrt{29}}{841}\ NC^{-1}\ \hat{x} - \frac{36000 \sqrt{29}}{841}\ NC^{-1}\ \hat{y}, \\
          &\approx 576.3\ NC^{-1}\ \hat{x} - 230.52\ NC^{-1}\ \hat{y}, \\
          \vec{E} &= \vec{E}_1 + \vec{E}_2 \\
          &= \frac{90000 \sqrt{29}}{841}\ NC^{-1}\ \hat{x} + \left(2250 - \frac{36000 \sqrt{29}}{841}\right)\ NC^{-1}\ \hat{y}, \\
          &\approx 576.3\ NC^{-1}\ \hat{x} + 2019.48\ NC^{-1}\ \hat{y}, \\
          |\vec{E}| &\approx 2100.1\ NC^{-1}.
        \end{align*}
      "/>

      <LinkH3 id="electric-field-plot">Plot of Electric Field</LinkH3>
      <TwoChargesElectricField />

      <LinkH2 id="electric-dipole">Electric Dipole</LinkH2>
      <p>Two opposite charges with magnitude <InlineMath math="q" /> are placed at a distance <InlineMath math="d" /> from each other. Calculate the electric field at the distance <InlineMath math="a" /> from the midpoint. This point is at a distance <InlineMath math="r" /> from both charges:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electric-dipole.svg`}
          width={700}
          height={700}
          alt="Electric dipole illustration"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          r &= \sqrt{\left(\frac{d}{2}\right)^2 + a^2} \\
          &= \sqrt{\frac{d^2 + 4a^2}{4}} \\
          &= \frac{\sqrt{d^2 + 4a^2}}{2}. \\
        \end{align*}
      "/>
      <p>Let <InlineMath math="\vec{r_1}" /> be the position of the first charge, <InlineMath math="\vec{r_2}" /> the position of the second charge and <InlineMath math="\vec{r_t}" /> the at which the electric field is calculated:</p>
      <BlockMath math="
        \begin{align*}
          r &= |\vec{r_t} - \vec{r_1}| = |\vec{r_t} - \vec{r_2}|, \\
          d &= |\vec{r_1} - \vec{r_2}|, \\
          \hat{r}_{s1} &= \frac{\vec{r}_t - \vec{r}_1}{r}, \\
          \hat{r}_{s2} &= \frac{\vec{r}_t - \vec{r}_2}{r}.
        \end{align*}
      "/>

      <p>The electric field due to the first charge, <InlineMath math="\vec{E}_1" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \vec{E}_1 &= k_e \frac{q}{r^2} \hat{r}_{s1} \\
          &= k_e \frac{q}{r^3} (\vec{r}_t - \vec{r}_1).
        \end{align*}
      "/>

      <p>The electric field due to the second charge, <InlineMath math="\vec{E}_2" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \vec{E}_2 &= -k_e \frac{q}{r^2} \hat{r}_{s2} \\
          &= -k_e \frac{q}{r^3} (\vec{r}_t - \vec{r}_2).
        \end{align*}
      "/>

      <p>The total electric field, <InlineMath math="\vec{E}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \vec{E} &= \vec{E}_1 + \vec{E}_2 \\
          &= k_e \frac{q}{r^3} (\vec{r}_t - \vec{r}_1) - k_e \frac{q}{r^3} (\vec{r}_t - \vec{r}_2) \\
          &= k_e \frac{q}{r^3} (\vec{r}_t - \vec{r}_1 - \vec{r}_t + \vec{r}_2) \\
          &= k_e \frac{q}{r^3} (\vec{r}_2 - \vec{r}_1) \\
          &= k_e \frac{q}{\left(\frac{\sqrt{d^2 + 4a^2}}{2}\right)^3} (\vec{r}_2 - \vec{r}_1) \\
          &= \frac{8 k_e q}{(d^2 + 4a^2)^{\frac{3}{2}}} (\vec{r}_2 - \vec{r}_1).
        \end{align*}
      "/>

      <p>Transforming the coordinate system so that <InlineMath math="\vec{r}_1" /> is at the origin and <InlineMath math="\vec{r}_2" /> lies on the x axis, the magnitude of the electric field can be calculated in the original terms:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r}_2 &= d \hat{x}, \\
          \vec{E} &= \frac{8 k_e q}{(d^2 + 4a^2)^{\frac{3}{2}}} d \hat{x} \\
          &= \frac{8 k_e q d}{(d^2 + 4a^2)^{\frac{3}{2}}} \hat{x}, \\
          |\vec{E}| &= \frac{8 k_e q d}{(d^2 + 4a^2)^{\frac{3}{2}}}. \\
        \end{align*}
      "/>

      <LinkH3 id="electric-dipole-plot">Electric Dipole Plot</LinkH3>
      <ElectricDipolePlot />

      <LinkH2 id="line-charge">Line charge</LinkH2>
      <p>A line has a <b>constant</b> charge density <InlineMath math="\lambda" />. Its ends are described by position vectors <InlineMath math="\vec{A}" /> and <InlineMath math="\vec{B}" />. Let <InlineMath math="\vec{P}" /> denote a point on the line such that the distance between <InlineMath math="\vec{P}" /> and <InlineMath math="\vec{A}" /> is equal to <InlineMath math="h" />. Let <InlineMath math="\vec{C}" /> denote a point such that the distance from it to <InlineMath math="\vec{P}" /> is equal to <InlineMath math="d" /> and the line formed by the vectors <InlineMath math="\vec{C}" /> and <InlineMath math="\vec{P}" /> is perpendicular to the line formed by the vectors <InlineMath math="\vec{A}" /> and <InlineMath math="\vec{B}" />. Determine the vector field at <InlineMath math="\vec{C}" /></p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/line-charge.svg`}
          width={700}
          height={700}
          alt="Line charge illustration"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          l &= |\vec{B} - \vec{A}|, \\
          dq &= \lambda\ dl, \\
          d|\vec{E}| &= k_e \frac{dq}{r^2}, \\
          &= k_e \lambda \frac{dl}{r^2}. \\
        \end{align*}
      "/>

      <p>Let&apos;s parametrize the length by <InlineMath math="y" />, then:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/line-charge2.svg`}
          width={700}
          height={700}
          alt="Line charge illustration 2"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          \vec{E} &= \vec{E}_d \frac{\vec{C} - \vec{P}}{|\vec{C} - \vec{P}|} + \vec{E}_l \frac{\vec{B} - \vec{A}}{|\vec{B} - \vec{A}|}, \\
          dl &= dy, \\
          r &= \sqrt{y^2 + d^2}, \\
          d\vec{E}_x &= \cos \alpha\ d |\vec{E}|, \\
          d\vec{E}_y &= \sin \alpha\ d |\vec{E}|, \\
          \cos \alpha &= \frac{d}{r} \\
          &= \frac{d}{\sqrt{y^2 + d^2}}, \\
          \sin \alpha &= \frac{y}{r} \\
          &= \frac{y}{\sqrt{y^2 + d^2}},
        \end{align*}
      "/>
    </div>
  )
}
