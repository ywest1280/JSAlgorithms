function solution(citations) {
    //sortedArr = citations.sort((a,b)=>{return b - a});
    sortedArr = citations;
    
    for(let i = 0; i < sortedArr.length; i++){
        let citedNums = 0;
        let hIdx = sortedArr.length - i
        for(elem of sortedArr){
            if(hIdx <= elem){
                citedNums ++;
            }
        }
        if(citedNums >= hIdx){
            return hIdx
        }else{
            citedNums = 0;
        }
    }
    return 0
}
console.log(solution([6, 6, 6, 6, 6]));