function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N < 1 || !Array.isArray(A)) return []
    let res = [], max = 0, setMax = 0, M = A.length
    for (let i = 0; i < N; i++) {
        res[i] = 0
    }

    for (let i = 0; i < M; i++) {
        if (A[i] <= N && A[i] >= 0) {
            if (res[A[i] - 1] < setMax) {
                res[A[i] - 1] = setMax
            }
            if (++res[A[i] - 1] > max) {
                max = res[A[i] - 1]
            }
        } else if (A[i] === N + 1) {
            setMax = max
        }
    }

    for (let i = 0; i < N; i++) {
        if (res[i] < setMax) {
            res[i] = setMax
        }
    }
    return res
}