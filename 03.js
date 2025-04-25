// Q: Find the maximum number in an array.

// Expected Output:
// Input: [5, 1, 9, 3] → Output: 9

const n=[5, 1, 9, 3] 
let max=n[0]
n.forEach((x,index)=>{
    if(n[index]>max){
        max=n[index]
    }
})

console.log(max)