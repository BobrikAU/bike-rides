
const buttonPopupOpen = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button');
const iconThemeLight = document.querySelector('.switch__icon-light');
const iconThemeDark = document.querySelector('.switch__icon-dark');
const root = document.querySelector(':root');
const buttonsLeftRight = document.querySelectorAll('.slider-roads__batton-left-right');
const arrowsInButtons = document.querySelectorAll('.slider-roads__icon');
const ranges = document.querySelectorAll('.switch__range');
const iconTheme = document.querySelector('.footer__icon-theme');
const popupLink = document.querySelectorAll('.popup__link');

//открытие и закрытие попапа
function openPopup() {
  popup.classList.add('popup_active');
}

function closePopup() {
  popup.classList.remove('popup_active');
}

buttonPopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);
popupLink.forEach(function(item) {
  item.addEventListener('click', closePopup);
})

// смена темы страницы переключателем
let numberTheme = 0;

function changeTheme() {
  if (numberTheme === 0) {
    iconThemeLight.setAttribute('fill', '#676767');
    iconThemeDark.setAttribute('fill', '#676767');
    root.style.setProperty('--backgroundColor', '#333');
    root.style.setProperty('--backgroundColorRange', '#545454');
    root.style.setProperty('--colorTextMain', '#fff');
    root.style.setProperty('--inputTextInactive', '#e5e5e5');
    root.style.setProperty('--backgroundColorFooter', '#2f2f2f');
    root.style.setProperty('--colorTextFooterText', '#565656');
    root.style.setProperty('--fieldsetBorder', 'rgba(125, 125, 125, .5)');
    root.style.setProperty('--fieldsetBorderFocus', 'rgba(125, 125, 125, 1)');
    root.style.setProperty('--pointCardInactiveColor', '#919191');
    buttonPopupOpen.classList.add('header__button_theme_dark');
    buttonPopupClose.classList.add('popup__button_theme_dark');
    buttonsLeftRight.forEach(function (item) {
      item.classList.add('slider-roads__batton-left-right_theme_dark');
    });
    arrowsInButtons.forEach(function (item) {
      item.classList.add('slider-roads__icon_theme_dark');
    });
    ranges.forEach(function(item) {
      item.value = '10';
    });
    iconTheme.style.stroke = '#fff';
    numberTheme = 1;
  } else {
    iconThemeLight.setAttribute('fill', '#cfcfcf');
    iconThemeDark.setAttribute('fill', '#cfcfcf');
    root.style.setProperty('--backgroundColor', '#f4f4f4');
    root.style.setProperty('--backgroundColorRange', '#fff');
    root.style.setProperty('--colorTextMain', '#151515');
    root.style.setProperty('--inputTextInactive', '#222');
    root.style.setProperty('--backgroundColorFooter', '#efefef');
    root.style.setProperty('--colorTextFooterText', '#cfcfcf');
    root.style.setProperty('--fieldsetBorder', 'rgba(199, 199, 199, .5)');
    root.style.setProperty('--fieldsetBorderFocus', 'rgba(199, 199, 199, 1)');
    root.style.setProperty('--pointCardInactiveColor', '#cacaca');
    buttonPopupOpen.classList.remove('header__button_theme_dark');
    buttonPopupClose.classList.remove('popup__button_theme_dark');
    buttonsLeftRight.forEach(function (item) {
      item.classList.remove('slider-roads__batton-left-right_theme_dark');
    });
    arrowsInButtons.forEach(function (item) {
      item.classList.remove('slider-roads__icon_theme_dark');
    });
    ranges.forEach(function(item) {
      item.value = '0';
    });
    iconTheme.style.stroke = '#151515';
    numberTheme = 0;
  }
}

ranges.forEach(function(item) {
  item.addEventListener('change', changeTheme);
});
iconTheme.addEventListener('click', changeTheme);


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
const inputsRadioRoads = document.querySelectorAll('.bikes__choice');
const listRoadsTitle = document.querySelector('.bikes__choice-tite');
let bikesCardsActive = document.querySelectorAll('.bikes__cards')[0];
let bikeCardActive;
const roadLinks = document.querySelectorAll('.bikes__road-type');
let roadLinkActive = document.querySelector('.bikes__road-type');

      // работа со шрифтом ссылки на выбранную группу велосипедов
function markActiveLink () {
  roadLinkActive.classList.add('bikes__road-type_open');
}

function uncheckLink () {
  roadLinkActive.classList.remove('bikes__road-type_open');
}

            // выделение активной ссылки при загрузке страницы
if (window.innerWidth > 850) {
  markActiveLink();
}

            // запоминание активной ссылки при клике на нее и смена шрифта при экране более 850px
function handleLinks(event) {
  if (window.innerWidth > 850) {
    uncheckLink ();
  }
  roadLinkActive = event.target;
  if (window.innerWidth > 850) {
    markActiveLink ();
  }
}

roadLinks.forEach(function(item) {
  item.addEventListener('click', handleLinks);
})
            // контроль шрифта ссылки при изменении экрана пользователем осуществляется ниже

      // работа переключателя списков велосипедов в виде выпадающего меню с экрана в 850px и ниже
function changeBikes(event) {
  if (window.innerWidth <= 850) {
    removeInvisibilityCards ();
  }
  listRoadsTitle.textContent = event.target.value;
  document.querySelector('.bikes__control').blur();
  bikesCardsActive = event.target.nextElementSibling;
  if (window.innerWidth <= 850) {
    hideExtraCards();
  }
}

inputsRadioRoads.forEach(function (item) {
  item.addEventListener('change', changeBikes);
})

      // прекращение состояния невидимости карточек
function removeInvisibilityCards () {
  bikesCardsActive.querySelectorAll('.card').forEach(function(item){
    item.classList.remove('card_invisible');
    item.removeEventListener('touchstart', findTouchstartX);
    item.removeEventListener('touchend', findTouchendX);
  });
}
      // оставление открытой только одной карточки при экране от и ниже 850px
function hideExtraCards() {
  bikeCardActive = bikesCardsActive.querySelectorAll('.card')[0];
  watchBikeCardActive();
  bikesCardsActive.querySelectorAll('.card')[0].classList.remove('card_invisible');
  bikesCardsActive.querySelectorAll('.card')[1].classList.add('card_invisible');
  bikesCardsActive.querySelectorAll('.card')[2].classList.add('card_invisible');
}
            // при загрузке страницы на экране 850px и иниже
if (window.innerWidth <= 850) {
  hideExtraCards();
}
            // контроль видимости карточек и шрифта активной ссылки изменении пользователем размера экрана
window.addEventListener('resize', function () {
  if (window.innerWidth <= 850) {
    hideExtraCards();
    uncheckLink ();
  } else {
    removeInvisibilityCards ();
    markActiveLink ();
  }
})

            //смена карточек свайпом
let touchstartX;
let touchendX;

function findTouchstartX (event) {
  touchstartX = event.changedTouches[0].screenX;
}

function findTouchendX (event) {
  touchendX = event.changedTouches[0].screenX;
  let lengthMovement = touchstartX > touchendX ? touchstartX - touchendX : touchendX - touchstartX;
  if (lengthMovement >= 50) {
    changeCard();
  }
}

function changeCard() {
  let indexCardActive;
  bikesCardsActive.querySelectorAll('.card').forEach(function(item, index) {
    if(!item.classList.contains('card_invisible')) {
      indexCardActive = index;
    }
  });
  bikeCardActive.removeEventListener('touchstart', findTouchstartX);
  bikeCardActive.removeEventListener('touchend', findTouchendX);
  bikeCardActive.classList.add('card_invisible');
  if(indexCardActive === 2) {
    indexCardActive = 0;
  } else {
    indexCardActive++;
  }
  bikeCardActive = bikesCardsActive.querySelectorAll('.card')[indexCardActive];
  bikeCardActive.classList.remove('card_invisible');
  watchBikeCardActive();
}

function watchBikeCardActive() {
  bikeCardActive.addEventListener('touchstart', findTouchstartX);
  bikeCardActive.addEventListener('touchend', findTouchendX);
}


//логика работы формы для e-mail
const fieldset = document.querySelector('.footer__fieldset');
const input = document.querySelector('.footer__input');
const button = document.querySelector('.footer__button');
const form = document.querySelector('.footer__form');

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

