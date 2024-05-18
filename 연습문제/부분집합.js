function Subset(n, str) {
  if (n === 1) {
    console.log(str);
    return;
  }
  Subset(n - 1, n - 1 + str);
  Subset(n - 1, str);
}

function Solution(n) {
  Subset(n + 1, "");
}

Solution(4);
