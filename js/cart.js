export function addCart(array,cartContainer,selectorCart){
   
   document.querySelector(cartContainer).innerHTML='';
   array.forEach((element) => {
    const commodity=document.createElement('div');
    commodity.classList.add('commodity');
    commodity.innerHTML+=`<div class="commodity-title">${element.title}</div>
    <div class="commodity-price">${element.price} $</div>
    <div class="commodity-image"><img src=${element.image} alt="${element.title}" /></div>
    <div class="commodity-quantity">${element.quantity} pcs</div>
    <div class="commodity-total">${(element.price*element.quantity).toFixed(2)} $</div>   
    <div><button id="${element.id}"  class="commodity-delete">❌</button></div>`
    
    document.querySelector(cartContainer).appendChild(commodity);
    

    
 }); 
 const payDiv=document.createElement('div');
 payDiv.innerHTML=`<button class="commodity-pay">Pay</button>`
 const togetherPay=document.createElement('div');
   togetherPay.classList.add('together-pay');
   togetherPay.innerHTML=`Together to pay: ${(array.reduce((acc,cur)=>acc+cur.price*cur.quantity,0)).toFixed(2)} $`
   document.querySelector(cartContainer).appendChild(togetherPay);
   document.querySelector(cartContainer).appendChild(payDiv);
   document.querySelector(selectorCart).innerHTML=array.length || 0;
}

