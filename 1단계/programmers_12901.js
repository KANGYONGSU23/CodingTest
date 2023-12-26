function solution(a, b) {
  if(a === 1){
      if(b===1) return 'FRI'
      if(b===2) return 'SAT'
  }
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let days_cnt = 0;
  for(let month = 1; month < a ; month++){
      switch(month){
          case 2:
              days_cnt += 29;
              break;
          case 1: case 3: case 5: case 7: case 8: case 10: case 12:
              days_cnt += 31;
              break;
          case 4: case 6: case 9: case 11:
              days_cnt += 30;
              break;
      }
   }
  return week[(days_cnt + b - 2 - 1) % 7]
}