function solution(sides) {
    var answer = 0;
    let arr = sides.sort((a,b)=> a-b)
    answer = arr[0]+arr[1]>arr[2]?1:2
    return answer;
}