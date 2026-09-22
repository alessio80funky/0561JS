const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function(){
    const data = input.value;
    const score = data.split(",");
/*
    for(let i = 0; i < score.length; i++){
        const sc = Number((score[i]));
        const item = document.createElement("li");

        if (sc >= 80 && sc <= 100){
            item.textContent = `${sc}点は合格です`
        }else if ( sc >= 0 && sc <= 79){
            item.textContent = `${sc}点は合格不合格です`
        }else{
            item.textContent = `${sc}は判定の範囲外`
        }

        item.appendChild(list)
    }
    */

    score.forEach(function(sc){
        const s = Number((sc));
        
    if (sc >= 80 && sc <= 100){
        list.innerHTML += `<li>${sc}点は合格です</li>`
    }else if(sc >= 0 && sc <= 79){
        list.innerHTML += `<li>${sc}点は合格不合格です</li>`
    }else{
        list.innerHTML += `<li>${sc}は判定の範囲外</li>`
    }
    })
});

