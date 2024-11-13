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

        // Send form data to the server using fetch
        fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ name: name, email: email })
        })
        .then(response => response.text())
        .then(data => {
            formStatus.textContent = data; // Display server response
        })
        .catch(error => {
            formStatus.textContent = "There was an error submitting the form.";
            formStatus.style.color = "red";
            console.error("Error:", error);
        });
    }
});
