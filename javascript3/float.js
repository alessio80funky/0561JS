//掛け算・割り算と少数の計算について

console.log(0.2 * 3)//0.6000000000000001 -> 0.7  として認識されがち。

console.log(((0.2 * 10)* 3) / 10)//0.6　ー＞推奨されていないやりかた

//Math.round  四捨五入を行うためのメソッドです(Mathはかならず大文字)

let x = 0.14 * 100;

let y = 0.28 * 100;

console.log(x);//14.000000000000002

console.log(y);//28.000000000000004

console.log(Math.round(x));//14

console.log(Math.round(y));//28