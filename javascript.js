const container = document.querySelector("#container")

const redP = document.createElement("p")
redP.classList.add("redP")
redP.textContent = "Hey I’m red!"
redP.style.color = "red"
container.appendChild(redP)

const blueH3 = document.createElement("h3")
blueH3.classList.add("blueH3")
blueH3.textContent = "I’m a blue h3!"
blueH3.style.color = "blue"
container.appendChild(blueH3)

const blackDiv = document.createElement("div")
blackDiv.classList.add("blackDiv")
blackDiv.style.cssText = "border: solid black; background-color: pink;"
container.appendChild(blackDiv)

const simpleH1 = document.createElement("h1")
simpleH1.classList.add("simpleH1")
simpleH1.textContent = "I’m in a div"
blackDiv.appendChild(simpleH1)

const simpleP = document.createElement("p")
simpleP.classList.add("simpleP")
simpleP.textContent = "ME TOO!"
blackDiv.appendChild(simpleP)

