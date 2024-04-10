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
    </div>
  )
}