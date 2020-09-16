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
            let totalBal = parseInt(totalBalance.innerHTML); 
            let newAmount = totalBal + parseInt(amount);
            totalBalance.innerHTML = newAmount;
            incomeBalance.innerHTML = newAmount;
        }
        else if(amount < 0)
        {
            let totalBal = parseInt(totalBalance.innerHTML);
            let expBal = parseInt(expenseBalance.innerHTML)
            console.log(expBal);
            let newAmount = totalBal + parseInt(amount);
            console.log(newAmount);
            totalBalance.innerHTML = newAmount;
            expenseBalance.innerHTML = expBal - amount;
        } 
    }  
}
