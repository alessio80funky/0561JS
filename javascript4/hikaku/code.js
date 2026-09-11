///比較演算子

//比較演算子（データを比べる演算子）：　[===] [!==]  [<] [>] [<=] [>=]

//[評価型]

///「 === , == (イコール) / !==, !=」(ノットイコール)

/**
 * == ->  大体同じ
 * === ->  完全に同じ「実務」
 * != ->  微妙に違います
 * !== ->  完全に違います「実務」
 */


let x = 0 == false;//falsy値で判断
console.log(x);//true

let y = 0 === false;//データ型で判断
console.log(y);//false

let k = 0 != false;//falsy値で判断
console.log(k);//false

let j = 0 !== false;//データ型で判断
console.log(j);//true


//[大小型]

// 「>,<, >=, <=」

//number

a = 3 > 10;
console.log(a);//false
b = 1 < 20;
console.log(b);//true

c = 18;
d = 21;

console.log(c <= 20);//true 20を含めて以下のが数値がtrue
console.log(d >= 20);//true 20を含めて以上の数値がtrue

//string
//        50     49
let num = "2" > "1000";//true  頭文字で判断
//           65         97
let str = "Apple" > "banana"// false