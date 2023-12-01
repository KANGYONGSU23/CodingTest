function solution(n, arr1, arr2) {
  let answer = [];
  const regex = new RegExp(".{" + n + "}$");
  for (let i = 0; i < n; i++) {
    answer[i] = (arr1[i] | arr2[i])
      .toString(2)
      .replaceAll("1", "#")
      .replaceAll("0", " ");
  }

  return answer.map((item) => (" ".repeat(n) + item).match(regex)[0]);
}
