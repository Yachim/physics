import Link from "next/link";
import { Metadata } from "next";
import { LinkH2 } from "@/components/LinkHeadings";
import { BlockMath, InlineMath } from "react-katex";
import getConfig from "next/config";
import Image from "next/image";
import { CovectorCurves } from "./components";

export const metadata: Metadata = {
  title: "Tensor Calculus Introduction"
}

export default async function Home() {
  const { publicRuntimeConfig: { basePath } } = getConfig()

  return (
    <div className="article">
      <Link href="/general-relativity/math-preliminaries">Back</Link>
      <h1>Tensor Calculus Introduction</h1>
      <p>Tensor calculus is an extension of vector calculus to tensor fields. These tensor fields may vary over a manifold. Tensor calculus makes use of indices:</p>
      <BlockMath math="
        \begin{align*}
          &x^{\mu} & &\textrm{contravariant}, \\          
          &x_{\mu} & &\textrm{covariant}.
        \end{align*}
      "/>

      <p>A vector <InlineMath math="\boldsymbol{x}"/> may be decomposed into a linear combination of components and basis vectors. In Cartesian coordinates, with components <InlineMath math="x,\ y,\ z"/> and basis vectors <InlineMath math="\boldsymbol{\hat{i}},\ \boldsymbol{\hat{j}},\ \boldsymbol{\hat{k}}"/>, <InlineMath math="\boldsymbol{x}"/> is equal to:</p>
      <BlockMath math="\boldsymbol{x} = x \boldsymbol{\hat{i}} + y \boldsymbol{\hat{j}} + z \boldsymbol{\hat{k}}."/>

      <p>For a general vector <InlineMath math="\boldsymbol{x}"/> with components <InlineMath math="x^{\mu}"/> and basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/>, the vector is equal to:</p>
      <BlockMath math="\boldsymbol{x} = \sum_{\mu} x^{\mu} \boldsymbol{e_{\mu}}."/>
      <p>Sums like these appear a lot in tensor calculus, so we use the Einstein summation convention - when an index appears twice - once as upper (contravariant) and once as lower (covariant), it implies summation over the set:</p>
      <BlockMath math="\boldsymbol{x} = x^{\mu} \boldsymbol{e_{\mu}}."/>

      <p>The vector <InlineMath math="\boldsymbol{x}"/> is invariant - the vector remains unchanged after transformations (in this context coordinate transformations). However, the components <InlineMath math="x^{\mu}"/> and the basis vectors <InlineMath math="\boldsymbol{e_{\mu}}"/> are variant.</p>
      <p>A general type-<InlineMath math="(n, m)" /> tensor <InlineMath math="T" /> is a linear combination of basis vectors <InlineMath math="\boldsymbol{e_{\mu}}" /> and basis covectors <InlineMath math="\epsilon^{\mu}" />:</p>
      <BlockMath math="T = T^{i_1 ... i_n}{}_{i_1 ... i_m} \boldsymbol{e_{i_1}} ... \boldsymbol{e_{i_n}} \epsilon^{i_1} ... \epsilon^{i_m}." />

      <LinkH2 id="vectors-and-covectors">Vectors and Covectors</LinkH2>
      <p>The vector is a member of vector space. A vector space is a collection <InlineMath math="(V, S, +, \cdot)" /> where <InlineMath math="V" /> is a set of vectors, <InlineMath math="S" /> is a set of scalars, <InlineMath math="+" /> is a vector addition rule and <InlineMath math="\cdot" /> is a vector scaling rule. Vectors are &quot;things&quot; that we can add together (<InlineMath math="+" />):</p>
      <BlockMath math="
        \begin{align*}
          (\boldsymbol{a} + \boldsymbol{b})^{\mu} &= a^{\mu} + b^{\mu}, \\
          \begin{bmatrix}
            a^1 \\
            a^2
          \end{bmatrix} + \begin{bmatrix}
            b^1 \\
            b^2
          \end{bmatrix} &= \begin{bmatrix}
            a^1 + b^1 \\
            a^2 + b^2
          \end{bmatrix},
        \end{align*}
      " />
      <p>and scale (<InlineMath math="\cdot" />):</p>
      <BlockMath math="
        \begin{align*}
          (n \boldsymbol{a})^{\mu} &= n a^{\mu}, \\
          n \begin{bmatrix}
            a^1 \\
            a^2
          \end{bmatrix} &= \begin{bmatrix}
            n a^1 \\
            n a^2
          \end{bmatrix}.
        \end{align*}
      " />

      <p>To start with covectors, they can be though of as row vectors <InlineMath math="\begin{bmatrix}x_1 & x_2\end{bmatrix}" /> (note the covariant index). Flipping a vector to a row vector only works in orthonormal basis (perpendicular bases and one unit long).</p>

      <p>We can think of row vector as a function on a column vector and to find a value we do the standard matrix multiplication:</p>
      <BlockMath math="
        \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
          b^1 \\          
          b^2
        \end{bmatrix}\right) = b^1 a_1 + b^2 a_2 = b^{\mu} a_{\mu}.
      " />

      <p>Covectors have two properties. The first one is we can add inputs or add outputs and get the same answers:</p>
      <BlockMath math="
        \begin{align*}
          a(\boldsymbol{b} + \boldsymbol{c}) &= a(\boldsymbol{b}) + a(\boldsymbol{c}), \\[1.5ex]
          \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            b^1 \\          
            b^2
          \end{bmatrix} + \begin{bmatrix}
            c^1 \\
            c^2        
          \end{bmatrix}\right) &= \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            b^1 + c^1 \\          
            b^2 + c^2
          \end{bmatrix}\right) \\
          &= (\boldsymbol{b} + \boldsymbol{c})^{\mu} a_{\mu} \\
          &= (b^{\mu} + c^{\mu}) a_{\mu}, \\
          \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            b^1 \\          
            b^2
          \end{bmatrix} + \begin{bmatrix}
            c^1 \\
            c^2        
          \end{bmatrix}\right) &= \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            b^1 \\          
            b^2
          \end{bmatrix}\right) + \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            c^1 \\
            c^2        
          \end{bmatrix}\right) \\
          &= b^{\mu} a_{\mu} + c^{\mu} a_{\mu} \\
          &= (b^{\mu} + c^{\mu}) a_{\mu}.
        \end{align*}
      " />

      <p>The second property is that we can scale the input or scale the output and get the same answers:</p>
      <BlockMath math="
        \begin{align*}
          a(n \boldsymbol{b}) &= n a(\boldsymbol{b}), \\[1.5ex]
          \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(n\begin{bmatrix}
            b^1 \\          
            b^2
          \end{bmatrix}\right) &= \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            n b^1 \\          
            n b^2
          \end{bmatrix}\right) \\ 
          &= a_1 n b^1 + a_2 n b^2 \\
          &= n (a_1 b^1 + a_2 b^2) \\
          &= n \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            b^1 \\          
            b^2
          \end{bmatrix}\right).
        \end{align*}
      " />

      <p>These two properties together are called linearity:</p>
      <BlockMath math="a(n \boldsymbol{b} + m \boldsymbol{c}) = n a(\boldsymbol{b}) + m a(\boldsymbol{c})." />

      <p>Vectors could be visualized by arrows. Covectors could also be visualized by vectors, but since they are functions, it would not be ideal. A better way is to use curves of constant output value <InlineMath math="C" />. Consider a covector with components <InlineMath math="a_{\mu}" /> and a vector with components <InlineMath math="x" /> and <InlineMath math="y" />:</p>
      <BlockMath math="
        \begin{align*}
          \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            x \\
            y          
          \end{bmatrix}\right) &= a_1 x + a_2 y = C, \\
          y &= \frac{C - a_1 x}{a_2}, \tag{\(a_2 \neq 0\)} \\
          x &= \frac{C - a_2 y}{a_1}, \tag{\(a_1 \neq 0\)} \\
        \end{align*}
      " />
      <p>if we represent the covector as an arrow, it will point perpendicular to the curves and into the direction of increase.</p>
      <CovectorCurves/>

      <p>From the applet, we can see that the output can be visualized as the number of lines the vector pierces.</p>

      <p>The following holds true for summing covectors:</p>
      <BlockMath math="
        \begin{align*}
          (a + b)(\boldsymbol{v}) &= a(\boldsymbol{v}) + b(\boldsymbol{v}), \\
          (\begin{bmatrix}a_1 & a_2\end{bmatrix} + \begin{bmatrix}b_1 & b_2\end{bmatrix}) \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right) &= (\begin{bmatrix}a_1 + b_1 & a_2 + b_2\end{bmatrix} \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right) \\
          &= (a_1 + b_1) v^1 + (a_2 + b_2) v^2 \\
          &= a_1 v^1 + b_1 v^1 + a_2 v^2 + b_2 v^2 \\
          &= a_1 v^1 + a_2 v^2 + b_1 v^1 + b_2 v^2 \\
          &= \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right) + \begin{bmatrix}b_1 & b_2\end{bmatrix} \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right),
        \end{align*}
      " />

      <p>and the following for scaling:</p>
      <BlockMath math="
        \begin{align*}
          (n a)(\boldsymbol{v}) &= n a(\boldsymbol{v}), \\
          (n\begin{bmatrix}a_1 & a_2\end{bmatrix}) \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right) &= (\begin{bmatrix}n a_1 & n a_2\end{bmatrix}) \left(\begin{bmatrix}
            v^1 \\
            v^2
          \end{bmatrix}\right) \\
          &= n a_1 v^1 + n a_2 v^2 \\
          &= n (a_1 v^1 + a_2 v^2) \\
          &= n \begin{bmatrix}a_1 & a_2\end{bmatrix} \left(\begin{bmatrix}
            v_1 \\
            v_2
          \end{bmatrix}\right)
        \end{align*}
      " />

      <p>A similar abstract definition can be made: covector is a member of dual vector space <InlineMath math="(V^*, S, +, \cdot)" />, where elements of <InlineMath math="V^*" /> are covectors, <InlineMath math="V \to \mathbb{R}" />. Below is a definition of vectors, covectors and their corresponding spaces:</p>
      <BlockMath math="
        \begin{align*}
          &\textrm{Vectors are members of vector space \((V, S, +, \cdot)\)} \quad       & \quad &\textrm{Covectors are members of dual vector space \((V^*, S, +, \cdot)\)} \\
          &\quad V \enspace \textrm{set of vectors}                                      &  &\quad V^* \enspace \textrm{set of covectors (functions) - } V \to \mathbb{R} \\
          &\quad S \enspace \textrm{set of scalars}                                      &  &\quad S \enspace \textrm{set of scalars} \\
          &\quad + \enspace (\boldsymbol{v} + \boldsymbol{w})^{\mu} = v^{\mu} + w^{\mu}  &  &\quad + \enspace (a + b)(\boldsymbol{v}) = a(\boldsymbol{v}) + b(\boldsymbol{v}) \\
          &\quad \cdot \enspace  (n \boldsymbol{v})^{\mu} = n v^{\mu}                    &  &\quad \cdot \enspace (n a) (\boldsymbol{v}) = n a(\boldsymbol{v}) \\[1.5ex]
          &                                                                              & \quad &\textrm{Additional properties (linearity):} \\
          &                                                                              &  &\quad a(\boldsymbol{v} + \boldsymbol{w}) = a(\boldsymbol{v}) + a(\boldsymbol{w}) \\
          &                                                                              &  &\quad a(n \boldsymbol{v}) = n a(\boldsymbol{v})
        \end{align*}
      " />

      <LinkH2 id="vectors-are-derivatives">Vectors Are Derivatives</LinkH2>
      <p>Consider a curve parametrized by <InlineMath math="\lambda" />, <InlineMath math="\boldsymbol{R}(\lambda)" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/curve.svg`}
          width={500}
          height={500}
          alt="Curve"
        />
      </div>
      <p>where the green vector is the tangent vector in the limiting case when <InlineMath math="h \to 0" />:</p>
      <BlockMath math="\lim_{h \to 0} \frac{\boldsymbol{R}(\lambda + h) - \boldsymbol{R}(\lambda)}{h} = \frac{d\boldsymbol{R}}{d\lambda}." />
      <p>By chain rule, the tangent vector may be written out:</p>
      <BlockMath math="
        \begin{align*}
          \frac{d\boldsymbol{R}}{d\lambda} &= \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} \frac{d R^{\mu}}{d \lambda}.
        \end{align*}
      " />

      <p>Note: the terms are summed over the <InlineMath math="\mu" /> components. The term <InlineMath math="\frac{d R^{\mu}}{d \lambda}" /> makes sense, it&apos;s just the derivative of components of <InlineMath math="\boldsymbol{R}" />. But the <InlineMath math="\frac{\partial \boldsymbol{R}}{\partial R^{\mu}}" /> may look a bit weird. To make sense of it, remember that <InlineMath math="\boldsymbol{R}" /> is the linear combination of the components <InlineMath math="R^{\mu}" /> and basis vectors <InlineMath math="\boldsymbol{e_{\mu}}" />:</p>
      <BlockMath math="
        \begin{align*}
          \boldsymbol{R} &= R^{\mu} \boldsymbol{e_{\mu}}, \\
          \frac{\partial \boldsymbol{R}}{\partial R^{\mu}} &= \frac{\partial}{\partial R^{\mu}} \left(R^{\mu} \boldsymbol{e_{\mu}}\right) \\
          &= \frac{\partial}{\partial R^{\mu}} \left(R^1 \boldsymbol{e_1} + ... + R^{\mu} \boldsymbol{e_{\mu}} + ...\right) \\
          &= \frac{\partial}{\partial R^{\mu}} \left(R^1 \boldsymbol{e_1}\right) + ... + \frac{\partial}{\partial R^{\mu}} \left(R^{\mu} \boldsymbol{e_{\mu}}\right) + ... \\
          &= 0 + ... + \boldsymbol{e_{\mu}} + ... \\
          &= \boldsymbol{e_{\mu}},
        \end{align*}
      " />

      <p>meaning the partial derivative of vector with respect to its component is the basis vector of that component:</p>
      <BlockMath math="\frac{\partial \boldsymbol{R}}{\partial R^{\mu}} = \boldsymbol{e_{\mu}}," />
      <p>however, this definition when we work with intrinsic definitions (if we live on the curve on the image above, we don&apos;t have an origin, thus we cannot specify <InlineMath math="\boldsymbol{R}" />), we have to use a different definition:</p>
      <BlockMath math="\frac{\partial}{\partial x^{\mu}} \equiv \boldsymbol{e_{\mu}}," />
      <p>where I replaced <InlineMath math="R^{\mu}" /> with <InlineMath math="x^{\mu}" />. I will sometimes use <InlineMath math="\frac{\partial \boldsymbol{R}}{\partial R^{\mu}}" /> and sometimes <InlineMath math="\frac{\partial}{\partial x^{\mu}}" />. This new definition is on vector space of derivative operators, also called tangent vector space <InlineMath math="T_p M" /> - vector space of derivatives at point <InlineMath math="p" /> on the surface <InlineMath math="M" />.</p>

      <LinkH2 id="covectors-are-differentials">Covectors Are Differential Forms</LinkH2>
      <p>The fact that covectors may be represented by differentials may seem a bit weird initially - how does a covector relate to the differential (e.g. <InlineMath math="dx" />) as are in derivatives and integrals. The multivariable differential is equal to:</p>
      <BlockMath math="df = \frac{\partial f}{\partial x^{\mu}} dx^{\mu}," />
      <p>or in one dimension:</p>
      <BlockMath math="df = \frac{d f}{d x^{\mu}} dx^{\mu}." />

      <p>We are used that for a variable <InlineMath math="x" />, the differential <InlineMath math="dx" /> means a small change in <InlineMath math="x" />. We need to redefine it such that <InlineMath math="f" /> is a scalar field and <InlineMath math="df" /> is a covector field.</p>
      <p>Consider a function <InlineMath math="f(x,y) = x + y" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/differential-function.png`}
          width={600}
          height={600}
          alt="Plot of f(x,y) = x + y"
          unoptimized
        />
      </div>

      <p>The differential <InlineMath math="df" /> is equal to:</p>
      <BlockMath math="
        \begin{align*}
          df &= \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy \\
          &= dx + dy,
        \end{align*}
      " />

      <p>where <InlineMath math="dx" /> and <InlineMath math="dy" /> are the dual basis (will be explained later). The covector field may also be written as follows:</p>
      <BlockMath math="df = \begin{bmatrix}1 & 1\end{bmatrix}." />

      <p>If we input this covector into the <Link href="#covector-curves-plot">applet above</Link>, we can visualize the covector field. The lines are the levels of constant <InlineMath math="f" />:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/differential-covector.png`}
          width={700}
          height={700}
          alt="Covector visualization"
          unoptimized
        />
      </div>

      <p>The covector <InlineMath math="df(\boldsymbol{v})" /> is proportional to the steepness of <InlineMath math="f" /> and to the length of <InlineMath math="\boldsymbol{v}" />. From this, we can say that <InlineMath math="df(\boldsymbol{v})" /> gives us the rate of change of <InlineMath math="f" /> when moving in the direction of <InlineMath math="\boldsymbol{v}" />, which is the directional derivative of <InlineMath math="f" /> in the direction of <InlineMath math="\boldsymbol{v}" />:</p>
      <BlockMath math="df(\boldsymbol{v}) = \nabla_{\boldsymbol{v}} f = \frac{\partial f}{\partial \boldsymbol{v}}." />

      <p>Consider covector field <InlineMath math="df" /> acts on the basis vectors <InlineMath math="\frac{\partial}{\partial x}" /> and <InlineMath math="\frac{\partial}{\partial y}" />:</p>
      <BlockMath math="
        \begin{align*}
          df \left(\frac{\partial}{\partial x}\right) &= \frac{\partial f}{\partial x}, \tag{directional derivative of \(f\) in the \(x\) direction} \\
          df \left(\frac{\partial}{\partial y}\right) &= \frac{\partial f}{\partial y}. \tag{directional derivative of \(f\) in the \(y\) direction} \\
        \end{align*}
      " />

      <p>Now, consider the scalar field <InlineMath math="x" />, where the value is just the value of <InlineMath math="x" /> at the point:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/x.png`}
          width={600}
          height={600}
          alt="Plot of x"
          unoptimized
        />
      </div>

      <p>the covector field <InlineMath math="dx" /> looks like this:</p>
      <div className="w-full flex justify-center">
        <Image
          src={`${basePath}/assets/general-relativity/math-preliminaries/tensor-calculus-intro/dx.png`}
          width={600}
          height={600}
          alt="Plot of dx"
          unoptimized
        />
      </div>
      <p>and the covector field <InlineMath math="dx" /> acts on the basis vectors <InlineMath math="\frac{\partial}{\partial x}" /> and <InlineMath math="\frac{\partial}{\partial y}" /> as follows:</p>
      <BlockMath math="
        \begin{align*}
          dx \left(\frac{\partial}{\partial x}\right) &= \frac{\partial x}{\partial x} = 1, \tag{directional derivative of \(x\) in the \(x\) direction} \\
          dx \left(\frac{\partial}{\partial y}\right) &= \frac{\partial x}{\partial y} = 0. \tag{directional derivative of \(x\) in the \(y\) direction} \\
        \end{align*}
      " />

      <p>Similarly, the covector field <InlineMath math="dy" /> acts on the basis vectors <InlineMath math="\frac{\partial}{\partial x}" /> and <InlineMath math="\frac{\partial}{\partial y}" /> as follows:</p>
      <BlockMath math="
        \begin{align*}
          dy \left(\frac{\partial}{\partial x}\right) &= \frac{\partial y}{\partial x} = 0, \tag{directional derivative of \(y\) in the \(x\) direction} \\
          dy \left(\frac{\partial}{\partial y}\right) &= \frac{\partial y}{\partial y} = 1. \tag{directional derivative of \(y\) in the \(y\) direction} \\
        \end{align*}
      " />

      <p>So we introduce special covectors <InlineMath math="\epsilon^{\mu}" /> called the dual basis, such that:</p>
      <BlockMath math="\epsilon^{\mu} (\boldsymbol{e_{\nu}}) = \delta^{\mu}_{\nu}," />
      <p>where <InlineMath math="\delta^{\mu}_{\nu}" /> is the Kronecker delta:</p>
      <BlockMath math="\delta^{\mu}_{\nu} = \begin{cases}
        1 & \mu &= \nu, \\
        0 & \mu &\neq \nu.
      \end{cases}" />

      <p>Which is identical to the previous equations with differentials and derivatives:</p>
      <BlockMath math="dx^{\mu} \left(\frac{\partial}{\partial x^{\nu}}\right) = \frac{\partial x^{\mu}}{\partial x^{\nu}} = \delta^{\mu}_{\nu}." />

      <p>The derivative of <InlineMath math="f" /> with respect to <InlineMath math="\lambda" /> may be rewritten as the covector <InlineMath math="df" /> acting on the vector <InlineMath math="\frac{d}{d \lambda}" />:</p>
      <BlockMath math="\frac{df}{d\lambda} = df \left(\frac{d}{d \lambda}\right)." />
    </div>
  )
}