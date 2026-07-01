// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = ("red");
paragraph.textContent = "Hi, I'm red!";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

const div2 = document.createElement("div");
div2.style.background = ("pink");
div2.style.border = ("black");
container.appendChild(div2);

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
div2.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div2.appendChild(divP);