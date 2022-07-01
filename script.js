'use strict';
const modal = document.querySelector('.modal');
const modalOverlayWrapper = modal.querySelector('.modal-overlay__wrapper');
const button = document.querySelector('.button')

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--show')
})

modalOverlayWrapper.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show')
})

modalOverlayWrapper.addEventListener('keydown', function(evt) {
  modal.classList.remove('modal--show')
})
