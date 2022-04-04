
const fieldset = document.querySelector('.footer__fieldset');
const input = document.querySelector('.footer__input');
const button = document.querySelector('.footer__button');
const form = document.querySelector('.footer__form')


function doBorderDark() {
  fieldset.classList.add('footer__fieldset_focus');
  button.classList.add('footer__button_visible');
};

function doBorderEsey() {
  fieldset.classList.remove('footer__fieldset_focus');
  button.classList.remove('footer__button_visible');
}


input.addEventListener('focus', doBorderDark);
input.addEventListener('blur', doBorderEsey);
form.addEventListener('submit', function(event) {
  event.preventDefault();
  input.value = 'Круто!';
})
