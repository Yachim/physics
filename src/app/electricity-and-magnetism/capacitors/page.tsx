import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"
import { CapacitanceCalculator } from "./components"

export const metadata: Metadata = {
  title: "Capacitors"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Capacitors</h1>
      <p>Capacitors are devices that store electrical energy. The charge is proportional to the voltage between them:</p>
      <BlockMath math="
        \begin{align*}
          Q &= C|U|, \\
          C &= \frac{Q}{|U|}.
        \end{align*}
      " />

      <p>The unit of capacitance is farad (<InlineMath math="F" />).</p>

      <LinkH2 id="two-planes-capacitance">Capacitance of Two Parallel Planes</LinkH2>
      <p>Consider two infinite parallel planes at a distance <InlineMath math="d" /> with opposite charges of equal magnitude <InlineMath math="Q" />:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/basic-capacitor.png`}
          width={700}
          height={700}
          alt="Two parallel planes"
          unoptimized
        />
      </div>

      <p>The electric field between the planes as derived in <Link href="/electricity-and-magnetism/gauss-law#two-parallel-infinite-planes">Gauss&apos;s law chapter</Link> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= -\frac{\sigma}{\epsilon_0}\boldsymbol{\hat{z}}, \\
          E &= \frac{\sigma}{\epsilon_0}.
        \end{align*}
      "/>

      <p>The voltage is equal to:</p>
      <BlockMath math="
        \begin{align*}
          U &= - \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= -Ed, \\
          |U| &= Ed.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{Q}{Ed} \\
          &= \frac{Q \epsilon_0}{\sigma d} \\
          &= \frac{A \epsilon_0}{d},
        \end{align*}
      "/>
      <p>where <InlineMath math="A" /> is the area of each of the planes.</p>

      <LinkH2 id="cylindrical-capacitor">Cylindrical Capacitor</LinkH2>
      <p>Cylindrical capacitor consists of a cylinder of radius <InlineMath math="a" /> and a cylindrical shell of radius <InlineMath math="b" /> of equal length <InlineMath math="L" />. The inner cylinder has a positive charge <InlineMath math="Q" /> and the outer shell has a negative charge <InlineMath math="-Q" />:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/cylindrical-capacitor.png`}
          width={700}
          height={700}
          alt="Cylindrical conductor illustration"
          unoptimized
        />
      </div>

      <p>We choose cylinder with radius <InlineMath math="r" /> and equal length <InlineMath math="L" /> as the gaussian surface:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/cylindrical-capacitor2.png`}
          width={700}
          height={700}
          alt="Cylindrical conductor illustration 2"
          unoptimized
        />
      </div>

      <p>The electric field is constant on the cylinder. Using Gauss&apos;s law to get the electric field:</p>
      <BlockMath math="
        \begin{align*}
          \Phi_E &= \oiint_S \boldsymbol{E} \cdot d\boldsymbol{A} \\
          &= E A \\
          &= 2 E \pi r L
          = \frac{q}{\epsilon_0}, \\
          E &= \frac{q}{2 \epsilon_0 \pi r L},
        \end{align*}
      "/>
      <p>where <InlineMath math="q" /> is the charge enclosed by the gaussian surface (black cylinder). If <InlineMath math="r < a" /> then <InlineMath math="q = 0" />. If <InlineMath math="r > b" /> then <InlineMath math="q~=~Q~+~(-Q) = 0" />. This implies <InlineMath math="a < r < b" /> and thus <InlineMath math="q = Q" />. The voltage is equal to:</p>
      <BlockMath math="
        \begin{align*}
          U &= \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \int_a^b \frac{1}{r} dr \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \left[\ln r\right]_a^b \\
          &= \frac{Q}{2 \epsilon_0 \pi L} \ln \frac{b}{a} = |U|.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{2 \epsilon_0 \pi L}{\ln \frac{b}{a}}
        \end{align*}
      " />

      <LinkH2 id="spherical-capacitor">Spherical Capacitor</LinkH2>
      <p>Spherical capacitor consists of two cocentric spheres. The inner sphere has radius <InlineMath math="a" /> and a positive charge <InlineMath math="Q" />. The outer sphere has a negative charge <InlineMath math="-Q" /> and a radius <InlineMath math="b" />. We choose a cocentric sphere of radius <InlineMath math="r" /> as our gaussian surface:</p>

      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/spherical-capacitor.svg`}
          width={700}
          height={700}
          alt="Spherical cylinder illustration"
        />
      </div>

      <p>The electric field is constant on the surface of the gaussian surface. Using Gauss&apos;s law, the electric field is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \phi_E &= \oiint_S \boldsymbol{E} \cdot d \boldsymbol{A} \\
          &= EA \\
          &= 4 E \pi r^2 \\
          &= \frac{q}{\epsilon_0}, \\
          E &= \frac{q}{4 \epsilon_0 \pi r^2},
        \end{align*}
      "/>

      <p>where <InlineMath math="q" /> is the charged enclosed by the gaussian surface. Similarly to the cylindrical capacitor, the charge is nonzero only when <InlineMath math="a < r < b" />, thus <InlineMath math="q = Q" />. We can now calculate the voltage:</p>
      <BlockMath math="
        \begin{align*}
          U &= \int_C \boldsymbol{E} \cdot d\boldsymbol{s} \\
          &= \frac{Q}{4 \epsilon_0 \pi} \int_a^b \frac{1}{r^2} dr \\
          &= \frac{Q}{4 \epsilon_0 \pi} \left[\frac{1}{r}\right]_b^a \\
          &= \frac{Q}{4 \epsilon_0 \pi} \left(\frac{1}{a} - \frac{1}{b}\right) \\
          &= \frac{Q (b - a)}{4 \epsilon_0 \pi ab} = |U|.
        \end{align*}
      "/>

      <p>The capacitance is equal to:</p>
      <BlockMath math="
        \begin{align*}
          C &= \frac{Q}{|U|} \\
          &= \frac{4 \epsilon_0 \pi ab}{b - a}.
        \end{align*}
      " />

      <p>An isolated capacitor is similar to a setup where the negative capacitor is placed at infinity:</p>
      <BlockMath math="
        \begin{align*}
          C &= \lim_{b \to \infty} \frac{4 \epsilon_0 \pi ab}{b - a} \\
          &= 4 \epsilon_0 \pi \lim_{b \to \infty} \frac{a}{1 - \frac{a}{b}} \\
          &= 4 \epsilon_0 \pi a.
        \end{align*}
      "/>

      <LinkH2 id="potential-energy">Potential Energy of a Capacitor</LinkH2>
      <p>Capacitors can be used to store energy. Consider a capacitor with initial charge equal to zero. The potential energy is the external work done to charge the capacitor is given by:</p>
      <BlockMath math="
        \begin{align*}
          E_p &= W_{ext} = \int_0^Q |U| dq \\
          &= \int_0^Q \frac{q}{C} dq \\
          &= \frac{Q^2}{2 C} \\
          &= \frac{1}{2} C |U|^2,
        \end{align*}
      "/>
      <p>where <InlineMath math="Q"/> charge after the charging process and <InlineMath math="C"/> is the capacitance.</p>

      <p>Consider a parallel plate capacitor, where <InlineMath math="C = A \epsilon_0/d"/> and <InlineMath math="|U| = Ed"/> then the potential energy is equal to:</p>
      <BlockMath math="
        \begin{align*}
          E_p &= \frac{1}{2} \frac{A \epsilon_0}{d} E^2 d^2 \\
          &= \frac{1}{2} \epsilon_0 E^2 Ad \\
          &= \frac{1}{2} \epsilon_0 E^2 V,
        \end{align*}
      "/>
      <p>where <InlineMath math="V"/> is the volume.</p>

      <p>The energy density is the energy per unit volume:</p>
      <BlockMath math="e_p = \frac{1}{2} \epsilon_0 E^2"/>

      <p>For example, consider a spherical conductor of radius <InlineMath math="a"/>. As derived with <Link href="/electricity-and-magnetism/gauss-law#spherical-conductor">Gauss&apos;s law</Link>, the electric field outside is equal to:</p>
      <BlockMath math="
        \begin{align*}
          E &= \frac{a^2 \sigma}{r^2 \epsilon_0} \\
          &= \frac{4 \pi r_c^2 \sigma}{4 \pi r^2 \epsilon_0} \\
          &= \frac{Q}{4 \pi r^2 \epsilon_0}.
        \end{align*}
      "/>

      <p>Then the energy density is equal to:</p>
      <BlockMath math="e_p = \frac{Q^2}{32 \pi^2 r^4 \epsilon_0}."/>

      <p>The potential energy is equal to:</p>
      <BlockMath math="
        \begin{align*}
          E_p &= \iiint_V e_p\ dV \\
          &= \int_0^{2\pi} \int_0^{\pi} \int_a^{\infty} \frac{Q^2}{32 \pi^2 r^4 \epsilon_0} r^2 \sin \theta\ dr\ d\theta\ d\phi \\
          &= \frac{Q^2}{32 \pi^2 \epsilon_0} \int_0^{2\pi} d\phi \int_0^{\pi} \sin \theta\ d\theta\ \int_{\infty}^a -\frac{1}{r^2} dr \\
          &= \frac{Q^2}{32 \pi^2 \epsilon_0} 4 \pi \left[\frac{1}{r}\right]_{\infty}^a \\
          &= \frac{Q^2}{8 \pi \epsilon_0 a}.
        \end{align*}
      "/>

      <p>The electric potential at the shell is <InlineMath math="\varphi = \frac{Q}{4 \pi \epsilon_0 a}"/>. The potential energy can be simplified to:</p>
      <BlockMath math="E_p = \frac{1}{2} Q \varphi. "/>

      <p>We can arrive at the same potential energy by calculating the external work required to charge the capacitor:</p>
      <BlockMath math="
        \begin{align*}
          E_p &= W_{ext} = \int_0^Q \varphi\ dq \\
          &= \int_0^Q \frac{q}{4 \pi \epsilon_0 a}\ dq \\
          &= \frac{Q^2}{8 \pi \epsilon_0 a}.
        \end{align*}
      "/>

      <LinkH2 id="total-capacitance">Total Capacitance</LinkH2>
      <p>There are two ways to connect capacitors:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/capacitors/parallel.svg`}
          width={350}
          height={350}
          alt="Parallel capacitors illustration"
        />
        <Image
          src={`${basePath}/assets/capacitors/series.svg`}
          width={350}
          height={350}
          alt="Serial capacitors illustration"
        />
      </div>
      <p>The first is parallel and the second is serial. For parallel, the voltage across each capacitor is the same - <InlineMath math="|U|"/>, each capacitor has the capacitance <InlineMath math="C_i"/> and charge <InlineMath math="Q_i"/>:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/capacitors/parallel2.svg`}
          width={700}
          height={700}
          alt="Parallel capacitors illustration"
        />
      </div>
      <BlockMath math="C_i = \frac{Q_i}{|U|} \iff Q_i = |U|C_i."/>

      <p>The capacitors can be replaced by a single capacitor with capacitance <InlineMath math="C"/> and charge <InlineMath math="Q"/>:</p>
      <BlockMath math="
        \begin{align*}
          Q &= \sum_i Q_i = \sum_i |U|C_i = |U| \sum_i C_i, \\
          C &= \frac{Q}{|U|} = \sum_i C_i.
        \end{align*}
      "/>

      <p>For serial, capacitors with capacitance <InlineMath math="C_i"/> are connected to a battery with total voltage <InlineMath math="|U|"/> each capacitor has voltage <InlineMath math="|U_i|"/>:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/capacitors/series2.svg`}
          width={700}
          height={700}
          alt="Parallel capacitors illustration"
        />
      </div>
      <p>The outer plates have charges <InlineMath math="\pm Q"/>. The inner plates are charged to opposite charge. The voltage of each capacitor <InlineMath math="|U_i| = \frac{Q}{C_i}"/> and the total voltage is given by:</p>
      <BlockMath math="|U| = \sum_i |U_i| = \sum_i \frac{Q}{C_i}."/>

      <p>Again, the capacitors can be replaced with capacitor with capacitance <InlineMath math="C"/>:</p>
      <BlockMath math="
        \begin{align*}
          |U| = \frac{Q}{C} = \sum_i \frac{Q}{C_i}, \\
          \frac{1}{C} = \sum_i \frac{1}{C_i}.
        \end{align*}
      "/>

      <LinkH3 id="capacitance-calculator">Capacitance Calculator</LinkH3>
      <CapacitanceCalculator />
    </div>
  )
}
