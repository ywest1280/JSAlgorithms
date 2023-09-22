import { readFileSync } from 'fs';
const data = readFileSync('example', 'utf8');
let input = data.split("\n")
let [N] = input[0].split(" ").map(Number)
let [L] = input[0].split(" ").map(Number)
let nodes = new Array
for (let i = 2; i < input.length - 1; i++){
    let temp = input[i].split(" ").map(Number)
    nodes.push(new Array(temp[0],temp[1]))
    nodes.push(new Array(temp[1],temp[0]))
}
nodes.sort((a,b)=>{return a[0] - b[0]})

let visited = new Set()
let bfs = () => {
    let queue = [1]
    while(queue.length !== 0){
        let q = queue.shift()
        if(visited.has(q)){
            continue
        }
        for (let n of nodes){
            if(q === n[0] && !visited.has(q)){
                queue.push(n[1])
            }
        }
        visited.add(q)
    }
    return 0
}
bfs()
console.log(visited.size-1)