document.addEventListener('DOMContentLoaded', () => {

	let mySwiper = new Swiper('.swiper-container', {
    	slidesPerView: 1,
    	loop: true,
    	navigation: {
    		nextEl: '.arrow',
    	},
    	breakpoints: {
    		540: {
    			slidesPerView:2,
    			spaceBetween:40
    		}
    	}
	});

	let menuButton = document.querySelector('.menu-button');
	let menu = document.querySelector('.header');

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('menu-button-active');
		menu.classList.toggle('header-active');
	});

});