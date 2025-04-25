// Remove duplicates from an array.

// Expected Output:
// Input: [1,2,2,3,4,4] → Output: [1,2,3,4]

const n=[1,2,2,3,4,4]
const b=[...new Set(n)]

console.log(b)