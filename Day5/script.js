const box = document.querySelector('.search-box')
const btnSearch = document.querySelector('button')

btnSearch.onclick = (e) => {
    box.classList.toggle('open')
}