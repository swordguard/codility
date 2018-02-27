function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum=0, passedSum = 0, N = A.length, passingCars = 0

    for(let i = 0; i < N; i++) {
        sum += A[i]
    }

    for(let i = 0; i < N; i++) {
        passedSum += A[i]
        if (A[i] === 0) {
            passingCars += sum - passedSum
            if (passingCars > 1000000000) return -1
        }
    }

    return passingCars
}