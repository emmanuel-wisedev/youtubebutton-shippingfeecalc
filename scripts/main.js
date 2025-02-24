const youtubeBtn = document.querySelector('.js-subscribe-button');
const calculateBtn = document.querySelector('.calculateButton');
const userInput = document.querySelector('.js-cost-input');
const orderBtn = document .querySelector('.order-btn');
const lessThan40Tax = 10;
const between40and50Tax = 5;
const above50Tax = 'FREE shipping';

// youtube subscribe button
function subscribe() {
  if (youtubeBtn.innerText === 'Subscribe') {
    youtubeBtn.innerHTML = 'Subscribed';
    document.querySelector('.sub-info').innerHTML ='You Subscribed';
    youtubeBtn.classList.add('is-subscribed');
  } else {
    youtubeBtn.innerHTML = 'Subscribe';
    youtubeBtn.classList.remove('is-subscribed');
    document.querySelector('.sub-info').innerHTML ='You Unsubscribed';
  }
}

// handles on key down events (enter key)
function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

// function that calculates tax and order total
function calculateTotal() {
  if (userInput.value === '') {
    return;

  } else if (parseInt(userInput.value) < 0) {
    costBelowZero();
    return;

  } else if (parseInt(userInput.value) === 0) {
    costZero();
    return;

  } else if (parseInt(userInput.value) >= 0 && parseInt(userInput.value) <= 5) {
    minimumCostError();
    return;

  } else if (parseInt(userInput.value) < 40) {
    document.querySelector('.tax-display').innerHTML = `Shipping: $${lessThan40Tax}`;
    document.querySelector('.total-cost').innerHTML = `Total Cost: $${parseInt(userInput.value)
     + lessThan40Tax}`;
    //return parseInt(userInput.value) + lessThan40Tax; <= alternative to return total cost

  } else if (parseInt(userInput.value) >= 40 && (parseInt(userInput.value) <= 50)) {
    document.querySelector('.tax-display').innerHTML = `Shipping: $${between40and50Tax}`;
    document.querySelector('.total-cost').innerHTML = `Total Cost: $${parseInt(userInput.value)
     + between40and50Tax}`;
    //return parseInt(userInput.value) + between40and50Tax; <= alternative to return total cost

  } else if (parseInt(userInput.value) > 50) {
    document.querySelector('.tax-display').innerHTML = `Shipping: ${above50Tax}`;
    document.querySelector('.total-cost').innerHTML =  `Total Cost: $${parseInt(userInput.value)}`;
    //return parseInt(userInput.value); <= alternative to return total cost
  }
} 

calculateBtn.addEventListener('click', calculateTotal);

// throws error if cost is less 0 (zero)
function costBelowZero() {
  const errorInput = document.querySelector('.errorDisplay');
  errorInput.textContent = "Error: cost cannot be less than $0";
  errorInput.style.color = "red";
  return;
}

// throws error if cost is 0 (zero)
function costZero() {
  const errorInput = document.querySelector('.errorDisplay');
  errorInput.textContent = "Error: cost cannot be $0";
  errorInput.style.color = "red";
  return;
}

// throws error for mininum cost
function minimumCostError() {
  const errorInput = document.querySelector('.errorDisplay');
  errorInput.textContent = "Error: minimum cost should be above $5";
  errorInput.style.color = "red";
  return;
}

// handles order button with a timer function 
function orderHandler() {
  orderBtn.classList.add('dark-green');

  setTimeout(() => {
    const orderInfo = document.querySelector('.order-process-info');
    orderInfo.textContent = "Processing your order...";
    orderInfo.style.color = "grey";
  }, 2000);

  setTimeout(() => {
    const orderInfo = document.querySelector('.order-process-info');
    orderInfo.textContent = "Submitting your order. Please don't refresh page...";
  }, 10000);

  setTimeout(() => {
    const orderInfo = document.querySelector('.order-process-info');
    orderInfo.textContent = "Hooray! We got your order.";
    orderInfo.style.color = "green";
  }, 20000);

  setTimeout(() => {
    alert('Payment Successful.\nThanks for your order.');
  }, 22000);
  
  setTimeout(() => {
    window.location.href = "./thankyou.html";
  }, 25000);
}

// handles odd userinputs for place order button
orderBtn.addEventListener('click', () => {
  if (userInput.value === '') {
    return;
  } else {
    orderHandler();
  }
})



