//找到已有元素
const container = document.querySelector("#container")

//创建div-》为div添加class-》把文字内容写入div
const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!"

//在找到的元素后面增加新的内容
container.appendChild(content)