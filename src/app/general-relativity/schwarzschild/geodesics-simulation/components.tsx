"use client"

import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard"
import { getSchwarzschildTimeVelocity, schwarzschildTimelikeEulerStep } from "@/utils/calculations";
import { cartesianToSpherical, clampAngle, sphericalToCartesian, toScientific } from "@/utils/misc";
import { addExtraConst, frequencyUnitSI, fromSI, lengthUnitSI, timeUnitSI, toSI, velocityUnitSI } from "@/utils/units";

// 0.1 AU
const timelikeGeodesicsFactor = 15e9

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

        const timeScaleInput = board.create("input", [-15 * timelikeGeodesicsFactor, 5 * timelikeGeodesicsFactor, 31_536_000 / 5, "Time Scale: "], {frozen: true})

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
            console.log("?")

            const h: number = fromSI(timeInterval * (+timeScaleInput.Value()), timeUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            const [newCoordinates, newVelocities] = schwarzschildTimelikeEulerStep(coordinates, velocities, h)
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