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

      <LinkH2 id="symmetries">Symmetries</LinkH2>
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
          R_{\sigma \gamma \alpha \beta} &= R_{\alpha \beta \sigma \gamma}. \tag{Torsion-free \& metric compatibility} \\
        \end{align*}
      "/>

      <p>Swapping the same indices means the following:</p>
      <BlockMath math="R_{\mu \mu \alpha \beta} = -R_{\mu \mu \alpha \beta},"/>
      <p>and this implies that the component is zero.</p>
    </div>
  )
}