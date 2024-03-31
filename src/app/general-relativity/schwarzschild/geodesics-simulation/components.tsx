"use client"

import { BoardProps, CustomJXGBoard } from "@/components/JGXBoard"
import { getSchwarzschildTimeVelocity } from "@/utils/calculations";
import { cartesianToSpherical, toScientific } from "@/utils/misc";
import { addExtraConst, frequencyUnitSI, fromSI, lengthUnitSI, velocityUnitSI } from "@/utils/units";

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
        const massPoint = board.create("point", [0, 0], {fixed: true, name: "M", color: "orange"})
        const orbitingPoint = board.create("point", [150e9, 0], {name: "m", color: "blue", visible: !playing})
        const orbitingPointPlaying = board.create("point", [150e9, 0], {name: "m", color: "blue", visible: playing})

        const initialRadialVelocityInput = board.create("input", [-15 * timelikeGeodesicsFactor, 7 * timelikeGeodesicsFactor, 0, "$U^r_0 =\\ $"], {frozen: true})
        const initialAngularVelocityInput = board.create("input", [-15 * timelikeGeodesicsFactor, 6 * timelikeGeodesicsFactor, 1.99e-7, "$U^{\\phi}_0 =\\ $"], {frozen: true})

        const playButton = board.create("button", [-15 * timelikeGeodesicsFactor, 4 * timelikeGeodesicsFactor, () => playing ? "Stop" : "Play", () => playing = !playing], {frozen: true})

        const timeScaleInput = board.create("input", [-15 * timelikeGeodesicsFactor, 5 * timelikeGeodesicsFactor, 31_536_000, "Time Scale: "], {frozen: true})

        function getInitialCoordinates() {
            return [0, ...cartesianToSpherical(orbitingPoint.X(), orbitingPoint.Y())]
        }

        setInterval(() => {
            if (!playing) return

            console.log("xx")
        }, timeInterval * 1000)

        function getInitialVelocities() {
            const uR = +initialRadialVelocityInput.Value()
            const uPhi = +initialAngularVelocityInput.Value()

            const rGeo = fromSI(Math.sqrt(orbitingPoint.X() ** 2 + orbitingPoint.Y() ** 2), lengthUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uRGeo = fromSI(uR, velocityUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))
            const uPhiGeo = fromSI(uPhi, frequencyUnitSI, "geometrizedMass", addExtraConst(2, +massInput.Value()))

            // dimensionless
            const uTGeo = getSchwarzschildTimeVelocity(rGeo, uRGeo, uPhiGeo)

            return [uTGeo, uR, uPhi]
        }

        board.create("text", [10 * timelikeGeodesicsFactor, 8 * timelikeGeodesicsFactor, () => String.raw`$\begin{align*}
            X &= [${getInitialCoordinates().map(toScientific).join(", ")}] \\
            U &= [${getInitialVelocities().map(toScientific).join(", ")}]
        \end{align*}$`], {frozen: true})
    }} />
  )
}