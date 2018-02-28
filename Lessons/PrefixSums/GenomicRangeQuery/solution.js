function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let M = Q.length
    let return_array = []
    for (let i = 0; i < M; i++) {
        let sub_str = S.substring(P[i],Q[i] + 1)
        if (sub_str.indexOf('A') !== -1) {
            return_array.push(1)
        } else if (sub_str.indexOf('C') !== -1) {
            return_array.push(2)
        } else if (sub_str.indexOf('G') !== -1) {
            return_array.push(3)
        } else if (sub_str.indexOf('T') !== -1) {
            return_array.push(4)
        }
    }

    return return_array
}