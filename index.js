const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")    // bill amount element
const tipInput = document.getElementById("tip")      // tip percentage element
const totalSpan= document.getElementById("total")      // span element which is the total element



function calculateTotal(){

    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * ( 1+ tipValue / 100)    //this is the value calculated the total

    totalSpan.innerText = totalValue.toFixed(2);  //totalValue.toFixed(2) changes the decimal places for the total amount so when i 110.00000111 because i have 2 there it will only show 110.00
    console.log(totalValue);


}


btnEl.addEventListener("click", calculateTotal)