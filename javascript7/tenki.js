const template = document.getElementById("template");
const hour= document.getElementById("hour");
const text= document.getElementById("text");
const ten = document.getElementById("tenki")
const loading = document.querySelector("#loading");


window.addEventListener("load", function(){

fetch("https://api.open-meteo.com/v1/forecast?latitude=34.69&longitude=135.50&current=temperature_2m,weather_code")
.then(function(tenki){
    return tenki.json()
})
.then(function(tdata){

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

   hour.textContent += `${new Date().toLocaleDateString("ja-JP",options)}`;
   template.textContent += `大阪市 ℃ ${tdata.current.temperature_2m} `


   if(tdata.current.temperature_2m >= 24.5 && tdata.current.temperature_2m <= 25.0){
      text.textContent += "過ごしやすい"
      ten.style.backgroundImage = "url('./hot.jpg')"
      ten.style.width = "120px"
      ten.style.backgroundSize = "cover"
      ten.style.backgroundPosition = "center"

   }else if(tdata.current.temperature_2m >= 15.0 && tdata.current.temperature_2m <= 24.4){
      text.textContent += "良い"
      ten.style.backgroundImage = "url('./nice.jpg')"
      ten.style.width = "120px"
      ten.style.backgroundSize = "cover"
      ten.style.backgroundPosition = "center"
   }
})
.catch(function(error){
    console.log("エラー：", error)
})
.finally(function(){
    loading.remove()
})


});


