function solution(maps) {
    let needVisited = [];
    
    needVisited.push([0,0,1]);
    
    while(needVisited.length){
        const [i, j, cnt] = needVisited.shift();
        
        if(i < 0 || j < 0 || i >= maps.length || j >= maps[0].length || maps[i][j] === 0){
            continue;
        }
        
        if(i === maps.length - 1 && j === maps[0].length -1) {
            return cnt;
        }
        
        maps[i][j] = 0;
        
        needVisited.push([i+1, j, cnt+1]);
        needVisited.push([i, j+1, cnt+1]);
        needVisited.push([i-1, j, cnt+1]);
        needVisited.push([i, j-1, cnt+1]);
    }  
        
    return -1
}