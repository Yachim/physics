import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";
import { OrbitalPrecessionCalculator } from "./components";
import Image from "next/image";
import getConfig from "next/config";

export const metadata: Metadata = {
  title: "Perihelion Shift"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Perihelion Shift</h1>
        <p>To calculate the perihelion shift, we need to calculate <InlineMath math="r(\phi)" />. I will reuse equation for energy from the <Link href="/general-relativity/schwarzschild/geodesics#relativistic-orbits">geodesics</Link> chapter:</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} + \frac{2}{r} \epsilon - \epsilon." />

        <p>Considering timelike geodesics, where <InlineMath math="\epsilon = -1" /> and <InlineMath math="\lambda = \tau" />:</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\tau}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1." />

        <p>The angular momentum per unit mass is equal to:</p>
        <BlockMath math="\mathcal{L} = \frac{d\phi}{d\tau} r^2 \implies \frac{d\phi}{d\tau} = \frac{\mathcal{L}}{r^2}." />

        <p>By chain rule, <InlineMath math="\frac{dr}{d\tau}" /> is equal to:</p>
        <BlockMath math="\frac{dr}{d\tau} = \frac{dr}{d\phi} \frac{d\phi}{d\tau} = \frac{dr}{d\phi} \frac{\mathcal{L}}{r^2}." />

        <p>Substituting back into the original equation:</p>
        <BlockMath math="
          \begin{align*}
            \mathcal{E}^2 &= \left(\frac{dr}{d\phi} \frac{\mathcal{L}}{r^2}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1 \\
            &= \left(\frac{dr}{d\phi}\right)^2 \frac{\mathcal{L}^2}{r^4} + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1.
          \end{align*}
        " />
        
        <p>Substituting <InlineMath math="r = \frac{1}{u}" />:</p>
        <BlockMath math="
          \begin{align*}
            r &= \frac{1}{u}, \\
            \frac{dr}{d\phi} &= - \frac{1}{u^2} \frac{du}{d\phi}, \\
            \mathcal{E}^2 &= \left(- \frac{1}{u^2} \frac{du}{d\phi}\right)^2 u^4 \mathcal{L}^2 + u^2 \mathcal{L}^2 - 2 u^3 \mathcal{L}^2 - 2u + 1 \\
            &= \left(\frac{du}{d\phi}\right)^2 \mathcal{L}^2 + u^2 \mathcal{L}^2 - 2 u^3 \mathcal{L}^2 - 2u + 1.
          \end{align*}
        " />

        <p>We then differentiate both sides with respect to <InlineMath math="\phi" />:</p>
        <BlockMath math="
          \begin{align*}
            0 &= \frac{d}{d\phi} \left[\left(\frac{du}{d\phi}\right)^2 \mathcal{L}^2 + u^2 \mathcal{L}^2 - 2 u^3 \mathcal{L}^2 - 2u + 1\right] \\
            &= 2 \frac{du}{d\phi} \frac{d^2 u}{d\phi^2} \mathcal{L}^2 + 2 u \frac{du}{d\phi} \mathcal{L}^2 - 6 u^2 \mathcal{L}^2 \frac{du}{d\phi} - 2 \frac{du}{d\phi}, \\
            0 &= \frac{d^2 u}{d\phi^2} \mathcal{L}^2 + u \mathcal{L}^2 - 3 u^2 \mathcal{L}^2 - 1. \\
          \end{align*}
        " />

        <p>Another substitution:</p>
        <BlockMath math="
          \begin{align*}
            w &= u \mathcal{L}^2 = \frac{\mathcal{L}^2}{r}, \\
            u &= \frac{w}{\mathcal{L}^2}, \\
            \frac{du}{d\phi} &= \frac{1}{\mathcal{L}^2} \frac{dw}{d\phi}, \\
            \frac{d^2 u}{d\phi^2} &= \frac{1}{\mathcal{L}^2} \frac{d^2 w}{d\phi^2}, \\
            0 &= \frac{d^2 w}{d\phi^2} + w - w^2 \frac{3}{\mathcal{L}^2} - 1, \\
            \frac{d^2 w}{d\phi^2} + w &= 1 + w^2 \frac{3}{\mathcal{L}^2}, \\
            &= 1 + \alpha w^2,
          \end{align*}
        " />
        <p>where <InlineMath math="\alpha = \frac{3}{\mathcal{L}^2}"/>.</p>

        <p>If the right side would be equal zero, we will get simple harmonic oscillator:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2 w}{d\phi^2} + w &= 0, \\
            w(\phi) &= A \sin (\phi + \phi_0) + B \cos (\phi + \phi_0).
          \end{align*}
        " />

        {/* TODO: fully derive */}
        <p>If the right side would be equal to one:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2 w}{d\phi^2} + w &= 1, \\
            w(\phi) &= 1 + A \sin (\phi + \phi_0) + B \cos (\phi + \phi_0), \qquad \textrm{taking \(\phi_0 = 0\)}, \\
            w(\phi) &= 1 + A \sin \phi + B \cos \phi, \\
            w'(\phi) &= A \cos \phi - B \sin \phi,
          \end{align*}
        " />
        <p>This will become an equation for ellipse with the coordinate system centered at a focus:</p>
        <div className="w-full flex justify-center">
          <Image
            src={`${basePath}/assets/general-relativity/schwarzschild/ellipse.svg`}
            width={700}
            height={700}
            alt="Ellipse plot"
          />
        </div>
        <p>When <InlineMath math="\phi = 0"/>, then <InlineMath math="r = a - c \iff w = \frac{\mathcal{L}^2}{a - c}"/> and <InlineMath math="w' = 0"/> (closest approach). Substituting:</p>
        <BlockMath math="
          \begin{align*}
            \frac{\mathcal{L}^2}{a - c} &= 1 + A \sin 0 + B \cos 0 \\
            &= 1 + B, \\
            B &= \frac{\mathcal{L}^2}{a - c} - 1, \\
            0 &= A \cos 0 - B \sin 0 \\
            &= A, \\
            w(\phi) &= 1 + \left(\frac{\mathcal{L}^2}{a - c} - 1\right) \cos \phi, \\
          \end{align*}
        " />
        
        <p>In a <Link href="https://youtu.be/2pPvUx-EUqE?t=1862">video by eigenchris</Link>, the following equation is provided (where <InlineMath math="e" /> is the eccentricity of the ellipse):</p>
        <BlockMath math="
          \begin{align*}
            w(\phi) &= 1 + e \cos \phi, \\
          \end{align*}
        " />
        <p>however, I wasn't able to prove their equivalence. My guess is that with <InlineMath math="e" /> is a more general solution for any ellipse and my solution with <InlineMath math="\left(\frac{\mathcal{L}^2}{a - c} - 1\right)" /> is a solution for a specific ellipse determined by the initial conditions. We will see this term won't matter in the end. I will use <InlineMath math="\mathcal{A}" /> for the constant:</p>
        <BlockMath math="
          \begin{gather*}
            w(\phi) = 1 + \mathcal{A} \cos \phi, \\
            \mathcal{A} = e \quad \textrm{or} \quad \mathcal{A} = \left(\frac{\mathcal{L}^2}{a - c} - 1\right).
          \end{gather*}
        " />

        <p>The solution to the original equation is complex due to the extra <InlineMath math="\alpha w^2" /> term. We may say this term is a correction for general relativity. Assume there is a power series in terms of <InlineMath math="\alpha"/>:</p>
        <BlockMath math="w = \sum_{i = 0}^{\infty} w_i \alpha^i."/>

        <p>then, substituting back into the original equation:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2}{d\phi^2} \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right) + \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right) &= 1 + \alpha \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2, \\
            \left[\frac{d^2 w_0}{d\phi^2} + \alpha \frac{d^2}{d\phi^2} \left(\sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right)\right] + \left(w_0 + \alpha \sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right) &= 1 + \alpha \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2, \\[5ex]
            \left(\frac{d^2 w_0}{d\phi^2} + w_0\right) + \alpha \left[\frac{d^2}{d\phi^2} \left(\sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right) + \sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right] &= 1 + \alpha \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2, \\[5ex]
            \frac{d^2 w_0}{d\phi^2} + w_0 &= 1, \\
            \frac{d^2}{d\phi^2} \left(\sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right) + \sum_{i = 1}^{\infty} w_i \alpha^{i - 1} &= \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2,\\[5ex]
            w_0(\phi) &= 1 + \mathcal{A} \cos \phi.
          \end{align*}
        " />
        <p>For the second equation, we will assume <InlineMath math="\alpha << 1"/>, so that the higher order terms will vanish:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2 w_1}{d\phi^2} + w_1 &= w_0^2 = (1 + \mathcal{A} \cos \phi)^2, \\
            \frac{d^2 w_1}{d\phi^2} + w_1 &= 1 + 2\mathcal{A} \cos \phi + \mathcal{A}^2 \cos^2 \phi \\
            &= 1 + 2\mathcal{A} \cos \phi + \frac{\mathcal{A}^2}{2} (\cos 2\phi + 1) \\
            &= 1 + 2\mathcal{A} \cos \phi + \frac{\mathcal{A}^2}{2} \cos 2\phi + \frac{e^2}{2} \\
            &= \left(1 + \frac{\mathcal{A}^2}{2}\right) + 2\mathcal{A} \cos \phi + \frac{\mathcal{A}^2}{2} \cos 2\phi.
          \end{align*}
        " />

        <p>The general solution is in the form:</p>
        <BlockMath math="
          \begin{align*}
            w_1(\phi) &= \left(1 + \frac{\mathcal{A}^2}{2}\right) + (a \phi + A) \sin \phi + (b \phi + B) \cos 2\phi, \\
            w_1'(\phi) &= a \sin \phi + (a \phi + A) \cos \phi + b \cos 2\phi - 2 (b \phi + B) \sin 2\phi, \\
            w_1''(\phi) &= a \cos \phi + a \cos \phi - (a \phi + A) \sin \phi - 2b \sin 2\phi - 2 b \sin 2\phi - 4 (b \phi + B) \cos 2\phi, \\
            &= 2a \cos \phi - (a \phi + A) \sin \phi - 4 b \sin 2\phi - 4 (b \phi + B) \cos 2\phi, \\
          \end{align*}
        " />
        <p>substituting back into the original equation:</p>
        <BlockMath math="
          \begin{align*}
            2a \cos \phi - (a \phi + A) \sin \phi - 4 b \sin 2\phi - 4 (b \phi + B) \cos 2\phi \\
            + \left(1 + \frac{e^2}{2}\right) + (a \phi + A) \sin \phi + (b \phi + B) \cos 2\phi &= \left(1 + \frac{\mathcal{A}^2}{2}\right) + 2\mathcal{A} \cos \phi + \frac{\mathcal{A}^2}{2} \cos 2\phi, \\
            2a \cos \phi - 4 b \sin 2\phi - 3 (b \phi + B) \cos 2\phi &= 2\mathcal{A} \cos \phi + \frac{\mathcal{A}^2}{2} \cos 2\phi, \\
            2a &= 2\mathcal{A}, \\
            a &= e, \\
            b &= 0, \\
            -3(b\phi + B) &= \frac{\mathcal{A}^2}{2}, \\
            -3 B &= \frac{\mathcal{A}^2}{2}, \\
            B &= -\frac{\mathcal{A}^2}{6}, \\
            A &= 0, \qquad \textrm{doesn't matter}.
          \end{align*}
        " />

        <p>The solution is then:</p>
        <BlockMath math="w_1(\phi) = \left(1 + \frac{\mathcal{A}^2}{2}\right) + \mathcal{A} \phi \sin \phi - \frac{\mathcal{A}^2}{6} \cos 2\phi." />

        <p>Substituting into <InlineMath math="w = w_0 + \alpha w_1" />:</p>
        <BlockMath math="
          \begin{align*}
            w(\phi) &= (1 + \mathcal{A} \cos \phi) + \alpha\left[\left(1 + \frac{e^2}{2}\right) + \mathcal{A} \phi \sin \phi - \frac{\mathcal{A}^2}{6} \cos 2\phi\right] \\
            &= 1 + \mathcal{A} \cos \phi + \alpha \left(1 + \frac{\mathcal{A}^2}{2}\right) + \mathcal{A} \alpha \phi \sin \phi - \alpha \frac{\mathcal{A}^2}{6} \cos 2\phi \\
            &= 1 + \alpha \left(1 + \frac{\mathcal{A}^2}{2}\right) + \mathcal{A} (\cos \phi + \alpha \phi \sin \phi) - \alpha \frac{\mathcal{A}^2}{6} \cos 2\phi \\
          \end{align*}
        " />
        <p>the linear term in <InlineMath math="\cos \phi + \alpha \phi \sin \phi" /> causes the shift of the perihelion. Since <InlineMath math="\alpha << 1" />, then we may approximate:</p>
        <BlockMath math="
          \begin{align*}
            \sin \alpha \phi &= \alpha \phi, \\
            \cos \alpha \phi &= 1,
          \end{align*}
        " />

        <p>and calculate the period of <InlineMath math="\cos \phi + \alpha \phi \sin \phi" />:</p>
        <BlockMath math="
          \begin{align*}
            \cos \phi + \alpha \phi \sin \phi &= (\cos \phi \cos \alpha \phi) + (\sin \alpha \phi \sin \phi) \\
            &= \cos (\phi - \alpha \phi) \\
            &= \cos \phi (1 - \alpha), \\
            2 \pi &= \phi (1 - \alpha), \\
            \phi &= \frac{2 \pi}{1 - \alpha} \\
            &= \frac{2 \pi (1 + \alpha)}{1 - \alpha^2},
          \end{align*}
        " />
        <p>again, since <InlineMath math="\alpha << 1" />, <InlineMath math="\alpha^2" /> vanishes:</p>
        <BlockMath math="
          \begin{align*}
            \phi &= 2 \pi + 2 \pi \alpha, \\
            \Delta \phi &= 2 \pi \alpha,
          \end{align*}
        " />
        <p>where <InlineMath math="\Delta \phi" /> is the perihelion shift per orbital period and <InlineMath math="\alpha = \frac{3}{\mathcal{L}^2}" />.</p>

        <LinkH2 id="orbital-precession-calculator">Orbital Precession Calculator</LinkH2>
        <OrbitalPrecessionCalculator/>
    </div>
  )
}