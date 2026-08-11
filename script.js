
// ========================================
// Portfolio JavaScript
// ========================================


// Wait until the HTML page is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // Profile Image Animation
    // ========================================

    const profileImage = document.querySelector(".image img");

    if (profileImage) {

        profileImage.addEventListener("mouseenter", function () {
            profileImage.style.transform = "scale(1.05)";
        });

        profileImage.addEventListener("mouseleave", function () {
            profileImage.style.transform = "scale(1)";
        });
    }


    // ========================================
    // Button Click Effects
    // ========================================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    // ========================================
    // Navigation Active Link
    // ========================================

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    // ========================================
    // Welcome Message
    // ========================================

    console.log("Welcome to Fatema Taj Mim's Portfolio!");

});

