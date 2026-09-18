//switch文

/*引数は外からデータを引っ張ってプログラム内に引き渡す特別な変数です。

switch(引数){
    case  値①:
        //条件が値1と一致した場合はこちらが実行されます
        break;
    case  値②:
        //条件が値2と一致した場合はこちらが実行されます
        break;
    default:
        //それ以外の条件
}


*/

let score = "C";

switch(score){
    case  "A":
        console.log("90から100までは条件です")
    break;
     case  "B":
        console.log("80から89までは条件です")
    break;
      case  "C":
        console.log("70から79までは条件です")
    break;
      case  "D":
        console.log("60から69までは条件です")
    break;
      case  "E":
        console.log("50から59までは条件です")
    break;
    default:
          console.log("50以下")
}

// fall through (フォールスルー)　注意
//breakを書かなければこのバグが発生する

let rank = 70;

switch(true){//truthy  と　falsy 判断して条件を探し出す
    case  rank >= 90 && rank === 100:
        console.log("A")

     case  rank >= 80:
        console.log("B")
 
      case rank >= 70:
        console.log("C")
  
      case  rank >= 60:
        console.log("D")
 
      case  rank >= 50:
        console.log("E")

    default:
          console.log("該当するランクありません")
}


