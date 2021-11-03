// const form = document.querySelector('.feedback-form');
// let inputData = {};

// initForm();

// // console.log(form.elements);

// form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);
//   inputData[e.target.name] = e.target.value;
//   // console.log(inputData);
//   localStorage.setItem('inputData', JSON.stringify(inputData));
//   localStorage.setItem('inputData', JSON.stringify(inputData));
// });
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   formData.forEach(data => console.log(data));
//   formData.forEach((email, message) => console.log(email, message));
//   // inputData = {};
//   // localStorage.removeItem('inputData');
// });

// // console.log(formData);

// function initForm() {
//   let inputForm = localStorage.getItem('inputData');
//   // console.log(inputForm);

//   if (inputForm) {
//     console.log(inputForm);
//   }
//   inputForm = JSON.parse(inputForm);
//   console.log(inputForm);
//   Object.entries(inputForm).forEach(([name, value]) => {
//     // console.log(form.elements);
//     // console.log(name, value);
//     // console.log((form.elements[name].value = value));
//     // console.log(form.elements[name].value);
//     // console.log(form.elements[name]);
//     inputData[name] = value;
//     form.elements[name].value = value;
//   });
// }
