function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
