// Find the light switch on the page
const lightSwitch = document.getElementById("lightSwitch");

// Listen for a click
lightSwitch.addEventListener("click", function () {
    
    // Turn the museum lights on
    document.body.classList.toggle("lights-on");

});
