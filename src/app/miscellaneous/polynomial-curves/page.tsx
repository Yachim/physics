import { LinkH2 } from "@/components/LinkHeadings";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import { Metadata } from "next";
import { matrixToLatex } from "@/utils/misc";
import { Suspense } from "react";
import { geometrizedBackwardMatrix, geometrizedForwardMatrix } from "@/utils/units";
import { CurveDrawing } from "./components";

export const metadata: Metadata = {
  title: "Polynomial curves"
}

export default async function Home() {
  return (
    <div className="article">
      <Link href="/miscellaneous">Back</Link>
      <h1>Polynomial Curves</h1>
      <p>Consider an <InlineMath math="n" />th degree polynomial curve <InlineMath math="\boldsymbol{R}" /> parametrized by <InlineMath math="t" />:</p>
      <BlockMath math="\boldsymbol{R}(t) = \sum_{i=0}^n \boldsymbol{A_i} t^i," />
      <p>with the initial conditions:</p>
      <BlockMath math="\boldsymbol{R}(t_j) = \boldsymbol{P_j}," />
      <p>where <InlineMath math="t_i \in [0, 1]" />.</p>

      The initial conditions imply:
      <BlockMath math="
        \sum_{i=0}^n \boldsymbol{A_i} t_j^i = \boldsymbol{P_j},
      "/>
      <p>this may be represented as matrix multiplication:</p>
      <BlockMath math="
        \begin{bmatrix}t_j^0 & \dots & t_j^n\end{bmatrix} \begin{bmatrix}
          \boldsymbol{A_0} \\
          \vdots \\
          \boldsymbol{A_n}
        \end{bmatrix} = \boldsymbol{P_j},
      "/>
      <p>or:</p>
      <BlockMath math="
        \begin{bmatrix}
          t_0^0 & \dots & t_0^n \\
          \vdots & \ddots & \vdots \\
          t_n^0 & \dots & t_n^n
        \end{bmatrix} \begin{bmatrix}
          \boldsymbol{A_0} \\
          \vdots \\
          \boldsymbol{A_n}
        \end{bmatrix} = \begin{bmatrix}
          \boldsymbol{P_0} \\
          \vdots \\
          \boldsymbol{P_n}
        \end{bmatrix}.
      "/>

      <p>Solving for <InlineMath math="A_i"/>:</p>
      <BlockMath math="
        \begin{bmatrix}
          \boldsymbol{A_0} \\
          \vdots \\
          \boldsymbol{A_n}
        \end{bmatrix} =  \begin{bmatrix}
          t_0^0 & \dots & t_0^n \\
          \vdots & \ddots & \vdots \\
          t_n^0 & \dots & t_n^n
        \end{bmatrix}^{-1} \begin{bmatrix}
          \boldsymbol{P_0} \\
          \vdots \\
          \boldsymbol{P_n}
        \end{bmatrix}.
      " />
      <CurveDrawing/>
    </div>
  )
}