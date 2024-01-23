function SelectionSort(array) {    
    for(let i = 0; i < array.length -1; i++){
        let minIndex = i;
        for(let j = i+1; j < array.length ; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        
        if(minIndex !== i){
            let tmp = array[i];
            array[i] = array[minIndex]
            array[minIndex] = tmp;
        }
    }
    return array
}

function solution(array, commands) {
    let result = [];
    for(let [i, j, k] of commands){
        const sortArray = array.slice(i-1, j);
        
        result.push(SelectionSort(array.slice(i-1, j))[k-1])
    }
    return result
}