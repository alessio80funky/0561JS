//論理演算子（データを判断する演算子）： [&&] [||] [!]

// [&&] =>  どちらも　（そして）
// [||]　=>  どちらか　（もしくは）
// [!]　=>  否定する

//=============================================================//


// [&&] =>  どちらも　（そして）

console.log(true && true && true)//true　trueになるためにすべてtrueでなければならない
console.log(true && false && true)//false  falseがあればプログラムが全体的falseになります


x = 5 > 3 && 10 > 7;
console.log(x);//true

y = 5 > 3 && 10 < 7;
console.log(y);//false

// [||]　=>  どちらか　（もしくは）

console.log(true || true || true)//true
console.log(true || false || true)//true  どちらかならプログラムがtrueになります
console.log(false || false || false)//false

z = 5 > 3 || 10 > 7;
console.log(z);//true

j = 5 > 3 || 10 < 7;
console.log(j);//true

// [!]　=>  否定する

a = true;
b = false;

console.log(!a);//true -> false
console.log(!b);//false -> true


let age = 17;
let highSchool = false;
let college = false;

if (age >= 18 && college ){
    console.log("大学生")
}else if (age <= 18 && highSchool){
    console.log("高校以下")
}else if (age <= 18 || age >= 18 && !college || !highSchool){
    console.log("学生じゃない")
}