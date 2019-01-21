export default function(data) {
  if (Array.isArray(data) && data.length > 0) {
    let dp = [data[0]]
    let sum = dp[0]
    for (let i = 1; i < data.length; ++i) {
      dp[i] = Math.max(dp[i - 1], 0) + data[i]
      sum = Math.max(dp[i], sum)
    }
    return sum
  }
  return 0
}
