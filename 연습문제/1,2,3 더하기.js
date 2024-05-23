function solution(T, targets) {
  let answer = [];
  let dp = new Array(Math.max(...targets))

  dp[0] = 1
  dp[1] = 2
  dp[2] = 4;

  for(let N of targets){
    for(let i = 3; i < N ; i++){
      dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    console.log(dp[N-1]);
  }
}

solution(3,[4,7,10])

// console.log(solution(3, [4,7,10]))