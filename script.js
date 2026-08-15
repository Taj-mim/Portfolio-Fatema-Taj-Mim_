/* =========================================================
   FATEMA TAJ MIM - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       CONTACT FORM - AJAX SUBMISSION
       ========================================================= */

    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-message-btn");
    const formMessage = document.getElementById("form-message");

    if (contactForm && sendButton && formMessage) {

        const buttonText = sendButton.querySelector(".button-text");

        contactForm.addEventListener("submit", async function (event) {

            // Prevent the browser from leaving the portfolio
            event.preventDefault();

            // Disable button while sending
            sendButton.disabled = true;

            if (buttonText) {
                buttonText.textContent = "Sending...";
            }

            // Clear previous message
            formMessage.textContent = "";
            formMessage.className = "form-message";

            // Collect form data
            const formData = new FormData(contactForm);

            try {

                const response = await fetch(contactForm.action, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData
                });

                const data = await response.json();

                if (response.ok && data.success) {

                    // Success message
                    formMessage.textContent =
                        "✓ Message sent successfully! Thank you for contacting me.";

                    formMessage.classList.add("success");

                    // Clear form
                    contactForm.reset();

                } else {

                    throw new Error(
                        data.message || "Something went wrong."
                    );

                }

            } catch (error) {

                console.error("Form submission error:", error);

                // Error message
                formMessage.textContent =
                    "✕ Sorry, your message could not be sent. Please try again.";

                formMessage.classList.add("error");

            } finally {

                // Enable button again
                sendButton.disabled = false;

                if (buttonText) {
                    buttonText.textContent = "Send Message";
                }

            }

        });

    }


    /* =========================================================
       PROFILE IMAGE ANIMATION
       ========================================================= */

    const profileImage = document.querySelector(".image img");

    if (profileImage) {

        profileImage.addEventListener("mouseenter", function () {

            profileImage.style.transform = "scale(1.05)";

        });

        profileImage.addEventListener("mouseleave", function () {

            profileImage.style.transform = "scale(1)";

        });

    }


    /* =========================================================
       BUTTON CLICK EFFECTS
       ========================================================= */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {

                button.style.transform = "";

            }, 150);

        });

    });


    /* =========================================================
       NAVIGATION ACTIVE LINK
       ========================================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection = section.id;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    // Update active navigation while scrolling
    window.addEventListener("scroll", updateActiveLink);

    // Update immediately when page loads
    updateActiveLink();


    /* =========================================================
       WELCOME MESSAGE
       ========================================================= */

    console.log("Welcome to Fatema Taj Mim's Portfolio!");

});