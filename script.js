/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function initScrollToTop() {
    var scrollToTop = document.querySelector("#scrollToTop");

    if (!scrollToTop) return;

    scrollToTop.addEventListener("click", ev => {
        ev.preventDefault();

        document.documentElement.scrollTo(0, 0);
    });
}

initScrollToTop();

function toggleDirection() {
    /*
    let body = document.body;
    if (body.getAttribute("dir") === "rtl") {
        body.setAttribute("dir", "ltr");
    } else {
        body.setAttribute("dir", "rtl");
    }
    */

    let body = document.body;
    let newDir = body.getAttribute("dir") === "rtl" ? "ltr" : "rtl";

    // Set the new direction
    body.setAttribute("dir", newDir);
    localStorage.setItem("direction", newDir); // Save preference

    // Toggle visibility of elements
    document.querySelectorAll(".swedish").forEach(el => {
        el.style.display = newDir === "ltr" ? "block" : "none";
    });

    document.querySelectorAll(".hebrew").forEach(el => {
        el.style.display = newDir === "rtl" ? "block" : "none";
    });
}

// Apply saved direction and visibility on page load
document.addEventListener("DOMContentLoaded", function () {
    let savedDir = localStorage.getItem("direction") || "ltr"; // Default to LTR
    document.body.setAttribute("dir", savedDir);

    // Apply the correct visibility based on stored direction
    document.querySelectorAll(".swedish").forEach(el => {
        el.style.display = savedDir === "ltr" ? "block" : "none";
    });

    document.querySelectorAll(".hebrew").forEach(el => {
        el.style.display = savedDir === "rtl" ? "block" : "none";
    });
});