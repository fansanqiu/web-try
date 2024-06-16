const btn = document.querySelector("#btn")

const addBtn = document.createElement("p")
addBtn.textContent = "Hello World"

btn.onclick = () => document.body.appendChild(addBtn)