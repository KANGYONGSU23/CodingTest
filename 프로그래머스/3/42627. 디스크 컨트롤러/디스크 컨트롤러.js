class Heap {
    constructor() {
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
        
        while(this.heap[parentIdx] && this.heap[parentIdx][1] > this.heap[index][1]){
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
            (this.heap[leftIdx] && this.heap[index][1] > this.heap[leftIdx][1]) ||
            (this.heap[rightIdx] && this.heap[index][1] > this.heap[rightIdx][1])
        ) {
            let smallerIdx = leftIdx;
            if(this.heap[rightIdx] && this.heap[leftIdx][1] > this.heap[rightIdx][1]) {
                smallerIdx = rightIdx;
            }
            
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index * 2 + 1;
            rightIdx = index * 2 + 2;
        }
    }
}

function solution(jobs) {
    let realTime = 0;
    let timmer = 0;
    const heap = new Heap();
    const length = jobs.length;
    
    let assignedArray = []
    let jobArray = []
    
    while(jobs.length !== 0 || heap.size() !== 0) {
        if(jobs[0]){
            jobs.forEach((value)=>{
                if(realTime >= value[0]){
                    assignedArray.push(value);
                } else {
                    jobArray.push(value);
                }
            })    
        }
        
        if(assignedArray[0]){
                assignedArray.forEach((value)=>{
                heap.add(value);
            })
        }
        
        if(heap.size() !== 0){
            const [startAt, runningTime] = heap.poll();
            realTime += runningTime;
            timmer += realTime - startAt;   
        } else if (jobArray[0]) {
            console.log(realTime, heap.heap)
            realTime = jobArray.sort((a,b)=>a[0]-b[0])[0][0]
            console.log(realTime)
        }
        
        jobs = jobArray;
        assignedArray = [];
        jobArray = [];
    }
    return Math.floor(timmer / length);
}