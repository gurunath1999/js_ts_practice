// Q: Create an array of 5 numbers. Print the sum.

// Expected Output:
// Sum is: 15 (if array is [1, 2, 3, 4, 5])

const num=[1,2,3,4,5]
let sum=0;

num.forEach((n,index)=>{
    sum+=n
})

console.log(sum)