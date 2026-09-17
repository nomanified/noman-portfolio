// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nameInput = document.getElementById("name");

        const name = nameInput ? nameInput.value.trim() : "";

        if (name) {

            alert(
                `Thank you ${name}! Your message has been received.`
            );

        } else {

            alert("Thank you! Your message has been received.");

        }

        contactForm.reset();

    });

}


// =========================
// PARKWISE UI/UX IMAGE PREVIEW
// =========================

const uiImages = document.querySelectorAll(".ui-card img");

uiImages.forEach(image => {

    image.style.cursor = "pointer";

    image.addEventListener("click", function() {

        const overlay = document.createElement("div");

        overlay.className = "image-preview-overlay";

        overlay.innerHTML = `
            <div class="image-preview-content">

                <button class="close-preview">
                    ×
                </button>

                <img
                    src="${this.src}"
                    alt="${this.alt}"
                >

            </div>
        `;

        document.body.appendChild(overlay);


        // Close button

        const closeButton =
            overlay.querySelector(".close-preview");

        closeButton.addEventListener("click", () => {

            overlay.remove();

        });


        // Click outside image to close

        overlay.addEventListener("click", (event) => {

            if (event.target === overlay) {

                overlay.remove();

            }

        });


        // ESC key to close

        document.addEventListener(
            "keydown",
            function closeWithEscape(event) {

                if (event.key === "Escape") {

                    overlay.remove();

                    document.removeEventListener(
                        "keydown",
                        closeWithEscape
                    );

                }

            }
        );

    });

});