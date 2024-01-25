//삽입정렬
function InsertionSort(array) {
    for(let i = 1 ; i< array.length ;i++){
        for(let j = 0; j < i; j++) {
            if(array[j] > array[i]){
                let tmp = array[i];
                for(let k = i; k > j ; k--){
                    array[k] = array[k-1];
                }
                array[j] = tmp;
            }
            console.log(i, j, array)
        }
    }
    return array
}

function solution(array, commands) {
    let result = [];
    for(let [i, j, k] of commands){
        const sortArray = array.slice(i-1, j);

        result.push(InsertionSort(array.slice(i-1, j))[k-1])
    }
    return result
}
