// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let formStatus = document.getElementById("formStatus");

    if (name === "" || email === "") {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
    } else {
        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = "green";
    }
});
