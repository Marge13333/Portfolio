
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
		
		}
		
	})
}
} bestServiceAnimation()



///////Recom...
function mainSlider() {
	const slides = document.querySelectorAll(".recom-change");
	const sliderBtns = document.querySelectorAll(".recom-btns");

	let activeIndex = 0;

	function renderSlides() {
		slides.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("action");
			} else {
				el.classList.remove("action");
				el.classList.add('action-N2')
			}
		});
		sliderBtns.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("action");
			} else {
				el.classList.remove("action");
			}
		});
	}

	function renderBullets() {
		sliderBtns.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				activeIndex = index;
				renderSlides();
				console.log("log")

			});
		});
	}


	renderSlides();
	renderBullets();

}
mainSlider()

/////////////
const Btns = document.querySelectorAll('.projects-btn');
const projects = document.querySelectorAll('.projects-box');

Btns.forEach(btn => {
  btn.addEventListener('click', () => {
    Btns.forEach(btn => btn.classList.remove('action'));
    btn.classList.add('action');

    const filter = btn.getAttribute('data-filter');
    projects.forEach(project => {
      if ( project.classList.contains(filter)) {
        project.style.display = 'block';
		project.classList.add('action')
      } else if(filter === 'all'){
		project.classList.add('action')
        project.style.display = 'block';
      }else {
        project.style.display = 'none';
		project.classList.remove('action')
      }
    });
    
  });
});


function LastProjectsAnimationTitle(){
	const Title= document.querySelectorAll('.latest-projects-title')
window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	Title.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
		
		}
		
	})
}
}
LastProjectsAnimationTitle()



function LastProjectsAnimationSection(){
	const Sect= document.querySelectorAll('.projects-filter-div')
window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	Sect.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
		
		}
		
	})
}
} LastProjectsAnimationSection()

function LastProjectsAnimationList(){
	const List= document.querySelectorAll('.projects-btn')
window.addEventListener('scroll', checkBox)

checkBox()


function checkBox(){
	const triggerBottom = window.innerHeight ;

	List.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('active')
		
		}
		
	})
}
} LastProjectsAnimationList()