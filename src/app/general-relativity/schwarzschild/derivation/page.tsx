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

      <p>and when <InlineMath math="r \to \infty"/>, the metric should be the same as the metric for a sphere:</p>
      <BlockMath math="
        \lim_{r \to \infty} g_{\mu\nu} = \begin{bmatrix}
          -1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & r^2 & 0 \\
          0 & 0 & 0 & r^2 \sin^2 \theta
        \end{bmatrix}
      " />

      <p>The inverse metric is equal to:</p>
      <BlockMath math="
        g^{\mu\nu} = \begin{bmatrix}
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

      <p>Splitting the equation, for the time coordinate, we have:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^0{}_{\mu\sigma} &= -\frac{1}{2 A(r)} (g_{0\mu,\sigma} + g_{0\sigma,\mu} - g_{\mu\sigma,0}) \\
          &= -\frac{1}{2A(r)} (g_{0\mu,\sigma} + g_{0\sigma,\mu}), \\
          \Gamma^0{}_{0\sigma} = \Gamma^0{}_{\sigma0} &= -\frac{1}{2A(r)} g_{00,\sigma} \\
          &= -\frac{1}{2A(r)} g_{00,\sigma}, \\
          \Gamma^0{}_{\mu\nu} &= \begin{bmatrix}
            0 & \frac{A'(r)}{2A(r)} & 0 & 0 \\
            \frac{A'(r)}{2A(r)} & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0
          \end{bmatrix}
        \end{align*}
      " />

      <p>for the <InlineMath math="r" /> coordinate, we have:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^1{}_{\mu\sigma} &= \frac{1}{2 B(r)} (g_{1\mu,\sigma} + g_{1\sigma,\mu} - g_{\mu\sigma,1}), \\
          \Gamma^1{}_{0\sigma} = \Gamma^1{}_{\sigma0} &= -\frac{1}{2 B(r)} g^{11} g_{0\sigma,1}, \\
          \Gamma^1{}_{1\sigma} = \Gamma^1{}_{\sigma1} &= \frac{1}{2 B(r)} g_{11,\sigma}, \\
          \Gamma^1{}_{2\sigma} = \Gamma^1{}_{\sigma2} &= -\frac{1}{2 B(r)} g_{2\sigma,1}, \\
          \Gamma^1{}_{3\sigma} = \Gamma^1{}_{\sigma3} &= -\frac{1}{2 B(r)} g_{3\sigma,1}, \\
          \Gamma^1{}_{\mu\nu} &= \begin{bmatrix}
            \frac{A'(r)}{2 B(r)} & 0 & 0 & 0 \\
            0 & \frac{B'(r)}{2 B(r)} & 0 & 0 \\
            0 & 0 & -\frac{r}{B(r)} & 0 \\
            0 & 0 & 0 & -\frac{r \sin^2 \theta}{B(r)}
          \end{bmatrix}
        \end{align*}
      " />

      <p>for the <InlineMath math="\theta" /> coordinate, we have:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^2{}_{\mu\sigma} &= \frac{1}{2 r^2} (g_{2\mu,\sigma} + g_{2\sigma,\mu} - g_{\mu\sigma,2}), \\
          \Gamma^2{}_{0\sigma} = \Gamma^2{}_{\sigma0} &= -\frac{1}{2 r^2} g_{0\sigma,2}, \\
          \Gamma^2{}_{1\sigma} = \Gamma^2{}_{\sigma1} &= \frac{1}{2 r^2} (g_{2\sigma,1} - g_{1\sigma,2}), \\
          &= \begin{cases}
            -\frac{1}{2 r^2} g_{11,2} & \sigma = 1, \\
            \frac{1}{2 r^2} g_{22,1} & \sigma = 2, \\
          \end{cases} \\
          \Gamma^2{}_{2\sigma} = \Gamma^2{}_{\sigma2} &= \frac{1}{2 r^2} g_{22,\sigma}, \\
          \Gamma^2{}_{3\sigma} = \Gamma^2{}_{\sigma3} &= -\frac{1}{2 r^2} g_{3\sigma,2}, \\
          \Gamma^2{}_{\mu\sigma} &= \begin{bmatrix}
            0 & 0 & 0 & 0 \\
            0 & 0 & \frac{1}{r} & 0 \\
            0 & \frac{1}{r} & 0 & 0 \\
            0 & 0 & 0 & -\sin \theta \cos \theta
          \end{bmatrix}
        \end{align*}
      " />

      <p>and finally, for the coordinate <InlineMath math="\phi" />:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^3{}_{\mu\sigma} &= \frac{1}{2 r^2 \sin^2 \theta} (g_{3\mu,\sigma} + g_{3\sigma,\mu} - g_{\mu\sigma,3}) \\
          &= \frac{1}{2 r^2 \sin^2 \theta} (g_{3\mu,\sigma} + g_{3\sigma,\mu}), \\
          \Gamma^3{}_{0\sigma} = \Gamma^3{}_{\sigma0} &= 0, \\
          \Gamma^3{}_{1\sigma} = \Gamma^3{}_{\sigma1} &= \frac{1}{2 r^2 \sin^2 \theta} g_{3\sigma,1}, \\
          \Gamma^3{}_{2\sigma} = \Gamma^3{}_{\sigma2} &= \frac{1}{2 r^2 \sin^2 \theta} g_{3\sigma,2} \\
          \Gamma^3{}_{3\sigma} = \Gamma^3{}_{\sigma3} &= \frac{1}{2 r^2 \sin^2 \theta} g_{33,\sigma} \\
          \Gamma^3{}_{\mu\sigma} &= \begin{bmatrix}
            0 & 0 & 0 & 0 \\
            0 & 0 & 0 & \frac{1}{r} \\
            0 & 0 & 0 & \cot \theta \\
            0 & \frac{1}{r} & \cot \theta & 0
          \end{bmatrix}
        \end{align*}
      " />

      <LinkH2 id="ricci-and-riemann-tensor">Ricci and Riemann Tensor</LinkH2>
      <p>The Riemann tensor is equal to:</p>
      <BlockMath math="R^{\rho}{}_{\mu\sigma\nu} = \Gamma^{\rho}{}_{\nu\mu,\sigma} - \Gamma^{\rho}{}_{\sigma\mu,\nu} + \Gamma^{\rho}{}_{\sigma\lambda} \Gamma^{\lambda}{}_{\nu\mu} - \Gamma^{\rho}{}_{\nu\lambda}\Gamma^{\lambda}{}_{\sigma\mu}." />

      <p>The Ricci tensor is equal to zero:</p>
      <BlockMath math="R_{\mu\nu} = R^{\rho}{}_{\mu\rho\nu} = \Gamma^{\rho}{}_{\nu\mu,\rho} - \Gamma^{\rho}{}_{\rho\mu,\nu} + \Gamma^{\rho}{}_{\rho\lambda} \Gamma^{\lambda}{}_{\nu\mu} - \Gamma^{\rho}{}_{\nu\lambda} \Gamma^{\lambda}{}_{\rho\mu} = 0." />

      <p>The <InlineMath math="R_{00}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R_{00} &= \Gamma^{\rho}{}_{00,\rho} - \Gamma^{\rho}{}_{\rho0,0} + \Gamma^{\rho}{}_{\rho\lambda} \Gamma^{\lambda}{}_{00} - \Gamma^{\rho}{}_{0\lambda} \Gamma^{\lambda}{}_{\rho0} \\
          &= \Gamma^1{}_{00,1} + \Gamma^{\rho}{}_{\rho1} \Gamma^1{}_{00} - \Gamma^{\rho}{}_{00} \Gamma^0{}_{\rho0} - \Gamma^{\rho}{}_{01} \Gamma^1{}_{\rho0} \\
          &= \Gamma^1{}_{00,1} + \Gamma^0{}_{01} \Gamma^1{}_{00} + \Gamma^1{}_{11} \Gamma^1{}_{00} + \Gamma^2{}_{21} \Gamma^1{}_{00} + \Gamma^3{}_{31} \Gamma^1{}_{00} - \Gamma^1{}_{00} \Gamma^0{}_{10} - \Gamma^0{}_{01} \Gamma^1{}_{00} \\
          &= \Gamma^1{}_{00,1} + \Gamma^1{}_{11} \Gamma^1{}_{00} + \Gamma^2{}_{21} \Gamma^1{}_{00} + \Gamma^3{}_{31} \Gamma^1{}_{00} - \Gamma^1{}_{00} \Gamma^0{}_{10} \\
          &= \frac{2 A''(r) B(r) - 2 A'(r) B'(r)}{4 (B(r))^2} + \frac{B'(r)}{2 B(r)} \frac{A'(r)}{2 B(r)} + \frac{1}{r} \frac{A'(r)}{2 B(r)} + \frac{1}{r} \frac{A'(r)}{2 B(r)} - \frac{A'(r)}{2 B(r)} \frac{A'(r)}{2 A(r)} \\
          &= \frac{A''(r) B(r)}{2 (B(r))^2} - \frac{A'(r) B'(r)}{2 (B(r))^2} + \frac{A'(r) B'(r)}{4 (B(r))^2} + \frac{A'(r)}{r B(r)} - \frac{(A'(r))^2}{4 A(r) B(r)} \\
          &= 0, \qquad \cdot 4r A(r) (B(r))^2 \\
          0 &= 2r A(r) A''(r) B(r) - 2r A(r) A'(r) B'(r) + r A(r) A'(r) B'(r) + 4 A(r) B(r) A'(r) - r B(r) (A'(r))^2 \\
          &= 2r A(r) A''(r) B(r) - r A(r) A'(r) B'(r) + 4 A(r) B(r) A'(r) - r B(r) (A'(r))^2.
        \end{align*}
      " />

      <p>The <InlineMath math="R_{11}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R_{11} &= \Gamma^{\rho}{}_{11,\rho} - \Gamma^{\rho}{}_{\rho1,1} + \Gamma^{\rho}{}_{\rho\lambda} \Gamma^{\lambda}{}_{11} - \Gamma^{\rho}{}_{1\lambda} \Gamma^{\lambda}{}_{\rho1} \\
          &= \Gamma^1{}_{11,1} - \Gamma^0{}_{01,1} - \Gamma^1{}_{11,1} - \Gamma^2{}_{21,1} - \Gamma^3{}_{31,1} + \Gamma^{\rho}{}_{\rho1} \Gamma^1{}_{11} \\
          &- \Gamma^0{}_{1\lambda} \Gamma^{\lambda}{}_{01} - \Gamma^1{}_{1\lambda} \Gamma^{\lambda}{}_{11} - \Gamma^2{}_{1\lambda} \Gamma^{\lambda}{}_{21} - \Gamma^3{}_{1\lambda} \Gamma^{\lambda}{}_{31} \\
          &= -\Gamma^0{}_{01,1} - \Gamma^2{}_{21,1} - \Gamma^3{}_{31,1} + \Gamma^0{}_{01} \Gamma^1{}_{11} + \Gamma^1{}_{11} \Gamma^1{}_{11} + \Gamma^2{}_{21} \Gamma^1{}_{11} + \Gamma^3{}_{31} \Gamma^1{}_{11} \\
          &- \Gamma^0{}_{10} \Gamma^0{}_{01} - \Gamma^1{}_{11} \Gamma^1{}_{11} - \Gamma^2{}_{12} \Gamma^2{}_{21} - \Gamma^3{}_{13} \Gamma^3{}_{31} \\
          &= -\Gamma^0{}_{01,1} - \Gamma^2{}_{21,1} - \Gamma^3{}_{31,1} + \Gamma^0{}_{01} \Gamma^1{}_{11} + \Gamma^2{}_{21} \Gamma^1{}_{11} + \Gamma^3{}_{31} \Gamma^1{}_{11} \\
          &- \Gamma^0{}_{10} \Gamma^0{}_{01} - \Gamma^2{}_{12} \Gamma^2{}_{21} - \Gamma^3{}_{13} \Gamma^3{}_{31} \\
          &= -\frac{2 A(r) A''(r) - 2 (A'(r))^2}{4 (A(r))^2} + \frac{1}{r^2} + \frac{1}{r^2} + \frac{A'(r)}{2 A(r)} \frac{B'(r)}{2 B(r)} + \frac{1}{r} \frac{B'(r)}{2 B(r)} + \frac{1}{r} \frac{B'(r)}{2 B(r)} \\
          &- \frac{A'(r)}{2 A(r)} \frac{A'(r)}{2 A(r)} - \frac{1}{r} \frac{1}{r} - \frac{1}{r} \frac{1}{r} \\
          &= -\frac{A''(r)}{2 A(r)} + \frac{(A'(r))^2}{2 (A(r))^2} + \frac{A'(r) B'(r)}{4 A(r) B(r)} + \frac{B'(r)}{r B(r)} - \frac{(A'(r))^2}{4 (A(r))^2} \\
          &= -\frac{A''(r)}{2 A(r)} + \frac{(A'(r))^2}{4 (A(r))^2} + \frac{A'(r) B'(r)}{4 A(r) B(r)} + \frac{B'(r)}{r B(r)} \\
          &= 0, \qquad \cdot 4r (A(r))^2 B(r) \\
          0 &= -2r A(r) B(r) A''(r) + r B(r) (A'(r))^2 + r A(r) A'(r) B'(r) + 4 (A(r))^2 B'(r).
        \end{align*}
      " />

      <p>The <InlineMath math="R_{22}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R_{22} &= \Gamma^{\rho}{}_{22,\rho} - \Gamma^{\rho}{}_{\rho2,2} + \Gamma^{\rho}{}_{\rho\lambda} \Gamma^{\lambda}{}_{22} - \Gamma^{\rho}{}_{2\lambda} \Gamma^{\lambda}{}_{\rho2} \\
          &= \Gamma^1{}_{22,1} - \Gamma^3{}_{32,2} + \Gamma^{\rho}{}_{\rho1} \Gamma^1{}_{22} \\
          &- \Gamma^1{}_{2\lambda} \Gamma^{\lambda}{}_{12} - \Gamma^2{}_{2\lambda} \Gamma^{\lambda}{}_{22} - \Gamma^3{}_{2\lambda} \Gamma^{\lambda}{}_{32} \\
          &= \Gamma^1{}_{22,1} - \Gamma^3{}_{32,2} + \Gamma^0{}_{01} \Gamma^1{}_{22} + \Gamma^1{}_{11} \Gamma^1{}_{22} + \Gamma^2{}_{21} \Gamma^1{}_{22} + \Gamma^3{}_{31} \Gamma^1{}_{22} \\
          &- \Gamma^1{}_{22} \Gamma^2{}_{12} - \Gamma^2{}_{21} \Gamma^1{}_{22} - \Gamma^3{}_{23} \Gamma^3{}_{32} \\
          &= -\frac{B(r) - r B'(r)}{(B(r))^2} + \csc^2 \theta + \frac{A'(r)}{2 A(r)} \frac{-r}{B(r)} + \frac{B'(r)}{2 B(r)} \frac{-r}{B(r)} + \frac{1}{r} \frac{-r}{B(r)} + \frac{1}{r} \frac{-r}{B(r)} \\
          &- \frac{-r}{B(r)} \frac{1}{r} - \frac{1}{r} \frac{-r}{B(r)} - \cot^2 \theta \\
          &= -\frac{1}{B(r)} + \frac{r B'(r)}{(B(r))^2} - \frac{r A'(r)}{2 A(r) B(r)} - \frac{r B'(r)}{2 (B(r))^2} - \frac{2}{B(r)} + \frac{2}{B(r)} + 1 \\
          &= -\frac{1}{B(r)} + \frac{r B'(r)}{2 (B(r))^2} - \frac{r A'(r)}{2 A(r) B(r)} + 1 \\
          &= 0, \qquad \cdot 2 A(r) (B(r))^2 \\
          0 &= -2 A(r) B(r) + r A(r) B'(r) - r B(r) A'(r) + 2 A(r) (B(r))^2 \\
        \end{align*}
      " />

      <p><InlineMath math="R_{00} + R_{11}"/> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R_{00} + R_{11} &= 2r A(r) A''(r) B(r) - r A(r) A'(r) B'(r) + 4 A(r) B(r) A'(r) - r B(r) (A'(r))^2 \\
          &+ (-2r A(r) B(r) A''(r)) + r B(r) (A'(r))^2 + r A(r) A'(r) B'(r) + 4 (A(r))^2 B'(r) \\
          &= 2r A(r) A''(r) B(r) - r A(r) A'(r) B'(r) - r B(r) (A'(r))^2 + 4 A(r) B(r) A'(r) \\
          &+ (-2r A(r) A''(r) B(r)) + r A(r) A'(r) B'(r) + r B(r) (A'(r))^2 + 4 (A(r))^2 B'(r) \\
          &= 4 A(r) B(r) A'(r) + 4 (A(r))^2 B'(r) \\
          &= 0, \\
          0 &= B(r) A'(r) + A(r) B'(r) = (A(r) B(r))',
        \end{align*}
      "/>
      <p>implying:</p>
      <BlockMath math="A(r) B(r) = C,"/>
      <p>where <InlineMath math="C"/> is an arbitrary constant. As <InlineMath math="r \to \infty"/>, <InlineMath math="-A(r) = -1 \iff A(r) = 1"/> and <InlineMath math="B(r) = 1"/> since <InlineMath math="C"/> is constant everywhere, the following applies:</p>
      <BlockMath math="
        \begin{align*}
          \lim_{r \to \infty} A(r) B(r) &= 1 \cdot 1 = 1, \\            
          A(r) B(r) &= 1, \\
          B(r) &= \frac{1}{A(r)}, \\
          B'(r) &= -\frac{A'(r)}{(A(r))^2}.
        \end{align*}
      "/>

      <p>Substituting into <InlineMath math="R_{22}"/>:</p>
      <BlockMath math="
        \begin{align*}
          0 &= -2 A(r) B(r) + r A(r) B'(r) - r B(r) A'(r) + 2 A(r) (B(r))^2 \\
          &= -2 A(r) \frac{1}{A(r)} - r A(r) \frac{A'(r)}{(A(r))^2} - r \frac{1}{A(r)} A'(r) + 2 A(r) \left(\frac{1}{A(r)}\right)^2 \\
          &= -2 - r \frac{A'(r)}{A(r)} - r \frac{A'(r)}{A(r)} + 2 \frac{1}{A(r)} \\
          &= -2 - 2r \frac{A'(r)}{A(r)} + 2 \frac{1}{A(r)}, \\
          0 &= -2 A(r) - 2r A'(r) + 2, \\
          0 &= -A(r) - r A'(r) + 1, \\
          r A'(r) &= 1 - A(r), \\
          r \frac{dA}{dr} &= 1 - A(r), \\
          \frac{1}{r} \frac{dr}{dA} &= \frac{1}{1 - A(r)}, \\
          \frac{dr}{r} &= \frac{dA}{1 - A(r)}, \\
          \int \frac{dr}{r} &= -\int \frac{dA}{A(r) - 1}, \\
          \ln r &= -\ln (A(r) - 1) + C_0, \\
          \ln r &= \ln \left(\frac{1}{A(r) - 1}\right) + \ln C, \\
          \ln r &= \ln \left(\frac{C}{A(r) - 1}\right), \\
          A(r) - 1 &= \frac{C}{r}, \\
          A(r) &= 1 + \frac{C}{r} \\
          &= \frac{r + C}{r}, \\
          A'(r) &= -\frac{C}{r^2}, \\
          B(r) &= \left(1 + \frac{C}{r}\right)^{-1} \\
          &= \frac{r}{r + C}, \\
          B'(r) &= \frac{C}{(r + C)^2}, \\
        \end{align*}
      "/>

      <p>The metric now looks like this:</p>
      <BlockMath math="
        g_{\mu\nu} = \begin{bmatrix}
          -\left(1 + \frac{C}{r}\right) & 0 & 0 & 0 \\
          0 & \left(1 + \frac{C}{r}\right)^{-1} & 0 & 0 \\
          0 & 0 & r^2 & 0 \\
          0 & 0 & 0 & r^2 \sin^2 \theta
        \end{bmatrix}
      " />

      <p>and the Christoffel symbols like this:</p>
      <BlockMath math="
        \begin{align*} \\
          \Gamma^0{}_{\mu\nu} &= \begin{bmatrix}
            0 & -\frac{C}{2r (r + C)} & 0 & 0 \\
            -\frac{C}{2r (r + C)} & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0
          \end{bmatrix} \\
          \Gamma^1{}_{\mu\nu} &= \begin{bmatrix}
            -\frac{C (r + C)}{2r^3} & 0 & 0 & 0 \\
            0 & \frac{C}{2 r (r + C)} & 0 & 0 \\
            0 & 0 & -(r + C) & 0 \\
            0 & 0 & 0 & -\sin^2 \theta (r + C)
          \end{bmatrix} \\
          \Gamma^2{}_{\mu\sigma} &= \begin{bmatrix}
            0 & 0 & 0 & 0 \\
            0 & 0 & \frac{1}{r} & 0 \\
            0 & \frac{1}{r} & 0 & 0 \\
            0 & 0 & 0 & -\sin \theta \cos \theta
          \end{bmatrix} \\
          \Gamma^3{}_{\mu\sigma} &= \begin{bmatrix}
            0 & 0 & 0 & 0 \\
            0 & 0 & 0 & \frac{1}{r} \\
            0 & 0 & 0 & \cot \theta \\
            0 & \frac{1}{r} & \cot \theta & 0
          \end{bmatrix}
        \end{align*}
      " />

      <LinkH2 id="solving-for-c">Solving for <InlineMath math="C"/></LinkH2>
      <p>The geodesic equations are given by:</p>
      <BlockMath math="\frac{d^2 x^{\sigma}}{d\tau^2} + \Gamma^{\sigma}_{\mu\nu} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau} = 0."/>

      <p>We will make it match to Newtonian gravity:</p>
      <BlockMath math="
        \begin{align*}
          \tau &\to t, \\
          \frac{dx^0}{d\tau} = \frac{dt}{d\tau} &\to 1, \\
          \frac{dx^i}{d\tau} &\to 0.
        \end{align*}
      "/>

      <p>Substituting into the geodesic equation:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 x^{\sigma}}{dt^2} + \Gamma^{\sigma}_{00} \left(\frac{dx^0}{dt}\right)^2 &= 0, \\
          \frac{d^2 x^1}{dt^2} - \frac{C (r + C)}{2r^3} &= 0, \\
          \frac{d^2 x^1}{dt^2} = \frac{C (r + C)}{2r^3} &= -\frac{1}{r^2}, \\
          \frac{C (r + C)}{2r^3} &= -\frac{1}{r^2}, \\
          C (r + C) &= -2r, \\
          C^2 + Cr + 2r &= 0, \\
          C &= \frac{-r \pm \sqrt{r^2 - 8r}}{2}
        \end{align*}
      "/>

    </div>
  )
}