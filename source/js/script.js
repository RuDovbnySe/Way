const open = document.querySelector('.header__toggle-open');
const navigation = document.querySelector('.header__nav');
const close = document.querySelector('.header__toggle-close');

const rateOpenComplex = document.querySelector(".rate__button--complex");
const rateOpenEconomy = document.querySelector(".rate__button--economy");
const rateClose = document.querySelector(".popup__toggle-close")
const rate = document.querySelector('.popup')

function ready() {
  console.log('Закрывает меню при подключении скрипт файла');
  navigation.classList.remove('header__nav--show');
  open.classList.remove('visually-hidden');
}

document.addEventListener("DOMContentLoaded", ready);

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - Открывает меню');
  navigation.classList.remove('header__box--hide');
  open.classList.add('visually-hidden');
  close.classList.remove('visually-hidden');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - закрывает меню');
  navigation.classList.remove('header__nav--show');
  close.classList.add('visually-hidden');
  open.classList.remove('visually-hidden');
})

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - Открывает меню');
  navigation.classList.add('header__nav--show');
  open.classList.add('visually-hidden');
  close.classList.remove('visually-hidden');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - закрывает меню');
  navigation.classList.remove('header__nav--show');
  close.classList.add('visually-hidden');
  open.classList.remove('visually-hidden');
})

rateOpenEconomy.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - открывает попап');
  rate.classList.remove('visually-hidden')
})

rateOpenComplex.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - открывает попап');
  rate.classList.remove('visually-hidden')
})

rateClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - Закрывает попап');
  rate.classList.add('visually-hidden')
})
