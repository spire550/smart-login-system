var logOutBtn = document.getElementById("logOutBtn");
var welcomeUser = document.getElementById("userNamee");
var userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome " + userName;
if (!userName) {
  location.assign("./index.html");
}

logOutBtn.addEventListener("click", function () {
  logout();
});
function logout() {
  localStorage.removeItem("userName");
  location.assign("./index.html");
}
