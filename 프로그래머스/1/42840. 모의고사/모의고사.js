let parson = [
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
]

function solution(answers) {
    var answer = [];
    let array = [];
    const length = answers.length;
    
    parson.forEach((arr, idx)=>{
        const arrLength  = arr.length;
        if(arrLength < length) {
            const prevArr = [...arr]
            for(let i = 1; i < Math.ceil(length / arrLength); i++){
                parson[idx] = [...parson[idx], ...prevArr];
            }
        }
    })
    
    let i = 0
    let cnt = 0;
    while(i < 3){
        answers.forEach((value, idx)=>{
            if(parson[i][idx] === value){
                cnt++;
            }
        })
        array[i] = [cnt, i];
        cnt = 0;
        i++;
    }
    
    array.sort(([a],[b])=>b-a)

    answer = array.filter(([value])=>array[0][0] === value).map(([_,idx])=>idx+1)    
    
    return answer;
}