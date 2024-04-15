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
    </div>
  )
}