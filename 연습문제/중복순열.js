function solution(N, M) {
  let cnt = 0;
  function DFS(str, idx) {
    if (idx > M) {
      cnt++;
      console.log(str);
      return;
    }
    for (let i = 1; i <= N; i++) {
      DFS(`${str}${i}`, idx + 1);
    }
  }

  DFS("", 1);
  console.log(cnt);
}

solution(3, 2);
