let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let phoneElement = document.querySelector("#phone");

let saveButtonElement = document.querySelector("#btn-save");
let concludeButtonElement = document.querySelector("#btn-conclude");

let completedForm = [];

let cleanForm = () => {
    nameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
}

let validField = (nameField, emailField, phoneField) => {
  if (
    nameField.length > 2 &&
    emailField.length > 2 &&
    phoneField.length == 11
  ) {
    return true;
  }
  return false;
};

let saveForm = () => {
  let nameValue = nameElement.value;
  let emailValue = emailElement.value;
  let phoneValue = phoneElement.value;

  let validForm = validField(nameValue, emailValue, phoneValue);

  let form = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
  };

  if (validForm) {
    completedForm.push(form);
    console.log(completedForm);
  } else {
    console.log("ERRO!");
  }

  cleanForm();
};


saveButtonElement.addEventListener('click', saveForm)