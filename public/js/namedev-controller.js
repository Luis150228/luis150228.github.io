const strokeLettersAnimated = (miliseg = 0.1) => {
	const paths = document.querySelectorAll('#nameDev path');
	for (const [i, path] of paths.entries()) {
		const lengthLetter = path.getTotalLength();
		const animationDelay = (i + 1) * miliseg;
		path.style.strokeDasharray = lengthLetter;
		path.style.strokeDashoffset = lengthLetter;
		path.style.transition = `stroke-dashoffset ${miliseg}s ease-in-out`;
		setTimeout(() => {
			path.style.strokeDashoffset = '0';
		}, animationDelay * 500);
	}
	return paths.length * miliseg * 500;
};

window.addEventListener('DOMContentLoaded', () => {
	strokeLettersAnimated(0.3);
});
