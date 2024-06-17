const getUl = document.querySelector("ul")
const getInput = document.querySelector("input")
const getCreateBtn = document.querySelector("#createBtn")

getCreateBtn.addEventListener('click', () => {
    const userInput = getInput.value;

    getInput.value = '';

    if(userInput.trim() !== ''){
        const newLi = document.createElement('li')
        const newSpan = document.createElement("span")
        const newBtn = document.createElement("button")

        newSpan.textContent = userInput
        newBtn.textContent = "Delete"
        newBtn.setAttribute("id", "delBtn")

        getUl.appendChild(newLi)
        newLi.appendChild(newSpan)
        newLi.appendChild(newBtn)

        newBtn.addEventListener('click', ()=>{
            newLi.remove()
        })
    }
    getInput.focus()
})