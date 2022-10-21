export const fibonacci = (depth) => {
  let a = 1, b = 0, temp, sequence = `${b}, `

  while (depth > 0) {
    temp = a
    a = a + b
    b = temp
    sequence += `${b}, `
    depth--
  }

  sequence = sequence.slice(0, -2)
  return sequence
}
