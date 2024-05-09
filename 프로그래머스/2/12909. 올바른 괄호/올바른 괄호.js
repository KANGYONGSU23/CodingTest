function solution(s){
    var answer = true;
    let stack = [];
    
    [...s].some((value)=>{
        if(value==="("){
            stack.push(value);
        } else if(value === ")"){
            if(stack.length === 0) {
                answer = false;
                return true;
            }
            stack.pop();
        }
        return false;
    })
    
    if(stack.length !== 0) {
        answer = false;
    }

    return answer;
}
