"use strict";


const open = document.querySelector('.header-burger__icon');
const openMenu = document.querySelector('.header-burger__menu');


open.addEventListener('click', function(event){
  event.stopPropagation()
  open.classList.toggle('burger-close');
  openMenu.classList.toggle('active');
});

const body = document.querySelector('body');

body.addEventListener('click', function(){
  open.classList.remove('burger-close');
  openMenu.classList.remove('active');
});