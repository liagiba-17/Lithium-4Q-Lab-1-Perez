const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function validateOrder() {
    let customer = PARAMS.get("customer");
    document.getElementById("greetings").innerText = `Hello, ${customer}!`;

    let numberOfSoda = PARAMS.get("numberOfSoda");
    let numberOfChips = PARAMS.get("numberOfChips");
    let payment = PARAMS.get("payment");


    let sodaTotalPrice = ((numberOfSoda)*50);
    let chipsTotalPrice = ((numberOfChips)*30);
    let total = sodaTotalPrice + chipsTotalPrice; 


    document.getElementById("total").innerText = `Your total is ${total}.`;

    if (total >= payment){
        alert("Your payment is not enough.");
    } else if (total === payment) {
        alert("Your payment is just enough.");
    } else {
        alert("Your change is " + (payment - total) + ".");
    }

}