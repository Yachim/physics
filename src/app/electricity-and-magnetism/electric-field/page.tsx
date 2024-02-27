import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import { ElectricDipolePlot, TwoChargesElectricField, LineCharge } from "./components"
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
      <BlockMath math="|\boldsymbol{E}| = \frac{|\boldsymbol{F_e}|}{q} = k_e\frac{|Q|}{r^2}." />
      <p>Or in vector form:</p>
      <BlockMath math="\boldsymbol{E} = \frac{\boldsymbol{F_e}}{q} = k_e\frac{Q}{r^2} \boldsymbol{\hat{r}}," />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
          r &= |\boldsymbol{r}_q - \boldsymbol{r}_Q|, \\
          \boldsymbol{\hat{r}} &= \frac{\boldsymbol{r}_q - \boldsymbol{r}_Q}{r},
        \end{align*}
      " />
      <p>where <InlineMath math="\boldsymbol{r}_Q" /> is the position of the source charge and <InlineMath math="\boldsymbol{r}_q" /> is the position of the charge that the electric field acts on.</p>

      <LinkH2 id="electric-field-two-charges">Electric Field Created By Two Charges</LinkH2>
      <p>A <InlineMath math="10\ nC" /> charge is placed at the origin. A second <InlineMath math="-20\ nC" /> charge is placed <InlineMath math="50\ cm" /> to the right of the first charge. What is the magnitude and direction of the electric field <InlineMath math="20\ cm" /> above the first charge?</p>
      <BlockMath math="
        \begin{align*}
          Q_1 &= 10^{-8}\ C, \\
          Q_2 &= -2 \cdot 10^{-8}\ C, \\
          \boldsymbol{r}_1 &= \boldsymbol{0}, \\
          \boldsymbol{r}_2 &= 0.5\ m\ \boldsymbol{\hat{x}}, \\
          \boldsymbol{r}_t &= 0.2\ m\ \boldsymbol{\hat{y}}, \\[1.5ex]
          \boldsymbol{r}_{t1} &= 0.2\ m\ \boldsymbol{\hat{y}}, \\
          |\boldsymbol{r}_{t1}| &= 0.2\ m, \\
          \boldsymbol{\hat{r}_{t1}} &= \boldsymbol{\hat{y}}, \\[1.5ex]
          \boldsymbol{r}_{t2} &= -0.5\ m\ \boldsymbol{\hat{x}} + 0.2\ m\ \boldsymbol{\hat{y}}, \\
          |\boldsymbol{r}_{t2}| &= \frac{\sqrt{29}}{10}\ m, \\
          \boldsymbol{\hat{r}_{t2}} &= -\frac{5 \sqrt{29}}{29}\ \boldsymbol{\hat{x}} + \frac{2 \sqrt{29}}{29}\ \boldsymbol{\hat{y}}, \\[1.5ex]
          \boldsymbol{E}_1 &= k_e \frac{Q_1}{|\boldsymbol{r}_{t1}|^2} \boldsymbol{\hat{r}_{t1}} \\
          &= 2250\ NC^{-1}\ \boldsymbol{\hat{y}}, \\
          \boldsymbol{E}_2 &= k_e \frac{Q_2}{|\boldsymbol{r}_{t2}|^2} \boldsymbol{\hat{r}_{t2}} \\
          &= -\frac{18000}{29}\ NC^{-1}\ \boldsymbol{\hat{r}_{t2}} \\
          &= \frac{90000 \sqrt{29}}{841}\ NC^{-1}\ \boldsymbol{\hat{x}} - \frac{36000 \sqrt{29}}{841}\ NC^{-1}\ \boldsymbol{\hat{y}}, \\
          &\approx 576.3\ NC^{-1}\ \boldsymbol{\hat{x}} - 230.52\ NC^{-1}\ \boldsymbol{\hat{y}}, \\
          \boldsymbol{E} &= \boldsymbol{E}_1 + \boldsymbol{E}_2 \\
          &= \frac{90000 \sqrt{29}}{841}\ NC^{-1}\ \boldsymbol{\hat{x}} + \left(2250 - \frac{36000 \sqrt{29}}{841}\right)\ NC^{-1}\ \boldsymbol{\hat{y}}, \\
          &\approx 576.3\ NC^{-1}\ \boldsymbol{\hat{x}} + 2019.48\ NC^{-1}\ \boldsymbol{\hat{y}}, \\
          |\boldsymbol{E}| &\approx 2100.1\ NC^{-1}.
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
      <p>Let <InlineMath math="\boldsymbol{r_1}" /> be the position of the first charge, <InlineMath math="\boldsymbol{r_2}" /> the position of the second charge and <InlineMath math="\boldsymbol{r_t}" /> the at which the electric field is calculated:</p>
      <BlockMath math="
        \begin{align*}
          r &= |\boldsymbol{r_t} - \boldsymbol{r_1}| = |\boldsymbol{r_t} - \boldsymbol{r_2}|, \\
          d &= |\boldsymbol{r_1} - \boldsymbol{r_2}|, \\
          \boldsymbol{\hat{r}_{s1}} &= \frac{\boldsymbol{r}_t - \boldsymbol{r}_1}{r}, \\
          \boldsymbol{\hat{r}_{s2}} &= \frac{\boldsymbol{r}_t - \boldsymbol{r}_2}{r}.
        \end{align*}
      "/>

      <p>The electric field due to the first charge, <InlineMath math="\boldsymbol{E}_1" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E}_1 &= k_e \frac{q}{r^2} \boldsymbol{\hat{r}_{s1}} \\
          &= k_e \frac{q}{r^3} (\boldsymbol{r}_t - \boldsymbol{r}_1).
        \end{align*}
      "/>

      <p>The electric field due to the second charge, <InlineMath math="\boldsymbol{E}_2" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E}_2 &= -k_e \frac{q}{r^2} \boldsymbol{\hat{r}_{s2}} \\
          &= -k_e \frac{q}{r^3} (\boldsymbol{r}_t - \boldsymbol{r}_2).
        \end{align*}
      "/>

      <p>The total electric field, <InlineMath math="\boldsymbol{E}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= \boldsymbol{E}_1 + \boldsymbol{E}_2 \\
          &= k_e \frac{q}{r^3} (\boldsymbol{r}_t - \boldsymbol{r}_1) - k_e \frac{q}{r^3} (\boldsymbol{r}_t - \boldsymbol{r}_2) \\
          &= k_e \frac{q}{r^3} (\boldsymbol{r}_t - \boldsymbol{r}_1 - \boldsymbol{r}_t + \boldsymbol{r}_2) \\
          &= k_e \frac{q}{r^3} (\boldsymbol{r}_2 - \boldsymbol{r}_1) \\
          &= k_e \frac{q}{\left(\frac{\sqrt{d^2 + 4a^2}}{2}\right)^3} (\boldsymbol{r}_2 - \boldsymbol{r}_1) \\
          &= \frac{8 k_e q}{(d^2 + 4a^2)^{\frac{3}{2}}} (\boldsymbol{r}_2 - \boldsymbol{r}_1).
        \end{align*}
      "/>

      <p>Transforming the coordinate system so that <InlineMath math="\boldsymbol{r}_1" /> is at the origin and <InlineMath math="\boldsymbol{r}_2" /> lies on the x axis, the magnitude of the electric field can be calculated in the original terms:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{r}_2 &= d \boldsymbol{\hat{x}}, \\
          \boldsymbol{E} &= \frac{8 k_e q}{(d^2 + 4a^2)^{\frac{3}{2}}} d \boldsymbol{\hat{x}} \\
          &= \frac{8 k_e q d}{(d^2 + 4a^2)^{\frac{3}{2}}} \boldsymbol{\hat{x}}, \\
          |\boldsymbol{E}| &= \frac{8 k_e q d}{(d^2 + 4a^2)^{\frac{3}{2}}}. \\
        \end{align*}
      "/>

      <LinkH3 id="electric-dipole-plot">Electric Dipole Plot</LinkH3>
      <ElectricDipolePlot />

      <LinkH2 id="line-charge">Line charge</LinkH2>
      <p>A line has a <b>constant</b> charge density <InlineMath math="\lambda" />. Its ends lie in points <InlineMath math="A" /> and <InlineMath math="B" />. What is the electric field at point <InlineMath math="C" />?</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/line-charge.svg`}
          width={700}
          height={700}
          alt="Electric dipole illustration"
        />
      </div>
      <p>Let <InlineMath math="H" /> be the projection of <InlineMath math="C" /> onto the line, then:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/line-charge2.svg`}
          width={700}
          height={700}
          alt="Electric dipole illustration"
        />
      </div>
      <BlockMath math="
        \begin{align*}
	  \boldsymbol{l} &= B - A, \\
	  l &= |\boldsymbol{l}|, \\
	  \boldsymbol{h} &= H - A, \\
	  h &= |\boldsymbol{h}|, \\
	  \boldsymbol{s} &= C - H, \\
	  s &= |\boldsymbol{s}|.
        \end{align*}
      " />
      <p>Let&apos;s transform the coordinate system so that <InlineMath math="H" /> lies in origin and the line is aligned with the y-axis:</p>
      <BlockMath math="
        \begin{align*}
	  \boldsymbol{\hat{x}} &= \frac{\boldsymbol{s}}{s}, \\
	  \boldsymbol{\hat{y}} &= \frac{\boldsymbol{l}}{l}, \\
	  h &= \boldsymbol{\hat{y}} \cdot (C - A), \quad h \in \mathbb{R}, \\
	  \boldsymbol{h} &= h \boldsymbol{\hat{y}}, \\
	  H &= A + \boldsymbol{h}.
        \end{align*}
      " />
      <p>Let&apos;s parametrize the position on the line by <InlineMath math="y" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/line-charge3.svg`}
          width={700}
          height={700}
          alt="Electric dipole illustration"
        />
      </div>
      <BlockMath math="
        \begin{align*}
	  \lambda &= \frac{dq}{dl} \implies dq = \lambda\ dl = \lambda\ dy, \\
	  r &= \sqrt{y^2 + s^2}, \\
	  d|\boldsymbol{E}| &= k_e \frac{dq}{r^2} \\
	  &= k_e \lambda \frac{dy}{y^2 + s^2}, \\
	  d E_x &= \cos \alpha\ d|\boldsymbol{E}|, \\
	  d E_y &= \sin \alpha\ d|\boldsymbol{E}|, \\
	  \cos \alpha &= \frac{s}{r}, \\
	  \sin \alpha &= \frac{y}{r}, \\
	  d E_x &= k_e \lambda s \frac{dy}{(y^2 + s^2)^{\frac{3}{2}}}, \\
	  E_x &= k_e \lambda s \int_{-h}^{l - h} \frac{dy}{(y^2 + s^2)^{\frac{3}{2}}} \\
	  &= \frac{k_e \lambda}{s} \left[\frac{y}{\sqrt{y^2 + s^2}}\right]_{-h}^{l - h} \\
	  &= \frac{k_e \lambda}{s} \left[\frac{l - h}{\sqrt{(l - h)^2 + s^2}} + \frac{h}{\sqrt{h^2 + s^2}}\right], \\
	  d E_y &= k_e \lambda \frac{y\ dy}{(y^2 + s^2)^{\frac{3}{2}}}, \\
	  E_y &= k_e \lambda \int_{-h}^{l - h} \frac{y\ dy}{(y^2 + s^2)^{\frac{3}{2}}}, \\
	  &= -k_e \lambda \left[\frac{1}{\sqrt{y^2 + s^2}}\right]_{-h}^{l - h} \\
	  &= -k_e \lambda \left[\frac{1}{\sqrt{(l - h)^2 + s^2}} - \frac{1}{\sqrt{h^2 + s^2}}\right] \\
	  &= k_e \lambda \left[\frac{1}{\sqrt{h^2 + s^2}} - \frac{1}{\sqrt{(l - h)^2 + s^2}}\right], \\
	  \boldsymbol{E} &= \frac{k_e \lambda}{s} \left[\frac{l - h}{\sqrt{(l - h)^2 + s^2}} + \frac{h}{\sqrt{h^2 + s^2}}\right] \boldsymbol{\hat{x}}\\
	  &+ k_e \lambda \left[\frac{1}{\sqrt{h^2 + s^2}} - \frac{1}{\sqrt{(l - h)^2 + s^2}}\right] \boldsymbol{\hat{y}}, \\
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
	  \boldsymbol{l} &= B - A, \\
	  l &= |\boldsymbol{l}|, \\
	  h &= \boldsymbol{\hat{y}} \cdot (C - A), \quad h \in \mathbb{R}, \\
	  \boldsymbol{h} &= h \boldsymbol{\hat{y}}, \\
	  H &= A + \boldsymbol{h}, \\
	  \boldsymbol{s} &= C - H, \\
	  s &= |\boldsymbol{s}|, \\
	  \boldsymbol{\hat{x}} &= \frac{\boldsymbol{s}}{s}, \\
	  \boldsymbol{\hat{y}} &= \frac{\boldsymbol{l}}{l}, \\
        \end{align*}
      " />
      <p>and <InlineMath math="H" /> lies at the origin.</p>
      <LinkH3 id="line-charge-plot">Line Charge Plot</LinkH3>
      <LineCharge />
    </div>
  )
}
