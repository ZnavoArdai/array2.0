//14
// function ages(x=[]){
// var y=[];
//     for(var i=0;i<x.length;i++){
//         if(x[i]>20){
// y.push(x[i]);
//         }
//     }

    
// console.log(y);
// }

// ages([2,21,12,3,67,8,99,9,54,4,5,88,9,6,56]);

//asaaf challenge
// function checklist(num,x=[]){


// while(num!=0){
//     num=prompt("enter item list(to end list enter 0)");
//     if(num!=0){
//         x.push(num);
//         num=confirm("do you want to end list?")

//         if(num==true){
//             num=0;
//             num=prompt("enter item list(to end list enter 0)");

//         }

    
       
//     }
// console.log(x);
//     }
// }


// checklist();


//15

// function plusIndex(x=[]){


//     for (var i=0;i<x.length;i++){
// console.log(`${i}${x[i]}`)
//         // x[i]=`${x[i]}` ;
//         x[i]=`${i} ${x[i]}`;
//     }

//     console.log(x);
// }

// plusIndex(["avi","78","ron"]);
 //16
// function even(x=[]){
// var y=[];
//     for(var i=0;i<x.length;i++){
//      if(x[i]%2==0){
//          x[i]="even"
//      }   
//     }
//     y=x;
//     return console.log(y);
// }

// even([1,2,3,4,5,6,7,8]);

//17

// function numbers(num1,num2){
// num1=parseInt(prompt("enter number 1"));
// num2=parseInt(prompt("enter number 2"));

// console.log(num1,num2);


// }

//18
// function numbers(num1,num2){
// num1=parseInt(prompt("enter number 1"));
// num2=parseInt(prompt("enter number 2"));

// var sum=num1+num2;
// if(sum==13){
//     console.log("bar mitzva");

// }
// else if(sum==12)
// console.log("bat mitzva");
// else
// console.log("kid");



// }

//19

// function person(age,fname,lname,num){
//     var i=0;
// if(age>18){
// while( i<num){
//     console.log(fname,lname)
//     i++;
// }
// }

// }

// person(23,"sadsa","levi",46);
//20

// function printJava(){
// for(var i=0;i<1000;i++){
//     console.log("javascript is not java")
// }
// }

// printJava();

//21

// function printNum(name,number){
// name=prompt("enter name");
// number=parseInt(prompt("enter number"));
// for(var i=0;i<number;i++){
//     console.log(name);
// }

// }

// printNum();

//22
// function printDetails(name,age,email,number){
// name=prompt("enter name");
// age=prompt("enter age");
// email=prompt("enter email.");

// console.log(name,age,email);


// number=parseInt(prompt("enter number"));
// for(var i=0;i<number;i++){

//     if (age>=18) {
//         console.log(name,age,email);
//     }
// }

// }

// printDetails();

//23

// var number=prompt("enter number");

// for(var i=0;i<number;i++){
    
//     var namee=prompt("enter name");

//     if(namee=="znavo"){
//         console.log("hi bos"+namee)
//     }

//     else
//     {
//         console.log("no entry");
//     }

// }

//24

// var num1=prompt("enter number1");
// var num2=prompt("enter number1");


// for(var i=0;i<num1;i++){
//     for(var j=0;j<num2;j++){
// console.log(i*j)
//     } 
// }

//25

// var x=[5,8,7,9,2];

// for(var i=0;i<x.length;i++){
//     console.log(x[i])
// }

//26
// var x=["avi","natan","moti","beni","mor"];

// for(var i=0;i<x.length;i++){
//     console.log(x[i])
// }

//27

// var x=[55,88,77,94,22,45,54,62];

// for(var i=0;i<x.length;i++){

//     if(x[i]%2==0){
//         console.log(x[i])

//     }
// }

//28

//  function saveNames(x=[]){
// var name=[];
//     for(var i=0;i<5;i++){
//         x=prompt("enter names");

// name.push(x);

//     }

// console.log(name);
//  }
//  saveNames();

//29

// function printNotEven(x=[]){

//     for(var i=0;i<7;i++){
//         var num=parseInt(prompt("enter number"));
// x.push(num);
// if(x[i]%2==1){
//     console.log(x[i]);
// }
// console.log(x);

//     }


// }



// printNotEven();
//30

// var x=[1,"hello",89,"boba",45];

// for(var i=0;i<x.length;i++){
//     if(x[i]*0!=0)
//     {
//         x[i]="not_number";
//     }

// }

// console.log(x);

//31









 
//33


// function printNumbers(x){

//   x=parseInt(prompt("enter number"));

// var yehidot=x%10;
// var asrot=x%100/10;
// var meot=x/100;

// console.log(yehidot);
// console.log(asrot);
// console.log(meot);




// }

// printNumbers();
//יעקב פיתרון שאלה אחרונה 
// function printNumbers(x){

//     x=parseInt(prompt("enter number"));
  
// while(x/10!=0){
//     var result=x%10;
//     console.log(result);
//     x=(x-result)/10;

// }
  
//   }
  
//   printNumbers();

//30

// function randomEntris(x){
//     for(var i=0;i<x.length;i++){
//         if(x[i]*1!=x[i]){

//             x[i]="not_number";
//         }
//     }

//     console.log(x);
// }

// randomEntris([1,2,3,4,"avi","natan",4]);

//31


//32
// function squeer(num1,num2){
// num1=parseInt(prompt("enter tzla"));
// num2=parseInt(prompt("enter gova"));

// console.log("shtah= "+num1*num2+"hekif= "+(num1*2+num2*2))

// }

// squeer();

//33

// function orderNumbers(x){
// var newnum=[];
// var count1=false;
// var count2=false;

//     for(var i=0;i<3;i++){
//         x=parseInt(prompt("enter number"));
//        newnum.push(x);


    
//     }

//     if(newnum[0]>newnum[1]&&newnum[1]>newnum[2]){
//         console.log("down")

//     }
//     else if(newnum[0]<newnum[1]&&newnum[1]<newnum[2]){
//         console.log("up")

//     }
//     else
//     console.log("not orderd")

// }orderNumbers();

//35

// function printString(x){
//     for(var i=0;i<x.length;i++){
//         console.log(x[i]);


//     }

// }
// printString("hello");

// function returnNewString(x){

//     var newword="";
//     for(var i=0;i<x.length;i++){

//       console.log(x[i]=x[i]+i);

//       newword+=x[i]+i;
      

//     }

//    return  console.log(newword);
    

// }
// returnNewString("hello");


// function changeEvnes(x){

//     var newWord="";
//   for(var i=0;i<x.length;i++){

// if(i%2==0){
// newWord+="2";
// }

// else{
//     newWord+=x[i];
// }
    
//   }

//   console.log(newWord)
// }

// changeEvnes("hello")


// function firstName(fname){
// var temp=" ";
// var newar=[];
// var cunter1=0;
// var upp;
// fname=prompt("enter name");
// for(var i=0;i<fname.length;i++){
    
//     if(fname[i]==temp){
//         cunter1++


// }

// if(cunter1==0)
// {
// fname=fname.toUpperCase();
// console.log(fname)
// }
// }



// if(cunter1==2)
// {
//     console.log(fname)

// }
// else {
//     console.log(fname)

// }
 







// }

// firstName();





    


   



