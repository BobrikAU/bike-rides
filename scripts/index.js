
const buttonPopupOpen = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button');

function openPopup() {
  popup.classList.add('popup_active');
}

function closePopup() {
  popup.classList.remove('popup_active');
}

buttonPopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);
