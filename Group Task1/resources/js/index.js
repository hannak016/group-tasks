//TODO

/* get element */

/* attach event*/

/* render input value */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const img = new Image();
img.src = "./resources/img/1.png";
img.onload = () => {
  context.drawImage(img, 0, 0, 150, 200);
};

const topInput = document.getElementById("top");
const bottomInput = document.getElementById("bottom");

context.font = "30px Comic Sans MS";
context.textAlign = "center";

let bottomText = "";
let topText = "";

topInput.addEventListener("input", (e) => {
  topText = e.target.value;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 300, 500);
  context.fillText(topText, 150, 50);
  context.fillText(bottomText, 150, 450);
});
bottomInput.addEventListener("input", (e) => {
  bottomText = e.target.value;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 300, 500);
  context.fillText(topText, 150, 50);
  context.fillText(bottomText, 150, 450);
});
