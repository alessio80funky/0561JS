///メソッド

//string

let name = "alessio"
let name2 = "ALESSIO"
let name3 = "javascript"

console.log(name.toUpperCase());//ALESSIO
console.log(name2.toLowerCase());//alessio
console.log(name.indexOf("l"));//1
console.log(name2.includes("AL"));//true
console.log(name.slice(0 , 4));//ales
console.log(name3.replace("java", "type"));//typescript

//number

let num = 2.23004040505050606;

console.log(num.toFixed(2))//2.23
console.log(typeof num.toString())//string

//array

let arr = ["apple", "grape", "orange"];

arr.push("melon")//[ 'apple', 'grape', 'orange', 'melon' ]
arr.pop()//[ 'apple', 'grape', 'orange' ]
arr.shift()//[ 'grape', 'orange' ]
arr.unshift("watermelon");//[ 'watermelon', 'grape', 'orange' ]

const result = arr.join("-")//watermelon-grape-orange
const result2 = arr.includes("watermelon");//true
const result3 = arr.indexOf("watermelon");//0

console.log(arr);
console.log(result);
console.log(result2);
console.log(result3);

//date
 const today = new Date()

 console.log(today)//2026-09-23T03:05:51.733Z
  console.log(today.toLocaleString())//2026/9/23 12:05:51
  console.log(today.getFullYear())//2026
  console.log(today.getMonth())//8 = ９月
  console.log(today.getHours())//12  現時点の時間
  console.log(today.getMinutes())//9 現時点の時間
  console.log(today.getDay())//3  水曜日　０は日曜日


const option ={
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  }

  console.log(today.toLocaleDateString("ja-JP", option))//2026年9月23日水曜日
  console.log(today.toLocaleDateString("it-IT", option))//mer 23 settembre 2026
  console.log(today.toLocaleDateString("es-ES", option))//mié, 23 de septiembre de 2026
  console.log(today.toLocaleDateString("en-US", option))//Wed, September 23, 2026


//math

const op = 1.13;

console.log(Math.round(op))//1  四捨五入

console.log(Math.floor(op))//1　切り捨て

console.log(Math.ceil(op))//2 0.1  を超えても切り上げる

console.log(Math.random())//ランダムな数値