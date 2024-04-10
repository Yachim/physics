import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tensor Calculus Introduction"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity">Back</Link>
      <h1>Tensor Calculus Introduction</h1>
      <p>Tensor calculus is an extension of vector calculus to tensor fields. These tensor fields may vary over a manifold. Tensor calculus makes use of indices:</p>
      <BlockMath math="
        \begin{align*}
          &x^{\mu} & &\textrm{contravariant}, \\          
          &x_{\mu} & &\textrm{covariant}.
        \end{align*}
      "/>

      <p>A vector <InlineMath math="\boldsymbol{x}"/> may be decomposed into a linear combination of components and basis vectors. In Cartesian coordinates, with components <InlineMath math="x,\ y,\ z"/> and basis vectors <InlineMath math="\boldsymbol{\hat{i}},\ \boldsymbol{\hat{j}},\ \boldsymbol{\hat{k}}"/>, <InlineMath math="\boldsymbol{x}"/> is equal to:</p>
      <BlockMath math="\boldsymbol{x} = x \boldsymbol{\hat{i}} + y \boldsymbol{\hat{j}} + z \boldsymbol{\hat{k}}."/>

      <p>For a general vector <InlineMath math="\boldsymbol{x}"/> with components <InlineMath math="x^{\mu}"/> and basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/>, the vector is equal to:</p>
      <BlockMath math="\boldsymbol{x} = \sum_{\mu} x^{\mu} \boldsymbol{e_{\mu}}."/>
      <p>Sums like these appear a lot in tensor calculus, so we use the Einstein summation convention - when an index appears twice - once as upper (contravariant) and once as lower (covariant), it implies summation over the set:</p>
      <BlockMath math="\boldsymbol{x} = x^{\mu} \boldsymbol{e_{\mu}}."/>

      <p>The vector <InlineMath math="\boldsymbol{x}"/> is invariant - the vector remains unchanged after transformations (in this context coordinate transformations). However, the components <InlineMath math="x^{\mu}"/> and the basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/> are variant.</p>

      <LinkH2 id="covariance-contravariance">Convariance and Contravariance</LinkH2>
      <p>When tensors transform covariantly, they transform the same way that the basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/> transform. When tensors transform contravariantly, they transform the opposite way that the basis vectors transform.</p>
      <p>As an example, consider the Cartesian coordinate system:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/variance.svg`}
          width={350}
          height={350}
          alt="Bases"
        />
      </div>

      <p>and we transform the bases <InlineMath math="\boldsymbol{e_{\mu}} \to \boldsymbol{\tilde{e_{\mu}}}"/>:</p>
      <BlockMath math="\boldsymbol{\tilde{e}_{\mu}} = 2 \boldsymbol{e_{\mu}}"/>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/variance2.svg`}
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

      <p>Two notes: the partial derivatives have one upper and one lower index, so we are employing the Einstein summation convention. The second note: I am using latin and greek letters. I am using latin indices for space components and greek indices for spacetime components in general relativity. Here they are used for simplicity and don&apos;t have special meaning.</p>

      <LinkH2 id="metric-tensor">Metric Tensor</LinkH2>
    </div>
  )
}