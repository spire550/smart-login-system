var signUpBtn = document.getElementById("signUpBtn");
var signupNameInput = document.getElementById("name");
var signupEmailInput = document.getElementById("typeEmailX");
var signupPasswordInput = document.getElementById("typePasswordX");
var loginAnchor = document.getElementById("loginAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  var user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please fill in all fields",
    });
    return;
  }

  if (
    isValidName(signupNameInput.value) &&
    isValidEmail(signupEmailInput.value) &&
    isValidPassword(signupPasswordInput.value) &&
    isNewEmail(signupEmailInput.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    swal
      .fire({
        icon: "success",
        title:
          "you signed Up successfully,You will now redirect to The login page",
        showConfirmButton: false,
        timer: 2500,
      })
      .then(function () {
        location.assign("./index.html");
      });
  } else {
    notValidation();
  }
}

signUpBtn.addEventListener("click", function () {
  signUp();
});

function isValidName(name) {
  var nameRegex = /^[a-zA-Z0-9]{4,10}$/;
  return nameRegex.test(name);
}

function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
function isValidPassword(password) {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
  return passwordRegex.test(password);
}

function isNewEmail(email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function notValidPassword() {
  swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Password must contain 5 letters(At least 1 letter Capital,number and special character) ",
  });
}
function notValidEmail() {
  swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Please Enter Valid Email.ex(examble@gmail.com) ",
  });
}

function notValidName() {
  swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Please Enter Valid Name contains [4-10] letter ",
  });
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
}

function notValidation() {
  if (!isValidName(signupNameInput.value)) {
    notValidName();
  } else if (!isValidEmail(signupEmailInput.value)) {
    notValidEmail();
  } else if (!isValidPassword(signupPasswordInput.value)) {
    notValidPassword();
  }
}
loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});
