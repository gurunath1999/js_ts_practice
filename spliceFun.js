// Try these now 👇

// ✅ Use Array.from() to create [0, 1, 2, 3, 4]
console.log(Array.from({length:5},(_,i)=>i))

// ✅ Fill [1, 2, 3, 4, 5] with 0 from index 2 to 4 → [1, 2, 0, 0, 5]
const a=[1,2,3,4,5]
console.log(a.fill(0,2,4))

// ✅ Get last 2 elements of ['a', 'b', 'c', 'd'] using slice()
const s=['a', 'b', 'c', 'd']
console.log(s.slice(-2))

// ✅ Remove 2 elements from [10, 20, 30, 40] starting from index 1
const n=[10, 20, 30, 40]
n.slice(1,2)
console.log(n.slice(1,2))


// ✅ Insert 99 and 100 at index 2 in [10, 20, 30, 40] using splice()


const x=[10, 20, 30, 40]
const b=x.splice(2,0,99,100)
console.log(x)




