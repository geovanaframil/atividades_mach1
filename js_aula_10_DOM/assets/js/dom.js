let elementName1 = document.querySelector("#name1");
let elementName2 = document.querySelector("#name2");
let elementName3 = document.querySelector("#name3");

let elementButton = document.querySelector("#save");

let elementFeedback = document.querySelector(".feedback");

let elementParagraphName1 = document.querySelector("#name-paragrapf-1");
let elementParagraphName2 = document.querySelector("#name-paragrapf-2");
let elementParagraphName3 = document.querySelector("#name-paragrapf-3");

let validField = (field1, field2, field3) => {
  if (field1.length > 2 && field2.length > 2 && field3.length > 2) {
    return true;
  }
  return false;
};

let displayingMessage = () => {
  elementFeedback.removeAttribute("hidden");
};

elementButton.onclick = () => {
  let nameValue1 = elementName1.value;
  let nameValue2 = elementName2.value;
  let nameValue3 = elementName3.value;

  let validName = validField(nameValue1, nameValue2, nameValue3);

  if (validName) {
    elementFeedback.setAttribute("hidden", "false");
    elementParagraphName1.innerHTML += ` ${nameValue1}`;
    elementParagraphName2.innerHTML += ` ${nameValue2}`;
    elementParagraphName3.innerHTML += ` ${nameValue3}`;
  } else {
    displayingMessage();
  }
};
