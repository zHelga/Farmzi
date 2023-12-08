"use strict"

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__list');

headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('header__burger_active');
	headerMenu.classList.toggle('header__list_active');
})

// SLIDER================================================================================

let slider = document.querySelector(".slider-info");
let slides = document.querySelectorAll(".slider-info__slide");
let sliderLine = document.querySelector(".slider-info__wrapper");

let prev = document.querySelector(".slider-info__arrow_left");
let next = document.querySelector(".slider-info__arrow_right");

let count = 0;
let sliderWidth = slider.offsetWidth;

prev.addEventListener("click", prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
	count--;
	if (count < 0) {
		count = slides.length - 1;
	}

	rollSlider();
}
function nextSlide() {
	count++;
	if (count >= slides.length) {
		count = 0;
	}

	rollSlider();
}

function rollSlider() {
	sliderLine.style.transform = `translateX(${-count * sliderWidth}px)`
}

// ACCORDEON	============================================================================
let footerItems = document.querySelectorAll('.footer__item');

footerItems.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('footer__item_active')
	})
})