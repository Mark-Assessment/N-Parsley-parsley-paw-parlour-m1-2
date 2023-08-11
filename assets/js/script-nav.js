var nav = document.getElementById("site-nav");
var landingImage = document.getElementsByClassName("landing-image")[0];
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    var opacity = 0.8 * (document.documentElement.scrollTop / 480);
    nav.style.backgroundColor = "rgb(51, 51, 51," + opacity + " )";

    var blur = 10 * (document.documentElement.scrollTop / 600);
    landingImage.style.filter = "blur(" + blur + "px)";
}

var dateFrom = document.getElementById("date-from");
var dateTo = document.getElementById("date-to");

dateTo.addEventListener("change", (event) => {
    if (event.target.value < dateFrom.value) {
        document.getElementById("warning-to").style.display = "block";
        dateTo.value = "";
        dateTo.style.border = "solid 1px red"
    }
    else {
        document.getElementById("warning-to").style.display = "none";
        dateTo.style.border = "none"
    }
});

dateFrom.addEventListener("change", (event) => {
    if (dateTo.value) {
        if (event.target.value > dateTo.value) {
            document.getElementById("warning-from").style.display = "block";
            dateFrom.value = "";
            dateFrom.style.border = "solid 1px red"
        }
        else {
            document.getElementById("warning-from").style.display = "none";
            dateFrom.style.border = "none"
        }
    }

});