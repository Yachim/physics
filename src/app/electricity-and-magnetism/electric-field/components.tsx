"use client"

import { BoardProps, CustomJXGBoard, FixedInput } from "@/components/JGXBoard";
import { k } from "@/utils/constants";
import { sumVectorArray, toScientific, toScientific2DVector } from "@/utils/misc";
import { pointVector } from "@/utils/jxg";
import * as math from "mathjs"

export function TwoChargesElectricField(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.8, 0.45, 0.8, -0.45]} initFn={(board: JXG.Board) => {
      // x, y, charge
      const initialData = [
        [0, 0, 1E-8],
        [0.5, 0, -2E-8],
      ]
      const initialPos = math.matrix([0, 0.2])

      const data: [JXG.Point, JXG.Input][] = initialData.map(([x, y, charge], i) => {
        const chargeInput = board.create("input", [-0.75, 0.4 - i * 0.05, charge, `$q_${i + 1} =\\ $`])
        const point: JXG.Point = board.create("point", [x, y], {
          name: i + 1,
          color: () => +chargeInput.Value() < 0 ? "red" : "green",
          visible: () => +chargeInput.Value() !== 0,
        })

        return [
          point,
          chargeInput
        ]
      })

      const posPoint = board.create("point", initialPos.toArray(), {
        name: "Target Position",
      })

      function getElectricField(point: JXG.Point, charge: number, target = math.matrix([posPoint.X(), posPoint.Y()])): math.Matrix {
        const rQ = math.matrix([point.X(), point.Y()])
        const r = math.subtract(target, rQ)
        const rNorm = math.chain(r).norm().number().done()
        const rUnit = math.divide(r, rNorm) as math.Matrix

        return math.multiply(k * charge / (rNorm ** 2), rUnit)
      }

      const getTotalElectricField = (target = math.matrix([posPoint.X(), posPoint.Y()])) => sumVectorArray(data.map(([point, charge]) => getElectricField(point, +charge.Value(), target)))

      const eText = board.create("text", [-0.75, 0.30, () => String.raw`$\boldsymbol{E} = ${toScientific2DVector(getTotalElectricField())}$`])
      const eMagnitudeText = board.create("text", [-0.75, 0.25, () => String.raw`$E = ${toScientific(math.norm(getTotalElectricField()) as number)}\ N C^{-1}$`])

      const resetButton = board.create("button", [-0.75, 0.2, "Reset", () => {
        data.forEach(([point, charge], i) => {
          point.moveTo([initialData[i][0], initialData[i][1]]);
          (charge as FixedInput).set(initialData[i][2].toString())
          posPoint.moveTo(initialPos.toArray() as number[])
        })
      }])

      //const scaleInput = board.create("input", [0.3, 0.4, 0.000001, "Scale: "])
      const scaleInput = board.create("slider", [
        [0.4, 0.4],
        [0.6, 0.4],
        [0, 0.055, 1]
      ], {
        suffixLabel: "Scale = "
      })

      const posVector = board.create("arrow", [
        posPoint,
        () => {
          const vec = getTotalElectricField()
          return (math.chain(vec)
            .divide(math.norm(vec))
            .multiply(+scaleInput.Value() * 3)
            .add(math.matrix([posPoint.X(), posPoint.Y()]))
            .done() as math.Matrix).toArray()
        }
      ], {
        color: "orange",
        lastArrow: { type: 2 }
      })

      const bbox = board.getBoundingBox()
      const xLength = Math.abs(bbox[0] - bbox[2])
      const yLength = Math.abs(bbox[1] - bbox[3])
      const aspectRatio = xLength / yLength

      const xSteps = 25
      const ySteps = xSteps / aspectRatio
      board.create("vectorfield", [
        (x: number, y: number) => {
          const vec = getTotalElectricField(math.matrix([x, y]))
          return (math.divide(vec, math.norm(vec)) as math.Matrix).toArray()
        },
        [() => bbox[0], xSteps, () => bbox[2]],
        [() => bbox[3], ySteps, () => bbox[1]],
      ], {
        scale: () => scaleInput.Value(),
      })
    }} />
  )
}

export function ElectricDipolePlot(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-0.8, 0.45, 0.8, -0.45]} initFn={(board: JXG.Board) => {
      const charge = board.create("point", [-0.2, 0], {
        name: "q",
        color: "green",
      })
      const negativeCharge = board.create("point", [0.2, 0], {
        name: "-q",
        color: "red",
      })

      const aInput = board.create("input", [-0.7, 0.4, 0.3, "$a =\\ $"])
      const chargeInput = board.create("input", [-0.7, 0.35, 1E-8, "$q =\\ $"])

      function getTargetPos(a: number): math.Matrix {
        const r1 = math.matrix([charge.X(), charge.Y()])
        const r2 = math.matrix([negativeCharge.X(), negativeCharge.Y()])

        const r21 = math.subtract(r2, r1)
        const r21Norm = math.norm(r21) as number
        const r21Unit = math.divide(r21, r21Norm)

        const localY = math.rotate(r21, Math.PI / 2)
        const yBasis = math.divide(localY, math.norm(localY))

        return math.chain(r21Unit).multiply(r21Norm / 2).add(r1).add(math.multiply(a, yBasis)).done() as math.Matrix
      }

      const targetPoint = board.create("point", [
        () => getTargetPos(+aInput.Value()).subset(math.index(0)),
        () => getTargetPos(+aInput.Value()).subset(math.index(1)),
      ])

      const bisector = board.create("bisector", [charge, targetPoint, negativeCharge], { dash: 3 })

      function getElectricField(a: number) {
        const d = Math.sqrt((charge.X() - negativeCharge.X()) ** 2 + (charge.Y() - negativeCharge.Y()) ** 2)
        return math.multiply(
          8 * k * (+chargeInput.Value()) / (d ** 2 + 4 * a ** 2) ** (3 / 2),
          math.matrix([
            negativeCharge.X() - charge.X(),
            negativeCharge.Y() - charge.Y()
          ])
        )
      }

      const scaleInput = board.create("slider", [
        [0.4, 0.4],
        [0.6, 0.4],
        [0, 0.055, 1]
      ], {
        suffixLabel: "Scale = "
      })

      const label = board.create("text", [-0.7, 0.3, () => {
        const electricField = getElectricField(+aInput.Value())
        const x = toScientific((electricField.toArray() as number[])[0])
        const y = toScientific((electricField.toArray() as number[])[1])

        return String.raw`$\boldsymbol{E} = [${x},\ ${y}]$`
      }])
      const magnitudeLabel = board.create("text", [-0.7, 0.25, () => String.raw`$E = ${toScientific(math.norm(getElectricField(+aInput.Value())) as number)}\ NC^{-1}$`])

      board.create("arrow", [
        targetPoint,
        () => {
          const electricField = getElectricField(+aInput.Value())
          const unit = math.divide(electricField, math.norm(electricField))
          const pos = math.chain(unit)
            .multiply(3 * (+scaleInput.Value()))
            .add(math.matrix([targetPoint.X(), targetPoint.Y()]))
            .done() as math.Matrix

          return pos.toArray()
        }
      ], {
        color: "orange",
        lastArrow: { type: 2 }
      })

      const bbox = board.getBoundingBox()
      const diagonal = Math.sqrt((bbox[0] - bbox[2]) ** 2 + (bbox[1] - bbox[3]) ** 2)
      const halfDiagonal = diagonal / 2
      const arrowCnt = 40

      const da = diagonal / arrowCnt
      const a0 = -halfDiagonal

      for (let i = 0; i < arrowCnt; i++) {
        const a = a0 + da * i


        board.create("arrow", [
          () => {
            const pos = getTargetPos(a)
            return [pos.subset(math.index(0)), pos.subset(math.index(1))]
          },
          () => {
            const target = getTargetPos(a)
            const electricField = getElectricField(a)

            const unit = math.divide(electricField, math.norm(electricField))
            const pos = math.chain(unit)
              .multiply(+scaleInput.Value())
              .add(target)
              .done() as math.Matrix
            return pos.toArray()
          }
        ], {
          lastArrow: { type: 2 }
        })
      }
    }} />
  )
}

export function LineCharge(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-16, 9, 16, -9]} initFn={(board: JXG.Board) => {
      const a = board.create("point", [-8, -4], { name: "A" })
      const b = board.create("point", [1, 3], { name: "B" })
      board.create("segment", [a, b])
      const c = board.create("point", [3, -2], { name: "C" })
      const lambdaInput = board.create("input", [-15, 8, 2, "$\\lambda =\\ $"])
      const scaleInput = board.create("slider", [
        [-15, 7],
        [-5, 7],
        [0, 3, 10]
      ], {
        suffixLabel: "Scale = "
      })

      function getLVec(): math.Matrix {
        return math.subtract(pointVector(b), pointVector(a))
      }

      function getYHat(): math.Matrix {
        const lVec = getLVec()
        const lNorm = math.norm(lVec)

        return math.divide(lVec, lNorm) as math.Matrix
      }

      function getH(): number {
        const yHat = getYHat()
        const cVec = pointVector(c)
        const aVec = pointVector(a)

        return math.multiply(yHat, math.transpose(math.subtract(cVec, aVec))) as unknown as number
      }

      function getHVec(): math.Matrix {
        const yHat = getYHat()
        const h = getH()

        return math.multiply(h, yHat)
      }

      function getXHat(): math.Matrix {
        const vec = math.subtract(pointVector(c), math.add(pointVector(a), getHVec()))
        const vecNorm = math.norm(vec)

        return math.divide(vec, vecNorm) as math.Matrix
      }

      function getSVec(): math.Matrix {
        const hVec = getHVec()
        const aVec = pointVector(a)
        const cVec = pointVector(c)

        return math.chain(cVec).subtract(aVec).subtract(hVec).done() as math.Matrix
      }

      function getEVec(): math.Matrix {
        const l = math.norm(getLVec()) as number
        const s = math.norm(getSVec()) as number
        const h = getH()
        const lambda = +lambdaInput.Value()

        const inverseSqrt1 = 1 / Math.sqrt((l - h) ** 2 + s ** 2)
        const inverseSqrt2 = 1 / Math.sqrt(h ** 2 + s ** 2)

        const x = k * lambda / s * ((l - h) * inverseSqrt1 + h * inverseSqrt2)
        let y = k * lambda * (inverseSqrt1 - inverseSqrt2)

        const xHat = getXHat()
        const yHat = getYHat()

        return math.add(math.multiply(x, xHat), math.multiply(y, yHat))
      }

      board.create("text", [-15, 6, () => {
        const electricField = getEVec()

        return String.raw`$\boldsymbol{E} = ${toScientific2DVector(electricField)}$`
      }])
      board.create("text", [-15, 5, () => String.raw`$E = ${toScientific(math.norm(getEVec()) as number)}\ NC^{-1}$`])

      board.create("arrow", [
        c,
        [
          () => c.X() + (getEVec().toArray()[0] as number) / (math.norm(getEVec()) as number) * (+scaleInput.Value()),
          () => c.Y() + (getEVec().toArray()[1] as number) / (math.norm(getEVec()) as number) * (+scaleInput.Value()),
        ]
      ], {
        name: "E",
        color: "orange",
        lastArrow: {
          type: 2,
        },
      })
    }} />
  )
}

export function InfiniteLineCharge(props: BoardProps) {
  return (
    <CustomJXGBoard {...props} bbox={props.bbox ?? [-16, 9, 16, -9]} initFn={(board: JXG.Board) => {
      const a = board.create("point", [-8, -4], { name: "A" })
      const b = board.create("point", [1, 3], { name: "B" })
      board.create("line", [a, b])
      const c = board.create("point", [3, -2], { name: "C" })
      const lambdaInput = board.create("input", [-15, 8, 2, "$\\lambda =\\ $"])
      const scaleInput = board.create("slider", [
        [-15, 7],
        [-5, 7],
        [0, 3, 10]
      ], {
        suffixLabel: "Scale = "
      })

      function getLVec(): math.Matrix {
        return math.subtract(pointVector(b), pointVector(a))
      }

      function getYHat(): math.Matrix {
        const lVec = getLVec()
        const lNorm = math.norm(lVec)

        return math.divide(lVec, lNorm) as math.Matrix
      }

      function getH(): number {
        const yHat = getYHat()
        const cVec = pointVector(c)
        const aVec = pointVector(a)

        return math.multiply(yHat, math.transpose(math.subtract(cVec, aVec))) as unknown as number
      }

      function getHVec(): math.Matrix {
        const yHat = getYHat()
        const h = getH()

        return math.multiply(h, yHat)
      }

      function getXHat(): math.Matrix {
        const vec = math.subtract(pointVector(c), math.add(pointVector(a), getHVec()))
        const vecNorm = math.norm(vec)

        return math.divide(vec, vecNorm) as math.Matrix
      }

      function getSVec(): math.Matrix {
        const hVec = getHVec()
        const aVec = pointVector(a)
        const cVec = pointVector(c)

        return math.chain(cVec).subtract(aVec).subtract(hVec).done() as math.Matrix
      }

      function getEVec(): math.Matrix {
        const s = math.norm(getSVec()) as number
        const lambda = +lambdaInput.Value()

        const x = (2 * k * lambda) / s

        const xHat = getXHat()

        return math.multiply(x, xHat)
      }

      board.create("text", [-15, 6, () => {
        const electricField = getEVec()

        return String.raw`$\boldsymbol{E} = ${toScientific2DVector(electricField)}$`
      }])
      board.create("text", [-15, 5, () => String.raw`$E = ${toScientific(math.norm(getEVec()) as number)}\ NC^{-1}$`])

      board.create("arrow", [
        c,
        [
          () => c.X() + (getEVec().toArray()[0] as number) / (math.norm(getEVec()) as number) * (+scaleInput.Value()),
          () => c.Y() + (getEVec().toArray()[1] as number) / (math.norm(getEVec()) as number) * (+scaleInput.Value()),
        ]
      ], {
        name: "E",
        color: "orange",
        lastArrow: {
          type: 2,
        },
      })
    }} />
  )
}
