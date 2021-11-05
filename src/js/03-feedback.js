const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

let inputData = {};

initForm();

form.addEventListener(
  'input',
  throttle(e => {
    inputData[e.target.name] = e.target.value;
    localStorage.setItem('inputData', JSON.stringify(inputData));
  }, 500),
);

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  // formData.forEach((email, message) => console.log(email, message));
  console.log(JSON.parse(localStorage.getItem('inputData')));
  form.reset();
  localStorage.removeItem('inputData');
  inputData = {};
});

function initForm() {
  let inputForm = localStorage.getItem('inputData');

  if (inputForm) {
    inputForm = JSON.parse(inputForm);

    Object.entries(inputForm).forEach(([name, value]) => {
      inputData[name] = value;
      form.elements[name].value = value;
    });
  }
}
