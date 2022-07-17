/*
alert("keep doing what you doing");

//자료형
const  a = 5;//unchangeable
let Am = true;//changeable
const b = 2;  
const myName = "Robin";
 
//NUll is something intent to leave it empty
//undefined


//PRINT 
console.log(5454545);//console.log = print  console 로그창에 print 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("hello "+ myName);

//BOOLEAN
if(Am == 1)
{
    console.log('true');
}

//ARRAY
const days = ["mon", "tues","wed", "thurs","fri", "sat"];
console.log (days);
console.log (days[1]);

//Adding one more element in array 
days.push("sun");//adding right after existing array 
console.log (days[6]);

//OBJECT 
const player = {
     name :"robin", 
     points: 10,
    fat : true, 
};
console.log(player);
console.log(player.name);
player.fat  = false; 
// I can change something inside the object 
// but I cannot change the whole object since it is const 
player.lastname  = " potato";
// I can add element inside the object, 
console.log(player);
player.points = player.points + 15;// updating the current value inside the object

//FUNCTION PART 1 
//함수선언 
function  sayHello(){
    console.log("Hello my name is ");
}
sayHello("robin");

//argument = 함수에서 불올수있는 값? 

//FUNCTION PART 2 
//I can add arguments inside () to show what should go in the functions
function  sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson);
}
sayHello("richard",10);
sayHello("robin", 12);

//Function Calculator 
function plus (a,b)
{ console.log(a + b);} 
function div  (a,b)
{ console.log(a / b);} 
plus( 3, 5);
div (3, 5);

//Recieveing data for the function using the placeholders 
const players = {
    name :"robin",
    sayHi:function(otherNames)
    {console.log("Hello" + otherNames); }
}; 
players.sayHi("Jack");



//HW
const calculator =  
{
    add:function add(a,b) {console.log(a+b);},
    minus:function minus(a,b) {console.log(a-b);},
    mul:function mul(a,b) {console.log(a*b);},
    div:function div(a,b) {console.log(a/b);},
    power:function power(a,b) {console.log(a**b);}
};
calculator.add(1,5);
calculator.minus(1,5);
calculator.mul(1,5);
calculator.div(1,5);
calculator.power(1,5);


//RETURNS 
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const Krage = calculateKrAge(age);
console.log(Krage);


//CONDITIONAL 조건
//const age1 = prompt("how old are you");
const age1 = parseInt(prompt("how old are you"));

parseInt();//convert string"" ---> actual value

console.log(typeof age, typeof parseInt(age1));
console.log( age,  parseInt(age1));
//if I do parseINT and have not a number then NaN (NOt a NUmber)

//isNaN ==> if that is number than false, not number false
console.log(isNaN(age1));

if(isNaN(age1)){
    console.log("age is number");
}
*/