const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

function solution(clothes) {
    let answer = 1;
    const clothesHash = new Map();
    
    clothes.forEach(([name, type])=>{
        if(clothesHash.has(type)){
            clothesHash.set(type, [...clothesHash.get(type), name]);   
        } else {
            clothesHash.set(type, [name]);
        }
    })
    
    clothesHash.forEach((value, key)=>{
        answer *= value.length+1;
    })
    
    return answer-1
}