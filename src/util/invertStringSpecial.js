export const invertStringSpecial = (string) => {
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
}
