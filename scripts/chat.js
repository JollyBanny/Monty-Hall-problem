let chat = document.getElementById("msgs");

async function addMessage(str, type, delay = 0) {
  let new_msg = document.createElement("div");
  new_msg.classList.add("msg", `msg-${type}`);
  new_msg.innerHTML = str;
  await wait(delay).then(() => {
    chat.append(new_msg);
  });
}

function clearChat() {
  chat.innerHTML = "";
}
