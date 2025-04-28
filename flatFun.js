// ✅ Flatten [1, [2, 3], 4]
const a=[1, [2, 3], 4]
console.log(a.flat(1))

// ✅ Flatten [1, [2, [3]]] one level only
const b=[1, [2, [3]]]
console.log(b.flat(1))
// ✅ Flatten [1, [2, [3, [4]]]] two levels
const c=[1, [2, [3, [4]]]]
console.log(c.flat(2))

// ✅ Fully flatten [1, [2, [3, [4, [5]]]]] using Infinity
const d=[1, [2, [3, [4, [5]]]]]
console.log(d.flat(Infinity))

// ✅ Combine flat() with sort():

// Flatten [1, [7, 2], [5, 3]] and sort it ascending → [1, 2, 3, 5, 7]

const n=[1, [7, 2], [5, 3]]
console.log(n.flat(2).sort())