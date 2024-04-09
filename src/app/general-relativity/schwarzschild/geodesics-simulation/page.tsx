import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";
import { LightlikeGeodesics, TimelikeGeodesics } from "./components";
import Image from "next/image";
import getConfig from "next/config";

export const metadata: Metadata = {
  title: "Geodesics Simulation"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

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

        <LinkH2 id="lightlike-geodesics">Lightlike Geodesics</LinkH2>
        <p>For lightlike paths, <InlineMath math="\epsilon = 0" />. The tangent vector length is equal to:</p>
        <BlockMath math="0 = -\left(1 - \frac{2}{r}\right) \left(\frac{dt}{d\lambda}\right)^2 + \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{d\phi}{d\lambda}\right)^2." />

        <p>And the geodesic equations don&apos;t change:</p>
        <BlockMath math="
            \begin{align*}
                \frac{d^2 t}{d\lambda^2} &= - \frac{2}{r(r - 2)} \frac{dt}{d\lambda} \frac{dr}{d\lambda}, \\
                \frac{d^2 r}{d\lambda^2} &= -\frac{r - 2}{r^3} \left(\frac{dt}{d\lambda}\right)^2 + \frac{1}{r(r - 2)} \left(\frac{dr}{d\lambda}\right)^2 + (r - 2) \left(\frac{d\phi}{d\lambda}\right)^2, \\
                \frac{d^2 \phi}{d\lambda^2} &= -\frac{2}{r} \frac{dr}{d\lambda} \frac{d\phi}{d\lambda}.
            \end{align*}
        "/>

        <p>Consider a light source <InlineMath math="S" /> at a distance <InlineMath math="r_0" /> from the mass <InlineMath math="M" />. The outgoing light rays (illustrated by <InlineMath math="L" />) have radial coordinates <InlineMath math="(\tilde{r}, \tilde{\phi})" /> centered at the light source:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/schwarzschild/lightlike-rays-coords.svg`}
                width={600}
                height={600}
                alt="Coordinates"
            />
        </div>

        <p>All right rays travel from <InlineMath math="S" /> at <InlineMath math="\frac{d\tilde{r}}{d\lambda} = c = 1" /> and <InlineMath math="\frac{d\tilde{\phi}}{d\lambda} = 0" /> when <InlineMath math="\lambda = 0" />:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/schwarzschild/lightlike-rays-coords2.svg`}
                width={600}
                height={600}
                alt="Coordinates 2"
            />
        </div>
        <BlockMath math="
            \begin{align*}
                \frac{dr}{d\lambda} = -\cos \tilde{\phi}, \\
                v_{\perp} = r_0 \frac{d\phi}{d\lambda} = \sin \tilde{\phi}, \\
                \frac{d\phi}{d\lambda} = \frac{\sin \tilde{\phi}}{r_0}.
            \end{align*}
        " />
        <p>Note: <InlineMath math="\tilde{\phi}" /> has to be the angle between <InlineMath math="\frac{d\tilde{r}}{d\lambda}" /> and <InlineMath math="r_0" />:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/schwarzschild/lightlike-rays-coords3.svg`}
                width={600}
                height={600}
                alt="Coordinates 3"
            />
        </div>

        <p>Substituting into the length of tangent vector formula (at <InlineMath math="\lambda = 0, r = r_0" />):</p>
        <BlockMath math="
            \begin{align*}
                0 &= -\left(1 - \frac{2}{r_0}\right) \left(\frac{dt}{d\lambda}\right)^2 + \left(1 - \frac{2}{r_0}\right)^{-1} \cos^2 \tilde{\phi} + r_0^2 \frac{\sin^2 \tilde{\phi}}{r_0^2}, \\
                \left(1 - \frac{2}{r_0}\right) \left(\frac{dt}{d\lambda}\right)^2 &= \left(1 - \frac{2}{r_0}\right)^{-1} \cos^2 \tilde{\phi} + \sin^2 \tilde{\phi}, \\
                \left(\frac{dt}{d\lambda}\right)^2 &= \left(1 - \frac{2}{r_0}\right)^{-1} \left[\left(1 - \frac{2}{r_0}\right)^{-1} \cos^2 \tilde{\phi} + \sin^2 \tilde{\phi}\right], \\
                \frac{dt}{d\lambda} &= \sqrt{\left(1 - \frac{2}{r_0}\right)^{-1} \left[\left(1 - \frac{2}{r_0}\right)^{-1} \cos^2 \tilde{\phi} + \sin^2 \tilde{\phi}\right]}.
            \end{align*}
        " />
        <p>Now, the Euler method can be employed. But since we&apos;re working with multiple rays at once, I will use the coordinate time <InlineMath math="t" /> to find <InlineMath math="\lambda" /> for each ray. We can derive this from the tangent vector length equation:</p>
        <BlockMath math="
            \begin{align*}
                0 &= -\left(1 - \frac{2}{r}\right) \left(\frac{dt}{d\lambda}\right)^2 + \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{d\phi}{d\lambda}\right)^2, \\
                \left(1 - \frac{2}{r}\right) \left(\frac{dt}{d\lambda}\right)^2 &= \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(\frac{d\phi}{d\lambda}\right)^2, \\
                \left(\frac{dt}{d\lambda}\right)^2 &= \left(1 - \frac{2}{r}\right)^{-2} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{d\phi}{d\lambda}\right)^2, \\
                \frac{dt}{d\lambda} &= \sqrt{\left(1 - \frac{2}{r}\right)^{-2} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{d\phi}{d\lambda}\right)^2}, \\
                d\lambda &= \left[\left(2 - \frac{2}{r}\right)^{-2} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{d\phi}{d\lambda}\right)^2\right]^{-1/2} dt, \\
                \Delta \lambda &= \left[\left(2 - \frac{2}{r}\right)^{-2} \left(\frac{dr}{d\lambda}\right)^2 + r^2 \left(1 - \frac{2}{r}\right)^{-1} \left(\frac{d\phi}{d\lambda}\right)^2\right]^{-1/2} \Delta t.
            \end{align*}
        " />
        <p>We can substitute <InlineMath math="h = \Delta \lambda" /> into our original equations:</p>
        <BlockMath math="
            \begin{align*}
                U^t_n &= U^t_{n - 1} - \Delta \lambda \frac{2}{r_{n - 1}(r_{n - 1} - 2)} U^t_{n - 1} U^r_{n - 1}, \\
                U^r_n &= U^r_{n - 1} + \Delta \lambda \left[- \frac{r_{n - 1} - 2}{(r_{n - 1})^3} \left(U^t_{n - 1}\right)^2 + \frac{1}{r_{n - 1}(r_{n - 1} - 2)} \left(U^r_{n - 1}\right)^2 + (r_{n - 1} - 2) \left(U^{\phi}_{n - 1}\right)^2\right], \\
                U^{\phi}_n &= U^{\phi}_{n - 1} - \Delta \lambda \frac{2}{r_{n - 1}} U^r_{n - 1} U^{\phi}_{n - 1}, \\[4ex]
                t_n &= t_{n - 1} + \Delta \lambda U^t_{n - 1}, \\
                r_n &= r_{n - 1} + \Delta \lambda U^r_{n - 1}, \\
                \phi_n &= \phi_{n - 1} + \Delta \lambda U^{\phi}_{n - 1}, \\[4ex]
                \Delta \lambda &= \left[\left(2 - \frac{2}{r_{n - 1}}\right)^{-2} \left(U^r_{n - 1}\right)^2 + r_{n - 1}^2 \left(1 - \frac{2}{r_{n - 1}}\right)^{-1} \left(U^{\phi}_{n - 1}\right)^2\right]^{-1/2} \Delta t.
            \end{align*}
        "/>
        <LightlikeGeodesics/>
    </div>
  )
}