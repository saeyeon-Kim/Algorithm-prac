function solution(numbers) {
    var answer = 0;
    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
        add += numbers[i]
    }
    answer = add / numbers.length
    return answer
}