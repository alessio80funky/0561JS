const btn = document.getElementById("btn");
const title = document.getElementById("title");

const err = document.getElementById("error");
const chart = document.getElementById("Chart");

let myChart;
btn.addEventListener("click", async function(){

    try{
        const res = await fetch("./data.json");
        if(!res.ok){
        throw new Error(
            err.textContent = `エラー：${res.status}`,
            err.style.color = "red"
        );
    };
    const data = await res.json();

  title.textContent = data.title || "グラフ"

myChart?.destroy();

myChart = new Chart(chart, {
     type: 'line',
      data: {
        labels: data.labels || [],
        datasets: (data.datasets || []).map((ds) =>({
            ...ds,
        }))
      },
      options:{
        responsive: true,
        beginAtZero:true
      },
  });
    }catch(error){
        err.textContent = "メッセージ：" + error.message
        err.style.color = "red"
    }

});
