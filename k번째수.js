function solution(array, commands) {
    let answer = [];
    const filterArr = (i,j) => {
        //sort( compareFunction조건 ) : compareFunction 조건 이 제공되지않으면 유니 코드 순서대로 정렬합니다
        //ex) 8 과 70 중 70이 더큰수이지만 "70" 은 유니코드 순서에서 "8" 보다 더앞에옵니다
        return array.slice(i-1,j).sort(function(a, b){return a - b})
    }
    for (cmd of commands){
        let i = cmd[0]
        let j = cmd[1]
        let k = cmd[2]
        myarr = filterArr(i,j)
        answer.push(myarr[k-1])
    }
    return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]],[5, 6, 3]));