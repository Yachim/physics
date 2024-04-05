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
    </div>
  )
}