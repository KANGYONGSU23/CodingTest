/*
백준 11722

수열 A가 주어졌을 때, 가장 긴 감소하는 부분 수열을 구하는 프로그램을 작성하시오.

예를 들어, 수열 A = {10, 30, 10, 20, 20, 10} 인 경우에 가장 긴 감소하는 부분 수열은 A = {10, 30, 10, 20, 20, 10}  이고, 길이는 3이다.

*/

function solution(N, array) {
  let answer = 1;

  let dp = new Array(N).fill(1);

  for (let i = N - 2; i >= 0; i--) {
    let bigger = i;
    for (let j = i + 1; j < N; j++) {
      if (array[i] > array[j] && dp[bigger] < dp[j]) {
        bigger = j;
      }
    }
    dp[i] = dp[bigger] + 1;

    if (dp[i] > answer) {
      answer = dp[i];
    }
  }

  return answer;
}

console.log(solution(6, [10, 30, 10, 20, 20, 10]));
