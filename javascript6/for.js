//for文

/*

for(初期値 ; 条件式 ; 更新[++]){
実行したいものをここにいれる
}

*/
//    スタート　　ループ回数  制御
for (let i = 0;    i < 5;   i++){
    console.log("iの値", i);//ループの内容
};

//注意
///無限ループ

//ケース①
/*更新（インクリメント演算子）を書かない
for (let x = 0; x < 5; ){
    console.log("iの値", x);
};
*/

//ケース②
/*デクリメント演算子を使う
for (let x = 0; x < 5; x--){
    console.log("iの値", x);
};
*/

//ケース③
/*パラメーターを書かない
for (; x < 5; ){
    console.log("iの値", x);
};
*/


//少数を指定しない

                           //算術型演算子もかえます
for(let j = 0; j < 5; j += 0.1){//少数はバグります
     console.log("jの値", j);
}

//forの中にifを使うことができます

for(let k = 0; k < 10; k++){

    if(k % 2 === 0){
        k++;
    }

    console.log(k)
}

//補足：

//for...in文（オブジェクトにしかつかわれない）
//オブジェクトのプロパティを一個ずつを取り出すための命令です
const user = { 
    name: "josh",
    age:45,
    city:"New York"
};

for(const i in user){
    console.log(`${i}:${user[i]}`);
};

//for...of(配列にしかつかわれない）

const fruits = ["apple","banana","cherry"]

for(const f of fruits){
    console.log(f);
};