

document.addEventListener('DOMContentLoaded', function (event) {
	let dataText = ['Watch online', 'The best movies','Premieres','Enjoy with friends'];

	function writeText(text, i, fnCallback) {
		if (i < text.length) {
			document.querySelector('h1').textContent = text.substring(0, i + 1);
			setTimeout(function () {
				writeText(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 2000);
		}
	}

	// start  animation for a text in the dataText array
	function textAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function () {
				textAnimation(0);
			}, 7000);
		} else if (i < dataText[i].length) {
			writeText(dataText[i], 0, function () {
				textAnimation(i + 1);
			});
		}
	}
    textAnimation(0)
});

//paralax effect

let carousel = document.querySelector('.carousel_slider');

window.addEventListener('scroll', ()=>{
    let scrollValue = window.scrollY;

carousel.style.top = scrollValue * 1 + 'px';
})