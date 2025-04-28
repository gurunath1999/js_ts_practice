// ✅ Remove duplicates from 
const a=[1, 2, 2, 3, 4, 4, 5]
const b=[...new Set(a)]
console.log(b)

// ✅ Remove duplicates from 
const str= ['a', 'b', 'a', 'c', 'b']
const str1=[... new Set(str)]
console.log(str1)


// ✅ Get the count of unique numbers in 
 const x= [5, 6, 5, 7, 6, 8]
 const y=[...new Set(x)]

// ✅ Remove duplicates using Array.from() for
 const n=[10, 20, 10, 30, 40, 20]
 const n1=Array.from(...new Set(n))

// ✅ Combine filter() and Set to remove duplicates and keep only odd numbers from  [1, 2, 2, 3, 4, 5, 5, 6] → Output: [1, 3, 5]

const g= [1, 2, 2, 3, 4, 5, 5, 6]
const u=[...new Set(g)].filter((x)=>x%2==1)