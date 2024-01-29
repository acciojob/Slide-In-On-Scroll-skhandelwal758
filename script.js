// Your JS code here.
var img = document.getElementsByTagName('img');

window.addEventListener(
    'scroll',
    debounce(
		function (event) {
			let currWindowScrollY = window.scrollY;
			let currWindowInnerHeight = window.innerHeight;
			let currMiddlePosition = currWindowScrollY + currWindowInnerHeight;
			let loopLength = img.length;

			for (let index = 0; index < loopLength; index++) {
				let currImageOffset = img[index].offsetTop;
				let currImageHeight = img[index].height;

				if(currMiddlePosition >= currImageHeight + currImageOffset){
					img[index].classList.add('active');
				}
			}
	    }
	)
)