// Find the light switch on the page
const lightSwitch = document.getElementById("lightSwitch");

// Turn the museum lights on/off
if (lightSwitch) {
    lightSwitch.addEventListener("click", function () {
        document.body.classList.toggle("lights-on");
    });
}


// Find the scrapbook cover
const scrapbookCover = document.getElementById("scrapbookCover");

// Open the scrapbook when the cover is clicked
if (scrapbookCover) {
    scrapbookCover.addEventListener("click", function () {
        document.body.style.transition = "opacity 0.7s ease";
        document.body.style.opacity = "0";

        setTimeout(function () {
            window.location.href = "scrapbook.html";
        }, 700);
    });
}


// Find the envelope
const envelope = document.getElementById("envelope");

// Fade into the letter when the envelope is clicked
if (envelope) {
    envelope.addEventListener("click", function () {
        document.body.style.transition = "opacity 0.7s ease";
        document.body.style.opacity = "0";

        setTimeout(function () {
            window.location.href = "letter.html";
        }, 700);
    });
}
