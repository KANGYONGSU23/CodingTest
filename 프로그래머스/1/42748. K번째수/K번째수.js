//선택정렬
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


//메소드 사용
function solution(array, commands) {
    var answer = [];
    for(let [st,en,cnt] of commands) {
        answer.push(array.slice(st-1, en).sort((a,b)=>a-b)[cnt-1])
    }
    return answer
}
