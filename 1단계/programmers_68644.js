function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const item = numbers[i] + numbers[j];
      if (!answer.some((e) => e === item)) answer.push(item);
    }
  }
  return answer.sort((a, b) => a - b);
}
