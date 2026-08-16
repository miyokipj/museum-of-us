// Find the light switch on the page
const lightSwitch = document.getElementById("lightSwitch");

// Listen for a click
lightSwitch.addEventListener("click", function () {
    
    // Turn the museum lights on
    document.body.classList.toggle("lights-on");

});

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
