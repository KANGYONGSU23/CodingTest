class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    min() {
        return this.heap[0];
    }
    
    mix(idx1, idx2) {
        return this.heap[idx1] + (this.heap[idx2] * 2);
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
        let parent = Math.floor((index - 1) / 2);
        while(this.heap[parent] && this.heap[parent] > this.heap[index]) {
            this.swap(index, parent);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    
    poll() {
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        //const smallerIdx = this.heap[1] < this.heap[2] ? 1 : 2;
              
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleDown() {
        let index = 0;
        let leftChildIdx = index * 2 + 1;
        let rightChildIdx = index * 2 + 2;
        
        while(
            (this.heap[leftChildIdx] && this.heap[leftChildIdx] < this.heap[index]) || 
            (this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[index])
        ) {
            let smallerIdx = leftChildIdx;
            if(this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[smallerIdx]) {
                smallerIdx = rightChildIdx;
            }
            
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftChildIdx = index * 2 + 1;
            rightChildIdx = index * 2 + 2;
        }
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new Heap();
    
    for(const value of scoville) {
        heap.add(value);
    }
    
    while(heap.min() < K){    
        if(heap.size() === 1 && heap.min() < K) {
            return -1
        }
        const first = heap.poll();
        const seconed = heap.poll();
        heap.add(first + (seconed * 2));
        answer++;
    }
    
    return answer
}