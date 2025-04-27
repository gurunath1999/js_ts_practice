// ✅ Find the first number divisible by 7 in [10, 14, 22, 28]

const n=[10, 14, 22, 28]
const divSeven=n.find((x)=>x%7==0)
console.log(divSeven)
// ✅ Find the index of the first negative number in [3, 5, -1, 0, -4]
const n1=[3, 5, -1, 0, -4]
const firstNegetive=n1.find((x)=>x<0)
console.log(firstNegetive)

// ✅ Find the first string with length > 5 from ['car', 'elephant', 'dog', 'tiger']
const str=['car', 'elephant', 'dog', 'tiger']
const greater=str.find((x)=>x>5)
console/log(greater)


// ✅ Find the first person with age > 25 from this array:
const arr=[{name: 'A', age: 20}, {name: 'B', age: 27}, {name: 'C', age: 30}]
const ageGreater=arr.find((x)=>x.age>25)
console.log(ageGreater)
// ✅ Find the index of the first even number in [5, 7, 11, 12, 15]

const n11=[5, 7, 11, 12, 15]
const evem=n11.findIndex((x)=>x%2===0)
console.log(evem)