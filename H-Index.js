function solution(citations) {
    sortedArr = citations.sort((a,b)=>{return b - a});
    for(let i = 0; i < sortedArr.length; i++){
        let citedNums = 0;
        let unCitedNums = 0;
        let hIdx = sortedArr.length - i
        for(elem of sortedArr){
            if(hIdx <= elem){
                citedNums ++;
            }else{
                unCitedNums ++;
            }
        }
        if(citedNums >= hIdx && (citations.length - unCitedNums) === citedNums){
            return hIdx
        }else{
            citedNums = 0;
            unCitedNums = 0;
        }
    }
    return 0
}
console.log(solution([0, 0, 0, 0, 0]));