import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "Perihelion Advance"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Perihelion Advance</h1>
        <p>To calculate the perihelion advance, we need to calculate <InlineMath math="r(\phi)" />. I will reuse equation for energy from the <Link href="/general-relativity/schwarzschild/geodesics#relativistic-orbits">geodesics</Link> chapter:</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\lambda}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} + \frac{2}{r} \epsilon - \epsilon." />

        <p>Considering timelike geodesics, where <InlineMath math="\epsilon = -1" /> and <InlineMath math="\lambda = \tau" />:</p>
        <BlockMath math="\mathcal{E}^2 = \left(\frac{dr}{d\tau}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1." />

        <p>The angular momentum per unit mass is equal to:</p>
        <BlockMath math="\mathcal{L} = \frac{d\phi}{d\tau} r^2 \implies \frac{d\phi}{d\tau} = \frac{\mathcal{L}}{r^2}." />

        <p>By chain rule, <InlineMath math="\frac{dr}{d\tau}" /> is equal to:</p>
        <BlockMath math="\frac{dr}{d\tau} = \frac{dr}{d\phi} \frac{d\phi}{d\tau} = \frac{dr}{d\phi} \frac{\mathcal{L}}{r^2}." />

        {/*<p>Substituting back into the original equation:</p>
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
            w(\phi) &= A \cos (\phi + \phi_0) + .
          \end{align*}
        " />

        <p>If the right side would be equal to one, we will get the equation of ellipse centered at focus:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2 w}{d\phi^2} + w &= 1, \\
            w(\phi) &= 1 + e \cos (\phi + \phi_0) = \frac{\mathcal{L^2}}{r}, \\
            r(\phi) &= \frac{\mathcal{L}^2}{1 + e \cos (\phi + \phi_0)},
          \end{align*}
        " />
        <p>where <InlineMath math="e"/> is the eccentricity of the ellipse.</p>

        <p>Thus, we may say that the <InlineMath math="\alpha w^2"/> term is a correction for general relativity.</p>
        <p>The solution is complex. Assume there is a power series in terms of <InlineMath math="\alpha"/>:</p>
        <BlockMath math="w = \sum_{i = 0}^{\infty} w_i \alpha^i."/>

        <p>then, substituting back into the original equation:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2}{d\phi^2} \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right) + \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right) &= 1 + \alpha \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2, \\
            \left[\frac{d^2 w_0}{d\phi^2} + \alpha \frac{d^2}{d\phi^2} \left(\sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right)\right] + \left(w_0 + \alpha \sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right) &= 1 + \alpha \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2, \\[5ex]
            \frac{d^2 w_0}{d\phi^2} + w_0 &= 1, \\
            \frac{d^2}{d\phi^2} \left(\sum_{i = 1}^{\infty} w_i \alpha^{i - 1}\right) + \sum_{i = 1}^{\infty} w_i \alpha^{i - 1} &= \left(\sum_{i = 0}^{\infty} w_i \alpha^i\right)^2,\\[5ex]
            w_0(\phi) &= 1 + e \cos (\phi + \phi_0), \\
            &= 1 + e \cos \phi, \qquad \textrm{taking \(\phi_0 = 0\),} \\
          \end{align*}
        " />
        <p>for the second equation, we will assume <InlineMath math="\alpha << 1"/>, so that the higher order terms will vanish:</p>
        <BlockMath math="
          \begin{align*}
            \frac{d^2 w_1}{d\phi^2} + w_1 &= w_0^2 = (1 + e \cos \phi)^2, \\
            \frac{d^2 w_1}{d\phi^2} + w_1 &= 1 + 2e \cos \phi + e^2 \cos^2 \phi \\
            &= 1 + 2e \cos \phi + \frac{e^2}{2} (\cos 2\phi + 1) \\
            &= 1 + 2e \cos \phi + \frac{e^2}{2} \cos 2\phi + \frac{e^2}{2} \\
            &= 1 + \frac{e^2}{2} + 2e \cos \phi + \frac{e^2}{2} \cos 2\phi \\
          \end{align*}
        " />

        <p>The solution is in the form:</p>*/}
        <p>Substituting back into the original equation:</p>
        <BlockMath math="
          \begin{align*}
            \mathcal{E}^2 &= \left(\frac{dr}{d\phi} \frac{\mathcal{L}}{r^2}\right)^2 + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1 \\
            &= \left(\frac{dr}{d\phi}\right)^2 \frac{\mathcal{L}^2}{r^4} + \frac{\mathcal{L}^2}{r^2} - \frac{2\mathcal{L}^2}{r^3} - \frac{2}{r} + 1, \\
            \left(\frac{dr}{d\phi}\right)^2 \frac{\mathcal{L}^2}{r^4} &= \frac{2\mathcal{L}^2}{r^3} - \frac{\mathcal{L}^2}{r^2} + \frac{2}{r} + (\mathcal{E}^2 - 1), \\
            \left(\frac{dr}{d\phi}\right)^2 &= \frac{\mathcal{E}^2 - 1}{\mathcal{L}^2} r^4 + \frac{2}{\mathcal{L}^2} r^3 - r^2 + 2r, \\
            \frac{dr}{d\phi} &= \sqrt{\frac{\mathcal{E}^2 - 1}{\mathcal{L}^2} r^4 + \frac{2}{\mathcal{L}^2} r^3 - r^2 + 2r}, \\
            d\phi &= \frac{dr}{\sqrt{\frac{\mathcal{E}^2 - 1}{\mathcal{L}^2} r^4 + \frac{2}{\mathcal{L}^2} r^3 - r^2 + 2r}}, \\
          \end{align*}
        " />
    </div>
  )
}