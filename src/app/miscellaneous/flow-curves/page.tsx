import { LinkH2 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import { InverseSquareLawTwoVectorField, InverseSquareLawVectorField, TangentVectorField } from "./components"

export const metadata: Metadata = {
  title: "Flow Curves"
}


export default async function Page() {
  return (
    <div className="article">
      <Link href="/miscellaneous">Back</Link>
      <h1>Flow Curves</h1>
      <p>Given a vector field, <InlineMath math="\vec{F}(\vec{r})" /> parameterized by <InlineMath math="\vec{r}(t)" />, the tangent vector is equal to the vector field:</p>
      <BlockMath math="\frac{d\vec{r}(t)}{dt} = \vec{F}(\vec{r}(t))" />

      <p>For two dimensional cartesian coordinates, this would imply:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} \hat{x} + \frac{dy}{dt} \hat{y} &= F_x(x(t), y(t)) \hat{x} + F_y(x(t), y(t)) \hat{y}, \\[1.5ex]
          \frac{dx}{dt} &= F_x(x(t), y(t)), \\
          \frac{dy}{dt} &= F_y(x(t), y(t)).
        \end{align*}
      "/>

      <LinkH2 id="tangent-distance-origin">Vectors Tangent to the Distance From Origin</LinkH2>
      <p>Consider the following vector field:</p>
      <BlockMath math="\vec{F}(x, y) = -y \hat{x} + x \hat{y}" />
      <TangentVectorField flowCurve={false} />

      <p>Constructing a system of two differential equations:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= -y, \\
          \frac{dy}{dt} &= x.
        \end{align*}
      "/>

      <p>The flow curves seem to plot circles, the parameterized coordinates are equal to:</p>
      <BlockMath math="
        \begin{align*}
          x(t) &= a \cos t, \\
          y(t) &= a \sin t.
        \end{align*}
      "/>

      <p>The derivatives are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= - a \sin t, \\
          \frac{dy}{dt} &= a \cos t.
        \end{align*}
      "/>

      <p>This satisfies the original differential equations.</p>
      <TangentVectorField flowCurve={true} />

      <LinkH2 id="inverse-square-law-one">Inverse Square Law</LinkH2>
      <p>The inverse square law in vector form is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \vec{F}(\vec{r}_s) &= \frac{k}{|\vec{r}_s|^2} \hat{r}_s \\
          &= k \frac{\vec{r}_s}{|\vec{r}_s|^3},
        \end{align*}
      "/>
      <p>where <InlineMath math="k" /> is a constant.</p>
      <p>The vector <InlineMath math="\vec{r}_s" /> is the separation vector:</p>
      <BlockMath math="\vec{r}_s = \vec{r} - \vec{r}_p," />
      <p>where <InlineMath math="\vec{r}" /> is the current position that we are evaluating at and <InlineMath math="\vec{r}_p" /> is a constant position of the point creating the field.</p>

      <p>Converting to 3D cartesian coordinates:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r}_s &= \vec{r} - \vec{r}_p \\
          &= (x - x_p) \hat{x} + (y - y_p) \hat{y} + (z - z_p) \hat{z}, \\
          |\vec{r}_s| &= \sqrt{(x - x_p)^2 + (y - y_p)^2 + (z - z_p)^2}, \\
          \vec{F}(x, y, z) &= k \frac{(x - x_p) \hat{x} + (y - y_p) \hat{y} + (z - z_p) \hat{z}}{|\vec{r}_s|^3} \\
          &= k \frac{x - x_p}{|\vec{r}_s|^3} \hat{x} + k \frac{y - y_p}{|\vec{r}_s|^3} \hat{y} + k \frac{z - z_p}{|\vec{r}_s|^3} \hat{z}.
        \end{align*}
      "/>
      <p>Separating into a system of differential equations:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= k \frac{x - x_p}{|\vec{r}_s|^3}, \\
          \frac{dy}{dt} &= k \frac{y - y_p}{|\vec{r}_s|^3}, \\
          \frac{dz}{dt} &= k \frac{z - z_p}{|\vec{r}_s|^3}.
        \end{align*}
      "/>
      <p>In 2D, the <InlineMath math="z" /> coordinate is always zero for every object.</p>
      <InverseSquareLawVectorField flowCurve={false} />

      <p>Dividing the third equation by the second:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dz}{dy} &= \frac{z - z_p}{y - y_p}, \\
          \int_{z_0}^z \frac{dz}{z - z_p} &= \int_{y_0}^y \frac{dy}{y - y_p}, \\
          \left[\ln |z - z_p|\right]_{z_0}^z &= \left[\ln |y - y_p|\right]_{y_0}^y, \\
          \ln \left|\frac{z - z_p}{z_0 - z_p}\right| &= \ln \left|\frac{y - y_p}{y_0 - y_p}\right|, \\
          \left|\frac{z - z_p}{z_0 - z_p}\right| &= \left|\frac{y - y_p}{y_0 - y_p}\right|, \\
          |z - z_p| &= \left|\frac{(y - y_p) (z_0 - z_p)}{y_0 - y_p}\right|, \\
          z &= z_p \pm \frac{(y - y_p) (z_0 - z_p)}{y_0 - y_p}.
        \end{align*}
      "/>

      <p>Dividing the second equation by the first:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dy}{dx} &= \frac{y - y_p}{x - x_p}, \\
          \int_{y_0}^y \frac{dy}{y - y_p} &= \int_{x_0}^x \frac{dx}{x - x_p}, \\
          \left[\ln |y - y_p|\right]_{y_0}^y &= \left[\ln |x - x_p|\right]_{x_0}^x, \\
          \ln \left|\frac{y - y_p}{y_0 - y_p}\right| &= \ln \left|\frac{x - x_p}{x_0 - x_p}\right|, \\
          \left|\frac{y - y_p}{y_0 - y_p}\right| &= \left|\frac{x - x_p}{x_0 - x_p}\right|, \\
          |y - y_p| &= \left|\frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p}\right|, \\
          y &= y_p \pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="z" />:</p>
      <BlockMath math="
        \begin{align*}
          z &= z_p \pm \frac{(y_p \pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p} - y_p) (z_0 - z_p)}{y_0 - y_p} \\
          &= z_p \pm \frac{\pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p} (z_0 - z_p)}{y_0 - y_p} \\
          &= z_p + \frac{(x - x_p) (y_0 - y_p) (z_0 - z_p)}{(x_0 - x_p) (y_0 - y_p)} \\
          &= z_p + \frac{(x - x_p) (z_0 - z_p)}{x_0 - x_p}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="|\vec{r}|" />:</p>
      <BlockMath math="
        \begin{align*}
          |\vec{r}| &= \sqrt{(x - x_p)^2 + \left(y_p \pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p} - y_p\right)^2 + \left(z_p + \frac{(x - x_p) (z_0 - z_p)}{x_0 - x_p} - z_p\right)^2} \\
          &= \sqrt{(x - x_p)^2 + \left(\pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p}\right)^2 + \left(\frac{(x - x_p) (z_0 - z_p)}{x_0 - x_p}\right)^2} \\
          &= (x - x_p) \sqrt{1 + \frac{(y_0 - y_p)^2}{(x_0 - x_p)^2} + \frac{(z_0 - z_p)^2}{(x_0 - x_p)^2}} \\
          &= (x - x_p) \sqrt{\frac{(x_0 - x_p)^2 + (y_0 - y_p)^2 + (z_0 - z_p)^2}{(x_0 - x_p)^2}} \\
          &= (x - x_p) \frac{|\vec{r}_{s,0}|}{x_0 - x_p}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="\frac{dx}{dt}" /> and solving:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= k \frac{x - x_p}{\left((x - x_p) \frac{|\vec{r}_{s,0}|}{x_0 - x_p}\right)^3} \\
          &= k \frac{x - x_p}{(x - x_p)^3 \frac{|\vec{r}_{s,0}|^3}{(x_0 - x_p)^3}} \\
          &= k \frac{(x_0 - x_p)^3}{(x - x_p)^2 |\vec{r}_{s,0}|^3}, \\
          \frac{dt}{dx} &= \frac{|\vec{r}_{s,0}|^3}{k(x_0 - x_p)^3} (x - x_p)^2, \\
          \int_0^t dt &= \frac{|\vec{r}_{s,0}|^3}{k(x_0 - x_p)^3} \int_{x_0}^x (x - x_p)^2 dx, \\
          t &= \frac{|\vec{r}_{s,0}|^3}{k(x_0 - x_p)^3} \left[\frac{1}{3} (x - x_p)^3\right]_{x_0}^x \\
          &= \frac{|\vec{r}_{s,0}|^3}{3k(x_0 - x_p)^3} \left((x - x_p)^3 - (x_0 - x_p)^3\right) \\
          &= \frac{|\vec{r}_{s,0}|^3}{3k(x_0 - x_p)^3} (x - x_p)^3 - \frac{|\vec{r}_{s,0}|^3}{3k}, \\
          \frac{|\vec{r}_{s,0}|^3}{3k(x_0 - x_p)^3} (x - x_p)^3 &= t + \frac{|\vec{r}_{s,0}|^3}{3k}, \\
          (x - x_p)^3 &= \frac{3k(x_0 - x_p)^3}{|\vec{r}_{s,0}|^3}t + (x_0 - x_p)^3, \\
          x - x_p &= \frac{x_0 - x_p}{|\vec{r}_{s,0}|} \sqrt[3]{3kt + |\vec{r}_{s,0}|^3}, \\
          x &= x_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{x_0 - x_p}{|\vec{r}_{s,0}|}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="y" />:</p>
      <BlockMath math="
        \begin{align*}
          y &= y_p \pm \frac{(\frac{x_0 - x_p}{|\vec{r}_{s,0}|} \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} + x_p - x_p) (y_0 - y_p)}{x_0 - x_p} \\
          &= y_p \pm \frac{\frac{x_0 - x_p}{|\vec{r}_{s,0}|} \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} (y_0 - y_p)}{x_0 - x_p} \\
          &= y_p \pm \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{y_0 - y_p}{|\vec{r}_{s,0}|}.
        \end{align*}
      "/>

      <p>Finally, substituting into the equation for <InlineMath math="z" />:</p>
      <BlockMath math="
        \begin{align*}
          z &= z_p + \frac{(x_p + \frac{x_0 - x_p}{|\vec{r}_{s,0}|} \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} - x_p) (z_0 - z_p)}{x_0 - x_p} \\
          &= z_p + \frac{\frac{x_0 - x_p}{|\vec{r}_{s,0}|} \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} (z_0 - z_p)}{x_0 - x_p} \\
          &= z_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{z_0 - z_p}{|\vec{r}_{s,0}|}.
        \end{align*}
      "/>

      <p>The parameterized coordinates are equal to (choosing the plus sign):</p>
      <BlockMath math="
        \begin{align*}
          x(t) &= x_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{x_0 - x_p}{|\vec{r}_{s,0}|}, \\
          y(t) &= y_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{y_0 - y_p}{|\vec{r}_{s,0}|}, \\
          z(t) &= z_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \frac{z_0 - z_p}{|\vec{r}_{s,0}|}.
        \end{align*}
      "/>

      <p>Or in vector form:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r}(t) &= \vec{r}_p + \sqrt[3]{3kt + |\vec{r}_{s,0}|^3} \hat{r}_{s,0}, \\
          \hat{r}_{s,0} &= \frac{\vec{r}_{s,0}}{|\vec{r}_{s,0}|}, \\
          \vec{r}_{s,0} &= \vec{r}_0 - \vec{r}_{p},
        \end{align*}
        " />
      <p>where <InlineMath math="\vec{r}_p" /> is the position vector of the source and <InlineMath math="\vec{r}_0" /> is the initial position vector.</p>
      <InverseSquareLawVectorField flowCurve={true} />

      <LinkH2 id="inverse-square-law-mutliple">Inverse Square Law For Mutliple Sources</LinkH2>
      <p>Let&apos;s modify the previous equation for <InlineMath math="i" />th source:</p>
      <BlockMath math="
        \begin{align*}
        \vec{r}_i(t) &= \vec{r}_{i,p} + \sqrt[3]{3 k_i t + |\vec{r}_{i,s,0}|^3} \hat{r}_{i,s,0}.
        \end{align*}
      " />

      <p>The total change in position is sum of changes due to each source:</p>
      <BlockMath math="
        \begin{align*}
          d\vec{r} &= \sum_i d\vec{r}_i, \\
          \frac{d\vec{r}}{dt} dt &= \sum_i \frac{d\vec{r}_i}{dt} dt, \\
          \int_0^t \frac{d\vec{r}}{dt} dt &= \sum_i \int_0^t \frac{d\vec{r}_i}{dt} dt, \\
          \vec{r}(t) - \vec{r}(0) &= \sum_i (\vec{r}_i(t) - \vec{r}_i(0)), \\
          \vec{r} &= \vec{r}_0 + \sum_i (\vec{r}_i(t) - \vec{r}_i(0)),
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r}_i(0) &= \vec{r}_{i,p} + \sqrt[3]{|\vec{r}_{i,s,0}|^3} \hat{r}_{i,s,0} \\
          &= \vec{r}_{i,p} + |\vec{r}_{i,s,0}| \hat{r}_{i,s,0} \\
          &= \vec{r}_{i,p} + \vec{r}_{i,s,0} \\
          &= \vec{r}_{i,p} + \vec{r}_0 - \vec{r}_{i,p} \\
          &= \vec{r}_0,
        \end{align*}
      " />

      <p>Substituting:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r} &= \vec{r}_0 + \sum_i (\vec{r}_i(t) - r_0) \\
          &= \vec{r}_0 + \sum_i \vec{r}_i(t) - \sum_i \vec{r}_0 \\
          &= \vec{r}_0 - N\vec{r}_0 + \sum_i \vec{r}_i(t) \\
          &= \vec{r}_0 (1 - N) + \sum_i \vec{r}_i(t).
        \end{align*}
      " />

      <p>Finally, the position vector, <InlineMath math="\vec{r}" />, parameterized by <InlineMath math="t" />, is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \vec{r}(t) &= \vec{r}_0(1 - N) + \sum_i \vec{r}_i(t), \\
          \vec{r}_i(t) &= \vec{r}_{i,p} + \sqrt[3]{3 k_i t + |\vec{r}_{i,s,0}|^3} \hat{r}_{i,s,0}, \\
          \hat{r}_{i,s,0} &= \frac{\vec{r}_{i,s,0}}{|\vec{r}_{i,s,0}|}, \\
          \vec{r}_{i,s,0} &= \vec{r}_0 - \vec{r}_{i,p},
        \end{align*}
      " />
      <p>where <InlineMath math="\vec{r}_{i,p}" /> is the position vector of <InlineMath math="i" />th source, <InlineMath math="\vec{r}_0" /> is the initial position vector and <InlineMath math="N" /> is the number of sources.</p>

      <InverseSquareLawTwoVectorField flowCurve={true} />
    </div>
  )
}
