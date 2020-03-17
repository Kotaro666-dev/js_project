// document.addEventListener("keydown", target => {
//   let keyName = target.key;
//   console.log(keyName);
// });

window.addEventListener("keydown", function(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!key) {
    return;
  }

  key.classList.add("pressed");
  const keys = document.querySelectorAll(".key");
  // when transition(css) is done, then call the function removeTranstion
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("pressed");
}
