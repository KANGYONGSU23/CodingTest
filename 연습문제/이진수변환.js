function solution(num) {
  function DFS(binary, idx) {
    if(2**idx > num){
      if(num == parseInt(binary, 2)){
        console.log(parseInt(binary, 2).toString(2));
      }
      return;
    }
    DFS("0"+binary, idx+1);
    DFS("1"+binary, idx+1);
  }

  DFS('0', 0);
  DFS('1', 0);
}

solution(100);