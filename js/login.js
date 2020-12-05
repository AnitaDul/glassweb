// A regisztrációhoz szükséges gombok működése

// function buttonFunctionReg() {
//   var x = document.getElementById("vipdivreg");
//   let computedRegStyle = window.getComputedStyle(x);
//   let computedRegDisplay = computedRegStyle.getPropertyValue('display') 
//   if (computedRegDisplay === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function buttonFunctionLogin() {
//   var x = document.getElementById("vipdivlogin");
//   let computedLogStyle = window.getComputedStyle(x);
//   let computedLogDisplay = computedlogStyle.getPropertyValue('display') 
//   if (computedLogDisplay === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

function buttonFunctionReg() {
  var x = document.getElementById("vipdivreg");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  {
    var x = document.getElementById("vipdivlogin");
    x.style.display = "none";
  }
}



function buttonFunctionLogin() {
  var x = document.getElementById("vipdivlogin");
  if (x.style.display === "none") {
    x.style.display = "block" ;
  } else {
    x.style.display = "none";
  }
  {
    var x = document.getElementById("vipdivreg");
    x.style.display = "none";
  }
}

// A bejelentkezési form működése

function animatedForm(){
  const arrows = document.querySelectorAll (".fa-arrow-right");


arrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;

    //Check for validation
  if(input.type === "text" && validateUser(input)) {
    nextSlide(parent, nextForm);
  } else if (input.type === "password" && validateUser(input)) {
    alert("beléphetsz!");
  }
  });
});
}

function validateUser(user) {
  if (user.value.length<6) {
    alert ("helytelen felhasználónév, kérem, ellenőrizze!");
    
  } else {
    return true;
  }
}


function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}



animatedForm();
