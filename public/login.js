// Validation Code for Inputs
let username = document.forms['form']['username'];
let password = document.forms['form']['password'];

let username_error = document.getElementById('username_error');
let pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
  const checkUsername = localStorage.getItem("username");
  console.log(localStorage.getItem("username"))

  if (username.value.length < 9) {
    username.style.border = "1px solid red";
    username_error.style.display = "block";
    username.focus();
    return false;
  }

  if (password.value.length < 7) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}

function username_Verify() {
  if (username.value.length >= 8) {
    username.style.border = "1px solid silver";
    username_error.styledisplay = "none";
    username.focus();
    return true;
  }
}

function pass_Verify() {
  if (password.value.length >= 6) {
    password.style.border = "1px solid silver";
    pass_error.styledisplay = "none";
    password.focus();
    return true;
  }
}