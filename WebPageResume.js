function SetUp(){
	HomeSetup();
}

function HomeSetup(){
	var homeBackground = document.getElementById("homeBackground");
	var title = document.querySelector("#homeTitle");
	var paragraph = document.querySelector("#HomeParagraph");
	var up = document.querySelector("#homeUp");
	var down = document.querySelector("#homeDown");
	var left = document.querySelector("#homeLeft");
	var right = document.querySelector("#homeRight");
	var section = document.querySelector("#home");
	var transition = "all 1s";
	var aboutMe = document.querySelector("#homeGetStarted");
	var aboutMeDiv = document.querySelector("#homeGetStartedDiv");
	section.style.height = window.innerHeight.toString() + "px";
	section.style.width = "100%";
	up.style.height = "0";
	up.style.transition =transition;
	
	down.style.top = "100%";
	down.style.height = "0";
	down.style.transition = transition;
	
	left.style.width = "0";
	left.style.transition =transition;
	
	right.style.left = "100%";
	right.style.width = "0"
	right.style.transition =transition;
	
	title.style.width = "90%";
	title.style.top = "calc(50% - " + (title.offsetHeight) + "px)";
	title.style.left = "0";
	title.style.transition = "none";
	
	paragraph.style.top = (title.offsetTop + title.offsetHeight) + "px";
	paragraph.style.width = "100%";
	paragraph.style.left = "0";
	paragraph.style.transition ="none";
	
	aboutMeDiv.style.top = (paragraph.offsetTop + paragraph.offsetHeight).toString() + "px";
	aboutMe.style.left = "calc(50% - " + ((aboutMe.offsetWidth/2).toString() + "px") + ")";
	document.documentElement.scrollTop = document.body.scrollTop = 0;
	document.body.style.overflow = "hidden";
	if (window.innerWidth >= 1080){
		section.style.left = (window.innerWidth - section.offsetWidth)/2 + "px";
	}// end if statement
}

function homeResize(){
	var title = document.querySelector("#homeTitle");
	var paragraph = document.querySelector("#HomeParagraph");
	var section = document.querySelector("#home");
	var aboutMe = document.querySelector("#homeGetStarted");
	var aboutMeDiv = document.querySelector("#homeGetStartedDiv");
	section.style.height = window.innerHeight.toString() + "px";
	title.style.transition = "none";
	paragraph.style.top = (title.offsetTop + title.offsetHeight).toString() + "px";
	paragraph.style.transition = "none";
	aboutMeDiv.style.top = (paragraph.offsetTop + paragraph.offsetHeight).toString() + "px";
	aboutMe.style.left = "calc(50% - " + ((aboutMe.offsetWidth/2).toString() + "px") + ")";
	if (window.innerWidth >= 1080){
		section.style.left = (window.innerWidth - section.offsetWidth)/2 + "px";
	}// end if statement
	else{
		section.style.left = "0";
	}// end else statement
}

function resized(){
	homeResize();
}


function toAboutMe(){
	window.location.href = "portfolio.html";
}
