
class TextInput extends React.Component {
    render = () => {
        var id = "A" + Date.now();
        var validationRule = '';
        var inputName = '';
        if (this.props.inputName != undefined) {
            inputName = this.props.inputName;
        }// end if
        if (this.props.id != undefined) {
            id = this.props.id;
        }// end if
        if (this.props.rule != undefined) {
            validationRule = this.props.rule;
        }// end if
        return React.createElement("div", {
            id: id,
            className: "txt-input",
            onClick: function () { return txtInputFocus(id); },
        }, React.createElement("input", {
            onBlur: function () { return txtInputFocusLoss(inputName); },
            onInput: function() { return validateInput(inputName, validationRule); } 
        }), React.createElement("button", null, inputName));
    }// end render
}// end TextInput

//logic that hovers placeHolder text above input text box
function txtInputFocus(inputDiv) {
    inputDiv = "#" + inputDiv.toString();
    var placeHolder = $(inputDiv).children("button");
    jQuery(inputDiv).children("input").focus();
    if (placeHolder.css('top') != '0px') {
        return;
    }
    placeHolder.css({ 'fontSize': '75%' });
    placeHolder.css({ 'top': -placeHolder.height() + 'px' });
}// end txtInputFocus

//logic that hovers placeHolder text to normal
function txtInputFocusLoss(input) {
    var placeHolder;
    $(".txt-input").map(function (index, element) {
        if (jQuery(element).children("button").html().toString() == input.toString()) {
            if (jQuery(element).children("input").val().length != 0) {
                return;
            }// end if 
            placeHolder = jQuery(element).children("button");
            placeHolder.css({ 'top': 0 + 'px' });
            placeHolder.css({ 'fontSize': 'initial' });
        }// end if
    });// end .map
}// end txtInputFocus

//logic that validates text input for textinput class
function validateInput(button, validationRule = 'email') {
    var placeHolder = -1;
    var inputElement;
    var inputDiv;
    var defaultColor = 'grey';
    var typingColor = 'white';
    var successColor = 'greenyellow';
    var failColor = 'red';
    $(".txt-input").map(function (index, element) {
        if (jQuery(element).children("button").html().toString() == button.toString()) {
            placeHolder = jQuery(element).children("button");
            inputDiv = $(".txt-input").get(index);
            inputElement = jQuery(element).children("input");
        }// end if
    });// end .map
    if (placeHolder == -1) {
        alert("failed");
        return false;
    }// end if
    else {
        if (inputElement.val().length == 0) {
            placeHolder.css({ 'color': defaultColor });
            inputElement.css({ 'color': defaultColor });
            inputDiv.style.borderColor = defaultColor;
            return false;
        }// end if 
        else {
            inputElement.css({ 'color': typingColor });
            inputDiv.style.borderColor = typingColor;
        }// end else
        if (validationRule == 'email') {

            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (regex.test(inputElement.val().toString())) {
                placeHolder.css({ 'color': successColor });
                inputDiv.style.borderColor = successColor;
                return true;
            }// end if
            else {
                placeHolder.css({ 'color': failColor });
                inputDiv.style.borderColor = failColor;
            }// end else
        }// end if
        if (validationRule == "") {
            placeHolder.css({ 'color': successColor });
            inputDiv.style.borderColor = successColor;
            return true;
        }// end if
    }// end else
    return false;
}// end validateInput 

//Called When body loads
function mainSetUp(newSection) {
    var currentTop = 0;
    $(".section").map(function (index, element) { element.style.top = currentTop + 'px'; currentTop += element.offsetHeight; });
    aboutMeSetUp();
    resumeSetUp();
    if (newSection != undefined) {
        goToSection(newSection);
    }// end if
}// end indexSetUp

//Called everytime body is resized
function mainResize() {
    resize();
    var currentTop = 0;
    $(".section").map(function (index, element) { element.style.top = currentTop + 'px'; currentTop += element.offsetHeight; });
    $("#aboutTitleBar").height($("#aboutMeTitle p").height() + "px");
  //  resumeResize();
}// end indexResize

//logic for aboutMe section set up
function aboutMeSetUp() {
    $("#aboutSoftSkillBody").css({ 'top': $("#aboutSummaryTitle").height() });
    setTimeout(function () {
        aboutMeTitleAnimation();
    }, 300);
}// end aboutMeSetUp

//logic for aboutMe section symbol selection
function aboutSymbolSelect(symbol) {
    var message = jQuery(symbol).children(".softSkillMessage").html();
    var notSelectedColor = "white";
    var selectedColor = "#f64c72";
    if ($("#aboutSoftSkillBody").html() == message) {
        return;
    }// end if 
    $("#aboutSoftSkillBody").html(message);
    var count;
    $(".softSkillSymbol").map(function (index, element) {
        if (element == symbol) {
            element.style.color = selectedColor;
            element.style.top = '5px';
        }// end if
        else {
            element.style.color = notSelectedColor;
            element.style.top = '0';
        }// end else
    });// end .map
}// end aboutSymbolHover

//logic that plays the about me title animation when the page first loads
function aboutMeTitleAnimation() {
    $("#aboutTitleBar").css({ top: $("#aboutMeTitle p").height() + 5 + 'px' });
    setTimeout(function () {
        $("#aboutTitleBar").css({ top: '0' });
        $("#aboutTitleBar").height($("#aboutMeTitle p").height() + "px");
        setTimeout(function () {
            $("#aboutMeTitle p").css({ left: '0' });
            $("#aboutTitleBar").css({ transition: 'none' });
            setTimeout(function () {
                $("#aboutSoftSkills").css({ left: '0' });
                $("#aboutSummary").css({ left: '0' });
                aboutSymbolSelect($(".softSkillSymbol").get(0));
            }, 500);
        }, 300);
    }, 300);
}// end aboutMeTitleAnimation

function resumeSetUp() {
    $("#contactMeContents").height($("#contactMe").height() - $("#contactMeTitle").height() + 'px');
    var inputs = [React.createElement(TextInput, { inputName: 'Email', rule: 'email', id: 'emailInput' }), React.createElement(TextInput, { inputName: 'Message', rule: '', id: 'contactMeMessage' }), React.createElement(CoralButton, { name: 'Submit!', id: 'contactSubmit'})];
    ReactDOM.render(React.createElement('div', null, inputs), document.getElementById("contactMeContents"));
    var marginL = $("#contactSubmit").width();
    $("#contactSubmit").css({ "margin-left": 'calc(50% - ' + marginL + 'px)' });
    document.getElementById("emailInput").addEventListener("animationend", function () { document.getElementById("emailInput").classList.remove("apply-shake"); });
    document.getElementById("contactMeMessage").addEventListener("animationend", function () { document.getElementById("contactMeMessage").classList.remove("apply-shake"); });
    document.getElementById("contactSubmit").onclick = sendMessage;
}// end resumeSetup

function resumeResize() {
    var marginL = $("#contactSubmit").width();
    $("#contactSubmit").css({ "margin-left": 'calc(50% - ' + marginL + 'px)' });   
}// end functin resumeResize

//validation and data sending logic for contact me submit button
function sendMessage() {
    if (!validateInput("Email") || !validateInput("Message", '')) {
        if (!validateInput("Email")) {
            document.getElementById("emailInput").classList.add("apply-shake");
        }// end if
        if (!validateInput("Message", '')) {
            document.getElementById("contactMeMessage").classList.add("apply-shake");
        }// end if
        return;
    }// end if
    window.open("mailto:ronnie9819@gmail.com?subject=Webpage portfolio responce&body=" + $("#contactMeMessage").children("input").val().toString());
}// end sendMessage