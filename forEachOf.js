// ✅ forEach() Assignments:
// Print the square of each number in [1, 2, 3, 4]
const a=[1,2,3,4]
a.forEach((x)=>console.log(x*2))



// Print Index: value for each element in ['a', 'b', 'c']
const b=['a', 'b', 'c']
b.forEach((x,i)=>console.log(`index of ${x}:${i}`))

// Use forEach() to calculate the sum of [10, 20, 30]
let sum=0;
const c=[10,20,30]
c.forEach((x)=>sum+=x)
console.log(sum)

// Print all strings in uppercase from ['hello', 'world']
const str=['hello', 'world']
str.forEach((x)=>console.log(x.toUpperCase()))

// Print length of each word in ['one', 'three', 'four']

const d=['one', 'three', 'four']
d.forEach((x)=>console.log(x.length))

// ✅ for...of Assignments:
// Print all characters in the string "JavaScript"
let str1="javascript"
for(let x of str1){
    console.log(x)
}

// Add all numbers in [5, 10, 15, 20] using for...of
const sum1=0
const n1=[5, 10, 15, 20]
for(let q of n1){
    sum+=q
}
console.log(sum)

// Print only even numbers from [2, 5, 7, 8, 10]
const arr=[2, 5, 7, 8, 10]
for(let s of arr){
    if(s%2==0){
        console.log(s)
    }
}

// For array ['React', 'Node', 'Mongo'], print: "I love React", etc.
const skill= ['React', 'Node', 'Mongo']
for(let sk of skill){
    console.log(`I love ${sk}`)
}
// Print total of product prices [99, 199, 499]

const qw=[99, 199, 499]
let totalPrices=0;
for(let s of qw){
    totalPrices+=s
}
console.log(totalPrices)