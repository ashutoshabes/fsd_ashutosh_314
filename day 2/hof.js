//
//map() takes call back function as parameter
let arr=[1,2,3,4,5,6,7,8,9,10];
arr.map((data)=>console.log(data)) // here it is used as an iterator as an loop 
const multipleOfTwo=arr.map((data)=>data*2) //and here it is used as an map and returns a array
console.log(multipleOfTwo)

const divisibleByThree=arr.filter((num)=>num%3==0);
console.log(divisibleByThree)

const firstdivisibleByThree=arr.find((num)=>num%3==0);//returns single object
console.log(firstdivisibleByThree)


//reduce take two parameter in case of sum 0 is passed and in case of multiple 1 is passed these values initializes the acc whic means accumulator

const sumOf=arr.reduce((data,acc)=> acc+=data,0);
console.log(sumOf)