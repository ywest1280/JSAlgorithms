import { readFileSync } from 'fs';
const data = readFileSync('example', 'utf8');
let input = data.split("\n")
let [N,M] = input[0].split(" ").map(Number)
let orgiMaze = new Array()
let zeeerooo = input[1].split("").fill(Number(0))
orgiMaze.push([...zeeerooo,0,0])
for (let i = 1; i < input.length - 1; i++){
    orgiMaze.push([0,...input[i].split("").map(Number),0])
    // maze.push(input[i].split("").map(Number))
}
orgiMaze.push([...zeeerooo,0,0])
let routes = new Array()

let dfs = (prevX,prevY,moveCount,maze) => {
    moveCount += 1
    if(prevX === N && prevY === M){
        routes.push(moveCount);
        return 0
    }
    let nexts = []
    if(maze[prevX][prevY+1] === 1){
        nexts.push(new Array(prevX,prevY+1))
    }
    if(maze[prevX][prevY-1] === 1){
        nexts.push(new Array(prevX,prevY-1))
    }
    if(maze[prevX+1][prevY] === 1){
        nexts.push(new Array(prevX+1,prevY))
    }
    if(maze[prevX-1][prevY] === 1){
        nexts.push(new Array(prevX-1,prevY))
    }
    maze[prevX].splice(prevY,1,-1)

    let newMaze = maze.map((arr)=>{return arr.slice()})

    if(nexts.length === 0){
        return 0
    }
    for(let n of nexts){
        dfs(n[0],n[1],moveCount,newMaze)
    }
    return 0
}
dfs(1,1,0,orgiMaze)
routes.sort((a,b)=>{return a - b})
console.log(routes[0])

