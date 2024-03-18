import * as math from "mathjs"

export const geometrizedBackwardMatrix = math.matrix([
    [-1, -2, 0, 0, 0, 0, 0],
    [1, 3, 0, 0, 0, 0, 0],
    [0, -1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
])
export const geometrizedForwardMatrix = math.inv(geometrizedBackwardMatrix)