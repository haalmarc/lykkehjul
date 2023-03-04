export function runForXTimesEveryMilliseconds(
  numberOfTimes: number,
  milliseconds: number,
  callback: () => void
) {
  let hasRun = 1
  const interval = setInterval(() => {
    hasRun++
    if (hasRun > numberOfTimes) {
      clearInterval(interval)
    }
    callback()
  }, milliseconds)

  return () => clearInterval(interval)
}
