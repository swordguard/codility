function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (B < A || K < 1) {
        return 0
    }

    if (A === B && A === 0) return 1

    if (K > B) return A === 0 ? 1 : 0
    if (K === B) return 1 + (A === 0 ? 1 : 0)
    if (K < B && K >= A) {
        return Math.floor(B / K) + (A === 0 ? 1 : 0)
    }

    if (K < A) {
        return A % K === 0 ||B % K === 0 ? Math.floor((B - A) / K) + 1 : Math.floor((B - A) / K) + (A === 0 ? 1 : 0)
    }
}