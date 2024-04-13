import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Covariance and Contravariance"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Covariance and Contravariance</h1>
      <p>When tensors transform covariantly, they transform the same way that the basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/> transform. When tensors transform contravariantly, they transform the opposite way that the basis vectors transform.</p>
      <p>As an example, consider the Cartesian coordinate system:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariance-and-contravariance/variance.svg`}
          width={350}
          height={350}
          alt="Bases"
        />
      </div>

      <p>and we transform the bases <InlineMath math="\boldsymbol{e_{\mu}} \to \boldsymbol{\tilde{e}_{\mu}}"/>:</p>
      <BlockMath math="\boldsymbol{\tilde{e}_{\mu}} = 2 \boldsymbol{e_{\mu}}"/>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariance-and-contravariance/variance2.svg`}
          width={350}
          height={350}
          alt="Bases transformed"
        />
      </div>

      <p>The vector has to stay invariant (<InlineMath math="x^{\mu} \boldsymbol{e_{\mu}} = \tilde{x}^{\mu} \boldsymbol{\tilde{e}_{\mu}} = 2 \tilde{x}^{\mu} \boldsymbol{e_{\mu}}"/>). Considering the vector <InlineMath math="\boldsymbol{x}"/>:</p>
      <BlockMath math="
        \begin{align*}
          x^{\mu} \boldsymbol{e_{\mu}} &= 2 \tilde{x}^{\mu} \boldsymbol{e_{\mu}}, \\
          x^{\mu} &= 2 \tilde{x}^{\mu}, \\
          \tilde{x}^{\mu} &= \frac{1}{2} x^{\mu}.
        \end{align*}
      "/>

      <p>For our vector <InlineMath math="\boldsymbol{x} = 2 \boldsymbol{e_x} + 3 \boldsymbol{e_y}"/>, the transformed components would be:</p>
      <BlockMath math="
        \begin{align*}
          \tilde{x}^x &= 1, \\
          \tilde{x}^y &= \frac{3}{2}, \\
          \boldsymbol{x} &= \boldsymbol{\tilde{e}_x} + \frac{3}{2} \boldsymbol{\tilde{e}_y}.
        \end{align*}
      "/>

      <p>In general when transforming the coordinates <InlineMath math="x^{\mu} \to \tilde{x}^{\mu}"/> a general tensor <InlineMath math="T^{\alpha \beta ...}{}_{\gamma \delta ...} \to \tilde{T}^{\alpha \beta ...}{}_{\gamma \delta ...}"/> is transformed as follows:</p>
      <BlockMath math="
        \tilde{T}^{\alpha \beta ...}{}_{\gamma \delta ...} = \frac{\partial \tilde{x}^{\alpha}}{\partial x^{a}} \frac{\partial \tilde{x}^{\beta}}{\partial x^{b}} ... \frac{\partial x^{c}}{\partial \tilde{x}^{\gamma}} \frac{\partial x^{d}}{\partial \tilde{x}^{\delta}} ... T^{a b ...}{}_{c d ...}.
      "/>

      <p>Two notes: the partial derivatives have one upper and one lower index, so we are employing the Einstein summation convention. The second note: I am using latin and greek letters. I am using latin indices for space components and greek indices for spacetime components in general relativity. Here they are used for simplicity and don&apos;t have any special meaning.</p>

      <p>We can make sense of the above relationship by considering a vector <InlineMath math="\boldsymbol{x}" /> parametrized by <InlineMath math="\lambda" /> and its tangent vector <InlineMath math="\frac{d\boldsymbol{x}}{d\lambda}" />. By chain rule:</p>
      <BlockMath math="\frac{d \boldsymbol{x}}{d \lambda} = \frac{\partial \boldsymbol{x}}{\partial x^{\mu}} \frac{d x^{\mu}}{d\lambda} = \frac{d x^{\mu}}{d \lambda} \boldsymbol{e_{\mu}}." />

      <p>Now, consider a transformation <InlineMath math="x^{\mu} \to \tilde{x}^{\mu}" />. The tangent vector is equal to:</p>
      <BlockMath math="\frac{d \boldsymbol{x}}{d \lambda} = \frac{\partial \boldsymbol{x}}{\partial \tilde{x}^{\mu}} \frac{d \tilde{x}^{\mu}}{d\lambda} = \frac{d \tilde{x}^{\mu}}{d \lambda} \boldsymbol{\tilde{e}_{\mu}}." />

      <p>We can apply chain rule on the last part:</p>
      <BlockMath math="\frac{d \tilde{x}^{\mu}}{d \lambda} \boldsymbol{\tilde{e}_{\mu}} = \frac{\partial \tilde{x}^{\mu}}{\partial x^{\nu}} \frac{d x^{\nu}}{d \lambda} \boldsymbol{\tilde{e}_{\mu}}," />
      <p>implying the component <InlineMath math="\frac{d \tilde{x}^{\mu}}{d \lambda}" /> in the new basis <InlineMath math="\boldsymbol{\tilde{e}_{\mu}}" /> is equal to:</p>
      <BlockMath math="\frac{d \tilde{x}^{\mu}}{d \lambda} = \frac{\partial \tilde{x}^{\mu}}{\partial x^{\nu}} \frac{d x^{\nu}}{d \lambda}," />

      <p>Now, consider a covector <InlineMath math="df" />:</p>
      <BlockMath math="df = \frac{\partial f}{\partial x^{\mu}} dx^{\mu} = \frac{\partial f}{\partial x^{\mu}} \epsilon^{\mu}." />

      <p>Now, consider a transformation <InlineMath math="x^{\mu} \to \tilde{x}^{\mu}" />. The covector is now equal to:</p>
      <BlockMath math="df = \frac{\partial f}{\partial \tilde{x}^{\mu}} d\tilde{x}^{\mu} = \frac{\partial f}{\partial \tilde{x}^{\mu}} \tilde{\epsilon}^{\mu}." />

      <p>And similarly, we can apply chain rule on the last part:</p>
      <BlockMath math="\frac{\partial f}{\partial \tilde{x}^{\mu}} \tilde{\epsilon}^{\mu} = \frac{\partial f}{\partial x^{\nu}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}} \tilde{\epsilon}^{\mu}," />
      <p>implying:</p>
      <BlockMath math="\frac{\partial f}{\partial \tilde{x}^{\mu}} = \frac{\partial f}{\partial x^{\nu}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}}." />

      <p>For the transformation <InlineMath math="x^{\mu} \to \tilde{x}^{\mu}" />, the partial derivatives <InlineMath math="\frac{\partial x^{\mu}}{\partial \tilde{x}^{\mu}}" /> form the Jacobian which is used for covariant transformation:</p>
      <BlockMath math="J = \frac{\partial x^{\mu}}{\partial \tilde{x}^{\nu}} = \begin{bmatrix}
        \frac{\partial x^1}{\partial \tilde{x}^1} & \dots  & \frac{\partial x^1}{\partial \tilde{x}^n} \\
        \vdots                                    & \ddots & \vdots \\
        \frac{\partial x^n}{\partial \tilde{x}^1} & \dots  & \frac{\partial x^n}{\partial \tilde{x}^n}
      \end{bmatrix}," />
      <p>And the partial derivatives <InlineMath math="\frac{\partial \tilde{x}^{\mu}}{\partial x^{\mu}}" /> form the inverse jacobian used for contravariant transformations:</p>
      <BlockMath math="J^{-1} = \frac{\partial \tilde{x}^{\mu}}{\partial x^{\nu}} = \begin{bmatrix}
        \frac{\partial \tilde{x}^1}{\partial x^1} & \dots  & \frac{\partial \tilde{x}^1}{\partial x^n} \\
        \vdots                                    & \ddots & \vdots \\
        \frac{\partial \tilde{x}^n}{\partial x^1} & \dots  & \frac{\partial \tilde{x}^n}{\partial x^n}
      \end{bmatrix}." />

      <p>Unlike classic derivatives, <InlineMath math="\frac{dx}{df} = \frac{1}{\frac{df}{dx}}" />, the inverse partial derivative:</p>
      <BlockMath math="\frac{\partial x^{\mu}}{\partial \tilde{x}^{\nu}} \neq \frac{1}{\frac{\partial \tilde{x}^{\nu}}{\partial x^{\mu}}}," />
      <p>however, the Jacobian satisfies the following:</p>
      <BlockMath math="
        \begin{align*}
          J^{-1}J &= \frac{\partial \tilde{x}^{\mu}}{\partial x^{\nu}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\sigma}} \\
          &= \frac{\partial \tilde{x}^{\mu}}{\partial \tilde{x}^{\sigma}} \\
          &= \delta^{\mu}_{\sigma} = \begin{cases}
            1 & \mu &= \sigma, \\
            0 & \mu &\neq \sigma.
          \end{cases}
        \end{align*}
      " />
    </div>
  )
}