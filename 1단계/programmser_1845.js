function solution(nums) {
  const array = new Set(nums);
  if([...array].length > (nums.length / 2)) return nums.length/2
  return [...array].length
}