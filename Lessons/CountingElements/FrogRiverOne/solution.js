function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X > A.length) return -1
    let obj = new Set()
        
    for(let i = 0; i < A.length; i++) {
        if (!obj.has(A[i]) && A[i] <= X) {
            obj.add(A[i])
        }
        if (obj.size === X) {
            return i
        }
    }
    
    return -1
}