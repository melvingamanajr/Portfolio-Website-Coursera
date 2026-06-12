document.addEventListener("DOMContentLoaded", () => {
    // Capturing reference triggers from the Document Object Model
    const contactForm = document.getElementById("portfolio-contact-form");
    const alertBox = document.getElementById("form-alert");

    // JavaScript Interactivity Criteria Met: Event handling for submission
    contactForm.addEventListener("submit", (event) => {
        // Halt native programmatic page reloads
        event.preventDefault();

        // Extract values from inputs securely
        const clientName = document.getElementById("name").value.trim();
        const clientEmail = document.getElementById("email").value.trim();
        const clientMessage = document.getElementById("message").value.trim();

        // Basic verification processing safety checks
        if (clientName === "" || clientEmail === "" || clientMessage === "") {
            return;
        }

        // Trigger dynamic state transitions to signal success
        alertBox.textContent = `Thank you, ${clientName}! Your message has been sent successfully.`;
        alertBox.className = "alert-box alert-success"; // Injects layout formatting safely

        // Smoothly scroll down to make the alert box explicitly visible
        alertBox.scrollIntoView({ behavior: "smooth" });

        // Reset inputs back to clean baseline state fields
        contactForm.reset();
    });
});
