function checkIfSignedUp(x) {
  if (localStorage.getItem('signedUp') == 0 || localStorage.getItem('signedUp') == null) {
    sendToSignUpPage(x);
  }
}
function disable(x) {
  localStorage.setItem('loggedIn', '0');
  localStorage.setItem('signedUp', '0');
  localStorage.setItem('user', null);
  localStorage.setItem('email', null);
  localStorage.setItem('pass', null);
  sendToSignUpPage(x);
}
function sendToSignUpPage(x) {
  localStorage.setItem('previous_site', window.location);
  if (x == 0) {
    window.location.href = "htdocs/signup.html";
  } else {
    window.location.href = "signup.html";
  }
}
function signup(x) {
  var filled = 0;
  var completeForm = 0;
  var username = document.getElementById('username_signup').value;
  var email = document.getElementById('email_signup').value;
  var password = document.getElementById('password_signup').value;
  if (x == 0) {
    var loginPath = "htdocs/login.html";
  } else {
    var loginPath = "login.html";
  }
  if (username != "") {
    filled += 1;
  }
  if (email != "") {
    filled += 1;
  }
  if (password != "") {
    filled += 1
  }
  if (filled != 3) {
    window.alert('This form must be complete in order to sign up.');
    console.warn('This form must be complete in order to sign up.');
    document.getElementById('password_signup').value = "";
    return
  } else {
    completeForm += 1;
  }
  if (password.length < 8) {
    window.alert('Your password is too short, it must be at least 8 characters long');
    console.warn('Your password is too short, it must be at least 8 characters long');
    document.getElementById('password_signup').value = "";
    return
  } else {
    completeForm += 1;
  }
  if (completeForm == 2) {
    if (window.confirm('Are you sure you wish to submit this data?')) {
      localStorage.setItem('user', username);
      localStorage.setItem('fromSign', 'true');
      localStorage.setItem('email', email);
      localStorage.setItem('pass', password);
      localStorage.setItem('signedUp', '1');
      window.location.href = loginPath;
    }
  }
}
function showPassword() {
  if (document.getElementById('show_password').checked) {
    document.getElementById('password_signup').type = "text";
  } else {
    document.getElementById('password_signup').type = "password";
  }
}
