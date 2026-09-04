///データ型

//プリミティブ型

//プリミティブ型は、数値や文字列などの基本的なデータ型です。

//- 文字列型（String）=>文字の並びを表すデータ型。「需要」

let str ="\"アレッシオ\"";
console.log(str);

///ストリング型に関しての注意

name = "'luigi'";//ダブルクォーテーションの中にシングルクォーテーションはOK
nameB = '"mario"';///シングルクォーテーションの中にダブルクォーテーションはOK
//nameC = ""koopa""///ダブルクォーテーションの中にダブルクォーテーションはNG
//nameD = ''name''//シングルクォーテーションの中にシングルクォーテーションはNG

//もしどうしてもつかいたいなら、エスケープシーケンスを使います！

nameD = '\'name\'';

//バッククォーテーション

let code = 12388485757389939;

let word = `code:${code}`//テンプレート文字列といいます

console.log(word)//code:12388485757389940

console.log("java" + "script");
console.log("10" + 10 + 10)//101010
console.log( 10 + 10 + "10")//2010

//ストリング型・数値型を計算するとき注意

let calc = "2" - 1;//文字列型の数値と計算しても大丈夫です！

let string = "abc" - 2; //数値型は文字列と計算できません！

console.log(calc)//1

console.log(string)//NaN -> Not a Number

//- 数値型（Number）=>整数や小数などの数値を表すデータ型。「需要」

let num = 20;

//真偽値型（Boolean）=>trueまたはfalseの値を表すデータ型。「需要」「判断型のデータ型」判断が必要なプログラムに使う

let bln = true;
let bool = false;

/*====================================================================================*/

//その他

//- null =>値がないことを表すデータ型。特殊型 ＝＞ 使う場面が少ない

let data = null;

//- undefined =>値が未定義であることを表すデータ型。特殊型　＝＞　使う場面が少ない

let text;

//参照型

//参照型は、オブジェクトや配列などの複雑なデータ型です。

//- オブジェクト型（Object）=>を様々なデータを持つデータ型。

let user = {
//  キー    　値
    name: "アレッシオ",
    age:36,
    job:"エンジニア",
    ethnicity: "ユダヤ人",
    nationality:"イタリア"
};

//- 配列型（Array）=>要素の並びを表すデータ型。

let arr = [1,2,3,4,5,6,7,8,9];

///配列に関しての補足

//配列は順番にデータを管理する箱です。
//               0         1　　　　　2
let fruits = ["apple", "banana", "orange"];///インデックス番号

console.log(fruits);//[ 'apple', 'banana', 'orange' ]
console.log(fruits[0]);//apple //[0] ->プロパティの指定
console.log(fruits[1]);//banana


///配列のネスト

let users = [
//     0      1
    ["taro", 20],//0
//     0        1
    ["hanako", 25]//1
]

console.log(users);//[ [ 'taro', 20 ], [ 'hanako', 25 ] ]
console.log(users[1][1])//25
console.log(users[0][1],users[1][1])//20 25

//オブジェクトに関しての補足

let person = {
    name:"太郎",
    age:25
}

console.log(person);//{ name: '太郎', age: 25 }　
console.log(person.name)//太郎　
console.log(person.age)//25　

//オブジェクトのネスト

let person2 = {
    name:"太郎",
    age:25,
    address:{
        city:"osaka",
        ward: "chuo-ku",
        block:"1-1"
    }
}

console.log(person2)//{ name: '太郎', age: 25, address: { city: 'osaka' } }

console.log(person2.address.city)//osaka


