//TODO

/* get element */

/* attach event*/

/* render input value */



const topInput = document.querySelector(".top input");
const bottomInput = document.querySelector(".bottom input");
const topTextarea = document.querySelector(".topTextarea");
const bottomTextarea  = document.querySelector(".bottomTextarea");

const imgBox = document.querySelector(".img-box img");



topInput.addEventListener("input", (e) => {
  topTextarea.innerHTML = e.target.value;
});
bottomInput.addEventListener("input", (e) => {
  bottomTextarea.innerHTML = e.target.value;
});
