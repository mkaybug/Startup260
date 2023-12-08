// Get username and password from HTML
let username = document.forms['form']['username'];
let password = document.forms['form']['password'];

// Get username and password error codes from HTML
let username_error = document.getElementById('username_error');
let pass_error = document.getElementById('pass_error');

// Listen for text input in username and password fields
username.addEventListener('textInput', username_valid);
password.addEventListener('textInput', password_valid);

function validated() {
  if (username.value.length < 9) {
    username.style.border = "1px solid red";
    username_error.style.display = "block";
    username.focus();
    return false;
  }

  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }

  createLogin();
}

function username_valid() {
  // Must check to see if username already exists in database
  
  // if (getUserName(username.value) === True) {

  // }

  if (username.value.length >= 8) {
    username.style.border = "1px solid silver";
    username_error.styledisplay = "none";
    username.focus();
    return true;
  }
}

function pass_valid() {
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    pass_error.styledisplay = "none";
    password.focus();
    return true;
  }
}

function createLogin() {
    localStorage.setItem("userName", username.value);
    console.log(localStorage.getItem("username", username.value));
    localStorage.setItem(username.value, password.value);
}