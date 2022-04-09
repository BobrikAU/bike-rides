
const buttonPopupOpen = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button');
const range = document.querySelector('.switch__range');
const iconThemeLight = document.querySelector('.switch__icon-light');
const iconThemeDark = document.querySelector('.switch__icon-dark');
const root = document.querySelector(':root');
const buttonsLeftRight = document.querySelectorAll('.slider-roads__batton-left-right');
const arrowsInButtons = document.querySelectorAll('.slider-roads__icon');

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
    buttonsLeftRight.forEach(function (item) {
      item.classList.add('slider-roads__batton-left-right_theme_dark');
    });
    arrowsInButtons.forEach(function (item) {
      item.classList.add('slider-roads__icon_theme_dark');
    });




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
    buttonsLeftRight.forEach(function (item) {
      item.classList.remove('slider-roads__batton-left-right_theme_dark');
    });
    arrowsInButtons.forEach(function (item) {
      item.classList.remove('slider-roads__icon_theme_dark');
    });
  }
}

range.addEventListener('change', changeTheme)

//позиционирование и перелистывание отделов о типах дорог
let left = '-' + getComputedStyle(document.querySelector('.slider-roads')).width;
let center = getComputedStyle(document.querySelector('.slider-roads')).paddingLeft;
let right = getComputedStyle(document.querySelector('.slider-roads')).width;
const highway = document.querySelector('.slider-roads__highway');
const gravel = document.querySelector('.slider-roads__gravel');
const plain = document.querySelector('.slider-roads__plain');
const buttonRight = document.querySelector('.slider-roads__right');
const buttonLeft = document.querySelector('.slider-roads__left');
const listRoads = [plain, highway, gravel];
let movableElement;

highway.style.left = center;
gravel.style.left = right;
gravel.style.visibility = 'hidden';
plain.style.left = left;
plain.style.visibility = 'hidden';

function moveFromRight () {
  left = '-' + getComputedStyle(document.querySelector('.slider-roads')).width;
  center = getComputedStyle(document.querySelector('.slider-roads')).paddingLeft;
  right = getComputedStyle(document.querySelector('.slider-roads')).width;
  listRoads[1].style.left = left;
  listRoads[2].style.visibility = 'visible';
  listRoads[2].style.left = center;
  listRoads[0].style.left = right;
  listRoads[1].style.visibility = 'hidden';
  movableElement = listRoads.shift();
  listRoads.push(movableElement);
}

function moveFromLeft () {
  left = '-' + getComputedStyle(document.querySelector('.slider-roads')).width;
  center = getComputedStyle(document.querySelector('.slider-roads')).paddingLeft;
  right = getComputedStyle(document.querySelector('.slider-roads')).width;
  listRoads[1].style.left = right;
  listRoads[0].style.visibility = 'visible';
  listRoads[0].style.left = center;
  listRoads[2].style.left = left;
  listRoads[1].style.visibility = 'hidden';
  movableElement = listRoads.pop();
  listRoads.unshift(movableElement);
}

buttonLeft.addEventListener('click', moveFromLeft);
buttonRight.addEventListener('click', moveFromRight);

window.addEventListener('resize', function () {
  listRoads[1].style.left = getComputedStyle(document.querySelector('.slider-roads')).paddingLeft;
});

// логика работы раздела о велосипедах
const bikesButtons = document.querySelectorAll('.bikes__button');
const bikesCards = document.querySelectorAll('.bikes__cards');

document.querySelector('.bikes__button-highway').classList.add('bikes__button_activ');
let markButton = document.querySelector('.bikes__button-highway');
document.querySelector('.bikes__highway').classList.add('bikes__cards_open');
let cardsOpen = document.querySelector('.bikes__highway');
let selectedCards;

function changeBikes (event) {
  const pressedButton = event.target;
  if (!pressedButton.classList.contains('bikes__button_activ')){
    for (let i = 0; i < bikesButtons.length; i++) {
      if (bikesButtons[i] === pressedButton){
        selectedCards = bikesCards[i];
        break
      }
    }
    cardsOpen.classList.remove('bikes__cards_open');
    selectedCards.classList.add('bikes__cards_open');
    cardsOpen = selectedCards;
    markButton.classList.remove('bikes__button_activ');
    pressedButton.classList.add('bikes__button_activ');
    markButton = pressedButton;
  }
}

bikesButtons.forEach( function(item) {
  item.addEventListener('click', changeBikes)
})



