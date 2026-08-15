/* =========================================================
   FATEMA TAJ MIM - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


 /* =========================================================
   CONTACT FORM - AJAX SUBMISSION
   ========================================================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const sendButton = document.getElementById("send-message-btn");
    const buttonText = sendButton.querySelector(".button-text");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", async function (event) {

        // VERY IMPORTANT:
        // Stop normal form submission
        event.preventDefault();
        event.stopPropagation();

        sendButton.disabled = true;
        buttonText.textContent = "Sending...";

        formMessage.textContent = "";
        formMessage.className = "form-message";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/tajmim915@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {

                formMessage.textContent =
                    "✓ Message sent successfully! Thank you for contacting me.";

                formMessage.classList.add("success");

                // Clear the form
                contactForm.reset();

            } else {

                throw new Error(
                    data.message || "Message could not be sent."
                );

            }

        } catch (error) {

            console.error("Contact form error:", error);

            formMessage.textContent =
                "✕ Sorry, your message could not be sent. Please try again.";

            formMessage.classList.add("error");

        } finally {

            sendButton.disabled = false;
            buttonText.textContent = "Send Message";

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