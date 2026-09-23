///非同期処理

const console = require("console");

//.then()

/*
例：
fetch("./url")///外部のURLにつかう
.then( x => x.json())
.then(data => console.log(data))
.catch(err => console.log(err))*/

const fs = require("fs").promises;

fs.readFile(__dirname + "/users.json", "utf8")///内部ファールのURLの規格を読み込む

.then(function(users){
    return JSON.parse(users)
})//JSON.parseでjson構築するメソッドです
.then(function(data){
   for(let i= 0; i < data.length; i++){
    console.log(`名前：${data[i].name} 年齢：${data[i].age}`)
   }
})
.catch(function(error){
    console.log("エラー：", error)
})


//fetch("./url")///外部のURLにつかう

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(r){
    return r.json()
})
.then(function(data){
   for(let x = 0; x < data.length; x++){
    console.log(`ID:${data[x].id},名前：${data[x].name},${data[x].email}`)
   }
})
.catch(function(error){
    console.log("エラー：", error)
})


fetch("https://api.open-meteo.com/v1/forecast?latitude=34.69&longitude=135.50&current=temperature_2m,weather_code")
.then(function(tenki){
    return tenki.json()
})
.then(function(tdata){
   // console.log(tdata)

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

    console.log(`${new Date().toLocaleDateString("ja-JP",options)}, 大阪市 ℃ ${tdata.current.temperature_2m}, `)
})
.catch(function(error){
    console.log("エラー：", error)
})

//async/await
try{
async function load(){
    const res = await fetch("url data")
    const data = await res.json()

    console.log(data)
}

}catch(err){
    console.log("メッセージ" + err.message)
}


/*
例：
fetch("./url")///外部のURLにつかう
.then( x => x.json())
.then(data => console.log(data))
.catch(err => console.log(err))*/
