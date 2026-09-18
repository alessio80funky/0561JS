//if文

///Javascriptでは３つのプログラム構造が存在しています

//順次型　＝＞　プログラムが順番に読み込んでいくプログラムの構造です。優先順に基づいて読み込んでいく。

//選択型　＝＞　条件分岐のことです。プログラムが条件に基づいて動く。

//反復型　＝＞　繰り返し処のことです。プログラムが求めている条件を満たせば、繰り返し処理を行う。

/*

if(条件式){
    条件が満たせば、こちらに書かれているプログラム実行する　(true)
}else{
    合わなければ、こちらを実行する (false)
}

*/

let x = 10;

if(x >= 10){
    console.log("10以上")
}else{
    console.log("10以下")
}


//else if文
///条件が複数ある場合は使用する

let score = 89;

if (score >= 90){
    console.log("A")
} else if (score >= 80){
    console.log("B")
} else if (score >= 70){
    console.log("C")
} else if (score >= 60){
    console.log("D")
}else{
    console.log("F")
}


///基本的には論理演算子と比較演算子はつかえますが、代入演算子は使用しない。

//例：
if (z = 9) {
    console.log("zは９です")
}//NG


