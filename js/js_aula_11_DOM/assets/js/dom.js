let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let phoneElement = document.querySelector("#phone");

let saveButtonElement = document.querySelector("#btn-save");
let concludeButtonElement = document.querySelector("#btn-conclude");

let completedForm = [];

let cleanForm = () => {
  nameElement.value = "";
  emailElement.value = "";
  phoneElement.value = "";
};

let showMsg = (msg) => {
  alert(msg);
};

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

  if (validForm) {
    let form = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    };
    completedForm.push(form);
    cleanForm();
    showMsg("Tudo certo por aqui!");
  } else {
    showMsg("Algo está errado, verifique o formulário!");
  }
};

let showList = (elemento) => {
  let lineList = `<tr>
                  <td>${elemento.name}</td>
                  <td>${elemento.email}</td>
                  <td>${elemento.phone}</td>
                  </tr>`;
  let tBodyElement = document.querySelector("#show-list");
  tBodyElement.innerHTML = lineList;
};

let concludeForm = () => {
  let formElement = document.querySelector("#form");
  let listElement = document.querySelector("#list");
  formElement.setAttribute("class", "inactive");
  listElement.setAttribute("class", "active");
  completedForm.forEach(showList);

};

saveButtonElement.addEventListener("click", saveForm);
concludeButtonElement.addEventListener("click", concludeForm);
