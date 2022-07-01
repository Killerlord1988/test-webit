'use strict';
const modal = document.querySelector('.modal');
const modalOverlayWrapper = modal.querySelector('.modal-overlay__wrapper');
const button = document.querySelector('.button')

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show')
})

modalOverlayWrapper.addEventListener('click', function (evt) {
    evt.preventDefault();
  if (evt.target.classList.contains('modal-overlay__wrapper')) {
    modal.classList.remove('modal--show')
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
  }
})
