const name = "Aasan"

const repoCount = 50

//console.log(name,repoCount,"Value"); this is outdated way to write code

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aasan-ak')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)

//console.log(newString);

const anotherString = gameName.slice(1,4)
//console.log(anotherString);

const newStringOne = "    Aasan    " //trim method remove the back spaces 

console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://aasan.com/aasan%20chouhan"

console.log(url.replace('%20','-'));

console.log(url.includes('Kumar'));

console.log(gameName.split('-'));