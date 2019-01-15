export default function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 0
  }

  if (a === 0 || b === 0) {
    return a || b
  }

  if (a < b) {
    a = a + b
    b = a - b
    a = a - b
  }
  let r = a % b
  while (r !== 0) {
    a = b
    b = r
    r = a % b
  }
  return b
}
