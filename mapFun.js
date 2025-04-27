// 🧪 5 Assignments for map()
// ✅ Multiply all numbers in [1, 3, 5] by 3 → Output: [3, 9, 15]

// ✅ Add 5 to each element in [10, 20, 30]

// ✅ Convert ['apple', 'banana'] to uppercase

// ✅ Append ₹ symbol to [100, 200, 300] → ['₹100', '₹200', '₹300']

// ✅ Convert an array of temperatures in Celsius [0, 10, 20] to Fahrenheit

const num=[1, 3, 5] 
const mulOfThree=num.map((x)=>x*3)
console.log(mulOfThree)

const n=[10, 20, 30]
const addFive=n.map(x=>x+5)
console.log(addFive)

const fruit=['apple','banana']
const covertUpper=fruit.map((x)=>x.toUpperCase())
console.log(covertUpper)

const q=[100,200,300]
const appendSym2=q.map((x)=>'₹'.concat(x))
console.log(appendSym2)

const temp=[0,10,20]
const convertFarenheit=temp.map(x=>x+32)
console.log(convertFarenheit)