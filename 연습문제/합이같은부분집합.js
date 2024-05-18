function Solution(n, subset) {
  subset = [0, ...subset];

  let answer = false;

  function Subset(arr1, arr2, idx) {
    if (answer) {
      return;
    }
    if (idx >= n) {
      const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
      const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
      if (sum1 === sum2) {
        answer = true;
      }
      return;
    }
    Subset([...arr1, subset[idx+1]], [...arr2], idx + 1);
    Subset([...arr1], [...arr2, subset[idx+1]], idx + 1);
  }

  Subset([], [], 0);

  if (answer) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

Solution(6, [1, 3, 5, 6, 7, 10]);
