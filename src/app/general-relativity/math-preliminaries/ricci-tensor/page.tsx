import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ricci Tensor"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Ricci Tensor and Ricci Scalar</h1>
      <p>Ricci tensor tracks how volume changes along geodesics. We can say it &quot;summarizes&quot; the Riemann tensor. Ricci scalar tells us how a volume is different than in flat space.</p>
      
      <LinkH2 id="sectional-curvature">Sectional Curvature</LinkH2>
      <p>Recall the geodesic deviation from the <Link href="/general-relativity/math-preliminaries/riemann-tensor#geodesic-deviation">previous chapter</Link>:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} = -R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}." />
      <div className="w-full grid grid-cols-[auto_auto_auto] gap-2 justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/flat-geodesic-deviation.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in flat space"
        />
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/curved-geodesic-deviation1.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in curved space"
        />
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/curved-geodesic-deviation2.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in curved space"
        />
        <p className="justify-self-center">Flat space</p>
        <p className="justify-self-center">Curved space</p>
        <p className="justify-self-center">Curved space</p>
        <BlockMath math="[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s} = 0" />
        <BlockMath math="[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s} > 0" />
        <BlockMath math="[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s} < 0" />
      </div>

      <p>The dot product of Riemann tensor and the separation vector depends on the sizes of <InlineMath math="\boldsymbol{v}" /> and <InlineMath math="\boldsymbol{s}" />. We can normalize this by dividing it by the squared area of the parallelogram formed by the two vectors:</p>
      <BlockMath math="
        \begin{align*}
          \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s} \times \boldsymbol{v}|^2} &= \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s}|^2 |\boldsymbol{v}|^2 \sin^2 \theta} \\
          &= \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s}|^2 |\boldsymbol{v}|^2 \sin^2 \theta} \\
          &= \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s}|^2 |\boldsymbol{v}|^2 (1 - \cos^2 \theta)} \\
          &= \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s}|^2 |\boldsymbol{v}|^2 - (|\boldsymbol{s}| |\boldsymbol{v}| \cos \theta)^2} \\
          &= \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{(\boldsymbol{s} \cdot \boldsymbol{s}) (\boldsymbol{v} \cdot \boldsymbol{v}) - (\boldsymbol{s} \cdot \boldsymbol{v})}.
        \end{align*}
      " />
      <p>We can prove the formula stays constant by transforming <InlineMath math="\boldsymbol{s} \to a\boldsymbol{s} + b\boldsymbol{v}" /> and <InlineMath math="\boldsymbol{v} \to c\boldsymbol{s} + d\boldsymbol{v}" />, first considering the Riemann tensor:</p>
      <BlockMath math="
        \begin{align*}
          R(a\boldsymbol{s} + b\boldsymbol{v}, c\boldsymbol{s} + d\boldsymbol{v})
          &= R(a\boldsymbol{s}, c\boldsymbol{s} + d\boldsymbol{v}) + R(b\boldsymbol{v}, c\boldsymbol{s} + d\boldsymbol{v}) \\
          &= ac R(\boldsymbol{s}, \boldsymbol{s}) + ad R(\boldsymbol{s}, \boldsymbol{v}) \\
          &+ bc R(\boldsymbol{v}, \boldsymbol{s}) + bd R(\boldsymbol{v}, \boldsymbol{v}) \\
          &= ad R(\boldsymbol{s}, \boldsymbol{v}) - bc R(\boldsymbol{s}, \boldsymbol{v}) \\
          &= (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}).
        \end{align*}
      " />

      <p>Recall that the Riemann tensor acting on a dot product is zero:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) (\boldsymbol{a} \cdot \boldsymbol{b}) &= R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{a} \cdot \boldsymbol{b} + \boldsymbol{a} \cdot R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{b} = 0, \\
          R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{a} \cdot \boldsymbol{b} &= -\boldsymbol{a} \cdot R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{b},
        \end{align*}
      " />
      <p>and if the dot product is of two same vectors, we get:</p>
      <BlockMath math="R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{a} \cdot \boldsymbol{a} = -\boldsymbol{a} \cdot R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{a} = 0." />

      <p>Continuing with the nominator:</p>
      <BlockMath math="
        \begin{align*}
          R(a\boldsymbol{s} + b\boldsymbol{v}, c\boldsymbol{s} + d\boldsymbol{v}) (c\boldsymbol{s} + d\boldsymbol{v}) \cdot (a\boldsymbol{s} + b\boldsymbol{v})
          &= (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) (c\boldsymbol{s} + d\boldsymbol{v}) \cdot (a\boldsymbol{s} + b\boldsymbol{v}) \\
          &= (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) c\boldsymbol{s} \cdot (a\boldsymbol{s} + b\boldsymbol{v}) + (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) d\boldsymbol{v} \cdot (a\boldsymbol{s} + b\boldsymbol{v}) \\
          &= (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) c\boldsymbol{s} \cdot a\boldsymbol{s} + (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) c\boldsymbol{s} \cdot b\boldsymbol{v} \\
          &+ (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) d\boldsymbol{v} \cdot a\boldsymbol{s} + (ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) d\boldsymbol{v} \cdot b\boldsymbol{v} \\
          &= bc(ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{s} \cdot \boldsymbol{v} + ad(ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} \cdot \boldsymbol{s} \\
          &= -bc(ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} \cdot \boldsymbol{s} + ad(ad - bc) R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} \cdot \boldsymbol{s} \\
          &= (ad - bc)^2 R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} \cdot \boldsymbol{s},
        \end{align*}
      " />
      <p>giving us the original nominator multiplied by <InlineMath math="(ad - bc)^2" />.</p>

      <p>For the denominator, I will use the original cross product:</p>
      <BlockMath math="
        \begin{align*}
          |(a\boldsymbol{s} + b\boldsymbol{v}) \times (c\boldsymbol{s} + d\boldsymbol{v})|^2
          &= |a\boldsymbol{s} \times (c\boldsymbol{s} + d\boldsymbol{v}) + b\boldsymbol{v} \times (c\boldsymbol{s} + d\boldsymbol{v})|^2 \\
          &= |a\boldsymbol{s} \times c\boldsymbol{s} + a\boldsymbol{s} \times d\boldsymbol{v} + b\boldsymbol{v} \times c\boldsymbol{s} + b\boldsymbol{v} \times d\boldsymbol{v}|^2 \\
          &= |a\boldsymbol{s} \times d\boldsymbol{v} + b\boldsymbol{v} \times c\boldsymbol{s}|^2 \\
          &= |(ad - bc)^2 \boldsymbol{s} \times \boldsymbol{v}|^2 \\
          &= (ad - bc)^2 |\boldsymbol{s} \times \boldsymbol{v}|^2,
        \end{align*}
      " />
      <p>giving us the original denominator multiplied by <InlineMath math="(ad - bc)^2" /></p>
      <BlockMath math="\frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s} \times \boldsymbol{v}|^2} \to \frac{(ad - bc)^2}{(ad - bc)^2} \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{|\boldsymbol{s} \times \boldsymbol{v}|^2}," />
      <p>implying the equation stays constant and depends only on the plane formed by the vectors and not the size.</p>

      <p>This is called the sectional curvature:</p>
      <BlockMath math="K(\boldsymbol{s}, \boldsymbol{v}) = \frac{[R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{s}}{(\boldsymbol{s} \cdot \boldsymbol{s}) (\boldsymbol{v} \cdot \boldsymbol{v}) - (\boldsymbol{s} \cdot \boldsymbol{v})}." />
      <div className="w-full grid grid-cols-[auto_auto_auto] gap-2 justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/flat-geodesic-deviation.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in flat space"
        />
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/curved-geodesic-deviation1.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in curved space"
        />
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/curved-geodesic-deviation2.svg`}
          width={400}
          height={400}
          alt="Geodesic deviation in curved space"
        />
        <p className="justify-self-center">Flat space</p>
        <p className="justify-self-center">Curved space</p>
        <p className="justify-self-center">Curved space</p>
        <BlockMath math="K(\boldsymbol{s}, \boldsymbol{v}) = 0" />
        <BlockMath math="K(\boldsymbol{s}, \boldsymbol{v}) > 0" />
        <BlockMath math="K(\boldsymbol{s}, \boldsymbol{v}) < 0" />
      </div>

      <LinkH2 id="ricci-curvature">Ricci Curvature</LinkH2>
      <p>For Ricci curvature, we take a set of basis vectors <InlineMath math="\{\boldsymbol{e_1}, \boldsymbol{e_2}, \dots, \boldsymbol{e_n}\}" /> and a direction vector <InlineMath math="\boldsymbol{v} = \boldsymbol{e_n}" />. The Ricci curvature is the sum of the sectional curvatures along this vector:</p>
      <BlockMath math="Ric(\boldsymbol{v}, \boldsymbol{v}) = \sum_{\mu} K(\boldsymbol{e_{\mu}}, \boldsymbol{v})." />

      <div className="w-full flex gap-2 justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/sectional-curvature.png`}
          width={400}
          height={400}
          alt="Sectional curvature"
          unoptimized
        />
      </div>
      <p>In the scenario on the picture:</p>
      <BlockMath math="
        \begin{align*}
          K(\boldsymbol{e_1}, \boldsymbol{v}) > 0, \\
          K(\boldsymbol{e_2}, \boldsymbol{v}) < 0.
        \end{align*}
      " />
      <p>We don&apos;t have enough information, to determine the Ricci curvature, it could be positive, negative or even zero. If the Ricci curvature is zero, it implies the volume doesn&apos;t change, However from the Riemann tensor, we may still get that there is a curvature and a change in shape.</p>

      <p>We can use the above formula and calculate the Ricci tensor components in orthonormal basis (dot product of same basis vectors is one and cross product of different basis vectors is zero):</p>
      <BlockMath math="
        \begin{align*}
          Ric(\boldsymbol{v}, \boldsymbol{v}) &= \sum_{\mu} K(\boldsymbol{e_{\mu}}, \boldsymbol{v}) \\
          &= \sum_{\mu} \frac{[R(\boldsymbol{e_{\mu}}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{e_{\mu}}}{(\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\mu}}) (\boldsymbol{v} \cdot \boldsymbol{v}) - (\boldsymbol{e_{\mu}} \cdot \boldsymbol{v})}. \\
          &= \sum_{\mu} \frac{[R(\boldsymbol{e_{\mu}}, \boldsymbol{v}) \boldsymbol{v}] \cdot \boldsymbol{e_{\mu}}}{(1) (1) - (0)} \\
          &= \sum_{\mu} v^{\nu} v^{\sigma} [R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\nu}}) \boldsymbol{e_{\sigma}}] \cdot \boldsymbol{e_{\mu}} \\
          &= v^{\nu} v^{\sigma} \sum_{\mu} R^{\lambda}{}_{\sigma \mu \nu} \boldsymbol{e_{\lambda}} \cdot \boldsymbol{e_{\mu}} \\
          &= v^{\nu} v^{\sigma} \sum_{\mu} R^{\lambda}{}_{\sigma \mu \nu} g_{\lambda \mu} \\
          &= v^{\nu} v^{\sigma} R^{\mu}{}_{\sigma \mu \nu} \\
          &= v^{\nu} v^{\sigma} R_{\sigma \nu},
        \end{align*}
      " />
      <p>where</p>
      <BlockMath math="R_{\sigma \nu} = R^{\mu}{}_{\sigma \mu \nu}" />
      <p>are the components of the Ricci tensor.</p>

      <p>The step</p>
      <BlockMath math="\sum_{\mu} R^{\lambda}{}_{\sigma \mu \nu} g_{\lambda \mu} \to R^{\mu}{}_{\sigma \mu \nu}" />
      <p>might seem a bit weird at first, but remember that the metric tensor is the Kronecker delta. If we expand the sum, we get:</p>
      <BlockMath math="
        \sum_{\mu} R^{\lambda}{}_{\sigma \mu \nu} g_{\lambda \mu} 
        = R^{\lambda}{}_{\sigma 1 \nu} \delta_{\lambda 1}
          + R^{\lambda}{}_{\sigma 2 \nu} \delta_{\lambda 2}
          + \dots,
      " />
      <p>and since the metric is diagonal:</p>
      <BlockMath math="
        R^1{}_{\sigma 1 \nu}
          + R^2{}_{\sigma 2 \nu}
          + \dots
        = R^{\mu}{}_{\sigma \mu \nu}.
      " />

      <LinkH2 id="sphere-curvature">Curvature of Sphere (Incorrect)</LinkH2>
      <p>Recall the components of the Riemann tensor:</p>
      <BlockMath math="
        \begin{align*}
          R^{\theta}{}_{\theta \theta \theta} &= 0, & R^{\theta}{}_{\theta \theta \phi} &= -1, & R^{\theta}{}_{\theta \phi \theta} &= 1, & R^{\theta}{}_{\theta \phi \phi} &= 0, \\
          R^{\theta}{}_{\phi \theta \theta} &= 0, & R^{\theta}{}_{\phi \theta \phi} &= \sin^2 \theta, & R^{\theta}{}_{\phi \phi \theta} &= - \sin^2 \theta, & R^{\theta}{}_{\phi \phi \phi} &= 0,\\
          R^{\phi}{}_{\theta \theta \theta} &= 0, & R^{\phi}{}_{\theta \theta \phi} &= -1, & R^{\phi}{}_{\theta \phi \theta} &= 1, & R^{\phi}{}_{\theta \phi \phi} &= 0, \\
          R^{\phi}{}_{\phi \theta \theta} &= 0, & R^{\phi}{}_{\phi \theta \phi} &= \sin^2 \theta, & R^{\phi}{}_{\phi \phi \theta} &= -\sin^2 \theta, & R^{\phi}{}_{\phi \phi \phi} &= 0,
        \end{align*}
      " />
      <p>we can obtain the non zero components:</p>
      <BlockMath math="
        \begin{align*}
          R_{\theta \theta} &= 1, \\
          R_{\theta \phi} &= -1?, \\
          R_{\phi \theta} &= -\sin^2 \theta?, \\
          R_{\phi \phi} &= \sin^2 \theta, \\
        \end{align*}
      " />

      <LinkH2 id="volume-element-derivative">Volume Element Derivative</LinkH2>
      <p>Sectional curvature works only in orthonormal basis. For any basis, we need to consider a different approach. We need to use the volume form which tells us the volume. For a parallelogram created by two vectors, the volume form is as follows:</p>
      <BlockMath math="\omega(\boldsymbol{u}, \boldsymbol{v}) = \begin{vmatrix}
        u^1 & v^1 \\
        u^2 & v^2
      \end{vmatrix} = \epsilon_{\mu \nu} u^{\mu} v^{\nu}," />
      <p>where</p>
      <BlockMath math="\epsilon_{\mu \nu} = \begin{cases}
        +1 & \textrm{counting order (\(\epsilon_{12}\))} \\
        -1 & \textrm{wrong order (\(\epsilon_{21}\))} \\
        \ \ \ 0 & \textrm{any index repeated}
      \end{cases}" />
      <p>is the Levi-Civita symbol.</p>

      <p>A volume created by three vectors is equal to:</p>
      <BlockMath math="\omega(\boldsymbol{u}, \boldsymbol{v}, \boldsymbol{w}) = \begin{vmatrix}
        u^1 & v^1 & w^1 \\
        u^2 & v^2 & w^2 \\
        u^3 & v^3 & w^3
      \end{vmatrix} = \epsilon_{\mu \nu \sigma} u^{\mu} v^{\nu} w^{\sigma}," />
      <p>where:</p>
      <BlockMath math="\epsilon_{\mu \nu \sigma} = \begin{cases}
        +1 & \textrm{even permutation of \(\mu \nu \sigma\)} \\
        -1 & \textrm{odd permutation of \(\mu \nu \sigma\)} \\
        \ \ \ 0 & \textrm{any index repeated}
      \end{cases}" />
      <p>Now this only works in orthonormal basis.</p>

      <p>Just as we took the components of the vectors in orthonormal basis, we can take the volume form of an arbitrary basis obtained by a coordinate transformation from the orthonormal basis:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{\tilde{e}_1} &= \frac{\partial x^1}{\partial \tilde{x}^1} \boldsymbol{e_1} + \frac{\partial x^2}{\partial \tilde{x}^1} \boldsymbol{e_2}, \\
          \boldsymbol{\tilde{e}_2} &= \frac{\partial x^1}{\partial \tilde{x}^2} \boldsymbol{e_1} + \frac{\partial x^2}{\partial \tilde{x}^2} \boldsymbol{e_2}, \\
          \omega(\boldsymbol{\tilde{e}_1}, \boldsymbol{\tilde{e}_2}) &= \begin{vmatrix}
            \frac{\partial x^1}{\partial \tilde{x}^1} & \frac{\partial x^1}{\partial \tilde{x}^2} \\
            \frac{\partial x^2}{\partial \tilde{x}^1} & \frac{\partial x^2}{\partial \tilde{x}^2}
          \end{vmatrix} = \det J,
        \end{align*}
      " />
      <p>with the metric tensor transformed:</p>
      <BlockMath math="
        \begin{align*}
          \tilde{g}_{\mu \nu} &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} g_{\alpha \beta} \\
          &= J^{\alpha}_{\mu} J^{\beta}_{\nu} g_{\alpha \beta},
        \end{align*}
      " />
      <p>and if we take the determinant of both sides, we obtain:</p>
      <BlockMath math="\det \tilde{g} = (\det J)^2 (\det g) = (\det J)^2," />
      <p>where the determinant of the metric tensor is 1 since it&apos;s the Kronecker delta (orthonormal basis). This implies:</p>
      <BlockMath math="\omega(\boldsymbol{e_1}, \boldsymbol{e_2}) = \sqrt{\det \tilde{g}}." />

      <p>The volume form of the vectors in general basis is:</p>
      <BlockMath math="\omega(\boldsymbol{u}, \boldsymbol{v}) = \sqrt{\det g} \begin{vmatrix}
        u^1 & v^1 \\      
        u^2 & v^2
      \end{vmatrix} = \sqrt{\det g} \epsilon_{\mu \nu} u^{\mu} v^{\nu}," />
      <p>where I have relabeled <InlineMath math="\tilde{g}" /> to <InlineMath math="g" />. For three vectors, this is equal to:</p>
      <BlockMath math="\omega(\boldsymbol{u}, \boldsymbol{v}, \boldsymbol{w}) = \sqrt{\det g} \begin{vmatrix}
        u^1 & v^1 & w^1 \\
        u^2 & v^2 & w^2 \\
        u^3 & v^3 & w^3
      \end{vmatrix} = \sqrt{\det g}\ \epsilon_{\mu \nu \sigma} u^{\mu} v^{\nu} w^{\sigma}," />
      <p>or in general:</p>
      <BlockMath math="\omega(\boldsymbol{v_1}, \boldsymbol{v_2}, \dots) = \sqrt{\det g}\ \epsilon_{\alpha \beta \dots} v_1^{\alpha} v_2^{\beta} \dots = \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(\prod_{i} v_i^{\mu_i}\right)," />
      <p>where there is a sum for each <InlineMath math="\mu_i" /> index due to Einstein summation convention.</p>

      <p>I will prove that the first covariant derivative is zero. We take a geodesic path and parallel transport the vectors along the path. And since the Levi-Civita connection preserves, volume, the covariant derivative of the volume form must be zero:</p>
      <BlockMath math="0 = \nabla_{\boldsymbol{u}} \omega(\boldsymbol{v_1}, \boldsymbol{v_1}, \dots) = \left(\prod_{i} v_i^{\mu_i}\right) \nabla_{\boldsymbol{u}} \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} = 0," />
      <p>where the product can go outside the covariant derivative, since by the definition of parallel transport, its covariant derivative is zero. Note that this does not mean that the volume does not changes. Just that the way we measure volume does not change. Now let&apos;s take the second covariant derivative of a volume spanned by separation vectors between geodesics:</p>
      <BlockMath math="
        \begin{align*}
          V &= \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(\prod_{i} v_i^{\mu_i}\right), \\
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} V = \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \left[\sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(\prod_{i} s_i^{\mu_i}\right)\right] &= \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \left(\prod_{i} s_i^{\mu_i}\right) \\
          &= \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \nabla_{\boldsymbol{v}} \left(\dot{s}_j^{\mu_j} \prod_{i \neq j} s_i^{\mu_i}\right) \\
          &= \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(\ddot{s}_j^{\mu_j} \prod_{i \neq j} s_i^{\mu_i} + \dot{s}_i^{\mu_j} \dot{s}_k^{\mu_k} \prod_{i \neq j, k} s_i^{\mu_i}\right),
        \end{align*}
      " />
      <p>since <InlineMath math="\boldsymbol{v_i}" /> are separation vectors, their second derivative is just the Riemann tensor:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} &= -R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} \\
          &= - R^{\sigma}{}_{\lambda \alpha \beta} s^{\alpha} v^{\beta} v^{\lambda} \boldsymbol{e_{\sigma}}, \\
          (\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s})^{\sigma} &= - R^{\sigma}{}_{\lambda \alpha \beta} s^{\alpha} v^{\beta} v^{\lambda}, \\
          \ddot{s}_j^{\mu_j} &= - R^{\mu_j}{}_{\lambda \alpha \beta} s_j^{\alpha} v^{\beta} v^{\lambda}
        \end{align*}
      " />
      <p>continuing:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} V = \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(- R^{\mu_j}{}_{\lambda \alpha \beta} s_j^{\alpha} v^{\beta} v^{\lambda} \prod_{i \neq j} s_i^{\mu_i} + \dot{s}_i^{\mu_j} \dot{s}_k^{\mu_k} \prod_{i \neq j, k} s_i^{\mu_i}\right)." />
      <p>Remember, there are summations across the <InlineMath math="\mu_i" /> indices. And because of the Levi-Civita symbol, if there is any repeated index, the whole term vanishes. And since the summation is across all indices except <InlineMath math="\mu_j" />, we will choose <InlineMath math="\alpha = \mu_j" />:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} V &= \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \left(- R^{\mu_j}{}_{\lambda \mu_j \beta} s_j^{\mu_j} v^{\beta} v^{\lambda} \prod_{i \neq j} s_i^{\mu_i} + \dot{s}_i^{\mu_j} \dot{s}_k^{\mu_k} \prod_{i \neq j, k} s_i^{\mu_i}\right) \\
          &= -R^{\mu_j}{}_{\lambda \mu_j \beta} v^{\beta} v^{\lambda} \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \prod_i s_i^{\mu_i} + \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \dot{s}_i^{\mu_j} \dot{s}_k^{\mu_k} \prod_{i \neq j, k} s_i^{\mu_i} \\
          &= -R_{\lambda \beta} v^{\beta} v^{\lambda} V + \sqrt{\det g}\ \epsilon_{\mu_1 \mu_2 \dots} \dot{s}_i^{\mu_j} \dot{s}_k^{\mu_k} \prod_{i \neq j, k} s_i^{\mu_i},
        \end{align*}
      " />
      <p>where <InlineMath math="R_{\lambda \beta}" /> is the Ricci tensor components. The volume scales proportional to the Ricci tensor. The first term tells us how the volumes change due to the curvature of the space, while the second term tells us the change in volume that can occur in flat space (remember, geodesics may separate at a constant rate in flat space).</p>

      <p>Since the Ricci tensor components are all positive on the surface of a sphere, this means that the first component is negative. This means that the volumes shrink.</p>

      <LinkH2 id="ricci-scalar">Ricci Scalar</LinkH2>
      <p>The Ricci scalar keeps track of how the size of a ball deviates from the size in flat space:</p>
      <BlockMath math="R = R^{\mu}{}_{\mu} = g^{\mu \nu} R_{\mu \nu}." />
      <p>On the surface of the sphere, this equals to:</p>
      <BlockMath math="R = g^{\theta \theta} R_{\theta \theta} + g^{\phi \phi} R_{\phi \phi} = \frac{1}{r^2} + \frac{1}{r^2 \sin^2 \theta} \sin^2 \theta = \frac{2}{r^2}." />
      <p>I will replace the radius of the sphere <InlineMath math="r" /> with <InlineMath math="\mathcal{R}" />:</p>
      <BlockMath math="R = \frac{2}{\mathcal{R}^2}." />

      <p>Observe the difference between circle on the surface of a sphere vs a circle in flat space:</p>
      <div className="w-full flex gap-2 justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/ricci-tensor/sphere-vs-circle.png`}
          width={600}
          height={600}
          alt="Circle on a sphere vs flat circle"
          unoptimized
        />
      </div>
      <p>We can see that the circle on the surface of a sphere has bigger area. Also:</p>
      <BlockMath math="
        \begin{align*}
          r &= \mathcal{R} \theta, \\
          \rho &= \mathcal{R} \sin \theta.
        \end{align*}
      " />

      <p>The area of the flat circle is:</p>
      <BlockMath math="A_f = \pi r^2," />
      <p>while the area of the circle on the surface of the sphere is:</p>
      <BlockMath math="
        \begin{align*}
          A_s &= \int dA \\
          &= \int 2 \pi \rho\ dr \\
          &= \int 2 \pi \mathcal{R} \sin \theta \mathcal{R} d \theta \\
          &= 2 \pi \mathcal{R}^2 \int_0^{\theta}\sin \theta d \theta \\
          &= -2 \pi \mathcal{R}^2 \left[\cos \theta\right]_0^{\theta} \\
          &= 2 \pi \mathcal{R}^2 (1 - \cos \theta) \\
          &= 2 \pi \mathcal{R}^2 \left(1 - \cos \frac{r}{\mathcal{R}}\right).
        \end{align*}
      " />

      <p>The ratio of the curved and flat area is:</p>
      <BlockMath math="
        \begin{align*}
          \frac{A_s}{A_f} &= \frac{2 \pi \mathcal{R}^2 \left(1 - \cos \frac{r}{\mathcal{R}}\right)}{\pi r^2} \\
          &= \frac{2 \mathcal{R}^2 \left(1 - \cos \frac{r}{\mathcal{R}}\right)}{r^2}.
        \end{align*}
      " />

      <p>I will take the taylor series of the cosine:</p>
      <BlockMath math="
        \begin{align*}
          \frac{A_s}{A_f} &= \frac{2 \mathcal{R}^2}{r^2} \left(1 - \left(1 - \frac{1}{2!} \left(\frac{r}{\mathcal{R}}\right)^2 + \frac{1}{4!} \left(\frac{r}{\mathcal{R}}\right)^4 - \frac{1}{6!} \left(\frac{r}{\mathcal{R}}\right)^6 + \cdots \right)\right) \\
          &= \frac{2 \mathcal{R}^2}{r^2} \left(\frac{1}{2!} \left(\frac{r}{\mathcal{R}}\right)^2 - \frac{1}{4!} \left(\frac{r}{\mathcal{R}}\right)^4 + \frac{1}{6!} \left(\frac{r}{\mathcal{R}}\right)^6 - \cdots\right) \\
          &= 1 - \frac{r^2}{24} \frac{2}{\mathcal{R}^2} + 2 \left[\frac{1}{6!} \left(\frac{r}{\mathcal{R}}\right)^4 - \cdots\right] \\
          &= 1 - \frac{r^2}{24} \frac{2}{\mathcal{R}^2} + 2 \left[\frac{1}{6!} \left(\frac{r}{\mathcal{R}}\right)^4 - \cdots\right] \\
          &= 1 - \frac{r^2}{24} R + \left[O(r)^4 + \cdots\right],
        \end{align*}
      " />
      <p>this ratio is a little less than one. Meaning for the same radius (<InlineMath math="r" />, not <InlineMath math="\rho" />), the sphere has smaller area than a circle in flat space.</p>

      <p>Generally, if a Ricci scalar is positive, it means that for the same radius, curved space has less area. And for the same circumference, curved space has more area.</p>
      <p>If a Ricci scalar is negative, it means that for the same radius, curved space has more area. And for the same circumference, curved space has less area.</p>

      <LinkH2 id="other-contractions">Other Contractions of the Riemann Tensor</LinkH2>
      <p>Recall the symmetries and identities of the Riemann tensor:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \rho \mu \lambda} &= -R_{\sigma \rho \lambda \mu}, \\
          R_{\sigma \gamma \alpha \beta} + R_{\sigma \beta \gamma \alpha} + R_{\sigma \alpha \beta \gamma} &= 0, \tag{Torsion-free} \\
          R_{\beta \alpha \mu \lambda} &= -R_{\alpha \beta \mu \lambda}, \tag{Metric compatibility} \\
          R_{\sigma \gamma \alpha \beta} &= R_{\alpha \beta \sigma \gamma}. \tag{Torsion-free \& metric compatibility} \\
        \end{align*}
      "/>
      <p>The Ricci tensor is a contraction of the Riemann tensor:</p>
      <BlockMath math="R_{\mu \nu} = R^{\sigma}{}_{\mu \sigma \nu} = g^{\sigma \lambda} R_{\lambda \mu \sigma \nu}." />

      <p>Consider the contraction in the contravariant index and the first covariant index:</p>
      <BlockMath math="R^{\sigma}{}_{\sigma \mu \nu} = g^{\sigma \lambda} R_{\lambda \sigma \mu \nu} = -g^{\sigma \lambda} R_{\sigma \lambda \mu \nu} = 0." />

      <p>We already know that the contraction in the contravariant index and the second covariant index is the Ricci tensor components:</p>
      <BlockMath math="R^{\sigma}{}_{\mu \sigma \nu} = R_{\mu \nu}." />

      <p>Considering the last possibility - the contraction in the contravariant index and the third covariant index:</p>
      <BlockMath math="R^{\sigma}{}_{\mu \nu \sigma} = g^{\sigma \lambda} R_{\lambda \mu \nu \sigma} = -g^{\sigma \lambda} R_{\lambda \mu \sigma \nu} = -R_{\mu \nu}," />
      <p>so the Ricci tensor is the only meaningful contraction.</p>

      <LinkH2 id="symmetries-identities">Symmetries and Identities</LinkH2>
      <p>The Ricci tensor is symmetric:</p>
      <BlockMath math="
        \begin{align*}
          R_{\mu \nu} &= g^{\sigma \lambda} R_{\lambda \mu \sigma \nu} \\
          &= g^{\sigma \lambda} R_{\sigma \nu \lambda \mu} \\
          &= R_{\nu \mu}.
        \end{align*}
      " />

      <p>Recall the second Bianchi identity:</p>
      <BlockMath math="R^{\sigma}{}_{\lambda \alpha \beta; \gamma} + R^{\sigma}{}_{\lambda \gamma \alpha; \beta} + R^{\sigma}{}_{\lambda \beta \gamma; \alpha} = 0," />
      <p>I will lower the index and do the following contraction:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \lambda \alpha \beta; \gamma} + R_{\sigma \lambda \gamma \alpha; \beta} + R_{\sigma \lambda \beta \gamma; \alpha} &= 0, \\
          g^{\lambda \beta} g^{\sigma \alpha} (R_{\sigma \lambda \alpha \beta; \gamma} + R_{\sigma \lambda \gamma \alpha; \beta} + R_{\sigma \lambda \beta \gamma; \alpha}) &= 0, \\
          g^{\lambda \beta} (R^{\alpha}{}_{\lambda \alpha \beta; \gamma} + R^{\alpha}{}_{\lambda \gamma \alpha; \beta} + g^{\sigma \alpha} R_{\sigma \lambda \beta \gamma; \alpha}) &= 0, \\
          g^{\lambda \beta} (R_{\lambda \beta; \gamma} - R^{\alpha}{}_{\lambda \alpha \gamma; \beta} - g^{\sigma \alpha} R_{\lambda \sigma \beta \gamma; \alpha}) &= 0, \\
          R^{\beta}{}_{\beta; \gamma} - g^{\lambda \beta} R_{\lambda \gamma; \beta} - g^{\sigma \alpha} R^{\beta}{}_{\sigma \beta \gamma; \alpha} &= 0, \\
          R_{; \gamma} - R^{\beta}{}_{\gamma; \beta} - g^{\sigma \alpha} R_{\sigma \gamma; \alpha} &= 0, \\
          R_{; \gamma} - R^{\beta}{}_{\gamma; \beta} - R^{\alpha}{}_{\gamma; \alpha} &= 0, \\
          R_{; \gamma} - R^{\beta}{}_{\gamma; \beta} - R^{\beta}{}_{\gamma; \beta} &= 0, \\
          R_{; \gamma} - 2 R^{\beta}{}_{\gamma; \beta} &= 0, \\
          \frac{1}{2} \delta^{\beta}_{\gamma} R_{; \beta} - R^{\beta}{}_{\gamma; \beta} &= 0, \\
          \frac{1}{2} g^{\gamma \rho} \delta^{\beta}_{\gamma} R_{; \beta} - g^{\gamma \rho} R^{\beta}{}_{\gamma; \beta} &= 0, \\
          \frac{1}{2} g^{\beta \rho} R_{; \beta} - R^{\beta \rho}{}_{; \beta} &= 0,
        \end{align*}
      " />

      <p>and this is called the contracted Bianchi identity:</p>
      <BlockMath math="R^{\alpha \beta}{}_{; \beta} - \frac{1}{2} g^{\alpha \beta} R_{; \beta} = 0." />

      <p>This can be rewritten:</p>
      <BlockMath math="
        \begin{align*}
          R^{\alpha \beta}{}_{; \beta} - \frac{1}{2} g^{\alpha \beta} R_{; \beta} &= 0, \\
          \left(R^{\alpha \beta} - \frac{1}{2} g^{\alpha \beta} R\right)_{; \beta} &= 0, \\
          G^{\alpha \beta}{}_{; \beta} &= 0.
        \end{align*}
      " />
      <p>where</p>
      <BlockMath math="G^{\alpha \beta} = R^{\alpha \beta} - \frac{1}{2} g^{\alpha \beta} R" />
      <p>is the Einstein tensor.</p>
      <p>The conservation of energy-momentum is as follows:</p>
      <BlockMath math="T^{\alpha \beta}{}_{; \beta} = 0," />
      <p>where <InlineMath math="T^{\alpha \beta}" /> is the energy-momentum tensor.</p>
      <p>This implies:</p>
      <BlockMath math="G^{\alpha \beta}{}_{; \beta} = T^{\alpha \beta}{}_{;\beta} = 0." />

      <p>We can say that the curvature is proportional to the energy and momentum:</p>
      <BlockMath math="
        \begin{align*}
          G^{\alpha \beta} &= \frac{8 \pi G}{c^4} T^{\alpha \beta}, \\
          R^{\alpha \beta} - \frac{1}{2} g^{\alpha \beta} R &= \frac{8 \pi G}{c^4} T^{\alpha \beta},
        \end{align*}
      " />
      <p>where all three tensors are symmetric. In four dimensional spacetime, this results in ten independent equations.</p>
      <p>Since the covariant derivative is zero, we can add the metric tensor multiplied by a constant:</p>
      <BlockMath math="R^{\alpha \beta} - \frac{1}{2} g^{\alpha \beta} R + \Lambda g^{\alpha \beta} = \frac{8 \pi G}{c^4} T^{\alpha \beta}," />
      <p>or in the covariant form:</p>
      <BlockMath math="R_{\alpha \beta} - \frac{1}{2} g_{\alpha \beta} R + \Lambda g_{\alpha \beta} = \frac{8 \pi G}{c^4} T_{\alpha \beta}," />
      <p>where <InlineMath math="\Lambda" /> is the cosmological constant. It is related to the expansion of the universe and the dark energy.</p>
    </div>
  )
}