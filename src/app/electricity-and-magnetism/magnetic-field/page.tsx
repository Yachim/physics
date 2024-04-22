import { LinkH2, LinkH3 } from "@/components/LinkHeadings"
import { BlockMath, InlineMath } from "react-katex"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import getConfig from "next/config"

export const metadata: Metadata = {
  title: "Magnetic Field"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Magnetic Field</h1>
      <p>A bar magnet is one of the sources of magnetic field. The bar magnet consists of two poles, a north pole (N) and a south pole (S):</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/magnetic-field/magnet.svg`}
          width={700}
          height={700}
          alt="Bar magnet"
        />
      </div>
      <p>When holding two magnets close to each other, the like poles will repel each other while the opposite poles attract.</p>
      <p>Magnetic poles always exist in pair. When a bar magnet is broken, two new bar magnets are obtained:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/magnetic-field/magnet-break.svg`}
          width={700}
          height={700}
          alt="Bar magnet"
        />
      </div>
      <p>The electric field is the force per unit charge:</p>
      <BlockMath math="\boldsymbol{E} = \frac{\boldsymbol{F_e}}{q},"/>
      <p>however, due to the absence of magnetic monopoles, the magnetic field <InlineMath math="\boldsymbol{B}"/> must be defined differently.</p>
      <p>To define it, consider a particle of charge <InlineMath math="q"/>, moving at a velocity <InlineMath math="\boldsymbol{v}"/>. Experimentally, it was found:</p>
      <ol>
        <li>The magnitude of the magnetic force <InlineMath math="\boldsymbol{F_B}"/> is proportional to both <InlineMath math="v"/> and <InlineMath math="q"/>.</li>
        <li>The magnitude and direction of <InlineMath math="\boldsymbol{F_B}"/> depends on <InlineMath math="\boldsymbol{v}"/> and <InlineMath math="\boldsymbol{B}"/>.</li>
        <li><InlineMath math="\boldsymbol{F_B}"/> vanishes when <InlineMath math="\boldsymbol{v}"/> is parallel to <InlineMath math="\boldsymbol{B}"/>. When <InlineMath math="\boldsymbol{v}"/> and <InlineMath math="\boldsymbol{B}"/> forms an angle <InlineMath math="\theta"/>, <InlineMath math="\boldsymbol{F_B}"/> is perpendicular to a plane formed by them and the magnitude of <InlineMath math="\boldsymbol{F_B}"/> is proportional to <InlineMath math="\sin \theta"/>.</li>
        <li>When the sign of <InlineMath math="q"/> switches, the direction of <InlineMath math="\boldsymbol{F_B}"/> reverses.</li>
      </ol>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/magnetic-field/magnetic-field.png`}
          width={700}
          height={700}
          alt="Plot of magnetic field and magnetic force"
          unoptimized
        />
      </div>

      <p>The observations can be summarized into:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{F_B} &= q\boldsymbol{v} \times \boldsymbol{B}, \\
          F_B &= |q| v B \sin \theta.
        \end{align*}
      "/>

      <p>The unit of magnetic field is tesla (<InlineMath math="T"/>). From <InlineMath math="B = \frac{F_B}{|q|v}"/>, tesla is equal to:</p>
      <BlockMath math="T = \frac{N}{C\ m\ s^{-1}} = \frac{N}{A\ m}."/>
      <p>Another commonly used unit is gauss (<InlineMath math="G"/>), where <InlineMath math="1 T = 10^4 G"/>.</p>
      <p>Note that <InlineMath math="\boldsymbol{F_B}"/> is always perpendicular to the plane formed by <InlineMath math="\boldsymbol{v}"/> and <InlineMath math="\boldsymbol{B}"/> and cannot change the particle&apos;s speed <InlineMath math="v"/>. <InlineMath math="\boldsymbol{F_B}"/> does no work on the particle:</p>
      <BlockMath math="dW = \boldsymbol{F_B} \cdot d\boldsymbol{s} = q(\boldsymbol{v} \times \boldsymbol{v}) \cdot \boldsymbol{B}\ dt = 0."/>
      <p>However, the direction of <InlineMath math="\boldsymbol{v}"/> can be changed by <InlineMath math="\boldsymbol{F_B}"/>.</p>

      <LinkH2 id="magnetic-force-current">Magnetic Force on a Current</LinkH2>
      <p>A charged particle moving at a speed <InlineMath math="\boldsymbol{v}" /> experiences a magnetic force <InlineMath math="\boldsymbol{F_B}" />. Electric current is a collection of moving charged particles, meaning a wire carrying current also experiences the magnetic force.</p>

      <p>Consider a long straight wire suspended in the region between two magnetic poles. The magnetic field is illustrated by the black dots and flows out of the page. When a downward current is present, the wire is deflected to the left. However, when an upward current is present, the wire is deflected to the right:</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/magnetic-field/suspended-wire.svg`}
          width={550}
          height={550}
          alt="Suspended wire magnetic field"
        />
      </div>

      <p>Consider a segment of wire of length <InlineMath math="\ell" /> and cross-sectional area <InlineMath math="A" />. The magnetic field points into the page:</p>
      <div className="flex justify-center">
        <Image
          src={`${basePath}/assets/electricity-and-magnetism/magnetic-field/magnetic-field-wire.svg`}
          width={250}
          height={250}
          alt="Wire segment"
        />
      </div>
      <p>The charges move at an average drift velocity <InlineMath math="\boldsymbol{v_d}" /> and the total charge in this segment is:</p>
      <BlockMath math="Q = q n A \ell," />
      <p>where <InlineMath math="n" /> is the number of charges per unit volume. The total magnetic force on the segment is:</p>
      <BlockMath math="\boldsymbol{F_B} = Q \boldsymbol{v_d} \times \boldsymbol{B} = q n A l (\boldsymbol{v_d} \times \boldsymbol{B}) = I (\boldsymbol{\ell} \times \boldsymbol{B})," />
      <p>where <InlineMath math="I = n q v_d A" /> and <InlineMath math="\boldsymbol{\ell}" /> is vector with magnitude <InlineMath math="\ell" /> and with the same direction as the electric current.</p>

      <p>For a wire of arbitrary shape, the magnetic force is obtained by summing over the force acting on the small segments <InlineMath math="d\boldsymbol{s}" />:</p>
      <BlockMath math="
      \begin{align*}
        d \boldsymbol{F_B} &= I d\boldsymbol{s} \times \boldsymbol{B}, \\
        \boldsymbol{F_B} &= I \boldsymbol{B} \times \int_C d\boldsymbol{s}.
      \end{align*}
      " />

      <p>For a closed loop, the sum of the segments is zero, and thus the total force exerted is zero:</p>
      <BlockMath math="\boldsymbol{F_B} = \boldsymbol{F_B} = I \boldsymbol{B} \times \oint_C d\boldsymbol{s} = 0." />
    </div>
  )
}