

// Wait until the HTML page is completely loaded
document.addEventListener("DOMContentLoaded", function () {


    // Profile Image Animation

    const profileImage = document.querySelector(".image img");

    if (profileImage) {

        profileImage.addEventListener("mouseenter", function () {
            profileImage.style.transform = "scale(1.05)";
        });

        profileImage.addEventListener("mouseleave", function () {
            profileImage.style.transform = "scale(1)";
        });

    }


    // Button Click Effects

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    // Navigation Active Link

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


    // Detect scrolling
    window.addEventListener("scroll", updateActiveLink);

    // Check when page first loads
    updateActiveLink();



    // Welcome Message
 

    console.log("Welcome to Fatema Taj Mim's Portfolio!");

});