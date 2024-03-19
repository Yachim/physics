import Link from "next/link";
import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { LinkH2 } from "@/components/LinkHeadings";

export const metadata: Metadata = {
  title: "Derivation of the Schwarzschild Metric"
}

export default async function Home() {
  return (
    <div className="article">
        <Link href="/general-relativity/schwarzschild">Back</Link>
        <h1>Derivation of the Schwarzschild Metric</h1>
        <p>The coordinates used are <InlineMath math="(t, r, \theta, \phi)" />, where <InlineMath math="\theta" /> is the colatitude and <InlineMath math="\phi" /> is the longitude. The <InlineMath math="r" /> coordinate will be explained later.</p>
        <p>The general Einstein field equations are given by:</p>
        <BlockMath math="R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} - \Lambda g_{\mu\nu} = 8 \pi T_{\mu\nu}." />

        <LinkH2 id="assumptions">Assumptions</LinkH2>
        <p>The metric is static - independent of the time coordinate:</p>
        <BlockMath math="g_{\mu\nu,t} = 0." />

        <p>The solution is vacuum (and zero cosmological constant):</p>
        <BlockMath math="
          \begin{align*}
            T_{\mu\nu} = 0, \\[1.5ex]
            R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} = 0, \\
            R_{\mu\nu} g^{\mu\nu} - \frac{1}{2} R g_{\mu\nu} g^{\mu\nu} = 0, \\
            R - \frac{1}{2} R \delta^{\mu}_{\mu} = 0, \\
            R - 2 R = 0, \\
            R = 0,
          \end{align*}
        " />

        <p>simplifying the Einstein field equations:</p>
        <BlockMath math="R_{\mu\nu} = 0." />

        <p>The metric is in the form:</p>
        <BlockMath math="
          g_{\mu\nu} = \begin{bmatrix}
            g_{00} & g_{01} & g_{02} & g_{03} \\
            g_{10} & g_{11} & g_{12} & g_{13} \\
            g_{20} & g_{21} & g_{22} & g_{23} \\
            g_{30} & g_{31} & g_{32} & g_{33}
          \end{bmatrix}
        " />

        <p>The spacetime is spherically symmetric, meaning it is invariant under rotations and mirroring. Taking the mirror image for the coordinate <InlineMath math="\sigma \neq 1" /> (<InlineMath math="r" /> cannot be negative) means:</p>
        <BlockMath math="\tilde{x}^{\sigma} = -x^{\sigma}," />
        <p>and the metric is transformed as follows (where <InlineMath math="\mu \neq \sigma" />):</p>
        <BlockMath math="
          \begin{align*}
            \tilde{g}_{\mu \sigma} &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\sigma}} g_{\alpha\beta} \\
            &= -\frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} g_{\alpha\sigma} \\
            &= -g_{\mu\sigma}.
          \end{align*}
        " />

        <p>Since the metric is symmetrical, this implies:</p>
        <BlockMath math="g_{\mu\sigma} = g_{\sigma\mu} = 0," />

        <p>thus, the metric is diagonalized:</p>
        <BlockMath math="
          g_{\mu\nu} = \begin{bmatrix}
            g_{00} & 0 & 0 & 0 \\
            0 & g_{11} & 0 & 0 \\
            0 & 0 & g_{22} & 0 \\
            0 & 0 & 0 & g_{33}
          \end{bmatrix}
        " />

        <p>When <InlineMath math="\theta" /> and <InlineMath math="\phi" /> are constant, <InlineMath math="g_{00}" /> and <InlineMath math="g_{11}" /> should only depend on <InlineMath math="r" /> (by symmetry):</p>
        <BlockMath math="
          g_{\mu\nu} = \begin{bmatrix}
            A(r) & 0 & 0 & 0 \\
            0 & B(r) & 0 & 0 \\
            0 & 0 & g_{22} & 0 \\
            0 & 0 & 0 & g_{33}
          \end{bmatrix}
        " />

        <p>and <InlineMath math="g_{22}" /> and <InlineMath math="g_{33}" /> should use metric for a sphere:</p>
        <BlockMath math="
          g_{\mu\nu} = \begin{bmatrix}
            -A(r) & 0 & 0 & 0 \\
            0 & B(r) & 0 & 0 \\
            0 & 0 & r^2 & 0 \\
            0 & 0 & 0 & r^2 \sin^2 \theta
          \end{bmatrix}
        " />

        <p>The inverse metric is equal to:</p>
        <BlockMath math="
          g_{\mu\nu} = \begin{bmatrix}
            -\frac{1}{A(r)} & 0 & 0 & 0 \\
            0 & \frac{1}{B(r)} & 0 & 0 \\
            0 & 0 & \frac{1}{r^2} & 0 \\
            0 & 0 & 0 & \frac{1}{r^2 \sin^2 \theta}
          \end{bmatrix}
        " />

        <LinkH2 id="christoffel-symbols">Christoffel Symbols</LinkH2>
        <p>The general equation for Christoffel symbols is as follows:</p>
        <BlockMath math="\Gamma^{\lambda}{}_{\mu\sigma} = \frac{1}{2} g^{\lambda\kappa} (g_{\kappa\mu,\sigma} + g_{\kappa\sigma,\mu} - g_{\mu\sigma,\kappa})," />

        <p>The inverse metric is diagonal, so the equation simplifies:</p>
        <BlockMath math="\Gamma^{\lambda}{}_{\mu\sigma} = \frac{1}{2} g^{\lambda\lambda} (g_{\lambda\mu,\sigma} + g_{\lambda\sigma,\mu} - g_{\mu\sigma,\lambda})," />
    </div>
  )
}