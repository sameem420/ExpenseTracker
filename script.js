var totalBalance = document.querySelector("#totalbalance");
var incomeBalance = document.querySelector("#incomebalance");
var expenseBalance = document.querySelector("#expensebalance").innerHTML;


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
            totalBalance.innerHTML = amount;
            incomeBalance.innerHTML = amount;
            console.log(amount);
        }
        else if(amount < 0)
        {
            totalBalance = amount;
            expenseBalance = amount;
            console.log(amount);
        } 
    }  
}
