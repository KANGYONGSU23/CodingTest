function solution(k, score) {
  let temple = [];
  const result = [];
  for (let item of score) {
    temple.push(item);
    temple.sort((a, b) => b - a).length = k;
    console.log(temple);
    for (i = k - 1; i >= 0; i--) {
      if (typeof temple[i] === "number") {
        result.push(temple[i]);
        break;
      }
    }
  }
  return result;
}