const imgs = document.querySelectorAll('.image img')
const imgIner = document.querySelector('.gallery-inner img')
const modalGallery = document.querySelector('.gallery')
const closeIcon = document.querySelector('.close')
const nextIcon = document.querySelector('.next i')
const prevIcon = document.querySelector('.prev i')
var currentIndex = 0;
var length = imgs.length - 1;

function toggleGallery() {
    modalGallery.classList.toggle('hide');
}
function toggleIcon() {
    currentIndex == length ? nextIcon.classList.add("hide") : nextIcon.classList.remove("hide");
    currentIndex == 0 ? prevIcon.classList.add("hide") : prevIcon.classList.remove("hide");
}

imgs.forEach((item, index) => {
    function handelIcon() {
        nextIcon.onclick = function () {
            if (index < length) {
                const getImg = imgs[++index].getAttribute('src');
                imgIner.setAttribute('src', getImg)
                currentIndex = index
            }
            toggleIcon()
            console.log(currentIndex)
        }
        prevIcon.onclick = function () {
            if (index > 0) {
                const getImg = imgs[--index].getAttribute('src');
                imgIner.setAttribute('src', getImg)
                currentIndex = index
            } else if (index == 0) {
                imgIner.setAttribute('src', imgs[0].getAttribute('src'))
            }
            toggleIcon()
        }
    }
    item.onclick = () => {
        var getImg = item.getAttribute('src')
        var setImg = () => {
            imgIner.setAttribute('src', getImg)
        }
        setImg()
        handelIcon()
        currentIndex = index
        toggleIcon()
        toggleGallery()

    }
})

closeIcon.onclick = () => {
    toggleGallery()
}
