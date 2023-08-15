function solution(numbers, target) {
	let DFS = (numbers, target, depth) => {
		answer = 0
		if(depth === numbers.length){
			console.log(numbers)
			let sum = numbers.reduce((acc,cur)=> acc+cur,0 );
			if(sum === target){
				return 1
			}else{
				return 0
			}
		}else{
			answer += DFS(numbers,target,depth+1)
			numbers.splice(depth, 1, -numbers[depth])
			answer += DFS(numbers,target,depth+1)
			return answer
		}
	}
	answer = DFS(numbers, target, 0)
	return answer
}
console.log(solution([4,1,2,1], 2))