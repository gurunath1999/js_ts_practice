// Q: Find how many times 2 occurs in [2,1,2,3,2,4]

// Expected Output:
// 3
const n=[2,1,2,3,2,4]
let count=0;
n.forEach((x,index)=>{
    if(n[index]===2) {
        count++
    }
})

console.log(count)