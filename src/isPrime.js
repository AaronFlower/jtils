const isPrime = n => {
  if (!Number.isInteger(n) || n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
export default isPrime
