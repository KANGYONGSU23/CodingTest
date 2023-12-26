function solution(cards1, cards2, goal) {
  let YorN = true;
  for(let item of goal){
      switch(item){
          case cards1[0]: 
              cards1.shift();
              break;
          case cards2[0]:
              cards2.shift();
              break;
          default :
              return 'No'
      }
  }
  return 'Yes';
}