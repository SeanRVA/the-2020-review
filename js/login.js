function fromSignUpPage() {
  if (localStorage.getItem('fromSign') == "true") {
    document.getElementById('username_login').value = localStorage.getItem('user');
    document.getElementById('password_login').value = localStorage.getItem('pass');
    localStorage.setItem('fromSign', 'false');
  }
}
function checkIfLoggedIn(x) {
  if (localStorage.getItem('loggedIn') == '0' || localStorage.getItem('loggedIn') == null) {
    sendToLogInPage(x);
  }
}
function logout(x) {
  localStorage.setItem('loggedIn', '0');
  sendToLogInPage(x);
}
function sendToLogInPage(x) {
  localStorage.setItem('previous_site', window.location);
  if (x == 0) {
    window.location.href = "htdocs/login.html";
  } else {
    window.location.href = "login.html";
  }
}
function login() {
  var username = document.getElementById('username_login').value;
  var password = document.getElementById('password_login').value;
  if (username == localStorage.getItem('user') || username == localStorage.getItem('email')) {
    var correctUser = 1;
  } else {
    var correctUser = 0;
  }
  if (password == localStorage.getItem('pass')) {
    correctPass = 1;
  } else {
    correctPass = 0;
  }
  var correctDetails = correctUser + correctPass;
  console.log(correctUser, correctPass, correctDetails);
  if (correctDetails == 2) {
    localStorage.setItem('loggedIn', '1');
    window.location.href = localStorage.getItem('previous_site');
    console.log(localStorage.getItem('loggedIn'));
  } else {
    password = "";
    window.alert('Username or Password is incorrect. Try again.');
  }
}
