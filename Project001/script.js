const button = document.querySelector('#button')

button.addEventListener('click', () => (
    window.scroll({top: window.innerHeight, behavior: 'smooth'}), 
    button.style.display = 'none'
))
