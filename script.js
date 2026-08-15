/* =========================================================
   FATEMA TAJ MIM - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONTACT FORM - AJAX SUBMISSION
       ===================================================== */

    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-message-btn");
    const buttonText = sendButton
        ? sendButton.querySelector(".button-text")
        : null;

    const formMessage = document.getElementById("form-message");


    if (contactForm && sendButton && buttonText && formMessage) {

        contactForm.addEventListener("submit", async function (event) {

            // IMPORTANT:
            // Stop the normal FormSubmit redirect.
            event.preventDefault();

            // Disable button
            sendButton.disabled = true;
            buttonText.textContent = "Sending...";

            // Clear previous message
            formMessage.textContent = "";
            formMessage.className = "form-message";


            // Collect form data
            const formData = new FormData(contactForm);


            try {

                const response = await fetch(
                    contactForm.action,
                    {
                        method: "POST",

                        headers: {
                            "Accept": "application/json"
                        },

                        body: formData
                    }
                );


                /*
                 * Get response as text first.
                 *
                 * This prevents JSON parsing from crashing
                 * if FormSubmit sends a non-JSON response.
                 */

                const responseText = await response.text();

                console.log("FormSubmit response:", responseText);


                let data = {};

                try {
                    data = JSON.parse(responseText);
                } catch (jsonError) {
                    console.log("Response was not JSON.");
                }


                /* =================================================
                   SUCCESS
                   ================================================= */

                if (
                    response.ok &&
                    (
                        data.success === true ||
                        data.success === "true"
                    )
                ) {

                    formMessage.textContent =
                        "✓ Message sent successfully! Thank you for contacting me.";

                    formMessage.classList.add("success");


                    // Clear form
                    contactForm.reset();


                    /*
                     * IMPORTANT:
                     * There is NO redirect here.
                     *
                     * The visitor stays on your portfolio.
                     */

                }


                /* =================================================
                   ERROR
                   ================================================= */

                else {

                    throw new Error(
                        data.message ||
                        "Unable to send message."
                    );

                }


            } catch (error) {

                console.error(
                    "Form submission error:",
                    error
                );


                formMessage.textContent =
                    "✕ Sorry, your message could not be sent. Please try again.";

                formMessage.classList.add("error");

            }


            /* =================================================
               ENABLE BUTTON AGAIN
               ================================================= */

            sendButton.disabled = false;

            buttonText.textContent = "Send Message";

        });

    }


    /* =====================================================
       PROFILE IMAGE ANIMATION
       ===================================================== */

    const profileImage =
        document.querySelector(".image img");


    if (profileImage) {

        profileImage.addEventListener(
            "mouseenter",
            function () {

                profileImage.style.transform =
                    "scale(1.05)";

            }
        );


        profileImage.addEventListener(
            "mouseleave",
            function () {

                profileImage.style.transform =
                    "scale(1)";

            }
        );

    }


    /* =====================================================
       BUTTON CLICK EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.style.transform =
                    "scale(0.97)";


                setTimeout(function () {

                    button.style.transform = "";

                }, 150);

            }
        );

    });


    /* =====================================================
       NAVIGATION ACTIVE LINK
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveLink() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    /* =====================================================
       SCROLL EVENT
       ===================================================== */

    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    /* =====================================================
       INITIAL ACTIVE LINK
       ===================================================== */

    updateActiveLink();


    /* =====================================================
       WELCOME MESSAGE
       ===================================================== */

    console.log(
        "Welcome to Fatema Taj Mim's Portfolio!"
    );

});