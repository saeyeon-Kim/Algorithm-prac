function solution(num_list) {
    var answer = [];
    let one = [];
    let two = [];
    for (let i =0; i<num_list.length;i++){
        if (num_list[i]%2===0){
            two.push(i)
        } else if(num_list[i]%2===1) {
            one.push(i)
        } else return
    }
    answer = [two.length,one.length]
    return answer;
}