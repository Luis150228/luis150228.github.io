document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.slider .item');
	const next = document.getElementById('next');
	const prev = document.getElementById('prev');
	const slider = document.querySelector('.slider');

	let active = 3;

	const loadShow = () => {
		let stt = 0;

		const current = items[active];
		if (!current) return;

		current.style.transform = 'none';
		current.style.zIndex = 1;
		current.style.filter = 'none';
		current.style.opacity = 1;

		for (let i = active + 1; i < items.length; i++) {
			stt++;
			const item = items[i];
			item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
			item.style.zIndex = -stt;
			item.style.filter = 'blur(5px)';
			item.style.opacity = stt > 2 ? 0 : 0.6;
		}

		stt = 0;

		for (let i = active - 1; i >= 0; i--) {
			stt++;
			const item = items[i];
			item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
			item.style.zIndex = -stt;
			item.style.filter = 'blur(5px)';
			item.style.opacity = stt > 2 ? 0 : 0.6;
		}
	};

	// Botones
	next?.addEventListener('click', () => {
		if (active + 1 < items.length) active++;
		loadShow();
	});

	prev?.addEventListener('click', () => {
		if (active - 1 >= 0) active--;
		loadShow();
	});

	// Swipe / drag
	let startX = 0;
	let isDragging = false;

	const onStart = (e) => {
		startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
		isDragging = true;
	};

	const onMove = (e) => {
		if (!isDragging) return;

		const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
		const diff = currentX - startX;

		for (const [i, item] of [...items].entries()) {
			const offset = (i - active) * 120 + diff / 5;
			item.style.transition = 'none';
			item.style.transform = `translateX(${offset}px)`;
		}
	};

	const onEnd = (e) => {
		if (!isDragging) return;
		isDragging = false;

		const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
		const diff = endX - startX;

		for (const item of items) {
			item.style.transition = 'transform 0.4s ease';
		}

		if (Math.abs(diff) > 50) {
			if (diff < 0 && active + 1 < items.length) {
				active++;
			} else if (diff > 0 && active - 1 >= 0) {
				active--;
			}
		}

		loadShow();
	};

	slider.addEventListener('touchstart', onStart);
	slider.addEventListener('touchmove', onMove);
	slider.addEventListener('touchend', onEnd);

	slider.addEventListener('mousedown', onStart);
	slider.addEventListener('mousemove', onMove);
	slider.addEventListener('mouseup', onEnd);
	slider.addEventListener('mouseleave', onEnd);

	loadShow();
});
