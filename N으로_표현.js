export default function solution(N, number) {
    if(N === number) return 1
    let answer = 0;
    let sets = []
    let myStr = "1"
    for (let i = 1; i < 9; i++ ){
        sets.push(new Set().add(N*(parseInt(myStr))))
        myStr = myStr + 1
    }
    for (let i = 1; i < 8; i++ ){
        for (let j = 0; j < i; j++ ){
            for( let op1 of sets[j] ){
                for(let op2 of sets[i-j-1]){
                    sets[i].add(op1 + op2)
                    sets[i].add(op1 - op2)
                    sets[i].add(op1 * op2)
                    if (op2 !== 0){
                        sets[i].add(Math.floor(op1 / op2))
                    }

                }
            }
        }
        if (sets[i].has(number)){
            answer = i + 1
            break
        }else{
            answer = -1
        }
    }
    
    return answer;
}