//function  || put inputs btw () for fixed msg/or command



function myFunction() {
    console.log("hello everyone");
    console.log("my name is AASTHA SINHA");
}
myFunction();

//sum of two numbers

function sum(a,b) {
    console.log(a+b);
}

//arrow function

let multiply = (c,d) =>{
         return c*d;
}

//find largest number
let n=[1,2,42,42,592];
const output = n.reduce ( (prev,curr) => {
      return prev > curr ? prev:curr ;
})
console.log(output);
