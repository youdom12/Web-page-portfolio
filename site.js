// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Global variables
var navButtons = ['Home', 'About Me', 'Resume', 'Contact Me', 'Projects'];
var navbarHidden = false;
var currWebpage = '';
class CoralHoverButton extends React.Component {
    render() {
        return React.createElement('div', { className: 'btn btn-hover-coral', id: this.props.id},this.props.name);
    }// end render
}// end class CoralHoverButton

class DropNavBar extends React.Component {
    render() {
        var buttons = [];  
        if (this.props.buttons != undefined) {
            buttons = this.props.buttons;
        }// end if
        return React.createElement('div', { className: 'drop-nav-bar' }, buttons);
    }// end render
}// end DropNavBar

class CoralButton extends React.Component {
    render() {
        return React.createElement('button', { className: 'btn-coral', id: this.props.id}, this.props.name);
    }// end render
}// end CoralButton


// set up logic for app
function startUp(webpage) {
    currWebpage = webpage;
    loadToolbar(navButtons, document.getElementById("header"));
    navbarClick();
    $("body").css({ left: (window.innerWidth) / 2 - ($("body").width()) / 2 });
}// end startUp

//logic to resize the page
function resize() {
    $("body").width(window.innerWidth);
    $("body").height(window.innerHeight);
    $("body").css({ left: (window.innerWidth) / 2 - ($("body").width()) / 2 });
}// end resize

//logic for when the navbar drop down button is clicked
function navbarClick() {
    if (navbarHidden == false) {
        $(".drop-nav-bar").css({ top: -$(".drop-nav-bar").height() + 'px' });
        //logic to flip arrows in drop button
        $(".navbar-drop-btn").css({ 'border-top-left-radius': "0" });
        $(".navbar-drop-btn").css({ 'border-top-right-radius': "0" });
        $(".navbar-drop-btn").css({ 'border-bottom-left-radius': "50%" });
        $(".navbar-drop-btn").css({ 'border-bottom-right-radius': "50%" });
        $(".navbar-drop-btn").css({ 'transform': "rotate(0deg)" });
        $(".navbar-drop-btn").css({ 'box-shadow': "0px 2px 2px 2px" });
        navbarHidden = true;
    }// end if
    else {
        $(".drop-nav-bar").css({ top: '0' });
        //logic to flip arrows in drop button
        $(".navbar-drop-btn").css({ 'border-top-left-radius': "50%" });
        $(".navbar-drop-btn").css({ 'border-top-right-radius': "50%" });
        $(".navbar-drop-btn").css({ 'border-bottom-left-radius': "0" });
        $(".navbar-drop-btn").css({ 'border-bottom-right-radius': "0" });
        $(".navbar-drop-btn").css({ 'transform': "rotate(180deg)" });
        $(".navbar-drop-btn:after").css({ 'transform': "rotate(180deg)" });
        $(".navbar-drop-btn").css({ 'box-shadow': "0px -2px 2px 2px" });
        navbarHidden = false;
    }// end else
}// end navbarClick

//Loads the drop down navbar and populates it with input buttons[]
//Button logic comes from input logic[]
function loadToolbar(buttons, parent = document.getElementById("root")) {
    var buttonComp = [];
    var index;
    for (index = 0; index < buttons.length; index++) {
        buttonComp.push(React.createElement(CoralHoverButton, { name: buttons[index], id: "temp" + buttons[index] }, null));
    }// end for
    buttonComp.push(React.createElement('div', { className: "btn navbar-drop-btn", onClick: navbarClick}, null));
    ReactDOM.render(React.createElement(DropNavBar, { buttons: buttonComp }, null), parent);
    document.getElementById("tempHome").onclick = function () { return goToSection("home"); };
    document.getElementById("tempAbout Me").onclick = function () { return goToSection("aboutMe"); };
    document.getElementById("tempResume").onclick = function () { return goToSection("resume"); };
    document.getElementById("tempContact Me").onclick = function () { return goToSection("contactMe"); };
    document.getElementById("tempProjects").onclick = function () { return goToSection("projects"); };

}// end loadToolbar

//logic to jump to sections
function goToSection(newSection) {
    if (!navbarHidden) {
        navbarClick();
    }
    var actionURL
    var id = newSection.toString();
    if (currWebpage == 'home') {
        if (newSection == 'home') {
            return;
        }// end if
        else {
            actionURL = '/Home/MainSection'
        }// end else
    }// end if
    else {
        if (newSection != 'home') {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            return;
        }// end if
        else {
            actionURL = '/Home/Index'
        }// end else    
    }// end else
    $.get(actionURL, { section: newSection.toString() }, function (data, status) {
        if (status == 'success') {
            window.location.href = actionURL + "?section=" + newSection;
        }
    });
}// end goToSection
