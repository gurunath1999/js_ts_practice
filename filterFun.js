// Try these now 👇

// ✅ Filter odd numbers from [10, 15, 20, 25, 30]

// ✅ Keep only positive numbers from [-2, 3, -1, 5, 0]

// ✅ Filter out strings with length <= 4 from ['one', 'three', 'seven', 'to', 'eight']

// ✅ Remove falsy values from [false, true, 0, 1, '', 'hello', null]

// ✅ Keep only numbers > 50 from [10, 60, 55, 30, 80, 100]

const num=[10, 15, 20, 25, 30]
const oddNum=num.filter((x)=>x%2==1)
console.log(oddNum)

const n=[-2, 3, -1, 5, 0]
const positive=n.filter(x=>x>=0)
console.log(positive)

const strArr=['one', 'three', 'seven', 'to', 'eight']
const findLen=strArr.filter((x)=>x.length<=4)
console.log(findLen)

const arr= [false, true, 0, 1, '', 'hello', null]
const removeFalsy=arr.filter((x)=>{
    return typeof(x)!=='boolean'&& x!==null && x!==''
})
console.log(removeFalsy)

const a=[10, 60, 55, 30, 80, 100]
const b=a.filter(x=>x>50)
console.log(b)