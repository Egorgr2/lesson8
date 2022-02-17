const message = 'Welcome to Ukraine!'

let arr = message.split("");
console.log(arr);
console.log(arr.indexOf("l"));
arr = message.split(" ");
console.log(arr.join(" "));





const arr1 = [1, 2, 3];
const arr3 = [4, 5, 6];
const arr9 = arr1.concat(arr3);
console.log(arr3);




let str = "hello world";


const arr7 = str.split(' ');

let str1 = arr7[0]; 
let str2 = arr7[1]; 

let res1 = str1[0].toUpperCase() + str1.slice(1);
let res2 = str2[0].toUpperCase() + str2.slice(1);

console.log(`${res1} ${res2}`);









let numbers = [2,1,4];
let numbers2 = [];
for (const i of numbers) {
  numbers2.push(i ** 3)
}
console.log(numbers2);






const str4 = 'привет';
let splitting = str4.split('');
let result4 = [];

for (let i1 = 0; i1 < splitting.length; i1 += 1) {
  if (i1 % 2 !== 0){
    result4.push(splitting[i1]);
  } else {
    result4.push(splitting[i1].toUpperCase());
  }
}
console.log(result4.join(''));