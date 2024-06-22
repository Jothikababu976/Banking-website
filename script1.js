var sidenav = document.querySelector(".side-nav")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNav() {
    sidenav.style.left = "-60%"
}


function updateFeatures() {
    var lists = document.querySelectorAll(".lists")
    var button1 = document.getElementById("btn1")
    for (var i = 0; i < lists.length; i++) {
        lists[i].style.display = "block"
    }
}

function answer() {
    var amnt = parseInt(document.getElementById("amount").value)
    var rate = parseInt(document.getElementById("rate").value)
    var time = parseInt(document.getElementById("time").value)
    var interest = amnt * rate * time / 100
    var total = amnt + interest
    document.getElementById("output_1").innerHTML = amnt
    document.getElementById("output_2").innerHTML = interest
    document.getElementById("output_3").innerHTML = total

}

function update1() {
    document.querySelector(".calculator").style.display = "block"
    document.querySelector(".calci").style.display = "none"
}