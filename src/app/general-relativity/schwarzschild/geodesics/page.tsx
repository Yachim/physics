import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2, LinkH3, LinkH4 } from "@/components/LinkHeadings";
import Image from "next/image";
import getConfig from "next/config";
import { NewtonianOrbitPredictor } from "./components";

export const metadata: Metadata = {
  title: "Geodesics"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/schwarzschild">Back</Link>
      <h1>Geodesics</h1>
      <p>The metric and geodesic equations are in the form:</p>
      <BlockMath math="
        \begin{align*}
          ds^2 = -\left(1 - \frac{2}{r}\right) dt^2 + \left(1 - \frac{2}{r}\right)^{-1} dr^2 + r^2 d\phi^2, \\
          \frac{d^2 t}{d\lambda^2} + \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda} &= 0, \\
          \frac{d^2 r}{d\lambda^2} + \frac{r - 2}{r^3} \left(\frac{dt}{d\lambda}\right)^2 - \frac{1}{r(r - 2)} \left(\frac{dr}{d\lambda}\right)^2 - (r - 2) \left(\frac{d\phi}{d\lambda}\right)^2 &= 0, \\
          \frac{d^2 \phi}{d\lambda^2} + \frac{2}{r} \frac{dr}{d\lambda} \frac{d\phi}{d\lambda} &= 0.
        \end{align*}
      "/>

      <LinkH2 id="lightlike-geodesics">Lightlike Geodesics</LinkH2>
      <p>For incoming lightlike geodesics, we will take <InlineMath math="\theta, \phi" /> to be constant. The metric and geodesic equations simplify:</p>
      <BlockMath math="
        \begin{align*}
          ds^2 = -\left(1 - \frac{2}{r}\right) dt^2 + \left(1 - \frac{2}{r}\right)^{-1} dr^2, \\
          \frac{d^2 t}{d\lambda^2} + \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda} &= 0, \\
          \frac{d^2 r}{d\lambda^2} + \frac{r - 2}{r^3} \left(\frac{dt}{d\lambda}\right)^2 - \frac{1}{r(r - 2)} \left(\frac{dr}{d\lambda}\right)^2 &= 0. \\
        \end{align*}
      "/>

      <p>I will not be using the geodesic equations. I will instead be using the metric which is equal to zero for lightlike intervals:</p>
      <BlockMath math="
        \begin{align*}
          0 = -\left(1 - \frac{2}{r}\right) dt^2 &+ \left(1 - \frac{2}{r}\right)^{-1} dr^2, \\
          \left(\frac{r - 2}{r}\right) dt^2 &= \left(\frac{r - 2}{r}\right)^{-1} dr^2, \\
          dt^2 &= \left(\frac{r}{r - 2}\right)^2 dr^2, \\
          dt &= \pm \frac{r}{r - 2} dr, \\
          \int_0^t dt &= \pm \int_{r_0}^r \frac{r}{r - 2} dr, \\
          t &= \pm \int_{r_0}^r \frac{r}{r - 2} dr \\
          &= \pm \int_{r_0}^r \frac{r - 2 + 2}{r - 2} dr \\
          &= \pm \int_{r_0}^r \left(1 + \frac{2}{r - 2}\right) dr \\
          &= \pm \left[r + 2 \ln (r - 2)\right]_{r_0}^r, \\
        \end{align*}
      "/>
      <p>this applies outside the event horizon. For the inside, the expression is equal to:</p>
      <BlockMath math="
        \begin{align*}
          t &= \pm \int_{r_0}^r \frac{r}{r - 2} dr \\
          &= \pm \int_{r_0}^r \frac{- r}{2 - r} dr \\
          &= \pm \int_{r_0}^r \frac{2 - r - 2}{2 - r} dr \\
          &= \pm \int_{r_0}^r \left(1 - \frac{2}{2 - r}\right) dr \\
          &= \pm \int_{r_0}^r -\left(- 1 + \frac{2}{2 - r}\right) dr, \\
          u &= 2 - r, \\
          du &= -dr, \\
          t &= \pm \int_{2 - r_0}^{2 - r} \left(- 1 + \frac{2}{u}\right) du \\
          &= \pm \left[-u + 2 \ln u\right]_{2 - r_0}^{2 - r} \\
          &= \pm \left[-2 + r + 2 \ln (2 -r)\right]_{r_0}^r \qquad \textrm{constants cancel in definite integrals} \\
          &= \pm \left[r + 2 \ln (2 -r)\right]_{r_0}^r. \\
        \end{align*}
      "/>

      <p>For incoming geodesics the sign is <InlineMath math="-" />. For outgoing geodesics, the sign is <InlineMath math="+" />. Below is a plot of the geodesics where green are incoming geodesics and red are outgoing:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/lightlike-geodesics.svg`}
          width={700}
          height={700}
          alt="Lightlike geodesics"
        />
      </div>

      <p>When <InlineMath math="r > 2" />:</p>
      <BlockMath math="
        \begin{align*}
          g_{00} &= - \left(1 - \frac{2}{r}\right) < 0, \\
          g_{11} &= \left(1 - \frac{2}{r}\right)^{-1} > 0,
        \end{align*}
      " />

      <p>meaning the <InlineMath math="t" /> coordinate is timelike and the <InlineMath math="r" /> coordinate is spacelike. When <InlineMath math="r \to 2" />:</p>
      <BlockMath math="
        \begin{align*}
          g_{00} &= - \left(1 - \frac{2}{r}\right) = 0, \\
          g_{11} &= \left(1 - \frac{2}{r}\right)^{-1} \to \infty,
        \end{align*}
      " />

      <p>meaning the <InlineMath math="t" /> coordinate is lightlike and the <InlineMath math="r" /> coordinate is undefined (<b>only in this coordinate system</b>). When <InlineMath math="r < 2" />:</p>
      <BlockMath math="
        \begin{align*}
          g_{00} &= - \left(1 - \frac{2}{r}\right) > 0, \\
          g_{11} &= \left(1 - \frac{2}{r}\right)^{-1} < 0,
        \end{align*}
      " />

      <p>meaning the <InlineMath math="t" /> coordinate is spacelike and the <InlineMath math="r" /> coordinate is timelike. Below is the same plot with lightcones:</p>

      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/lightlike-geodesics2.svg`}
          width={700}
          height={700}
          alt="Lightlike geodesics with light cones"
        />
      </div>

      <LinkH2 id="constants-of-motion">Constants of Motion</LinkH2>
      <p>There are two constants of motion. The first can be derived from the <InlineMath math="t" /> geodesic equation:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 t}{d\lambda^2} + \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda} &= 0, \qquad \frac{dt}{d\lambda} = U^0, \\
          \frac{dU^0}{d\lambda} + \frac{2}{r(r - 2)} \frac{dr}{d\lambda} U^0 &= 0, \\
          \frac{1}{U^0} dU^0 + \frac{2}{r(r - 2)} dr &= 0, \\
          \int \frac{1}{U^0} dU^0 + \int \frac{2}{r(r - 2)} dr &= C, \\
          \ln U^0 + \int \left(\frac{1}{r - 2} - \frac{1}{r}\right) dr &= C, \\
          \ln U^0 + \ln (r - 2) - \ln(r) &= C, \\
          \ln \left(U^0 \frac{r - 2}{r}\right) &= C, \\
          U^0 \frac{r - 2}{r} &= e^C,
        \end{align*}
      "/>

      <p>the constant on the right side is the energy per unit mass <InlineMath math="\mathcal{E} = \frac{E}{m}" />:</p>
      <BlockMath math="\mathcal{E} = \frac{dt}{d\lambda} \left(1 - \frac{2}{r}\right)."/>

      <p>The other constant of motion can be derived from the <InlineMath math="\phi" /> geodesic equation:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 \phi}{d\lambda^2} + \frac{2}{r} \frac{dr}{d\lambda} \frac{d\phi}{d\lambda} &= 0, \qquad \frac{d\phi}{d\lambda} = U^3, \\
          \frac{dU^3}{d\lambda} + \frac{2}{r} \frac{dr}{d\lambda} U^3 &= 0, \\
          \frac{1}{U^3} dU^3 + \frac{2}{r} dr &= 0, \\
          \int \frac{1}{U^3} dU^3 + \int \frac{2}{r} dr &= C, \\
          \ln U^3 + 2\ln r &= C, \\
          \ln (U^3 r^2) &= C, \\
          U^3 r^2 &= e^C, \\
        \end{align*}
      "/>

      <p>the constant on the right side is the angular momentum per unit mass <InlineMath math="\mathcal{L} = \frac{L}{m}" />:</p>
      <BlockMath math="\mathcal{L} = \frac{d\phi}{d\lambda} r^2." />

      <p>Taking the limit as <InlineMath math="r \to \infty" /> for <InlineMath math="\mathcal{E}" />, we recover time component of 4-momentum in flat space (taking <InlineMath math="\lambda = \tau" />):</p>
      <BlockMath math="
        \begin{align*}
          \lim_{r \to \infty} \frac{E}{m} &= \lim_{r \to \infty} \frac{dt}{d\lambda} \left(1 - \frac{2}{r}\right) \\
          &= \frac{dt}{d\lambda} \\
          &= \gamma, \\
          E &\to \gamma m.
        \end{align*}
      " />

      <LinkH2 id="length-of-a-tangent-vector">Length of a Tangent Vector</LinkH2>
      <LinkH3 id="newtonian-orbits">Newtonian Orbits</LinkH3>
      <p>Consider an orbit where <InlineMath math="\theta = \frac{\pi}{2}" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/newtonian-orbits.svg`}
          width={500}
          height={500}
          alt="Newtonian orbit"
        />
      </div>
      <p>where <InlineMath math="v_r = \frac{dr}{dt}" /> and <InlineMath math="v_{perp} = r \frac{d\phi}{dt}" />. The total energy is equal to:</p>
      <BlockMath math="
        \begin{align*}
          E &= \frac{1}{2} m v^2 - G \frac{Mm}{r} \\
          &= \frac{1}{2} m \left[\left(\frac{dr}{dt}\right)^2 + r^2 \left(\frac{d\phi}{dt}\right)^2\right] - G\frac{Mm}{r} \\
          &= \frac{1}{2} m \left(\frac{dr}{dt}\right)^2 + \frac{1}{2} m r^2 \left(\frac{d\phi}{dt}\right)^2 - G\frac{Mm}{r} \\
          &= \frac{1}{2} m \left(\frac{dr}{dt}\right)^2 + \frac{1}{2 m r^2} m^2 r^4 \left(\frac{d\phi}{dt}\right)^2 - G\frac{Mm}{r} \\
          &= \frac{1}{2} m \left(\frac{dr}{dt}\right)^2 + \frac{L^2}{2 m r^2} - G\frac{Mm}{r} \\
          &= \frac{1}{2} m \left(\frac{dr}{dt}\right)^2 + U_{eff}(r),
        \end{align*}
      " />
      <p>where <InlineMath math="U_{eff}(r) = \frac{L^2}{2 m r^2} - G\frac{Mm}{r} = \frac{L^2}{2 m r^2} - \frac{m}{r}" /> (using geometrized units) is the effective potential energy and <InlineMath math="L = m r^2 \frac{d\phi}{dt}" /> is the angular momentum. Below is a plot for the potential energy where <InlineMath math="G = M = m = 1" />. Green curve is for <InlineMath math="L = 0" />, blue is for <InlineMath math="L = 0.5" />, red is for <InlineMath math="L = 0.75" /> and orange is for <InlineMath math="L = 1" />.</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/newtonian-potentials.svg`}
          width={500}
          height={500}
          alt="Newtonian potentials"
        />
      </div>

      <p>Plotting the case where <InlineMath math="L = 0.5" />, we can see two different energy levels:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/schwarzschild/newtonian-potentials2.svg`}
          width={500}
          height={500}
          alt="Newtonian potential with energy"
        />
      </div>

      <p>The body will always have the potential energy less than or equal the total energy (as shown by the pink line for <InlineMath math="E_2" />). <InlineMath math="E_1" /> is circular orbit where kinetic energy is always zero and so the radial velocity <InlineMath math="\frac{dr}{dt}" />. <InlineMath math="E_2" /> is elliptical orbit and is oscillating between two values for <InlineMath math="r" />. <InlineMath math="E_3" /> flies away towards infinity.</p>

      <p>The energy and angular momentum stay constant. They are given by initial distance <InlineMath math="r_0" />, initial radial velocity <InlineMath math="v_0" /> and initial angular velocity <InlineMath math="\omega_0" />:</p>
      <BlockMath math="
        \begin{align*}
          L &= m r_0^2 \omega_0, \\
          E &= \frac{1}{2} m v_0^2 + U_{eff}(r_0).
        \end{align*}
      " />

      <p>Every orbit has one or two points where <InlineMath math="\frac{dr}{dt} = 0" /> (or everywhere for circular orbit). We can solve for these:</p>
      <BlockMath math="
        \begin{align*}
          E &= \frac{L^2}{2 m r^2} - \frac{m}{r}, \\
          0 &= \frac{L^2}{2 m r^2} - \frac{m}{r} - E, \\
          0 &= -E r^2 - mr + \frac{L^2}{2 m}, \\
          D &= (-m)^2 - 4(-E)\frac{L^2}{2 m} \\
          &= m^2 + 2\frac{E L^2}{m}, \\
          r &= \frac{-(-m) \pm \sqrt{D}}{2(-E)} \\
          &= -\frac{m \pm \sqrt{D}}{2E}.
        \end{align*}
      " />

      <p>If the discriminant <InlineMath math="D" /> is equal to zero, the orbit is either circular. Otherwise the orbit is elliptic, parabolic or hyperbolic. Solving for energy when <InlineMath math="D = 0" />:</p>
      <BlockMath math="
        \begin{align*}
          0 &= m^2 + 2\frac{E L^2}{m}, \\
          2\frac{E L^2}{m} &= -m^2, \\
          E &= -\frac{m^3}{2L^2}, \\
        \end{align*}
      " />
      <p>and substituting into the equation for <InlineMath math="r" />:</p>
      <BlockMath math="
        \begin{align*}
          r &= \frac{L^2}{m^2},
        \end{align*}
      " />

      <p>or if given radius, we can solve for angular velocity:</p>
      <BlockMath math="
        \begin{align*}
          r &= \frac{m^2 r^4}{m^2} \left(\frac{d\phi}{dt}\right)^2, \\
          \left(\frac{d\phi}{dt}\right)^2 &= \frac{1}{r^3}, \\
          \frac{d\phi}{dt} &= \pm \frac{1}{r\sqrt{r}}, \\
          v_{perp} &= \pm \frac{1}{\sqrt{r}}.
        \end{align*}
      " />

      <LinkH4 id="newtonian-orbit-predictor">Newtonian Orbit Predictor</LinkH4>
      <p>Note: these are only approximations.</p>
      <NewtonianOrbitPredictor/>
      
      <LinkH3 id="relativistic-orbits">Relativistic Orbits</LinkH3>
      <p>Consider a path parametrized by <InlineMath math="\lambda" />, the length of the tangent vector is equal to:</p>
      <BlockMath math="\epsilon = -\left(1 - \frac{2}{r}\right) \left(\frac{dt}{d\lambda}\right)^2 + \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{d\phi}{d\lambda}\right)^2," />
      <p>where <InlineMath math="\epsilon" /> is:</p>
      <BlockMath math="
        \begin{align*}
          \epsilon &< 0, & &\textrm{for time-like geodesics}, \\
          \epsilon &= 0, & &\textrm{for light-like geodesics}, \\
          \epsilon &> 0, & &\textrm{for space-like geodesics},
        \end{align*}
      " />
      <p>but I will not be considering space-like geodesics.</p>

      <p>Substiting the constants of motion equation for <InlineMath math="\epsilon" />:</p>
      <BlockMath math="
        \begin{align*}
          \epsilon &= -\left(1 - \frac{2}{r}\right) \left(\frac{\mathcal{E}}{1 - \frac{2}{r}}\right)^2 + \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{\mathcal{L}}{r^2}\right)^2, \\
          \epsilon &= -\frac{r}{r - 2} \mathcal{E}^2 + \frac{r}{r - 2} \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2}, \\
          0 &= -\frac{r}{r - 2} \mathcal{E}^2 + \frac{r}{r - 2} \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \epsilon, \\
          0 &= - \mathcal{E}^2 + \left(\frac{dr}{d\lambda}\right)^2 + \frac{r - 2}{r} \frac{\mathcal{L}^2}{r^2} - \frac{r - 2}{r} \epsilon, \\
          0 &= - \mathcal{E}^2 + \left(\frac{dr}{d\lambda}\right)^2 - \left(1 - \frac{2}{r}\right) \left(\frac{\mathcal{L}^2}{r^2} - \epsilon\right), \\
          \mathcal{E}^2 &= \left(\frac{dr}{d\lambda}\right)^2 - \left(1 - \frac{2}{r}\right) \left(\frac{\mathcal{L}^2}{r^2} - \epsilon\right), \\
          &= \left(\frac{dr}{d\lambda}\right)^2 - \left(\frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} + \frac{2}{r} \epsilon - \epsilon\right), \\
          &= \left(\frac{dr}{d\lambda}\right)^2 - \frac{\mathcal{L}^2}{r^2} + \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} \epsilon + \epsilon,
        \end{align*}
      " />

      <LinkH4 id="timelike-geodesics">Timelike Geodesics</LinkH4>
      <p>For timelike geodesics, <InlineMath math="\lambda = \tau" /> and <InlineMath math="\epsilon = -1" />:</p>
      <BlockMath math="
        \begin{align*}
          \mathcal{E}^2 &= \left(\frac{dr}{d\tau}\right)^2 - \frac{\mathcal{L}^2}{r^2} + \frac{2\mathcal{L}^2}{r^3} + \frac{2}{r} - 1, \\
          \left(\frac{E}{m}\right)^2 &= \left(\frac{dr}{d\tau}\right)^2 - \frac{L^2}{m^2 r^2} + \frac{2 L^2}{m^2 r^3} + \frac{2}{r} - 1, \\
          \frac{1}{2} m \left(\frac{E}{m}\right)^2 &= \frac{1}{2} m \left(\frac{dr}{d\tau}\right)^2 - \frac{L^2}{2 m r^2} + \frac{L^2}{m r^3} + \frac{m}{r} - \frac{m}{2}, \\
          \frac{1}{2} \left(\frac{E^2}{m} + m\right) &= \frac{1}{2} m \left(\frac{dr}{d\tau}\right)^2 - \frac{L^2}{2 m r^2} + \frac{L^2}{m r^3} + \frac{m}{r} \\
          &= \frac{1}{2} m \left(\frac{dr}{d\tau}\right)^2 - \left(\frac{L^2}{2 m r^2} - \frac{m}{r} - \frac{L^2}{m r^3}\right).
        \end{align*}
      " />

      <p>Comparing with the newtonian potential equation, we can see the difference on the left side and the difference between potentials on the right side:</p>
      <BlockMath math="
        \begin{align*}
          E &= \frac{1}{2} m \left(\frac{dr}{dt}\right)^2 + \left(\frac{L^2}{2 m r^2} - \frac{m}{r}\right), \\
        \end{align*}
      " />

      <p>Converting to SI units:</p>
      <BlockMath math="
        \begin{align*}
        \end{align*}
      " />
    </div>
  )
}