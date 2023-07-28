var loginEmailInput = document.getElementById("typeEmailX");
var loginPasswordInput = document.getElementById("typePasswordX");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;
  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    location.assign("./welcome.html");
  } else {
    swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Incorrect email or password",
    });
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  location.assign("./signup.html");
});
