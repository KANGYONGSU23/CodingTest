function solution(num) {
  let count = 0;

  function recursion(num) {
    count++;
    if (num === 1) return;
    if (num % 2 === 0) return recursion(num / 2);
    else return recursion(num * 3 + 1);
  }
  recursion(num);
  return count > 500 ? -1 : count - 1;
}
