import { Metadata } from "next"
import Link from "next/link"
import getConfig from "next/config"
import { BlockMath, InlineMath } from "react-katex"
import Image from "next/image"
import { LinkH2 } from "@/components/LinkHeadings"

export const metadata: Metadata = {
  title: "Dielectrics and Polarization"
}

export default async function Page() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/electricity-and-magnetism">Back</Link>
      <h1>Dielectrics and Polarization</h1>
      <p>In many capacitors there is an insulating material between the plates, called a dielectric. They can be used to maintain separation between the plates. It has been found that the capacitance increases when filled with dielectric:</p>
      <BlockMath math="C = k_e C_0,"/>
      <p>where <InlineMath math="C_0"/> is the capacitance without the dielectric and <InlineMath math="k_e"/> is the dielectric constant. Each dielectric has a maximum value of electric field before the dielectric breaks down, called the dielectric strength. Below is a table of dielectric materials:</p>
      <table className="mx-[20%]">
        <colgroup>
          <col className="w-1/3" />
          <col className="w-1/3" />
          <col className="w-1/3" />
        </colgroup>
        <tbody>
          <tr>
            <th>Material</th>
            <th><InlineMath math="\boldsymbol{\kappa_e}"/></th>
            <th>Dielectric strength</th>
          </tr>
          <tr>
            <td>Air</td>
            <td>1.00059</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Paper</td>
            <td>3.7</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Glass</td>
            <td>4-6</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Water</td>
            <td>80</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <p>There are two types of dielectrics: polar and non polar. Polar have permanent electric dipole moments, an example is water. Non polar dielectrics don&apos;t have permanent electric dipole moments but when an external electric field <InlineMath math="\boldsymbol{E_0}"/> is present, the electric dipole moments are induced.</p>

      <table className="mx-[20%]">
        <tbody>
          <tr>
            <th></th>
            <th><InlineMath math="\boldsymbol{E_0} = 0"/></th>
            <th><InlineMath math="\boldsymbol{E_0} \neq 0"/></th>
          </tr>
          <tr>
            <td>Polar</td>
            <td className="p-0">
              <Image
                src={`${basePath}/assets/dielectrics/polar.svg`}
                width={350}
                height={350}
                alt="Serial resistors illustration"
              />
            </td>
            <td className="p-0">
              <Image
                src={`${basePath}/assets/dielectrics/polarEField.svg`}
                width={350}
                height={350}
                alt="Serial resistors illustration"
              />
            </td>
          </tr>
          <tr>
            <td>Non polar</td>
            <td className="p-0">
              <Image
                src={`${basePath}/assets/dielectrics/nonpolar.svg`}
                width={350}
                height={350}
                alt="Serial resistors illustration"
              />
            </td>
            <td className="p-0">
              <Image
                src={`${basePath}/assets/dielectrics/nonpolarEField.svg`}
                width={350}
                height={350}
                alt="Serial resistors illustration"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <p>In both cases <InlineMath math="\boldsymbol{E_0}" /> points to the right and the molecules generate an electric field <InlineMath math="\boldsymbol{E_P}"/> in the direction opposite to <InlineMath math="\boldsymbol{E_0}"/> The total electric field is:</p>
      <BlockMath math="
        \boldsymbol{E} = \boldsymbol{E_0} + \boldsymbol{E_P},
      "/>
      <p>implying <InlineMath math="|\boldsymbol{E}| < |\boldsymbol{E_0}|"/>.</p>

      <LinkH2 id="polarization">Polarization</LinkH2>
      <p>To calculate the average electric fields that the dipoles produce, suppose a cylinder of surface area <InlineMath math="A"/> and height <InlineMath math="h"/> with <InlineMath math="N" /> uniformly spread electric dipole moments <InlineMath math="\boldsymbol{p}"/>:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/dielectrics/polarization.svg`}
          width={150}
          height={150}
          alt="Polarization vectors"
        />
      </div>

      <p>The polarization vector is the net electric dipole moment per unit volume:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{P} &= \frac{1}{Ah} \sum_{i=1}^N \boldsymbol{p_i}, \\
          P &= \frac{Np}{Ah}.
        \end{align*}
      " />

      <p>The inner dipoles cancel each other out and the only dipoles left are at the edges:</p>

      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/dielectrics/polarization2.svg`}
          width={150}
          height={150}
          alt="Dipoles in cylinder"
        />
        <Image
          src={`${basePath}/assets/dielectrics/polarization3.svg`}
          width={150}
          height={150}
          alt="Dipoles cancellation"
        />
      </div>

      <p>The charge <InlineMath math="Q_P" /> produces the same electric dipole moment as the total electric dipole moments produced by the small dipoles:</p>
      <BlockMath math="
        \begin{align*}
          Q_P h &= Np, \\
          Q_P &= \frac{Np}{h}.
        \end{align*}
      " />

      <p>The surface charge density is equal to:</p>
      <BlockMath math="\sigma_P = \frac{Q_P}{A} = \frac{Np}{Ah} = P." />

      <p>In general, the surface charge density is equal to:</p>
      <BlockMath math="\sigma_P = \boldsymbol{P} \cdot \boldsymbol{\hat{n}} = P \cos \theta," />
      <p>where <InlineMath math="\boldsymbol{\hat{n}}" /> is normal vector of the surface and <InlineMath math="\theta" /> the angle between the normal and the polarization vector.</p>

      <p>The electric field is constant on the surface of the cylinder. By Gauss&apos;s law:</p>
      <BlockMath math="
        \begin{align*}
          \oiint_S \boldsymbol{E_P} \cdot d\boldsymbol{A} &= \frac{Q}{\epsilon_0}, \\
          E_P A &= \frac{Q}{\epsilon_0}, \\
          E_P &= \frac{\sigma_P}{\epsilon_0} \\
          &= \frac{P}{\epsilon_0}.
        \end{align*}
      " />

      <p>Since the electric field is opposite to <InlineMath math="\boldsymbol{P}" />, <InlineMath math="\boldsymbol{E_P}" /> is equal to:</p>
      <BlockMath math="\boldsymbol{E_P} = -\frac{\boldsymbol{P}}{\epsilon_0}." />

      <p>The total electric field is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= \boldsymbol{E_0} + \boldsymbol{E_P} \\
          &= \boldsymbol{E_0} - \frac{\boldsymbol{P}}{\epsilon_0}.
        \end{align*}
      " />

      <p>The polarization <InlineMath math="\boldsymbol{P}" /> is linearly proportional to <InlineMath math="\boldsymbol{E}" />:</p>
      <BlockMath math="\boldsymbol{P} = \epsilon_0 \chi_0 \boldsymbol{E}," />
      <p>where <InlineMath math="\chi_0" /> is the electric susceptibility.</p>

      <p>Substituting into the previous equation:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{E} &= \boldsymbol{E_0} - \chi_0 \boldsymbol{E}, \\
          \boldsymbol{E_0} &= \boldsymbol{E} (1 + \chi_0) \\
          &= \kappa_e \boldsymbol{E}.
        \end{align*}
      " />
      <p>where <InlineMath math="\kappa_e = 1 + \chi_0" />.</p>

      <p><InlineMath math="\kappa_e" /> is always greater than one, implying:</p>
      <BlockMath math="\boldsymbol{E} = \frac{\boldsymbol{E_0}}{\kappa_e} < \boldsymbol{E_0}." />
      <p>The electric field in the presence of dielectric material is lower than the electric field without it.</p>

      <LinkH2 id="gauss-law-dielectrics">Gauss&apos;s Law for Dielectrics</LinkH2>
      <p>In the absence of dielectric, the electric field is equal to:</p>
      <BlockMath math="
        \begin{align*}
          \oiint_S \boldsymbol{E_0} \cdot d\boldsymbol{A} &= \frac{Q}{\epsilon_0}, \\
          E_0 A &= \frac{Q}{\epsilon_0}, \\
          E_0 &= \frac{\sigma}{\epsilon_0}.
        \end{align*}
      " />

      <p>In the presence of a dielectric a second charge <InlineMath math="Q_P" /> gets induced:</p>
      <div className="w-full flex justify-center gap-20">
        <Image
          src={`${basePath}/assets/dielectrics/gauss-law-dielectrics.svg`}
          width={700}
          height={700}
          alt="Gauss law for dielectrics"
        />
      </div>
      <p>where the orange border is the gaussian surface. The charge enclosed is <InlineMath math="Q - Q_P" />. Using Gauss&apos;s law:</p>
      <BlockMath math="
        \begin{align*}
          \oiint_S \boldsymbol{E} \cdot d\boldsymbol{A} &= \frac{Q - Q_P}{\epsilon_0}, \\
          E A &= \frac{Q - Q_P}{\epsilon_0}, \\
          E &= \frac{Q - Q_P}{\epsilon_0 A}.
        \end{align*}
      " />

      <p>As found earlier, the electric field is weakened by the dielectric material:</p>
      <BlockMath math="
        \begin{align*}
          E &= \frac{E_0}{\kappa_e} = \frac{\sigma}{\kappa_e \epsilon_0} = \frac{Q - Q_P}{\epsilon_0 A}, \\
          \frac{\sigma}{\kappa_e \epsilon_0} &= \frac{Q - Q_P}{\epsilon_0 A}, \\
          \frac{Q - Q_P}{\epsilon_0} &= \frac{Q}{\kappa_e \epsilon_0},
        \end{align*}
      " />
      <p>substituting into Gauss&apos;s law:</p>
      <BlockMath math="
        \begin{align*}
          \oiint_S \boldsymbol{E} \cdot d\boldsymbol{A} &= \frac{Q}{\kappa_e \epsilon_0}, \\
          \oiint_S \kappa_e \epsilon_0 \boldsymbol{E} \cdot d\boldsymbol{A} &= Q, \\
          \oiint_S \boldsymbol{D} \cdot d\boldsymbol{A} &= Q,
        \end{align*}
      " />
      <p>wher\epsilone <InlineMath math="\boldsymbol{D} = \kappa_e \epsilon_0 \boldsymbol{E}" /> is called the dielectric displacement vector.</p>

      <LinkH2 id="capacitance-with-dielectrics">Capacitance with Dielectrics</LinkH2>
    </div>
  )
}
