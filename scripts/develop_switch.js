
const range = document.querySelector('.footer__range');
const iconThemeLight = document.querySelector('.footer__icon-light');
const iconThemeDark = document.querySelector('.footer__icon-dark');
const root = document.querySelector(':root');


function changeTheme () {
  if (range.value === '10') {
    iconThemeLight.setAttribute('fill', '#676767');
    iconThemeDark.setAttribute('fill', '#676767');
    root.style.setProperty('--backgroundColor', '#333');
    root.style.setProperty('--backgroundColorRange', '#545454');
  }
  if (range.value === '0') {
    iconThemeLight.setAttribute('fill', '#cfcfcf');
    iconThemeDark.setAttribute('fill', '#cfcfcf');
    root.style.setProperty('--backgroundColor', '#f4f4f4');
    root.style.setProperty('--backgroundColorRange', '#fff');
  }
}

range.addEventListener('change', changeTheme)
