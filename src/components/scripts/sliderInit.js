export default function initSlider() {
	const items = document.querySelectorAll('.slider .item');
	const btnNext = document.querySelector('#next');
	const btnPrev = document.querySelector('#prev');

	let currentIndex = 0;
	console.log(items);

	// function updateSlider() {
	// 	items.forEach((item, index) => {
	// 		const offset = (index - currentIndex) * 220;
	// 		item.style.transform = `translateX(${offset}px)`;
	// 	});
	// }

	// btnNext?.addEventListener('click', () => {
	// 	currentIndex = (currentIndex + 1) % items.length;
	// 	updateSlider();
	// });

	// btnPrev?.addEventListener('click', () => {
	// 	currentIndex = (currentIndex - 1 + items.length) % items.length;
	// 	updateSlider();
	// });

	// updateSlider();
}
