function solution(progresses, speeds) {
    let answer = [];
    let targetID = 0;
    let time = 0;
    
    progresses.forEach((progres, i)=>{
        const lateTime = Math.ceil((100 - progres) / speeds[i])
        if(time < lateTime) {
            time = lateTime;
            answer[++targetID] = 1
        } else {
            answer[targetID] = ++answer[targetID];
        }
    })
    answer.shift()
    return answer;
}