export default function twoSum(data, sum) {
  if (Array.isArray(data)) {
    let map = {}
    for (let i = 0; i < data.length; ++i) {
      let remain = sum - data[i]
      if (map[remain]) {
        return [remain, data[i]]
      }
      map[data[i]] = true
    }
  }
  return []
}
