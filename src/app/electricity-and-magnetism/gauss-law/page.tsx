import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { Metadata } from "next"
import Link from "next/link"
import { BlockMath, InlineMath } from "react-katex"
import Image from "next/image"
import getConfig from "next/config"
import { SphericalConductor } from "./components"

export const metadata: Metadata = {
  title: "Gauss's Law"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Gauss&apos;s Law</h1>
      <p>By Gauss&apos;s Law, the electric flux through a closed surface is equal to the total charge enclosed within that surface divided by the permittivity:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A} = \frac{Q}{\epsilon_0}, & &\mathrm{Integral\ form}\\
	        \boldsymbol{\nabla} \cdot \boldsymbol{E} &= \frac{\rho}{\epsilon_0 \epsilon_r}, & &\mathrm{Differential\ form}
        \end{align*}
      " />
      <p>where:</p>
      <BlockMath math="
        \begin{align*}
	        \epsilon_0 &\approx 8.85 \cdot 10^{-12}\ Fm^{-1}, \\
          k_e &= \frac{1}{4 \pi \epsilon_0} \implies \epsilon_0 = \frac{1}{4 \pi k_e},
        \end{align*}
      " />
      <p>and where <InlineMath math="A" /> is the surface area of the closed surface.</p>

      <LinkH2 id="infinite-line-charge">Infinite Line Charge</LinkH2>
      <p>A line has a <b>constant</b> linear charge density <InlineMath math="\lambda" />. Its ends lie in points <InlineMath math="A" /> and <InlineMath math="B" />. What is the electric field at point <InlineMath math="C" />?</p>
      <p>This example builds on the linear algebra of <Link href="/electricity-and-magnetism/electric-field#line-charge">line charge from electric field</Link>, particularly:</p>
      <BlockMath math="
        \begin{align*}
	        h_y &= \boldsymbol{\hat{y}} \cdot (C - A), \\
	        \boldsymbol{h} &= h_y \boldsymbol{\hat{y}}, \\
	        H &= A + \boldsymbol{h}, \\
	        \boldsymbol{s} &= C - H.
        \end{align*}
      " />
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/gauss-law/line-charge.png`}
          width={700}
          height={700}
          alt="Line charge illustration"
          unoptimized
        />
      </div>
      <p>Since the charge density <InlineMath math="\lambda" /> is constant, the charge is equal to:</p>
      <BlockMath math="Q = \lambda l." />

      <p>Then the electric flux is equal to:</p>
      <BlockMath math="\Phi_E = \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A}  = \frac{\lambda l}{\epsilon_0}" />

      <p>The electric field&apos;s direction and magnitude does not depend on <InlineMath math="A" />, the equation simplifies:</p>
      <BlockMath math="
        \begin{align*}
          E A &= \frac{\lambda l}{\epsilon_0}, \\
          2 E \pi s l &= \frac{\lambda l}{\epsilon_0}, \\
          E  &= \frac{\lambda}{2 \pi s \frac{1}{4 \pi k_e}} \\
          &= \frac{\lambda}{s \frac{1}{2 k_e}} \\
          &= \frac{2 k_e \lambda}{s}, \\
        \end{align*}
      " />
      <p>The vector is pointing in the direction perpendicular to the line. This is identical to the equation derived in the electric field section with the <Link href="/electricity-and-magnetism/electric-field#infinite-line-charge">infinite line charge</Link>.</p>

      <LinkH2 id="spherical-conductor">Spherical conductor</LinkH2>
      <p>A spherical conductor of radius <InlineMath math="r_c" /> has a <b>constant</b> surface area charge density <InlineMath math="\sigma" />. What is the electric field at a point outside the sphere at a distance <InlineMath math="r" /> from the center of the sphere?</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/gauss-law/sphere-charge.png`}
          width={700}
          height={700}
          alt="Line charge illustration"
          unoptimized
        />
      </div>

      <p>The charge density <InlineMath math="\sigma" /> is constant. Thus, the charge is equal to:</p>
      <BlockMath math="
        \begin{align*}
          Q &= \sigma S, \\
          &= 4 \sigma \pi r_c^2.
        \end{align*}
      " />

      <p>The electric flux is equal to:</p>
      <BlockMath math="\Phi_E = \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A} = \frac{4 \sigma \pi r_c^2}{\epsilon_0}" />

      <p>Similar to <Link href="#infinite-line-charge">previous scenario</Link>, the electric field does not depend on <InlineMath math="A" />, simplifying the equation:</p>
      <BlockMath math="
        \begin{align*}
          E A &= \frac{4 \sigma \pi r_c^2}{\epsilon_0}, \\
          4 E \pi r^2 &= \frac{4 \sigma \pi r_c^2}{\epsilon_0}, \\
          E &= \frac{r_c^2 \sigma}{r^2 \epsilon_0}, \\
        \end{align*}
      " />

      <LinkH3 id="spherical-conductor-plot">Spherical Conductor Plot</LinkH3>
      <SphericalConductor />

      <LinkH2 id="infinite-plane">Infinite Plane</LinkH2>
      <p>A plane has a uniform charge density <InlineMath math="\sigma" />. What is the electric field anywhere in space?</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/gauss-law/plane.svg`}
          width={700}
          height={700}
          alt="Infinite plane illustration"
        />
      </div>

      <p>The plane divides the space into two sectors, <InlineMath math="z < 0" /> and <InlineMath math="z > 0" /> and <InlineMath math="\boldsymbol{E_1} = -\boldsymbol{E_2}" />. Both vector fields have the same magnitude.</p>

      <p>We construct a cylinder:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/gauss-law/plane2.png`}
          width={700}
          height={700}
          alt="Infinite plane cylinder illustration"
          unoptimized
        />
      </div>
      <p>Where <InlineMath math="A = A_1 = A_2" />.</p>

      <p>Then the total electric flux is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d\boldsymbol{A} \\
          &= \iint_{S_1} \boldsymbol{E_1} \cdot d\boldsymbol{A_1}
          + \iint_{S_2} \boldsymbol{E_2} \cdot d\boldsymbol{A_2}
          + \iint_{S_3} \boldsymbol{E_3} \cdot d\boldsymbol{A_3}
          + \iint_{S_4} \boldsymbol{E_4} \cdot d\boldsymbol{A_4} \\
          &= E_1 A_1 + E_2 A_2 \\
          &= 2 E A.
        \end{align*}
      "/>

      <p>Since the charge density is constant, the total charge is equal to:</p>
      <BlockMath math="Q = \sigma A" />

      <p>Using Gauss&apos;s law:</p>
      <BlockMath math="
        \begin{align*}
          2 E A &= \frac{\sigma A}{\epsilon_0}, \\
          E &= \frac{\sigma}{2 \epsilon_0}, \\
          \boldsymbol{E} &= \begin{cases}
            \ \ \ \frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z > 0, \\
            -\frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z < 0.
          \end{cases}
        \end{align*}
      "/>

      <LinkH2 id="two-parallel-infinite-planes">Two Parallel Infinite Planes</LinkH2>
      <p>Two parallel infinite planes at a distance <InlineMath math="d" />. The planes have opposite charge densities with equal magnitude <InlineMath math="\sigma" />. What is the electric field anywhere in space?</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/gauss-law/parallel-planes.png`}
          width={700}
          height={700}
          alt="Parallel planes illustration"
          unoptimized
        />
      </div>

      <p>The electric field is the sum of electric fields caused by each plane:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= \boldsymbol{E_+} + \boldsymbol{E_-}, \\
          \boldsymbol{E_+} &= \begin{cases}
            \ \ \ \frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z > \frac{d}{2}, \\
            -\frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z < \frac{d}{2},
          \end{cases} \\
          \boldsymbol{E_-} &= \begin{cases}
            -\frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z > -\frac{d}{2}, \\
            \ \ \ \frac{\sigma}{2 \epsilon_0}\boldsymbol{\hat{z}} & z < -\frac{d}{2},
          \end{cases} \\
          \boldsymbol{E} &= \begin{cases}
            \ \ \ \boldsymbol{0} & \ \ \ z > \frac{d}{2}\ \textrm{or}\ z < -\frac{d}{2}, \\
            -\frac{\sigma}{\epsilon_0}\boldsymbol{\hat{z}} & -\frac{d}{2} < z < \frac{d}{2}.
          \end{cases}
        \end{align*}"
      />
    </div>
  )
}
