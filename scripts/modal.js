let modal = document.getElementById("modal");

let modal_wrap = modal.getElementsByClassName("modal-wrap")[0];
let modal_text = modal.getElementsByClassName("modal-text")[0];

let btn_again = document.getElementById("btn-again");

btn_again.addEventListener("click", () => {
  modal.getElementsByClassName("modal-wrap")[0].classList.add("modal-hide");
  restartGame();
});

function playAgain() {
  modal_wrap.classList.remove("modal-hide");
}
