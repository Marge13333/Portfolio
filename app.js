function Slider() {
	const slide = document.querySelectorAll(".header-bg");
	
	let activeIndex = 0;

	function renderSlides() {
		slide.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("action");
			} else {
				el.classList.remove("action");
			}
		});
	}

    function nextFn() {
		if (activeIndex === slide.length - 1) {
			activeIndex = 0;
		} else {
			activeIndex++;
		}
		renderSlides();
	}
    
        setInterval(nextFn, 5000);

  
    renderSlides();
    

}
Slider();