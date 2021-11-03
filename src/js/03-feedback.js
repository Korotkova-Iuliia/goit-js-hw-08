const form = document.querySelector('.feedback-form');

let inputData = {};

initForm();

form.addEventListener('input', e => {
  inputData[e.target.name] = e.target.value;
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   console.log(inputData);
  localStorage.setItem('inputData', JSON.stringify(inputData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  formData.forEach((email, message) => console.log(email, message));
  form.reset();
  localStorage.removeItem('inputData');
});

function initForm() {
  let inputForm = localStorage.getItem('inputData');
  console.log(inputForm);

  if (inputForm) {
    inputForm = JSON.parse(inputForm);
    console.log(inputForm);
    Object.entries(inputForm).forEach(([name, value]) => {
      inputData[name] = value;
      form.elements[name].value = value;
    });
  }
  //
}
