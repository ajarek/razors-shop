import {toggleMenu} from './toggleMemu.js';
import {data} from '../data.js';
const grid=document.querySelector('.grid');
toggleMenu('.burger', 'nav', 'active');

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
            productInfoContainer.innerHTML=`<div class="product-info-title">${productInfo.title}</div>
            <img src=${productInfo.image.url} alt="${productInfo.title}" />
            <div class="product-info-price">$${productInfo.price}</div>
            <p class="product-info-description">${productInfo.description}</p>`
            grid.appendChild(productInfoContainer);
           
        })
    }
    )
}