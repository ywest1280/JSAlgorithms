import { readFileSync } from 'fs';
const data = readFileSync('example', 'utf8');
let input = data.split("\n")

let [nodeNum, lineNum, initNode] = input[0].split(" ").map(Number)
let nodes = new Array()
for(let i = 1; i < input.length - 1; i++){
    let temp = input[i].split(" ").map(Number)
    nodes.push(new Array(temp[0],temp[1]))
    nodes.push(new Array(temp[1],temp[0]))
}

nodes.sort((a,b)=>a[1]-b[1])
let dfs_visited = new Set()

let dfs = (preNode) => {
    if(dfs_visited.has(preNode)){
        return 0
    }
    dfs_visited.add(preNode)
    let nextNodes = new Array()
    for( let n of nodes ){
        if(n[0] === preNode){
            nextNodes.push(n[1])
        }
    }
    for (let nN of nextNodes){
        dfs(nN)
    }
    return 0
}
dfs(initNode)

let bfs_visited = new Set()

let bfs = (preNode) => {
    let queue = [preNode];
    while (queue.length){
        let q = queue.shift();
        if(bfs_visited.has(q)){
            continue;
        }
        bfs_visited.add(q)
        for(let n of nodes){
            if(n[0] === q){
                queue.push(n[1])
            }
        }
    }
}
bfs(initNode)

let dout = new Array(...dfs_visited)
console.log(dout.join(' '))
let bout = new Array(...bfs_visited)
console.log(bout.join(' '))