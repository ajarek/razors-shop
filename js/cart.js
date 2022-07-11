export function addCart(array,cartContainer,selectorCart){
 array.forEach(element => {
    const commodity=document.createElement('div');
    commodity.classList.add('commodity');
    commodity.innerHTML=`<div class="commodity-title">${element.title}</div>
    <div class="commodity-price">${element.price} $</div>
    <div class="commodity-image"><img src=${element.image} alt="${element.title}" /></div>
    <div class="commodity-quantity">${element.quantity} pcs</div>
    <div class="commodity-total">${(element.price*element.quantity).toFixed(2)} $</div>
    <div><button class="commodity-pay">Pay</button></div>
    <div><button class="commodity-delete">❌</button></div>`
    document.querySelector(cartContainer).style.display='flex';
    document.querySelector(cartContainer).appendChild(commodity);

    document.querySelector(selectorCart).innerHTML=array.length || 0;
 }); 
    
}

