
// Ez a felső rész.
let section = document.querySelector ('section');
window.addEventListener('scroll', function(){
  // Az ablak Y mérete.
  let value = window.scrollY;
  section.style.clipPath = "circle("+ value +"px at center)";
})

// Ez az alsó input
const inputs = document.querySelectorAll(".input");
// Ez kezeli a szöveg mozgását
function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc(){
  let parent = this.parentNode;
  if (this.value == ""){
  parent.classList.remove("focus");
}
}
// Ez felpakolja mindenhova az eventlistenert (eseményfigyelő)
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
