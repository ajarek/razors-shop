import {toggleMenu} from './toggleMemu.js'

toggleMenu('.burger', 'nav', 'active')

const logout = document.querySelector('#log-out')
logout.addEventListener('click', () => {
    localStorage.setItem('logged', false)
    window.location.reload()
})