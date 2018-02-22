function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = 0, sum_should = 0, obj = {}
    
    for(let i = 0; i < A.length; i++) {
        sum += A[i]
        sum_should += i+ 1
        if (!obj.hasOwnProperty(A[i])) {
            obj[A[i]] = true
        }
    }
    
    if (sum === sum_should && Object.keys(obj).length === A.length) {
        return 1
    }
    
    return 0
}