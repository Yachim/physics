import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";
import { TimelikeGeodesics } from "./components";

export const metadata: Metadata = {
  title: "Geodesics Simulation"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Geodesics Simulation</h1>
        <p>The metric and geodesic equations are in the form:</p>
        <BlockMath math="
            \begin{align*}
                ds^2 = -\left(1 - \frac{2}{r}\right) dt^2 + \left(1 - \frac{2}{r}\right)^{-1} dr^2 + r^2 d\phi^2, \\
                \frac{d^2 t}{d\lambda^2} + \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda} &= 0, \\
                \frac{d^2 r}{d\lambda^2} + \frac{r - 2}{r^3} \left(\frac{dt}{d\lambda}\right)^2 - \frac{1}{r(r - 2)} \left(\frac{dr}{d\lambda}\right)^2 - (r - 2) \left(\frac{d\phi}{d\lambda}\right)^2 &= 0, \\
                \frac{d^2 \phi}{d\lambda^2} + \frac{2}{r} \frac{dr}{d\lambda} \frac{d\phi}{d\lambda} &= 0,
            \end{align*}
        "/>

        <p>implying:</p>
        <BlockMath math="
            \begin{align*}
                \frac{d^2 t}{d\lambda^2} &= - \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda}, \\
                \frac{d^2 r}{d\lambda^2} &= -\frac{r - 2}{r^3} \left(\frac{dt}{d\lambda}\right)^2 + \frac{1}{r(r - 2)} \left(\frac{dr}{d\lambda}\right)^2 + (r - 2) \left(\frac{d\phi}{d\lambda}\right)^2, \\
                \frac{d^2 \phi}{d\lambda^2} &= -\frac{2}{r} \frac{dr}{d\lambda} \frac{d\phi}{d\lambda},
            \end{align*}
        "/>

        <p>which can be solved using the Euler method:</p>
        <BlockMath math="
            \begin{align*}
                U^t_n &= U^t_{n - 1} - h \frac{2}{r_{n - 1}(r_{n - 1} - 2)} U^t_{n - 1} U^r_{n - 1}, \\
                U^r_n &= U^r_{n - 1} + h \left[- \frac{r_{n - 1} - 2}{(r_{n - 1})^3} \left(U^t_{n - 1}\right)^2 + \frac{1}{r_{n - 1}(r_{n - 1} - 2)} \left(U^r_{n - 1}\right)^2 + (r_{n - 1} - 2) \left(U^{\phi}_{n - 1}\right)^2\right], \\
                U^{\phi}_n &= U^{\phi}_{n - 1} - h \frac{2}{r_{n - 1}} U^r_{n - 1} U^{\phi}_{n - 1}, \\[4ex]
                t_n &= t_{n - 1} + h U^t_{n - 1}, \\
                r_n &= r_{n - 1} + h U^r_{n - 1}, \\
                \phi_n &= \phi_{n - 1} + h U^{\phi}_{n - 1},
            \end{align*}
        "/>
        <p>where <InlineMath math="h"/> is a small step and <InlineMath math="U^{\mu} = \frac{dx^{\mu}}{d\lambda}"/>.</p>

        <p>From the <Link href="/general-relativity/schwarzschild/geodesics#relativistic-orbits">geodesics chapter</Link>, the length of a tangent vector is given by:</p>
        <BlockMath math="\epsilon = -\left(1 - \frac{2}{r}\right) \left(\frac{dt}{d\lambda}\right)^2 + \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{d\phi}{d\lambda}\right)^2," />
        <p>where <InlineMath math="\epsilon" /> is:</p>
        <BlockMath math="
            \begin{align*}
            \epsilon &< 0, & &\textrm{for timelike geodesics}, \\
            \epsilon &= -1, & &\textrm{for timelike geodesics where \(\lambda = \tau\)}, \\
            \epsilon &= 0, & &\textrm{for lightlike geodesics}, \\
            \epsilon &> 0, & &\textrm{for spacelike geodesics}, \\
            \epsilon &= 1, & &\textrm{for spacelike geodesics where \(\lambda = L_0\)}.
            \end{align*}
        " />

        <LinkH2 id="timelike-geodesics">Timelike Geodesics</LinkH2>
        <p>For timelike paths, I will parametrize path by the proper time <InlineMath math="\tau"/> (<InlineMath math="\epsilon = -1"/>). The geodesic equations are in the form:</p>
        <BlockMath math="
            \begin{align*}
                \frac{d^2 t}{d\tau^2} &= - \frac{2}{r(r - 2)} \frac{dt}{d\tau} \frac{dr}{d\tau}, \\
                \frac{d^2 r}{d\tau^2} &= -\frac{r - 2}{r^3} \left(\frac{dt}{d\tau}\right)^2 + \frac{1}{r(r - 2)} \left(\frac{dr}{d\tau}\right)^2 + (r - 2) \left(\frac{d\phi}{d\tau}\right)^2, \\
                \frac{d^2 \phi}{d\tau^2} &= -\frac{2}{r} \frac{dr}{d\tau} \frac{d\phi}{d\tau}.
            \end{align*}
        " />

        <p>The initial time dilation can be derived from the tangent vector length:</p>
        <BlockMath math="
            \begin{align*}
                1 &= \left(1 - \frac{2}{r}\right) \left(U^t_0\right)^2 - \left(1 - \frac{2}{r}\right)^{-1} \left(U^r_0\right)^2 - r^2 \left(U^{\phi}_0\right)^2, \\
                \frac{r - 2}{r} \left(U^t_0\right)^2 &= 1 + \frac{r}{r - 2} \left(U^r_0\right)^2 + r^2 \left(U^{\phi}_0\right)^2, \\
                U^t_0 &= \sqrt{\frac{r}{r - 2}\left[1 + \frac{r}{r - 2} \left(U^r_0\right)^2 + r^2 \left(U^{\phi}_0\right)^2\right]}, \\
            \end{align*}
        " />

        <p>then the Euler method can be used to solve for the motion.</p>
        <TimelikeGeodesics/>
    </div>
  )
}