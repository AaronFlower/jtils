const isPrime = n => {
  if (!Number.isInteger(n) || n < 2) return false
  for (let i = 2, r = Math.sqrt(n); i <= r; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
export default isPrime
