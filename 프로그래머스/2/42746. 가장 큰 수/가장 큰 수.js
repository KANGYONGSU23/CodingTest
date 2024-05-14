function solution(numbers) {
    const answer = numbers.sort((a,b)=>+`${b}${a}` - +`${a}${b}`).toString().replaceAll(",", "");
    if(+answer === 0){
        return "0"
    }
    return answer
}
