export const timeToTypeSnippet = `const timeToType = (digits, num) => {
  let time = 0
  for (let i = 0; i < num.length; i++) {
    const currentIndex = digits.indexOf(num[i])
    let lastIndex = digits.indexOf(num[i - 1])
    if (lastIndex < 0) lastIndex = time

    time += Math.abs(currentIndex - lastIndex)
  }
  return time
}`

export const downloadTimeSnippet = `const downloadTime = (filesize, trend, observations) => {
  const getSum = (array) => (array.reduce((partialSum, array) => partialSum + parseInt(array), 0))

  const downloaded = getSum(trend)
  const remaining = filesize - downloaded
  const observedElements = trend.splice(trend.length - observations)
  const lastAverage = getSum(observedElements) / observations

  if (lastAverage === 0) return -1
  const result = Math.ceil(remaining / lastAverage)
  if (isNaN(result) || result <= 0) return -1
  return result
}`

export const fibonacciSnippet = `const fibonacci = (depth) => {
  let a = 1, b = 0, temp, sequence = b

  while (depth > 0) {
    temp = a
    a = a + b
    b = temp
    sequence += b
    depth--
  }

  return sequence
}`


export const invertStringSpecialSnippet = `const invertStringSpecial = (string) => {
  const letters = string.split('')
  const lettersArray = [] // Hold all letters in an extra array

  for (let i = 0; i < letters.length; i++) {
    const isLetter = /^[a-zA-Z]+$/.test(letters[i])
    if (isLetter) {
      lettersArray.push(letters[i])
      letters[i] = null // Replace all letters with null
    }
  }

  // Loop again over letters popping the last element of lettersArray into letters
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === null) {
      letters[i] = lettersArray.pop()
    }
  }

  const result = letters.join('')
  return result
}`

export const rotateArraySnippet = `const rotateArray = (input, steps) => {
  if (steps === 0) return input

  // Deal with overflow
  if (steps > input.length) {
    if (steps % input.length === 0) {
      steps = input.length
    } else {
      steps = Math.floor(steps % input.length)
    }
  }

  let changed = []
  const unchanged = input.splice(0, input.length - steps)

  // Loop 'steps' times
  while (steps) {
    const lastElement = input.pop()
    changed.unshift(lastElement)
    steps--
  }

  const result = changed.concat(unchanged)
  return result
}`
