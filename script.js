// Find the light switch on the page
const lightSwitch = document.getElementById("lightSwitch");

// Listen for a click
lightSwitch.addEventListener("click", function () {
    
    // Turn the museum lights on
    document.body.classList.toggle("lights-on");

});

// Find the scrapbook cover
const scrapbookCover = document.getElementById("scrapbookCover");

// Open the scrapbook when the cover is clicked
scrapbookCover.addEventListener("click", function () {
    window.location.href = "scrapbook.html";
});
