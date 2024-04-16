function solution(name, yearning, photo) {
    const answer = [];
    for(let i = 0; i < photo.length ; i++){
        answer[i] = photo[i].reduce((acc, ele)=>{
            if(name.findIndex(name=>name === ele) !== -1){
                return acc + yearning[name.findIndex((name)=>name === ele)]
            }
            return acc;
        }, 0)
    }
    return answer;
}