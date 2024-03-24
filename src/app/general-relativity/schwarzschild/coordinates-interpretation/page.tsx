import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2, LinkH3 } from "@/components/LinkHeadings";
import { PerpendicularDistanceCalculator, TimeDilationCalculator } from "./components";
import Image from "next/image";
import getConfig from "next/config";

export const metadata: Metadata = {
  title: "Interpretation of the Schwarzschild Coordinates"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/schwarzschild">Back</Link>
      <h1>Interpretation of the Schwarzschild Coordinates</h1>
      <p>The metric is in the form:</p>
      <BlockMath math="ds^2 = -\left(1 - \frac{2}{r}\right) dt^2 + \left(1 - \frac{2}{r}\right)^{-1} dr^2 + r^2 d\phi^2." />

      <LinkH2 id="time-dilation-constant-position">Time Dilation for Constant Position</LinkH2>
      <p>For constant <InlineMath math="(r, \theta, \phi)"/> the metric reduces to:</p>
      <BlockMath math="ds^2 = -\left(1 - \frac{2}{r}\right) dt^2." />

      <p>For timelike paths, this is equal to the negative proper time <InlineMath math="\tau"/>:</p>
      <BlockMath math="
        \begin{align*}
          -d\tau^2 &= -\left(1 - \frac{2}{r}\right) dt^2, \\
          d\tau^2 &= \left(1 - \frac{2}{r}\right) dt^2, \\
          d\tau &= \sqrt{1 - \frac{2}{r}} dt, \\
          \int_0^{\tau} d\tau &= \sqrt{1 - \frac{2}{r}} \int_0^t dt, \\
          \tau &= \sqrt{1 - \frac{2}{r}} t. \\
        \end{align*}
      " />

      <p>Below is a table evaluating the time dilation at different <InlineMath math="r"/> coordinates:</p>
      <table>
        <colgroup>
          <col className="w-1/2"/>
          <col className="w-1/2"/>
        </colgroup>
        <tbody>
          <tr>
            <th><InlineMath math="\boldsymbol{r}"/></th>
            <th><InlineMath math="\boldsymbol{\tau}"/></th>
          </tr>
          <tr>
            <th><InlineMath math="r_s"/></th>
            <th><InlineMath math="0"/></th>
          </tr>
          <tr>
            <th><InlineMath math="2r_s"/></th>
            <th><InlineMath math="\approx 0.71t"/></th>
          </tr>
          <tr>
            <th><InlineMath math="\infty"/></th>
            <th><InlineMath math="t"/></th>
          </tr>
        </tbody>
      </table>

      <LinkH3 id="time-dilation-calculator">Time Dilation Calculator</LinkH3>
      <TimeDilationCalculator/>

      <LinkH2 id="proper-length-radius">Proper Length - Radius</LinkH2>
      <p>For proper length, we will take <InlineMath math="t, \theta, \phi" /> to be constant. The path will be a straight line from the center. The metric simplifies:</p>
      <BlockMath math="ds^2 = \left(1 - \frac{2}{r}\right)^{-1} dr^2." />

      <p>For spacelike paths, this is equal to the proper length:</p>
      <BlockMath math="
        \begin{align*}
          dL_0{}^2 &= \left(\frac{r - 2}{r}\right)^{-1} dr^2, \\
          dL_0 &= \sqrt{\frac{r}{r - 2}} dr, \\
          \int_0^{L_0} dL_0 &= \int_{r_0}^r \sqrt{\frac{r}{r - 2}} dr, \\
          L_0 &= \int_{r_0}^r \sqrt{\frac{r}{r - 2}} dr, \\
          r &= u^2, \\
          dr &= 2u\ du, \\
          u &= \sqrt{r}, \\
          L_0 &= \int_{\sqrt{r_0}}^{\sqrt{r}} \sqrt{\frac{u^2}{u^2 - 2}} 2u\ du \\
          &= 2 \int_{\sqrt{r_0}}^{\sqrt{r}} \frac{u^2}{\sqrt{u^2 - 2}} du, \\
          u &= \sqrt{2} y, \\
          du &= \sqrt{2}\ dy, \\
          y &= \frac{u}{\sqrt{2}}, \\
          L_0 &= 2 \int_{\sqrt{\frac{r_0}{2}}}^{\sqrt{\frac{r}{2}}} \frac{2y^2}{\sqrt{2y^2 - 2}} \sqrt{2}\ dy \\
          &= 4 \int_{\sqrt{\frac{r_0}{2}}}^{\sqrt{\frac{r}{2}}} \frac{y^2}{\sqrt{2} \sqrt{y^2 - 1}} \sqrt{2}\ dy \\
          &= 4 \int_{\sqrt{\frac{r_0}{2}}}^{\sqrt{\frac{r}{2}}} \frac{y^2}{\sqrt{y^2 - 1}} dy, \\
          y &= \cosh \alpha, \\
          dy &= \sinh \alpha\ d\alpha, \\
          \alpha &= \cosh^{-1} y, \\
          L_0 &= 4 \int_{\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{\cosh^{-1} \sqrt{\frac{r}{2}}} \frac{\cosh^2 {\alpha}}{\sqrt{\cosh^2 \alpha - 1}} \sinh \alpha\ d\alpha \\
          &= 4 \int_{\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{\cosh^{-1} \sqrt{\frac{r}{2}}} \cosh^2 {\alpha}\ d\alpha \\
          &= 4 \int_{\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{\cosh^{-1} \sqrt{\frac{r}{2}}} \frac{\cosh 2\alpha + 1}{2} d\alpha \\
          &= \int_{\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{\cosh^{-1} \sqrt{\frac{r}{2}}} 2 (\cosh 2\alpha + 1)\ d\alpha, \\
          \beta &= 2 \alpha, \\
          d\beta &= 2\ d\alpha, \\
          L_0 &= \int_{2\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{2\cosh^{-1} \sqrt{\frac{r}{2}}} (\cosh \beta + 1)\ d\beta \\
          &= \left[\sinh \beta + \beta\right]_{2\cosh^{-1} \sqrt{\frac{r_0}{2}}}^{2\cosh^{-1} \sqrt{\frac{r}{2}}}. \\
        \end{align*}
      " />

      <p>The magnitude of <InlineMath math="r" /> is smaller than the proper length. Below is a plot of the proper length:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/proper-length.svg`}
          width={350}
          height={350}
          alt="Proper length plot"
        />
      </div>

      <p>The function is approximately linear at a distance further away from the object.</p>

      <LinkH3 id="proper-length-radius-calculator">Proper Length Radius Calculator</LinkH3>
      <PerpendicularDistanceCalculator/>

      <LinkH2 id="proper-length-circumference">Proper Length - Circumference</LinkH2>
      <p>For the proper length of circumference, we will take <InlineMath math="t, r, \theta" /> to be constant. The metric simplifies:</p>
      <BlockMath math="ds^2 = r^2 d\phi^2." />

      <p>As for the radius, this is equal to the proper length:</p>
      <BlockMath math="
        \begin{align*}
          dL_0{}^2 &= r^2 d\phi^2, \\
          dL_0 &= r d\phi, \\
          \int_0^{L_0} dL_0 &= r \int_{0}^{2 \pi} d\phi, \\
          L_0 &= 2 \pi r.
        \end{align*}
      " />

      <p>The <InlineMath math="r" /> coordinate accurately gives the proper length of the circumference. But for the distance from the center the proper length is longer the closer an observer is to the object.</p>

      <LinkH2 id="flamms-paraboloid">Flamm&apos;s Paraboloid</LinkH2>
      <p>We will take constant <InlineMath math="t, \theta" />. The metric is in the form:</p>
      <BlockMath math="ds^2 = \left(1 - \frac{2}{r}\right)^{-1} dr^2 + r^2 d\phi^2." />

      <p>We will begin by considering the cylindrical coordinates:</p>
      <BlockMath math="
        \begin{align*}
          ds^2 &= dr^2 + r^2 d\phi^2 + dz^2, \\
          ds^2 &= \left(\left(\frac{dz}{dr}\right)^2 + 1\right) dr^2 + r^2 d\phi^2,
        \end{align*}
      " />

      <p>and make the line elements equal and solve for <InlineMath math="z" />:</p>
      <BlockMath math="
        \begin{align*}
          \left(1 - \frac{2}{r}\right)^{-1} dr^2 + r^2 d\phi^2 &= \left(\left(\frac{dz}{dr}\right)^2 + 1\right) dr^2 + r^2 d\phi^2, \\
          \left(\frac{r - 2}{r}\right)^{-1} dr^2 &= \left(\left(\frac{dz}{dr}\right)^2 + 1\right) dr^2, \\
          \left(\frac{dz}{dr}\right)^2 + 1 &= \frac{r}{r - 2}, \\
          \left(\frac{dz}{dr}\right)^2 &= \frac{r}{r - 2} - 1 \\
          &= \frac{2}{r - 2}, \\
          \frac{dz}{dr} &= \sqrt{\frac{2}{r - 2}}, \\
          \int_{z_0}^z dz &= \int_{r_0}^r \sqrt{\frac{2}{r - 2}} dr, \\
          z - z_0 &= 2 \sqrt{2} [\sqrt{r - 2}]_{r_0}^r, \\
          z &= 2 \sqrt{2} [\sqrt{r - 2}]_{r_0}^r + z_0, \\
        \end{align*}
      " />

      <p>where <InlineMath math="z_0" /> is the <InlineMath math="z" /> when <InlineMath math="r = r_0" />. This is the equation for the Flamm&apos;s paraboloid:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/flamms-paraboloid.png`}
          width={700}
          height={700}
          alt="Flamm's paraboloid render"
          unoptimized
        />
      </div>
      <p>here, <InlineMath math="r_0 = 2"/> and <InlineMath math="z_0 = 0"/>.</p>

      <LinkH2 id="singularities">Singularities</LinkH2>
      <p>There are two singularities. The first one is in the <InlineMath math="g_{11}" /> component when <InlineMath math="r \to r_s^+" />:</p>
      <BlockMath math="
        \begin{align*}
          \lim_{r \to r_s^+} g_{11} &= \lim_{r \to 2^+} \left(1 - \frac{2}{r}\right)^{-1} \\
          &= \lim_{r \to 2^+} \frac{r}{r - 2} = \infty,
        \end{align*}
      " />

      <p>this is a coordinate singularity. We can get rid of it by changing coordinates. The other singularity is in the <InlineMath math="g_{00}" /> copmonent as <InlineMath math="r \to 0^+" />:</p>
      <BlockMath math="
        \begin{align*}
          \lim_{r \to 0^+} g_{00} &= \lim_{r \to 0^+} - \left(1 - \frac{2}{r}\right) \\
          &= \lim_{r \to 0^+} \frac{2 - r}{r} = \infty,
        \end{align*}
      " />
      <p>this, unfortunately, is a true singularity and at this point general relativity stops making sense.</p>
    </div>
  )
}
