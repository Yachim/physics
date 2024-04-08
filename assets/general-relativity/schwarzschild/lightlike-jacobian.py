from sympy import atan, sin, cos, sqrt, Matrix, symbols, latex, simplify
from sympy.abc import t, r, theta, phi

t_tilde = symbols("ttilde")
r_tilde = symbols("rtilde")
theta_tilde = symbols("thetatilde")
phi_tilde = symbols("phitilde")
r0 = symbols("r_0")

F = Matrix([
    t_tilde,
    sqrt(r_tilde ** 2 * sin(phi_tilde) ** 2 - (r0 - r_tilde * cos(phi_tilde)) ** 2),
    theta_tilde,
    atan((r_tilde * sin(phi_tilde)) / (r0 - r_tilde * cos(phi_tilde)))
])
J = F.jacobian([t_tilde, r_tilde, theta_tilde, phi_tilde])

B = Matrix([
    t,
    sqrt(r ** 2 * sin(phi) ** 2 - (r0 - r * cos(phi)) ** 2),
    theta,
    atan((r * sin(phi)) / (r0 - r * cos(phi)))
])
Jinv = B.jacobian([t, r, theta, phi])
print(latex(simplify(J), inv_trig_style = "power", fold_func_brackets = True))
print(latex(simplify(Jinv), inv_trig_style = "power", fold_func_brackets = True))