class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    reset() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        
        while(this.heap[parentIdx] && this.heap[index] < this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }
    
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleDown() {
        let index = 0;
        let leftIdx = index * 2 + 1;
        let rightIdx = index * 2 + 2;
        
        while(
            (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[index]) ||
            (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[index])
        ) {
            let smallerIdx = leftIdx;
            if(this.heap[rightIdx] && this.heap[rightIdx] < this.heap[smallerIdx]){
                smallerIdx = rightIdx;
            }
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index * 2 + 1;
            rightIdx = index * 2 + 2;
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    reset() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        
        while(this.heap[parentIdx] && this.heap[index] > this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }
    
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleDown() {
        let index = 0;
        let leftIdx = index * 2 + 1;
        let rightIdx = index * 2 + 2;
        
        while(
            (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[index]) ||
            (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[index])
        ) {
            let biggerIdx = leftIdx;
            if(this.heap[rightIdx] && this.heap[rightIdx] < this.heap[biggerIdx]){
                biggerIdx = rightIdx;
            }
            this.swap(index, biggerIdx);
            index = biggerIdx;
            leftIdx = index * 2 + 1;
            rightIdx = index * 2 + 2;
        }
    }
}

function solution(operations) {
    var answer = [];
    let array = [];
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    
    function deleteMin() {
        //array.forEach((value)=>{
        //    minHeap.add(value);
        //})
        //const minValue = minHeap.poll();
        //array = minHeap.heap;
        //minHeap.reset();
        //return minValue;
        let bool = 0
        const min = Math.min(...array)
        array = array.filter(a=> {
            if(a === min){
                bool++
                return bool !== 1
            }
            return true
        });
    }
    function deleteMax() {
        //array.forEach((value)=>{
        //    maxHeap.add(value);
        //})
        //const maxValue = maxHeap.poll();
        //array = maxHeap.heap;
        //maxHeap.reset();
        //return maxValue;
        let bool = 0
        const max = Math.max(...array);
        
        array = array.filter(a=> {
            if(a === max){
                bool++
                return bool !== 1
            }
            return true
        });
    }
    
    console.log("시작", array)
    
    for(const command of operations) {
        if(command[0] === "I") {
            const [, num] = command.split(" ");
            array.push(+num);
            console.log("추가", array)
            continue;
        }
        
        if(array.length === 0) {
            console.log("빈배열! 커맨드 캔슬")
            continue
        };
        
        if(command === "D 1") {
            deleteMax();
            console.log("최대", array)
        } else if(command === "D -1") {
            deleteMin();
            console.log("최소", array)
        }
    }    
    
    console.log("끝", array)
    
    if(array.length === 0) {
        return [0,0];
    }
    
    return [Math.max(...array), Math.min(...array)];
}