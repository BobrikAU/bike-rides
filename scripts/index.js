
const buttonPopupOpen = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button');
const iconThemeLight = document.querySelector('.switch__icon-light');
const iconThemeDark = document.querySelector('.switch__icon-dark');
const root = document.querySelector(':root');
const buttonsLeftRight = document.querySelectorAll('.slider-roads__batton');
const arrowLeftInButton = document.querySelector('.slider-roads__icon');
const arrowRightInButton = document.querySelector('.slider-roads__icon_action_next');
const ranges = document.querySelectorAll('.switch__range');
const iconTheme = document.querySelector('.footer__icon-theme');
const popupLink = document.querySelectorAll('.popup__link');
let listRoadsTitle = document.querySelector('.bikes__choice-tite');

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
    root.style.setProperty('--colorTextMainRGB', '255, 255, 255');
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
      item.classList.add('slider-roads__batton_theme_dark');
    });
    arrowLeftInButton.classList.add('slider-roads__icon_theme_dark');
    arrowRightInButton.classList.add('slider-roads__icon_theme_dark-other-direction');
    ranges.forEach(function(item) {
      item.value = '10';
    });
    listRoadsTitle.classList.add('bikes__choice-tite_theme_dark');
    listRoadsTitle = document.querySelector('.bikes__choice-tite_theme_dark');
    listRoadsTitle.classList.remove('bikes__choice-tite');


    document.querySelector('.container__line').classList.add('container__line_theme_dark');
    document.querySelectorAll('.switch__icon-light').forEach( item => {
      item.classList.add('switch__icon-light_theme_dark');
    });
    document.querySelectorAll('.switch__icon-dark').forEach( item => {
      item.classList.add('switch__icon-dark_theme_dark');
    });
    iconTheme.classList.add('footer__icon-theme_theme_dark');




    numberTheme = 1;
  } else {
    root.style.setProperty('--colorTextMainRGB', '21, 21, 21');
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
      item.classList.remove('slider-roads__batton_theme_dark');
    });
    arrowLeftInButton.classList.remove('slider-roads__icon_theme_dark');
    arrowRightInButton.classList.remove('slider-roads__icon_theme_dark-other-direction');
    ranges.forEach(function(item) {
      item.value = '0';
    });
    listRoadsTitle.classList.add('bikes__choice-tite');
    listRoadsTitle = document.querySelector('.bikes__choice-tite');
    listRoadsTitle.classList.remove('bikes__choice-tite_theme_dark');


    document.querySelector('.container__line').classList.remove('container__line_theme_dark');
    document.querySelectorAll('.switch__icon-light').forEach( item => {
      item.classList.remove('switch__icon-light_theme_dark');
    });
    document.querySelectorAll('.switch__icon-dark').forEach( item => {
      item.classList.remove('switch__icon-dark_theme_dark');
    });
    iconTheme.classList.remove('footer__icon-theme_theme_dark');



    numberTheme = 0;
  }
}

ranges.forEach(function(item) {
  item.addEventListener('change', changeTheme);
});
iconTheme.addEventListener('click', changeTheme);


//позиционирование и перелистывание отделов о типах дорог
const highway = document.querySelector('.slider-roads__highway');
const gravel = document.querySelector('.slider-roads__gravel');
const plain = document.querySelector('.slider-roads__plain');
const buttonRight = document.querySelector('.slider-roads_action_next');
const buttonLeft = document.querySelector('.slider-roads_action_back');
const listRoads = [plain, highway, gravel];

gravel.style.visibility = 'hidden';
plain.style.visibility = 'hidden';

function moveFromRight () {
  listRoads[2].style.visibility = 'visible';
  listRoads[1].style.left = parseInt(getComputedStyle(listRoads[1]).left, 10) - 1470 + 'px';
  listRoads[2].style.left = parseInt(getComputedStyle(listRoads[2]).left, 10) - 1470 + 'px';
  listRoads[1].style.visibility = 'hidden';
  listRoads[0].style.left = parseInt(getComputedStyle(listRoads[0]).left, 10) + 2940 + 'px';
  const movableElement = listRoads.shift();
  listRoads.push(movableElement);
}

function moveFromLeft () {
  listRoads[0].style.visibility = 'visible';
  listRoads[1].style.left = parseInt(getComputedStyle(listRoads[1]).left, 10) + 1470 + 'px';
  listRoads[0].style.left = parseInt(getComputedStyle(listRoads[0]).left, 10) + 1470 + 'px';
  listRoads[1].style.visibility = 'hidden';
  listRoads[2].style.left = parseInt(getComputedStyle(listRoads[2]).left, 10) - 2940 + 'px';
  const movableElement = listRoads.pop();
  listRoads.unshift(movableElement);
}

buttonRight.addEventListener('click', moveFromRight);
buttonLeft.addEventListener('click', moveFromLeft);

// логика работы раздела о велосипедах
const inputsRadioRoads = document.querySelectorAll('.bikes__choice');
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

