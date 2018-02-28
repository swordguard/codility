function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let second_last = -1, last = -1, cur = -1, N = A.length, min = (A[1]+A[0])/2, ave = 0, min_pos = 0

    for(let i = 0; i < N; i++) {
        cur = i
        if (i > 0) {
            last = i - 1
            ave = (A[cur] + A[last]) / 2

            if (ave < min) {
                min = ave
                min_pos = last
            }
        }
        if (i > 1) {
            second_last = i - 2
            ave = (A[cur] + A[last] + A[second_last]) / 3
            if (ave < min) {
                min = ave
                min_pos = second_last
            }
        }
    }

    return min_pos
}