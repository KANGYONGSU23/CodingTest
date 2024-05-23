/*
백준 11726

2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
*/

function solution(n) {
  let dp = new Array(n);

  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] % 10007;
  }

  return dp[n - 1];
}

console.log(solution(1000));
