import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Geodesics and Christoffel Symbols"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Geodesics and Christoffel Symbols</h1>
      <p>Geodesic is the straightest and shortest path between two points in curved space. In flat space, this is straight line. In flat space, a straight path (geodesic) has zero acceleration (red arrows) if we travel along it at constant speed:</p>
      <div className="grid gap-2 grid-cols-[auto_auto]">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/non-geodesic.svg`}
              width={500}
              height={500}
              alt="Non geodesic curve"
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/geodesic.svg`}
              width={500}
              height={500}
              alt="Geodesic curve"
          />
          <span className="justify-self-center">Non geodesic</span>
          <span className="justify-self-center">Geodesic</span>
      </div>

      <p>For curved surfaces, there is not a straight path. However, there is a straightest possible path - the geodesic:</p>
      <div className="grid gap-2 grid-cols-[auto_auto]">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/non-geodesic-sphere.png`}
              width={500}
              height={500}
              alt="Non geodesic curve on sphere"
              unoptimized
          />
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/geodesic-sphere.png`}
              width={500}
              height={500}
              alt="Geodesic curve on sphere"
              unoptimized
          />
          <span className="justify-self-center">Non geodesic</span>
          <span className="justify-self-center">Geodesic</span>
      </div>
      <p>The geodesic is a path where its acceleration (red vectors) is only in the normal components. This implies the tangential acceleration is zero.</p>

      <p>We can write the acceleration (second derivative of extrinsic vector <InlineMath math="\boldsymbol{R}" />) as sum of the tangential (<InlineMath math="t" />) and the normal (<InlineMath math="n" />) acceleration:</p>
      <BlockMath math="\frac{d^2 \boldsymbol{R}}{d \lambda^2} = \left(\frac{d^2 \boldsymbol{R}}{d \lambda^2}\right)_t + \left(\frac{d^2 \boldsymbol{R}}{d \lambda^2}\right)_n," />
      <p>and the idea will be to set the tangential component equal to zero.</p>

      <p>Calculating the second derivative:</p>
      <BlockMath math="\frac{d^2 \boldsymbol{R}}{d \lambda^2} = \frac{d}{d\lambda} \left(\frac{d R^{\mu}}{d \lambda} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}}\right) = \frac{d^2 R^{\mu}}{d \lambda^2} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} + \frac{d R^{\mu}}{d \lambda} \frac{d}{d\lambda} \left(\frac{\partial \boldsymbol{R}}{\partial R^{\mu}}\right)," />
      <p>we can expand the derivative operator:</p>
      <BlockMath math="\frac{d}{d \lambda} = \frac{d R^{\mu}}{d \lambda} \frac{\partial}{\partial R^{\mu}}," />
      <p>substituting it back:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 \boldsymbol{R}}{d \lambda^2} &= \frac{d^2 R^{\mu}}{d \lambda^2} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} + \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \frac{\partial}{\partial R^{\nu}} \left(\frac{\partial \boldsymbol{R}}{\partial R^{\mu}}\right) \\
          &= \frac{d^2 R^{\mu}}{d \lambda^2} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} + \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}},
        \end{align*}
      " />
      <p>here, <InlineMath math="R^{\mu}" /> and <InlineMath math="R^{\nu}" /> represent the intrinsic coordinates (for sphere <InlineMath math="\theta" /> and <InlineMath math="\phi" />).</p>

      <p>To make sense of the second partial derivative, consider the tangent plane of a sphere:</p>
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/tangent-plane-sphere.png`}
              width={500}
              height={500}
              alt="Tangent plane of a sphere"
              unoptimized
          />
      </div>

      <p>In the 2D surface, the second partial derivative will be three dimensional (with non zero normal components). We don&apos;t know the components, so we will invent them:</p>
      <BlockMath math="\frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} = \Gamma^{\theta}{}_{\mu \nu} \boldsymbol{e_{\theta}} + \Gamma^{\phi}{}_{\mu \nu} \boldsymbol{e_{\phi}} + L_{\mu \nu} \boldsymbol{\hat{n}}," />
      <p>or generally for any coordinates and any dimensions:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} &= \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}} \\
          &= \Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}},
        \end{align*}
      " />
      <p>where <InlineMath math="\Gamma^{\sigma}{}_{\mu \nu}" /> are called the Christoffel symbols and <InlineMath math="L_{\mu \nu}" /> are called the second fundamental form. Christoffel symbols give us the tangential components and the second fundamental form give us the normal components.</p>

      <p>Substituting into the equation for acceleration:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 \boldsymbol{R}}{d \lambda^2} &= \frac{d^2 R^{\mu}}{d \lambda^2} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} + \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \left(\Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}\right) \\
          &= \frac{d^2 R^{\sigma}}{d \lambda^2} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + \Gamma^{\sigma}{}_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \boldsymbol{\hat{n}} \\
          &= \left(\frac{d^2 R^{\sigma}}{d \lambda^2} + \Gamma^{\sigma}{}_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda}\right) \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \boldsymbol{\hat{n}}. \\
        \end{align*}
      " />
      
      <p>We now have the tangential and normal components separated. The geodesics have zero tangential acceleration:</p>
      <BlockMath math="
        \begin{align*}
          \left(\frac{d^2 R^{\sigma}}{d \lambda^2} + \Gamma^{\sigma}{}_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda}\right) \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} &= \boldsymbol{0}, \\
          \frac{d^2 R^{\sigma}}{d \lambda^2} + \Gamma^{\sigma}{}_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} &= 0,
        \end{align*}
      " />
      <p>the second equation is a set of equations that each of <InlineMath math="\sigma" /> components have to satisfy for a curve to be geodesic. Together they are called the geodesic equations components have to satisfy for a curve to be geodesic. Together they are called the geodesic equations.</p>

      <p>Christoffel symbols can be calculated by using the fact that the dot product of perpendicular vector is zero (by definition, the normal vector is perpendicular to the tangent vectors):</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} &= \Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}, \\
          \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} &= \left(\Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}\right) \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} \\
          &= \Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} + L_{\mu \nu} \boldsymbol{\hat{n}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} \\
          &= \Gamma^{\sigma}{}_{\mu \nu} g_{\sigma \lambda}, \\
          \Gamma_{\lambda \mu \nu} &= \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} = \frac{\partial \boldsymbol{e_{\mu}}}{\partial R^{\nu}} \cdot \boldsymbol{e_{\lambda}}, \\
          \Gamma^{\lambda}{}_{\mu \nu} &= \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} g^{\sigma \lambda} = \frac{\partial \boldsymbol{e_{\mu}}}{\partial R^{\nu}} \cdot \boldsymbol{e_{\sigma}} g^{\sigma \lambda},
        \end{align*}
      " />
      <p>where <InlineMath math="\Gamma_{\lambda \mu \nu}" /> are called the Christoffel symbols of the first kind and <InlineMath math="\Gamma^{\lambda}{}_{\mu \nu}" /> are called the Christoffel symbols of the second kind. The Christoffel symbols measure how the basis vectors change from point to point. Most of the time, by Christoffel symbols I will refer to the Christoffel symbols of the second kind. This definition is problematic, because it uses the extrinsic vector <InlineMath math="\boldsymbol{R}" />. However, for this section, it will suffice.</p>

      <p>Similarly, we can solve for the second fundamental form:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} &= \Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}, \\
          \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \boldsymbol{\hat{n}} &= \left(\Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} + L_{\mu \nu} \boldsymbol{\hat{n}}\right) \cdot \boldsymbol{\hat{n}} \\
          &= \Gamma^{\sigma}{}_{\mu \nu} \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} \cdot \boldsymbol{\hat{n}} + L_{\mu \nu} \boldsymbol{\hat{n}} \cdot \boldsymbol{\hat{n}} \\
          &= L_{\mu \nu}.
        \end{align*}
      " />

      <p>The normal vector may also be given by cross product of the basis vectors (divided by its length to have length equal to one):</p>
      <BlockMath math="L_{\mu \nu} = \frac{\partial \boldsymbol{e_{\mu}}}{\partial R^{\nu}} \cdot \frac{\boldsymbol{e_{\mu}} \times \boldsymbol{e_{\mu}}}{|\boldsymbol{e_{\mu}} \times \boldsymbol{e_{\mu}}|}." />

      <p>Since the order of partial differentiation does not matter, we can prove the following symmetry:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma_{\lambda \mu \nu} &= \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} = \frac{\partial^2 \boldsymbol{R}}{\partial R^{\nu} \partial R^{\mu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\lambda}} = \Gamma_{\lambda \nu \mu}, \\
          \Gamma^{\lambda}{}_{\mu \nu} &= \frac{\partial^2 \boldsymbol{R}}{\partial R^{\mu} \partial R^{\nu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} g^{\sigma \lambda} = \frac{\partial^2 \boldsymbol{R}}{\partial R^{\nu} \partial R^{\mu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\sigma}} g^{\sigma \lambda} = \Gamma^{\lambda}{}_{\nu \mu}.
        \end{align*}
      " />

      <p>The Christoffel symbols are not a tensor. They do not transform under the change of coordinates like tensors:</p>
      <BlockMath math="\tilde{\Gamma}^{\sigma}{}_{\mu \nu} \neq \frac{\partial \tilde{x}^{\sigma}}{\partial x^{\alpha}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\gamma}}{\partial \tilde{x}^{\nu}} \Gamma^{\alpha}_{\beta \gamma}."/>
      <p>This will be proven in the <Link href="/general-relativity/math-preliminaries/covariant-derivative#flat-space">next chapter</Link>.</p>

      <LinkH2 id="geodesics-plane">Geodesics on a Plane</LinkH2>
      <p>Consider the 2D Cartesian coordinates in flat plane. We know that the basis vectors don&apos;t change, implying:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{e_{\mu}}}{\partial R^{\nu}} &= \boldsymbol{0}, \\
          \Gamma^{\lambda}{}_{\mu \nu} &= \boldsymbol{0} \cdot \boldsymbol{e_{\sigma}} g^{\sigma \lambda} = 0.
        \end{align*}
      " />

      <p>This simplifies the geodesic equations:</p>
      <BlockMath math="\frac{d^2 R^{\sigma}}{d \lambda^2} = 0," />
      <p>implying:</p>
      <BlockMath math="R^{\sigma} = C_{\sigma} \lambda + R^{\sigma}_0," />
      <p>where <InlineMath math="C_{\sigma}" /> and <InlineMath math="R^{\sigma}_0" /> are constants. <InlineMath math="C_{\sigma}" /> is the initial velocity and <InlineMath math="R^{\sigma}_0" /> is the initial position.</p>

      <p>However, when we consider the 2D polar coordinates where:</p>
      <BlockMath math="
        \begin{align*}
          x &= r \cos \theta, \\
          y &= r \sin \theta, \\
          r &= \sqrt{x^2 + y^2}, \\
          \theta &= \tan^{-1} \left(\frac{y}{x}\right),
        \end{align*}
      " />

      <p>where the metric tensor and its inverse are equal to:</p>
      <BlockMath math="
      \begin{align*}
        \tilde{g}_{\mu \nu} &= \begin{bmatrix}
          1 & 0 \\
          0 & r^2
        \end{bmatrix}, \\
        \tilde{g}^{\mu \nu} &= \begin{bmatrix}
          1 & 0 \\
          0 & \frac{1}{r^2}
        \end{bmatrix}.
      \end{align*}
      " />

      <p>The Jacobian is:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial x}{\partial r} &= \cos \theta,
          & \frac{\partial x}{\partial r} &= -r \sin \theta, \\
          \frac{\partial y}{\partial r} &= \sin \theta, 
          & \frac{\partial y}{\partial r} &= r \cos \theta,
        \end{align*}
      " />
      <p>and the inverse Jacobian:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial r}{\partial x} &= \frac{x}{\sqrt{x^2 + y^2}} = \cos \theta,
          & \frac{\partial r}{\partial y} &= \frac{y}{\sqrt{x^2 + y^2}} = \sin \theta, \\
          \frac{\partial \theta}{\partial x} &= -\frac{y}{x^2 + y^2} = - \frac{\sin \theta}{r},
          & \frac{\partial \theta}{\partial y} &= \frac{x}{x^2 + y^2} = \frac{\cos \theta}{r}.
        \end{align*}
      " />

      <p>The basis vectors transform covariantly:</p>
      <BlockMath math="\boldsymbol{\tilde{e}_{\mu}} = \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}} \boldsymbol{e_{\nu}}," />
      <p>where the individual basis vectors are as follows:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{\tilde{e}_r} &= \frac{\partial x}{\partial r} \boldsymbol{e_x} + \frac{\partial y}{\partial r} \boldsymbol{e_y} \\
          &= \cos \theta \boldsymbol{e_x} + \sin \theta \boldsymbol{e_y}, \\
          \boldsymbol{\tilde{e}_{\theta}} &= \frac{\partial x}{\partial \theta} \boldsymbol{e_x} + \frac{\partial y}{\partial \theta} \boldsymbol{e_y} \\
          &= - r \sin \theta \boldsymbol{e_x} + r \cos \theta \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>To compute the Christoffel symbols, we need partial derivatives of the basis vectors:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{\tilde{e}_r}}{\partial r} &= \boldsymbol{0}, \\
          \frac{\partial \boldsymbol{\tilde{e}_\theta}}{\partial \theta} &= -r \cos \theta \boldsymbol{e_x} - r \sin \theta \boldsymbol{e_y}, \\
          \frac{\partial \boldsymbol{\tilde{e}_{\theta}}}{\partial r} = \frac{\partial \boldsymbol{\tilde{e}_r}}{\partial \theta} &= -\sin \theta \boldsymbol{e_x} + \cos \theta \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>The Christoffel symbols are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{\lambda}_{\mu \nu} &= \frac{\partial \boldsymbol{\tilde{e}_{\mu}}}{\partial \tilde{x}^{\nu}} \cdot \boldsymbol{\tilde{e}_{\sigma}} \tilde{g}^{\sigma \lambda}, \\[3ex]
          \Gamma^r_{\mu \nu} &= \frac{\partial \boldsymbol{\tilde{e}_{\mu}}}{\partial \tilde{x}^{\nu}} \cdot \boldsymbol{\tilde{e}_r} \tilde{g}^{r r}, \\
          \Gamma^{\theta}_{\mu \nu} &= \frac{\partial \boldsymbol{\tilde{e}_{\mu}}}{\partial \tilde{x}^{\nu}} \cdot \boldsymbol{\tilde{e}_{\theta}} \tilde{g}^{\theta \theta},
        \end{align*}
      " />

      <p>and the individual components:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^r_{rr} &= \begin{bmatrix}
            0 \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            \cos \theta \\
            \sin \theta
          \end{bmatrix} \\
          &= 0, \\

          \Gamma^r_{r\theta} = \Gamma^r_{\theta r} &= \begin{bmatrix}
            -\sin \theta \\
            \cos \theta
          \end{bmatrix} \cdot \begin{bmatrix}
            \cos \theta \\
            \sin \theta
          \end{bmatrix} \\
          &= - \sin \theta \cos \theta + \sin \theta \cos \theta \\
          &= 0, \\

          \Gamma^r_{\theta \theta} &= \begin{bmatrix}
            -r \cos \theta \\
            -r \sin \theta
          \end{bmatrix} \cdot \begin{bmatrix}
            \cos \theta \\
            \sin \theta
          \end{bmatrix} \\
          &= -r \cos^2 \theta + -r \sin^2 \theta \\
          &= -r, \\

          \Gamma^{\theta}_{rr} &= \begin{bmatrix}
            0 \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            - r \sin \theta \\
            r \cos \theta
          \end{bmatrix} \frac{1}{r^2} \\
          &= 0, \\

          \Gamma^{\theta}_{r \theta} = \Gamma^{\theta}_{\theta r} &= \begin{bmatrix}
            - \sin \theta \\
            \cos \theta \\
          \end{bmatrix} \cdot \begin{bmatrix}
            - r \sin \theta \\
            r \cos \theta
          \end{bmatrix} \frac{1}{r^2} \\
          &= (r \sin^2 \theta + r \cos^2 \theta) \frac{1}{r^2} \\
          &= \frac{1}{r}. \\

          \Gamma^{\theta}_{\theta \theta} &= \begin{bmatrix}
            -r \cos \theta \\
            -r \sin \theta
          \end{bmatrix} \cdot \begin{bmatrix}
            -r \sin \theta \\
            r \cos \theta
          \end{bmatrix} \\
          &= r^2 \sin \theta \cos \theta - r^2 \sin \theta \cos \theta \\
          &= 0.
        \end{align*}
      " />
      <p>where the dot product between column vectors is the Cartesian dot product.</p>

      <p>The only nonzero Christoffel symbols are:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^r_{\theta \theta} &= -r, \\
          \Gamma^{\theta}_{r \theta} = \Gamma^{\theta}_{\theta r} &= \frac{1}{r},
        \end{align*}
      " />
      <p>and the geodesic equations are as follows:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 r}{d \lambda^2} - r \left(\frac{d \theta}{d \lambda}\right)^2 &= 0, \\
          \frac{d^2 \theta}{d \lambda^2} + \frac{2}{r} \frac{d r}{d \lambda} \frac{d \theta}{d \lambda} &= 0.
        \end{align*}
      " />

      <p>I will not be solving these. I will, however, the scenario where <InlineMath math="\theta = \theta_0 \implies \frac{d^2 \theta}{d\lambda^2} = \frac{d\theta}{d\lambda} = 0" />, the geodesic equations simplify to:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 r}{d\lambda^2} &= 0, \\
          r &= v_{\parallel} \lambda + r_0,
        \end{align*}
      " />
      <p>where <InlineMath math="v_{\parallel}" /> is the initial radial velocity and <InlineMath math="r_0" /> is the initial <InlineMath math="r" /> coordinate. The motion is only radial.</p>

      {/*<p>Since we are in flat space, the motion will be on a line (red):</p>
      <div className="w-full flex justify-center">
          <Image
              src={`${basePath}/assets/general-relativity/math-preliminaries/geodesics/polar-geodesics.svg`}
              width={400}
              height={400}
              alt="Geodesics in polar coordinates"
          />
      </div>
      <p>where <InlineMath math="r_0" /> is the initial <InlineMath math="r" /> coordinate, <InlineMath math="\theta_0" /> is the initial <InlineMath math="\theta" /> coordinate, <InlineMath math="\omega" /> is the initial angular velocity, <InlineMath math="v_{\parallel}" /> is the initial radial velocity, <InlineMath math="v_{\perp}" /> is the tangential velocity and <InlineMath math="v" /> is the net initial velocity.</p>

      <p>The vectors of velocities in Cartesian coordinates are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{v_{\parallel}} &= \begin{bmatrix}
            v_{\parallel} \cos \theta_0 \\
            v_{\parallel} \sin \theta_0
          \end{bmatrix}, \\
          \boldsymbol{v_{\perp}} &= \begin{bmatrix}
            -\omega r_0 \sin \theta_0 \\
            \omega r_0 \cos \theta_0
          \end{bmatrix}, \\
          \boldsymbol{v} &= \begin{bmatrix}
            v_{\parallel} \cos \theta_0 - \omega r_0 \sin \theta_0 \\
            v_{\parallel} \sin \theta_0 + \omega r_0 \cos \theta_0
          \end{bmatrix}, \\
        \end{align*}
      " />*/}

      <LinkH2 id="geodesics-sphere">Geodesics on a Sphere</LinkH2>
      <p>In the <Link href="/general-relativity/math-preliminaries/metric-tensor#geometry-sphere">metric tensor</Link>, we derived the intrinsic basis vectors and the metric tensor:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{\bar{e}_{\theta}} &= r \cos \theta \cos \phi \boldsymbol{e_x} + r \cos \theta \sin \phi \boldsymbol{e_y} - r \sin \theta \boldsymbol{e_z}, \\
          \boldsymbol{\bar{e}_{\phi}} &= -r \sin \theta \sin \phi \boldsymbol{e_x} + r \sin \theta \cos \phi \boldsymbol{e_y}, \\
          \bar{g}_{\mu \nu} &= \begin{bmatrix}
            r^2 & 0 \\
            0   & r^2 \sin^2 \theta
          \end{bmatrix},
        \end{align*}
      " />
      <p>and the inverse metric tensor is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \bar{g}^{\mu \nu} &= \begin{bmatrix}
            \frac{1}{r^2} & 0 \\
            0             & \frac{1}{r^2 \sin^2 \theta}
          \end{bmatrix}.
        \end{align*}
      " />

      <p>The partial derivatives of the basis vectors are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \frac{\partial \boldsymbol{\bar{e}_{\theta}}}{\partial \theta} &= -r \sin \theta \cos \phi \boldsymbol{e_x} - r \sin \theta \sin \phi \boldsymbol{e_y} - r \cos \theta \boldsymbol{e_z}, \\
          \frac{\partial \boldsymbol{\bar{e}_{\phi}}}{\partial \phi} &= -r \sin \theta \cos \phi \boldsymbol{e_x} - r \sin \theta \sin \phi \boldsymbol{e_y}, \\
          \frac{\partial \boldsymbol{\bar{e}_{\phi}}}{\partial \theta} = \frac{\partial \boldsymbol{\bar{e}_{\theta}}}{\partial \phi} &= -r \cos \theta \sin \phi \boldsymbol{e_x} + r \cos \theta \cos \phi \boldsymbol{e_y}.
        \end{align*}
      " />

      <p>Since the metric tensor and its inverse is diagonal, the Christoffel symbols simplify:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{\theta}{}_{\mu \nu} = \frac{\partial \boldsymbol{\bar{e}_{\mu}}}{\partial R^{\nu}} \cdot \boldsymbol{\bar{e}_{\theta}} g^{\theta \theta}, \\
          \Gamma^{\phi}{}_{\mu \nu} = \frac{\partial \boldsymbol{\bar{e}_{\mu}}}{\partial R^{\nu}} \cdot \boldsymbol{\bar{e}_{\phi}} g^{\phi \phi}.
        \end{align*}
      " />

      <p>The individual Christoffel symbols are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{\theta}{}_{\theta \theta} &= \begin{bmatrix}
            -r \sin \theta \cos \phi \\
            - r \sin \theta \sin \phi \\
            - r \cos \theta
          \end{bmatrix} \cdot \begin{bmatrix}
            r \cos \theta \cos \phi \\
            r \cos \theta \sin \phi \\
            - r \sin \theta
          \end{bmatrix} \frac{1}{r^2} \\
          &= (-r^2 \sin \theta \cos \theta \cos^2 \phi - r^2 \sin \theta \cos \theta \sin^2 \phi + r^2 \sin \theta \cos \theta) \frac{1}{r^2} \\
          &= -\sin \theta \cos \theta (\cos^2 \phi + \sin^2 \phi) + \sin \theta \cos \theta \\
          &= -\sin \theta \cos \theta + \sin \theta \cos \theta \\
          &= 0, \\

          \Gamma^{\theta}{}_{\theta \phi} = \Gamma^{\theta}{}_{\phi \theta} &= \begin{bmatrix}
            -r \cos \theta \sin \phi \\
            r \cos \theta \cos \phi \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            r \cos \theta \cos \phi \\
            r \cos \theta \sin \phi \\
            - r \sin \theta
          \end{bmatrix} \frac{1}{r^2} \\
          &= (-r^2 \cos^2 \theta \sin \phi \cos \phi + r^2 \cos^2 \theta \sin \phi \cos \phi) \frac{1}{r^2} \\
          &= 0, \\

          \Gamma^{\theta}{}_{\phi \phi} &= \begin{bmatrix}
            -r \sin \theta \cos \phi \\
            - r \sin \theta \sin \phi \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            r \cos \theta \cos \phi \\
            r \cos \theta \sin \phi \\
            - r \sin \theta
          \end{bmatrix} \frac{1}{r^2} \\
          &= (-r^2 \sin \theta \cos \theta \cos^2 \phi - r^2 \sin \theta \cos \theta \sin^2 \phi) \frac{1}{r^2} \\
          &= -\sin \theta \cos \theta (\cos^2 \phi + \sin^2 \phi) \\
          &= -\sin \theta \cos \theta, \\

          \Gamma^{\phi}{}_{\theta \theta} &= \begin{bmatrix}
            -r \sin \theta \cos \phi \\
            - r \sin \theta \sin \phi \\
            - r \cos \theta
          \end{bmatrix} \cdot \begin{bmatrix}
            -r \sin \theta \sin \phi \\
            r \sin \theta \cos \phi \\
            0
          \end{bmatrix} \frac{1}{r^2 \sin^2 \theta} \\
          &= (r^2 \sin^2 \theta \sin \phi \cos \phi - r^2 \sin^2 \theta \sin \phi \cos \phi) \frac{1}{r^2 \sin^2 \theta} \\
          &= 0, \\
          
          \Gamma^{\phi}{}_{\theta \phi} = \Gamma^{\phi}{}_{\phi \theta} &= \begin{bmatrix}
            -r \cos \theta \sin \phi \\
            r \cos \theta \cos \phi \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            -r \sin \theta \sin \phi \\
            r \sin \theta \cos \phi \\
            0
          \end{bmatrix} \frac{1}{r^2 \sin^2 \theta} \\
          &= (r^2 \sin \theta \cos \theta \sin^2 \phi + r^2 \sin \theta \cos \theta \cos^2 \phi) \frac{1}{r^2 \sin^2 \theta} \\
          &= \frac{\cos \theta}{\sin \theta} (\sin^2 \phi + \cos^2 \phi) \\
          &= \cot \theta, \\

          \Gamma^{\phi}{}_{\phi \phi} &= \begin{bmatrix}
            -r \sin \theta \cos \phi \\
            - r \sin \theta \sin \phi \\
            0
          \end{bmatrix} \cdot \begin{bmatrix}
            -r \sin \theta \sin \phi \\
            r \sin \theta \cos \phi \\
            0
          \end{bmatrix} \frac{1}{r^2 \sin^2 \theta} \\
          &= (r^2 \sin^2 \theta \sin \phi \cos \phi - r^2 \sin^2 \theta \sin \phi \cos \phi) \frac{1}{r^2 \sin^2 \theta} \\
          &= 0,
        \end{align*}
      " />
      <p>where the dot product between column vectors is the Cartesian dot product.</p>

      <p>Cleaning it up, the nonzero Christoffel symbols are equal to:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{\theta}{}_{\phi \phi} &= -\sin \theta \cos \theta, \\
          \Gamma^{\phi}{}_{\theta \phi} = \Gamma^{\phi}{}_{\phi \theta} &= \cot \theta.
        \end{align*}
      " />

      <p>Substituting into the geodesic equations:</p>
      <BlockMath math="
        \begin{align*}
          0 &= \frac{d^2 \theta}{d \lambda^2} + \Gamma^{\theta}{}_{\phi \phi} \left(\frac{d \phi}{d \lambda}\right)^2 \\
          &= \frac{d^2 \theta}{d \lambda^2} - \sin \theta \cos \theta \left(\frac{d \phi}{d \lambda}\right)^2, \\
          0 &= \frac{d^2 \phi}{d \lambda^2} + 2\Gamma^{\phi}{}_{\phi \theta} \frac{d \phi}{d \lambda} \frac{d \theta}{d \lambda} \\
          &= \frac{d^2 \phi}{d \lambda^2} + 2 \cot \theta \frac{d \phi}{d \lambda} \frac{d \theta}{d \lambda}.
        \end{align*}
      " />

      <p>These equations are however hard to solve. We can try a circle of latitude:</p>
      <BlockMath math="
        \begin{align*}
          \theta &= \theta_0,
          & \frac{d \theta}{d \lambda} &= 0,
          & \frac{d^2 \theta}{d \lambda^2} &= 0, \\
          \phi &= C \lambda,
          & \frac{d \phi}{d \lambda} &= C,
          & \frac{d^2 \phi}{d \lambda^2} &= 0.
        \end{align*}
      " />

      <p>Substituting back into the geodesic equations:</p>
      <BlockMath math="
        \begin{align*}
          0 &= \frac{d^2 \theta}{d \lambda^2} - \sin \theta \cos \theta \left(\frac{d \phi}{d \lambda}\right)^2 \\
          &= - \sin \theta_0 \cos \theta_0 C^2, \\
          0 &= \frac{d^2 \phi}{d \lambda^2} + 2 \cot \theta \frac{d \phi}{d \lambda} \frac{d \theta}{d \lambda} \\
          &= 2 \cot \theta_0 C (0) \\
          &= 0.
        \end{align*}
      " />

      <p>The second equation tells us that out guess works (but only for the second equation). The first equation, however, tells us that the curve is not geodesic. But we can solve for specific <InlineMath math="\theta_0 = \frac{\pi}{2}" /> which would make the curve geodesic:</p>
      <BlockMath math="- \sin 0 \cos 0 C^2 = 0." />

      <p>By rotational symmetry, we can rotate our coordinate system such that <InlineMath math="\theta = \frac{\pi}{2}" /> (refer to the illustration of geodesic curve on curved surfaces on the top of this page) and solve for a more general geodesic.</p>
    </div>
  )
}