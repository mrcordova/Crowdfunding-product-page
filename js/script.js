const backProjBtn = document.getElementById("back-project-btn");
const backProjCloseBtn = document.getElementById("back-project-close-btn");
const backProjDialog = document.getElementById("back-project-dialog");

const continueBtns = document.querySelectorAll(".dialog-pledge>button");
const thanksDialog = document.getElementById("thanks-dialog");
const gotItBtn = thanksDialog.querySelector("button");

const bookmarkDiv = document.querySelector(".bookmark-container");

const rewardBtns = document.querySelectorAll(".reward-btn");

const showModel = function () {
  backProjDialog.close();
  thanksDialog.showModal();
};

const rewardBtnClick = function (e) {
  const rewardAmount = e.currentTarget.value;
  const selectedRadio = backProjDialog.querySelector(`[id='${rewardAmount}']`);

  selectedRadio.checked = true;
  backProjDialog.showModal();
};
backProjBtn.addEventListener("click", () => {
  backProjDialog.showModal();
});

backProjCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  backProjDialog.close();
});

for (const continueBtn of continueBtns) {
  continueBtn.addEventListener("click", showModel);
}

gotItBtn.addEventListener("click", () => {
  thanksDialog.close();
});

bookmarkDiv.addEventListener("click", (e) => {
  bookmarkDiv.classList.toggle("bookmark-active");
});

for (const rewardBtn of rewardBtns) {
  rewardBtn.addEventListener("click", rewardBtnClick);
}
