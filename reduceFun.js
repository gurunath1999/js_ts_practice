const n=[1,2,3,4,5]
const sum=n.reduce((acc,cur)=>acc+cur ,0)

console.log(sum)

const m=[2,3,4]
const mul=m.reduce((acc,cur)=>acc*cur,1)
console.log(mul)


const numbers = [10, 45, 8, 100];
const max=numbers.reduce((acc,cur)=>acc>cur?acc:cur,numbers[0])
console.log(max)


// ✅ Find the sum of [5, 10, 15]
const arr=[5, 10, 15]
const sum1=arr.reduce((acc,cur)=>acc+cur,0)
console.log(sum1)


// ✅ Find the product of [1, 2, 3, 4]
const arr2=[1,2,3,4]
const product=arr2.reduce((acc,cur)=>acc*cur,1)
console.log(product)


// ✅ Find the maximum number in [2, 99, 43, 100, 7]
const arr3=[2, 99, 43, 100, 7]
const maxNum=arr3.reduce((acc,cur)=>acc>cur?acc:cur,arr3[0])
console.log(maxNum)

// ✅ Concatenate ['a', 'b', 'c'] into 'abc'

const str=['a','b','c']
const combile=str.reduce((acc,cur)=>acc+cur,'')
console.log(combile)

// ✅ Find the average of [10, 20, 30, 40] (Hint: use reduce and divide by length)

const a=[10,20,30,40]

const avg=a.reduce((acc,cur)=>acc+cur,0)/a.length
console.log(avg)