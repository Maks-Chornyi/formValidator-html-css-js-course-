const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const smallTag = formControl.querySelector("small");
  smallTag.innerText = msg;
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  username.value === ""
    ? showError(username, "Username is required")
    : showSuccess(username);

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValid(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  password.value === ""
    ? showError(password, "Password is required")
    : showSuccess(password);

  password2.value === ""
    ? showError(password2, "Password confirmation is required")
    : showSuccess(password2);
});
