//組み込みオブジ
// ェクト（コンストラクター）

///組み込みオブジェクト例：　 const today = new Date()

//string

let num = 13;

//const str = new String(num);//objectになる 基本的にはstringの場合はnew  を使わない
const str = String(num);

console.log(typeof str);//13 string

//number

let num2 = "13";

//const n = new Number(num);//objectになる 基本的にはstringの場合はnew  を使わない
const n = Number(num2);

console.log(typeof n);//13 number

//array

let data = {
    fruit1: "apple",
    fruit2: "banana",
    fruit3: "orange"
}

 const arr = new Array(data.fruit1, data.fruit2,data.fruit3)

 console.log(arr);//[ 'apple', 'banana', 'orange' ]

//date

 const today = new Date()

 console.log(today)

//error

throw new Error("問題発生")

