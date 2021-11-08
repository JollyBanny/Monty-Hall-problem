function openDoor(el) {
  el.classList.remove("closed");
  el.classList.add("opened");
  let img = new Image(100, 100);
  if (el.id == PRIZE_DOOR.toString()) {
    img.src = "assets/img/car.png";
  } else {
    img.src = "assets/img/goat.png";
  }
  el.append(img);
}

function acceptDoor(flag) {
  let door;
  if (flag) {
    addMessage(MESSAGES[4], "player");
    door = document.getElementById(`${CHOOSEN_DOOR}`);
  } else {
    CHANGED = 1;
    let id = 3 - CHOOSEN_DOOR - HOST_DOOR;
    addMessage(`${MESSAGES[5]} ${id + 1}`, "player");
    door = document.getElementById(`${id}`);
  }
  openDoor(door);
  endGame(CHANGED, door.id == PRIZE_DOOR.toString());
}

async function hostOpenDoor(my_door) {
  await wait(2000).then(() => {
    for (let door of doors.children) {
      if (door.id != my_door && door.id != PRIZE_DOOR.toString()) {
        HOST_DOOR = door.id;
        openDoor(door);
        return;
      }
    }
  });
  await addMessage(MESSAGES[3], "host", 1000);
  buttons.classList.remove("hidden");
}

function chooseDoor(el) {
  CHOOSEN_DOOR = el.id;
  addMessage(`${MESSAGES[2]} ${Number(CHOOSEN_DOOR) + 1}`, "player");
  doors.classList.add("block");
  hostOpenDoor(CHOOSEN_DOOR);
}

async function startGame() {
  initValues();
  initDoors();
  setPrizeDoor();
  for (let i = 0; i < 2; ++i) {
    await addMessage(MESSAGES[i], "host", 1000);
  }
  doors.classList.remove("block");
}

async function endGame(changed, win) {
  addStatMsg(changed, win);
  if (win) {
    await addMessage(MESSAGES[6], "host", 1000);
  } else {
    await addMessage(`${MESSAGES[7]} ${PRIZE_DOOR + 1}`, "host", 1000);
    openDoor(doors.children[PRIZE_DOOR]);
  }
  playAgain();
}

function restartGame(changed, win) {
  buttons.classList.add("hidden");
  doors.classList.add("block");
  clearChat();
  clearDoors();
  startGame();
}
