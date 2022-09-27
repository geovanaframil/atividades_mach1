let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let phoneElement = document.querySelector("#phone");

let saveButtonElement = document.querySelector("#btn-save");
let concludeButtonElement = document.querySelector("#btn-conclude");

let validField = (nameField, emailField, phoneField) => {
  if (nameField.length > 2 && emailField.length > 2 && phoneField.length == 11) {
    return true;
  }
  return false
};
