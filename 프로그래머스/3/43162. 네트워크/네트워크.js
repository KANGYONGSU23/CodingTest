class Grahp {
    constructor() {
        this.adjacencyList = {}
    }
    
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    
    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=>v!=vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v!=vertex1);
    }
    
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop().toString();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

function solution(n, computers) {
    var answer = 0;
    const grahp = new Grahp();
    computers.forEach((computer, i)=>{
        computer.forEach((isEdge, j)=>{
            grahp.addVertex(j);
            if(i !== j && isEdge === 1) {
                grahp.addEdge(i, j);
            }
        })
    })
    
    function bfs(node) {
        let visited = [];
        let needVisited = [];
        
        needVisited.push(node);
        
        while(needVisited.length !== 0){
            const node = needVisited.shift().toString();
            if(grahp.adjacencyList[node] && !visited.includes(node)){
                visited.push(node);
                needVisited = [...needVisited, ...grahp.adjacencyList[node]];
                grahp.removeVertex(node);
            }
        }
    }
    
    console.log(grahp.adjacencyList)
    
    let keys = Object.keys(grahp.adjacencyList)
    console.log(keys)
    
    while(keys[0]){
        answer++;
        bfs(keys[0]);
        keys = Object.keys(grahp.adjacencyList)
    }
    
    console.log(grahp.adjacencyList)
    
    return answer;
}