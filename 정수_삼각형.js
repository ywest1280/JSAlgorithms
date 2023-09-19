// export default function solution(triangle) {
//     let sums = [];
//     let dfs = (depth, prev, prevIdx) =>{
//         if(depth === triangle.length){
//             sums.push(prev)
//             return 0
//         }
//         for(let i = prevIdx; i < prevIdx + 2; i++){
//             dfs(depth+1, prev + parseInt(triangle[depth][i]),i)
//         }

//     }
//     dfs(1, parseInt(triangle[0]), 0)
//     sums.sort((a,b)=>{return b - a})
//     return sums[0];
// }
export default function solution(triangle) {
    let sums = [];
    let dfs = (depth, prev, prevIdx) =>{
        if(depth === triangle.length){
            sums.push(prev)
            return 0
        }
        for(let i = prevIdx; i < prevIdx + 2; i++){
            dfs(depth+1, prev + triangle[depth][i],i)
        }

    }
    dfs(1, triangle[0], 0)

    return sums[0];
}