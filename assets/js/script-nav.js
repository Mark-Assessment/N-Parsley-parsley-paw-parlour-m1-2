var nav = document.getElementById("site-nav");
var landingImage = document.getElementsByClassName("landing-image")[0];
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {

    var opacity = 0.8 * (document.documentElement.scrollTop / 480);
    nav.style.backgroundColor = "rgb(51, 51, 51," + opacity + " )";

    var blur = 10 * (document.documentElement.scrollTop / 600);
    landingImage.style.filter = "blur(" + blur + "px)";
}