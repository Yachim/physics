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

      <p>In both cases the molecules generate an electric field <InlineMath math="\boldsymbol{E_p}"/> in the direction opposite to <InlineMath math="\boldsymbol{E_0}"/> The total electric field is:</p>
      <BlockMath math="
        \boldsymbol{E} = \boldsymbol{E_0} + \boldsymbol{E_p},
      "/>
      <p>implying <InlineMath math="|\boldsymbol{E}| < |\boldsymbol{E_0}|"/>.</p>

      <LinkH2 id="polarization">Polarization</LinkH2>
    </div>
  )
}
