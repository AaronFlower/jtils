const primeFactors = n => {
  if (!Number.isInteger(n)) return []
  let factors = []
  let divisor = 2
  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor)
      n = n / divisor
    } else {
      divisor++
    }
  }
  return factors
}
export default primeFactors
