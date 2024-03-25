import { k } from "./constants";
import * as math from "mathjs"

// epsilon - permittivity
export function coulombsLawForceMagnitude(
  q1: number,
  q2: number,
  r: number,
  epsilon = 1
) {
  return k / epsilon * Math.abs(q1 * q2) / (r ** 2)
}

export function coulombsLawForceVector(
  q1: number,
  q2: number,
  r1: math.Matrix,
  r2: math.Matrix,
  epsilon = 1
): math.Matrix {
  const r12 = math.subtract(r1, r2)
  const norm = math.number(math.norm(r12))
  const unit = math.divide(r12, norm)
  const force = math.multiply(k / epsilon * q1 * q2 / (norm ** 2), unit) as math.Matrix
  return force
}

// MUST BE DIVIDED BY sqrt(m)
export function eulerStepCoulombsLawMotionDiff(
  q1: number,
  q2: number,
  r1: math.Matrix,
  r2: math.Matrix,
  r0: number,
  h: number
): math.Matrix {
  const c = Math.sqrt(2 * k * Math.abs(q1 * q2) / r0)

  const r12 = math.subtract(r1, r2)
  const r12Norm = math.number(math.norm(r12))

  const sqrt = Math.sqrt(Math.abs(r12Norm - r0) / r12Norm)

  const rHat: math.Matrix = math.chain(r12)
    .divide(r12Norm)
    .multiply(-1 * Math.abs(q1 * q2))
    .done() as math.Matrix
  return math.multiply(h * c * sqrt, rHat)
}

// thanks, https://stackoverflow.com/a/27176424
function cuberoot(x: number) {
    var y = Math.pow(Math.abs(x), 1/3);
    return x < 0 ? -y : y;
}

export function solveCubic(a: number, b: number, c: number, d: number) {
    if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
        a = b; b = c; c = d;
        if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
            a = b; b = c;
            if (Math.abs(a) < 1e-8) // Degenerate case
                return [];
            return [-b/a];
        }

        var D = b*b - 4*a*c;
        if (Math.abs(D) < 1e-8)
            return [-b/(2*a)];
        else if (D > 0)
            return [(-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a)];
        return [];
    }

    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3*a*c - b*b)/(3*a*a);
    var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);
    var roots;

    if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
        roots = [cuberoot(-q)];
    } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
        roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
        var D = q*q/4 + p*p*p/27;
        if (Math.abs(D) < 1e-8) {       // D = 0 -> two roots
            roots = [-1.5*q/p, 3*q/p];
        } else if (D > 0) {             // Only one real root
            var u = cuberoot(-q/2 - Math.sqrt(D));
            roots = [u - p/(3*u)];
        } else {                        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
            var u = 2*Math.sqrt(-p/3);
            var t = Math.acos(3*q/p/u)/3;  // D < 0 implies p < 0 and acos argument in [-1..1]
            var k = 2*Math.PI/3;
            roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
        }
    }

    // Convert back from depressed cubic
    for (var i = 0; i < roots.length; i++)
        roots[i] -= b/(3*a);

    return roots;
}