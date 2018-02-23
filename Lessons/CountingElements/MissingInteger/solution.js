function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let B = new Set(), max = 0, min = 0
    for (let i = 0; i < A.length; i++) {
        if (!B.has(A[i]) && A[i] > 0) {
            B.add(A[i])
        }
        if (A[i] > max) {
            max = A[i]
        }
        if (A[i] > 0) {
            if (i === 0 && A[i] > 0) {
                min = A[i]
            } else {
                min = min < A[i] ? min : A[i]
            }
        }
        
    }
    
    if (B.size === 0 || min > 1) return 1
    for (let i = 1; i <= B.size; i++) {
        if (!B.has(i)) {
            return i
        }        
    }
    return B.size + 1
}