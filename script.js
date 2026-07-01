const $html = document.querySelector('html')
const btn_theme = document.getElementById('btn-theme')

btn_theme.addEventListener('click', function(){
    $html.classList.toggle('dark-mode')
})