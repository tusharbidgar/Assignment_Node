//First

const os=require('os');
const hostname=os.hostname();
const platform=os.platform();

console.log(`Platform of OS:${platform}`);
console.log(`Hotsname of OS:${hostname}`);

//Second

//npm install colors
const colors=require('colors');

console.log("Hello".red);

console.log("Welcome to Node JS".rainbow);

//Third

function calculator(a,b){
    function addition(){
        return a+b;
    }
    function subtraction(){
        return a-b;
    }
    function multiplication(){
        return a*b;
    }
    function division(){
        if(b===0){
            return "Error: Division by zero is not allowed!";
        }
        return a/b;
    }
    console.log(`Addition of ${a} and ${b}:`,addition());
    console.log(`Subtraction of ${a} and ${b}`,subtraction());
    console.log(`Multiplication of${a} and ${b}:`,multiplication());
    console.log(`Division of${a} and ${b}:`,division());
}
const num1=10;
const num2=5;
calculator(num1,num2);

//Forth

const meassage="Welcome to Node JS";
const iterations=5;
const delay=1000;

for(let num=0;num<iterations;num++){
    setTimeout(()=>{
        console.log(`${num+1}: ${meassage}`);
    },num * delay);
}