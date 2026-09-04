///関数

function sayHello(){
    console.log("hello!")
}

sayHello();

///関数式関数
let hello = function(){
    console.log("Ciao!")
}

hello();


///アロー関数

let Aisatsu = () =>{
    console.log("Hola!")
}

Aisatsu();

//引数

///引数は関数を実行するときに渡すデータ


let name = " taro ";
let nation = "日本人";


greet(name, nation);

                //引数
function greet(name,nation){
   console.log("こんにちは" + name + "さん")
   console.log(`私は${nation}です,こんにちは${name}さん`)
   return;///一連の流れが終わったら振り出しにもどる
};


///戻り値(return)
///関数の外にデータを返すための命令文です。
///もし、データがなければ、振り出しにもどる

let x = 4;
let y = 2;

console.log(add(x,y));

function add(x,y){
    return x * y //returnのあとにデータがあったら処理した状態で、関数の外に渡す。
};
price = 1000;

let total = tax(price);

function tax(price){
  return price * 1.1
}

console.log(total);



