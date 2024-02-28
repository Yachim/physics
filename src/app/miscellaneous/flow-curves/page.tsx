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
      <p>Given a vector field, <InlineMath math="\boldsymbol{F}(\boldsymbol{r})" /> parameterized by <InlineMath math="\boldsymbol{r}(t)" />, the tangent vector is equal to the vector field:</p>
      <BlockMath math="\frac{d\boldsymbol{r}(t)}{dt} = \boldsymbol{F}(\boldsymbol{r}(t))" />

      <p>For 2D coordinates, this would imply:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} \boldsymbol{\hat{x}} + \frac{dy}{dt} \boldsymbol{\hat{y}} &= F_x(x(t), y(t)) \boldsymbol{\hat{x}} + F_y(x(t), y(t)) \boldsymbol{\hat{y}}, \\[1.5ex]
          \frac{dx}{dt} &= F_x(x(t), y(t)), \\
          \frac{dy}{dt} &= F_y(x(t), y(t)).
        \end{align*}
      "/>

      <LinkH2 id="tangent-distance-origin">Vectors Tangent to the Distance From Origin</LinkH2>
      <p>Consider the following vector field:</p>
      <BlockMath math="\boldsymbol{F}(x, y) = -y \boldsymbol{\hat{x}} + x \boldsymbol{\hat{y}}" />
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
          \boldsymbol{F}(\boldsymbol{r}_s) &= \frac{k}{r_s^2} \boldsymbol{\hat{r}_s} \\
          &= k \frac{\boldsymbol{r}_s}{r_s^3},
        \end{align*}
      "/>
      <p>where <InlineMath math="k" /> is a constant.</p>
      <p>The vector <InlineMath math="\boldsymbol{r}_s" /> is the separation vector:</p>
      <BlockMath math="\boldsymbol{r}_s = \boldsymbol{r} - \boldsymbol{r}_p," />
      <p>where <InlineMath math="\boldsymbol{r}" /> is the current position that we are evaluating at and <InlineMath math="\boldsymbol{r}_p" /> is a constant position of the point creating the field.</p>

      <p>Converting to 3D cartesian coordinates:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{r}_s &= \boldsymbol{r} - \boldsymbol{r}_p \\
          &= (x - x_p) \boldsymbol{\hat{x}} + (y - y_p) \boldsymbol{\hat{y}} + (z - z_p) \boldsymbol{\hat{z}}, \\
          r_s &= \sqrt{(x - x_p)^2 + (y - y_p)^2 + (z - z_p)^2}, \\
          \boldsymbol{F}(x, y, z) &= k \frac{(x - x_p) \boldsymbol{\hat{x}} + (y - y_p) \boldsymbol{\hat{y}} + (z - z_p) \boldsymbol{\hat{z}}}{r_s^3} \\
          &= k \frac{x - x_p}{r_s^3} \boldsymbol{\hat{x}} + k \frac{y - y_p}{r_s^3} \boldsymbol{\hat{y}} + k \frac{z - z_p}{r_s^3} \boldsymbol{\hat{z}}.
        \end{align*}
      "/>
      <p>Separating into a system of differential equations:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= k \frac{x - x_p}{r_s^3}, \\
          \frac{dy}{dt} &= k \frac{y - y_p}{r_s^3}, \\
          \frac{dz}{dt} &= k \frac{z - z_p}{r_s^3}.
        \end{align*}
      "/>
      <p>In 2D, the <InlineMath math="z" /> coordinate is always zero for every object.</p>
      <InverseSquareLawVectorField flowCurve={false} />

      <p>Dividing the third equation by the second:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dz}{dy} &= \frac{z - z_p}{y - y_p}, \\
          \int_{z_0}^z \frac{dz}{z - z_p} &= \int_{y_0}^y \frac{dy}{y - y_p}, \\
          \left[\ln z - z_p|\right]_{z_0}^z &= \left[\ln |y - y_p|\right]_{y_0}^y, \\
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

      <p>Substituting into the equation for <InlineMath math="r" />:</p>
      <BlockMath math="
        \begin{align*}
          r &= \sqrt{(x - x_p)^2 + \left(y_p \pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p} - y_p\right)^2 + \left(z_p + \frac{(x - x_p) (z_0 - z_p)}{x_0 - x_p} - z_p\right)^2} \\
          &= \sqrt{(x - x_p)^2 + \left(\pm \frac{(x - x_p) (y_0 - y_p)}{x_0 - x_p}\right)^2 + \left(\frac{(x - x_p) (z_0 - z_p)}{x_0 - x_p}\right)^2} \\
          &= (x - x_p) \sqrt{1 + \frac{(y_0 - y_p)^2}{(x_0 - x_p)^2} + \frac{(z_0 - z_p)^2}{(x_0 - x_p)^2}} \\
          &= (x - x_p) \sqrt{\frac{(x_0 - x_p)^2 + (y_0 - y_p)^2 + (z_0 - z_p)^2}{(x_0 - x_p)^2}} \\
          &= (x - x_p) \frac{r_{s,0}}{x_0 - x_p}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="\frac{dx}{dt}" /> and solving:</p>
      <BlockMath math="
        \begin{align*}
          \frac{dx}{dt} &= k \frac{x - x_p}{\left((x - x_p) \frac{r_{s,0}}{x_0 - x_p}\right)^3} \\
          &= k \frac{x - x_p}{(x - x_p)^3 \frac{r_{s,0}^3}{(x_0 - x_p)^3}} \\
          &= k \frac{(x_0 - x_p)^3}{(x - x_p)^2 r_{s,0}^3}, \\
          \frac{dt}{dx} &= \frac{r_{s,0}^3}{k(x_0 - x_p)^3} (x - x_p)^2, \\
          \int_0^t dt &= \frac{r_{s,0}^3}{k(x_0 - x_p)^3} \int_{x_0}^x (x - x_p)^2 dx, \\
          t &= \frac{r_{s,0}^3}{k(x_0 - x_p)^3} \left[\frac{1}{3} (x - x_p)^3\right]_{x_0}^x \\
          &= \frac{r_{s,0}^3}{3k(x_0 - x_p)^3} \left((x - x_p)^3 - (x_0 - x_p)^3\right) \\
          &= \frac{r_{s,0}^3}{3k(x_0 - x_p)^3} (x - x_p)^3 - \frac{r_{s,0}^3}{3k}, \\
          \frac{r_{s,0}^3}{3k(x_0 - x_p)^3} (x - x_p)^3 &= t + \frac{r_{s,0}^3}{3k}, \\
          (x - x_p)^3 &= \frac{3k(x_0 - x_p)^3}{r_{s,0}^3}t + (x_0 - x_p)^3, \\
          x - x_p &= \frac{x_0 - x_p}{r_{s,0}} \sqrt[3]{3kt + r_{s,0}^3}, \\
          x &= x_p + \sqrt[3]{3kt + r_{s,0}^3} \frac{x_0 - x_p}{r_{s,0}}.
        \end{align*}
      "/>

      <p>Substituting into the equation for <InlineMath math="y" />:</p>
      <BlockMath math="
        \begin{align*}
          y &= y_p \pm \frac{(\frac{x_0 - x_p}{r_{s,0}} \sqrt[3]{3kt + r_{s,0}^3} + x_p - x_p) (y_0 - y_p)}{x_0 - x_p} \\
          &= y_p \pm \frac{\frac{x_0 - x_p}{r_{s,0}} \sqrt[3]{3kt + r_{s,0}^3} (y_0 - y_p)}{x_0 - x_p} \\
          &= y_p \pm \sqrt[3]{3kt + r_{s,0}^3} \frac{y_0 - y_p}{r_{s,0}}.
        \end{align*}
      "/>

      <p>Finally, substituting into the equation for <InlineMath math="z" />:</p>
      <BlockMath math="
        \begin{align*}
          z &= z_p + \frac{(x_p + \frac{x_0 - x_p}{r_{s,0}} \sqrt[3]{3kt + r_{s,0}^3} - x_p) (z_0 - z_p)}{x_0 - x_p} \\
          &= z_p + \frac{\frac{x_0 - x_p}{r_{s,0}} \sqrt[3]{3kt + r_{s,0}^3} (z_0 - z_p)}{x_0 - x_p} \\
          &= z_p + \sqrt[3]{3kt + r_{s,0}^3} \frac{z_0 - z_p}{r_{s,0}}.
        \end{align*}
      "/>

      <p>The parameterized coordinates are equal to (choosing the plus sign):</p>
      <BlockMath math="
        \begin{align*}
          x(t) &= x_p + \sqrt[3]{3kt + r_{s,0}^3} \frac{x_0 - x_p}{r_{s,0}}, \\
          y(t) &= y_p + \sqrt[3]{3kt + r_{s,0}^3} \frac{y_0 - y_p}{r_{s,0}}, \\
          z(t) &= z_p + \sqrt[3]{3kt + r_{s,0}^3} \frac{z_0 - z_p}{r_{s,0}}.
        \end{align*}
      "/>

      <p>Or in vector form:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{r}(t) &= \boldsymbol{r}_p + \sqrt[3]{3kt + r_{s,0}^3} \boldsymbol{\hat{r}_{s,0}}, \\
          \boldsymbol{\hat{r}_{s,0}} &= \frac{\boldsymbol{r}_{s,0}}{r_{s,0}}, \\
          \boldsymbol{r}_{s,0} &= \boldsymbol{r}_0 - \boldsymbol{r}_{p},
        \end{align*}
        " />
      <p>where <InlineMath math="\boldsymbol{r}_p" /> is the position vector of the source and <InlineMath math="\boldsymbol{r}_0" /> is the initial position vector.</p>
      <InverseSquareLawVectorField flowCurve={true} />
    </div>
  )
}
