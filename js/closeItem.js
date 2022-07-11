export function closeItem(selectorBtn,selectorContainer,functionToCall){
    const closeButton=document.querySelectorAll(selectorBtn);
    closeButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        document.querySelector(selectorContainer).innerHTML=''; 
        functionToCall();  
    })
})
}