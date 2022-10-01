const btnModal = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.modal')
const closeText = document.querySelector('.modal__footer button')
const closeIcon = document.querySelector('.modal__header i')

function toggleModal() {
    modal.classList.toggle('hide')
}

closeText.onclick = () => {
    toggleModal()
}
closeIcon.onclick = () => {
    toggleModal()
}
btnModal.onclick = () => {
    toggleModal()
}
window.onclick = function (e) {
    if (e.target == modal) {
        toggleModal()
    }
}
