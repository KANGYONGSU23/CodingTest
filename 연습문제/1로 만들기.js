/*
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
*/

// function solution(n) {
//   let answer = n;
//   let dp = new Array(n-1);
//   dp[0] = [2,2,3];
//   function dfs(num, cnt) {
//     if(num > n) return;
//     if(num === n) {
//       answer = Math.min(answer, cnt);
//       return;
//     }
//     if(!dp[num-1]){
//       dp[num-1] = [num+1, num*2, num*3];
//     }
//     dp[num-1].forEach((num)=>{
//       dfs(num, cnt+1);
//     })
//   }
//   dfs(1, 0);
//   console.log(dp.length)
//   return answer;
// }

//===================================================

function solution(n) {
  let dp = new Array(n+1);

  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
    }
  }

  return dp[n];
}

console.log(solution(10));
