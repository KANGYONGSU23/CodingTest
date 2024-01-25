function Merge(leftArray, rightArray) {
    let array = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] < rightArray[rightIndex]){
            array.push(leftArray[leftIndex]);
            leftIndex++;
        }
        else {
            array.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    
    return array.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

function MergeSort(array) {    
    if(array.length <= 1) {
        return array;
    }
    
    let midleIndex = Math.floor(array.length / 2);  
    let left = array.slice(0, midleIndex);
    let right = array.slice(midleIndex);
    
    return Merge(MergeSort(left), MergeSort(right));
}

function solution(array, commands) {
    let result = [];
    for(let [i, j, k] of commands){
        const sortArray = array.slice(i-1, j);
        
        result.push(MergeSort(array.slice(i-1, j))[k-1])
    }
    return result
}
