
const buttonPopupOpen = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button');
const range = document.querySelector('.switch__range');
const iconThemeLight = document.querySelector('.switch__icon-light');
const iconThemeDark = document.querySelector('.switch__icon-dark');
const root = document.querySelector(':root');

//открытие и закрытие попапа
function openPopup() {
  popup.classList.add('popup_active');
}

function closePopup() {
  popup.classList.remove('popup_active');
}

buttonPopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);

// смена темы страницы переключателем
function changeTheme () {
  if (range.value === '10') {
    iconThemeLight.setAttribute('fill', '#676767');
    iconThemeDark.setAttribute('fill', '#676767');
    root.style.setProperty('--backgroundColor', '#333');
    root.style.setProperty('--backgroundColorRange', '#545454');
    root.style.setProperty('--colorTextMain', '#fff');
    root.style.setProperty('--inputTextInactive', '#e5e5e5');
    buttonPopupOpen.classList.add('header__button_theme_dark');
    buttonPopupClose.classList.add('popup__button_theme_dark');
  }
  if (range.value === '0') {
    iconThemeLight.setAttribute('fill', '#cfcfcf');
    iconThemeDark.setAttribute('fill', '#cfcfcf');
    root.style.setProperty('--backgroundColor', '#f4f4f4');
    root.style.setProperty('--backgroundColorRange', '#fff');
    root.style.setProperty('--colorTextMain', '#151515');
    root.style.setProperty('--inputTextInactive', '#222');
    buttonPopupOpen.classList.remove('header__button_theme_dark');
    buttonPopupClose.classList.remove('popup__button_theme_dark');
  }
}

range.addEventListener('change', changeTheme)
