
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

window.addEventListener('scroll', checkline)

checkline()


function checkline(){
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

window.addEventListener('scroll', checkinfo)

checkinfo()


function checkinfo(){
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

window.addEventListener('scroll', checkbottom)

checkbottom()


function checkbottom(){
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
window.addEventListener('scroll', checkBoxBox)

checkBoxBox()


function checkBoxBox(){
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
function recomslider() {
	const slides = document.querySelectorAll(".recom-change");
	const recombuttons = document.querySelectorAll(".recom-btns");

	let activeIndex = 0;

	function Slides() {
		slides.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("action");
			} else {
				el.classList.remove("action");
			}
		});
		recombuttons.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("action");
			} else {
				el.classList.remove("action");
			}
		});
	}

	function buttons() {
		recombuttons.forEach((e, index) => {
			e.addEventListener("click", () => {
				activeIndex = index;
				Slides()
			});
		});
	}
	Slides()
	buttons()
}
recomslider() 


function RecomTransition(){
	const box= document.querySelectorAll('.recom-wrapper-inner')
window.addEventListener('scroll', checkrecom)

checkrecom()


function checkrecom(){
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
const button = document.querySelectorAll('.projects-btn');
const projects = document.querySelectorAll('.projects-box');

button.forEach(e => {
  e.addEventListener('click', () => {


    const filter = e.getAttribute('data-filter');

    projects.forEach(project => {

      if (project.classList.contains(filter)) {

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

	button.forEach(e => e.classList.remove('action'));
    e.classList.add('action');
    
  });
});


function LastProjectsAnimationTitle(){
	const Title= document.querySelectorAll('.latest-projects-title')
window.addEventListener('scroll', checklast)

checklast()


function checklast(){
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
window.addEventListener('scroll', checkproj)

checkproj()


function checkproj(){
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
window.addEventListener('scroll', checkbtn)

checkbtn()


function checkbtn(){
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
window.addEventListener('scroll', checkbox1)

checkbox1()


function checkbox1(){
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
window.addEventListener('scroll', checkbox2)

checkbox2()


function checkbox2(){
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
	const box= document.querySelectorAll('.rosa-wrapper')
window.addEventListener('scroll', checkrosa)

checkrosa()


function checkrosa(){
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
	UserMessage= document.querySelector("#message"),
	ModalText= document.querySelector(".modal-text")



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
function checkweb() {
	const webValue = UserWebsite.value.trim()
	if (webValue === "") {
		UserWebsite.parentElement.querySelector(".message").innerHTML =
			`<p class="error">Website is required</p>`

		
			UserWebsite.classList.add("weak");
		return false;
	}else{
		UserWebsite.parentElement.querySelector(".message").innerHTML = "";
		UserWebsite.classList.remove("weak");
		return true;
	}
}
function checkmassage() {
	const massageValue = UserMessage.value.trim()
	if (massageValue === "") {
		UserMessage.parentElement.querySelector(".message").innerHTML =
			`<p class="error">Massage is required</p>`

		
			UserMessage.classList.add("weak");
		return false;
	}else{
		UserMessage.parentElement.querySelector(".message").innerHTML = "";
		UserMessage.classList.remove("weak");
		return true;
	}
}


function addNewUser(userObj) {
	try{
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
	}catch (error) {
		ModalText.innerHTML = "Server error :( please try again later"
		form.reset();
		showModal("#success-modal");
	}
}

emailInput.addEventListener("input", checkEmail);
UserName.addEventListener("input", checkUser);
UserWebsite.addEventListener("input", checkweb);
UserMessage.addEventListener("input", checkmassage);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const isEmailValid = checkEmail()
	const userisVaild = checkUser()
	const webVaild = checkweb()
	const isMassagevaild = checkmassage()
	if (
		isEmailValid && userisVaild && webVaild && isMassagevaild
	) {
		function addNewUser(userObj) {
			try{
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
			}catch (error) {
				ModalText.innerText = "Server error :( please try again later"
			}
		}
		
			e.preventDefault();		
			const userObj = {
				email: email.value,
				name: UserName.value,
				website: UserWebsite.value,
				message:UserMessage.value
			};
			addNewUser(userObj)
			
			form.reset();
			showModal("#success-modal");
		
		
	}
});
function showModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("active");
	}
}

function FromTransition(){
	const box= document.querySelectorAll('.contact-wrapper')
window.addEventListener('scroll', checkcontact)

checkcontact()


function checkcontact(){
	const triggerBottom = window.innerHeight ;

	box.forEach((box) =>{
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom){
			box.classList.add('action')
		
		}
		
	})
}
} FromTransition()


