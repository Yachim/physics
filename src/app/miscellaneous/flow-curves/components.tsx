"use client"

import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { oddRoot, sumVectorArray } from "@/utils/misc";
import * as math from "mathjs"

export function TangentVectorField(props: BoardProps & { flowCurve: boolean }) {
  return (
    <CustomJXGBoard axis={false} bbox={[-32, 18, 32, -18]} {...props} initFn={(board: JXG.Board) => {
      const scaleInput = board.create("slider", [
        [-30, 17.5],
        [-15, 17.5],
        [0, 1.25, 5]
      ], {
        suffixLabel: "Scale = "
      })

      const bbox = board.getBoundingBox()

      board.create("vectorfield", [
        (x: number, y: number) => {
          const norm = Math.sqrt(x ** 2 + y ** 2)
          return [-y / norm, x / norm]
        },
        [bbox[0], 25, bbox[2]],
        [bbox[3], 25, bbox[1]],
      ], {
        scale: () => +scaleInput.Value()
      })

      if (props.flowCurve) {
        const halfDiagonal = Math.sqrt((bbox[0] - bbox[2]) ** 2 + (bbox[1] - bbox[3]) ** 2) / 2
        const cnt = 7
        const dr = halfDiagonal / cnt

        const arrowStartAngle = Math.PI / 4
        const arrowCnt = 4
        const dArrowAngle = 2 * Math.PI / arrowCnt

        for (let i = 1; i <= cnt; i++) {
          const r = i * dr

          for (let arrowI = 0; arrowI < arrowCnt; arrowI++) {
            const angle = arrowStartAngle + dArrowAngle * arrowI
            const angle1 = angle
            const angle2 = angle + dArrowAngle

            board.create("curve", [
              (t: number) => r * Math.cos(t),
              (t: number) => r * Math.sin(t),
              angle1, angle2
            ], {
              color: "orange",
              fillOpacity: 0,
              strokeWidth: 2,
              lastArrow: {
                type: 2,
                size: 8,
              }
            })
          }
        }
      }
    }} />
  )
}

export function InverseSquareLawVectorField(props: BoardProps & { flowCurve: boolean }) {
  return (
    <CustomJXGBoard axis={false} bbox={[-32, 18, 32, -18]} {...props} initFn={(board: JXG.Board) => {
      const scaleInput = board.create("slider", [
        [-30, 17.5],
        [-15, 17.5],
        [0, 2.25, 5]
      ], {
        suffixLabel: "Scale = "
      })

      const kInput = board.create("input", [1000, 1000, 1], { visible: false })
      const toggleK = board.create("button", [-30, 16, "Toggle sign of $k$", () => {
        (kInput as FixedInput).set((-kInput.Value()).toString())
      }])

      const bbox = board.getBoundingBox()

      const point: JXG.Point = board.create("point", [0, 0], {
        name: "",
        color: () => +kInput.Value() < 0 ? "red" : "green"
      })

      board.create("vectorfield", [
        (x: number, y: number) => {
          const xSep = x - point.X()
          const ySep = y - point.Y()
          const rToMin3 = Math.sqrt(xSep ** 2 + ySep ** 2) ** (-3)

          let resX = rToMin3 * xSep
          let resY = rToMin3 * ySep

          const norm = +kInput.Value() * Math.sqrt(resX ** 2 + resY ** 2)

          resX /= norm
          resY /= norm

          return [resX, resY]
        },
        [bbox[0], 25, bbox[2]],
        [bbox[3], 25, bbox[1]],
      ], {
        scale: () => +scaleInput.Value()
      })

      if (props.flowCurve) {
        const cnt = 8
        const angleDiff = Math.PI * 2 / cnt
        const r0Norm = 2
        const r0NormCubed = r0Norm ** 3
        const arrowStart = r0Norm * 2
        const maxT = 100000

        for (let i = 0; i < cnt; i++) {
          const angle = angleDiff * i
          const r0Unit = math.matrix([
            Math.cos(angle),
            Math.sin(angle)
          ])

          board.create("curve", [
            (t: number) => {
              const rp = math.matrix([point.X(), point.Y()])

              const r = math.chain(oddRoot(3 * (+kInput.Value()) * t + r0NormCubed)).multiply(r0Unit).add(rp).done() as math.Matrix
              return (r.toArray() as number[])[0]
            },
            (t: number) => {
              const rp = math.matrix([point.X(), point.Y()])

              const r = math.chain(oddRoot(3 * (+kInput.Value()) * t + r0NormCubed)).multiply(r0Unit).add(rp).done() as math.Matrix
              return (r.toArray() as number[])[1]
            },
            () => +kInput.Value() < 0 ? -maxT : 0,
            () => +kInput.Value() < 0 ? 0 : maxT,
          ], {
            color: "orange",
            strokeWidth: 2,
          })

          board.create("segment", [
            () => math.chain(r0Unit).multiply(arrowStart).add(math.matrix([point.X(), point.Y()])).done().toArray(),
            () => math.chain(r0Unit).multiply(arrowStart + 1).add(math.matrix([point.X(), point.Y()])).done().toArray(),
          ], {
            color: "orange",
            strokeWidth: 2,
            lastArrow: {
              type: 2,
              size: () => +kInput.Value() < 0 ? 0 : 6
            },
            firstArrow: {
              type: 2,
              size: () => +kInput.Value() < 0 ? 6 : 0
            }
          })
        }
      }
    }} />
  )
}

export function InverseSquareLawTwoVectorField(props: BoardProps & { flowCurve: boolean }) {
  return (
    <CustomJXGBoard axis={false} bbox={[-32, 18, 32, -18]} {...props} initFn={(board: JXG.Board) => {
      const scaleInput = board.create("slider", [
        [-30, 17.5],
        [-15, 17.5],
        [0, 2.25, 5]
      ], {
        suffixLabel: "Scale = "
      })

      const k1Input = board.create("input", [-30, 16, 1, "$k_1 =\\ $"])
      const k2Input = board.create("input", [-30, 14.5, -1, "$k_2 =\\ $"])

      const bbox = board.getBoundingBox()

      const point1: JXG.Point = board.create("point", [0, 0], {
        name: "1",
        color: () => +k1Input.Value() < 0 ? "red" : "green"
      })
      const point2: JXG.Point = board.create("point", [10, 0], {
        name: "2",
        color: () => +k2Input.Value() < 0 ? "red" : "green"
      })

      function calculateField(currentPos: math.Matrix, sourcePos: math.Matrix, k: number): math.Matrix {
        const sep = math.subtract(currentPos, sourcePos)
        const r = math.norm(sep) as number

        return math.multiply(sep, k / (r ** 3))
      }

      board.create("vectorfield", [
        (x: number, y: number) => {
          const currentPos = math.matrix([x, y])
          const field1 = calculateField(currentPos, math.matrix([point1.X(), point1.Y()]), +k1Input.Value())
          const field2 = calculateField(currentPos, math.matrix([point2.X(), point2.Y()]), +k2Input.Value())
          const totalField = math.add(field1, field2)

          return (math.divide(totalField, math.norm(totalField)) as math.Matrix).toArray()
        },
        [bbox[0], 25, bbox[2]],
        [bbox[3], 25, bbox[1]],
      ], {
        scale: () => +scaleInput.Value()
      })

      if (props.flowCurve) {
        const cnt = 8
        const angleDiff = Math.PI * 2 / cnt
        const minDistance = 2
        const arrowStart = minDistance * 2
        const maxT = 100000

        const data: [JXG.Point, JXG.Input][] = [
          [point1, k1Input],
          [point2, k2Input],
        ]

        for (let angleI = 0; angleI < cnt; angleI++) {
          const angle = angleDiff * angleI

          data.forEach(([initPoint, initKInput], initDataI) => {
            // debug: render only for first point
            if (initDataI != 0) return

            board.create("curve", [
              (t: number) => {
                const r0 = math.matrix([initPoint.X() + minDistance * Math.cos(angle), initPoint.Y() + minDistance * Math.sin(angle)])
                const r = sumVectorArray(data.map(([point, kInput], dataI) => {
                  const rIP = math.matrix([point.X(), point.Y()])
                  const rIS0 = math.subtract(r0, rIP)
                  const rIS0Norm = math.norm(rIS0) as number
                  const rIS0NormCubed = rIS0Norm ** 3
                  const rIS0Unit = math.divide(rIS0, rIS0Norm)

                  return math.add(rIP, math.multiply(oddRoot(3 * (+kInput.Value()) * t + rIS0NormCubed), rIS0Unit)) as math.Matrix
                }), math.multiply(r0, 1 - data.length))

                return r.toArray()[0]
              },
              (t: number) => {
                const r0 = math.matrix([initPoint.X() + minDistance * Math.cos(angle), initPoint.Y() + minDistance * Math.sin(angle)])
                const r = sumVectorArray(data.map(([point, kInput], dataI) => {
                  const rIP = math.matrix([point.X(), point.Y()])
                  const rIS0 = math.subtract(r0, rIP)
                  const rIS0Norm = math.norm(rIS0) as number
                  const rIS0NormCubed = rIS0Norm ** 3
                  const rIS0Unit = math.divide(rIS0, rIS0Norm)

                  return math.add(rIP, math.multiply(oddRoot(3 * (+kInput.Value()) * t + rIS0NormCubed), rIS0Unit)) as math.Matrix
                }), math.multiply(r0, 1 - data.length))

                return r.toArray()[1]
              },
              () => +initKInput.Value() < 0 ? -maxT : 0,
              () => +initKInput.Value() < 0 ? 0 : maxT,
            ], {
              color: "orange",
              strokeWidth: 2,
              fillOpacity: 0
            })
          })
        }
      }
    }} />
  )
}
