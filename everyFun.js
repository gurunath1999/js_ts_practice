// Try these now 👇

// ✅ Check if any number is negative in [5, -2, 10, 3]
const a=[5, -2, 10, 3]
const b=a.some((x)=>x<0)
console.log(b)

// ✅ Check if all strings in ['hi', 'hello', 'hey'] have length > 1
const str=['hi', 'hello', 'hey'] 
const allStr=str.every((x)=>x.length>1)
console.log(allStr)


// ✅ Check if some numbers are divisible by 3 in [2, 4, 6, 8]
const n=[2,4,6,8]
const someNum=n.some((x)=>x%3===0)
console.log(someNum)

// ✅ Check if every number is even in [2, 4, 6, 7]
const n1=[2,4,6,7]
const someNum1=n.every((x)=>x%2===0)
console.log(someNum)

// ✅ Check if any name starts with 'A' in ['Ram', 'Amit', 'Ravi']

const str1=['Ram', 'Amit', 'Ravi']
const startWith=str1.some((x)=>x.startsWith('A'))
console.log(startWith)

