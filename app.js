var initialPrice = document.querySelector("#initial-price-input");
var quantity = document.querySelector("#quantity-input");
var currentPrice = document.querySelector("#current-price-input");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output");
var outputPriceDate = document.querySelector("#price-date");

function calculateProfitAndLoss(ip, qty, cp) {
  var currentDate = new Date();

  if (ip>0 && qty>0 && cp>0) {
    if (cp > ip) {
      var profit = (cp - ip) * qty;
      var profitPercentage = (((profit / ip) * 100)/qty).toFixed(2);
      outputPriceDate.style.display = "block";
      outputPriceDate.innerText = `The price of stock purchased on ${currentDate.toDateString()} is Rs.${ip} `;

      outputEl.innerText = `You got a profit of Rs.${profit} and the profit percentage is ${profitPercentage}% 🤑`;
      outputEl.style.color = "green";
    } else if (ip > cp) {
      var loss = (ip - cp) * qty;
      var lossPercentage = (((loss / ip) * 100)/qty).toFixed(2);

      if (lossPercentage > 50) {
        outputPriceDate.style.display = "block";
        outputPriceDate.innerText = `The price of stock purchased on ${currentDate.toDateString()} is Rs.${ip} `;
        outputEl.innerText = `You got a loss of Rs.${loss} and the loss percentage is ${lossPercentage}% 😭`;
        outputEl.style.color = "red";
      } else {
        outputPriceDate.style.display = "block";
        outputPriceDate.innerText = `The price of stock purchased on ${currentDate.toDateString()} is Rs.${ip} `;
        outputEl.innerText = `Hey, the loss is Rs.${loss} and the loss percentage is ${lossPercentage}% 😔`;
        outputEl.style.color = "yellow";
      }
    } else {
      outputPriceDate.style.display = "block";
      outputPriceDate.innerText = `The price of stock purchased on ${currentDate.toDateString()} is Rs.${ip} `;
      outputEl.innerText = "No Profit, No Loss 🙂";
      outputEl.style.color = "beige";
    }
  } else {
    outputPriceDate.style.display = "none";
    outputEl.innerText = "Entered values should be positive";
    outputEl.style.color = "beige"
  }


}

function checkHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(quantity.value);
  var cp = Number(currentPrice.value);

 if(ip,qty,cp){
    calculateProfitAndLoss(ip, qty, cp);
   } else{
    outputEl.innerText = "Please enter valid details";
    outputEl.style.color = "beige"
    outputPriceDate.style.display = "none";
   }
}

checkBtn.addEventListener("click", checkHandler);
