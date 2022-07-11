export function paymentHandling(selectorContainer,logged,title,price,image,quantity=1){
  if(logged===true){
    document.querySelector(selectorContainer).innerHTML='';
      const paymentForm = document.createElement('div');
      paymentForm.classList.add('payment-form');
      paymentForm.innerHTML = `
      <div class="payment-form-title">${title}</div>
      <div class="payment-form-price">Price: $  <span>${price}</span></div>
      <div class="payment-form-image"><img src=${image} alt="${title}" /></div>
      <div class="payment-form-quantity">Quantity: <span>${quantity}</span>  pcs</div>
      <div class="payment-form-total">Total: <span>${(price*quantity).toFixed(2)}<span> $</div>
      <div><button class="product-info-buy">Add to cart</button></div>
      <div><button class="product-info-close">❌</button></div>`
      document.querySelector(selectorContainer).appendChild(paymentForm); 
      
  }
  else{
    alert('You must be logged in to buy')
  }
}