function solution(priorities, location) {
    var answer = 0;
    function Inqueue(item) {
        priorities.push(item);
    }
    function Dequeue() {
        const a = priorities[0];
        priorities.shift();
        location--;
        return a;
    }
    
    while(priorities.length!==0){
        const findBig = priorities.some((prio)=>{
            if(priorities[0] < prio){
                return true;
            }
            return false
        })
        
        if(findBig){
            const firstItem = Dequeue();
            Inqueue(firstItem);
        } else {
            Dequeue();
            answer++;
        }
        
        if(location < 0){
            location = priorities.length - 1;
            if(!findBig){
                break;
            }
        }
    }
    
    return answer;
}