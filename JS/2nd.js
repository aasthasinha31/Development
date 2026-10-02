//loop  

//sum of numbers
let sum=0;
for( let i=4;i<=10;i++) {
    sum=sum+i
};
console.log("sum is",sum);

//print odd numbers
for(let i=0; i<+100;i++) {
    if(i%2!=0){
        console.log(i);
    }
};
//game of guessing numbers
let gamenum=23;
let num=prompt("guess number");
while( gamenum != num ){
   num=prompt("guess the number again");
}
console.log("cogratulations");

//generate username with starting @ and end with length
let fullname= prompt("enter your name");
let username= "@" + fullname + fullname.length;
console.log(username);

