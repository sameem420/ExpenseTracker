var totalBalance = document.querySelector("#totalbalance");
var incomeBalance = document.querySelector("#incomebalance");
var expenseBalance = document.querySelector("#expensebalance");


var btnAddTransaction = document.getElementById("btnAddtransaction");

function getAmount(){
    var amount = document.getElementById("amount").value;
    if(amount == "")
    {
        alert("Please enter an amount first");
    }
    else
    {
        if(amount > 0) {
            var tB = parseInt(totalBalance.innerHTML); 
            var newAmount = tB + parseInt(amount);
            totalBalance.innerHTML = newAmount;
            incomeBalance.innerHTML = amount;
        }
        else if(amount < 0)
        {
            totalBalance.innerHTML = amount;
            expenseBalance.innerHTML = amount;
        } 
    }  
}
