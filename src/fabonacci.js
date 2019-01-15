const fab = n => {
  if (n < 2) return 1

  let a = 1
  let b = 1
  for (let i = 2; i <= n; ++i) {
    b = a + b
    a = b - a
  }
  return a
}

export default fab
