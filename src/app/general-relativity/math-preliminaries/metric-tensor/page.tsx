import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arc Length and Metric Tensor"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
        <Link href="/general-relativity/math-preliminaries">Back</Link>
        <h1>Arc Length and Metric Tensor</h1>
        <p>To calculate the (squared) length of a vector, we take the dot product of the vector with it self:</p>
        <BlockMath math="
            \begin{align*}
                |\boldsymbol{v}|^2 &= \boldsymbol{v} \cdot \boldsymbol{v} \\
                &= (v^{\mu} \boldsymbol{e_{\mu}}) \cdot (v^{\nu} \boldsymbol{e_{\nu}}) \\
                &= v^{\mu} v^{\nu} (\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}).
            \end{align*}
        " />

        <p>In 2D Cartesian coordinates, the dot products of basis vectors are as follows:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{e_x} \cdot \boldsymbol{e_x} = 1, \\
                \boldsymbol{e_x} \cdot \boldsymbol{e_y} = 0, \\
                \boldsymbol{e_y} \cdot \boldsymbol{e_y} = 1.
            \end{align*}
        " />

        <p>The metric tensor <InlineMath math="g_{\mu \nu}" /> contains these dot products:</p>
        <BlockMath math="g_{\mu \nu} = \boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}." />

        <p>For the Cartesian coordinate system, the metric tensor is equal to the Kronecker delta:</p>
        <BlockMath math="g_{\mu \nu} = \delta_{\mu \nu} = \begin{cases}
            1 & \mu &= \nu, \\
            0 & \mu &\neq \nu,
        \end{cases}" />

        <p>Or represented as matrix for 2D Cartesian coordinate system:</p>
        <BlockMath math="g_{\mu \nu} = \begin{bmatrix}
            1 & 0 \\
            0 & 1
        \end{bmatrix}" />

        <p>This means that the vectors are parallel to each other due to the missing off diagonal components.</p>

        <p>The metric tensor has two covariant indices. Consider the coordinate transformation <InlineMath math="x^{\mu} \to \tilde{x}^{\mu}" />, the bases transform as follows:</p>
        <BlockMath math="\boldsymbol{\tilde{e}_{\mu}} = \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}} \boldsymbol{e}_{\nu}," />
        <p>and the metric:</p>
        <BlockMath math="
            \begin{align*}
                \tilde{g}_{\mu \nu} &= \boldsymbol{\tilde{e}_{\mu} \cdot \tilde{e}_{\nu}} \\
                &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \boldsymbol{e}_{\alpha} \cdot \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} \boldsymbol{e}_{\beta} \\
                &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} \boldsymbol{e}_{\alpha} \cdot \boldsymbol{e}_{\beta} \\
                &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} g_{\alpha \beta}.
            \end{align*}
        " />

        <p>The metric tensor is also symmetric:</p>
        <BlockMath math="
            \begin{align*}
                g_{\mu \nu} &= \boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}} \\
                &= \boldsymbol{e_{\nu}} \cdot \boldsymbol{e_{\mu}} \\
                &= g_{\nu \mu}.
            \end{align*}
        " />

        <p>Generally, if we want to compute the dot product of two vectors, we use the metric tensor:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{v} \cdot \boldsymbol{w} &= (v^{\mu} \boldsymbol{e_{\mu}}) \cdot (w^{\nu} \boldsymbol{e_{\nu}}) \\
                &= v^{\mu} w^{\nu} (\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}) \\
                &= v^{\mu} w^{\nu} g_{\mu \nu} = |\boldsymbol{v}| |\boldsymbol{w}| \cos \theta,
            \end{align*}
        " />
        <p>where <InlineMath math="\theta" /> is the angle between the two vectors.</p>

        <p>The metric tensor is a function <InlineMath math="g: V \times V \to \mathbb{R}" />:</p>
        <BlockMath math="g(\boldsymbol{v}, \boldsymbol{w}) = v^{\mu} w^{\nu} g_{\mu \nu}." />
        <p>We can scale the inputs of the metric tensor:</p>
        <BlockMath math="
            \begin{align*}
                g(a \boldsymbol{v}, \boldsymbol{w}) &= g(\boldsymbol{v}, a \boldsymbol{w}) = a g(\boldsymbol{v}, \boldsymbol{w}), \\
                a (v^{\mu} w^{\nu} g_{\mu \nu}) &= (a v^{\mu}) w^{\nu} g_{\mu \nu} = v^{\mu} (a w^{\nu}) g_{\mu \nu}
            \end{align*}
        " />

        <p>The inputs can also be added:</p>
        <BlockMath math="
            \begin{align*}
                g(\boldsymbol{v} + \boldsymbol{u}, \boldsymbol{w}) &= g(\boldsymbol{v}, \boldsymbol{w}) + g(\boldsymbol{u}, \boldsymbol{w}), \\
                (v^{\mu} + u^{\mu}) w^{\nu} g_{\mu \nu} &= v^{\mu} w^{\nu} g_{\mu \nu} + u^{\mu} w^{\nu} g_{\mu \nu}, \\
                g(\boldsymbol{v}, \boldsymbol{w} + \boldsymbol{t}) &= g(\boldsymbol{v}, \boldsymbol{w}) + g(\boldsymbol{v}, \boldsymbol{t}), \\
                v^{\mu} (w^{\nu} + t^{\nu}) g_{\mu \nu} &= v^{\mu} w^{\nu} g_{\mu \nu} + v^{\mu} t^{\nu} g_{\mu \nu},
            \end{align*}
        " />
        <p>however:</p>
        <BlockMath math="
            \begin{align*}
                g(\boldsymbol{v} + \boldsymbol{u}, \boldsymbol{w} + \boldsymbol{t}) &\neq g(\boldsymbol{v}, \boldsymbol{w}) + g(\boldsymbol{u}, \boldsymbol{t}), \\
                g(\boldsymbol{v} + \boldsymbol{u}, \boldsymbol{w} + \boldsymbol{t}) &= g(\boldsymbol{v}, \boldsymbol{w} + \boldsymbol{t}) + g(\boldsymbol{u}, \boldsymbol{w} + \boldsymbol{t}) \\
                &= g(\boldsymbol{v}, \boldsymbol{w}) + g(\boldsymbol{v}, \boldsymbol{t}) + g(\boldsymbol{u}, \boldsymbol{w}) + g(\boldsymbol{u}, \boldsymbol{t}).
            \end{align*}
        " />

        <p>And this is the same definition as bilinear form:</p>
        <BlockMath math="
            \begin{gather*}
                \mathcal{B}: V \times V \to \mathbb{R}, \\
                a\mathcal{B}(\boldsymbol{v}, \boldsymbol{w}) = \mathcal{B}(a\boldsymbol{v}, \boldsymbol{w}) = \mathcal{B}(\boldsymbol{v}, a\boldsymbol{w}), \\
                \mathcal{B}(\boldsymbol{v} + \boldsymbol{u}, \boldsymbol{w}) = \mathcal{B}(\boldsymbol{v}, \boldsymbol{w}) + \mathcal{B}(\boldsymbol{u}, \boldsymbol{w}), \\
                \mathcal{B}(\boldsymbol{v}, \boldsymbol{w} + \boldsymbol{t}) = \mathcal{B}(\boldsymbol{v}, \boldsymbol{w}) + \mathcal{B}(\boldsymbol{v}, \boldsymbol{t}).
            \end{gather*}
        " />

        <p>The metric tensor is a bilinear form, but in addition it has two properties:</p>
        <BlockMath math="
            \begin{align*}
                g(\boldsymbol{v}, \boldsymbol{w}) &= g(\boldsymbol{w}, \boldsymbol{v}), \tag{symmetricity} \\
                g(\boldsymbol{v}, \boldsymbol{v}) &\geq 0. \tag{positive or zero length}
            \end{align*}
        " />

        <LinkH2 id="arc-length">Arc Length</LinkH2>
        <p>A curve may be broken up into small pieces:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/curve.svg`}
                width={500}
                height={500}
                alt="Curve"
            />
        </div>
        <p>and if we sum over the lengths these small pieces, we get the arc length <InlineMath math="L" />:</p>
        <BlockMath math="
            \begin{align*}
                L &\approx \sum_i |\boldsymbol{R}(\lambda + h) - \boldsymbol{R}(\lambda)| \\
                L &= \lim_{h \to 0} \sum_i \frac{|\boldsymbol{R}(\lambda + h) - \boldsymbol{R}(\lambda)|}{h} h \\
                &= \int \left|\frac{d\boldsymbol{R}}{d \lambda}\right| d\lambda,
            \end{align*}
        " />

        <p>where <InlineMath math="\frac{d\boldsymbol{R}}{d\lambda}" /> is the vector tangent to the curve. Its length squared is equal to:</p>
        <BlockMath math="
            \begin{align*}
                \left|\frac{d\boldsymbol{R}}{d \lambda}\right|^2 &= \frac{d \boldsymbol{R}}{d\lambda} \cdot \frac{d \boldsymbol{R}}{d\lambda} \\
                &= \left(\frac{\partial \boldsymbol{R}}{\partial R^{\mu}} \frac{d R^{\mu}}{d \lambda}\right) \cdot \left(\frac{\partial \boldsymbol{R}}{\partial R^{\nu}} \frac{d R^{\nu}}{d \lambda}\right) \\
                &= \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \left(\frac{\partial \boldsymbol{R}}{\partial R^{\mu}} \cdot \frac{\partial \boldsymbol{R}}{\partial R^{\nu}}\right) \\
                &= \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} \left(\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}\right) \\
                &= \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda} g_{\mu \nu}.
            \end{align*}
        " />

        <LinkH2 id="raising-and-lowering-indices">Raising and Lowering Indices</LinkH2>
        <p>We would like to find a way to relate the vectors <InlineMath math="\boldsymbol{v}" /> from the vector space <InlineMath math="V" /> and covectors from the dual space <InlineMath math="V^*" />. For a vector <InlineMath math="\boldsymbol{v}" />, we will introduce its &quot;partner&quot; covector <InlineMath math="\boldsymbol{v} \cdot \_" /> where <InlineMath math="\_" /> is a &quot;slot&quot; for another vector. This covector really is a member of <InlineMath math="V^*" /> by the abstract definition:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{v} \cdot \_: V \to \mathbb{R}, \\
                \boldsymbol{v} \cdot (n\boldsymbol{a}) = n (\boldsymbol{v} \cdot \boldsymbol{a}), \\
                \boldsymbol{v} \cdot (\boldsymbol{a} + \boldsymbol{b}) = (\boldsymbol{v} \cdot \boldsymbol{a}) + (\boldsymbol{v} \cdot \boldsymbol{b}),
            \end{align*}
        " />
        <p>and since it lives in the dual space <InlineMath math="V^*" />, we should be able to build it from the dual basis:</p>
        <BlockMath math="\boldsymbol{v} \cdot \_ = v_{\mu} \epsilon^{\mu}" />

        <p>If we substitute <InlineMath math="\boldsymbol{w}" /> into <InlineMath math="\boldsymbol{v} \cdot \_" />:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{v} \cdot \boldsymbol{w} &= g(\boldsymbol{v}, \boldsymbol{w}) \\
                &= g_{\alpha \beta} \epsilon^{\alpha} \epsilon^{\beta} (v^{\gamma} \boldsymbol{e_{\gamma}}, w^{\delta} \boldsymbol{e_{\delta}}) \\
                &= g_{\alpha \beta} \epsilon^{\alpha} (v^{\gamma} \boldsymbol{e_{\gamma}}) \epsilon^{\beta} (w^{\delta} \boldsymbol{e_{\delta}}) \\
                &= g_{\alpha \beta} v^{\gamma} w^{\delta} \epsilon^{\alpha} (\boldsymbol{e_{\gamma}}) \epsilon^{\beta} (\boldsymbol{e_{\delta}}) \\
                &= g_{\alpha \beta} v^{\gamma} w^{\delta} \delta^{\alpha}_{\gamma} \delta^{\beta}_{\delta} \\
                &= g_{\alpha \beta} v^{\alpha} w^{\beta}
            \end{align*}
        " />
        <p>we arrive at the formula for dot product. If we instead not substitute anything and consider just <InlineMath math="\boldsymbol{v} \cdot \_" />, we arrive at:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{v} \cdot \_ &= g(\boldsymbol{v}, \_) \\
                &= g_{\alpha \beta} \epsilon^{\alpha} \epsilon^{\beta} (v^{\gamma} \boldsymbol{e_{\gamma}}) \\
                &= g_{\alpha \beta} v^{\gamma} \epsilon^{\alpha} \epsilon^{\beta} (\boldsymbol{e_{\gamma}}) \\
                &= g_{\alpha \beta} v^{\gamma} \epsilon^{\alpha} \delta^{\beta}_{\gamma} \\
                &= g_{\alpha \beta} v^{\beta} \epsilon^{\alpha}.
            \end{align*}
        " />

        <p>This is the component decomposition of <InlineMath math="\boldsymbol{v} \cdot \_" />. Instead of writing <InlineMath math="g_{\alpha \beta} v^{\beta}" />, we can write <InlineMath math="v_{\alpha}" />:</p>
        <BlockMath math="
            \begin{align*}
                v_{\alpha} &= g_{\alpha \beta} v^{\beta}, \\
                \boldsymbol{v} \cdot \_ &= v_{\alpha} \epsilon^{\alpha} = g_{\alpha \beta} v^{\beta} \epsilon^{\alpha}.
            \end{align*}
        " />

        <p>Generally <InlineMath math="v_{\mu} \neq v^{\mu}" /> except in orthonormal basis.</p>

        <p>We can lower an index. Now we need to figure out how to raise an index. For this, we will use the inverse metric <InlineMath math="g^{\mu \nu}" /> defined as follows:</p>
        <BlockMath math="g^{\alpha \beta} g_{\beta \gamma} = \delta^{\alpha}_{\gamma}." />

        <p>The equation for covector components <InlineMath math="v_{\alpha} = g_{\alpha \beta} v^{\beta}" />. We can multiply both sides by <InlineMath math="g^{\gamma \alpha}" />:</p>
        <BlockMath math="
            \begin{align*}
                g^{\gamma \alpha} v_{\alpha} &= g^{\gamma \alpha} g_{\alpha \beta} v^{\beta} \\
                &= \delta^{\gamma}_{\beta} v^{\beta} \\
                &= v^{\gamma}.
            \end{align*}
        " />

        <p>So to summarize:</p>
        <BlockMath math="
            \begin{align*}
                v_{\mu} &= g_{\mu \nu} v^{\nu}, \\
                v^{\mu} &= g^{\mu \nu} v_{\nu}.
            \end{align*}
        " />

        <LinkH2 id="polar-coordinates">Polar Coordinates</LinkH2>
        <p>Consider a point parametrized by the distance from the origin <InlineMath math="r" /> and the angle <InlineMath math="\theta" /></p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/polar-coordinates.svg`}
                width={500}
                height={500}
                alt="Polar coordinates"
                unoptimized
            />
        </div>
        <p>From the diagram we can see:</p>
        <BlockMath math="
            \begin{align*}
                x &= r \cos \theta, \\
                y &= r \sin \theta.
            \end{align*}
        " />

        <p>The partial derivatives are:</p>
        <BlockMath math="
            \begin{align*}
                \frac{\partial x}{\partial r} &= \cos \theta,
                & \frac{\partial x}{\partial \theta} &= -r \sin \theta, \\
                \frac{\partial y}{\partial r} &= \sin \theta,
                & \frac{\partial y}{\partial \theta} &= r \cos \theta.
            \end{align*}
        " />

        <p>The metric tensor in 2D Cartesian coordinates is the Kronecker delta <InlineMath math="\delta_{\mu \nu}" />, the polar metric tensor <InlineMath math="\tilde{g}_{\mu \nu}" /> is equal to:</p>
        <BlockMath math="
            \begin{align*}
                \tilde{g}_{\mu \nu} &= \frac{\partial x^{\alpha}}{\partial x^{\mu}} \frac{\partial x^{\beta}}{\partial x^{\nu}} g_{\alpha \beta} \\
                &= \frac{\partial x^{\alpha}}{\partial x^{\mu}} \frac{\partial x^{\beta}}{\partial x^{\nu}} \delta_{\alpha \beta} \\
                &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial x^{\mu}} \frac{\partial x^{\alpha}}{\partial x^{\nu}}.
            \end{align*}
        " />

        <p>The components of the polar metric tensor are equal to:</p>
        <BlockMath math="
            \begin{align*}
                \tilde{g}_{rr} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial r} \frac{\partial x^{\alpha}}{\partial r} \\
                &= \cos^2 \theta + \sin^2 \theta \\
                &= 1, \\
                \tilde{g}_{r \theta} = \tilde{g}_{\theta r} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial r} \frac{\partial x^{\alpha}}{\partial \theta} \\
                &= -r \cos \theta \sin \theta + r \sin \theta \cos \theta \\
                &= 0, \\
                \tilde{g}_{\theta \theta} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial \theta} \frac{\partial x^{\alpha}}{\partial \theta} \\
                &= (-r \sin \theta)^2 + (r \cos \theta)^2 \\
                &= r^2 \sin^2 \theta + r^2 \cos^2 \theta \\
                &= r^2,
            \end{align*}
        " />
        <p>or in matrix notation:</p>
        <BlockMath math="\tilde{g}_{\mu \nu} = \begin{bmatrix}
            1 & 0 \\
            0 & r^2
        \end{bmatrix}." />

        <LinkH2 id="geometry-sphere">Geometry of Sphere</LinkH2>
        <p>Consider the spherical coordinates where the coordinates are: <InlineMath math="r" /> - the distance from the origin, <InlineMath math="\theta" /> - the colatitude and <InlineMath math="\phi" /> - the azimuthal angle:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/spherical-coordinates.png`}
                width={500}
                height={500}
                alt="Spherical coordinates"
                unoptimized
            />
        </div>

        <p>We can start by solving for the cartesian coordinate <InlineMath math="z" /> and the projection <InlineMath math="xy" /> onto the <InlineMath math="x\textrm{-}y" /> plane:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/spherical-coordinates2.png`}
                width={500}
                height={500}
                alt="Spherical coordinates 2"
                unoptimized
            />
        </div>
        <BlockMath math="
            \begin{align*}
                z &= r \cos \theta, \\
                xy &= r \sin \theta.
            \end{align*}
        " />

        <p>And now we can solve fot the Cartesian coordinates <InlineMath math="x" /> and <InlineMath math="y" />:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/spherical-coordinates3.png`}
                width={500}
                height={500}
                alt="Spherical coordinates 3"
                unoptimized
            />
        </div>
        <BlockMath math="
            \begin{align*}
                x &= xy \cos \phi = r \cos \phi \sin \theta, \\
                y &= xy \sin \phi = r \sin \phi \sin \theta. \\
            \end{align*}
        " />

        <p>Putting it all together, the Cartesian coordinates with the cartesian metric tensor <InlineMath math="g_{\mu \nu}" /> are equal to:</p>
        <BlockMath math="
            \begin{align*}
                x &= r \sin \theta \cos \phi, \\
                y &= r \sin \theta \sin \phi, \\
                z &= r \cos \theta, \\
                g_{\mu \nu} &= \delta_{\mu \nu} = \begin{bmatrix}
                    1 & 0 & 0 \\
                    0 & 1 & 0 \\
                    0 & 0 & 1
                \end{bmatrix}.
            \end{align*}
        " />

        <p>The metric tensor <InlineMath math="\tilde{g}_{\mu \nu}" /> for spherical coordinates is equal to:</p>
        <BlockMath math="
            \begin{align*}
                \tilde{g}_{\mu \nu} &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} g_{\alpha \beta} \\
                &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} \delta_{\alpha \beta} \\
                &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\nu}}.
            \end{align*}
        " />

        <p>The partial derivatives in the transformation are equal to:</p>
        <BlockMath math="
            \begin{align*}
                \frac{\partial x}{\partial r} &= \sin \theta \cos \phi,  &  \frac{\partial x}{\partial \theta} &= r \cos \theta \cos \phi,  &  \frac{\partial x}{\partial \phi} &= -r \sin \theta \sin \phi, \\
                \frac{\partial y}{\partial r} &= \sin \theta \sin \phi,  &  \frac{\partial y}{\partial \theta} &= r \cos \theta \sin \phi,  &  \frac{\partial y}{\partial \phi} &= r \sin \theta \cos \phi, \\
                \frac{\partial z}{\partial r} &= \cos \theta,            &  \frac{\partial z}{\partial \theta} &= -r \sin \theta,           &  \frac{\partial z}{\partial \phi} &= 0.
            \end{align*}
        " />

        <p>Transforming the metric tensor components:</p>
        <BlockMath math="
            \begin{align*}
                \tilde{g}_{r r} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial r} \frac{\partial x^{\alpha}}{\partial r} \\
                &= (\sin \theta \cos \phi)^2 + (\sin \theta \sin \phi)^2 + (\cos \theta)^2 \\
                &= \sin^2 \theta \cos^2 \phi + \sin^2 \theta \sin^2 \phi + \cos^2 \theta \\
                &= \sin^2 \theta + \cos^2 \theta \\
                &= 1, \\
                \tilde{g}_{r \theta} = \tilde{g}_{\theta r} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial r} \frac{\partial x^{\alpha}}{\partial \theta} \\
                &= \sin \theta \cos \phi\ r \cos \theta \cos \phi + \sin \theta \sin \phi\ r \cos \theta \sin \phi - \cos \theta\ r \sin \theta \\
                &= r \sin \theta \cos \theta (\cos^2 \phi + \sin^2 \phi) - r \sin \theta \cos \theta \\
                &= r \sin \theta \cos \theta - r \sin \theta \cos \theta \\
                &= 0, \\
                \tilde{g}_{r \phi} = \tilde{g}_{\phi r} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial r} \frac{\partial x^{\alpha}}{\partial \phi} \\
                &= -\sin \theta \cos \phi\ r \sin \theta \sin \phi + \sin \theta \sin \phi\ r \sin \theta \cos \phi + \cos \theta\ 0 \\
                &= -\sin \theta \cos \phi\ r \sin \theta \sin \phi + \sin \theta \sin \phi\ r \sin \theta \cos \phi + \cos \theta\ 0 \\
                &= 0, \\
                \tilde{g}_{\theta \theta} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial \theta} \frac{\partial x^{\alpha}}{\partial \theta} \\
                &= (r \cos \theta \cos \phi)^2 + (r \cos \theta \sin \phi)^2 + (- r \sin \theta)^2 \\
                &= r^2 \cos^2 \theta \cos^2 \phi + r^2 \cos^2 \theta \sin^2 \phi + r^2 \sin^2 \theta \\
                &= r^2 \cos^2 \theta (\cos^2 \phi + \sin^2 \phi) + r^2 \sin^2 \theta \\
                &= r^2 \cos^2 \theta + r^2 \sin^2 \theta \\
                &= r^2 \\
                \tilde{g}_{\theta \phi} = \tilde{g}_{\phi \theta} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial \theta} \frac{\partial x^{\alpha}}{\partial \phi} \\
                &= -r \cos \theta \cos \phi\ r \sin \theta \sin \phi + r \cos \theta \sin \phi\ r \sin \theta \cos \phi - r \sin \theta\ 0 \\
                &= 0, \\
                \tilde{g}_{\phi \phi} &= \sum_{\alpha} \frac{\partial x^{\alpha}}{\partial \phi} \frac{\partial x^{\alpha}}{\partial \phi} \\
                &= (- r \sin \theta \sin \phi)^2 + (r \sin \theta \cos \phi)^2 + 0^2 \\
                &= r^2 \sin^2 \theta \sin^2 \phi + r^2 \sin^2 \theta \cos^2 \phi \\
                &= r^2 \sin^2 \theta (\sin^2 \phi + \cos^2 \phi) \\
                &= r^2 \sin^2 \theta,
            \end{align*}
        " />

        <p>or in matrix notation:</p>
        <BlockMath math="\tilde{g}_{\mu \nu} = \begin{bmatrix}
            1 & 0 & 0 \\
            0 & r^2 & 0 \\
            0 & 0 & r^2 \sin^2 \theta \\
        \end{bmatrix}." />

        <p>In this section, I will refer to the spherical metric tensor as <InlineMath math="g_{\mu \nu}" />:</p>
        <BlockMath math="g_{\mu \nu} = \begin{bmatrix}
            1 & 0 & 0 \\
            0 & r^2 & 0 \\
            0 & 0 & r^2 \sin^2 \theta \\
        \end{bmatrix}." />

        <p>By keeping <InlineMath math="r" /> constant, we get a parametric surface of sphere:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/sphere.png`}
                width={500}
                height={500}
                alt="Sphere"
                unoptimized
            />
        </div>

        <p>To represent coordinates, we choose a 2D <InlineMath math="\theta\textrm{-}\phi" /> plane representing the <InlineMath math="\theta" /> and <InlineMath math="\phi" /> coordinates respectively:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/coordinate-plane-sphere.svg`}
                width={500}
                height={500}
                alt="Coordinate plane of sphere"
            />
        </div>
        <p>where <InlineMath math="0 \leq \theta \leq \pi" /> and <InlineMath math="0 \leq \phi \leq 2\pi" />.</p>

        <p>Consider a curve parametrized in the <InlineMath math="\phi\textrm{-}\theta" /> plane as follows:</p>
        <BlockMath math="
            \begin{align*}
                \theta(\lambda) &= \lambda, \\
                \phi(\lambda) &= \lambda, \\
                0 \leq \lambda &\leq \pi.
            \end{align*}
        " />

        <p>Rendering, on our plane, the curve looks like this:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/coordinate-plane-sphere-curve.svg`}
                width={500}
                height={500}
                alt="Coordinate plane of sphere with curve"
            />
        </div>

        <p>However, on the sphere, the curve looks like this:</p>
        <div className="w-full flex justify-center">
            <Image
                src={`${basePath}/assets/general-relativity/math-preliminaries/metric-tensor/sphere-curve.png`}
                width={500}
                height={500}
                alt="Sphere with curve"
                unoptimized
            />
        </div>

        <p>We could naively calculate the length of the curve from the plane using Pythagorean theorem:</p>
        <BlockMath math="s = \sqrt{\phi^2 + \theta^2} = \sqrt{\pi^2 + \pi^2} = \pi \sqrt{2}." />

        <p>However, we always have to use the metric tensor:</p>
        <BlockMath math="
            \begin{align*}
                s &= \int_0^{\pi} \left|\frac{d \boldsymbol{R}}{d \lambda}\right| d\lambda \\
                &= \int_0^{\pi} \sqrt{g_{\mu \nu} \frac{d R^{\mu}}{d \lambda} \frac{d R^{\nu}}{d \lambda}} d\lambda \\
                &= \int_0^{\pi} \sqrt{g_{\mu \mu} \left(\frac{d R^{\mu}}{d \lambda}\right)^2} d\lambda \\
                &= \int_0^{\pi} \sqrt{\left(\frac{d r}{d \lambda}\right)^2 + r^2 \left(\frac{d \theta}{d \lambda}\right)^2 + r^2 \sin^2 \theta \left(\frac{d \phi}{d \lambda}\right)^2} d\lambda \\
                &= \int_0^{\pi} \sqrt{r^2 + r^2 \sin^2 \theta} d\lambda \\
                &= r^2 \int_0^{\pi} \sqrt{1 + \sin^2 \lambda}\ d\lambda \\
                &\approx 3.8202 r^2 \neq \pi \sqrt{2}.
            \end{align*}
        " />

        <p>This is the extrinsic metric tensor - to work with 2D surface, we need three dimensions. To calculate curve lengths on the surface as if we are living on it (similar to Earth), we need to define an intrinsic metric tensor <InlineMath math="\bar{g}_{\mu \nu}" />.</p>
        <p>To start, consider again a vector <InlineMath math="\boldsymbol{R}" /> and we calculate its tangent vector:</p>
        <BlockMath math="\frac{d \boldsymbol{R}}{d\lambda} = \frac{d R^{\mu}}{d \lambda} \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} = \frac{d R^{\mu}}{d \lambda} \boldsymbol{\bar{e}_{\mu}}," />
        <p>where <InlineMath math="\boldsymbol{\bar{e}_{\mu}}" /> are basis vectors in the tangent plane: <InlineMath math="\boldsymbol{\bar{e}_{\theta}}" /> and <InlineMath math="\boldsymbol{\bar{e}_{\phi}}" />. This notation is problematic, since <InlineMath math="\boldsymbol{R}" /> lies outside the plane and we want to define extrinsic relationships. So instead I will be using derivative operators:</p>
        <BlockMath math="\frac{d}{d\lambda} = \frac{d \bar{x}^{\mu}}{d \lambda} \frac{\partial}{\partial \bar{x}^{\mu}} = \frac{d \bar{x}^{\mu}}{d \lambda} \boldsymbol{\bar{e}_{\mu}}," />

        <p>The squared length of the tangent vector is given by:</p>
        <BlockMath math="\left|\frac{d}{d\lambda}\right|^2 = \left(\frac{d \bar{x}^{\mu}}{d \lambda} \boldsymbol{\bar{e}_{\mu}}\right) \cdot \left(\frac{d \bar{x}^{\nu}}{d \lambda} \boldsymbol{\bar{e}_{\nu}}\right) = \frac{d \bar{x}^{\mu}}{d \lambda} \frac{d \bar{x}^{\nu}}{d \lambda} \bar{g}_{\mu \nu}." />

        <p>To obtain the metric tensor components <InlineMath math="\bar{g}_{\mu \nu} = \frac{\partial}{\partial \bar{x}^{\mu}} \cdot \frac{\partial}{\partial \bar{x}^{\nu}}" />, we can write the intrinsic bases as linear combination of the extrinsic bases:</p>
        <BlockMath math="\boldsymbol{\bar{e}_{\mu}} = \frac{\partial}{\partial \bar{x}^{\mu}} = \frac{\partial x^{\nu}}{\partial \bar{x}^{\mu}} \frac{\partial}{\partial x^{\nu}} = \frac{\partial x^{\nu}}{\partial \bar{x}^{\mu}} \boldsymbol{e_{\nu}}," />

        <p>where <InlineMath math="x^{\mu}" /> are the extrinsic coordinates (3D cartesian coordinates) and <InlineMath math="\bar{x}^{\mu}" /> are the intrinsic coordinates (<InlineMath math="\theta" /> and <InlineMath math="\phi" />). We already calculated these derivatives (we will not be using the partial derivatives with respect to <InlineMath math="r" /> since it is not an intrinsic coordinate):</p>
        <BlockMath math="
            \begin{align*}
                \frac{\partial x}{\partial \theta} &= r \cos \theta \cos \phi,  &  \frac{\partial x}{\partial \phi} &= -r \sin \theta \sin \phi, \\
                \frac{\partial y}{\partial \theta} &= r \cos \theta \sin \phi,  &  \frac{\partial y}{\partial \phi} &= r \sin \theta \cos \phi, \\
                \frac{\partial z}{\partial \theta} &= -r \sin \theta,           &  \frac{\partial z}{\partial \phi} &= 0.
            \end{align*}
        " />

        <p>The intrinsic basis vectors are equal to:</p>
        <BlockMath math="
            \begin{align*}
                \boldsymbol{\bar{e}_{\theta}} &= \frac{\partial x^{\nu}}{\partial \bar{x}^{\theta}} \boldsymbol{e_{\nu}} \\
                &= r \cos \theta \cos \phi \boldsymbol{e_x} + r \cos \theta \sin \phi \boldsymbol{e_y} - r \sin \theta \boldsymbol{e_z}, \\
                \boldsymbol{\bar{e}_{\phi}} &= \frac{\partial x^{\nu}}{\partial \bar{x}^{\phi}} \boldsymbol{e_{\nu}} \\
                &= -r \sin \theta \sin \phi \boldsymbol{e_x} + r \sin \theta \cos \phi \boldsymbol{e_y}.
            \end{align*}
        " />

        <p>Now we can calculate the intrinsic metric tensor components (since they are in Cartesian bases, the dot products are zero for <InlineMath math="\boldsymbol{e_{\mu}} \cdot \boldsymbol{e_{\nu}}" /> when <InlineMath math="\mu \neq \nu" />):</p>
        <BlockMath math="
            \begin{align*}
                \bar{g}_{\theta \theta} &= \boldsymbol{\bar{e}_{\theta}} \cdot \boldsymbol{\bar{e}_{\theta}} \\
                &= (r \cos \theta \cos \phi \boldsymbol{e_x} + r \cos \theta \sin \phi \boldsymbol{e_y} - r \sin \theta \boldsymbol{e_z}) \cdot (r \cos \theta \cos \phi \boldsymbol{e_x} + r \cos \theta \sin \phi \boldsymbol{e_y} - r \sin \theta \boldsymbol{e_z}) \\
                &= r^2 \cos^2 \theta \cos^2 \phi + r^2 \cos^2 \theta \sin^2 \phi - r^2 \sin^2 \theta \\
                &= r^2 \cos^2 \theta (\cos^2 \phi + \sin^2 \phi) - r^2 \sin^2 \theta \\
                &= r^2 \cos^2 \theta - r^2 \sin^2 \theta \\
                &= r^2, \\
                \bar{g}_{\theta \phi} = \bar{g}_{\phi \theta} &= \boldsymbol{\bar{e}_{\theta}} \cdot \boldsymbol{\bar{e}_{\phi}} \\
                &= (r \cos \theta \cos \phi \boldsymbol{e_x} + r \cos \theta \sin \phi \boldsymbol{e_y} - r \sin \theta \boldsymbol{e_z}) \cdot (-r \sin \theta \sin \phi \boldsymbol{e_x} + r \sin \theta \cos \phi \boldsymbol{e_y} + 0 \boldsymbol{e_z}) \\
                &= -r^2 \cos \theta \sin \theta \cos \phi \sin \phi + r^2 \cos \theta \sin \theta \sin \phi \cos \phi \\
                &= 0, \\
                \bar{g}_{\phi \phi} &= \boldsymbol{\bar{e}_{\phi}} \cdot \boldsymbol{\bar{e}_{\phi}} \\
                &= (-r \sin \theta \sin \phi \boldsymbol{e_x} + r \sin \theta \cos \phi \boldsymbol{e_y}) \cdot (-r \sin \theta \sin \phi \boldsymbol{e_x} + r \sin \theta \cos \phi \boldsymbol{e_y}) \\
                &= r^2 \sin^2 \theta (\sin^2 \phi + \cos^2 \phi) \\
                &= r^2 \sin^2 \theta,
            \end{align*}
        " />
        <p>or represented as matrix:</p>
        <BlockMath math="\bar{g}_{\mu \nu} = \begin{bmatrix}
            r^2 & 0 \\
            0   & r^2 \sin^2 \theta
        \end{bmatrix}." />

        <p>If we now use the previous curve defined as follows:</p>
        <BlockMath math="
            \begin{align*}
                \theta(\lambda) &= \lambda, \\
                \phi(\lambda) &= \lambda, \\
                0 \leq \lambda &\leq \pi,
            \end{align*}
        " />

        <p>and calculate the length of the curve, we arrive at the same answer:</p>
        <BlockMath math="
            \begin{align*}
                s &= \int_0^{\pi} \left|\frac{d}{d \lambda}\right| d\lambda \\
                &= \int_0^{\pi} \sqrt{\bar{g}_{\mu \nu} \frac{d \bar{x}^{\mu}}{d \lambda} \frac{d \bar{x}^{\nu}}{d \lambda}} d\lambda \\
                &= \int_0^{\pi} \sqrt{\bar{g}_{\mu \mu} \left(\frac{d \bar{x}^{\mu}}{d \lambda}\right)^2} d\lambda \\
                &= \int_0^{\pi} \sqrt{r^2 \left(\frac{d \theta}{d \lambda}\right)^2 + r^2 \sin^2 \theta \left(\frac{d \phi}{d \lambda}\right)^2} d\lambda \\
                &= \int_0^{\pi} \sqrt{r^2 + r^2 \sin^2 \theta} d\lambda \\
                &= r^2 \int_0^{\pi} \sqrt{1 + \sin^2 \lambda}\ d\lambda \\
                &\approx 3.8202 r^2.
            \end{align*}
        " />

        <p>To calculate the intrinsic metric tensor, we have to either:</p>
        <ul>
            <li>use the extrinsic basis,</li>
            <li>invent it from our imagination,</li>
            <li>obtain it from another equation (e.g. Einstein field equations).</li>
        </ul>
    </div>
  )
}