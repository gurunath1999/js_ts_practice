// Reverse an array without using reverse() method.

// Expected Output:
// Input: [1,2,3,4] → Output: [4,3,2,1]

const n=[1,2,3,4]
const newArray=[]
for(let i=n.length-1;i>=0;i--){
    newArray.push(n[i])
   

}

console.log(newArray)