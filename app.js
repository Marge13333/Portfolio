
////////////Slider

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


/////////////Skil Lines

function HtmlCssLine(){
	const linesFirst = document.querySelectorAll('.lines-80')

window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	linesFirst.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;


		if(boxTop < triggerBottom){
			box.classList.add('actionHtmlCss')
		}else{
			box.classList.remove("actionHtmlCss")
		}
		
	})
}
}
HtmlCssLine()

function ReactJsLine(){
	const linesSecond = document.querySelectorAll('.lines-50')

window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	linesSecond.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;


		if(boxTop < triggerBottom){
			box.classList.add('actionReactJs')
			
		}else{
			box.classList.remove("actionReactJs")
		}
		
	})
}
}
ReactJsLine()

function HtmlCssCount(){
	let valueDisplays = document.querySelectorAll(".num")
	let interval = 2000;

	valueDisplays.forEach((valueDisplay) =>{
		let startValue = 0;
		let endValue = parseInt(valueDisplay.getAttribute("data-val"));
		let duration = Math.floor(interval/endValue);
		let counter = setInterval(function(){
			startValue += 1;
			valueDisplay.textContent= startValue;
			if (startValue === endValue){
				clearInterval(counter);
			}
		},duration)
	}
	)
}


///////// Second Section animation

function SecondSectionTransition(){
	const MuchInfo = document.querySelectorAll('.info-wrapper')

window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	MuchInfo.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
			HtmlCssCount()
		}
		
	})
}
}SecondSectionTransition()



function InfoSectionAnimation(){
	const InfoBottom = document.querySelectorAll('.info-bottom-wrapper')

window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	InfoBottom.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
			HtmlCssCount()
		}
		
	})
}
}InfoSectionAnimation()



//////////Best Service


function bestServiceAnimation(){
	const box= document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	box.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
			HtmlCssCount()
		}
		
	})
}
} bestServiceAnimation()



