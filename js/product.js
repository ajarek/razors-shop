import {toggleMenu} from './toggleMemu.js';
import {data} from '../data.js';
import { paymentHandling } from './paymentHandling.js';
import {closeItem} from './closeItem.js';
import {addCart} from './cart.js';
const grid=document.querySelector('.grid');
toggleMenu('.burger', 'nav', 'active');
let logged=true;
let arr=[];
function renderItems(){
    grid.innerHTML='';
    for(let i=0; i<data.length; i++){
    const item=document.createElement('div');
    item.classList.add('item');
    item.innerHTML=` <div class="title">${data[i].title}</div>
    <img id="${data[i].id}" src=${data[i].image.url} alt="${data[i].title}" />
    <div class="price">$${data[i].price}</div>
    <p class="description">${data[i].description}
    </p>`
    grid.appendChild(item)
}
selectProduct()
}

renderItems()

function selectProduct(){
    const products=document.querySelectorAll('.item img');
    products.forEach(product=>{
        product.addEventListener('click', (e)=>{
            const productId=e.target.id;
            const productInfo=data.find(item=>item.id==productId);
            grid.innerHTML=''
            const productInfoContainer=document.createElement('div');
            productInfoContainer.classList.add('product-info-container');
            productInfoContainer.innerHTML=`<div><button class="product-info-buy">Choose</button></div><div><button class="product-info-close">❌</button></div><div class="product-info-title">${productInfo.title}</div>
            <img src=${productInfo.image.url} alt="${productInfo.title}" />
            <div class="product-info-price">$${productInfo.price}</div>
            <div class="product-info-quantity"><input type="number" value="1"  step="1" ><span>pcs</span></div>
            <p class="product-info-description">${productInfo.description}</p>`
            grid.appendChild(productInfoContainer);
            closeItem('.product-info-close','.grid',renderItems);
            eventPayment(productInfo)
        })   
    })  
}

function eventPayment(productInfo){
    const buyButton=document.querySelectorAll('.product-info-buy');
    buyButton.forEach(button=>{
        button.addEventListener('click', ()=>{
            const quantity=document.querySelector('.product-info-quantity input').value||1;
            paymentHandling('.grid',logged,productInfo.title,productInfo.price,productInfo.image.url,quantity);
            arr.push({title:productInfo.title,price:productInfo.price,image:productInfo.image.url,quantity:quantity})
            eventAddCart();
            closeItem('.product-info-close','.grid',renderItems);
           
        })
    })
}

function eventAddCart(){
    const cartButton=document.querySelectorAll('.product-info-buy');
    cartButton.forEach(button=>{
        button.addEventListener('click', ()=>{
           addCart(arr,'.cart-container','#quantity');
            document.querySelector('.payment-form').remove()
            renderItems()
        })
    })
   
}
function eventDisplayCart(){
   
    const cartButton=document.querySelector('.cart');
    const cartContainer=document.querySelector('.cart-container');
    cartButton.addEventListener('click', ()=>{
        cartContainer.classList.toggle('active');
        // deleteItemCart()
    }
    )
    
}

eventDisplayCart()


// function deleteItemCart(){
//     const deleteButton=document.querySelectorAll('.commodity-delete');
//     deleteButton.forEach(button=>{
//         button.addEventListener('click', (e)=>{
//             const index=e.target.id
//             arr.splice(index,1)
//             addCart(arr,'.cart-container','#quantity');
//             eventDisplayCart()
//         }
//         )
//     }

//     )
// }


