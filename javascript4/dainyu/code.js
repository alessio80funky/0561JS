//代入演算子（データの入れ替えを行う演算子）： [=] [+=] [-=]など

///単独代入：　a = 2;


//複合代入: (算術型)　「+=, -=, *=, /=, %=, **=」データを計算してから代入を行います

//複合代入:（論理型）「　&&= , ||= , ??= 」(and , or , nullish)　データを判断してから代入を行います


//複合代入: (算術型)


//number

let x = 10;

x += 5;//15
x -= 3;//12
x *= 2;//24

console.log(x);

//string

let msg = "hello";

msg += " world";

console.log(msg);//hello world


//複合代入:（論理型）

//truthy値：　true,  0以外,  空文字以外,　配列,　オブジェクト,　関数など。

//falsy値：　false, 0 , "",NaN  nullish値：null,undefined。

//①　&&= (and)
//対象のデータがtruthy値でしたら条件を満たすので、代入を行います

let z = 0.1;

z &&= 200;

console.log(z);//200


//②　||= (or)
//対象のデータがfalsy値でしたら条件を満たすので、代入を行います

let k = 0;

k ||= 300;

console.log(k);//300

//③　??= (nullish)
//対象のデータがnullish値でしたら条件を満たすので、代入を行います

let j = null;

j ??= 400;

console.log(j);//400
