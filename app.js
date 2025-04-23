//assignment 1
var programingLanguages=["javascript","python","java","C++"];
console.log(programingLanguages[1]);
// assignment 2
var update =programingLanguages.push("rubby","go");
console.log(programingLanguages);
// assignment 3
var del = programingLanguages.pop();
console.log(del);
console.log(programingLanguages);
// assignment 4
var unshiftlanguages = programingLanguages.unshift("javascript","Swift");
console.log(programingLanguages);
// assignment 5
var shiftlanguages= programingLanguages.shift();
console.log(shiftlanguages);
console.log(programingLanguages);
// assignment 6
var index = programingLanguages.indexOf("java");
console.log(index);
// assignment 7
var arrylength = programingLanguages.length;
console.log(arrylength);
// assignment 8
programingLanguages[2]="Rust"
console.log(programingLanguages);
//assignment 9
var webtechnologies=["Html","Css","REact"];
console.log(webtechnologies);
var teckstack = programingLanguages .concat(webtechnologies);
console.log(teckstack);
// assignment 10
var splicedarray = webtechnologies.splice(1,2);
console.log(webtechnologies);
console.log(splicedarray);
// assignment 11
var reversearray = teckstack.reverse();
console.log(reversearray);







// loops Assignments
// Assignment 1
for (let i = 1; i <= 10; i++) {
    element = i;
    console.log(element);
    
}
 
// Assignment 2
let sum = 0;
for (let i = 0; i <=100; i++) {
    sum += i;  
}
console.log("the sum of number for 1 to 100" , sum);

// Assignment 3 

for ( let i=0; i <=50 ; i++){
   if (i%2===0) {
    console.log("even numbers are", i);
    
   }
}

// Assignment 4
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
  
