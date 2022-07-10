export function toggleMenu(burgerSelector, navSelector, activeClass) {
    const burger = document.querySelector(burgerSelector)
    const nav = document.querySelector(navSelector)
    
    burger.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
        });
    }