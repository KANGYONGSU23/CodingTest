function solution(sizes) {
    var answer = 0;
    let biggerWidth = 0;
    let biggerHeight = 0;
    
    sizes.forEach((card)=>{
        card.sort((a,b)=>b-a)
        if(biggerWidth < card[0]) biggerWidth = card[0]
        if(biggerHeight < card[1]) biggerHeight = card[1]
    })
    
    return biggerWidth * biggerHeight;
}