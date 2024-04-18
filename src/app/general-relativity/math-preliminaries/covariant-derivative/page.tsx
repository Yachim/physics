import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Covariant Derivative"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Covariant Derivative</h1>
      <p>Covariant derivative is a way to understand the rate of change of tensor fields that takes into account changing basis vectors.</p>

      <LinkH2 id="flat-space">Flat Space Definition</LinkH2>
      <p>In flat space, the covariant derivative of a vector <InlineMath math="\boldsymbol{v}" /> is the ordinary derivative of vector where we make sure to take derivatives of basis vectors:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{v}}{\partial x^{\mu}} &= \frac{\partial}{\partial x^{\mu}} (v^{\nu} \boldsymbol{e_{\nu}}) \\
          &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}}.
        \end{align*}
      " />

      <p>In the <Link href="/general-relativity/math-preliminaries/geodesics">previous chapter</Link>, we expressed partial derivative of basis vectors as follows:</p>
      <BlockMath math="\frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}} = \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}," />
      <p>since we are dealing with flat space, the normal components are zero:</p>
      <BlockMath math="\frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}} = \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}," />
      <p>substituting into the previous equation:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{v}}{\partial x^{\mu}} &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} \\
          &= \frac{\partial v^{\sigma}}{\partial x^{\mu}} \boldsymbol{e_{\sigma}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} \\
          &= \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}},
        \end{align*}
      " />
      <p>or, expressing as components:</p>
      <BlockMath math="\nabla_{\mu} v^{\sigma} = v^{\sigma}{}_{;\mu} = \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}," />
      <p>where <InlineMath math="\nabla_{\mu} v^{\sigma} = v^{\sigma}{}_{;\mu}" /> is the covariant derivative of the <InlineMath math="\sigma" /> component of the vector <InlineMath math="\boldsymbol{v}" /> in the direction of the <InlineMath math="\mu" /> coordinate.</p>

      <p>As an example, consider the following vector field in Cartesian coordinates:</p>
      <BlockMath math="\boldsymbol{v} = \frac{1}{2} \boldsymbol{e_x} + \frac{1}{2} \boldsymbol{e_y}." />
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/cartesian-field.svg`}
              width={400}
              height={400}
              alt="Vector field in Cartesian coordinates"
          />
      </div>
      <p>The covariant derivative components are equal to zero:</p>
      <BlockMath math="
        \begin{align*}
          v^{\sigma}{}_{;\mu} &= \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \\
          &= 0 + v^{\nu} \cdot 0 \\
          &= 0.
        \end{align*}
      " />

      <p>But when we consider the following vector field with same components but in polar coordinates:</p>
      <BlockMath math="\boldsymbol{v} = \frac{1}{2} \boldsymbol{e_r} + \frac{1}{2} \boldsymbol{e_r}." />
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/polar-field.svg`}
              width={400}
              height={400}
              alt="Vector field in polar coordinates"
          />
      </div>

      <p>Recall the nonzero Christoffel symbols:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^r_{\theta \theta} &= -r, \\
          \Gamma^{\theta}_{r \theta} = \Gamma^{\theta}_{\theta r} &= \frac{1}{r},
        \end{align*}
      " />
      <p>and the nonzero covariant derivative components are equal to:</p>
      <BlockMath math="
        \begin{align*}
          v^{\sigma}{}_{;\mu} &= v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}, \\
          v^r{}_{;\theta} &= \frac{1}{2} \Gamma^r{}_{\theta \theta} \\ 
          &= -\frac{r}{2}, \\
          v^{\theta}{}_{;\theta} = v^{\theta}{}_{;r} &= \frac{1}{2r}.
        \end{align*}
      " />

      <p>So we can see, that constant components does not imply constant vector field.</p>

      <p>The covariant derivative transforms like a tensor:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{v}}{\partial x^{\mu}} &= \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}, \\
          \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\mu}} \frac{\partial \boldsymbol{v}}{\partial \tilde{x}^{\lambda}} &= \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \boldsymbol{\tilde{e}_{\lambda}}, \\
          \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\mu}} \frac{\partial \boldsymbol{v}}{\partial \tilde{x}^{\lambda}} &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \boldsymbol{\tilde{e}_{\lambda}}, \\
          \delta^{\lambda}_{\alpha} \frac{\partial \boldsymbol{v}}{\partial \tilde{x}^{\lambda}} &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{\tilde{e}_{\lambda}}, \\
          \frac{\partial \boldsymbol{v}}{\partial \tilde{x}^{\alpha}} &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} v^{\sigma}{}_{;\mu} \boldsymbol{\tilde{e}_{\lambda}}, \\
          \tilde{v}^{\lambda}{}_{;\alpha} &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} v^{\sigma}{}_{;\mu}. \\
        \end{align*}
      " />
      <p>If we compute covariant derivative in the transfromed basis, we get:</p>
      <BlockMath math="
        \begin{align*}
           \tilde{v}^{\lambda}{}_{;\alpha} &= \frac{\partial \tilde{v}^{\lambda}}{\partial \tilde{x}^{\alpha}} + \tilde{v}^{\nu} \tilde{\Gamma}^{\lambda}{}_{\alpha \nu},
        \end{align*}
      " />
      <p>and setting it equal with the previous equation:</p>
      <BlockMath math="
        \begin{align*}
           \frac{\partial \tilde{v}^{\lambda}}{\partial \tilde{x}^{\alpha}} + \tilde{v}^{\nu} \tilde{\Gamma}^{\lambda}{}_{\alpha \nu} &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial}{\partial x^{\mu}} \left(\frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \tilde{v}^{\beta}\right) + \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial \tilde{x}^{\rho}}{\partial x^{\mu}} \frac{\partial}{\partial \tilde{x}^{\rho}} \left(\frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \tilde{v}^{\beta}\right) + \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial \tilde{x}^{\rho}}{\partial x^{\mu}} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\rho} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \frac{\partial \tilde{v}^{\beta}}{\partial \tilde{x}^{\rho}}\right) + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\delta^{\rho}_{\alpha} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\rho} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \frac{\partial \tilde{v}^{\beta}}{\partial \tilde{x}^{\rho}}\right) + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \frac{\partial \tilde{v}^{\beta}}{\partial \tilde{x}^{\alpha}} + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial x^{\sigma}}{\partial \tilde{x}^{\beta}} \frac{\partial \tilde{v}^{\beta}}{\partial \tilde{x}^{\alpha}} + \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu} \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \delta^{\lambda}_{\beta} \frac{\partial \tilde{v}^{\beta}}{\partial \tilde{x}^{\alpha}} + \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\gamma}} \tilde{v}^{\gamma} \Gamma^{\sigma}{}_{\mu \nu} \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} \tilde{v}^{\beta} + \frac{\partial \tilde{v}^{\lambda}}{\partial \tilde{x}^{\alpha}} + \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\beta}} \tilde{v}^{\beta} \Gamma^{\sigma}{}_{\mu \nu} \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \tilde{v}^{\beta} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\beta}} \Gamma^{\sigma}{}_{\mu \nu}\right) + \frac{\partial \tilde{v}^{\lambda}}{\partial \tilde{x}^{\alpha}}, \\
           \tilde{v}^{\beta} \tilde{\Gamma}^{\lambda}{}_{\alpha \beta} &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \tilde{v}^{\beta} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\beta}} \Gamma^{\sigma}{}_{\mu \nu}\right), \\
           \tilde{\Gamma}^{\lambda}{}_{\alpha \beta} &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \left(\frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}} + \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\beta}} \Gamma^{\sigma}{}_{\mu \nu}\right) \\
           &= \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial x^{\mu}}{\partial \tilde{x}^{\alpha}} \frac{\partial x^{\nu}}{\partial \tilde{x}^{\beta}} \Gamma^{\sigma}{}_{\mu \nu} + \frac{\partial \tilde{x}^{\lambda}}{\partial x^{\sigma}} \frac{\partial^2 x^{\sigma}}{\partial \tilde{x}^{\alpha} \partial \tilde{x}^{\beta}},
        \end{align*}
      " />
      <p>we see, that the Christoffel symbols are not tensor.</p>

      <LinkH2 id="extrinsic-definition">Extrinsic Definition</LinkH2>
      <p>When we want to compare two vectors in flat space, we just slide one over to the other:</p>
      <div className="w-full flex gap-2 justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/flat-transport1.svg`}
              width={400}
              height={400}
              alt="Flat transport 1"
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/flat-transport2.svg`}
              width={400}
              height={400}
              alt="Flat transport 2"
          />
      </div>

      <p>And we could naively do this on the surface of the sphere:</p>
      <div className="w-full flex gap-8 justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/sphere-transport1.png`}
              width={400}
              height={400}
              alt="Sphere transport 1"
              unoptimized
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/sphere-transport2.png`}
              width={400}
              height={400}
              alt="Sphere transport 2"
              unoptimized
          />
      </div>
      <p>but what we did here is transport it through the higher dimensional (3D) space. If we look at the two vectors from the perspective of someone living on the surface:</p>
      <div className="w-full flex gap-8 justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/sphere-vector1.png`}
              width={400}
              height={400}
              alt="Sphere vector 1"
              unoptimized
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/sphere-vector2.png`}
              width={400}
              height={400}
              alt="Sphere vector 2"
              unoptimized
          />
      </div>
      <p>we see that they are two different vector. What we need to do is a process called parallel transport:</p>
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport.png`}
              width={400}
              height={400}
              alt="Parallel transport"
              unoptimized
          />
      </div>

      <p>There is a downside to parallel transport. When parallel transporting along a closed curve, the vector may rotate:</p>
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport-rotation.png`}
              width={400}
              height={400}
              alt="Parallel transport rotation"
              unoptimized
          />
      </div>

      <p>When parallel transporting, the rate of change of the vector is completely in the normal components:</p>
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport-normal.png`}
              width={400}
              height={400}
              alt="Parallel transport normal components"
              unoptimized
          />
      </div>
      <p>so we may express it as follows when transporting along a path parametrized by <InlineMath math="\lambda" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d \boldsymbol{v}}{d\lambda} &= \boldsymbol{n}, \\
          \frac{d \boldsymbol{v}}{d\lambda} - \boldsymbol{n} &= \boldsymbol{0} \\
        \end{align*}
      " />

      <p>For the extrinsic definition of covariant derivative <InlineMath math="\nabla_{\boldsymbol{w}} \boldsymbol{v}" />, it is the rate of change of vector field <InlineMath math="\boldsymbol{v}" /> in a direction of <InlineMath math="\boldsymbol{w}" /> with the normal component subtracted. For the parallel transported vector, this means:</p>
      <BlockMath math="\nabla_{\frac{d}{d\lambda}} \boldsymbol{v} = \frac{d\boldsymbol{v}}{d\lambda} - \boldsymbol{n} = \boldsymbol{0}," />
      <p>so when the covariant derivative is equal to zero, it means that the vector field is parallel transported.</p>

      <p>The covariant derivative of tangent vector <InlineMath math="\boldsymbol{v}" /> in the direction of the <InlineMath math="x^{\mu}" /> coordinate is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{\partial}{\partial x^{\mu}}} \boldsymbol{v} &= \frac{\partial \boldsymbol{v}}{\partial x^{\mu}} - \boldsymbol{n} \\
          &= \frac{\partial}{\partial x^{\mu}} \left(v^{\nu} \boldsymbol{e_{\nu}}\right) - \boldsymbol{n} \\
          &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}} - \boldsymbol{n} \\
          &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \left(\Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}\right) - \boldsymbol{n} \\
          &= \frac{\partial v^{\sigma}}{\partial x^{\mu}} \boldsymbol{e_{\sigma}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} + v^{\nu} L_{\mu \nu} \boldsymbol{\hat{n}} - \boldsymbol{n} \\
          &= \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} + v^{\nu} L_{\mu \nu} \boldsymbol{\hat{n}} - \boldsymbol{n},
        \end{align*}
      " />
      <p>since we said we are subtracting the normal components, they cancel:</p>
      <BlockMath math="\nabla_{\frac{\partial}{\partial x^{\mu}}} \boldsymbol{v} = \nabla_{\mu} \boldsymbol{v} = \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}," />
      <p>or in component form:</p>
      <BlockMath math="\nabla_{\mu} v^{\sigma} = v^{\sigma}{}_{;\mu} = \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}," />
      <p>and these equations still apply in flat space since we didn&apos;t have normal components to begin with.</p>

      <p>As an example, consider the intrinsic sphere with coordinates <InlineMath math="\theta" /> and <InlineMath math="\phi" />, where the metric and the nonzero Christoffel symbols are equal to:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \begin{bmatrix}
            r^2 & 0 \\
            0   & r^2 \sin^2 \theta
          \end{bmatrix}, \\
          \Gamma^{\theta}{}_{\phi \phi} &= -\sin \theta \cos \theta = -\frac{1}{2} \sin (2 \theta), \\
          \Gamma^{\phi}{}_{\theta \phi} = \Gamma^{\phi}{}_{\phi \theta} &= \cot \theta.
        \end{align*}
      " />

      <p>And the covariant derivatives of arbitrary vector field <InlineMath math="\boldsymbol{v}" /> are equal to:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta}{}_{;\theta} &= \frac{\partial v^{\theta}}{\partial \theta} + v^{\nu} \Gamma^{\theta}{}_{\theta \nu} \\
          &= \frac{\partial v^{\theta}}{\partial \theta}, \\
          v^{\theta}{}_{;\phi} &= \frac{\partial v^{\theta}}{\partial \phi} + v^{\nu} \Gamma^{\theta}{}_{\phi \nu} \\
          &= \frac{\partial v^{\theta}}{\partial \phi} + v^{\phi} \Gamma^{\theta}{}_{\phi \phi} \\
          &= \frac{\partial v^{\theta}}{\partial \phi} - \frac{v^{\phi}}{2} \sin (2\theta), \\
          v^{\phi}{}_{;\theta} &= \frac{\partial v^{\phi}}{\partial \theta} + v^{\nu} \Gamma^{\phi}{}_{\theta \nu} \\
          &= \frac{\partial v^{\phi}}{\partial \theta} + v^{\phi} \Gamma^{\phi}{}_{\theta \phi} \\
          &= \frac{\partial v^{\phi}}{\partial \theta} + v^{\phi} \cot \theta, \\
          v^{\phi}{}_{;\phi} &= \frac{\partial v^{\phi}}{\partial \phi} + v^{\nu} \Gamma^{\phi}{}_{\phi \nu} \\
          &= \frac{\partial v^{\phi}}{\partial \phi} + v^{\theta} \Gamma^{\phi}{}_{\phi \theta} \\
          &= \frac{\partial v^{\phi}}{\partial \phi} + v^{\theta} \cot \theta, \\
        \end{align*}
      " />
      <p>cleaning it up:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta}{}_{;\theta} &= \frac{\partial v^{\theta}}{\partial \theta}, \\
          v^{\theta}{}_{;\phi} &= \frac{\partial v^{\theta}}{\partial \phi} - \frac{v^{\phi}}{2} \sin (2\theta), \\
          v^{\phi}{}_{;\theta} &= \frac{\partial v^{\phi}}{\partial \theta} + v^{\phi} \cot \theta, \\
          v^{\phi}{}_{;\phi} &= \frac{\partial v^{\phi}}{\partial \phi} + v^{\theta} \cot \theta.
        \end{align*}
      " />
      <p>Consider the vector field <InlineMath math="\boldsymbol{v}(\theta, \phi) = \boldsymbol{e_{\theta}}" /> along the equator (<InlineMath math="\theta = \frac{\pi}{2}" />, <InlineMath math="\phi = \lambda" />):</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/equator-vector-field.png`}
          width={400}
          height={400}
          alt="Vector field along equator"
          unoptimized
        />
      </div>

      <p>The covariant derivatives are:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta}{}_{;\theta} &= 0, \\
          v^{\theta}{}_{;\phi} &= - \frac{v^{\phi}}{2} \sin (2\theta), \\
          &= 0, \\
          v^{\phi}{}_{;\theta} &= v^{\phi} \cot \theta \\
          &= 0, \\
          v^{\phi}{}_{;\phi} &= v^{\theta} \cot \theta \\
          &= \cot \frac{\pi}{2} \\
          &= 0,
        \end{align*}
      " />
      <p>meaning the vector field is a parallel transport of a vector.</p>
      
      <p>We checked if a vector is parallely transported in a vector field. If we want to do the opposite, we specify a vector and curve and demand that the covariant derivative is zero. As an example consider the vector <InlineMath math="\boldsymbol{v_0} = \boldsymbol{e_{\theta}}" /> along a curve where <InlineMath math="\theta = \frac{\pi}{4}" /> and <InlineMath math="\phi = \lambda" />. We are looking for a vector field <InlineMath math="\boldsymbol{v}" /> where a covariant derivative is zero:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{d}{d\lambda}} \boldsymbol{v} &= \frac{d \boldsymbol{v}}{d\lambda} - \boldsymbol{n} \\
          &= \left(\frac{d \theta}{d \lambda} \frac{\partial}{\partial \theta} + \frac{d \phi}{d \lambda} \frac{\partial}{\partial \phi}\right) \boldsymbol{v} - \boldsymbol{n} \\
          &= \frac{\partial \boldsymbol{v}}{\partial \phi} - \boldsymbol{n} \\
          &= \nabla_{\phi} \boldsymbol{v} = \boldsymbol{0},
        \end{align*}
      " />
      <p>implying:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta}{}_{;\phi} &= 0, \\
          v^{\phi}{}_{;\phi} &= 0.
        \end{align*}
      " />

      <p>Computing the covariant derivatives:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta}{}_{;\phi} &= \frac{\partial v^{\theta}}{\partial \phi} - \frac{v^{\phi}}{2} \sin (2\theta) \\
          &= \frac{\partial v^{\theta}}{\partial \lambda} - \frac{v^{\phi}}{2} = 0, \\
          v^{\phi}{}_{;\phi} &= \frac{\partial v^{\phi}}{\partial \phi} + v^{\theta} \cot \theta \\
          &= \frac{\partial v^{\phi}}{\partial \lambda} + v^{\theta} = 0.
        \end{align*}
      " />

      <p>We have system of partial differential equations describing the vector field:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial v^{\theta}}{\partial \lambda} &= \frac{v^{\phi}}{2}, \\
          \frac{\partial v^{\phi}}{\partial \lambda} &= -v^{\theta},
        \end{align*}
      " />
      <p>we can take partial derivative with respect to <InlineMath math="\lambda" /> of both equations:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 v^{\theta}}{\partial \lambda^2} &= \frac{1}{2} \frac{\partial v^{\phi}}{\partial \lambda}, \\
          \frac{\partial^2 v^{\phi}}{\partial \lambda^2} &= - \frac{\partial v^{\theta}}{\partial \lambda},
        \end{align*}
      " />
      <p>and solve for the first order partial derivatives:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial v^{\phi}}{\partial \lambda} &= 2 \frac{\partial^2 v^{\theta}}{\partial \lambda^2}, \\
          \frac{\partial v^{\theta}}{\partial \lambda} &= -\frac{\partial^2 v^{\phi}}{\partial \lambda^2},
        \end{align*}
      " />
      <p>substituting back:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 v^{\theta}}{\partial \lambda^2} &= -\frac{v^{\theta}}{2}, \\
          \frac{\partial^2 v^{\phi}}{\partial \lambda^2} &= -\frac{v^{\phi}}{2}.
        \end{align*}
      " />

      <p>The solution to these equations are:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta} &= A \sin \frac{\lambda}{\sqrt{2}} + B \cos \frac{\lambda}{\sqrt{2}}, \\
          v^{\phi} &= C \sin \frac{\lambda}{\sqrt{2}} + D \cos \frac{\lambda}{\sqrt{2}}.
        \end{align*}
      " />

      <p>When we substitute <InlineMath math="\lambda = 0" /> into the solution, the vector field <InlineMath math="\boldsymbol{v} = \boldsymbol{v_0} = \boldsymbol{e_{\theta}}" /> is just the vector we want to transport and we get:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta} &= B = 1, \\
          v^{\phi} &= D = 0,
        \end{align*}
      " />
      <p>implying:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta} &= A \sin \frac{\lambda}{\sqrt{2}} + \cos \frac{\lambda}{\sqrt{2}}, \\
          v^{\phi} &= C \sin \frac{\lambda}{\sqrt{2}}.
        \end{align*}
      " />
      
      <p>The derivatives are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial v^{\theta}}{\partial \lambda} &= \frac{A}{\sqrt{2}} \cos \frac{\lambda}{\sqrt{2}} - \frac{1}{\sqrt{2}} \sin \frac{\lambda}{\sqrt{2}}, \\
          \frac{\partial v^{\phi}}{\partial \lambda} &= \frac{C}{\sqrt{2}} \cos \frac{\lambda}{\sqrt{2}}.
        \end{align*}
      " />

      <p>We already have formula for the derivatives:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial v^{\theta}}{\partial \lambda} &= \frac{v^{\phi}}{2} = \frac{C}{2} \sin \frac{\lambda}{\sqrt{2}}, \\
          \frac{\partial v^{\phi}}{\partial \lambda} &= -v^{\theta} = -(A \sin \frac{\lambda}{\sqrt{2}} + \cos \frac{\lambda}{\sqrt{2}}),
        \end{align*}
      " />
      <p>and substituting <InlineMath math="v^{\theta}" /> and <InlineMath math="v^{\phi}" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{A}{\sqrt{2}} \cos \frac{\lambda}{\sqrt{2}} - \frac{1}{\sqrt{2}} \sin \frac{\lambda}{\sqrt{2}} &= \frac{C}{2} \sin \frac{\lambda}{\sqrt{2}}, \\
          \frac{C}{\sqrt{2}} \cos \frac{\lambda}{\sqrt{2}} &= -(A \sin \frac{\lambda}{\sqrt{2}} + \cos \frac{\lambda}{\sqrt{2}}).
        \end{align*}
      " />

      <p>We can substitute <InlineMath math="\lambda = 0" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{A}{\sqrt{2}} &= 0, \\
          \frac{C}{\sqrt{2}} &= -1,
        \end{align*}
      " />
      <p>and solve for the constants:</p>
      <BlockMath math="
        \begin{align*}
          A &= 0, \\
          C &= -\sqrt{2}.
        \end{align*}
      " />

      <p>So the equations are as follows:</p>
      <BlockMath math="
        \begin{align*}
          v^{\theta} &= \cos \frac{\lambda}{\sqrt{2}}, \\
          v^{\phi} &= -\sqrt{2} \sin \frac{\lambda}{\sqrt{2}},
        \end{align*}
      " />
      <p>and the vector field:</p>
      <BlockMath math="\boldsymbol{v}(\theta, \phi) = \cos \frac{\lambda}{\sqrt{2}} \boldsymbol{e_{\theta}} - \sqrt{2} \sin \frac{\lambda}{\sqrt{2}} \boldsymbol{e_{\phi}}." />
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport-pi-over-4.png`}
          width={500}
          height={500}
          alt="Parallel transport of the vector"
          unoptimized
        />
      </div>

      <p>The squared length of the initial vector <InlineMath math="\boldsymbol{v_0}" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          |\boldsymbol{v_0}|^2 &= g_{\mu \nu} v_0^{\mu} v_0^{\nu} \\
          &= r^2.
        \end{align*}
      " />

      <p>And for the vector field <InlineMath math="\boldsymbol{v}" />:</p>
      <BlockMath math="
        \begin{align*}
          |\boldsymbol{v}|^2 &= g_{\mu \nu} v^{\mu} v^{\nu} \\
          &= \left(\cos \frac{\lambda}{\sqrt{2}}\right)^2 r^2 + \left(-\sqrt{2} \sin \frac{\lambda}{\sqrt{2}}\right)^2 r^2 \sin^2 \theta \\
          &= r^2 \left(\cos^2 \frac{\lambda}{\sqrt{2}} r^2 + 2 \sin^2 \frac{\lambda}{\sqrt{2}} \sin^2 \frac{\pi}{4}\right)^2 \\
          &= r^2 \left(\cos^2 \frac{\lambda}{\sqrt{2}} r^2 + \sin^2 \frac{\lambda}{\sqrt{2}}\right)^2 \\
          &= r^2,
        \end{align*}
      " />
      <p>Keeping the vector length constant.</p>

      <LinkH2 id="intrinsic-definition">Intrinsic Definition</LinkH2>
      <p>In intrinsic geometry, the covariant derivative is the same:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{\partial}{\partial x^{\mu}}} \boldsymbol{v} &= \nabla_{\mu} \boldsymbol{v} = \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}, \\
          \nabla_{\mu} v^{\sigma} = v^{\sigma}{}_{;\mu} &= \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu},
        \end{align*}
      " />
      <p>and setting covariant derivative equal to zero still means it is parallel transported. However the following definition of the Christoffel symbols does not work, because we had to consider the extrinsic space for the dot product:</p>
      <BlockMath math="\Gamma^{\lambda}_{\mu \nu} = \frac{\partial \boldsymbol{e_{\mu}}}{\partial x^{\nu}} \cdot \boldsymbol{e_{\sigma}} g^{\sigma \lambda}." />

      <p>We also had to consider the extrinsic geometry for the metric tensor. There is however nothing we can do about this and the metric tensor has to be defined, obtained from an equation or obtained using from an extrinsic space. We can think of the case of the Cartesian metric tensor - the metric tensor is defined for us and there is no way to derive it.</p>

      <p>When working with intrinsic geometry, we also cannot use the extrinsic position vector <InlineMath math="\boldsymbol{R}" />, so instead of writing the basis vectors like this:</p>
      <BlockMath math="\boldsymbol{e_{\mu}} = \frac{\partial \boldsymbol{R}}{\partial x^{\mu}}," />

      <p>we write it like this:</p>
      <BlockMath math="\boldsymbol{e_{\mu}} = \frac{\partial}{\partial x^{\mu}}." />

      <p>In extrinsic geometry, we started by defining the covariant derivative as the derivative with the normal components subtracted:</p>
      <BlockMath math="\nabla_{\frac{d}{d\lambda}} \boldsymbol{v} = \frac{d\boldsymbol{v}}{d\lambda} - \boldsymbol{n}." />

      <p>But when considering the intrinsic geometry, we do not have a normal components</p>
      <BlockMath math="\nabla_{\frac{d}{d\lambda}} \boldsymbol{v} = \frac{d\boldsymbol{v}}{d\lambda}." />

      <p>Consider the covariant derivative in the direction of <InlineMath math="x^{\mu}" /> coordinate:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{\partial}{\partial x^{\mu}}} \boldsymbol{v} &= \frac{\partial \boldsymbol{v}}{\partial x^{\mu}} \\
          &= \frac{\partial}{\partial x^{\mu}} \left(v^{\nu} \boldsymbol{e_{\nu}}\right) \\
          &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}} \\
          &= \frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \left(\Gamma^{\sigma}_{\mu \nu} \boldsymbol{e_{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}\right) \\
          &= \frac{\partial v^{\sigma}}{\partial x^{\mu}} \boldsymbol{e_{\sigma}} + v^{\nu} \Gamma^{\sigma}_{\mu \nu} \boldsymbol{e_{\sigma}} + v^{\nu} L_{\mu \nu} \boldsymbol{\hat{n}} \\
          &= \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} + v^{\nu} L_{\mu \nu} \boldsymbol{\hat{n}},
        \end{align*}
      " />
      <p>and again, since the normal components don&apos;t exist, we can ignore them:</p>
      <BlockMath math="\nabla_{\frac{\partial}{\partial x^{\mu}}} \boldsymbol{v} = \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}," />
      <p>or in coponent form:</p>
      <BlockMath math="\nabla_{\mu} v^{\sigma} = v^{\sigma}{}_{;\mu} = \frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}_{\mu \nu}," />
      <p>and these equations also work in extrinsic geometry.</p>

      <p>Recall the following properties:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= g_{\nu \mu}, \\
          \Gamma^{\lambda}{}_{\mu \nu} &= \Gamma^{\lambda}{}_{\nu \mu}.
        \end{align*}
      " />

      <p>If we take derivative of metric tensor component with respect to a coordinate, we get:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu, \sigma} = \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} &= \frac{\partial}{\partial x^{\sigma}} (\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}) \\
          &= \frac{\partial \boldsymbol{e_{\mu}}}{\partial x^{\sigma}} \cdot \boldsymbol{e_{\nu}} + \boldsymbol{e_{\mu}} \cdot \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\sigma}} \\
          &= \Gamma^{\lambda}{}_{\mu \sigma} \boldsymbol{e_{\lambda}} \cdot \boldsymbol{e_{\nu}} + \Gamma^{\lambda}{}_{\nu \sigma} \boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\lambda}}, \\
          g_{\mu \nu, \sigma} &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda}. \\
        \end{align*}
      " />

      <p>If we swap <InlineMath math="\nu" /> and <InlineMath math="\sigma" />, we get:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \sigma, \nu} &= \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + \Gamma^{\lambda}{}_{\sigma \nu} g_{\mu \lambda} \\
          &= \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda},
        \end{align*}
      " />

      <p>and if we swap <InlineMath math="\mu" /> and <InlineMath math="\sigma" />, we get:</p>
      <BlockMath math="
        \begin{align*}
          g_{\sigma \nu, \mu} &= \Gamma^{\lambda}{}_{\sigma \mu} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\nu \mu} g_{\sigma \lambda} \\
          &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma}.
        \end{align*}
      " />

      <p>There are some similar components, if we add <InlineMath math="g_{\mu \nu, \sigma}" /> and <InlineMath math="g_{\mu \sigma, \nu}" />:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda} \\
          &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + 2\Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda},
        \end{align*}
      " />
      <p>and subtract <InlineMath math="g_{\sigma \nu, \mu}" /> from this:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu} &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + 2\Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda} - ( \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma}) \\
          &= 2\Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda}, \\
          \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda} &= \frac{1}{2} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}), \\
          \Gamma^{\lambda}{}_{\nu \sigma} g_{\mu \lambda} g^{\mu \rho} &= \frac{1}{2} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}), \\
          \Gamma^{\lambda}{}_{\nu \sigma} \delta_{\lambda}^{\rho} &= \frac{1}{2} g^{\mu \rho} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}), \\
          \Gamma^{\rho}{}_{\nu \sigma} &= \frac{1}{2} g^{\mu \rho} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}) \\
          &= \frac{1}{2} g^{\mu \rho} \left(\frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} + \frac{\partial g_{\mu \sigma}}{\partial x^{\nu}} - \frac{\partial g_{\sigma \nu}}{\partial x^{\mu}}\right),
        \end{align*}
      " />
      <p>we have arrived at the equation for Christoffel symbols in intrinsic geometry. This formula also works in extrinsic geometry.</p>

      <p>If we take the covariant derivative of vector along itself, we get:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{d}{d\lambda}} \frac{d}{d\lambda} &= \frac{d}{d\lambda} \left(\frac{d}{d\lambda}\right) \\
          &= \frac{d}{d\lambda} \left(\frac{d x^{\mu}}{d \lambda} \frac{\partial}{\partial x^{\mu}}\right) \\
          &= \frac{d^2 x^{\mu}}{d \lambda^2} \boldsymbol{e_{\mu}} + \frac{d x^{\mu}}{d \lambda} \frac{d \boldsymbol{e_{\mu}}}{d \lambda} \\
          &= \frac{d^2 x^{\mu}}{d \lambda^2} \boldsymbol{e_{\mu}} + \frac{d x^{\mu}}{d \lambda} \frac{d x^{\nu}}{d \lambda} \frac{\partial \boldsymbol{e_{\mu}}}{\partial x^{\nu}} \\
          &= \frac{d^2 x^{\sigma}}{d \lambda^2} \boldsymbol{e_{\sigma}} + \frac{d x^{\mu}}{d \lambda} \frac{d x^{\nu}}{d \lambda} \Gamma^{\sigma}_{\mu \nu} \boldsymbol{e_{\sigma}} \\
          &= \left(\frac{d^2 x^{\sigma}}{d \lambda^2} + \frac{d x^{\mu}}{d \lambda} \frac{d x^{\nu}}{d \lambda} \Gamma^{\sigma}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}
        \end{align*}
      " />

      <p>and in the <Link href="/general-relativity/math-preliminaries/geodesics">geodesics chapter</Link>, we have already seen that this is the tangential acceleration. And if we set this equal to zero, we have the geodesic equations:</p>
      <BlockMath math="\frac{d^2 x^{\sigma}}{d \lambda^2} + \frac{d x^{\mu}}{d \lambda} \frac{d x^{\nu}}{d \lambda} \Gamma^{\sigma}_{\mu \nu} = 0." />

      <p>Or, this can be rewritten for a vector <InlineMath math="\boldsymbol{v}" />:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \boldsymbol{v} = \boldsymbol{0}," />
      <p>this is the parallel transport of <InlineMath math="\boldsymbol{v}" /> along itself - parallel transport of vector along itself is geodesic.</p>

      <LinkH2 id="abstract-definition">Abstract Definition</LinkH2>
      <p>With the abstract definition, there may be different covariant derivative. The one we will care about is called the Levi-Civita connection. We will define the covariant derivative by observing the intrinsic definition and using its properties to create an abstract definition.</p>

      <p>To save space, I will be using the following notation:</p>
      <BlockMath math="\boldsymbol{e_{\mu}} = \frac{\partial}{\partial x^{\mu}} = \partial_{\mu}," />
      <p>in particular <InlineMath math="\partial_{\mu}" />.</p>

      <p>The first property is addition and scaling in the direction vector:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{a \boldsymbol{u} + b \boldsymbol{w}} \boldsymbol{v} &= \nabla_{a u^{\mu} \partial_{\mu} + b w^{\mu} \partial_{\mu}} \boldsymbol{v} \\
          &= \nabla_{(a u^{\mu} + b w^{\mu}) \partial_{\mu}} \boldsymbol{v} \\
          &= (a u^{\mu} + b w^{\mu}) \partial_{\mu} \boldsymbol{v} \\
          &= a u^{\mu} \partial_{\mu} \boldsymbol{v} + b w^{\mu} \partial_{\mu} \boldsymbol{v} \\
          &= a \nabla_{\boldsymbol{u}} \boldsymbol{v} + b \nabla_{\boldsymbol{w}} \boldsymbol{v},
        \end{align*}
      " />
      <p>also called linearity.</p>

      <p>The second property is the covariant derivative of sum of vectors:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{u}} (\boldsymbol{v} + \boldsymbol{w}) &= \nabla_{u^{\mu} \partial_{\mu}} (\boldsymbol{v} + \boldsymbol{w}) \\
          &= u^{\mu} \partial_{\mu} (\boldsymbol{v} + \boldsymbol{w}) \\
          &= u^{\mu} \partial_{\mu} \boldsymbol{v} + u^{\mu} \partial_{\mu} \boldsymbol{w} \\
          &= \nabla_{\boldsymbol{u}} \boldsymbol{v} + \nabla_{\boldsymbol{w}} \boldsymbol{v}.
        \end{align*}
      " />

      <p>The third property is the covariant derivative of a scaled vector:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{u}} (a \boldsymbol{v}) &= \nabla_{u^{\mu} \partial_{\mu}} (a \boldsymbol{v}) \\
          &= u^{\mu} \partial_{\mu} (a \boldsymbol{v}) \\
          &= (u^{\mu} \partial_{\mu} a) \boldsymbol{v} + a u^{\mu} \partial_{\mu} \boldsymbol{v} \\
          &= (\nabla_{\boldsymbol{u}} \boldsymbol{v}) a + a (\nabla_{\boldsymbol{u}} \boldsymbol{v}).
        \end{align*}
      " />

      <p>And the covariant derivative of scalar in a coordinate direction is just the partial derivative:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} a = \frac{\partial a}{\partial x^{\mu}}." />

      <p>To put the properties together:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{a \boldsymbol{u} + b \boldsymbol{w}} \boldsymbol{v} &= a \nabla_{\boldsymbol{u}} \boldsymbol{v} + b \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (\boldsymbol{v} + \boldsymbol{w}) &= \nabla_{\boldsymbol{u}} \boldsymbol{v} + \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (a \boldsymbol{v}) &= (\nabla_{\boldsymbol{u}} \boldsymbol{v}) a + a (\nabla_{\boldsymbol{u}} \boldsymbol{v}), \\
          \nabla_{\partial_{\mu}} a &= \frac{\partial a}{\partial x^{\mu}},
        \end{align*}
      " />
      <p>so a covariant derivative <InlineMath math="\nabla_{\_}\ \_" /> is an operator with two inputs - input field and a direction vector. The output will be another field specifying the rate of change of the input field. The covariant derivative is also sometimes called connection because it provides a connection between two tangent spaces in a curved surface:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/tangent-spaces.png`}
          width={500}
          height={500}
          alt="Tangent spaces on sphere"
          unoptimized
        />
      </div>

      <p>In intrinsic geometry, we have defined the partial derivative of basis vector with respect to a coordinate as follows:</p>
      <BlockMath math="\frac{\partial \boldsymbol{e_{\mu}}}{\partial x^{\nu}} = \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}," />
      <p>and the abstract version of this would be:</p>
      <BlockMath math="\nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} = \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}}," />
      <p>where the Christoffel symbols are also sometimes called the connection coefficients. Note that the order in the lower indices of the Christoffel symbols <b>does</b> matter. So generally:</p>
      <BlockMath math="\Gamma^{\sigma}{}_{\nu \mu} \neq \Gamma^{\sigma}{}_{\mu \nu}." />
      <p>Some sources</p>

      <p>Turns out that the following conditions are not enough to solve for unique connection coefficients:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{a \boldsymbol{u} + b \boldsymbol{w}} \boldsymbol{v} &= a \nabla_{\boldsymbol{u}} \boldsymbol{v} + b \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (\boldsymbol{v} + \boldsymbol{w}) &= \nabla_{\boldsymbol{u}} \boldsymbol{v} + \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (a \boldsymbol{v}) &= (\nabla_{\boldsymbol{u}} \boldsymbol{v}) a + a (\nabla_{\boldsymbol{u}} \boldsymbol{v}), \\
          \nabla_{\partial_{\mu}} a &= \frac{\partial a}{\partial x^{\mu}}, \\
          \nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} &= \Gamma^{\sigma}{}_{\nu \mu}.
        \end{align*}
      " />

      <p>To get the unique solution for the connection coefficients, we have to introduce two new properties. The first is the torsion-free property:</p>
      <BlockMath math="\nabla_{\boldsymbol{w}} \boldsymbol{v} - \nabla_{\boldsymbol{v}} \boldsymbol{w} = [\boldsymbol{v}, \boldsymbol{w}]," />
      <p>where <InlineMath math="[\boldsymbol{v}, \boldsymbol{w}]" /> is the Lie bracket:</p>
      <BlockMath math="[\boldsymbol{v}, \boldsymbol{w}] = \boldsymbol{v} \boldsymbol{w} - \boldsymbol{w} \boldsymbol{v}," />
      <p>and for our specific case, where the vectors are partial derivative operators (and the order of partial differentiation does not matter):</p>
      <BlockMath math="[\boldsymbol{v}, \boldsymbol{w}] = v^{\mu} \partial_{\mu} w^{\nu} \partial_{\nu} - w^{\mu} \partial_{\mu} v^{\nu} \partial_{\nu} = v^{\mu} w^{\nu} \partial_{\mu} \partial_{\nu} - w^{\mu} v^{\nu} \partial_{\mu} \partial_{\nu} = 0," />
      <p>so the torsion-free property is simplified:</p>
      <BlockMath math="\nabla_{\boldsymbol{w}} \boldsymbol{v} = \nabla_{\boldsymbol{v}} \boldsymbol{w}." />

      <p>The torsion property implies the following for the connection coefficients:</p>
      <BlockMath math="
        \begin{align*} 
          \nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} &= \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}}, \\
          \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{e_{\nu}} &= \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}, \\
          \nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} &= \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{e_{\nu}}, \\
          \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}} &= \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}, \\
          \Gamma^{\sigma}{}_{\nu \mu} &= \Gamma^{\sigma}{}_{\mu \nu}.
        \end{align*}
      " />

      <p>The second property is the metric compatibility:</p>
      <BlockMath math="\nabla_{\boldsymbol{w}} (\boldsymbol{u} \cdot \boldsymbol{v}) = (\nabla_{\boldsymbol{w}} \boldsymbol{u}) \cdot \boldsymbol{v} + \boldsymbol{u} \cdot (\nabla_{\boldsymbol{w}} \boldsymbol{v})," />
      <p>this may be interpreted that when taking parallel transport of two vectors (<InlineMath math="\nabla_{\boldsymbol{w}} \boldsymbol{u} = \nabla_{\boldsymbol{w}} \boldsymbol{v} = \boldsymbol{0}" />), their dot product stays the same:</p>
      <BlockMath math="
        \begin{align*} 
          \nabla_{\boldsymbol{w}} (\boldsymbol{u} \cdot \boldsymbol{v}) &= \boldsymbol{0} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot \boldsymbol{0} \\
          &= \boldsymbol{0},
        \end{align*}
      " />
      <p>implying that the angle between the angle between the vectors stays the same. If the two vectors are the same vector, it implies that the length of the vector stays constant:</p>
      <BlockMath math="
        \begin{align*} 
          \nabla_{\boldsymbol{w}} (|\boldsymbol{v}|^2) = \nabla_{\boldsymbol{w}} (\boldsymbol{v} \cdot \boldsymbol{v}) &= \boldsymbol{0} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot \boldsymbol{v} \\
          &= \boldsymbol{0}.
        \end{align*}
      " />

      <p>If we apply metric compatibility on basis vectors, we obtain:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{e_{\sigma}}} (\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}) = g_{\mu \nu, \sigma} &= (\nabla_{\boldsymbol{e_{\sigma}}} \boldsymbol{e_{\mu}}) \cdot \boldsymbol{e_{\nu}} + \boldsymbol{e_{\mu}} \cdot (\nabla_{\boldsymbol{e_{\sigma}}} \boldsymbol{e_{\nu}}) \\
          &= \Gamma^{\lambda}{}_{\sigma \mu} \boldsymbol{e_{\lambda}} \cdot \boldsymbol{e_{\nu}} + \Gamma^{\lambda}{}_{\sigma \nu} \boldsymbol{e_{\lambda}} \cdot \boldsymbol{e_{\mu}}, \\
          &= \Gamma^{\lambda}{}_{\sigma \mu} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\sigma \nu} g_{\lambda \mu} \\
        \end{align*}
      " />

      <p>Similar to the intrinsic definition, we swap the indices:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu, \sigma} &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\lambda \mu}, \\
          g_{\mu \sigma, \nu} &= \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma} + \Gamma^{\lambda}{}_{\nu \sigma} g_{\lambda \mu}, \\
          g_{\sigma \nu, \mu} &= \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \mu}, \\
        \end{align*}
      " />
      <p>remember, we are allowed to swap indices in the connection coefficients because of the torsion free property. We can now derive the connection coefficients:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu} &= 2\Gamma^{\lambda}{}_{\nu \sigma} g_{\lambda \mu}, \\
          \frac{1}{2} g^{\mu \rho} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}) &= \Gamma^{\lambda}{}_{\nu \sigma} g_{\lambda \mu} g^{\mu \rho}, \\
          \Gamma^{\rho}{}_{\nu \sigma} &= \frac{1}{2} g^{\mu \rho} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}), \\
          &= \frac{1}{2} g^{\mu \rho} \left(\frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} + \frac{\partial g_{\mu \sigma}}{\partial x^{\nu}} - \frac{\partial g_{\sigma \nu}}{\partial x^{\mu}}\right),
        \end{align*}
      " />
      <p>and the covariant derivative that uses these particular connection coefficients is called the Levi-Civita connection.</p>
      
      <p>The fundamental theorem of Riemann geometry states that on any Riemannian manifold, there is a unique connection that is torsion-free and has metric compatibility - Levi-Civita connection.</p>

      <p>There are other connection coefficients. One may be the case where all the connection coefficients <InlineMath math="\tilde{\Gamma}^{\rho}{}_{\mu \sigma} = 0" />. We can take vector <InlineMath math="\boldsymbol{v_0}" /> and parallel transport it:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\frac{d}{d\lambda}} \boldsymbol{v} &= \boldsymbol{0}, \\
          \nabla_{\frac{d}{d\lambda}} \boldsymbol{v} &= \frac{d\boldsymbol{v}}{d\lambda} \\
          &= \frac{d x^{\mu}}{d \lambda} \frac{\partial}{\partial x^{\mu}} (v^{\nu} \boldsymbol{e_{\nu}}) \\
          &= \frac{d x^{\mu}}{d \lambda} \left(\frac{\partial v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}}\right) \\
          &= \frac{d x^{\mu}}{d \lambda} \frac{\partial v^{\sigma}}{\partial x^{\mu}} \boldsymbol{e_{\sigma}} + v^{\nu} \frac{d x^{\mu}}{d \lambda} \frac{\partial \boldsymbol{e_{\nu}}}{\partial x^{\mu}} \\
          &= \frac{d v^{\sigma}}{d \lambda} \boldsymbol{e_{\sigma}} + v^{\nu} \frac{d x^{\mu}}{d \lambda} \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}} \\
          &= \left(\frac{d v^{\sigma}}{d \lambda} + v^{\nu} \frac{d x^{\mu}}{d \lambda} \Gamma^{\sigma}{}_{\nu \mu}\right) \boldsymbol{e_{\sigma}} \\
          &= \boldsymbol{0},
        \end{align*}
      " />
      <p>and since the connection coefficients are zero:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d v^{\sigma}}{d \lambda} \boldsymbol{e_{\sigma}} &= \boldsymbol{0}, \\
          v^{\sigma} &= C^{\sigma},
        \end{align*}
      " />
      <p>where <InlineMath math="C^{\sigma}" /> are arbitrary constants, but since we know the initial conditions, we have a solution:</p>
      <BlockMath math="\boldsymbol{v} = \boldsymbol{v_0}." />

      <p>For example, for a curve parametrized by <InlineMath math="\theta = \frac{\pi}{4}" /> and <InlineMath math="\phi = \lambda" />, the vector is parallely transformed as follows:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport-zero-connection.png`}
          width={500}
          height={500}
          alt="Parallel transport with zero coefficients"
          unoptimized
        />
      </div>
      <p>and there are many more connections.</p>
          
      <p>For a covariant derivative of a vector along another vector is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{u}} \boldsymbol{v} &= \nabla_{u^{\mu} \boldsymbol{e_{\mu}}} (v^{\nu} \boldsymbol{e_{\nu}}) \\
          &= u^{\mu} \left((\nabla_{\boldsymbol{e_{\mu}}} v^{\nu}) \boldsymbol{e_{\nu}} + v^{\nu} (\nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{e_{\nu}})\right) \\
          &= u^{\mu} \left(\frac{v^{\nu}}{\partial x^{\mu}} \boldsymbol{e_{\nu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}\right) \\
          &= u^{\mu} \left(\frac{v^{\sigma}}{\partial x^{\mu}} \boldsymbol{e_{\sigma}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}\right) \\
          &= u^{\mu} \left(\frac{v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}.
        \end{align*}
      " />

      <p>So to summarize, the properties of the covariant derivative connection are as follows:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{a \boldsymbol{u} + b \boldsymbol{w}} \boldsymbol{v} &= a \nabla_{\boldsymbol{u}} \boldsymbol{v} + b \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (\boldsymbol{v} + \boldsymbol{w}) &= \nabla_{\boldsymbol{u}} \boldsymbol{v} + \nabla_{\boldsymbol{w}} \boldsymbol{v}, \\
          \nabla_{\boldsymbol{u}} (a \boldsymbol{v}) &= (\nabla_{\boldsymbol{u}} \boldsymbol{v}) a + a (\nabla_{\boldsymbol{u}} \boldsymbol{v}), \\
          \nabla_{\partial_{\mu}} a &= \frac{\partial a}{\partial x^{\mu}}, \\
          \nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} &= \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}}.
        \end{align*}
      " />

      <p>The Levi-Civita has two special properties - torsion-free and metric compatibility:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{w}} \boldsymbol{v} &= \nabla_{\boldsymbol{v}} \boldsymbol{w}, \\
          \nabla_{\boldsymbol{w}} (\boldsymbol{u} \cdot \boldsymbol{v}) &= (\nabla_{\boldsymbol{w}} \boldsymbol{u}) \cdot \boldsymbol{v} + \boldsymbol{u} \cdot (\nabla_{\boldsymbol{w}} \boldsymbol{v}),
        \end{align*}
      " />
      <p>and the Levi-Civita connection coefficients are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{\rho}{}_{\nu \sigma} &= \frac{1}{2} g^{\mu \rho} (g_{\mu \nu, \sigma} + g_{\mu \sigma, \nu} - g_{\sigma \nu, \mu}), \\
          &= \frac{1}{2} g^{\mu \rho} \left(\frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} + \frac{\partial g_{\mu \sigma}}{\partial x^{\nu}} - \frac{\partial g_{\sigma \nu}}{\partial x^{\mu}}\right).
        \end{align*}
      " />
      <p>And remember, the order of indices in the Christoffel symbols matters in connections without the torsion free property. So generally:</p>
      <BlockMath math="\nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}} = \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}} \neq \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}}." />
          
      <p>And for a covariant derivative of a vector along another vector is equal to:</p>
      <BlockMath math="\nabla_{\boldsymbol{u}} \boldsymbol{v} = u^{\mu} \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}," />
      
      <p>and for the covariant derivative along a basis vector:</p>
      <BlockMath math="\nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v} = \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}." />

      <LinkH2 id="covariant-derivative-covectors">Covariant Derivative for Covectors</LinkH2>
      <p>Recall the following property of covectors:</p>
      <BlockMath math="\epsilon^{\mu} (\boldsymbol{e_{\nu}}) = \delta^{\mu}_{\nu}," />
      <p>or when expressed as differential:</p>
      <BlockMath math="dx^{\mu} \left(\frac{\partial}{\partial x^{\nu}}\right) = \frac{\partial x^{\mu}}{\partial x^{\nu}} = \delta^{\mu}_{\nu}." />

      <p>Taking the covariant derivative of a covector <InlineMath math="a" />:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\partial_{\mu}} (\alpha) &= \nabla_{\partial_{\mu}} (\alpha_{\nu} \epsilon^{\nu}) \\
          &= (\nabla_{\partial_{\mu}} \alpha_{\nu}) \epsilon^{\nu} + \alpha_{\nu} (\nabla_{\partial_{\mu}} \epsilon^{\nu}) \\
          &= \frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} \epsilon^{\sigma} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma} \epsilon^{\sigma} \\
          &= \left(\frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma}\right) \epsilon^{\sigma},
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} \epsilon^{\nu} = \Lambda^{\nu}{}_{\mu \sigma} \epsilon^{\sigma}." />
      {/* 
        In the connection above for the covariant derivative of basis covector, I have a problem with the ordering of the Lambda coefficients. 
        I did not find any sources specifying the order. So it could be \Lambda_{\mu}{}^{\nu}{}_{\sigma} \epsilon^{\sigma} or \Lambda_{\mu \sigma}{}^{\nu} \epsilon^{\sigma}.
        This should not matter in the end, because I will define the covariant derivative in terms of the Christoffel symbols.
      */}

      <p>Consider the covariant of the covector <InlineMath math="\alpha" /> acting on vector <InlineMath math="\boldsymbol{v}" /> and remember that covector acting on a vector is a dot product:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} (\alpha(\boldsymbol{v})) = \nabla_{\partial_{\mu}} (\boldsymbol{a} \cdot \boldsymbol{v})," />
      <p>using the metric compatibility:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\partial_{\mu}} (\boldsymbol{a} \cdot \boldsymbol{v}) &= (\nabla_{\partial_{\mu}} \boldsymbol{a}) \cdot \boldsymbol{v} + \boldsymbol{a} \cdot (\nabla_{\partial_{\mu}} \boldsymbol{v}), \\
          \nabla_{\partial_{\mu}} (\alpha(\boldsymbol{v})) &= (\nabla_{\partial_{\mu}} \alpha) (\boldsymbol{v}) + \alpha(\nabla_{\partial_{\mu}} \boldsymbol{v}), \\
          \nabla_{\partial_{\mu}} (\alpha_{\sigma} \epsilon^{\sigma} (v^{\nu} \boldsymbol{e_{\nu}})) &= \left(\frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma}\right) \epsilon^{\sigma} (\boldsymbol{v}) + \alpha \left(\left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}}\right), \\
          \nabla_{\partial_{\mu}} (\alpha_{\sigma} v^{\nu} \epsilon^{\sigma} (\boldsymbol{e_{\nu}})) &= \left(\frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma}\right) v^{\sigma} + \left(\frac{\partial v^{\sigma}}{\partial x^{\mu}} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \alpha(\boldsymbol{e_{\sigma}}), \\
          \nabla_{\partial_{\mu}} (\alpha_{\sigma} v^{\nu} \delta^{\sigma}_{\nu}) &= \frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} v^{\sigma} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma} v^{\sigma} + \frac{\partial v^{\sigma}}{\partial x^{\mu}} \alpha_{\sigma} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \alpha_{\sigma}, \\
          \nabla_{\partial_{\mu}} (\alpha_{\nu} v^{\nu}) &= \frac{\partial \alpha_{\nu}}{\partial x^{\mu}} v^{\nu} + \alpha_{\nu} \frac{\partial v^{\nu}}{\partial x^{\mu}} + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma} v^{\sigma} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \alpha_{\sigma} \\
          &= \nabla_{\partial_{\mu}} (\alpha_{\nu} v^{\nu}) + \alpha_{\nu} \Lambda^{\nu}{}_{\mu \sigma} v^{\sigma} + v^{\nu} \Gamma^{\sigma}{}_{\mu \nu} \alpha_{\sigma}, \\
          0 &= \alpha_{\nu} v^{\sigma} \Lambda^{\nu}{}_{\mu \sigma} + \alpha_{\sigma} v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}, \\
          \alpha_{\sigma} v^{\nu} \Lambda^{\sigma}{}_{\mu \nu} &= - \alpha_{\sigma} v^{\nu} \Gamma^{\sigma}{}_{\mu \nu}, \\
          \Lambda^{\sigma}{}_{\mu \nu} &= - \Gamma^{\sigma}{}_{\mu \nu},
        \end{align*}
      " />
      <p>substituting into the equation for covariant derivative:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} (\alpha) = \left(\frac{\partial \alpha_{\sigma}}{\partial x^{\mu}} - \alpha_{\nu} \Gamma^{\nu}{}_{\mu \sigma}\right) \epsilon^{\sigma}," />

      <p>and for the basis covector:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} \epsilon^{\nu} = -\Gamma^{\nu}{}_{\mu \sigma} \epsilon^{\sigma}." />

      <LinkH2 id="covariant-derivative-tensor">Covariant Derivative of Tensor</LinkH2>
      <p>To take the covariant derivative of a tensor, we have to declare the following property:</p>
      <BlockMath math="\nabla_{\boldsymbol{w}} (T \otimes S) = (\nabla_{\boldsymbol{w}} T) \otimes S + T \otimes (\nabla_{\boldsymbol{w}} S)." />

      <p>Consider the covariant derivative of the metric tensor:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\partial_{\mu}} (g) &= \nabla_{\partial_{\mu}} (g_{\sigma \nu} \epsilon^{\sigma} \otimes \epsilon^{\nu}) \\
          &= \nabla_{\partial_{\mu}} (g_{\sigma \nu}) (\epsilon^{\sigma} \otimes \epsilon^{\nu}) + g_{\sigma \nu} \nabla_{\partial_{\mu}} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) \\
          &= g_{\sigma \nu, \mu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) + g_{\sigma \nu} \left((\nabla_{\partial_{\mu}} \epsilon^{\sigma}) \otimes \epsilon^{\nu} + \epsilon^{\sigma} \otimes (\nabla_{\partial_{\mu}} \epsilon^{\nu})\right) \\
          &= g_{\sigma \nu, \mu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) + g_{\sigma \nu} \left(- \Gamma^{\sigma}{}_{\mu \lambda} \epsilon^{\lambda} \otimes \epsilon^{\nu} - \epsilon^{\sigma} \otimes \Gamma^{\nu}{}_{\mu \lambda} \epsilon^{\lambda}\right) \\
          &= g_{\sigma \nu, \mu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) + g_{\sigma \nu} \left(- \Gamma^{\sigma}{}_{\mu \lambda} (\epsilon^{\lambda} \otimes \epsilon^{\nu}) - \Gamma^{\nu}{}_{\mu \lambda} (\epsilon^{\sigma} \otimes \epsilon^{\lambda})\right) \\
          &= g_{\sigma \nu, \mu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) - g_{\sigma \nu} \Gamma^{\sigma}{}_{\mu \lambda} (\epsilon^{\lambda} \otimes \epsilon^{\nu}) - g_{\sigma \nu} \Gamma^{\nu}{}_{\mu \lambda} (\epsilon^{\sigma} \otimes \epsilon^{\lambda}) \\
          &= g_{\sigma \nu, \mu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) - g_{\lambda \nu} \Gamma^{\lambda}{}_{\mu \sigma} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) - g_{\sigma \lambda} \Gamma^{\lambda}{}_{\mu \nu} (\epsilon^{\sigma} \otimes \epsilon^{\nu}) \\
          &= \left(g_{\sigma \nu, \mu} - g_{\lambda \nu} \Gamma^{\lambda}{}_{\mu \sigma} - g_{\sigma \lambda} \Gamma^{\lambda}{}_{\mu \nu}\right) (\epsilon^{\sigma} \otimes \epsilon^{\nu}).
        \end{align*}
      " />
      <p>We can see a pattern in the connection coefficients. For an <InlineMath math="(m, n)" />-tensor, there will be <InlineMath math="m" /> positive connection coefficient terms and <InlineMath math="n" /> negative connection coefficient terms.</p>
      
      <p>Recall the metric compatibility:</p>
      <BlockMath math="
        \begin{align*}
           g_{\mu \nu, \sigma} &= \Gamma^{\lambda}{}_{\sigma \mu} g_{\lambda \nu} + \Gamma^{\lambda}{}_{\sigma \nu} g_{\lambda \mu}, \\
           0 &= g_{\mu \nu, \sigma} - \Gamma^{\lambda}{}_{\sigma \mu} g_{\lambda \nu} - \Gamma^{\lambda}{}_{\sigma \nu} g_{\lambda \mu}, \\
           0 &= g_{\sigma \nu, \mu} - \Gamma^{\lambda}{}_{\mu \sigma} g_{\lambda \nu} - \Gamma^{\lambda}{}_{\mu \nu} g_{\lambda \sigma}, \\
           0 &= g_{\sigma \nu, \mu} - g_{\lambda \nu} \Gamma^{\lambda}{}_{\mu \sigma} - g_{\sigma \lambda} \Gamma^{\lambda}{}_{\mu \nu}, \\
        \end{align*}
      " />
      <p>the right hand side is exactly the same as the covariant derivative of the metric tensor:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} (g) = (0) (\epsilon^{\sigma} \otimes \epsilon^{\nu}) = 0." />

      <p>So another way to write metric compatibility is that the covariant derivative of the metric tensor in any direction is zero:</p>
      <BlockMath math="\nabla_{\partial_{\mu}} (g) = 0." />
    </div>
  )
}