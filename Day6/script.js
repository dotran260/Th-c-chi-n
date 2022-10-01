const alert = document.querySelector('.alert');
const box = document.querySelector('.box');
const key = document.querySelector('.card>p:nth-child(2)');
const keylocation = document.querySelector('.card.location>p:nth-child(2)');
const code = document.querySelector('.card.code>p:last-child');
const which = document.querySelector('.card.which>p:last-child');
const result = document.querySelector('.result')
document.onkeydown = function (e) {
    alert.classList.add('hide')
    box.classList.remove('hide')
    let keyCode = e.keyCode === 32 ? 'Space' : e.key
    let locationcal = e.location;
    let keyWhich = e.which;

    code.innerText =  e.code;
    keylocation.innerHTML = locationcal;
    key.innerHTML = keyCode
    which.innerHTML = keyWhich;
    result.innerHTML = keyCode;
    console.log(e.which)
};