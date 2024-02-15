export function toScientific(num: number) {
  if (num === 0) {
    return "0"
  }

  let exponent = Math.floor(Math.log10(Math.abs(num)))
  let coefficient = num / Math.pow(10, exponent)

  return `${coefficient.toFixed(2)} \\cdot 10^{${exponent}}`
}
