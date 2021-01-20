function Myfunction() {
		document.getElementById('demo').style.display = 'none';
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	//showSlides函数口诀:三个var 两for中if  两个数组加setTimeout参数。
	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}
//时间
function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('timmer_unit--hour').innerHTML=h;
	document.getElementById('timmer_unit--minute').innerHTML=m;
	document.getElementById('timmer_unit--second').innerHTML=s;
	t=setTimeout(function(){startTime()},1000);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
//轮播图