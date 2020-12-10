const topInput = document.querySelector(".top input");
const bottomInput = document.querySelector(".bottom input");
const topTextarea = document.querySelector(".topTextarea");
const bottomTextarea = document.querySelector(".bottomTextarea");

topInput.addEventListener("input", (e) => {
  topTextarea.innerHTML = e.target.value;
});
bottomInput.addEventListener("input", (e) => {
  bottomTextarea.innerHTML = e.target.value;
});

const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
let curImg = document.getElementsByTagName("img")[0];

const min = 1;
const max = 4;
let curIndex = min;

btnPrev.onclick = function () {
  curIndex === min ? (curIndex = max) : curIndex--;
  curImg.setAttribute("src", `resources/img/${curIndex}.JPG`);
};
btnNext.onclick = function () {
  curIndex === max ? (curIndex = min) : curIndex++;
  curImg.setAttribute("src", `resources/img/${curIndex}.JPG`);
};
