function count(){
	let sec = document.querySelector('.info-image-img')
	let stat = document.querySelectorAll(".nums .num")
	let start = false;


	
	window.onscroll = function () {
		if(window.scrollY >= sec.offsetHeight){
			if (!start){
				stat.forEach((sta) => startCount(sta))
			}
			start = true;
		}
	}
	function startCount(el){
		let max = el.dataset.max;
        let count = setInterval(() => {
            el.textContent++;
            if(el.textContent == max){
                clearInterval(count)
            }
        }, 5000 / stat)
	}
    startCount()
    
}
count()

// last projects

