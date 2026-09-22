//forEach  メソッド

//配列のデータを順番に処理するメソッドです

const num = [1,2,3,4,5,6,9,10];

//for

for(i = 0; i < num.length; i++){
    console.log(num[i])
}

//forEach

num.forEach((value) => {
    console.log(value)
})

///プッロパティのパターンの指定　→基本的にvalueを使います
const str = ["a","b","c"];

str.forEach((index, value, array) => {
    console.log(index, value, array)
})
/*

a 0 [ 'a', 'b', 'c' ]
b 1 [ 'a', 'b', 'c' ]
c 2 [ 'a', 'b', 'c' ]

*/


score = [80, 20, 30,200]

score.forEach(function(score){
    if (score >= 80 && score <= 100){
        console.log(`${score}は合格です`)
    }else if(score >= 0 && score <= 79){
        console.log(`${score}は不合格です`)
    }else{
        console.log(`${score}は判定の範囲外`)
    }
})