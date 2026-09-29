const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("totalBalance");

const form = document.getElementById("transactionForm");

const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const transactionList = document.getElementById("transactionList");

const btn = document.getElementById("btn");
const err =  document.getElementById("error");
const chart = document.getElementById("Chart");
const title = document.getElementById("title");


const STORAGE_KEY = "kakeibo20260929";

let transactions = [];


window.addEventListener("load", function(){
    loading.classList.add("loaded")
    let myChart;



    function init(){
        form.addEventListener("submit",submitTransaction)
        btn.addEventListener("click", chartAnalytics);
        loadTransactions();
        updateUI();
    }

init();

    function submitTransaction(e){
        e.preventDefault();

        const description = descInput.value;
        const amount = Number(amountInput.value);
        const type = typeInput.value;

        if (!description || !amount || amount <= 0){
            alert("正しい値を入力してください。")
            return;
        }

        const transaction ={
            description,
            amount,
            type,
            id: Date.now(),
            date: new Date().toLocaleString("ja-JP")
        }

        transactions.unshift(transaction)
        saveTransactions();
        updateUI();
        form.reset();
    }

    function loadTransactions(){
        const stored = localStorage.getItem(STORAGE_KEY);
        if(stored){
            transactions = JSON.parse(stored);
        }
    }

    function saveTransactions(){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    }

    function deleteTransactions(id){
        transactions = transactions.filter( t => t.id !== id)
        saveTransactions();
        updateUI();
    };


    function updateUI(){
        updateSummary();
        updadeTransationList();
        if (myChart) chartAnalytics();
    }

    function updateSummary(){
        const income = transactions.filter(t => t.type === "income" ).reduce((sum, t) => sum + t.amount, 0);
        const expense = transactions.filter(t => t.type === "expense" ).reduce((sum, t) => sum + t.amount, 0);
        const balance = income - expense;

        totalIncomeEl.textContent  = `${income.toLocaleString()}円`
        totalExpenseEl.textContent  = `${expense.toLocaleString()}円`
        balanceEl.textContent  = `${balance.toLocaleString()}円`

        if(balance > 0){
            balanceEl.style.color = "green";
        }else if(balance < 0) {
            balanceEl.style.color = "red";
        }else{
            balanceEl.style.color = "purple";
        }
    }


    function updadeTransationList(){
        transactionList.innerHTML = "";

        transactions.forEach(t => {
            const li = document.createElement("li");

            li.className = `transaction-item ${t.type}`;

            const symbol = t.type === "income" ? "+" : "-";

            li.innerHTML=`<div class="transaction-info">
                <div id="transactionDescription" class="transaction-description"></div>
                <small style="color: #999;">${t.date}</small>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="transaction-amount ${t.type}">
                    ${symbol}¥${t.amount.toLocaleString()}
                </span>
                <button id="btnDelete" class="btn-delete">削除</button>
            </div>`;

            li.querySelector("#transactionDescription").textContent = t.description;

            li.querySelector("#btnDelete").addEventListener("click", () => deleteTransactions(t.id));

            transactionList.appendChild(li);
   
        })
    } 
    
    function chartAnalytics(){

        const colors = [
            {backgrond:"green", border:"green"},
             {backgrond:"red", border:"red"},
              {backgrond:"purple", border:"purple"}
        ]


        const income = transactions.filter(t => t.type === "income" ).reduce((sum, t) => sum + t.amount, 0);
        const expense = transactions.filter(t => t.type === "expense" ).reduce((sum, t) => sum + t.amount, 0);
        const balance = income - expense;

        title.textContent = "グラフ";
        myChart?.destroy();

        myChart = new Chart(chart, {
              type: 'bar',
      data: {
        labels: ["収入","支出","合計"],
        datasets: [{
            label: "",
            data:[income,expense,balance],
            borderWidth: 2,
            borderColor:[colors[0].border, colors[1].border, colors[2].border] ,
            backgroundColor:[colors[0].backgrond, colors[1].backgrond, colors[2].backgrond]
        }]
      },
      options:{
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { display: false }
        }
      },
        })
            

    }



})
