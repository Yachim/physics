import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Killing Vectors"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Killing Vectors</h1>
      <p>
        A Killing vector field (or simply, Killing vector) is a vector field that leaves the metric invariant under a change of coordinates. 
        If the Lie derivative of the metric tensor with respect to a vector field vanishes, the vector field is a Killing vector field:
      </p>
      <BlockMath math="\mathcal{L}_{\boldsymbol{u}} g_{\mu \nu} = \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} u^{\sigma} + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta} = 0." />

      <p>In terms of the Levi-Civita connection, the following may be obtained:</p>
      <BlockMath math="
        \begin{align*}
            \mathcal{L}_{\boldsymbol{u}} g_{\mu \nu} &= \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} u^{\sigma} + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta} \\
            &= \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} u^{\sigma} + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} + u^{\alpha} \frac{\partial g_{\alpha \nu}}{\partial x^{\mu}} - u^{\alpha} \frac{\partial g_{\alpha \nu}}{\partial x^{\mu}} + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta} + u^{\beta} \frac{\partial g_{\mu \beta}}{\partial x^{\nu}} - u^{\beta} \frac{\partial g_{\mu \beta}}{\partial x^{\nu}} \\
            &= \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} u^{\sigma} + \frac{\partial}{\partial x^{\mu}} (u^{\alpha} g_{\alpha \nu}) - u^{\alpha} \frac{\partial g_{\alpha \nu}}{\partial x^{\mu}} + \frac{\partial}{\partial x^{\nu}} (u^{\beta} g_{\mu \beta}) - u^{\beta} \frac{\partial g_{\mu \beta}}{\partial x^{\nu}} \\
            &= \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} u^{\sigma} + \frac{\partial u_{\nu}}{\partial x^{\mu}} - u^{\alpha} \frac{\partial g_{\alpha \nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} - u^{\beta} \frac{\partial g_{\mu \beta}}{\partial x^{\nu}} \\
            &= \frac{\partial u_{\nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} + u^{\sigma} \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} - u^{\sigma} \frac{\partial g_{\sigma \nu}}{\partial x^{\mu}} - u^{\sigma} \frac{\partial g_{\mu \sigma}}{\partial x^{\nu}} \\
            &= \frac{\partial u_{\nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} - u^{\sigma} \left(\frac{\partial g_{\sigma \nu}}{\partial x^{\mu}} + \frac{\partial g_{\mu \sigma}}{\partial x^{\nu}} - \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}}\right) \\
            &= \frac{\partial u_{\nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} - 2 u_{\lambda} \frac{1}{2} g^{\sigma \lambda} \left(\frac{\partial g_{\sigma \mu}}{\partial x^{\nu}} + \frac{\partial g_{\sigma \nu}}{\partial x^{\mu}} - \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}}\right) \\
            &= \frac{\partial u_{\nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} - 2 u_{\lambda} \Gamma^{\lambda}{}_{\mu \nu} \\
            &= \frac{\partial u_{\nu}}{\partial x^{\mu}} - u_{\lambda} \Gamma^{\lambda}{}_{\mu \nu} + \frac{\partial u_{\mu}}{\partial x^{\nu}} - u_{\lambda} \Gamma^{\lambda}{}_{\nu \mu} \\
            &= \nabla_{\mu} u_{\nu} + \nabla_{\nu} u_{\mu} \\
            &= 0,
        \end{align*}
      " />
      <p>where</p>
      <BlockMath math="\nabla_{\mu} u_{\nu} + \nabla_{\nu} u_{\mu} = 0" />
      <p>is called the Killing equation. <InlineMath math="\boldsymbol{u}" /> is a killing vector if it satisfies the Killing equation.</p>

      <p>When a manifold has more than one Killing vectors, any linear combination of them is also a Killing vector.</p>

      <LinkH2 id="cartesian-coordinates">Cartesian Coordinates</LinkH2>
      <p>Consider the 2D Cartesian coordinates in flat space. The metric and its inverse are as follows:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \begin{bmatrix}
            1 & 0 \\
            0 & 1
          \end{bmatrix}, \\
          g^{\mu \nu} &= \begin{bmatrix}
            1 & 0 \\
            0 & 1
          \end{bmatrix},
        \end{align*}
      " />
      <p>and the Levi-Civita coefficients are all zero. This simplifies the Killing equation:</p>
      <BlockMath math="\frac{\partial u_{\nu}}{\partial x^{\mu}} + \frac{\partial u_{\mu}}{\partial x^{\nu}} = 0," />
      <p>or written out:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial u_x}{\partial x} + \frac{\partial u_x}{\partial x} &= 2 \frac{\partial u_x}{\partial x} = 0, \\
          \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x} &= 0, \\
          \frac{\partial u_y}{\partial x} + \frac{\partial u_x}{\partial y} &= 0, \\
          \frac{\partial u_y}{\partial y} + \frac{\partial u_y}{\partial y} &= 2 \frac{\partial u_y}{\partial y} = 0.
        \end{align*}
      " />

      <p>The second and the third equations are the same, so we have the following:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial u_x}{\partial x} = \frac{\partial u_y}{\partial y} = 0, \\
          \frac{\partial u_x}{\partial y} = -\frac{\partial u_y}{\partial x}.
        \end{align*}
      " />

      <p>The two trivial solutions are:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{u_1} &= \boldsymbol{e_x}, \\
          \boldsymbol{u_2} &= \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>There is another solution, from the first equation, we can obtain the following:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 u_x}{\partial x \partial y} &= 0, \\
          \frac{\partial^2 u_y}{\partial x \partial y} &= 0,
        \end{align*}
      " />

      <p>and from the second equation:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial} {\partial y} \frac{\partial u_x}{\partial y} &= - \frac{\partial}{\partial y} \frac{\partial u_y}{\partial x}, \\
          \frac{\partial^2 u_x}{\partial y^2} &= - \frac{\partial^2 u_y}{\partial x \partial y}, \\
          \frac{\partial^2 u_x}{\partial y^2} &= 0, \\[5ex]
          \frac{\partial} {\partial x} \frac{\partial u_x}{\partial y} &= - \frac{\partial}{\partial x} \frac{\partial u_y}{\partial x}, \\
          \frac{\partial^2 u_x}{\partial x \partial y} &= - \frac{\partial^2 u_y}{\partial x^2}, \\
          \frac{\partial^2 u_y}{\partial x^2} &= 0,
        \end{align*}
      " />
      
      <p>implying the following partial derivatives:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial u_x}{\partial y} &= A + f(x), \\
          \frac{\partial u_y}{\partial x} &= B + h(y),
        \end{align*}
      " />

      <p>and the following second order partial derivatives:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 u_x}{\partial x \partial y} = \frac{d f}{d x} &= 0, \\
          \frac{\partial^2 u_y}{\partial x \partial y} = \frac{d h}{d y} &= 0,
        \end{align*}
      " />

      <p>implying that <InlineMath math="f" /> and <InlineMath math="h" /> are linear functions:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial u_x}{\partial y} &= A + \alpha x, \\
          \frac{\partial u_y}{\partial x} &= B + \beta y.
        \end{align*}
      " />

      <p>The equation</p>
      <BlockMath math="\frac{\partial u_x}{\partial y} = -\frac{\partial u_y}{\partial x}" />
      <p>implies the following:</p>
      <BlockMath math="A + \alpha x = -B - \beta y." />

      <p>Taking the following derivatives, yields:</p>      
      <BlockMath math="
        \begin{align*}
          \frac{\partial}{\partial x} (A + \alpha x) &= \frac{\partial}{\partial x} (- B - \beta y), \\
          \alpha &= 0, \\[3ex]
          \frac{\partial}{\partial y} (A + \alpha x) &= \frac{\partial}{\partial y} (- B - \beta y), \\
          \beta &= 0,
        \end{align*}
      " />
      <p>also implying <InlineMath math="A = -B" />.</p>

      <p>The current form of the equations is as follows:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial u_x}{\partial y} &= A, \\
          \frac{\partial u_y}{\partial x} &= -A,
        \end{align*}
      " />
      <p>implying:</p>
      <BlockMath math="
        \begin{align*}
          u_x &= Ay + f(x), \\
          u_y &= -Ax + h(y),
        \end{align*}
      " />
      <p>note: the functions <InlineMath math="f" /> and <InlineMath math="h" /> are different from before.</p>

      <p>Since we know the following:</p>
      <BlockMath math="\frac{\partial u_x}{\partial x} = \frac{\partial u_y}{\partial y} = 0," />
      <p>we find that the function <InlineMath math="f" /> and <InlineMath math="h" /> are constants:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d f}{d x} = \frac{d h}{d y} &= 0, \\
          f(x) &= \alpha, \\
          h(y) &= \beta, \\
        \end{align*}
      " />
      <p>note: similarly, the constants <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> are different from before. This gives us the following form of the vector&apos;s coordinates:</p>
      <BlockMath math="
        \begin{align*}
          u_x &= Ay + \alpha, \\
          u_y &= -Ax + \beta,
        \end{align*}
      " />
      <p>or when the indices are raised:</p>
      <BlockMath math="
        \begin{align*}
          u^x &= Ay + \alpha, \\
          u^y &= -Ax + \beta.
        \end{align*}
      " />

      <p>The vector may be written as a linear combination of its components:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{u} &= u^x \boldsymbol{e_x} + u^y \boldsymbol{e_y} \\
          &= (Ay + \alpha) \boldsymbol{e_x} + (-Ax + \beta) \boldsymbol{e_y} \\
          &= Ay \boldsymbol{e_x} + \alpha \boldsymbol{e_x} -Ax \boldsymbol{e_y} + \beta \boldsymbol{e_y} \\
          &= A (y \boldsymbol{e_x} - x \boldsymbol{e_y}) + \alpha \boldsymbol{u_1} + \beta \boldsymbol{u_2},
        \end{align*}
      " />
      <p>where <InlineMath math="\boldsymbol{u_1}" /> and <InlineMath math="\boldsymbol{u_2}" /> are the trivial solutions mentioned above. Recall that another Killing vector is formed by a linear combination of Killing vectors, implying that <InlineMath math="\boldsymbol{u}" /> is either independent Killing vector or a linear combination of Killing vectors.</p>

      <p><InlineMath math="\alpha \boldsymbol{u_1} + \beta \boldsymbol{u_2}" /> is a linear combination of Killing vectors, meaning this expression is also a Killing vector. Meaning the rest of <InlineMath math="\boldsymbol{u}" /></p>
      <BlockMath math="A (y \boldsymbol{e_x} - x \boldsymbol{e_y}) = A \boldsymbol{u_3}" />
      <p>is also a Killing vector, where</p>
      <BlockMath math="\boldsymbol{u_3} = y \boldsymbol{e_x} - x \boldsymbol{e_y}" />
      <p>is the third independent Killing vector. Together, the three Killing vectors are:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{u_1} &= \boldsymbol{e_x}, \\
          \boldsymbol{u_2} &= \boldsymbol{e_y}, \\
          \boldsymbol{u_3} &= y \boldsymbol{e_x} - x \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>This is consistent with a theorem from classical geometry: a tranformation in the Euclidean plane that preserves distances can be represented as either translation (<InlineMath math="\boldsymbol{u_1}, \boldsymbol{u_2}" />) or rotation about some point (<InlineMath math="\boldsymbol{u_3}" />). Rotation about some other point may be represented as translation, then rotation and then translation back.</p>

      <p>The coordinate system may also be reflected. This change, however, is not continuous but descrete.</p>

      <LinkH2 id="conserved-quantities">Conserved Quantities Along Geodesics</LinkH2>
      <p>Consider the Levi-Civita connection, a vector <InlineMath math="U^{\nu}" /> tangent to a geodesic and a Killing field <InlineMath math="K_{\nu}" />. The quantity <InlineMath math="U^{\nu} K_{\nu}" /> is conserved along the geodesic:</p>
      <BlockMath math="U^{\mu} \nabla_{\mu} (U^{\nu} K_{\nu}) = 0." />

      <p>Recall that the parallel transport of a vector along itself is a geodesic:</p>
      <BlockMath math="U^{\mu} \nabla_{\mu} U^{\nu} = 0," />

      <p>simplifying the above assumption:</p>
      <BlockMath math="U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu} = 0," />
      <p>and since the indices are just dummy indices, we can freely swap them:</p>
      <BlockMath math="U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu} = U^{\nu} U^{\mu} \nabla_{\nu} K_{\mu}." />

      <p>From the Killing equation, we obtain:</p>
      <BlockMath math="\nabla_{\mu} K_{\nu} = -\nabla_{\nu} K_{\mu}." />

      <p>Finally, substituting, we prove the conservation:</p>
      <BlockMath math="
        \begin{align*}
          U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu} &= U^{\nu} U^{\mu} \nabla_{\nu} K_{\mu}, \\
          U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu} &= -U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu}, \\
          U^{\mu} U^{\nu} \nabla_{\mu} K_{\nu} &= 0, \\
        \end{align*}
      " />

      <p>So the following is true:</p>
      <BlockMath math="U^{\nu} K_{\nu} = \textrm{constant}." />

      <p>For a curve parametrized by <InlineMath math="\lambda" />, the above may also be expressed as follows:</p>
      <BlockMath math="\frac{d}{d\lambda} (U^{\nu} K_{\nu}) = 0." />
    </div>
  )
}