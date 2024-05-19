function IsTransform(str1, str2) {
    let different = 0;
    for(let i = 0 ; i < str1.length ; i++){
        if(str1[i] !== str2[i]) {
            different++;
        }
    }
    if(different === 1){
        return true;
    }
    return false;
    
}

function solution(begin, target, words) {
    //바꿨던 노드는 Visited에 추가
    let needVisited = [];
    
    if(!words.includes(target)){
        return 0
    }
    
    needVisited.push([begin, 0, []]);
    
    while(needVisited.length){
        const [begin, cnt, visited] = needVisited.shift();
        if(begin === target){
            return cnt
        }
        words.forEach((word)=>{
            if(!visited.includes(begin)){
                if(IsTransform(begin, word)){
                    needVisited.push([word, cnt+1, [...visited, begin]]);
                }   
            }
        })
    }
}