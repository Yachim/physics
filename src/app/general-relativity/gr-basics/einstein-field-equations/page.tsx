import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Einstein Field Equations"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/gr-basics">Back</Link>
      <h1>Einstein Field Equations</h1>
      <p>Recall the contracted Bianchi identity:</p>
      <BlockMath math="G^{\mu \nu}{}{, \mu} = \left(R^{\mu \nu} - \frac{1}{2} R g^{\mu \nu}\right)_{; \mu} = 0," />
      <p>and the conservation of energy-momentum:</p>
      <BlockMath math="T^{\mu \nu}{}_{; \mu} = 0." />

      <p>Because of metric compatibility (the covariant derivative of metric tensor is zero), we can add a term:</p>
      <BlockMath math="\left(R^{\mu \nu} - \frac{1}{2} R g^{\mu \nu} + \Lambda g^{\mu \nu}\right)_{; \mu} = 0," />
      <p>where <InlineMath math="\Lambda" /> is the cosmological constant. It is related to the expansion of the universe. The current form of Einstein field equation is:</p>
      <BlockMath math="R^{\mu \nu} - \frac{1}{2} R g^{\mu \nu} + \Lambda g^{\mu \nu} = \kappa T^{\mu \nu}," />
      <p>where <InlineMath math="\kappa" /> is the Einstein gravitational constant. We need to solve for it. By doing the following:</p>
      <ol>
        <li>taking the low velocity limit</li>
        <li>taking the weak gravity limit</li>
        <li>assuming time-independent metric</li>
      </ol>
      <p>and match it with Newton-Cartan theory.</p>

      <LinkH2 id="solving-kappa">Solving for Einstein Gravitational Constant</LinkH2>
      <p>In low velocity limit, the proper time approaches the coordinate time and the spatial velocities approach zero:</p>
      <BlockMath math="
        \begin{align*}
          \tau &\to t, \\
          \boldsymbol{U} &\to \begin{bmatrix}
            1 \\
            0 \\
            0 \\
            0
          \end{bmatrix}.
        \end{align*}
      " />

      <p>In weak gravity limit, the metric approaches the Minkowski metric plus a very small error:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &\to \eta_{\mu \nu} + h_{\mu \nu}, \\
          \eta_{\mu \nu} &= \textrm{diag}(-1, 1, 1, 1), \\
          |h_{\mu \nu}| &\ll 1.
        \end{align*}
      " />

      <p>This means that when doing summations, <InlineMath math="h_{\mu \nu}" /> can be ommited:</p>
      <BlockMath math="A^{\mu \alpha} g_{\alpha \nu} = A^{\mu \alpha} (\eta_{\alpha \nu} + h_{\alpha \nu}) = A^{\mu \alpha} \eta_{\alpha \nu}," />
      <p>but when taking derivatives, <InlineMath math="\eta_{\mu \nu}" /> is zero:</p>
      <BlockMath math="g_{\mu \nu, \sigma} = \eta_{\mu \nu, \sigma} + h_{\mu \nu, \sigma} = h_{\mu \nu, \sigma}." />

      <p>Time-independent metric means the following:</p>
      <BlockMath math="g_{\mu \nu, t} = 0," />
      <p>implying:</p>
      <BlockMath math="\Gamma^{\sigma}{}_{\mu \nu, t} = 0." />

      <p>A final assumption is that the cosmological constant is small enough to be ignored and that all gravity is caused by mass. Meaning the energy-momentum tensor is that of a dust and the only nonzero component is:</p>
      <BlockMath math="T^{tt} = \rho," />
      <p>and the component is the same with its both indices lowered:</p>
      <BlockMath math="T_{tt} = T^{\mu \nu} g_{\mu t} g_{\nu t} = T^{tt} \eta_{tt} \eta_{tt} = T^{tt} (-1) (-1) = T^{tt}." />

      <p>The Einstein field equations look like this:</p>
      <BlockMath math="R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = \kappa T_{\mu \nu}," />
      <p>from the spatial components, we can calculate the spatial components of the Ricci tensor:</p>
      <BlockMath math="
        \begin{align*}
          R_{ij} - \frac{1}{2} R g_{ij} &= \kappa T_{ij}, \\
          R_{ij} - \frac{1}{2} R \eta_{ij} &= 0, \\
          R_{ij} - \frac{1}{2} R \delta_{ij} &= 0, \\
          R_{ij} &= \frac{1}{2} R \delta_{ij},
        \end{align*}
      " />
      <p>and this may be substituted into the equation for the Ricci scalar to calculate the time-time component of the Ricci tensor:</p>
      <BlockMath math="
        \begin{align*}
          R &= R_{\mu \nu} g^{\mu \nu} \\
          &= R_{\mu \nu} \eta^{\mu \nu} \\
          &= -R_{tt} + R_{11} + R_{22} + R_{33} \\
          &= -R_{tt} + \frac{3}{2} R, \\
          R_{tt} &= \frac{1}{2} R,
        \end{align*}
      " />
      <p>which is consistent with the spatial components of the Ricci tensor:</p>
      <BlockMath math="R_{\mu \nu} = \frac{1}{2} R \delta_{\mu \nu}." />

      <p>Substituting this into the Einstein field equations, we get (off-diagonal terms give us <InlineMath math="0 = 0" />):</p>
      <BlockMath math="
        \begin{align*}
          R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} &= \kappa T_{\mu \nu}, \\
          \frac{1}{2} R \delta_{\mu \nu} - \frac{1}{2} R \eta_{\mu \nu} &= \kappa T_{\mu \nu}, \\
          \frac{1}{2} R \delta_{\mu \mu} - \frac{1}{2} R \eta_{\mu \mu} &= \kappa T_{\mu \mu}, \\[3ex]

          \frac{1}{2} R \delta_{tt} - \frac{1}{2} R \eta_{tt} &= \kappa T_{tt}, \\
          \frac{1}{2} R + \frac{1}{2} R &= \kappa \rho, \\
          R &= \kappa \rho, \\[3ex]

          R_{ii} - \frac{1}{2} R g_{ii} &= \kappa T_{ii}, \\
          R_{ii} - \frac{1}{2} R \eta_{ii} &= 0, \\
          R_{ii} - \frac{1}{2} R \delta_{ii} &= 0, \\
          \frac{1}{2} R - \frac{1}{2} R &= 0, \\
          0 &= 0,
        \end{align*}
      " />
      <p>so the only relevant term is the time-time component of the equation which results in:</p>
      <BlockMath math="R = \kappa \rho." />

      <p>Now, remember from the Newton-Cartan theory:</p>
      <BlockMath math="R_{tt} = 4 \pi \rho," />
      <p>where we found that</p>
      <BlockMath math="R_{tt} = \frac{1}{2} R = \frac{1}{2} \kappa \rho." />

      <p>We can set these two equations equal and solve for <InlineMath math="\kappa" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{1}{2} \kappa \rho = 4 \pi, \\
          \kappa = 8 \pi.
        \end{align*}
      " />

      <p>We have solved for the Einstein gravitational constant and can now substite it into the Einstein field equation:</p>
      <BlockMath math="R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} + \Lambda g_{\mu \nu} = 8 \pi T_{\mu \nu}." />
      <p>We can also obtain a trace reversed form by multiplying both sides by <InlineMath math="g^{\mu \nu}" />:</p>
      <BlockMath math="
        \begin{align*}
          R_{\mu \nu} g^{\mu \nu} - \frac{1}{2} R g_{\mu \nu} g^{\mu \nu} + \Lambda g_{\mu \nu} g^{\mu \nu} &= \kappa T_{\mu \nu} g^{\mu \nu}, \\
          R - \frac{1}{2} R \delta^{\mu}_{\mu} + \Lambda \delta^{\mu}_{\mu} &= \kappa T, \\
          R - 2 R + 4 \Lambda &= \kappa T, \\
          -R + 4 \Lambda &= \kappa T, \\
          R &= 4 \Lambda -\kappa T,
        \end{align*}
      " />
      <p>substituting for the Ricci scalar:</p>
      <BlockMath math="
        \begin{align*}
          R_{\mu \nu} - \frac{1}{2} (4 \Lambda - \kappa T) g_{\mu \nu} + \Lambda g_{\mu \nu} &= \kappa T_{\mu \nu}, \\
          R_{\mu \nu} + \frac{1}{2} \kappa T g_{\mu \nu} - 2 \Lambda g_{\mu \nu} + \Lambda g_{\mu \nu} &= \kappa T_{\mu \nu}, \\
          R_{\mu \nu} + \frac{1}{2} \kappa T g_{\mu \nu} - \Lambda g_{\mu \nu} &= \kappa T_{\mu \nu}, \\
          R_{\mu \nu} &= \kappa \left(T_{\mu \nu} - \frac{1}{2} T g_{\mu \nu}\right) + \Lambda g_{\mu \nu}, \\
          &= 8 \pi \left(T_{\mu \nu} - \frac{1}{2} T g_{\mu \nu}\right) + \Lambda g_{\mu \nu},
        \end{align*}
      " />
      <p>where</p>
      <BlockMath math="T = T^{\mu}{}_{\mu} = T_{\mu \nu} g^{\mu \nu}" />
      <p>is the trace of the energy-momentum tensor.</p>

      <p>So we have the two forms of the equations:</p>
      <BlockMath math="
        \begin{align*}
          R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} + \Lambda g_{\mu \nu} &= 8 \pi T_{\mu \nu}, \\
          8 \pi \left(T_{\mu \nu} - \frac{1}{2} T g_{\mu \nu}\right) + \Lambda g_{\mu \nu} &= R_{\mu \nu}.
        \end{align*}
      " />

      <p>The Einstein gravitational constant</p>
      <BlockMath math="\kappa \approx 2.08 \cdot 10^{-43}\ N^{-1}," />
      <p>meaning it takes a lot of mass and energy to curve the spacetime.</p>
    </div>
  )
}