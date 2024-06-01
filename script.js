let button = document.querySelector('.testJs')
let h1 = document.querySelector('.testCss')

button.addEventListener(
    'click',
    function () {
        h1.innerHTML = 'Скрипт подключен.'
    }
)
