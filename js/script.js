const backProjBtn = document.getElementById("back-project-btn");
const backProjCloseBtn = document.getElementById("back-project-close-btn");
const backProjDialog = document.getElementById("back-project-dialog");

backProjBtn.addEventListener("click", () => {
  backProjDialog.showModal();
});

backProjCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  backProjDialog.close();
});
