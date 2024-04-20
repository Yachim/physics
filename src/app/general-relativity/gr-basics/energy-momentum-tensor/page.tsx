import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Energy-Momentum Tensor"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/gr-basics">Back</Link>
      <h1>Energy-Momentum Tensor</h1>
      <p>Throughout this chapter, I will be using the terms density and flux. For 4D density will be a value per unit volume at constant time. For example the number density (e.g. the number of particles):</p>
      <BlockMath math="N^t = \frac{\#}{\Delta x \Delta y \Delta z}," />
      <p>while the flux is some value passing through a unit surface in unit time while the third coordinate is held constant:</p>
      <BlockMath math="
        \begin{align*}
          N^x &= \frac{\#}{\Delta t \Delta y \Delta z}, \\
          N^y &= \frac{\#}{\Delta t \Delta x \Delta z}, \\
          N^z &= \frac{\#}{\Delta t \Delta x \Delta y}.
        \end{align*}
      " />

      <p>This can be visualized in 2D:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/gr-basics/energy-momentum-tensor/number-flux-density.svg`}
          width={500}
          height={500}
          alt="Number flux and density"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          N^t = \frac{\#}{\Delta x} = 2, \\
          N^x = \frac{\#}{\Delta t} = 1.
        \end{align*}
      " />

      <p>Consider the Galilean transform:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/gr-basics/energy-momentum-tensor/number-flux-density-galilean.svg`}
          width={500}
          height={500}
          alt="Number flux and density with Galilean transform"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          \tilde{N}^t = \frac{\#}{\Delta \tilde{x}} = 2, \\
          \tilde{N}^x = \frac{\#}{\Delta \tilde{t}} = 0.
        \end{align*}
      " />

      <p>and the Lorentz transform:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/gr-basics/energy-momentum-tensor/number-flux-density-lorentz.svg`}
          width={500}
          height={500}
          alt="Number flux and density with Lorentz transform"
        />
      </div>
      <BlockMath math="
        \begin{align*}
          \tilde{N}^t = \frac{\#}{\Delta \tilde{x}} = 1, \\
          \tilde{N}^x = \frac{\#}{\Delta \tilde{t}} = 0.
        \end{align*}
      " />

      <p>Recall the initial definition:</p>
      <BlockMath math="
        \begin{align*}
          N^t &= \frac{\#}{\Delta x \Delta y \Delta z}, \\
          N^x &= \frac{\#}{\Delta t \Delta y \Delta z}, \\
          N^y &= \frac{\#}{\Delta t \Delta x \Delta z}, \\
          N^z &= \frac{\#}{\Delta t \Delta x \Delta y}.
        \end{align*}
      " />

      <p>In Galilean relativity, the <InlineMath math="N^t" /> component is the rest number density:</p>
      <BlockMath math="n = N^t = \frac{\#}{\Delta x \Delta y \Delta z}." />

      <p>And use it in the definition of the spatial components:</p>
      <BlockMath math="
        \begin{align*}
          N^x &= \frac{\#}{\Delta t \Delta y \Delta z} = \frac{\Delta x}{\Delta t} \frac{\#}{\Delta x \Delta y \Delta z} = u^x n, \\
          N^y &= \frac{\#}{\Delta t \Delta x \Delta z} = \frac{\Delta y}{\Delta t} \frac{\#}{\Delta x \Delta y \Delta z} = u^y n, \\
          N^z &= \frac{\#}{\Delta t \Delta x \Delta y} = \frac{\Delta z}{\Delta t} \frac{\#}{\Delta x \Delta y \Delta z} = u^z n,
        \end{align*}
      " />
      <p>or in vector notation:</p>
      <BlockMath math="\boldsymbol{N} = n \begin{bmatrix}
        1 \\
        u^x \\
        u^y \\
        u^z
      \end{bmatrix}." />

      <p>In special relativity, with the Lorentz transformation, the vector</p>
      <BlockMath math="\boldsymbol{N} = n \left(\gamma \begin{bmatrix}
        1 \\
        u^x \\
        u^y \\
        u^z
      \end{bmatrix}\right)," />
      <p>where the vector in brackets is the four-velocity:</p>
      <BlockMath math="\boldsymbol{N} = n \boldsymbol{U}." />

      <p>This number flux four-vector describes the total number (of partiacles, for example) in a space time box of size 1. If we want to describe the four-momentum in a box of size 1, another four-vector won&apos;t work. We need a 4x4 tensor - the energy momentum tensor.</p>

      <LinkH2 id="energy-momentum-tensor">Energy-Momentum Tensor</LinkH2>
      <BlockMath math="T^{\alpha \beta} = \begin{bmatrix}
        T^{tt} & T^{tx} & T^{ty} & T^{tz} \\
        T^{xt} & T^{xx} & T^{xy} & T^{xz} \\
        T^{yt} & T^{yx} & T^{yy} & T^{yz} \\
        T^{zt} & T^{zx} & T^{zy} & T^{zz}
      \end{bmatrix}" />
      <p>The energy-momentum tensor component <InlineMath math="T^{\alpha \beta}" /> is the flux of the <InlineMath math="P^{\alpha}" /> component in a unit volume of constant <InlineMath math="\beta" />. Consider the following illustration:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/gr-basics/energy-momentum-tensor/four-momentum.svg`}
          width={500}
          height={500}
          alt="Four-momentum plot"
        />
      </div>
      <p>where the purple vectors are the four-momentum vectors. In the image above, the components are:</p>
      <BlockMath math="\boldsymbol{P} = P^t \boldsymbol{e_t} + P^x \boldsymbol{e_x} = 0.2 \boldsymbol{e_t} + 0.1 \boldsymbol{e_x}." />
      <p>The flux of the <InlineMath math="t" /> and <InlineMath math="x" /> components when <InlineMath math="t" /> is held constant is:</p>
      <BlockMath math="
        \begin{align*}
          T^{t t} &= 2 P^t = 0.4, \\
          T^{x t} &= 2 P^x = 0.2,
        \end{align*}
      " />
      <p>The flux of the <InlineMath math="t" /> and <InlineMath math="x" /> components when <InlineMath math="x" /> is held constant is:</p>
      <BlockMath math="
        \begin{align*}
          T^{t x} &= P^t = 0.2, \\
          T^{x x} &= P^x = 0.1,
        \end{align*}
      " /> 
      <p>and as seen on the <InlineMath math="T^{tx}" /> and <InlineMath math="T^{xt}" />, the tensor is symmetric:</p>
      <BlockMath math="T^{\alpha \beta} = T^{\beta \alpha}." />

      <p>Another way to look at it: if we take the four-momentum <InlineMath math="\boldsymbol{P}" /> and in a unit volume of constant <InlineMath math="\beta" /> coordinate, we will get a column of the energy-momentum tensor <InlineMath math="T^{\alpha \beta}" />, where <InlineMath math="\alpha" /> are the components of the four-momentum.</p>

      <p>The energy-momentum tensor takes two vectors as inputs: <InlineMath math="T(\boldsymbol{V}, \boldsymbol{U})" />. The output is the four momentum in the <InlineMath math="\boldsymbol{V}" /> direction inside a unit 3D box perpendicular to <InlineMath math="\boldsymbol{U}" />. Inputting the basis vectors gives us the components:</p>
      <BlockMath math="T(\boldsymbol{e_{\alpha}}, \boldsymbol{e_{\beta}}) = T^{\alpha \beta}." />

      <p>The <InlineMath math="P^t" /> component is energy, this means that the <InlineMath math="T^{tt}" /> component is the energy density and <InlineMath math="T^{ti}" /> is the energy flux:</p>
      <BlockMath math="
        \begin{align*}
          T^{tt} &= \frac{P^t}{\Delta x \Delta y \Delta z} = \frac{E}{V}, \\
          T^{tx} &= \frac{P^t}{\Delta t \Delta y \Delta z}, \\
          T^{ty} &= \frac{P^t}{\Delta t \Delta x \Delta z}, \\
          T^{tz} &= \frac{P^t}{\Delta t \Delta x \Delta y}.
        \end{align*}
      " />

      <p>The <InlineMath math="T^{it}" /> components are the momentum densities:</p>
      <BlockMath math="
        \begin{align*}
          T^{xt} &= \frac{P^x}{\Delta x \Delta y \Delta z} = \frac{P^x}{V}, \\
          T^{yt} &= \frac{P^y}{\Delta x \Delta y \Delta z} = \frac{P^y}{V}, \\
          T^{zt} &= \frac{P^z}{\Delta x \Delta y \Delta z} = \frac{P^z}{V}.
        \end{align*}
      " />

      <p>The <InlineMath math="T^{ii}" /> components are pressure (force per unit area):</p>
      <BlockMath math="
        \begin{align*}
          T^{xx} &= \frac{P^x}{\Delta t \Delta y \Delta z} = \frac{F^x}{\Delta y \Delta z}, \\
          T^{yy} &= \frac{P^y}{\Delta t \Delta x \Delta z} = \frac{F^y}{\Delta x \Delta z}, \\
          T^{zz} &= \frac{P^z}{\Delta t \Delta x \Delta y} = \frac{F^z}{\Delta x \Delta y}.
        \end{align*}
      " />

      <p>And the <InlineMath math="T^{ij}" /> components are the shear stress.</p>

      <LinkH2 id="conservation">Conservation of Energy-Momentum</LinkH2>
      <p>The conservation of energy-momentum may be summed by the following statement: if the momentum flows into the box (negative divergence), then the density has to increase and if the momentum flows out of the box (positive divergence), then the density has to decrease:</p>
      <BlockMath math="\partial_{\nu} T^{\mu \nu} = T^{\mu \nu}{}_{, \nu} = 0," />
      <p>this only works in cartesian coordinates. For general coordinates, we have to consider the covariant derivative.</p>

      <p>The covariant derivative of the energy-momentum tensor is as follows:</p>
      <BlockMath math="
        \begin{align*}
          \nabla_{\boldsymbol{e_{\sigma}}} T &= \nabla_{\boldsymbol{e_{\sigma}}} (T^{\mu \nu} \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}) \\
          &= \nabla_{\boldsymbol{e_{\sigma}}} (T^{\mu \nu}) \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}
            + T^{\mu \nu} \nabla_{\boldsymbol{e_{\sigma}}} (\boldsymbol{e_{\mu}}) \otimes \boldsymbol{e_{\nu}}
            + T^{\mu \nu} \boldsymbol{e_{\mu}} \otimes \nabla_{\boldsymbol{e_{\sigma}}} (\boldsymbol{e_{\nu}}) \\
          &= T^{\mu \nu}{}_{,\sigma} \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}
            + T^{\mu \nu} \Gamma^{\rho}{}_{\sigma \mu} \boldsymbol{e_{\rho}} \otimes \boldsymbol{e_{\nu}}
            + T^{\mu \nu} \boldsymbol{e_{\mu}} \otimes \Gamma^{\rho}{}_{\sigma \nu} \boldsymbol{e_{\rho}} \\
          &= T^{\mu \nu}{}_{,\sigma} \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}
            + T^{\rho \nu} \Gamma^{\mu}{}_{\sigma \rho} \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}
            + T^{\mu \rho} \boldsymbol{e_{\mu}} \otimes \Gamma^{\nu}{}_{\sigma \rho} \boldsymbol{e_{\nu}} \\
          &= (T^{\mu \nu}{}_{,\sigma} + T^{\rho \nu} \Gamma^{\mu}{}_{\sigma \rho} + T^{\mu \rho} \Gamma^{\nu}{}_{\sigma \rho}) \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}} \\
          &= (T^{\mu \nu}{}_{,\sigma} + T^{\rho \nu} \Gamma^{\mu}{}_{\sigma \rho} + T^{\mu \rho} \Gamma^{\nu}{}_{\sigma \rho}) \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}} \\
          &= T^{\mu \nu}{}_{; \sigma} \boldsymbol{e_{\mu}} \otimes \boldsymbol{e_{\nu}}.
        \end{align*}
      " />
      <p>The proper conservation of four-momentum is:</p>
      <BlockMath math="T^{\mu \nu}{}_{; \nu} = 0." />

      <p>Note: in general relativity, the above formula only applies locally.</p>

      <LinkH2 id="dust">Energy-Momentum Tensor of Dust</LinkH2>
      <p>Dust is a collection of particles not exerting pressure on each other. Each particle has four-momentum <InlineMath math="\boldsymbol{P}" /> and the densities are described by the number-flux four-vector <InlineMath math="\boldsymbol{N}" />:</p>
      <BlockMath math="T^{\mu \nu} = P^{\mu} N^{\nu}." />

      <p>The four-momentum may be rewritten as the rest mass times the four-velocity:</p>
      <BlockMath math="\boldsymbol{P} = m \boldsymbol{U}," />
      <p>and the number-flux four-vector may be rewritten as the rest number density times the four-velocity:</p>
      <BlockMath math="\boldsymbol{N} = n \boldsymbol{U}," />
      <p>substituting into the above definition for the energy-momentum tensor:</p>
      <BlockMath math="T^{\mu \nu} = m n U^{\mu} U^{\nu}." />

      <p>Multiplying the mass by the number density, we get the mass density <InlineMath math="\rho" />:</p>
      <BlockMath math="T^{\mu \nu} = \rho U^{\mu} U^{\nu}." />

      <p>In the rest dust&apos;s rest frame, the only non zero components are:</p>
      <BlockMath math="
        \begin{align*}
          P^t &= m, \\
          N^t &= n,          
        \end{align*}
      " />
      <p>making the only non zero component of the energy-momentum tensor equal to:</p>
      <BlockMath math="T^{00} = \rho," />
      <p>or in SI units:</p>
      <BlockMath math="T^{00} = \rho c^2." />

      <p>This is the energy density. It is related to the mass-energy equivalence:</p>
      <BlockMath math="E = mc^2." />

      <LinkH2 id="perfect-fluid">Energy-Momentum Tensor of a Perfect Fluid</LinkH2>
      <p>Perfect fluid means that the particles exert pressure <InlineMath math="p" /> equally in all directions. The energy-momentum tensor components are equal to:</p>
      <BlockMath math="T^{\mu \nu} = (\rho + p) U^{\mu} U^{\nu} + p g^{\mu \nu}," />
      <p>where <InlineMath math="g^{\mu \nu}" /> is the inverse metric tensor with space-positive signature.</p>

      <p>In its rest frame, the energy-momentum tensor look like this:</p>
      <BlockMath math="T^{\mu \nu} = \begin{bmatrix}
        \rho & 0 & 0 & 0 \\
        0 & p & 0 & 0 \\
        0 & 0 & p & 0 \\
        0 & 0 & 0 & p
      \end{bmatrix}." />
    </div>
  )
}