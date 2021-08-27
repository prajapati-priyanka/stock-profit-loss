var initialPrice = document.querySelector("#initial-price-input");
var quantity = document.querySelector("#quantity-input");
var currentPrice = document.querySelector("#current-price-input");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output");
var outputPriceDate = document.querySelector("#price-date");

function calculateProfitAndLoss(ip, qty, cp) {
  var currentDate = new Date();

  if ((ip, qty, cp)) {
    if (cp > ip) {
      var profit = (cp - ip) * qty;
      var profitPercentage = (((profit / ip) * 100)/qty).toFixed(2);
      outputPriceDate.innerText = `The price of stock purchased on ${currentDate.toDateString()} is Rs.${ip} `;

      outputEl.innerText = `You got a profit of Rs.${profit} and the profit percentage is ${profitPercentage}% 🤑`;
      outputEl.style.color = "green";
    } else if (ip > cp) {
      var loss = (ip - cp) * qty;
      var lossPercentage = (((loss / ip) * 100)/qty).toFixed(2);

      if (lossPercentage > 50) {
        outputEl.innerText = `You got a loss of Rs.${loss} and the loss percentage is ${lossPercentage}% 😭`;
        outputEl.style.color = "yellow";
      } else {
        outputEl.innerText = `Hey, the loss is Rs.${loss} and the loss percentage is ${lossPercentage}% 😔`;
        outputEl.style.color = "red";
      }
    } else {
      outputEl.innerText = "No Profit, No Loss 🙂";
      outputEl.style.color = "beige";
    }
  } else {
    outputEl.innerText = "Please enter valid details";
  }


}

function checkHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(quantity.value);
  var cp = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, cp);
}

checkBtn.addEventListener("click", checkHandler);
