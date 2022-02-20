const { event } = require('jquery');

const emailInput = document.querySelector('#callback-email');
const formBtn = document.querySelector('#callback-btn');
const warnMsg = document.querySelector('.input__warning-message');

formBtn.addEventListener('click', onFormBtnSubmit);

function onFormBtnSubmit(event) {
  if (emailInput.value === '') {
    event.preventDefault();
    warnMsg.style.opacity = 1;
  } else {
    warnMsg.style.opacity = 0;
  }
}
