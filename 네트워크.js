function solution(n, computers) {
    let visited = new Set()
    let answer = 0
    let bfs = (computers,node) => {
        if(visited.has(parseInt(node))){
            return 0
        }
        visited.add(parseInt(node))
        let visitThis = []
        computers[node].map((val,idx)=>{
            if(val === 1){
                visitThis.push(idx)
            }
        })
        for(let node of visitThis){
            if(!visited.has(node)){
                bfs(computers,node)
            }
        }
        return 1
    }
    // answer += bfs(computers,0)
    for (let i in computers){
        answer += bfs(computers, i)
    }
    return answer;
}
console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))