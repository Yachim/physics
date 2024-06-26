"use client"

import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard"
import { getSchwarzschildTimeVelocity, schwarzschildEulerStep } from "@/utils/calculations";
import { c } from "@/utils/constants";
import { cartesianToSpherical, clampAngle, sphericalToCartesian, toScientific } from "@/utils/misc";
import { addExtraConst, frequencyUnitSI, fromSI, lengthUnitSI, timeUnitSI, toSI, velocityUnitSI } from "@/utils/units";
import { index } from "mathjs";

// 0.1 AU
const timelikeGeodesicsFactor = 15e9
const lightlikeGeodesicsFactor = 15e9

const fps = 30
const timeInterval = 1 / fps

export function TimelikeGeodesics(props: BoardProps) {
  return (
    <CustomJXGBoard id="timelike-geodesics-plot" {...props} axis={false} bbox={props.bbox ?? [-16 * timelikeGeodesicsFactor, 9 * timelikeGeodesicsFactor, 16 * timelikeGeodesicsFactor, -9 * timelikeGeodesicsFactor]} initFn={(board: JXG.Board) => {
        board.create('axis', [[0,0], [1,0]], {
            ticks: {
                type: "polar",
                label: {
                    offset:[0, -3], 
                    anchorX: 'middle', 
                    anchorY: 'top'
                }
            }
        });

        board.create('axis', [[0,0], [0,1]], {
            ticks: {
                majorHeight: 0,
                tickEndings: [1, 0],
                label: {
                    offset: [-6, 0], 
                    anchorY: 'middle', 
                    anchorX: 'right'
                }
            }
        });

        let playing = false

        const massInput = board.create("input", [-15 * timelikeGeodesicsFactor, 8 * timelikeGeodesicsFactor, 2e30, "$M =\\ $"], {frozen: true})
        board.create("point", [0, 0], {fixed: true, name: "M", color: "orange"})
        board.create("circle", [[0, 0], () => toSI(2, lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))], {fixed: true, color: "#3d3d3d"})
        const orbitingPoint = board.create("point", [150e9, 0], {name: "m", color: "blue", visible: () => !playing})
        const orbitingPointPlaying = board.create("point", [150e9, 0], {name: "m", color: "blue", visible: () => playing, fixed: true})

        const initialRadialVelocityInput = board.create("input", [-15 * timelikeGeodesicsFactor, 7 * timelikeGeodesicsFactor, 0, "$U^r_0 =\\ $"], {frozen: true})
        const initialAngularVelocityInput = board.create("input", [-15 * timelikeGeodesicsFactor, 6 * timelikeGeodesicsFactor, 1.99e-7, "$U^{\\phi}_0 =\\ $"], {frozen: true})

        board.create("button", [-15 * timelikeGeodesicsFactor, 4 * timelikeGeodesicsFactor, () => playing ? "Stop" : "Play", () => playing = !playing], {frozen: true})

        const timeScaleInput = board.create("input", [-15 * timelikeGeodesicsFactor, 5 * timelikeGeodesicsFactor, 31_536_000 / 5, "Time Scale: "], {frozen: true}) // fifth of earth's orbital period

        function getInitialCoordinates(): [number, number, number] {
            return [0, ...cartesianToSpherical(orbitingPoint.X(), orbitingPoint.Y())]
        }

        function getInitialCoordinatesGeo(): [number, number, number] {
            return [0, ...cartesianToSpherical(
                fromSI(orbitingPoint.X(), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value())),
                fromSI(orbitingPoint.Y(), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value())),
            )]
        }

        function getInitialVelocitiesGeo(): [number, number, number] {
            const uR = +initialRadialVelocityInput.Value()
            const uPhi = +initialAngularVelocityInput.Value()

            const rGeo = fromSI(Math.sqrt(orbitingPoint.X() ** 2 + orbitingPoint.Y() ** 2), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uRGeo = fromSI(uR, velocityUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uPhiGeo = fromSI(uPhi, frequencyUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            // dimensionless
            const uTGeo = getSchwarzschildTimeVelocity(rGeo, uRGeo, uPhiGeo)

            return [uTGeo, uRGeo, uPhiGeo]
        }

        let tau = 0
        let coordinates = getInitialCoordinatesGeo()
        let velocities = getInitialVelocitiesGeo()

        const currentDataText = board.create("text", [12 * timelikeGeodesicsFactor, 6.5 * timelikeGeodesicsFactor, () => {
            const tauSI = toSI(tau, timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            const tSI = toSI(coordinates[0], timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const rSI = toSI(coordinates[1], lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const phi = clampAngle(coordinates[2])

            const uT = velocities[0]
            const uRSI = toSI(velocities[1], velocityUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uPhiSI = toSI(velocities[2], frequencyUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            return String.raw`$\begin{align*}
                \tau &= ${toScientific(tauSI)}\ s \\
                X &= \begin{bmatrix}
                    ${[tSI, rSI, phi].map(toScientific).join("\\\\ \n")}
                \end{bmatrix} \\
                U &= \begin{bmatrix}
                    ${[uT, uRSI, uPhiSI].map(toScientific).join("\\\\ \n")}
                \end{bmatrix}
            \end{align*}$`
        }], {frozen: true})

        setInterval(function() {
            if (!playing) {
                orbitingPointPlaying.moveTo([orbitingPoint.X(), orbitingPoint.Y()])
                coordinates = getInitialCoordinatesGeo()
                velocities = getInitialVelocitiesGeo()
                tau = 0
                currentDataText.update()
                return
            }

            const h: number = fromSI(timeInterval * (+timeScaleInput.Value()), timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            const [newCoordinates, newVelocities] = schwarzschildEulerStep(coordinates, velocities, h)
            coordinates = newCoordinates
            velocities = newVelocities
            tau += h

            currentDataText.update()

            const rSI = toSI(coordinates[1], lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const phi = coordinates[2]

            orbitingPointPlaying.moveTo(sphericalToCartesian(rSI, phi))
        }, timeInterval * 1000)

        board.create("text", [7 * timelikeGeodesicsFactor, 6.19 * timelikeGeodesicsFactor, () => String.raw`$\begin{align*}
            X_0 &= \begin{bmatrix}
                ${getInitialCoordinates().map(toScientific).join("\\\\ \n")}
            \end{bmatrix} \\
            U_0 &= \begin{bmatrix}
                ${getInitialVelocitiesGeo().map(toScientific).join("\\\\ \n")}
            \end{bmatrix}
        \end{align*}$`], {frozen: true})
    }} />
  )
}

export function LightlikeGeodesics(props: BoardProps) {
  return (
    <CustomJXGBoard id="lightlike-geodesics-plot" {...props} axis={false} bbox={props.bbox ?? [-16 * lightlikeGeodesicsFactor, 9 * lightlikeGeodesicsFactor, 16 * lightlikeGeodesicsFactor, -9 * lightlikeGeodesicsFactor]} initFn={(board: JXG.Board) => {
        board.create('axis', [[0,0], [1,0]], {
            ticks: {
                type: "polar",
                label: {
                    offset:[0, -3], 
                    anchorX: 'middle', 
                    anchorY: 'top'
                }
            }
        });

        board.create('axis', [[0,0], [0,1]], {
            ticks: {
                majorHeight: 0,
                tickEndings: [1, 0],
                label: {
                    offset: [-6, 0], 
                    anchorY: 'middle', 
                    anchorX: 'right'
                }
            }
        });

        let playing = false

        const massInput = board.create("input", [-15 * lightlikeGeodesicsFactor, 8 * lightlikeGeodesicsFactor, 2e30, "$M =\\ $"], {frozen: true})
        board.create("point", [0, 0], {fixed: true, name: "M", color: "orange"})
        board.create("circle", [[0, 0], () => toSI(2, lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))], {fixed: true, color: "#3d3d3d"})
        const sourcePoint = board.create("point", [-150e9, 0], {name: "S", color: "yellow"})

        const raysNumberInput = board.create("input", [-15 * lightlikeGeodesicsFactor, 7 * lightlikeGeodesicsFactor, 10, "Number of rays: "], {frozen: true})
        const phiAInput = board.create("input", [-15 * lightlikeGeodesicsFactor, 6 * lightlikeGeodesicsFactor, 0, "$\\tilde{\\phi}_A$: "], {frozen: true})
        const phiBInput = board.create("input", [-15 * lightlikeGeodesicsFactor, 5 * lightlikeGeodesicsFactor, 2 * Math.PI, "$\\tilde{\\phi}_B$: "], {frozen: true})
        const timeScaleInput = board.create("input", [-15 * lightlikeGeodesicsFactor, 4 * lightlikeGeodesicsFactor, 48, "Time Scale: "], {frozen: true}) // 8 minutes
        board.create("button", [-15 * lightlikeGeodesicsFactor, 3 * lightlikeGeodesicsFactor, () => playing ? "Stop" : "Play", () => playing = !playing], {frozen: true})

        function getInitialCoordinatesGeo(): [number, number, number] {
            return [0, ...cartesianToSpherical(
                fromSI(sourcePoint.X(), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value())),
                fromSI(sourcePoint.Y(), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value())),
            )]
        }

        function getInitialVelocitiesGeo(phiTilde: number): [number, number, number] {
            const rGeo = fromSI(Math.sqrt(sourcePoint.X() ** 2 + sourcePoint.Y() ** 2), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uRGeo = -Math.cos(phiTilde)
            const uPhiGeo = Math.sin(phiTilde) / rGeo

            const uTGeo = Math.sqrt(1 / (1 - 2 / rGeo) * (1 / (1 - 2 / rGeo) * Math.cos(phiTilde) ** 2 + Math.sin(phiTilde) ** 2))

            return [uTGeo, uRGeo, uPhiGeo]
        }

        function getDeltaLambda(
            coords: [number, number, number],
            velocities: [number, number, number],
            deltaT: number
        ): number {
            const r = coords[1]
            const [_, uR, uPhi] = velocities
            return ((2 - 2 / r) ** (-2) * uR ** 2 + r ** 2 * (1 - 2 / r) ** (-1) * uPhi ** 2) ** (-0.5) * deltaT
        }

        let tGeo = 0
        const timeText = board.create("text", [12 * lightlikeGeodesicsFactor, 8 * lightlikeGeodesicsFactor, () => {
            const tSI = toSI(tGeo, timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            return String.raw`$t = ${toScientific(tSI)}\ s$`
        }], {frozen: true})

        let points: [
            JXG.Point,
            [number, number, number], // coords
            [number, number, number] // velocities
        ][] = []

        setInterval(() => {
            if (!playing) {
                tGeo = 0
                timeText.needsUpdate = true
                timeText.update()
                points.forEach(el => board.removeObject(el[0]))
                points = []
                return
            }

            if (points.length === 0) {
                const coords = getInitialCoordinatesGeo()
                const angleStep = (+phiBInput.Value() - (+phiAInput.Value())) / (+raysNumberInput.Value())
                points = Array(+raysNumberInput.Value()).fill(0).map((_, i) => {
                    return [
                        board.create("point", [sourcePoint.X(), sourcePoint.Y()], {color: "yellow", fixed: true, name: ""}),
                        [0, coords[1], coords[2]],
                        getInitialVelocitiesGeo(+phiAInput.Value() + angleStep * i)
                    ]
                })
            }

            const deltaT: number = fromSI(timeInterval * (+timeScaleInput.Value()), timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            tGeo += deltaT
            timeText.needsUpdate = true
            timeText.update()

            const indexToRemove: number[] = []
            points = points.filter(([point, coords, velocities], i) => {
                const deltaLambda = getDeltaLambda(coords, velocities, deltaT)
                const [newCoordinates, newVelocities] = schwarzschildEulerStep(coords, velocities, deltaLambda)

                points[i][1] = newCoordinates
                points[i][2] = newVelocities

                point.moveTo(sphericalToCartesian(
                    toSI(newCoordinates[1], lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value())),
                    newCoordinates[2]
                ))

                if (newCoordinates[1] < 2) { // schwarzschild radius
                    board.removeObject(point)
                    return false
                }
                return true
            })

            
        }, timeInterval * 1000)
    }} />
  )
}