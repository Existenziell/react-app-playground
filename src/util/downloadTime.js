export const downloadTime = (filesize, trend, observations) => {
  const getSum = (array) => (array.reduce((partialSum, array) => partialSum + parseInt(array), 0))

  const downloaded = getSum(trend)
  const remaining = filesize - downloaded
  const observedElements = trend.splice(trend.length - observations)
  const lastAverage = getSum(observedElements) / observations
  const result = Math.ceil(remaining / lastAverage)

  if (isNaN(result) || result <= 0) return -1
  return result
}
