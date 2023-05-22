
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
			});
		});
	}


	renderSlides();
	renderBullets();

}
mainSlider()


function RecomTransition(){
	const box= document.querySelectorAll('.recom-wrapper-inner')
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
} RecomTransition()

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
// ////////////////articles

function ArtcilesTransBoxsFirst(){
	const box= document.querySelectorAll('.articles-box1')
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
} ArtcilesTransBoxsFirst()

function ArtcilesTransBoxsSecond(){
	const box= document.querySelectorAll('.articles-box2')
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
} ArtcilesTransBoxsSecond()



function RosaTransition(){
	const box= document.querySelectorAll('.rosa.box')
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
} RosaTransition()


/////////////contact
const form = document.querySelector("form"),
	emailInput = document.querySelector("#email"),
	UserName = document.querySelector("#name"),
	UserWebsite= document.querySelector("#website"),
	UserMessage= document.querySelector("#message")


function checkEmail() {
	const emailValue =emailInput.value.trim()
	if (emailValue === "") {
		emailInput.parentElement.querySelector(".message").innerHTML =
			`<p class="error">Email is required</p>`

			emailInput.classList.remove("strong");
			emailInput.classList.add("weak");

		return false;
	} else if (!/@gmail.com$/.test(emailInput.value)) {
		emailInput.parentElement.querySelector(".message").innerHTML =
			`<p class="error">Email must be gmail</p>`
			emailInput.classList.remove("strong");
			emailInput.classList.add("weak");
		return false;
	} else {
		emailInput.parentElement.querySelector(".message").innerText = "";
			emailInput.classList.remove("weak");
		return true;
	}
}
function checkUser() {
	const userValue = UserName.value.trim()
	if (userValue === "") {
		UserName.parentElement.querySelector(".message").innerHTML =
			`<p class="error">User name is required</p>`

		
			UserName.classList.add("weak");
		return false;
	}else{
		UserName.parentElement.querySelector(".message").innerHTML = "";
		UserName.classList.remove("weak");
		return true;
	}
}


function addNewUser(userObj) {
	fetch("https://borjomi.loremipsum.ge/api/send-message", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userObj),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);


		});
}

emailInput.addEventListener("input", checkEmail);
UserName.addEventListener("input", checkUser);


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const isEmailValid = checkEmail()
	const userisVaild = checkUser()
	if (
		isEmailValid && userisVaild 
	) {
		showModal("#success-modal");
		form.reset();
		
			e.preventDefault();		
			const userObj = {
				email: email.value,
				name: UserName.value,
				website: UserWebsite.value,
				message:UserMessage.value
			};
			addNewUser(userObj)
	}
});
function showModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("active");
	}
}


