function solution(numbers, target) {
    let bfs = (numbers, target) => {
        let answer = 0
        let leaves = [0]
        for (let num of numbers){
            let tmp = new Array()
            for (parent of leaves){
                tmp.push(parent + num)
                tmp.push(parent - num)
            }
            leaves = tmp.slice()
        }
        for(let leaf of leaves){
            if (leaf === target){
                answer += 1
            }
        }
        return answer
    }
	return bfs(numbers,target)
}
console.log(solution([4,1,2,1], 2))