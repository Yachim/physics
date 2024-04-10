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
            0 & \mu &\neq \nu.
        \end{cases}" />

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

        <LinkH2 id="geometry-sphere">Geometry of Sphere</LinkH2>
    </div>  
  )
}