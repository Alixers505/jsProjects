const form = document.querySelector("form");
const taxRate = 1.09;
const phonePrice = 500;
const accessoryPrice = 50;
const pricePerPurchase = (phonePrice + accessoryPrice) * taxRate;

form.addEventListener("submit", function(event) {
    const startingBalance = form.elements.balance.value;
    event.preventDefault();

    let phones = 0;
    let bankBalance = startingBalance;

    while (bankBalance >= pricePerPurchase) {
        bankBalance = (bankBalance - pricePerPurchase).toFixed(2);
        phones++;
    } 

    document.getElementById("startingBalance").innerHTML = "$" + startingBalance;
    document.getElementById("phones").innerHTML = phones;
    document.getElementById("remainingBalance").innerHTML = "$" + bankBalance;
    document.getElementById("purchase").innerHTML = "$" + (phones * pricePerPurchase).toFixed(2);
});