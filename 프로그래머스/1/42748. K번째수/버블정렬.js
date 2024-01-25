//버블정렬
function BubbleSort(array) {
    for(let i in array){
        for(let j = 0; j < array.length -1; j++){
            if(array[j] > array[j+1]){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
    return array
}

function solution(array, commands) {
    let result = [];
    for(let [i, j, k] of commands){
        const sortArray = array.slice(i-1, j);

        result.push(BubbleSort(array.slice(i-1, j))[k-1])
    }
    return result
}
