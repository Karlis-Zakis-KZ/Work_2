console.log("Zakis");


var btn = document.getElementById("duck1");
btn.addEventListener("click", function() {
    console.log("Zakis");
    var x = document.getElementById("tag1");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("Second");
    } else {
        x.style.display = "none";
        console.log("First");
    }
    console.log("Helps");
}, false);
var btn = document.getElementById("duck2");
btn.addEventListener("click", function() {

    var x = document.getElementById("tag2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log("Zakis");
}, false);
var btn = document.getElementById("duck3");
btn.addEventListener("click", function() {
    console.log("Zakis");
    var x = document.getElementById("tag3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}, false);
var btn = document.getElementById("duck4");
btn.addEventListener("click", function() {
    console.log("Zakis");
}, false);
var btn = document.getElementById("duck5");
btn.addEventListener("click", function() {
    console.log("Zakis");
}, false);