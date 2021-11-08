const COUNT_DOORS = 3;
let PRIZE_DOOR = -1;
let CHOOSEN_DOOR = -1;
let HOST_DOOR = -1;
let CHANGED = 0;
const MESSAGES = [
  'Приветствуем вас на шоу "Давайте заключим сделку!"',
  "Уважаемый игрок, пожалуйста выберите дверь, за которой, как вы считаете, находится машина!",
  "Я выбираю дверь под номером ",
  "Я открыл вам дверь с козой. Вы все еще уверены в своем выборе?",
  "Да, я уверен, что мой приз находится за этой дверью!",
  "Хм... Хорошо я выбираю дверь под номером ",
  "Поздравляю! Этот новый Lamborghini Aventador заслуженно ваш!",
  "К сожалению, вы проиграли! Все это время приз находился за дверью под номером",
];

let doors = document.getElementById("doors");
let buttons = document.getElementById("buttons");

document.getElementById("change").addEventListener("click", () => {
  acceptDoor(0);
});
document.getElementById("stay").addEventListener("click", () => {
  acceptDoor(1);
});

for (let door of doors.children) {
  door.addEventListener("click", () => {
    chooseDoor(door);
  });
}

function setPrizeDoor() {
  PRIZE_DOOR = random(0, COUNT_DOORS);
}

function initDoors() {
  for (let door of doors.children) {
    door.classList.add("closed");
    door.classList.remove("opened");
  }
}

function clearDoors() {
  for (let door of doors.children) {
    let img = door.children[0];
    if (img) img.remove();
  }
}

function initValues() {
  PRIZE_DOOR = -1;
  CHOOSEN_DOOR = -1;
  HOST_DOOR = -1;
  CHANGED = 0;
}

startGame();
