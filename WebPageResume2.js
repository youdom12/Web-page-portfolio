var	currentSection = "";
var aboutCurrentSymbol = "";
var toolbarDropStatus = true;

function dropMenuClick(){
	if(toolbarDropStatus == true){
		var offset = 4;
		document.getElementById("Toolbar").style.top = offset - (document.getElementById("Toolbar").offsetHeight) + "px";
		document.getElementById("ToolbarButton").style.transform = "rotate(0deg)";
		document.getElementById("ToolbarButton").style.borderTopColor = "transparent";
		document.getElementById("ToolbarButton").style.borderBottomColor = "silver";
		document.getElementById("ToolbarButton").style.borderTopRightRadius = "0";
		document.getElementById("ToolbarButton").style.borderTopLeftRadius = "0";
		document.getElementById("ToolbarButton").style.borderBottomLeftRadius = "50%";
		document.getElementById("ToolbarButton").style.borderBottomRightRadius = "50%";
		document.getElementById("ToolbarButton").style.boxShadow = "inset 0 -1px 3px 1px;";
		toolbarDropStatus = false;
	}// end if statement
	else{
		document.getElementById("Toolbar").style.top = "0px";
		document.getElementById("ToolbarButton").style.transform = "rotate(180deg)";
		document.getElementById("ToolbarButton").style.borderTopColor = "black";
		document.getElementById("ToolbarButton").style.borderBottomColor = "transparent";
		document.getElementById("ToolbarButton").style.borderTopRightRadius = "50%";
		document.getElementById("ToolbarButton").style.borderTopLeftRadius = "50%";
		document.getElementById("ToolbarButton").style.borderBottomLeftRadius = "0";
		document.getElementById("ToolbarButton").style.borderBottomRightRadius = "0";
		document.getElementById("ToolbarButton").style.boxShadow = "inset 0 1px 3px 1px;";
		toolbarDropStatus = true;
	}
} // end functin dropMenuClick

//all set up logic for each section is called here
function SetUp(){
	aboutMeSetUp();
	projectSetUp();
	resumeSetUp();
	contactMeSetUp();
	var allSections = document.getElementsByClassName("section");
	var count;
	var totalHeight = 0;
	document.getElementById("sectionSpacing2").style.height = document.getElementById("sectionSpacing1").style.height = window.innerHeight/4 + "px";
	document.getElementById("sectionSpacing1").style.width = document.getElementById("sectionSpacing2").style.width = window.innerWidth + "px";

	for (count = 0; count < allSections.length; count++){
		allSections[count].style.top = totalHeight + "px";
		totalHeight = totalHeight + allSections[count].offsetHeight;
		if (allSections[count].offsetWidth >= 1080){
			allSections[count].style.left = (window.innerWidth - allSections[count].offsetWidth)/2 + "px";
		}// end if statement
	}
	dropMenuClick();
}

//all logic for resizing each section after the window size changes
function resized(){
	aboutResize();
	resumeResize();
	contactResize();
	projectsResize();
	allSections = document.getElementsByClassName("section");
	var count;
	var totalHeight = 0;
	document.getElementById("sectionSpacing2").style.height = document.getElementById("sectionSpacing1").style.height = window.innerHeight/4 + "px";
	document.getElementById("sectionSpacing1").style.width = document.getElementById("sectionSpacing2").style.width = window.innerWidth + "px";
	for (count = 0; count < allSections.length; count++){
		allSections[count].style.top = totalHeight + "px";
		totalHeight = totalHeight + allSections[count].offsetHeight;
		if (allSections[count].offsetWidth >= 1080){
			allSections[count].style.left = (window.innerWidth - allSections[count].offsetWidth)/2 + "px";
		}// end if statement
		else{
			allSections[count].style.left = "0";
		}// end else statement
	}// end for loop
}

//Logic for selecting new symbol in about section
function aboutSymbolSelect(newSymbol){
	
	if(newSymbol == aboutCurrentSymbol){
		return;
	}
	
	var topOffset = 20;
	
	if(aboutCurrentSymbol == ""){
		
	}
	else if(aboutCurrentSymbol == "detail"){
		var symbolText = document.querySelector("#detailText");
		var symbol = document.querySelector("#detail");
		symbolText.style.color = "white";
		symbolText.style.borderBottom = "none";
		symbol.style.top = "0";	
		symbol.style.transition = "top .2s";
	}
	else if(aboutCurrentSymbol == "collaboration"){
		var symbolText = document.querySelector("#collaborationText");
		var symbol = document.querySelector("#collaboration");
		symbolText.style.color = "white";
		symbolText.style.borderBottom = "none";
		symbol.style.top = "0";
		symbol.style.transition = "top .2s";
	}
	else{
		var symbolText = document.querySelector("#problemSolverText");
		var symbol = document.querySelector("#problemSolver");
		symbolText.style.color = "white";
		symbolText.style.borderBottom = "none";
		symbol.style.top = "0";
		symbol.style.transition = "top .2s";
	}
	if(newSymbol == "detail"){
		var symbolText = document.getElementById("detailText");
		var symbol = document.querySelector("#detail");
		var message = document.querySelector("#aboutSymbolMessage");
		document.getElementById("detail").style.background = "url('magnifying glass.png')";
		document.getElementById("detail").style.backgroundPosition = "center";
		document.getElementById("detail").style.backgroundSize = "50% 100%";
		document.getElementById("detail").style.backgroundRepeat = "no-repeat";
		symbolText.style.borderBottom = "solid";
		symbolText.style.borderColor = "#f64c72";
		document.getElementById("detailText").style.color = "#f64c72";
		symbol.style.top = symbol.offsetTop + topOffset + "px";
		message.textContent = "My strong work ethic and resilience allow me to thoroughly complete any task. Going above and beyond is my standard.";
		message.style.color = "white";
		aboutCurrentSymbol = newSymbol;
		symbol.style.transition = "top .2s";
	}
	else if(newSymbol == "collaboration"){
		var symbolText = document.getElementById("collaborationText");
		var symbol = document.querySelector("#collaboration");
		var message = document.querySelector("#aboutSymbolMessage");
		document.getElementById("collaboration").style.background = "url('mentor symbol.png')";
		document.getElementById("collaboration").style.backgroundPosition = "center";
		document.getElementById("collaboration").style.backgroundSize = "50% 100%";
		document.getElementById("collaboration").style.backgroundRepeat = "no-repeat";
		symbolText.style.borderBottom = "solid";
		document.getElementById("collaborationText").style.borderColor = "#f64c72";
		document.getElementById("collaborationText").style.color = "#f64c72";
		symbol.style.top = symbol.offsetTop + topOffset + "px";
		message.textContent = "A previous employer noted my ability as a mentor and invited me on a project to aid underclassmen. I am a people person that fits well in any team composition.";
		message.style.color = "white";
		aboutCurrentSymbol = newSymbol;
		symbol.style.transition = "top .2s";
	}
	else {
		var symbolText = document.getElementById("problemSolverText");
		var symbol = document.querySelector("#problemSolver");
		var message = document.querySelector("#aboutSymbolMessage");
		document.getElementById("problemSolver").style.background= "url('problem solver.png')";
		document.getElementById("problemSolver").style.backgroundPosition = "center";
		document.getElementById("problemSolver").style.backgroundSize = "50% 100%";
		document.getElementById("problemSolver").style.backgroundRepeat = "no-repeat";
		symbolText.style.borderBottom = "solid";
		symbolText.style.borderColor = "#f64c72";
		document.getElementById("problemSolverText").style.color = "#f64c72";
		symbol.style.top = symbol.offsetTop + topOffset + "px";
		message.textContent = "My years of programming and tutoring have honed my problem-solving skills. I can adapt to any software related issue, no matter the algorithm or programming language.";
		message.style.color = "white";
		aboutCurrentSymbol = newSymbol;
		symbol.style.transition = "top .2s";
	}
}

//The following 2 function make the logic for symbol interactiveness when hovering on symbols in the about section
function aboutSymbolHover(symbol){
	if (symbol == aboutCurrentSymbol){
		return;
	}
	var color = "#E1E1E1";
	if(symbol == "detail"){
		document.getElementById("detailText").style.color = color;
		document.getElementById("detail").style.background = "url('magnifying glass contrast.png')";
		document.getElementById("detail").style.backgroundPosition = "center";
		document.getElementById("detail").style.backgroundSize = "50% 100%";
		document.getElementById("detail").style.backgroundRepeat = "no-repeat";
	}
	else if(symbol == "collaboration"){
		document.getElementById("collaborationText").style.color = color;
		document.getElementById("collaboration").style.background = "url('mentor symbol contrast.png')";
		document.getElementById("collaboration").style.backgroundPosition = "center";
		document.getElementById("collaboration").style.backgroundSize = "50% 100%";
		document.getElementById("collaboration").style.backgroundRepeat = "no-repeat";
	}
	else {
		document.getElementById("problemSolverText").style.color = color;
		document.getElementById("problemSolver").style.background = "url('problem solver contrast.png')";
		document.getElementById("problemSolver").style.backgroundPosition = "center";
		document.getElementById("problemSolver").style.backgroundSize = "50% 100%";
		document.getElementById("problemSolver").style.backgroundRepeat = "no-repeat";
	}
}

function aboutSymbolMouseOut(symbol){
	if (symbol == aboutCurrentSymbol){
		return;
	}
	var color = "white";
	if(symbol == "detail"){
		document.getElementById("detailText").style.color = color;
		document.getElementById("detail").style.background = "url('magnifying glass.png')";
		document.getElementById("detail").style.backgroundPosition = "center";
		document.getElementById("detail").style.backgroundSize = "50% 100%";
		document.getElementById("detail").style.backgroundRepeat = "no-repeat";
	}
	else if(symbol == "collaboration"){
		document.getElementById("collaborationText").style.color = color;
		document.getElementById("collaboration").style.background = "url('mentor symbol.png')";
		document.getElementById("collaboration").style.backgroundPosition = "center";
		document.getElementById("collaboration").style.backgroundSize = "50% 100%";
		document.getElementById("collaboration").style.backgroundRepeat = "no-repeat";
	}
	else {
		document.getElementById("problemSolverText").style.color = color;
		document.getElementById("problemSolver").style.background= "url('problem solver.png')";
		document.getElementById("problemSolver").style.backgroundPosition = "center";
		document.getElementById("problemSolver").style.backgroundSize = "50% 100%";
		document.getElementById("problemSolver").style.backgroundRepeat = "no-repeat";
	}
}

function toAboutMe(){

}

function aboutMeSetUp(){
	var section = document.querySelector("#aboutMe");
	var locator = document.querySelector("#aboutMePlaceHolder");
	var title = document.querySelector("#aboutTitle");
	var titlePlaceHolder = document.querySelector("#aboutTitlePlaceHolder");
	var paragraph = document.querySelector("#aboutParagraph");
	var aboutSymbols = document.querySelector("#aboutSymbols");
	var paragraphTitle = document.querySelector("#aboutParagraphTitle");
	var message = document.querySelector("#aboutSymbolMessage");
	var titlePadding = 10;
	var contentBorderWidth = 5;
	var paragraphOffset = 25;
	var paragraphExtraPadding = 25;
	var symbols = document.getElementsByClassName("symbolTitle");
	var count;
	var messageTopOffset = 50;
	var aboutImage = document.getElementById("aboutImage");
	title.style.height = titlePlaceHolder.offsetHeight +"px"; 
	section.style.height = window.innerHeight.toString() + "px";
	var tallest = 0;
	for (count = 0; count < symbols.length; count++) {
		if (symbols[count].offsetHeight > tallest){
			tallest = symbols[count].offsetHeight;
		}//end if statement
	}// end for loop 
	paragraphTitle.style.paddingBottom = paragraphTitle.style.paddingTop = "calc(7.5% - " + (paragraphTitle.offsetHeight/2)  + "px)";
	var temp = document.getElementsByClassName("aboutParagraphPadding");
	for(count = 0; count < temp.length; count++){
		temp[count].style.height = (tallest/2) + "px";
	}
	aboutSymbols.style.height = (paragraph.offsetHeight - (2 * contentBorderWidth))+ "px";

	message.style.top = "calc(15% + " + (tallest + messageTopOffset) +"px)";
	if (document.getElementById("aboutImageDiv").offsetTop + document.getElementById("aboutImageDiv").offsetHeight + paragraph.offsetHeight >= section.offsetHeight){
		document.getElementById("aboutImageDiv").style.height = section.offsetHeight - document.getElementById("aboutImageDiv").offsetTop - paragraph.offsetHeight - titlePadding + "px";
	}// end if statement
	else{
		document.getElementById("aboutImageDiv").style.height = "50vh";
	}// end else if statement
	aboutSymbols.style.top = paragraph.style.top = document.getElementById("aboutImageDiv").offsetHeight + document.getElementById("aboutImageDiv").offsetTop + "px";
	// Logic that runs page animations
	setTimeout(function(){
		playTitleAnimation();
		setTimeout(function(){
			document.querySelector("#aboutParagraph").style.left = "0";
			document.querySelector("#aboutParagraph").style.transition = "left .3s ease-out";
			document.querySelector("#aboutSymbols").style.left = "55%";
			document.querySelector("#aboutSymbols").style.transition = "left .3s ease-out";
			document.querySelector("#aboutParagraphTitle").style.overflow = "visible";
			document.querySelector("#aboutTitle").style.height = "auto";
			setTimeout(function(){
				aboutSymbolSelect("problemSolver");
			}, 300);
		}, 900);
	}, 0);
}// end function aboutMeSetUp

function aboutResize(){
	var paragraph = document.querySelector("#aboutParagraph");
	var aboutSymbols = document.querySelector("#aboutSymbols");
	var aboutTitleBar = document.querySelector("#aboutTitleBar");
	var titlePlaceHolder = document.querySelector("#aboutTitlePlaceHolder");
	var contentBorderWidth = 5;
	var paragraphOffset = 25;
	var extraOffset = 15;
	var bottomOffset = 15;
	var section = document.getElementById("aboutMe");
	var titlePlaceHolder = document.querySelector("#aboutTitlePlaceHolder");
	aboutSymbols.style.height = (paragraph.offsetHeight - (2 * contentBorderWidth))+ "px";
	var contentHeight = document.getElementById("aboutImageDiv").offsetTop + document.getElementById("aboutImageDiv").offsetHeight + paragraph.offsetHeight;
	if (contentHeight != section.offsetHeight){
		document.getElementById("aboutImageDiv").style.height = section.offsetHeight - document.getElementById("aboutImageDiv").offsetTop - paragraph.offsetHeight - bottomOffset + "px";
	}// end if statement
	titlePlaceHolder.style.left = "calc(40% + " + (aboutTitleBar.offsetWidth + extraOffset) + "px)";
	titlePlaceHolder.style.width = document.getElementById("aboutMe").offsetWidth - titlePlaceHolder.offsetLeft - document.getElementById("aboutImage").offsetLeft + "px";
	titlePlaceHolder.style.top = (document.getElementById("aboutImageDiv").offsetHeight)/2 - (titlePlaceHolder.offsetHeight)/2 + "px";
	aboutTitleBar.style.top = titlePlaceHolder.offsetTop + "px" ;
	aboutTitleBar.style.height = titlePlaceHolder.offsetHeight + "px";
	aboutTitleBar.style.left = (titlePlaceHolder.offsetLeft - aboutTitleBar.offsetWidth - extraOffset) + "px";
	aboutSymbols.offsetTop = paragraph.offsetTop = document.getElementById("aboutImage").offsetHeight + "px";
	aboutSymbols.style.top = paragraph.style.top = "calc(5% + " + document.getElementById("aboutImage").offsetHeight + "px)";
}
//The following 4 functions work together to make the about title animation.
function playTitleAnimation(){
	titleAnimP1();													
}

function titleAnimP1(){
	var extraOffset = 15;
	var title = document.querySelector("#aboutTitle");
	var aboutTitleBar = document.querySelector("#aboutTitleBar");
	var titlePlaceHolder = document.querySelector("#aboutTitlePlaceHolder");
	titlePlaceHolder.style.top = (document.getElementById("aboutImageDiv").offsetHeight)/2 - (titlePlaceHolder.offsetHeight)/2 + "px";
	titlePlaceHolder.style.left = "calc(40% + " + (aboutTitleBar.offsetWidth + extraOffset) + "px)";
	titlePlaceHolder.style.width = document.getElementById("aboutMe").offsetWidth - titlePlaceHolder.offsetLeft - document.getElementById("aboutImage").offsetLeft + "px";
	titlePlaceHolder.style.height = title.offsetHeight + "px";
	aboutTitleBar.style.top = (titlePlaceHolder.offsetTop + titlePlaceHolder.offsetHeight) + "px";
	aboutTitleBar.style.left = (titlePlaceHolder.offsetLeft - aboutTitleBar.offsetWidth - extraOffset) + "px";
	aboutTitleBar.style.backgroundColor = "#f64c72";
	aboutTitleBar.style.color = "#f64c72";	
	setTimeout(function(){
		titleAnimP2();
	}, 300);
	
}

function titleAnimP2(){
	var aboutTitleBar = document.querySelector("#aboutTitleBar");
	var title = document.querySelector("#aboutTitle");
	var titlePlaceHolder = document.querySelector("#aboutTitlePlaceHolder");
	aboutTitleBar.style.height = title.offsetHeight + "px";
	aboutTitleBar.style.top = titlePlaceHolder.offsetTop  + "px";
	//aboutTitleBar.style.top = 0;
	setTimeout(function(){
		titleAnimP3();
	}, 300);
}

function titleAnimP3(){
	var title = document.querySelector("#aboutTitle");
	title.style.left = "0";
	title.style.height = "100%";
	title.style.top = "0" ;
}

function projectSetUp(){
	var section = document.getElementById("projects");
	var titleBottomMargin = 5;
	section.style.height = window.innerHeight.toString() + "px";
	document.getElementById("projectsTitle").style.top = document.getElementById("thisWebsite").offsetTop - document.getElementById("projectsTitle").offsetHeight - titleBottomMargin + "px";
	document.getElementById("projectsTitle").style.left = "calc(50% - " + (document.getElementById("projectsTitle").offsetWidth)/2 + "px";
	FizzBuzz();
}

function FizzBuzz(){
	var output = document.getElementById("FIZZBUZZ");
	var count;
	var max = 100;
	var newLine = "<br / >";
	for(count = 1; count <= max; count++){
		if (count == 1){
			output.innerHTML += count;
			continue;
		}
		output.innerHTML += newLine;
		if (count%3 == 0){
			output.innerHTML += "Fizz";
		}
		if (count%5 == 0){
			output.innerHTML += "Buzz";
		}
		if (count%5 != 0 && count %3 != 0){
			output.innerHTML += count;
		}
	}// end for loop
}

function resumeSetUp(){
	var section = document.getElementById("resume");
	var sectionTitle = document.getElementById("resumeTitle");
	var sectionDownload = document.getElementById("resumeDownload");
	document.getElementById("resumePic").style.marginLeft = "calc(35% - " + document.getElementById("resumePic").offsetWidth/2 + "px)";
	document.getElementById("resumePic").style.marginTop = "calc(50% - " + document.getElementById("resumePic").offsetHeight/2 + "px)";
	section.style.height = window.innerHeight.toString() + "px";
	document.getElementById("resumeDownload").style.top = document.getElementById("resumePic").offsetTop - document.getElementById("resumeDownload").offsetHeight + "px";
	sectionTitle.style.top = document.getElementById("resumePic").offsetTop - sectionTitle.offsetHeight + "px";
	sectionTitle.style.left = "calc(35% - " + sectionTitle.offsetWidth/2 +"px)";
	document.querySelector("#resume a").style.left = document.getElementById("resumeDownload").style.left = sectionTitle.offsetLeft + sectionTitle.offsetWidth + "px";
	document.querySelector("#resume a").style.height = document.getElementById("resumeDownload").style.height = sectionTitle.offsetHeight/2 + "px";
	document.querySelector("#resume a").style.top = document.getElementById("resumeDownload").style.top = sectionTitle.offsetTop + document.getElementById("resumeDownload").offsetHeight/2 + "px";
	document.querySelector("#resume a").style.width = document.getElementById("resumeDownload").offsetWidth + "px";
}

function resumeResize(){
	var section = document.getElementById("resume");
	var sectionTitle = document.getElementById("resumeTitle");
	var sectionDownload = document.getElementById("resumeDownload");
	document.getElementById("resumePic").style.marginLeft = "calc(35% - " + document.getElementById("resumePic").offsetWidth/2 + "px)";
	document.getElementById("resumePic").style.marginTop = "calc(50% - " + document.getElementById("resumePic").offsetHeight/2 + "px)";
	section.style.height = window.innerHeight.toString() + "px";
	document.getElementById("resumeDownload").style.top = document.getElementById("resumePic").offsetTop - document.getElementById("resumeDownload").offsetHeight + "px";
	sectionTitle.style.top = document.getElementById("resumePic").offsetTop - sectionTitle.offsetHeight + "px";
	sectionTitle.style.left = "calc(35% - " + sectionTitle.offsetWidth/2 +"px)";
	document.querySelector("#resume a").style.left = document.getElementById("resumeDownload").style.left = sectionTitle.offsetLeft + sectionTitle.offsetWidth + "px";
	document.querySelector("#resume a").style.height = document.getElementById("resumeDownload").style.height = sectionTitle.offsetHeight/2 + "px";
	document.querySelector("#resume a").style.top = document.getElementById("resumeDownload").style.top = sectionTitle.offsetTop + document.getElementById("resumeDownload").offsetHeight/2 + "px";
	document.querySelector("#resume a").style.width = document.getElementById("resumeDownload").offsetWidth + "px";
}

function contactMeSetUp(){
	var section = document.getElementById("contactMe");
	var sendButton = document.getElementById("contactSend");
	var sendButtonSecurity = document.getElementById("sendSecurityCheck");
	section.style.left = document.getElementById("resumePic").offsetLeft + document.getElementById("resumePic").offsetWidth + 7+ "px";
	section.style.top = document.getElementById("resumePic").offsetTop + "px";
	sendButtonSecurity.style.width = sendButton.offsetWidth + "px";
	sendButtonSecurity.style.height = "50%";
	document.getElementById("contactContent").style.height = document.getElementById("contactErrorMessage").style.height = section.offsetHeight - document.getElementById("contactMeTitle").offsetHeight + "px";
	document.getElementById("errorMessage").style.top = (section.offsetHeight)/2 - (document.getElementById("errorMessage").offsetHeight)/2+ "px";
	document.getElementById("linksDiv").style.top = section.offsetTop + section.offsetHeight + "px";
	document.getElementById("linksDiv").style.left = section.offsetLeft + "px";
}

function contactResize(){
	var section = document.getElementById("contactMe");
	var sendButton = document.getElementById("contactSend");
	var sendButtonSecurity = document.getElementById("sendSecurityCheck");
	section.style.left = document.getElementById("resumePic").offsetLeft + document.getElementById("resumePic").offsetWidth + 7+ "px";
	section.style.top = document.getElementById("resumePic").offsetTop + "px";
	sendButtonSecurity.style.width = sendButton.offsetWidth + "px";
	sendButtonSecurity.style.height = "50%";
	document.getElementById("contactContent").style.height = document.getElementById("contactErrorMessage").style.height = section.offsetHeight - document.getElementById("contactMeTitle").offsetHeight + "px";
	document.getElementById("errorMessage").style.top = (section.offsetHeight)/2 - (document.getElementById("errorMessage").offsetHeight)/2+ "px";
	document.getElementById("linksDiv").style.left = section.offsetLeft + "px";
	document.getElementById("linksDiv").style.top = section.offsetTop + section.offsetHeight + "px";
}

//The following 4 functions run the logic for the contact email system
function inputFocused(elementFocused){
	if(elementFocused == "email"){
		if (document.getElementById("emailInput").value.length > 0){
			return;
		}
		var label = document.getElementById("email");
		document.getElementById("emailInput").focus();
		label.style.top = label.offsetTop - label.offsetHeight + "px";
		label.style.fontSize = "70%";
		label.style.color = "#f64c72";
		label.style.transition = "all .25s";
	}
	if(elementFocused == "message"){
		if (document.getElementById("messageDiv").value.length > 0){
			return;
		}
		var label = document.getElementById("inputMessage");
		document.getElementById("messageDiv").focus();
		label.style.top = label.offsetTop - label.offsetHeight + "px";
		label.style.fontSize = "70%";
		label.style.color = "#f64c72";
		label.style.transition = "all .25s";
	}
}

function inputFocusLoss(elementFocused){
	if(elementFocused == "email"){
		if(document.getElementById("emailInput").value.length == 0){
			var label = document.getElementById("email");
			label.style.top = "50%";
			label.style.fontSize = "100%";
			label.style.color = "grey";
			label.style.transition = "all .25s";
		}
	}
	if(elementFocused == "message"){
		if (document.getElementById("messageDiv").value.length == 0){
			var label = document.getElementById("inputMessage");
			label.style.top = "50%";
			label.style.fontSize = "100%";
			label.style.color = "grey";
			label.style.transition = "all .25s";
		}
	}
}

function contactSend(){
	if (document.getElementById("messageDiv").value.length == 0 || document.getElementById("emailInput").value.length == 0 ){
		return;
	}
	window.open("mailto:ronnie9819@gmail.com?subject=Webpage portfolio responce&body=" + document.getElementById("messageDiv").value.toString());
}

function inputChange(){
	var isValid = false;
	if(document.getElementById("emailInput").value.length == 0){
		var sendButton = document.getElementById("contactSend");
		var sendButtonSecurity = document.getElementById("sendSecurityCheck");
		sendButtonSecurity.style.width = sendButton.offsetWidth + "px";
		sendButtonSecurity.style.height = "50%";
		document.getElementById("contactSend").style.opacity = ".6";
	}// end if statement
	else{
		var count;
		for (count = 0; count < document.getElementById("emailInput").value.length; count++){
			if (document.getElementById("emailInput").value[count] == "@"){
				isValid = true;
			}// end if statement
		}// end for loop
	}// end else statement	
	if (document.getElementById("messageDiv").value.length == 0){
		var label = document.getElementById("inputMessage");
		label.style.color = "grey";
		var sendButton = document.getElementById("contactSend");
		var sendButtonSecurity = document.getElementById("sendSecurityCheck");
		sendButtonSecurity.style.width = sendButton.offsetWidth + "px";
		sendButtonSecurity.style.height = "50%";
		document.getElementById("contactSend").style.opacity = ".6";
	}
	else {
		document.getElementById("inputMessage").style.color = "#32CD32";
	}
	if (isValid){
		document.getElementById("email").style.color = "#32CD32";
	}
	else if (document.getElementById("emailInput").value.length != 0){
		document.getElementById("email").style.color = "red";
	}
	if (document.getElementById("emailInput").value.length == 0 || document.getElementById("messageDiv").value.length == 0){
		document.getElementById("errorMessage").style.color = "transparent";
		return;
	}//end if statement
	if (isValid == false){
		var sendButton = document.getElementById("contactSend");
		var sendButtonSecurity = document.getElementById("sendSecurityCheck");
		sendButtonSecurity.style.top = sendButton.offsetTop + "px";
		sendButtonSecurity.style.left = sendButton.offsetLeft + "px";
		sendButtonSecurity.style.width = sendButton.offsetWidth + "px";
		document.getElementById("contactSend").style.opacity = ".6";
		sendButtonSecurity.style.height = "50%";
		document.getElementById("errorMessage").style.color = "red";
		document.getElementById("email").style.color = "red";
	}
	else{document.getElementById("errorMessage").style.color = "transparent";
		var sendButtonSecurity = document.getElementById("sendSecurityCheck");
		sendButtonSecurity.style.width = "0px";
		sendButtonSecurity.style.height = "0px";
		document.getElementById("contactSend").style.opacity = "1";
	}
}

function projectsResize(){
	var titleBottomMargin = 5;
	document.getElementById("projectsTitle").style.top = document.getElementById("thisWebsite").offsetTop - document.getElementById("projectsTitle").offsetHeight - titleBottomMargin + "px";
	document.getElementById("projectsTitle").style.left = "calc(50% - " + (document.getElementById("projectsTitle").offsetWidth)/2 + "px";
}

function goToLinkedIn(){
	window.open("https://www.linkedin.com/in/ronnie-clark-848a11109/", '_blank');
}

function goToGitHub(){
	window.open("https://github.com/youdom12", '_blank');
}

function goToSection(section){
	if (section == "aboutMe"){
		document.getElementById("aboutMe").scrollIntoView({behavior: 'smooth'});
	}// end if statement
	if (section == "resume"){
		document.getElementById("resume").scrollIntoView({behavior: 'smooth'});
	}// end if statement
	if (section == "contactMe"){
		document.getElementById("contactMe").scrollIntoView({behavior: 'smooth'});
	}// end if statement
	if (section == "projects"){
		document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
	}// end if statement
	if (section == "home"){
		window.location.href = "index.html";
	}// end if statement
}