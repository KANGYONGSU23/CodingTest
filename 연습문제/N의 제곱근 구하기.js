function solution(n) {
  let answer = 0;

  function BinarySeach(min, max) {
    if(min > max) {
      return -1;
    }

    const mid = Math.floor((min + max) / 2);

    if(mid*mid === n) {
      return mid;
    }
    else if (mid*mid > n){
      return BinarySeach(min, mid-1);
    }
    else if (mid*mid < n) {
      return BinarySeach(mid+1, max);
    }
  }

  answer = BinarySeach(0, n);

  return answer;
}

console.log(solution(16));