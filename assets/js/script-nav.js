var nav = document.getElementById("site-nav");
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {

    if (document.documentElement.scrollTop > 480) {
        nav.style.backgroundColor = "rgb(51, 51, 51)";

    } else {
        nav.style.backgroundColor = "";
    }
}