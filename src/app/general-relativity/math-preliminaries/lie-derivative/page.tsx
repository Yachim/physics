import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Lie Derivative"
}

export default async function Home() {
    const { publicRuntimeConfig: { basePath } } = getConfig()

    return (
        <div className="article">
            <Link href="/general-relativity/math-preliminaries">Back</Link>
            <h1>Lie Derivative</h1>
            <p>
                The Lie derivative evaluates the change in a given tensor as it moves along the flow of some other vector field.
                An example may be a flowing river where we consider two neighboring points connected by a vector. The Lie derivative tells us how this vector - the separation between the two points - changes as the water in the river flows.
            </p>

            <p>Consider a curve <InlineMath math="C" /> with coordinates <InlineMath math="x^{\mu} (\lambda)" /> parametrized by <InlineMath math="\lambda" />. The tangent vector</p>
            <BlockMath math="u^{\mu} = \frac{\partial x^{\mu}}{\partial \lambda}" />
            <p>represents the flow.</p>

            <p>Now, consider a point <InlineMath math="P" /> represented by the coordinates <InlineMath math="x^{\mu}" /> and a point <InlineMath math="Q" /> represented by the coordinates <InlineMath math="x^{\mu} + dx^{\mu}" /> that are infinitesimally separated.</p>

            <p>Another vector field with components <InlineMath math="v^{\mu}" /> is defined. The goal is to find how <InlineMath math="v^{\mu}" /> changes as it moves between the points <InlineMath math="P" /> and <InlineMath math="Q" />. The setup looks as follows:</p>
            <div className="w-full flex gap-2 justify-center">
                <Image
                    src={`${basePath}/assets/general-relativity/math-preliminaries/lie-derivative/setup.svg`}
                    width={650}
                    height={650}
                    alt="The setup"
                />
            </div>

            <p>Let</p>
            <BlockMath math="\tilde{x}^{\mu} = x^{\mu} + dx^{\mu} = x^{\mu} + u^{\mu} d \lambda" />
            <p>be the coordinates of point <InlineMath math="Q" />. The tensor transformation law requires:</p>
            <BlockMath math="
                \begin{align*}
                    \tilde{v}^{\mu} (\boldsymbol{x}) = \frac{\partial \tilde{x}^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x}) &= \left(\frac{\partial x^{\mu}}{\partial x^{\nu}} + \frac{\partial u^{\mu}}{\partial x^{\nu}} d \lambda\right) v^{\nu} (\boldsymbol{x}) \\
                    &= \delta^{\mu}_{\nu} v^{\nu} (\boldsymbol{x}) + \frac{\partial u^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x}) d \lambda \\
                    &= v^{\mu} (\boldsymbol{x}) + \frac{\partial u^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x}) d \lambda.
                \end{align*}
            " />

            <p>The value of <InlineMath math="v^{\mu}" /> at point <InlineMath math="Q" /> is:</p>
            <BlockMath math="
                \begin{align*}
                    v^{\mu} (\boldsymbol{\tilde{x}}) = v^{\mu} (\boldsymbol{x} + d\boldsymbol{x}) &= v^{\mu} (\boldsymbol{x}) + d v^{\mu} (\boldsymbol{x}) \\
                    &= v^{\mu} (\boldsymbol{x}) + \frac{\partial v^{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) dx^{\nu} \\
                    &= v^{\mu} (\boldsymbol{x}) + \frac{\partial v^{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} d\lambda.
                \end{align*}
            " />

            <p>The Lie derivative of vector <InlineMath math="\boldsymbol{v}" /> along the curve <InlineMath math="C" /> is defined as:</p>
            <BlockMath math="
                \begin{align*}
                    \mathcal{L}_{\boldsymbol{u}} v^{\mu} (\boldsymbol{x}) &= \lim_{d\lambda \to 0} \frac{v^{\mu} (\boldsymbol{\tilde{x}}) - \tilde{v}^{\mu} (\boldsymbol{x})}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \frac{v^{\mu} (\boldsymbol{x}) + \frac{\partial v^{\mu}}{dx^{\nu}} (\boldsymbol{x}) u^{\nu} d\lambda - v^{\mu} (\boldsymbol{x}) - \frac{\partial u^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x}) d \lambda}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \left(\frac{\partial v^{\mu}}{dx^{\nu}} (\boldsymbol{x}) u^{\nu} - \frac{\partial u^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x})\right) \\
                    &= \frac{\partial v^{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} - \frac{\partial u^{\mu}}{\partial x^{\nu}} v^{\nu} (\boldsymbol{x}).
                \end{align*}
            " />

            <p>If the Lie derivative is zero, it is said that the object was Lie transported.</p>
            
            <p>The Lie derivative of a scalar function is just the ordinary derivative:</p>
            <BlockMath math="\mathcal{L}_{\boldsymbol{u}} f = \frac{df}{d \lambda}." />

            <p>To find the Lie derivative of a covector, we first need to consider how it transforms. From the previous tranformation, we may find:</p>
            <BlockMath math="
                \begin{align*}
                    \tilde{x}^{\mu} &= x^{\mu} + dx^{\mu} = x^{\mu} + u^{\mu} d \lambda, \\
                    x^{\mu} &= \tilde{x}^{\mu} - u^{\mu} d \lambda.
                \end{align*}
            " />

            <p>The inverse Jacobian is as follows:</p>
            <BlockMath math="
                \begin{align*}
                    \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}} &= \frac{\partial}{\partial \tilde{x}^{\mu}} (\tilde{x}^{\nu} - u^{\nu} d\lambda) \\
                    &= \frac{\partial \tilde{x}^{\nu}}{\partial \tilde{x}^{\mu}} - \frac{\partial u^{\nu}}{\partial \tilde{x}^{\mu}} d\lambda \\
                    &= \delta^{\nu}_{\mu} - \frac{\partial u^{\nu}}{\partial x^{\sigma}} \frac{\partial x^{\sigma}}{\partial \tilde{x}^{\mu}} d\lambda \\
                    &= \delta^{\nu}_{\mu} - \frac{\partial u^{\nu}}{\partial x^{\sigma}} d\lambda \left(\delta^{\sigma}_{\mu} - \frac{\partial u^{\sigma}}{\partial \tilde{x}^{\mu}} d\lambda\right) \\
                    &= \delta^{\nu}_{\mu} - \frac{\partial u^{\nu}}{\partial x^{\mu}} d\lambda + O(d\lambda^2) \\
                    &= \delta^{\nu}_{\mu} - \frac{\partial u^{\nu}}{\partial x^{\mu}} d\lambda.
                \end{align*}
            " />
            <p>Note: the higher order terms of <InlineMath math="d\lambda" /> are negligible.</p>

            <p>The covector is transformed as follows:</p>
            <BlockMath math="
                \begin{align*}
                    \tilde{a}_{\mu} (\boldsymbol{x}) = \frac{\partial x^{\nu}}{\partial \tilde{x}^{\mu}} a_{\nu} (\boldsymbol{x}) &= \left(\delta^{\nu}_{\mu} - \frac{\partial u^{\nu}}{\partial x^{\mu}} d\lambda\right) a_{\nu} (\boldsymbol{x}) \\
                    &= a_{\mu} (\boldsymbol{x}) - \frac{\partial u^{\nu}}{\partial x^{\mu}} a_{\nu} (\boldsymbol{x}) d\lambda.
                \end{align*}
            " />

            <p>And similarly the value of <InlineMath math="a" /> at point <InlineMath math="\tilde{x}" />:</p>
            <BlockMath math="
                \begin{align*}
                    a_{\mu} (\boldsymbol{\tilde{x}}) = a_{\mu} (\boldsymbol{x} + d\boldsymbol{x}) &= a_{\mu} (\boldsymbol{x}) + da_{\mu} (\boldsymbol{x}) \\
                    &= a_{\mu} (\boldsymbol{x}) + \frac{\partial a_{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) dx^{\nu} \\
                    &= a_{\mu} (\boldsymbol{x}) + \frac{\partial a_{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} d\lambda.
                \end{align*}
            " />

            <p>Finally, the Lie derivative may be found:</p>
            <BlockMath math="
                \begin{align*}
                    \mathcal{L}_{\boldsymbol{u}} a_{\mu} &= \lim_{d\lambda \to 0} \frac{a_{\mu} (\boldsymbol{\tilde{x}}) - \tilde{a}_{\mu} (\boldsymbol{x})}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \frac{a_{\mu} (\boldsymbol{x}) + \frac{\partial a_{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} d\lambda - a_{\mu} (\boldsymbol{x}) + \frac{\partial u^{\nu}}{\partial x^{\mu}} a_{\nu} (\boldsymbol{x}) d\lambda}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \left(\frac{\partial a_{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} + \frac{\partial u^{\nu}}{\partial x^{\mu}} a_{\nu} (\boldsymbol{x})\right) \\
                    &= \frac{\partial a_{\mu}}{\partial x^{\nu}} (\boldsymbol{x}) u^{\nu} + \frac{\partial u^{\nu}}{\partial x^{\mu}} a_{\nu} (\boldsymbol{x}).
                \end{align*}
            " />

            <p>Lastly, consider the Lie derivative of the metric tensor. When doing the above transformation, the metric tensor is transformed as follows:</p>
            <BlockMath math="
                \begin{align*}
                    \tilde{g}_{\mu \nu} (\boldsymbol{x}) &= \frac{\partial x^{\alpha}}{\partial \tilde{x}^{\mu}} \frac{\partial x^{\beta}}{\partial \tilde{x}^{\nu}} g_{\alpha \beta} (\boldsymbol{a}) \\
                    &= \left(\delta^{\alpha}_{\mu} - \frac{\partial u^{\alpha}}{\partial x^{\mu}} d\lambda\right) \left(\delta^{\beta}_{\nu} - \frac{\partial u^{\beta}}{\partial x^{\nu}} d\lambda\right) g_{\alpha \beta} (\boldsymbol{a}) \\
                    &= \left(\delta^{\alpha}_{\mu} \delta^{\beta}_{\nu} - \delta^{\alpha}_{\mu} \frac{\partial u^{\beta}}{\partial x^{\nu}} d\lambda - \delta^{\beta}_{\nu} \frac{\partial u^{\alpha}}{\partial x^{\mu}} d\lambda + \frac{\partial u^{\alpha}}{\partial x^{\mu}} \frac{\partial u^{\beta}}{\partial x^{\nu}} d\lambda^2\right) g_{\alpha \beta} (\boldsymbol{x}) \\
                    &= \left(\delta^{\alpha}_{\mu} \delta^{\beta}_{\nu} - \delta^{\alpha}_{\mu} \frac{\partial u^{\beta}}{\partial x^{\nu}} d\lambda - \delta^{\beta}_{\nu} \frac{\partial u^{\alpha}}{\partial x^{\mu}} d\lambda\right) g_{\alpha \beta} (\boldsymbol{x}) \\
                    &= \delta^{\alpha}_{\mu} \delta^{\beta}_{\nu} g_{\alpha \beta}(\boldsymbol{x}) - \delta^{\alpha}_{\mu} \frac{\partial u^{\beta}}{\partial x^{\nu}} d\lambda g_{\alpha \beta}(\boldsymbol{x}) - \delta^{\beta}_{\nu} \frac{\partial u^{\alpha}}{\partial x^{\mu}} d\lambda g_{\alpha \beta} (\boldsymbol{x}) \\
                    &= g_{\mu \nu}(\boldsymbol{x}) - \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta}(\boldsymbol{x}) d\lambda - \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} (\boldsymbol{x}) d\lambda.
                \end{align*}
            " />

            <p>And the value of the metric tensor at point <InlineMath math="\boldsymbol{\tilde{x}}" />:</p>
            <BlockMath math="
                \begin{align*}
                    g_{\mu \nu} (\boldsymbol{\tilde{x}}) = g_{\mu \nu} (\boldsymbol{x} + d\boldsymbol{x}) &= g_{\mu \nu}(\boldsymbol{x}) + d g_{\mu \nu} (\boldsymbol{x}) \\
                    &= g_{\mu \nu}(\boldsymbol{x}) + \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} (\boldsymbol{x}) dx^{\sigma} \\
                    &= g_{\mu \nu}(\boldsymbol{x}) + \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} (\boldsymbol{x}) u^{\sigma} d\lambda.
                \end{align*}
            " />

            <p>Finally, the Lie derivative may be found:</p>
            <BlockMath math="
                \begin{align*}
                    \mathcal{L}_{\boldsymbol{u}} g_{\mu \nu} &= \lim_{d\lambda \to 0} \frac{g_{\mu \nu} (\boldsymbol{\tilde{x}}) - \tilde{g}_{\mu \nu} (\boldsymbol{x})}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \frac{g_{\mu \nu}(\boldsymbol{x}) + \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} (\boldsymbol{x}) u^{\sigma} d\lambda - g_{\mu \nu}(\boldsymbol{x}) + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta}(\boldsymbol{x}) d\lambda + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} (\boldsymbol{x}) d\lambda}{d\lambda} \\
                    &= \lim_{d\lambda \to 0} \left(\frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} (\boldsymbol{x}) u^{\sigma} + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta}(\boldsymbol{x}) + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} (\boldsymbol{x})\right) \\
                    &= \frac{\partial g_{\mu \nu}}{\partial x^{\sigma}} (\boldsymbol{x}) u^{\sigma} + \frac{\partial u^{\beta}}{\partial x^{\nu}} g_{\mu \beta}(\boldsymbol{x}) + \frac{\partial u^{\alpha}}{\partial x^{\mu}} g_{\alpha \nu} (\boldsymbol{x}).
                \end{align*}
            " />

            <p>Infact, there is a pattern, for an <InlineMath math="(m, n)" />-tensor, in addition to the first partial derivative, there will be <InlineMath math="m" /> negative terms and <InlineMath math="n" /> positive terms. This pattern is opposite to the covariant derivative.</p>
        </div>
    )
}