const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const localSt= localStorage.getItem('user');
    const user = JSON.parse(localSt);
    if(email === user.email && password === user.password) {
        window.location.href = 'http://127.0.0.1:5500/html/product.html';
        localStorage.setItem('logged', 'true');
    } 
})