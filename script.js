var totalBalance = document.querySelector("#totalbalance");
var incomeBalance = document.querySelector("#incomebalance");
var expenseBalance = document.querySelector("#expensebalance");
var transactionRecord = document.querySelector("#transactionsrecord");

var btnAddTransaction = document.getElementById("btnAddtransaction");

function getAmount(){
    var expesneType = document.getElementById("expensetype").value;
    var amount = document.getElementById("amount").value;
    var record = document.createElement("div");
    record.setAttribute("id", "record");

    if(amount == "")
    {
        alert("Please enter an amount first");
    }
    else
    {
        if(amount > 0) {
            let totalBal = parseInt(totalBalance.innerHTML); 
            let incBal = parseInt(incomeBalance.innerHTML);
            console.log(typeof(incBal));
            let newAmount = totalBal + parseInt(amount);
            totalBalance.innerHTML = newAmount;
            incomeBalance.innerHTML = parseInt(incBal) + parseInt(amount);
            var incomeexpense = document.createTextNode(expesneType + " | " + amount + "$");
            record.appendChild(incomeexpense);
            transactionRecord.appendChild(record);
        }
        else if(amount < 0)
        {
            let totalBal = parseInt(totalBalance.innerHTML);
            let expBal = parseInt(expenseBalance.innerHTML)
            let newAmount = totalBal + parseInt(amount);
            totalBalance.innerHTML = newAmount;
            expenseBalance.innerHTML = expBal - amount;
            var incomeexpense = document.createTextNode(expesneType + " | " + amount + "$");
            record.appendChild(incomeexpense);
            transactionRecord.appendChild(record);
        } 
    }  
}
