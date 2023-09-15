const btn = document.querySelector(".btn");
const color = document.querySelector("#color");
const codeColor = document.querySelector("#code-color");
const body = document.querySelector(".body");

function colorGenerate() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const newColor = "#" + randomColor;
  codeColor.innerHTML = newColor;
  color.style.backgroundColor = newColor;
  body.style.backgroundColor = newColor;
}

btn.addEventListener("click", colorGenerate);
