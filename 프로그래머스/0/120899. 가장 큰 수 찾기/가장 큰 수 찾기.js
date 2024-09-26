function solution(array) {
    var answer = [];
    let num = [...array].sort((a,b)=>a-b)
    let last = num[num.length-1]
    answer = [last,array.indexOf(last)]
    return answer;
}