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

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Email is invalid");
  }
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkValidation(inputArr) {
  inputArr.forEach(function(elem) {
    if (elem.value.trim() === "") {
      showError(elem, `${getFieldName(elem)} is required`);
    } else {
      showSuccess(elem);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(element, min, max) {
  if (element.value.length < min) {
    showError(
      element,
      `${getFieldName(element)} length must be at least ${min} characters`
    );
  } else if (element.value.length > max) {
    showError(
      element,
      `${getFieldName(element)} length must be less then ${max} characters`
    );
  } else {
    showSuccess(element);
  }
}

function checkPasswordsMatch(pass1, pass2) {
  if (pass1 !== pass2) {
    showError(pass2, "Passwords don't match");
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkValidation([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
