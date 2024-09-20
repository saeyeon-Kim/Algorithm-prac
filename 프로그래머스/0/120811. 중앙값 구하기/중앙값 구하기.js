function solution(array) {
    var answer = 0;
    let arr = array.sort((a,b)=>a-b)
    let num = Math.floor(array.length/2)
    answer = arr[num]
    return answer;
}