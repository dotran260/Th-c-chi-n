const ul = document.querySelector("ul"),
    input = document.querySelector("input");
const btnDeleteAll = document.querySelector(".btn-removeAll")

let tags = ['Nodejs', 'Reactjs'];

function getTag() {
    ul.querySelectorAll("li").forEach((li) => li.remove());
    let liTag = '';
    tags.map((tag) => {
        return liTag += `
            <li>${tag}
            <i class="uit uit-multiply" onclick="removeTag(this,'${tag}')"></i>
            </li>
            `;
    });
    ul.insertAdjacentHTML("afterbegin", liTag);
    input.focus();
}
function createTag() {
    input.onkeyup = function (e) {
        if (e.key == 'Enter') {
            const valueInput = e.target.value
            if (valueInput.trim()) {
                tags.push(valueInput)
            } else {
                console.log('Vui lòng nhập lại!')
            }

            input.value = ''
            getTag()

        }
    };
}
function removeAll() {
    btnDeleteAll.onclick = function (e) {
        tags = [];
        getTag()
    }
}
function removeTag(el, tag) {
    let index = tags.indexOf(tag)
    tags.splice(index, 1)
    el.parentElement.remove()
    input.focus()
}
removeAll()
getTag()
createTag()