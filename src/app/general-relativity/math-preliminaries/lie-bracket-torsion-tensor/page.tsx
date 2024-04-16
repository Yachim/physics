import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lie Bracket and Torsion Tensor"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Lie Bracket and Torsion Tensor</h1>
      <p>In order to work with the Lie bracket, we need to consider the meaning of &quot;travelling along&quot; a vector field. Consider a vector field <InlineMath math="\boldsymbol{v} = \boldsymbol{e_x} + x \boldsymbol{e_y}" />. This vector field tells us the velocity of a curve parametrized by <InlineMath math="\lambda" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d}{d\lambda} &= \frac{d x}{d\lambda} \boldsymbol{e_y} + \frac{d y}{d\lambda} \boldsymbol{e_y} = \boldsymbol{e_x} + x \boldsymbol{e_y},
        \end{align*}
      " />
      <p>this gives us the following partial differential equations with solutions:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d x}{d\lambda} &= 1, \\
          \frac{d y}{d\lambda} &= x,
        \end{align*}
      " />
      <p>with the solutions:</p>
      <BlockMath math="
        \begin{align*}
          x(\lambda) &= \lambda + x_0, \\
          y(\lambda) &= \frac{1}{2} \lambda^2 + x_0 \lambda + y_0,
        \end{align*}
      " />
      <p>where <InlineMath math="x_0" /> and <InlineMath math="y_0" /> describe the initial position. These are equations for a flow curve. Flow curve is a curve tangent to all vectors in a vector field.</p>

      <LinkH2 id="lie-bracket">Lie Bracket</LinkH2>
      <p>The Lie bracket, also called the commutator, is defined as follows:</p>
      <BlockMath math="[\boldsymbol{u}, \boldsymbol{v}] = \boldsymbol{u}(\boldsymbol{v}) - \boldsymbol{v}(\boldsymbol{u})," />
      <p>this tells us the difference between applying <InlineMath math="\boldsymbol{u}" /> to <InlineMath math="\boldsymbol{v}" /> and applying <InlineMath math="\boldsymbol{v}" /> to <InlineMath math="\boldsymbol{u}" />. The Lie bracket may be expanded:</p>
      <BlockMath math="
        \begin{align*}
          [\boldsymbol{u}, \boldsymbol{v}] &= u^{\mu} \frac{\partial}{\partial x^{\mu}} \left(v^{\nu} \frac{\partial}{\partial x^{\nu}}\right) - v^{\mu} \frac{\partial}{\partial x^{\mu}} \left(u^{\nu} \frac{\partial}{\partial x^{\nu}}\right) \\
          &= u^{\mu} \left(\frac{\partial v^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} + v^{\nu} \frac{\partial}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}}\right) - v^{\mu} \left(\frac{\partial u^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} + u^{\nu} \frac{\partial}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}}\right) \\
          &= u^{\mu} \frac{\partial v^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} + u^{\mu} v^{\nu} \frac{\partial}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} - v^{\mu} \frac{\partial u^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} - v^{\mu} u^{\nu} \frac{\partial}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} \\
          &= u^{\mu} \frac{\partial v^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} - v^{\mu} \frac{\partial u^{\nu}}{\partial x^{\mu}} \frac{\partial}{\partial x^{\nu}} \\
          &= \left(u^{\mu} \frac{\partial v^{\nu}}{\partial x^{\mu}} - v^{\mu} \frac{\partial u^{\nu}}{\partial x^{\mu}}\right) \boldsymbol{e_{\nu}}.
        \end{align*}
      " />

      <p>As an example, consider the following vector fields:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{u} &= \boldsymbol{e_x}, \\
          \boldsymbol{v} &= x \boldsymbol{e_y}.
        \end{align*}
      " />
      <div className="w-full grid gap-2 grid-cols-[auto_auto] justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/lie-bracket-torsion-tensor/lie-bracket-u.svg`}
              width={400}
              height={400}
              alt="Illustration of u"
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/lie-bracket-torsion-tensor/lie-bracket-v.svg`}
              width={400}
              height={400}
              alt="Illustration of v"
          />
          <p className="justify-self-center"><InlineMath math="\boldsymbol{u}" /></p>
          <p className="justify-self-center"><InlineMath math="\boldsymbol{v}" /></p>
      </div>

      <p>The Lie bracket is equal to:</p>
      <BlockMath math="
        \begin{align*}
          [\boldsymbol{u}, \boldsymbol{v}] &= \left(u^{\mu} \frac{\partial v^x}{\partial x^{\mu}} - v^{\mu} \frac{\partial u^x}{\partial x^{\mu}}\right) \boldsymbol{e_x} + \left(u^{\mu} \frac{\partial v^y}{\partial x^{\mu}} - v^{\mu} \frac{\partial u^y}{\partial x^{\mu}}\right) \boldsymbol{e_y} \\
          &= \left(u^x \frac{\partial v^x}{\partial x} - v^y \frac{\partial u^x}{\partial y}\right) \boldsymbol{e_x} + \left(u^x \frac{\partial v^y}{\partial x} - v^y \frac{\partial u^y}{\partial y}\right) \boldsymbol{e_y} \\
          &= \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>Looking at both vector fields in one plot:</p>
      <div className="w-full flex flex-col items-center justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/lie-bracket-torsion-tensor/lie-bracket-uv.svg`}
              width={500}
              height={500}
              alt="Illustration of u and v"
          />
          <p>Blue: <InlineMath math="\boldsymbol{u}" /></p>
          <p>Red: <InlineMath math="\boldsymbol{v}" /></p>
          <p>(Not to scale)</p>
      </div>

      <p>We can make sense of this by considering the flow curves. We start at a point and travel along the blue vector field (<InlineMath math="\boldsymbol{u}" />) and this changes the vector field <InlineMath math="\boldsymbol{v}" />. Then we go back to the same point and travel along the red vector field (<InlineMath math="\boldsymbol{v}" />) and this changes the vector field <InlineMath math="\boldsymbol{u}" /> (not in this specific case). The difference is the Lie bracket:</p>
      <div className="w-full flex flex-col items-center justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/lie-bracket-torsion-tensor/lie-bracket-uv2.svg`}
              width={500}
              height={500}
              alt="Illustration of u and v with the flow lines"
          />
          <p>Green: <InlineMath math="\boldsymbol{u}(\boldsymbol{v})" /></p>
          <p>Orange: <InlineMath math="\boldsymbol{v}(\boldsymbol{u})" /></p>
          <p>Black: <InlineMath math="[\boldsymbol{u}, \boldsymbol{v}] = \boldsymbol{u}(\boldsymbol{v}) - \boldsymbol{v}(\boldsymbol{u})" /></p>
          <p>(Not to scale)</p>
      </div>
      <p>When the lie bracket is zero, it means that the flow curves form a closed loop.</p>

      <p>We may also say that the coordinate lines are the flow curves along basis vectors. And their Lie bracket is zero:</p>
      <BlockMath math="
        \begin{align*}
          [\boldsymbol{e_{\mu}}, \boldsymbol{e_{\nu}}] &= \frac{\partial}{\partial x^{\mu}} \left(\frac{\partial}{\partial x^{\nu}}\right) - \frac{\partial}{\partial x^{\nu}} \left(\frac{\partial}{\partial x^{\mu}}\right) \\
          &= \frac{\partial^2}{\partial x^{\mu} \partial x^{\nu}} - \frac{\partial^2}{\partial x^{\nu} \partial x^{\mu}} \\
          &= 0,
        \end{align*}
      " />
      <p>and this is good. It means that the coordinate lines close.</p>

      <LinkH2 id="torsion-tensor">Torsion Tensor</LinkH2>
      <p>The torsion tensor <InlineMath math="T(\boldsymbol{u}, \boldsymbol{v})" /> acting on the vectors <InlineMath math="\boldsymbol{u}" /> and <InlineMath math="\boldsymbol{v}" /> tells us the separation between parallel transported vectors:</p>
      <div className="w-full flex flex-col items-center justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/lie-bracket-torsion-tensor/torsion.svg`}
              width={500}
              height={500}
              alt="Illustration of torsion tensor"
          />
      </div>
      <p>where <InlineMath math="\boldsymbol{v_p}" /> is parallel transport of <InlineMath math="\boldsymbol{v}" /> and <InlineMath math="\boldsymbol{u_p}" /> is parallel transport of <InlineMath math="\boldsymbol{u}" />. The covariant derivative measures how much a vectors changes relative to the parallel transform of the vector. We don&apos;t know the parallel transported vector. But we can still express the torsion tensor as follows:</p>
      <BlockMath math="T(\boldsymbol{u}, \boldsymbol{v}) = \nabla_{\boldsymbol{u}} \boldsymbol{v} - \nabla_{\boldsymbol{v}} \boldsymbol{u} - [\boldsymbol{u}, \boldsymbol{v}]." />

      <p>Torsion-free property is a property of a connection, meaning it does not depend on the vector fields we choose. It means that the torsion tensor is zero:</p>
      <BlockMath math="T(\boldsymbol{u}, \boldsymbol{v}) = \nabla_{\boldsymbol{u}} \boldsymbol{v} - \nabla_{\boldsymbol{v}} \boldsymbol{u} - [\boldsymbol{u}, \boldsymbol{v}] = \boldsymbol{0}." />

      <p>We can solve for the components:</p>
      <BlockMath math="
        \begin{align*}
          T(\boldsymbol{u}, \boldsymbol{v}) &= \nabla_{\boldsymbol{u}} \boldsymbol{v} - \nabla_{\boldsymbol{v}} \boldsymbol{u} - [\boldsymbol{u}, \boldsymbol{v}] \\
          &= u^{\mu} \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} - v^{\mu} \left(\frac{\partial u^{\sigma}}{\partial x^{\mu}} + u^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} - \left(u^{\mu} \frac{\partial v^{\sigma}}{\partial x^{\mu}} - v^{\mu} \frac{\partial u^{\sigma}}{\partial x^{\mu}}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(u^{\mu} \frac{\partial v^{\sigma}}{\partial x^{\mu}} + u^{\mu} v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} - v^{\mu} \frac{\partial u^{\sigma}}{\partial x^{\mu}} - v^{\mu} u^{\nu} \Gamma^{\sigma}{}_{\mu \nu} - u^{\mu} \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\mu} \frac{\partial u^{\sigma}}{\partial x^{\mu}}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(u^{\mu} v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} - v^{\mu} u^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(u^{\mu} v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} - u^{\mu} v^{\nu} \Gamma^{\sigma}{}_{\nu \mu}\right) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} v^{\nu} (\Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\sigma}{}_{\nu \mu}) \boldsymbol{e_{\sigma}},
        \end{align*}
      " />
      <p>so the components of the torsion tensor are:</p>
      <BlockMath math="T^{\sigma}{}_{\mu \nu} = \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\sigma}{}_{\nu \mu}," />
      <p>which only depend on the connection.</p>

      <p>And again, the torsion-free property means that the torsion tensor components are zero:</p>
      <BlockMath math="
        \begin{align*}
          T^{\sigma}{}_{\mu \nu} = \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\sigma}{}_{\nu \mu} &= 0, \\
          \Gamma^{\sigma}{}_{\mu \nu} &= \Gamma^{\sigma}{}_{\nu \mu}.
        \end{align*}
      " />

      <p>We could also express the torsion tensor as follows:</p>
      <BlockMath math="T^{\sigma}{}_{\mu \nu} = 2 \Gamma^{\sigma}{}_{[\mu \nu]}," />
      <p>where the brackets mean that the components are symmetrized. For any general tensor:</p>
      <BlockMath math="A_{[\mu_1 \mu_2 ... \mu_n] \nu}{}^{\sigma} = \frac{1}{n!} (A_{\mu_1 \mu_2 ... \mu_n \nu}{}^{\sigma} + \textrm{alternating sum over \(\mu\) indices})," />
      <p>where alternating sum means minus for odd permutations and plus for even permutations.</p>

      <p>For a general tensor, components may be symmetrized:</p>
      <BlockMath math="A_{(\mu_1 \mu_2 ... \mu_n) \nu}{}^{\sigma} = \frac{1}{n!} (A_{\mu_1 \mu_2 ... \mu_n \nu}{}^{\sigma} + \textrm{sum over \(\mu\) indices})." />

      <p>A tensor having symmetric or antisymmetric components means:</p>
      <BlockMath math="
        \begin{align*}
          A_{\mu \nu} &= A_{\nu \mu} & \textrm{symmetric}, \\
          B_{\mu \nu} &= -B_{\nu \mu} & \textrm{antisymmetric}.
        \end{align*}
      " />

      <p>A tensor with symmetrized components <InlineMath math="A_{(\mu_1 \mu_2 ... \mu_n) \nu}{}^{\sigma}" /> or antisymmetrized components <InlineMath math="A_{[\mu_1 \mu_2 ... \mu_n] \nu}{}^{\sigma}" /> is not the same tensor as <InlineMath math="A_{\mu_1 \mu_2 ... \mu_n \nu}{}^{\sigma}" />.</p>

      <p>For a torsion free connection, the Christoffel symbols are the same as symmetrized:</p>
      <BlockMath math="\Gamma^{\sigma}{}_{\mu \nu} = \Gamma^{\sigma}{}_{(\mu \nu)}."/>
    </div>
  )
}