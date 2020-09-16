var totalBalance = document.querySelector("#totalbalance").innerHTML;
console.log(totalBalance);

var incomeBalance = document.querySelector("#incomebalance").innerHTML;
console.log(incomeBalance);

var expenseBalance = document.querySelector("#expensebalance").innerHTML;
console.log(expenseBalance);



var btnAddTransaction = document.getElementById("btnAddtransaction");

function getAmount(){
    var amount = document.getElementById("amount").value;
    if(amount == "")
    {
        alert("Please enter an amount first");
    }
    else
    {
        console.log(amount);
    }  
}
