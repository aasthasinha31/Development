//array


let NAMES = [ " aastha ", " vikash" ," Sneha" , "aanya" ," aditya" ," apurva" , "tanvie" ," kashvi" ," kush"    ];
for(  let i=0 ; i<= NAMES.length ; i++      ) {
    console.log( NAMES[i] );
};



//avg marks of class

let marks= [   85,97,44,37,76,60   ];
sum=0;
for( let i=0;i<=marks.length;i++) {
    sum=i+1
};
let avg=sum/marks.length;
console.log("avg marks of class=",avg);


//array methods
//ary.push

let foodItem = ["apple","mango","pizza","dal chawal","potato"];
foodItem.push( "maggie","juice","chips");
console.log(foodItem);

//ary.pop
foodItem.pop();
console.log(foodItem);

//splice array (index number,no of array jitna delete krna hai,adding array)
let num=[ 1,2,3,4,5,6,7   ];
num.splice(3,0,43);

//create array and 1.remove 1st array,2.remove uber and ola,3.add amazon
let company=["bloomberg","microsoft","uber","google","IMB","netflix"];
company.shift();
company.splice(1,1,"ola");
company.push("amazon");