//Called When body loads
function homeSetUp(newSection) {
    ReactDOM.render(React.createElement(CoralButton, { name: 'About Me', id: 'aboutMeButton' }, null), document.getElementById("buttonPlaceHolder"));
    document.getElementById("aboutMeButton").onclick = function () { return goToSection("aboutMe"); };
    $("#homeTitle").css({ 'padding-top': ( (window.innerHeight)/2 - $("#homeTitle").height() + 'px') });
    $("#aboutMeButton").css({ 'margin-left': ('calc(50% - ' + ($("#aboutMeButton").width()) / 2 + "px)") });
    $("#homeUp").height("0");
    $("#homeDown").css({ 'top': '100%' });
    $("#homeDown").height("0");
    $("#homeLeft").width("0");
    $("#homeRight").width("0");
    $("#homeRight").css({ "left": "100%" });
}// end indexSetUp


//Called everytime body is resized
function homeResize() {
    resize();
    $("#homeTitle").css({ 'padding-top': ((window.innerHeight) / 2 - $("#homeTitle").height() + 'px') });
    $("#aboutMeButton").css({ 'margin-left': ('calc(50% - ' + ($("#aboutMeButton").width()) / 2 + "px)") });
}// end indexResize
