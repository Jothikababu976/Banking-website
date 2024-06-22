var menu = document.getElementById("menu")
var interface = document.getElementById("interface")

function shownow() {
    menu.style.left = "0"
    interface.style.width = "cal(92% - 270px)"
    interface.style.marginLeft = "270px"
}

function closenow() {
    menu.style.left = "-270px"
}