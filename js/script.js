const backProjBtn = document.getElementById("back-project-btn");
const backProjCloseBtn = document.getElementById("back-project-close-btn");
const backProjDialog = document.getElementById("back-project-dialog");

const continueBtns = document.querySelectorAll(".dialog-pledge>button");
const thanksDialog = document.getElementById("thanks-dialog");
const gotItBtn = thanksDialog.querySelector("button");

const bookmarkDiv = document.querySelector(".bookmark-container");

const rewardBtns = document.querySelectorAll(".reward-btn");

const totalRaised = document.getElementById("total-raised");
const totalNeeded = document.getElementById("total-needed");
const totalBackers = document.getElementById("total-backers");
const progressBar = document.getElementById("progress-bar");

const showModel = function () {
  backProjDialog.close();
  thanksDialog.showModal();
};

const addPledges = function (e) {
  const inputVal =
    e.currentTarget.previousElementSibling.querySelector("input").value;
  // console.log(inputVal);
  let totalNum = parseInt(totalBackers.textContent.replace(",", ""));
  let totalRaisedNum = parseInt(
    totalRaised.textContent.replace("$", "").replace(",", "")
  );

  let totalNeedNum = parseInt(
    totalNeeded.textContent.trim().slice(3).replace("$", "").replace(",", "")
  );
  const newTolalRaised = totalRaisedNum + Number(inputVal);
  // console.log(totalNeeded.textContent.trim());
  totalBackers.textContent = `${(++totalNum).toLocaleString()}`;
  totalRaised.textContent = `$${newTolalRaised.toLocaleString()}`;
  // console.log(newTolalRaised / totalNeedNum);
  progressBar.value = (newTolalRaised / totalNeedNum) * 100;
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
  continueBtn.addEventListener("click", addPledges);
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
