// store signup form element reference and add submit event listener
const signupForm = document.getElementById("dkh-signup-form");
signupForm.addEventListener("submit", handleSignupFormSubmit);

/**
 * callback function for signup form submit event listener
 */
function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { name, date, email, password } = Object.fromEntries(formDataEntries);

  const nameErrorMessage = validateName(name);
  const dateErrorMessage = validateDate(date);
  const emailErrorMessage = validateEmail(email);
  const passowrdErrorMessage = validatePassword(password);

  // show name error message to user
  MessagesErrorName.innerText = nameErrorMessage ? nameErrorMessage : "";

  // show date error message to user
  MessagesErrorDate.innerText = dateErrorMessage ? dateErrorMessage : "";

  // show email error message to user
  MessagesErrorEmail.innerText = emailErrorMessage ? emailErrorMessage : "";

  // show password error message to user
  MessagesErrorPassword.innerText = passowrdErrorMessage
    ? passowrdErrorMessage
    : "";
}
/**
 * validate name
 */
function validateName(name) {
  if (!name) return "El nombre es requerido";

  const hasNumber = /\d/g;
  if (hasNumber.test(name)) return "Su nombre no puede contener numeros";

  return "";
}

/**
 * validate Date
 */
function validateDate(date) {
  //create a current date for the validation
  const dateNow = new Date();
  const currentDate = `${dateNow.getFullYear()}-${
    dateNow.getMonth() + 1 >= 10
      ? dateNow.getMonth() + 1
      : "0" + (dateNow.getMonth() + 1)
  }-${dateNow.getUTCDate()}`;

  if (date > currentDate) return "No puede ingresar una fecha futura";

  if (!date) return "La fecha es requerida";
  return "";
}

/**
 * validate email
 */
function validateEmail(email) {
  if (!email) return "El email es requerido";

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const isValidEmail = /^\w+@\w+\.\w{2,}$/g;
  if (!isValidEmail.test(email)) {
    return "Por favor ingrese un email valido";
  }

  return "";
}

/**
 * validate passowrd
 */
function validatePassword(password, minlength) {
  if (!password) return "La contraseña es requerida.";

  if (password.length < minlength) {
    return `Por favor ingrse una contraseña que tenga al menos ${minlength}  caracteres.`;
  }

  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return "Por favor use almenos una letra en mayuscula.";
  }

  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return "Por favor utilice por lo menos un número.";
  }

  return "";
}
