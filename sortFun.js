// ✅ Sort [10, 5, 20, 15] in ascending order
const a=[10, 5, 20, 15]
const b=a.sort((a,b)=>a-b)
console.log(b)


// ✅ Sort [3, 8, 2, 7] in descending order
const n=[3, 8, 2, 7]
const n1=n.sort((a,b)=>b-a)

console.log(n1)
// ✅ Sort ['dog', 'cat', 'apple'] alphabetically
const x=['dog', 'cat', 'apple'] 
const y=x.sort()
console.log(y)

// ✅ Sort this array of objects by name (A-Z):

// js
// Copy
// Edit
const d= [{name: 'Ravi'}, {name: 'Amit'}, {name: 'Bhanu'}]
const c=d.sort((a,b)=>a.name.localeCompare(b.name))
console.log(c)

// ✅ Sort [40, 100, 1, 5] numerically (default sort() will fail, fix it)
const arr=[40, 100, 1, 5]
const arr1=arr.sort((a,b)=>a-b)
console.log(arr1)

