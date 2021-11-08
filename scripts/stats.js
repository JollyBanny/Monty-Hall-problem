let table = document.getElementsByTagName("table")[0];

let change_win = document.getElementById("change-win");
let change_lose = document.getElementById("change-lose");
let stay_win = document.getElementById("stay-win");
let stay_lose = document.getElementById("stay-lose");

function incCW() {
  change_win.innerHTML = Number(change_win.textContent) + 1;
}

function incCL() {
  change_lose.innerHTML = Number(change_lose.textContent) + 1;
}

function incSW() {
  stay_win.innerHTML = Number(stay_win.textContent) + 1;
}

function incSL() {
  stay_lose.innerHTML = Number(stay_lose.textContent) + 1;
}

function updateStats(changed, win) {
  if (changed) {
    if (win) incCW();
    else incCL();
  } else {
    if (win) incSW();
    else incSL();
  }
}

function addStatMsg(changed, win) {
  updateStats(changed, win);
  let tr = document.createElement("tr");
  let msg = document.createElement("td");
  tr.append(msg);
  msg.setAttribute("colspan", 4);
  msg.innerHTML = `${win ? "+" : "-"} ${changed ? "Поменял" : "Не менял"}`;
  table.append(tr);
}
