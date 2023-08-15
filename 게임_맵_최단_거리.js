function solution(maps) {
    let answer = -1;
    let visited = new Set()
    let maxY = maps.length -1 
    let maxX = maps[0].length -1

    let bfs = (maps,node) =>{
        if(visited.has(node)){
            return 0
        }
        if(node === maxX.toLocaleString() +","+ maxY.toString()){
            answer = visited.size + 1
            return 0
        }
        visited.add(node)
        let visitThis = new Set()
        let findNextNode = (node) =>{
            let x = parseInt(node[0])
            let y = parseInt(node[2])

            let candidates = [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]
            for(let candidate of candidates){
                if(candidate[0] < 0 || candidate[0] > maxX){
                    continue
                }
                if(candidate[1] < 0 || candidate[1] > maxY){
                    continue
                }
                visitThis.add(candidate)
            }
        }
        findNextNode(node)
        for(node of visitThis.values()){
            let x = node[0]
            let y = node[1]
            if(maps[y][x] !== 0){
                bfs(maps, node.join())
            }
        }   
        return 1
    }
    bfs(maps,"0,0");
    return answer
}
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));