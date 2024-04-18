import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Riemann Tensor"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Riemann Tensor</h1>
      <p>To naively define flat space, we could say that space is flat when all <InlineMath math="\Gamma^{\sigma}{}_{\mu \nu} = 0" />. However, when dealing with polar coordinates in flat space, there are nonzero connection coefficients.</p>
      <p>A second attempt would be to define space as flat, when we can make <InlineMath math="\Gamma^{\sigma}{}_{\mu \nu} = 0" /> by a change of coordinates. This attempt however fails when we consider the surface of a sphere with radius equal to one. If we set <InlineMath math="\theta = \frac{\pi}{2}" />, the metric is the kronecker delta and the Christoffel components are zero:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \begin{bmatrix}
            r^2 & 0 \\
            0   & r^2 \sin^2 \theta
          \end{bmatrix} = \begin{bmatrix}
            1 & 0 \\
            0   & 1
          \end{bmatrix} = \delta_{\mu \nu}, \\
          \Gamma^{\theta}{}_{\phi \phi} &= -\sin \theta \cos \theta = 0, \\
          \Gamma^{\phi}{}_{\theta \phi} = \Gamma^{\phi}{}_{\phi \theta} &= \cot \theta = 0.
        \end{align*}
      " />
      <p>And we can rotate the coordinate system such that any point lies on the equator on the sphere.</p>
      <p>It turns out, that on any manifold, we can always find a special coordinate system called the Riemann normal coordinates at point <InlineMath math="p" />, where the following is true at that point:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \delta_{\mu \nu}, \\
          \Gamma^{\sigma}{}_{\mu \nu} &= 0.
        \end{align*}
      " />

      <p>So to detect curvature, we need a new tool called the Riemann tensor.</p>

      <LinkH2 id="holonomy">Holonomy</LinkH2>
      <p>Remember that a vector may rotate when performing parallel transport:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/covariant-derivative/parallel-transport-rotation.png`}
          width={400}
          height={400}
          alt="Parallel transport rotation"
          unoptimized
        />
      </div>
      <p>this is called holonomy and I will use it to define the Riemann tensor.</p>

      <p>Instead of doing parallel transform, we could do a related computation - the commutator of the covariant derivative. So we are measuring the change from parallel transport and comparing it with the change from parallel transport if we take the opposite route:</p>
      <BlockMath math="[\nabla_{\boldsymbol{u}}, \nabla_{\boldsymbol{v}}] \boldsymbol{w} = \nabla_{\boldsymbol{u}} \nabla_{\boldsymbol{v}} \boldsymbol{w} - \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{u}} \boldsymbol{w}, "/>
      <p>The covariant derivatives are computed the same way, the second has swapped <InlineMath math="\boldsymbol{u}"/> and <InlineMath math="\boldsymbol{v}"/>:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{u}} \nabla_{\boldsymbol{v}} \boldsymbol{w} &= u^{\mu} \left(\frac{\partial}{\partial x^{\mu}} (\nabla_{\boldsymbol{v}} \boldsymbol{w})^{\sigma} + (\nabla_{\boldsymbol{v}} \boldsymbol{w})^{\nu} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} \left(\frac{\partial}{\partial x^{\mu}} \left(v^{\lambda} \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right)\right) + v^{\lambda} \left(\frac{\partial w^{\nu}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\nu}{}_{\lambda \rho}\right) \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} \left(\frac{\partial v^{\lambda}}{\partial x^{\mu}} \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) + v^{\lambda} \frac{\partial}{\partial x^{\mu}} \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) + v^{\lambda} \left(\frac{\partial w^{\nu}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\nu}{}_{\lambda \rho}\right) \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} \left(\frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + \frac{\partial v^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + v^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + v^{\lambda} \frac{\partial}{\partial x^{\mu}} \left(w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) + v^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} \left(\frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + \frac{\partial v^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + v^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + v^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + v^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + u^{\mu} v^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + u^{\mu} v^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{u}} \boldsymbol{w} &= \left(v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + v^{\mu} u^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + v^{\mu} u^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + v^{\mu} u^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + v^{\mu} u^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + v^{\mu} u^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\right) \boldsymbol{e_{\sigma}} \\
          [\nabla_{\boldsymbol{u}}, \nabla_{\boldsymbol{v}}] \boldsymbol{w} &= \Big(u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + u^{\mu} v^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + u^{\mu} v^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} \\
          &- v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} - v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} - v^{\mu} u^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} - v^{\mu} u^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} - v^{\mu} u^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - v^{\mu} u^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} - v^{\mu} u^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\Big) \boldsymbol{e_{\sigma}} \\
          &= \Big(u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} \frac{\partial^2 w^{\sigma}}{\partial x^{\mu} \partial x^{\lambda}} + u^{\mu} v^{\lambda} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + u^{\mu} v^{\lambda} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} + u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} \\
          &- v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} - v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho} - v^{\lambda} u^{\mu} \frac{\partial^2 w^{\sigma}}{\partial x^{\lambda} \partial x^{\mu}} - v^{\lambda} u^{\mu} \frac{\partial w^{\nu}}{\partial x^{\lambda}} \Gamma^{\sigma}{}_{\mu \nu} - v^{\mu} u^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - v^{\lambda} u^{\mu} \frac{\partial w^{\rho}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} - v^{\mu} u^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\Big) \boldsymbol{e_{\sigma}} \\
          &= \Big(u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + u^{\mu} w^{\rho} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} w^{\rho} v^{\lambda} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} \\
          &- v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} - v^{\mu} w^{\rho} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} - v^{\mu} w^{\rho} u^{\lambda} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - u^{\lambda} v^{\mu} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu}\Big) \boldsymbol{e_{\sigma}} \\
          &= \Big(u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} + u^{\mu} w^{\rho} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} + u^{\mu} v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} + u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} \\
          &- v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \frac{\partial w^{\sigma}}{\partial x^{\lambda}} - v^{\mu} w^{\rho} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \Gamma^{\sigma}{}_{\lambda \rho} - u^{\mu} v^{\lambda} w^{\rho} \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} - u^{\mu} v^{\lambda} w^{\rho} \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\Big) \boldsymbol{e_{\sigma}} \\
          &= u^{\mu} \frac{\partial v^{\lambda}}{\partial x^{\mu}} \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) \boldsymbol{e_{\sigma}} - v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}} \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) \boldsymbol{e_{\sigma}} + u^{\mu} v^{\lambda} w^{\rho} \left(\frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(\frac{\partial v^{\lambda}}{\partial x^{\mu}} u^{\mu} - v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}}\right) \left(\frac{\partial w^{\sigma}}{\partial x^{\lambda}} + w^{\rho} \Gamma^{\sigma}{}_{\lambda \rho}\right) \boldsymbol{e_{\sigma}} + u^{\mu} v^{\lambda} w^{\rho} \left(\frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= \left(\frac{\partial v^{\lambda}}{\partial x^{\mu}} u^{\mu} - v^{\mu} \frac{\partial u^{\lambda}}{\partial x^{\mu}}\right) \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{w} + u^{\mu} v^{\lambda} w^{\rho} \left(\frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= (u^{\mu} \partial_{\mu} v^{\lambda} - v^{\mu} \partial_{\mu} u^{\lambda}) \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{w} + u^{\mu} v^{\lambda} w^{\rho} \left(\frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\right) \boldsymbol{e_{\sigma}} \\
          &= \nabla_{u^{\mu} \partial_{\mu} v^{\lambda} \partial_{\lambda} - v^{\mu} \partial_{\mu} u^{\lambda} \partial_{\lambda}} \boldsymbol{w} + u^{\mu} v^{\lambda} w^{\rho} \left(\frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}\right) \boldsymbol{e_{\sigma}}.
        \end{align*}
      "/>

      <p>Recall the lie bracket of two vectors:</p>
      <BlockMath math="[\boldsymbol{u}, \boldsymbol{v}] = \boldsymbol{u} (\boldsymbol{v}) - \boldsymbol{v} (\boldsymbol{u}) = u^{\mu} \partial_{\mu} v^{\lambda} \partial_{\lambda} - v^{\mu} \partial_{\mu} u^{\lambda} \partial_{\lambda},"/>
      <p>and the last term only depends on the connections. These are the components of the Riemann tensor:</p>
      <BlockMath math="
        \begin{align*}
          R^{\sigma}{}_{\rho \mu \lambda} &= \frac{\partial \Gamma^{\sigma}{}_{\lambda \rho}}{\partial x^{\mu}} - \frac{\partial \Gamma^{\sigma}{}_{\mu \rho}}{\partial x^{\lambda}} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu} \\
          &= \Gamma^{\sigma}{}_{\lambda \rho, \mu} - \Gamma^{\sigma}{}_{\mu \rho, \lambda} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu},
        \end{align*}
      "/>
      <p>notice that the first index (<InlineMath math="\rho"/>) corresponds to the vector the Riemann tensor acts on (<InlineMath math="\boldsymbol{w}"/>).</p>
      <p>So the Lie bracket of covariant derivatives is as follows:</p>
      <BlockMath math="[\nabla_{\boldsymbol{u}}, \nabla_{\boldsymbol{v}}] \boldsymbol{w} = \nabla_{[\boldsymbol{u}, \boldsymbol{v}]} \boldsymbol{w} + u^{\mu} v^{\lambda} w^{\rho} R^{\sigma}{}_{\mu \lambda \rho} \boldsymbol{e_{\sigma}},"/>
      <p>and the Riemann tensor acting of vectors <InlineMath math="\boldsymbol{u}"/> and <InlineMath math="\boldsymbol{v}"/>, acting on the vector <InlineMath math="\boldsymbol{w}"/> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{u}, \boldsymbol{v}) \boldsymbol{w} &= [\nabla_{\boldsymbol{u}}, \nabla_{\boldsymbol{v}}] \boldsymbol{w} - \nabla_{[\boldsymbol{u}, \boldsymbol{v}]} \boldsymbol{w} \\
          &= \nabla_{\boldsymbol{u}} \nabla_{\boldsymbol{v}} \boldsymbol{w} - \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{u}} \boldsymbol{w} - \nabla_{[\boldsymbol{u}, \boldsymbol{v}]} \boldsymbol{w}.
        \end{align*}
      "/>

      <p>And if we apply the take basis vectors as the inputs, we get the components:</p>
      <BlockMath math="R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}) \boldsymbol{e_{\rho}} = R^{\sigma}{}_{\rho \mu \lambda} \boldsymbol{e_{\sigma}}."/>

      <p>The Riemann tensor is linear in all inputs:</p>
      <BlockMath math="R(\boldsymbol{u}, \boldsymbol{v}) \boldsymbol{w} = u^{\mu} v^{\lambda} w^{\rho} R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}) \boldsymbol{e_{\rho}} = u^{\mu} v^{\lambda} w^{\rho} R^{\sigma}{}_{\rho \mu \lambda} \boldsymbol{e_{\sigma}}."/>

      <LinkH2 id="symmetries-identities">Symmetries and Identities</LinkH2>
      <p>Consider the following operator where the Riemann tensor is on the basis vector:</p>
      <BlockMath math="R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}) = \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} - \nabla_{[\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}]},"/>
      <p>where the Lie bracket of basis vectors is zero:</p>
      <BlockMath math="R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}) = \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}}."/>
      
      <p>Then the following is true:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}}) &= \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \\
          &= -(\nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} - \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}}) \\
          &= -R(\boldsymbol{e_{\lambda}}, \boldsymbol{e_{\mu}})
        \end{align*}
      "/>

      <p>or in component form:</p>
      <BlockMath math="R^{\sigma}{}_{\rho \mu \lambda} = -R^{\sigma}{}_{\rho \lambda \mu}," />
      <p>this is the first of the symmetries - the antisymmetry in the third and fourth component.</p>

      <p>Recall, torsion-free means:</p>
      <BlockMath math="\nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{e_{\nu}} = \Gamma^{\sigma}{}_{\mu \nu} \boldsymbol{e_{\sigma}} = \Gamma^{\sigma}{}_{\nu \mu} \boldsymbol{e_{\sigma}} = \nabla_{\boldsymbol{e_{\nu}}} \boldsymbol{e_{\mu}}."/>

      <p>Consider the following in a torsion-free connection:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) \boldsymbol{e_{\gamma}} + R(\boldsymbol{e_{\gamma}}, \boldsymbol{e_{\alpha}}) \boldsymbol{e_{\beta}} + R(\boldsymbol{e_{\beta}}, \boldsymbol{e_{\gamma}}) \boldsymbol{e_{\alpha}} &= \nabla_{\boldsymbol{e_{\alpha}}} \nabla_{\boldsymbol{e_{\beta}}} \boldsymbol{e_{\gamma}} - \nabla_{\boldsymbol{e_{\beta}}} \nabla_{\boldsymbol{e_{\alpha}}} \boldsymbol{e_{\gamma}} \\
          &+ \nabla_{\boldsymbol{e_{\gamma}}} \nabla_{\boldsymbol{e_{\alpha}}} \boldsymbol{e_{\beta}} - \nabla_{\boldsymbol{e_{\alpha}}} \nabla_{\boldsymbol{e_{\gamma}}} \boldsymbol{e_{\beta}} \\
          &+ \nabla_{\boldsymbol{e_{\beta}}} \nabla_{\boldsymbol{e_{\gamma}}} \boldsymbol{e_{\alpha}} - \nabla_{\boldsymbol{e_{\gamma}}} \nabla_{\boldsymbol{e_{\beta}}} \boldsymbol{e_{\alpha}} \\
          &= \nabla_{\boldsymbol{e_{\alpha}}} \nabla_{\boldsymbol{e_{\beta}}} \boldsymbol{e_{\gamma}} - \nabla_{\boldsymbol{e_{\beta}}} \nabla_{\boldsymbol{e_{\gamma}}} \boldsymbol{e_{\alpha}} \\
          &+ \nabla_{\boldsymbol{e_{\gamma}}} \nabla_{\boldsymbol{e_{\alpha}}} \boldsymbol{e_{\beta}} - \nabla_{\boldsymbol{e_{\alpha}}} \nabla_{\boldsymbol{e_{\beta}}} \boldsymbol{e_{\gamma}} \\
          &+ \nabla_{\boldsymbol{e_{\beta}}} \nabla_{\boldsymbol{e_{\gamma}}} \boldsymbol{e_{\alpha}} - \nabla_{\boldsymbol{e_{\gamma}}} \nabla_{\boldsymbol{e_{\alpha}}} \boldsymbol{e_{\beta}} \\
          &= \boldsymbol{0}, \\
          R^{\sigma}{}_{\gamma \alpha \beta} + R^{\sigma}{}_{\beta \gamma \alpha} + R^{\sigma}{}_{\alpha \beta \gamma} &= 0,
        \end{align*}
      "/>
      <p>this is called the first Bianchi identity.</p>

      <p>Next, recall the metric compatibility:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} (\boldsymbol{u} \cdot \boldsymbol{w}) = \nabla_{\boldsymbol{v}} \boldsymbol{u} \cdot \boldsymbol{w} + \boldsymbol{u} \cdot \nabla_{\boldsymbol{v}} \boldsymbol{w}."/>

      <p>If we apply metric compatibility on the Riemann tensor acting on a dot product, we get:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})(\boldsymbol{u} \cdot \boldsymbol{v}) &= \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}}(\boldsymbol{u} \cdot \boldsymbol{v}) - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}}(\boldsymbol{u} \cdot \boldsymbol{v}) \\
          &= \nabla_{\boldsymbol{e_{\mu}}} (\nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v}) - \nabla_{\boldsymbol{e_{\lambda}}} (\nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v}) \\
          &= \nabla_{\boldsymbol{e_{\mu}}} (\nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \boldsymbol{v}) + \nabla_{\boldsymbol{e_{\mu}}} (\boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v}) - \nabla_{\boldsymbol{e_{\lambda}}} (\nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \boldsymbol{v}) - \nabla_{\boldsymbol{e_{\lambda}}} (\boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v}) \\
          &= \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \boldsymbol{v} + \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v} + \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v} + \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v} \\
          &- \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \boldsymbol{v} - \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v} - \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v} - \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v} \\
          &= \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} \cdot \boldsymbol{v} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v} - \boldsymbol{u} \cdot \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v} \\
          &= (\nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{u} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{u}) \cdot \boldsymbol{v} + \boldsymbol{u} \cdot (\nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}} \boldsymbol{v} - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}} \boldsymbol{v}) \\
          &= R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})\boldsymbol{u} \cdot \boldsymbol{v} + \boldsymbol{u} \cdot R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})\boldsymbol{v}.
        \end{align*}
      "/>

      <p>The dot product is scalar, and the covariant derivative acting on a scalar is just the ordinary derivative:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})(\boldsymbol{u} \cdot \boldsymbol{v}) &= \nabla_{\boldsymbol{e_{\mu}}} \nabla_{\boldsymbol{e_{\lambda}}}(\boldsymbol{u} \cdot \boldsymbol{v}) - \nabla_{\boldsymbol{e_{\lambda}}} \nabla_{\boldsymbol{e_{\mu}}}(\boldsymbol{u} \cdot \boldsymbol{v}) \\
          &= \frac{\partial}{\partial x^{\mu}} \frac{\partial}{\partial x^{\lambda}} (\boldsymbol{u} \cdot \boldsymbol{v}) - \frac{\partial}{\partial x^{\lambda}} \frac{\partial}{\partial x^{\mu}} (\boldsymbol{u} \cdot \boldsymbol{v}) \\
          &= 0.
        \end{align*}
      "/>

      <p>If we instead act on the dot product of basis vectors:</p>
      <BlockMath math="
        \begin{align*}
          R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})(\boldsymbol{e_{\alpha}} \cdot \boldsymbol{e_{\beta}}) = 0 &= R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})\boldsymbol{e_{\alpha}} \cdot \boldsymbol{e_{\beta}} + \boldsymbol{e_{\alpha}} \cdot R(\boldsymbol{e_{\mu}}, \boldsymbol{e_{\lambda}})\boldsymbol{e_{\beta}} \\
          &= R^{\sigma}{}_{\alpha \mu \lambda} \boldsymbol{e_{\sigma}} \cdot \boldsymbol{e_{\beta}} + \boldsymbol{e_{\alpha}} \cdot R^{\sigma}{}_{\beta \mu \lambda} \boldsymbol{e_{\sigma}} \\
          &= R^{\sigma}{}_{\alpha \mu \lambda} g_{\sigma \beta} + R^{\sigma}{}_{\beta \mu \lambda} g_{\alpha \sigma} \\
          &= R_{\beta \alpha \mu \lambda} + R_{\alpha \beta \mu \lambda}, \\
          R_{\beta \alpha \mu \lambda} &= -R_{\alpha \beta \mu \lambda}.
        \end{align*}
      "/>

      <p>We can also lower indices on the previous two symmetries. So far we have:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \rho \mu \lambda} &= -R_{\sigma \rho \lambda \mu}, \\
          R_{\sigma \gamma \alpha \beta} + R_{\sigma \beta \gamma \alpha} + R_{\sigma \alpha \beta \gamma} &= 0, \\
          R_{\beta \alpha \mu \lambda} &= -R_{\alpha \beta \mu \lambda}.
        \end{align*}
      "/>

      <p>We can combine the symmetries, to obtain a fourth one. Starting with the first Bianchi identity:</p>
      <BlockMath math=""/>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \gamma \alpha \beta} &= - R_{\sigma \beta \gamma \alpha} - R_{\sigma \alpha \beta \gamma} \\
          &= R_{\beta \sigma \gamma \alpha} + R_{\alpha \sigma \beta \gamma},
        \end{align*}
      "/>
      <p>where we used the antisymmetry in the first components. We can continue by applying the first Bianchi identity to the two terms:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \gamma \alpha \beta} &= - R_{\beta \alpha \sigma \gamma} - R_{\beta \gamma \alpha \sigma} - R_{\alpha \gamma \sigma \beta} - R_{\alpha \beta \gamma \sigma} \\
          &= R_{\alpha \beta \sigma \gamma} + R_{\gamma \beta \alpha \sigma} + R_{\gamma \alpha \sigma \beta} + R_{\alpha \beta \sigma \gamma} \\
          &= 2 R_{\alpha \beta \sigma \gamma} - (-R_{\gamma \beta \alpha \sigma} - R_{\gamma \alpha \sigma \beta}) \\
          &= 2 R_{\alpha \beta \sigma \gamma} - R_{\gamma \sigma \beta \alpha} \\
          &= 2 R_{\alpha \beta \sigma \gamma} - R_{\sigma \gamma \alpha \beta}, \\
          2 R_{\sigma \gamma \alpha \beta} &= 2 R_{\alpha \beta \sigma \gamma}, \\
          R_{\sigma \gamma \alpha \beta} &= R_{\alpha \beta \sigma \gamma}. \\
        \end{align*}
      "/>
      <p>and here, in addition to the first Bianchi identity, we used the antisymmetries in the first two components and in the last two components.</p>

      <p>The four symmetries are as follows:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \rho \mu \lambda} &= -R_{\sigma \rho \lambda \mu}, \\
          R_{\sigma \gamma \alpha \beta} + R_{\sigma \beta \gamma \alpha} + R_{\sigma \alpha \beta \gamma} &= 0, \tag{Torsion-free} \\
          R_{\beta \alpha \mu \lambda} &= -R_{\alpha \beta \mu \lambda}, \tag{Metric compatibility} \\
          R_{\sigma \gamma \alpha \beta} &= R_{\alpha \beta \sigma \gamma}, \tag{Torsion-free \& metric compatibility} \\
        \end{align*}
      "/>
      <p>and these may be in the same order rewritten as:</p>
      <BlockMath math="
        \begin{align*}
          R_{\sigma \rho (\mu \lambda)} &= 0, \\
          R_{\sigma [\gamma \alpha \beta]} &= 0, \tag{Torsion-free} \\
          R_{(\beta \alpha) \mu \lambda} &= 0, \tag{Metric compatibility} \\
          R_{\sigma \gamma \alpha \beta} &= R_{\alpha \beta \sigma \gamma}. \tag{Torsion-free \& metric compatibility} \\
        \end{align*}
      "/>

      <p>Now, if we take the same index and apply asymmetry, we get:</p>
      <BlockMath math="
        \begin{align*}
          R_{\alpha \beta \gamma \delta} &= -R_{\alpha \beta \delta \gamma}, \\
          R_{\alpha \beta \gamma \delta} &= -R_{\beta \alpha \gamma \delta}, \\
          R_{\alpha \beta \gamma \gamma} &= -R_{\alpha \beta \gamma \gamma} \implies R_{\alpha \beta \gamma \gamma} = 0, \\
          R_{\alpha \alpha \beta \gamma} &= -R_{\alpha \alpha \beta \gamma} \implies R_{\alpha \alpha \beta \gamma} = 0,
        \end{align*}
      " />
      <p>so we have</p>
      <BlockMath math="m = \binom{n}{2} = \frac{n (n - 1)}{2}" />
      <p>nonzero <InlineMath math="\alpha \beta" /> components and the same number of nonzero <InlineMath math="\gamma \delta" /> components, since the binomial coefficient does not include repetition. We can now imagine an <InlineMath math="m \times m" /> matrix <InlineMath math="M_{ij}" />, where <InlineMath math="i" /> is a combination of <InlineMath math="\alpha \beta" /> and <InlineMath math="j" /> is a combination of <InlineMath math="\gamma \delta" />. And by the</p>
      <BlockMath math="R_{\alpha \beta \gamma \delta} = R_{\gamma \delta \alpha \beta}" />
      <p>symmetry, <InlineMath math="M_{ij} = M_{ji}" />. The number of independent components in this matrix is equal to:</p>
      <BlockMath math="\sum_{i = 1}^{m} i = \frac{m (m + 1)}{2} = \frac{n^4 - 2n^3 + 3n^2 - 2n}{8}." />

      <p>Finally, we need to consider the first Bianchi identity:</p>
      <BlockMath math="R_{\alpha \beta \gamma \delta} + R_{\alpha \delta \beta \gamma} + R_{\alpha \gamma \delta \beta} = 0."/>

      <p>And the independent number of components due to the first Bianchi identity is:</p>
      <BlockMath math="\binom{n}{4} = \frac{n^4 - 6n^3 + 11n^2 - 6n}{24}." />

      <p>If we subtract this from the previous result obtained from the symmetries, we have</p>
      <BlockMath math="\frac{n^4 - 2n^3 + 3n^2 - 2n}{8} - \frac{n^4 - 6n^3 + 11n^2 - 6n}{24} = \frac{n^2(n^2 - 1)}{12}" />
      <p>independent components. For two dimensions, this reduces to one component. For four dimensions, this reduces to 20 independent components.</p>

      <LinkH2 id="sphere-curvature">Curvature of Sphere (Incorrect)</LinkH2>
      <p>Recall the metric, its inverse and the nonzero Christoffel symbols on the surface of a sphere:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \begin{bmatrix}
            r^2 & 0 \\
            0   & r^2 \sin^2 \theta
          \end{bmatrix}, \\
          g^{\mu \nu} &= \begin{bmatrix}
            \frac{1}{r^2} & 0 \\
            0             & \frac{1}{r^2 \sin^2 \theta}
          \end{bmatrix}, \\
          \Gamma^{\theta}{}_{\phi \phi} &= - \frac{1}{2} \sin (2 \theta), \\
          \Gamma^{\phi}{}_{\theta \phi} = \Gamma^{\phi}{}_{\phi \theta} &= \cot \theta.
        \end{align*}
      " />

      <p>By the</p>
      <BlockMath math="
        \begin{align*}
          R_{\alpha \beta \gamma \delta} &= -R_{\alpha \beta \delta \gamma}, \\
          R_{\alpha \beta \gamma \delta} &= -R_{\beta \alpha \gamma \delta}
        \end{align*}
      " />
      <p>antisymmetries, we can find the components equal to zero:</p>
      <BlockMath math="
        \begin{align*}
          R_{\theta \theta \theta \theta} &= 0, & R_{\theta \theta \theta \phi} &= 0, & R_{\theta \theta \phi \theta} &= 0, & R_{\theta \theta \phi \phi} &= 0, \\
          R_{\theta \phi \theta \theta} &= 0, & R_{\theta \phi \theta \phi} &\neq 0, & R_{\theta \phi \phi \theta} &\neq 0, & R_{\theta \phi \phi \phi} &= 0,\\
          R_{\phi \theta \theta \theta} &= 0, & R_{\phi \theta \theta \phi} &\neq 0, & R_{\phi \theta \phi \theta} &\neq 0, & R_{\phi \theta \phi \phi} &= 0, \\
          R_{\phi \phi \theta \theta} &= 0, & R_{\phi \phi \theta \phi} &= 0, & R_{\phi \phi \phi \theta} &= 0, & R_{\phi \phi \phi \phi} &= 0.
        \end{align*}
      " />

      <p>By the</p>
      <BlockMath math="R_{\alpha \beta \gamma \delta} = R_{\gamma \delta \alpha \beta}" />
      <p>symmetry, the following components are related by:</p>
      <BlockMath math="R_{\theta \phi \phi \theta} = R_{\phi \theta \theta \phi}," />
      <p>and by the antisymmetries, the following components are related by:</p>
      <BlockMath math="
        \begin{align*}
          R_{\theta \phi \theta \phi} &= -R_{\theta \phi \phi \theta}, \\
          R_{\phi \theta \phi \theta} &= -R_{\phi \theta \theta \phi} = -R_{\theta \phi \phi \theta} = R_{\theta \phi \theta \phi}.
        \end{align*}
      " />

      <p>So the only component we need to calculate <InlineMath math="R_{\theta \phi \theta \phi}" />:</p>
      <BlockMath math="
        \begin{align*}
          R_{\theta \phi \theta \phi} = g_{\theta \sigma} R^{\sigma}{}_{\phi \theta \phi} &= g_{\theta \sigma} (\Gamma^{\sigma}{}_{\phi \phi, \theta} - \Gamma^{\sigma}{}_{\theta \phi, \phi} + \Gamma^{\nu}{}_{\phi \phi} \Gamma^{\sigma}{}_{\theta \nu} - \Gamma^{\nu}{}_{\theta \phi} \Gamma^{\sigma}{}_{\phi \nu}) \\
          &= g_{\theta \theta} (\Gamma^{\theta}{}_{\phi \phi, \theta} - \Gamma^{\theta}{}_{\theta \phi, \phi} + \Gamma^{\nu}{}_{\phi \phi} \Gamma^{\theta}{}_{\theta \nu} - \Gamma^{\nu}{}_{\theta \phi} \Gamma^{\theta}{}_{\phi \nu}) \\
          &= g_{\theta \theta} (\Gamma^{\theta}{}_{\phi \phi, \theta} + \Gamma^{\theta}{}_{\phi \phi} \Gamma^{\theta}{}_{\theta \theta} + \Gamma^{\phi}{}_{\phi \phi} \Gamma^{\theta}{}_{\theta \phi} - \Gamma^{\theta}{}_{\theta \phi} \Gamma^{\theta}{}_{\phi \theta} - \Gamma^{\phi}{}_{\theta \phi} \Gamma^{\theta}{}_{\phi \phi}) \\
          &= g_{\theta \theta} (\Gamma^{\theta}{}_{\phi \phi, \theta} - \Gamma^{\phi}{}_{\theta \phi} \Gamma^{\theta}{}_{\phi \phi}) \\
          &= r^2 \left(- \frac{1}{2} \frac{\partial}{\partial \theta} \sin (2 \theta) + \frac{1}{2} \sin (2 \theta) \cot \theta\right) \\
          &= r^2 \left(- \cos (2 \theta) + \sin \theta \cos \theta \frac{\cos \theta}{\sin \theta}\right) \\
          &= r^2 \left(- (\cos^2 \theta - \sin^2 \theta) + \cos^2 \theta\right) \\
          &= r^2 \sin^2 \theta. \\
        \end{align*}
      " />

      <p>We can use the above symmetries and obtain the remaining three components:</p>
      <BlockMath math="
        \begin{align*}
          R_{\theta \theta \theta \theta} &= 0, & R_{\theta \theta \theta \phi} &= 0, & R_{\theta \theta \phi \theta} &= 0, & R_{\theta \theta \phi \phi} &= 0, \\
          R_{\theta \phi \theta \theta} &= 0, & R_{\theta \phi \theta \phi} &= r^2 \sin^2 \theta, & R_{\theta \phi \phi \theta} &= -r^2 \sin^2 \theta, & R_{\theta \phi \phi \phi} &= 0,\\
          R_{\phi \theta \theta \theta} &= 0, & R_{\phi \theta \theta \phi} &= -r^2 \sin^2 \theta, & R_{\phi \theta \phi \theta} &= r^2 \sin^2 \theta, & R_{\phi \theta \phi \phi} &= 0, \\
          R_{\phi \phi \theta \theta} &= 0, & R_{\phi \phi \theta \phi} &= 0, & R_{\phi \phi \phi \theta} &= 0, & R_{\phi \phi \phi \phi} &= 0.
        \end{align*}
      " />

      <p>Now, raising the index:</p>
      <BlockMath math="R^{\mu}{}_{\nu \sigma \lambda} = g^{\mu \rho} R_{\rho \nu \sigma \lambda} = \frac{1}{r^2} R_{\theta \nu \sigma \lambda} + \frac{1}{r^2 \sin^2 \theta} R_{\phi \nu \sigma \lambda}," />
      <p>we obtain the components:</p>
      <BlockMath math="
        \begin{align*}
          R^{\theta}{}_{\theta \theta \theta} &= 0, & R^{\theta}{}_{\theta \theta \phi} &= -1, & R^{\theta}{}_{\theta \phi \theta} &= 1, & R^{\theta}{}_{\theta \phi \phi} &= 0, \\
          R^{\theta}{}_{\phi \theta \theta} &= 0, & R^{\theta}{}_{\phi \theta \phi} &= \sin^2 \theta, & R^{\theta}{}_{\phi \phi \theta} &= - \sin^2 \theta, & R^{\theta}{}_{\phi \phi \phi} &= 0,\\
          R^{\phi}{}_{\theta \theta \theta} &= 0, & R^{\phi}{}_{\theta \theta \phi} &= -1, & R^{\phi}{}_{\theta \phi \theta} &= 1, & R^{\phi}{}_{\theta \phi \phi} &= 0, \\
          R^{\phi}{}_{\phi \theta \theta} &= 0, & R^{\phi}{}_{\phi \theta \phi} &= \sin^2 \theta, & R^{\phi}{}_{\phi \phi \theta} &= -\sin^2 \theta, & R^{\phi}{}_{\phi \phi \phi} &= 0.
        \end{align*}
      " />

      <p>Note: do not confuse this with 3D polar coordinates in flat space. These are the coordinates on the surface of a sphere.</p>

      <LinkH2 id="geodesic-deviation">Geodesic Deviation</LinkH2>
      <p>Another way to understand the Riemann tensor is through the geodesic deviation. Consider a point <InlineMath math="P" /> in flat space from which go the geodesic lines:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/riemann-tensor/geodesic-deviation-flat.png`}
          width={600}
          height={600}
          alt="Geodesic deviation in flat space"
          unoptimized
        />
      </div>
      <p>and the separation between the geodesics (orange vector <InlineMath math="\boldsymbol{s}" />) grows at a constant rate.</p>
      
      <p>Now, consider the geodesics on a surface of a sphere:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/riemann-tensor/geodesic-deviation-sphere.png`}
          width={400}
          height={400}
          alt="Geodesic deviation on a surface of a sphere"
          unoptimized
        />
      </div>
      <p>we see that the geodesics accelerate away from each other and after crossing the equator, the accelerate back. Mathematically, it could be described as the covariant derivative of the separation vector <InlineMath math="\boldsymbol{s}" /> along a geodesic <InlineMath math="\boldsymbol{v}" />:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{v}} \boldsymbol{s} &= \textrm{constant}, \\
          \nabla_{\boldsymbol{v}} \boldsymbol{s} &= \textrm{not constant},
        \end{align*}
      " />
      <p>or:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} &= \boldsymbol{0}, \\
          \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} &\neq \boldsymbol{0}.
        \end{align*}
      " />
      <p>Recall, from the <Link href="/general-relativity/math-preliminaries/covariant-derivative#intrinsic-definition">covariant derivative chapter</Link>, we learned that the vector parallel transported along itself is geodesic:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \boldsymbol{v} = \boldsymbol{0}." />

      <p>And the covariant covariant derivative of this along <InlineMath math="\boldsymbol{s}" /> is:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{s}} \nabla_{\boldsymbol{v}} \boldsymbol{v} &= \boldsymbol{0}, \\
          \nabla_{\boldsymbol{s}} \nabla_{\boldsymbol{v}} \boldsymbol{v} - \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{s}} \boldsymbol{v} + \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{s}} \boldsymbol{v} &= \boldsymbol{0}, \\
          R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} + \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} &= \boldsymbol{0},
        \end{align*}
      " />
      <p>where I have used the torsion-free property:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{s}} \boldsymbol{v} = \nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s}." />

      <p>So the geodesic deviation is the output of the following Riemann tensor:</p>
      <BlockMath math="\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} = -R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} = R(\boldsymbol{v}, \boldsymbol{s}) \boldsymbol{v}." />

      <p>When the Riemann tensor is zero, then there is no geodesic deviation. Implying that the space is flat.</p>

      <p>Note: some sources may use a different sign convention:</p>
      <div style={{color: "red"}}> {/* tailwind not working */}
        <BlockMath math="\nabla_{\boldsymbol{v}} \nabla_{\boldsymbol{v}} \boldsymbol{s} = R(\boldsymbol{s}, \boldsymbol{v}) \boldsymbol{v} = -R(\boldsymbol{v}, \boldsymbol{s}) \boldsymbol{v}." />
      </div>

      <LinkH2 id="second-bianchi-identity">Second Bianchi Identity</LinkH2>
      <p>The second Bianchi identity is as follows:</p>
      <BlockMath math="(\nabla_{\boldsymbol{w}} R)(\boldsymbol{u}, \boldsymbol{v}) + (\nabla_{\boldsymbol{v}} R)(\boldsymbol{w}, \boldsymbol{u}) + (\nabla_{\boldsymbol{u}} R)(\boldsymbol{v}, \boldsymbol{u}) = 0." />
      <p>or in component form:</p>
      <BlockMath math="R^{\sigma}{}_{\lambda \alpha \beta; \gamma} + R^{\sigma}{}_{\lambda \gamma \alpha; \beta} + R^{\sigma}{}_{\lambda \beta \gamma; \alpha} = 0." />

      <p>The covariant derivative of the Riemann tensor is:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{e_{\gamma}}} R &= \nabla_{\boldsymbol{e_{\gamma}}} (R^{\sigma}{}_{\lambda \alpha \beta} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}) \\
          &= \nabla_{\boldsymbol{e_{\gamma}}} (R^{\sigma}{}_{\lambda \alpha \beta}) \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            + R^{\sigma}{}_{\lambda \alpha \beta} \nabla_{\boldsymbol{e_{\gamma}}} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            + R^{\sigma}{}_{\lambda \alpha \beta} \boldsymbol{e_{\sigma}} \otimes \nabla_{\boldsymbol{e_{\gamma}}} \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta} \\
            &+ R^{\sigma}{}_{\lambda \alpha \beta} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \nabla_{\boldsymbol{e_{\gamma}}} \epsilon^{\alpha} \otimes \epsilon^{\beta}
            + R^{\sigma}{}_{\lambda \alpha \beta} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \nabla_{\boldsymbol{e_{\gamma}}} \epsilon^{\beta} \\
          &= R^{\sigma}{}_{\lambda \alpha \beta, \gamma} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            + R^{\sigma}{}_{\lambda \alpha \beta} \Gamma^{\rho}{}_{\gamma \sigma} \boldsymbol{e_{\rho}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            - R^{\sigma}{}_{\lambda \alpha \beta} \Gamma^{\lambda}{}_{\gamma \rho} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\rho} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta} \\
            &- R^{\sigma}{}_{\lambda \alpha \beta} \Gamma^{\alpha}{}_{\gamma \rho} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\rho} \otimes \epsilon^{\beta}
            - R^{\sigma}{}_{\lambda \alpha \beta} \Gamma^{\beta}{}_{\gamma \rho} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\rho} \\
          &= R^{\sigma}{}_{\lambda \alpha \beta, \gamma} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            + R^{\rho}{}_{\lambda \alpha \beta} \Gamma^{\sigma}{}_{\gamma \rho} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            - R^{\sigma}{}_{\rho \alpha \beta} \Gamma^{\rho}{}_{\gamma \lambda} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta} \\
            &- R^{\sigma}{}_{\lambda \rho \beta} \Gamma^{\rho}{}_{\gamma \alpha} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta}
            - R^{\sigma}{}_{\lambda \alpha \rho} \Gamma^{\rho}{}_{\gamma \beta} \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta} \\
          &= (R^{\sigma}{}_{\lambda \alpha \beta, \gamma}
            + R^{\rho}{}_{\lambda \alpha \beta} \Gamma^{\sigma}{}_{\gamma \rho}
            - R^{\sigma}{}_{\rho \alpha \beta} \Gamma^{\rho}{}_{\gamma \lambda}
            - R^{\sigma}{}_{\lambda \rho \beta} \Gamma^{\rho}{}_{\gamma \alpha}
            - R^{\sigma}{}_{\lambda \alpha \rho} \Gamma^{\rho}{}_{\gamma \beta}) \boldsymbol{e_{\sigma}} \otimes \epsilon^{\lambda} \otimes \epsilon^{\alpha} \otimes \epsilon^{\beta},
        \end{align*}
      " />
      <p>or in component form:</p>
      <BlockMath math="
        R^{\sigma}{}_{\lambda \alpha \beta; \gamma} = R^{\sigma}{}_{\lambda \alpha \beta, \gamma}
          + R^{\rho}{}_{\lambda \alpha \beta} \Gamma^{\sigma}{}_{\gamma \rho}
          - R^{\sigma}{}_{\rho \alpha \beta} \Gamma^{\rho}{}_{\gamma \lambda}
          - R^{\sigma}{}_{\lambda \rho \beta} \Gamma^{\rho}{}_{\gamma \alpha}
          - R^{\sigma}{}_{\lambda \alpha \rho} \Gamma^{\rho}{}_{\gamma \beta}.
      " />
      
      <p>I won&apos;t prove the general version of this. I will however prove this in Riemann normal coordinates, where at a point <InlineMath math="p" />:</p>
      <BlockMath math="
        \begin{align*}
          g_{\mu \nu} &= \delta_{\mu \nu}, \\
          g^{\mu \nu} &= \delta^{\mu \nu}, \\
          \Gamma^{\sigma}{}_{\mu \nu} &= 0,
        \end{align*}
      " />
      <p>the covariant derivative (at point <InlineMath math="p" />) simplifies:</p>
      <BlockMath math="R^{\sigma}{}_{\lambda \alpha \beta; \gamma} = R^{\sigma}{}_{\lambda \alpha \beta, \gamma}," />
      <p>and the Riemann tensor components are:</p>
      <BlockMath math="R^{\sigma}{}_{\lambda \alpha \beta} = \Gamma^{\sigma}{}_{\beta \lambda, \alpha} - \Gamma^{\sigma}{}_{\alpha \lambda, \beta},"/>
      <p>then the covariant derivatives are:</p>
      <BlockMath math="R^{\sigma}{}_{\lambda \alpha \beta; \gamma} = \Gamma^{\sigma}{}_{\beta \lambda, \alpha \gamma} - \Gamma^{\sigma}{}_{\alpha \lambda, \beta \gamma}."/>

      <p>Substituting into the second Bianchi identity, we get:</p>
      <BlockMath math="
        \begin{align*}
          R^{\sigma}{}_{\lambda \alpha \beta; \gamma} + R^{\sigma}{}_{\lambda \gamma \alpha; \beta} + R^{\sigma}{}_{\lambda \beta \gamma; \alpha} &= \Gamma^{\sigma}{}_{\beta \lambda, \alpha \gamma} - \Gamma^{\sigma}{}_{\alpha \lambda, \beta \gamma} \\
            &+ \Gamma^{\sigma}{}_{\alpha \lambda, \gamma \beta} - \Gamma^{\sigma}{}_{\gamma \lambda, \alpha \beta} \\
            &+ \Gamma^{\sigma}{}_{\gamma \lambda, \beta \alpha} - \Gamma^{\sigma}{}_{\beta \lambda, \gamma \alpha} \\
          &= \Gamma^{\sigma}{}_{\beta \lambda, \alpha \gamma} - \Gamma^{\sigma}{}_{\beta \lambda, \gamma \alpha} \\
            &+ \Gamma^{\sigma}{}_{\alpha \lambda, \gamma \beta} - \Gamma^{\sigma}{}_{\alpha \lambda, \beta \gamma} \\
            &+ \Gamma^{\sigma}{}_{\gamma \lambda, \beta \alpha} - \Gamma^{\sigma}{}_{\gamma \lambda, \alpha \beta} \\
          &= 0.
        \end{align*}
      " />
    </div>
  )
}