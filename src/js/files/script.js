// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// console.log(window.innerWidth);
window.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		// console.log(targetElement);
		if (targetElement.closest('.search__label')) {
			targetElement.closest('.search').classList.add('_active')
		} else if (!targetElement.closest('.search') && document.querySelector('.search') && window.innerWidth > 991.98) {
			// console.log('123');
			document.querySelector('.search').classList.remove('_active')
		}
		if (targetElement.closest('.menu__icon')) {
			document.querySelector('.search').classList.toggle('_active')
		}
	}
})

window.addEventListener('scroll', function() {
	if (scrollY > 50) {
		document.querySelector('header').classList.add('_dark')
	} else {
		document.querySelector('header').classList.remove('_dark')
	}
})