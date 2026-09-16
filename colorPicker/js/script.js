//console.log(document.querySelector("#colorPicker").value)
//html = doument に対して　idを読み込む
///メソッドは必ずキャメルケース
///インスタンスのプロパティもキャメルケースでかきます。

//DOM (Document Object Model) = HTML

//DOMを操作するメソッドが存在する

//document.querySelector("#colorText").textContent =`カラーコード：${document.querySelector("#colorPicker").value}` ;

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");


function colorCode(){
    text.textContent = `カラーコード：${color.value}`;
}

color.addEventListener("input", colorCode);