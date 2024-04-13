import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gradient"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
        <Link href="/general-relativity/math-preliminaries">Back</Link>
        <h1>Gradient</h1>
        <p>Recall that the covector <InlineMath math="df" /> acting on the vector <InlineMath math="\boldsymbol{v}" /> is the directional derivative of <InlineMath math="f" /> in the direction of <InlineMath math="v" />:</p>
        <BlockMath math="df(\boldsymbol{v}) = \nabla_{\boldsymbol{v}}f," />
        <p>and to calculate the directional derivative, we take the dot product of the gradient <InlineMath math="\nabla f" /> and <InlineMath math="\boldsymbol{v}" />:</p>
        <BlockMath math="df(\boldsymbol{v}) = \nabla_{\boldsymbol{v}}f = \nabla f \cdot \boldsymbol{v}," />
        <p>so <InlineMath math="df" /> is the dot product of the gradient of <InlineMath math="f" /> with a vector:</p>
        <BlockMath math="df = \nabla f \cdot \_." />

        <p>Recall that we can pair vector <InlineMath math="\boldsymbol{v}" /> with a covector:</p>
        <BlockMath math="\boldsymbol{v} \leftrightarrow \boldsymbol{v} \cdot \_," />
        <p>we can pair the gradient <InlineMath math="\nabla f" /> with its covector:</p>
        <BlockMath math="
          \begin{align*}
            \nabla f &\leftrightarrow \nabla f \cdot \_, \\
            \nabla f &\leftrightarrow df.
          \end{align*}
        " />

        <p>To calculate the dot product <InlineMath math="\nabla f \cdot \_" />, we use the metric tensor:</p>
        <BlockMath math="
          \begin{align*}
            df = \nabla f \cdot \_ &= g(\nabla f, \_) \\
            &= g_{\alpha \beta} \epsilon^{\alpha} \epsilon^{\beta} [(\nabla f)^{\gamma} \boldsymbol{e}_{\gamma}] \\
            &= g_{\alpha \beta} (\nabla f)^{\gamma} \epsilon^{\alpha} \epsilon^{\beta} (\boldsymbol{e}_{\gamma}) \\
            &= g_{\alpha \beta} (\nabla f)^{\beta} \epsilon^{\alpha}.
          \end{align*}
        " />

        <p>Recall, the covector can also be written as follows:</p>
        <BlockMath math="
          \begin{align*}
            df &= \frac{\partial f}{\partial x^{\alpha}} dx^{\alpha} \\
            &= \frac{\partial f}{\partial x^{\alpha}} \epsilon^{\alpha} \\
            &= g_{\alpha \beta} (\nabla f)^{\beta} \epsilon^{\alpha},
          \end{align*}
        " />
        <p>implying:</p>
        <BlockMath math="
          \begin{align*}
            \frac{\partial f}{\partial x^{\alpha}} &= g_{\alpha \beta} (\nabla f)^{\beta}, \\
            g^{\alpha \gamma} \frac{\partial f}{\partial x^{\alpha}} &= g_{\alpha \beta} g^{\alpha \gamma} (\nabla f)^{\beta} \\
            &= \delta_{\beta}^{\gamma} (\nabla f)^{\beta} \\
            &= (\nabla f)^{\gamma}. \\
          \end{align*}
        " />

        <p>The gradient may be written as linear combination of its components:</p>
        <BlockMath math="\nabla f = (\nabla f)^{\mu} \boldsymbol{e_{\mu}} = g^{\nu \mu} \frac{\partial f}{\partial x^{\nu}} \boldsymbol{e_{\mu}}." />

        <p>Consider the 2D Cartesian coordinates where the metric tensor <InlineMath math="g_{\mu \nu} = \delta_{\mu \nu}" /> and <InlineMath math="g^{\mu \nu} = \delta^{\mu \nu}" />:</p>
        <BlockMath math="
          \begin{align*}
            \nabla f &= g^{\nu \mu} \frac{\partial f}{\partial x^{\nu}} \boldsymbol{e_{\mu}} \\
            &= \delta^{\nu \mu} \frac{\partial f}{\partial x^{\nu}} \boldsymbol{e_{\mu}} \\
            &= \sum_{\mu}  \frac{\partial f}{\partial x^{\mu}} \boldsymbol{e_{\mu}} \\
            &= \frac{\partial f}{\partial x} \boldsymbol{e_x} + \frac{\partial f}{\partial y} \boldsymbol{e_y}.
          \end{align*}
        " />

        <p>But for polar coordinates, the metric tensor is:</p>
        <BlockMath math="
          \begin{align*}
            g_{\mu \nu} &= \begin{bmatrix}
              1 & 0 \\
              0 & r^2
            \end{bmatrix}, \\
            g^{\mu \nu} &= \begin{bmatrix}
              1 & 0 \\
              0 & \frac{1}{r^2}
            \end{bmatrix},
          \end{align*}
        " />
        <p>then the gradient is equal to:</p>
        <BlockMath math="
          \begin{align*}
            \nabla f &= g^{\nu \mu} \frac{\partial f}{\partial x^{\nu}} \boldsymbol{e_{\mu}} \\
            &= \frac{\partial f}{\partial r} \boldsymbol{e_r} + \frac{1}{r^2} \frac{\partial f}{\partial \theta} \boldsymbol{e_{\theta}}.
          \end{align*}
        " />
    </div>
  )
}