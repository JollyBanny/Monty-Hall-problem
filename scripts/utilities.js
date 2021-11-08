async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
