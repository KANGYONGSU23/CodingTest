function solution(array, commands) {
  var answer = [];
  for (let [st, en, cnt] of commands) {
    answer.push(array.slice(st - 1, en).sort((a, b) => a - b)[cnt - 1]);
  }
  return answer;
}
