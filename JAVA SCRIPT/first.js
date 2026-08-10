/*console.log("college");

name="aastha";
console.log(name);//variable*/

const student = { //object
    name:"vikash raj",
    age:"21",
    course:"btech",
    ispass:"true",
};

//operations +,-,*,/;
let a=3;
let b=6;
console.log(a+b);

//unary operator (a++)(a--)
let c="3";
c++;
console.log("c=",c++)
let d="3";
d--;
console.log("d=",d--);

//assignment operator 
let e=2;
let f=3;
e += 5; // e=e+5
f -= 2; //f=f-2
console.log("e=",e);
console.log("f=",f);

//if else
let g=100;
if(g%2==0) {
    console.log("even")
}
else{
    console.log("odd")
};

//prompt
let name = prompt("name");
console.log(name);

// check number is multiple of 5 or not
let num = prompt("enter any number");
if(num%5==0){
    console.log("yes this is multiple of 5")
} else {
    console.log("not a multiple")
};
