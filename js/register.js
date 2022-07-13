const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;  
        const user={
            email:email,
            password:password
        }
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'http://127.0.0.1:5500/html/login.html';
})