import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Newton-Cartan Theory"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/gr-basics">Back</Link>
      <h1>Newton-Cartan Theory</h1>
      <p>Recall the gravitational potential and the Poisson&apos;s equation:</p>
      <BlockMath math="
        \begin{align*}
          \phi &= - \frac{M}{r}, \\
          \nabla^2 \phi &= 4 \pi \rho.
        \end{align*}
      " />

      <p>We can create something that looks like a geodesic equation from the Newton&apos;s law:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{g} &= - \nabla \phi, \\
          \frac{d^2 \boldsymbol{x}}{d t^2} &= - \nabla \phi, \\
          \frac{d^2 x^i}{d t^2} &= -\frac{\partial \phi}{\partial x^i}, \\
          \frac{d^2 x^i}{d t^2} + \frac{\partial \phi}{\partial x^i} &= 0,
        \end{align*}
      " />
      <p>where I am using Cartesian coordinates. Also remember that greek indices are for space and time components while latin indices are only for space components.</p>
      <p>We can make it match with the geodesic equations in the low velocity limit (<InlineMath math="\lambda \to t" />):</p>
      <BlockMath math="\frac{d^2 x^{\sigma}}{d t^2} + \Gamma^{\sigma}{}_{\mu \nu} \frac{d x^{\mu}}{d t} \frac{d x^{\nu}}{d t} = 0," />
      <p>and set <InlineMath math="\sigma = t" />:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 t}{d t^2} + \Gamma^t{}_{\mu \nu} \frac{d x^{\mu}}{d t} \frac{d x^{\nu}}{d t} &= 0, \\
          \Gamma^t{}_{\mu \nu} \frac{d x^{\mu}}{d t} \frac{d x^{\nu}}{d t} &= 0,
        \end{align*}
      " />
      <p>this implies that the Christoffel symbols are nonzero only when the upper index is spacelike:</p>
      <BlockMath math="\frac{d^2 x^i}{d t^2} + \Gamma^i{}_{\mu \nu} \frac{d x^{\mu}}{d t} \frac{d x^{\nu}}{d t} = 0." />

      <p>Since the equation obtained from the Newton&apos;s law does not contain any first order derivatives of coordinates <InlineMath math="\frac{d x^i}{dt}" />, this means, that the Christoffel symbols containing a spacelike index are zero:</p>
      <BlockMath math="
        \begin{align*}
          \Gamma^{i}{}_{jk} = 0, \\
          \Gamma^{i}{}_{0k} = 0, \\
          \Gamma^{i}{}_{j0} = 0.
        \end{align*}
      " />

      <p>This implies the only nonzero Christoffel components are with the both lower indices timelike:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d^2 x^i}{d t^2} + \Gamma^i{}_{tt} \frac{d t}{d t} \frac{d t}{d t} &= 0, \\
          \frac{d^2 x^i}{d t^2} + \Gamma^i{}_{tt} &= 0,
        \end{align*}
      " />
      <p>and this implies:</p>
      <BlockMath math="\Gamma^i{}_{tt} = \frac{\partial \phi}{\partial x^i}," />
      <p>and this is the only non zero Christoffel symbol.</p>

      <p>Recall the components of the Riemann tensor:</p>
      <BlockMath math="R^{\sigma}{}_{\rho \mu \lambda} = \Gamma^{\sigma}{}_{\lambda \rho, \mu} - \Gamma^{\sigma}{}_{\mu \rho, \lambda} + \Gamma^{\nu}{}_{\lambda \rho} \Gamma^{\sigma}{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu \rho} \Gamma^{\sigma}{}_{\lambda \nu}."/>
      <p>Since every term contains the <InlineMath math="\sigma" /> component, it must be spatial and since every term contains <InlineMath math="\rho" />, it must be timelike:</p>
      <BlockMath math="R^i{}_{t \mu \lambda} = \Gamma^i{}_{\lambda t, \mu} - \Gamma^i{}_{\mu t, \lambda} + \Gamma^{\nu}{}_{\lambda t} \Gamma^i{}_{\mu \nu} - \Gamma^{\nu}{}_{\mu t} \Gamma^i{}_{\lambda \nu}."/>

      <p><InlineMath math="\nu" /> is a summation index. For it to be nonzero, <InlineMath math="\nu = t" />, since it&apos;s a lower index. It is also an upper index. And since upper indices cannot be <InlineMath math="t" />, the last two terms vanish:</p>
      <BlockMath math="
        \begin{align*}
          R^i{}_{t \mu \lambda} &= \Gamma^i{}_{\lambda t, \mu} - \Gamma^i{}_{\mu t, \lambda} + \Gamma^t{}_{\lambda t} \Gamma^i{}_{\mu t} - \Gamma^t{}_{\mu t} \Gamma^i{}_{\lambda t} \\
          &= \Gamma^i{}_{\lambda t, \mu} - \Gamma^i{}_{\mu t, \lambda}.
        \end{align*}
      "/>

      <p>We can now substitute <InlineMath math="\lambda" /> and <InlineMath math="\mu" /> to be timelike or spacelike:</p>
      <BlockMath math="
        \begin{align*}
          R^i{}_{t t t} &= \Gamma^i{}_{t t, t} - \Gamma^i{}_{t t, t} = 0, \\
          R^i{}_{t t j} &= \Gamma^i{}_{j t, t} - \Gamma^i{}_{t t, j} = - \Gamma^i_{tt, j} = - \frac{\partial^2 \phi}{\partial x^i \partial x^j}, \\
          R^i{}_{t j t} &= -R^i{}_{ttj} = \frac{\partial^2 \phi}{\partial x^i \partial x^j}, \\
          R^i{}_{t j k} &= \Gamma^i{}_{k t, j} - \Gamma^i{}_{j t, k} = 0,
        \end{align*}
      " />

      <p>so the nonzero components in Cartesian coordinates are:</p>
      <BlockMath math="
        \begin{align*}
          R^i{}_{t j t} = -R^i{}_{ttj} &= \frac{\partial}{\partial x^i} \left(\frac{\partial}{\partial x^j} \left(- \frac{M}{r}\right)\right) \\
          &= - M \frac{\partial}{\partial x^i} \left(\frac{\partial}{\partial x^j} (x^2 + y^2 + z^2)^{-\frac{1}{2}}\right) \\
          &= - M \frac{\partial}{\partial x^i} \left(- \frac{1}{2} (x^2 + y^2 + z^2)^{-\frac{3}{2}} 2 x^j\right) \\
          &= M \frac{\partial}{\partial x^i} \left((x^2 + y^2 + z^2)^{-\frac{3}{2}} x^j\right) \\
          &= M \left(x^j \frac{\partial}{\partial x^i} (x^2 + y^2 + z^2)^{-\frac{3}{2}} + (x^2 + y^2 + z^2)^{-\frac{3}{2}} \frac{\partial}{\partial x^i} x^j\right) \\
          &= M \left(- x^j \frac{3}{2} (x^2 + y^2 + z^2)^{-\frac{5}{2}} 2x^i + (x^2 + y^2 + z^2)^{-\frac{3}{2}} \delta^j_i\right) \\
          &= M \left((x^2 + y^2 + z^2)^{-\frac{3}{2}} \delta^j_i - 3 x^i x^j (x^3 + y^2 + z^2)^{-\frac{5}{2}}\right) \\
          &= M \left(r^{-3} \delta^j_i - 3 x^i x^j r^{-5}\right) \\
          &= \frac{M}{r^5} \left(r^2 \delta^j_i - 3 x^i x^j\right),
        \end{align*}
      " />
      <p>or written out:</p>
      <BlockMath math="
        \begin{align*}
          R^x{}_{t x t} &= \frac{M}{r^5} \left(r^2 - 3 x^2\right), \\
          R^x{}_{t y t} = -R^x{}_{t t y} &= - \frac{3 M}{r^5} x y, \\
          R^x{}_{t z t} = -R^x{}_{t t z} &= - \frac{3 M}{r^5} x z, \\
          R^y{}_{t x t} = -R^y{}_{t t y} &= - \frac{3 M}{r^5} y x, \\
          R^y{}_{t y t} &= \frac{M}{r^5} \left(r^2 - 3 y^2\right), \\
          R^y{}_{t z t} = -R^y{}_{t t z} &= - \frac{3 M}{r^5} y z, \\
          R^z{}_{t x t} = -R^z{}_{t t y} &= - \frac{3 M}{r^5} z x, \\
          R^z{}_{t y t} = -R^z{}_{t t y} &= - \frac{3 M}{r^5} z y, \\
          R^z{}_{t z t} &= \frac{M}{r^5} \left(r^2 - 3 z^2\right).
        \end{align*}
      " />

      <p>We can interpret it by setting <InlineMath math="r = z" /> and <InlineMath math="x = y = 0" />:</p>
      <BlockMath math="
        \begin{align*}
          R^x{}_{t x t} &= \frac{M}{r^3}, \\
          R^x{}_{t y t} = -R^x{}_{t t y} &= 0, \\
          R^x{}_{t z t} = -R^x{}_{t t z} &= 0, \\
          R^y{}_{t x t} = -R^y{}_{t t y} &= 0, \\
          R^y{}_{t y t} &= \frac{M}{r^3}, \\
          R^y{}_{t z t} = -R^y{}_{t t z} &= 0, \\
          R^z{}_{t x t} = -R^z{}_{t t y} &= 0, \\
          R^z{}_{t y t} = -R^z{}_{t t y} &= 0, \\
          R^z{}_{t z t} &= -\frac{2M}{r^3}.
        \end{align*}
      " />
      <p>We can consider the geodesic deviation when going along the time geodesics and picking the spacelike basis vectors as the separation vectors:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{e_t}} \nabla_{\boldsymbol{e_t}} \boldsymbol{e_x} &= R(\boldsymbol{e_x}, \boldsymbol{e_t}) \boldsymbol{e_t} = -R^{\mu}{}_{t x t} \boldsymbol{e_{\mu}} = -\frac{M}{r^3}, \\
          \nabla_{\boldsymbol{e_t}} \nabla_{\boldsymbol{e_t}} \boldsymbol{e_y} &= R(\boldsymbol{e_y}, \boldsymbol{e_t}) \boldsymbol{e_t} = -R^{\mu}{}_{t y t} \boldsymbol{e_{\mu}} = -\frac{M}{r^3}, \\
          \nabla_{\boldsymbol{e_t}} \nabla_{\boldsymbol{e_t}} \boldsymbol{e_z} &= R(\boldsymbol{e_z}, \boldsymbol{e_t}) \boldsymbol{e_t} = -R^{\mu}{}_{t z t} \boldsymbol{e_{\mu}} = \frac{2M}{r^3},
        \end{align*}
      " />
      <p>this means that the geodesics diverge in the <InlineMath math="z" /> direction (in the direction of the fall) and converge in the <InlineMath math="x" /> and <InlineMath math="y" /> directions. If we input only the spacelike basis vectors, we would get geodesic deviation of <InlineMath math="0" /> - space is flat, but spacetime is curved.</p>

      <p>If we compute the Ricci tensor:</p>
      <BlockMath math="
        \begin{align*}
          R^i{}_{t i t} &= \sum_i \frac{\partial^2 \phi}{\partial (x^i)^2} = \nabla^2 \phi, \\
        \end{align*}
      " />
      <p>we have the laplacian of the potential from Poisson&apos;s equation:</p>
      <BlockMath math="R_{tt} = 4 \pi \rho." />

      <p>This can be interpreted that a mass density <InlineMath math="\rho" /> creates a potential well that causes the timelike geodesics to converge (described by <InlineMath math="R_{tt}" />).</p>

      <p>Outside the body, <InlineMath math="R_{tt} = 0" />. This does not mean that the spacetime is flat the Riemann tensor is still nonzero and it describes tidal forces that do not change volume. Ricci tensor describes only a change in volume, not change in shape.</p>

      <p>One last thing - the mass density <InlineMath math="\rho" /> is not invariant. It can change with length contraction. The mass density has to be part of another tensor - the energy-momentum tensor <InlineMath math="T_{\mu \nu}" />.</p>
    </div>
  )
}