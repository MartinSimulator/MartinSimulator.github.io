// Importing page body modules
import { homeBody } from "./contents/home.js";
import { projBody } from "./contents/projects.js";
import { catsBody } from "./contents/cats.js";
import { contactBody } from "./contents/contact.js";
// Dictionary to hold page data
const pages = {
    home: {
        title: "Welcome!",
        body: homeBody,
    },
    projects: {
        title: "",
        body: projBody,
    },
    keyboards: {
        title: "Keyboards",
        body: "<p>I started building keyboards in 2022. Here are some of my favorites</p>",
    },
    cats: {
        title: "",
        body: catsBody,
    },
    contact: {
        title: "Contact",
        body: contactBody,
    },
};
// Function to render content
function renderPage(pageName) {
    const key = pageName.replace("#", "") || "home";
    const app = document.getElementById("app");
    // Check if app exists
    if (!app)
        return;
    if (key === "cats" || key === "projects") {
        app.classList.add("transparent-mode");
    }
    else {
        app.classList.remove("transparent-mode");
    }
    // Check if the page exists in our dictionary
    if (pages[key]) {
        const content = pages[key];
        const titleHTML = content.title ? `<h1>${content.title}</h1>` : "";
        app.innerHTML = `
            ${titleHTML}
            <div>${content.body}</div>
        `;
        // Otherwise outputs page not found
    }
    else {
        app.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
    initializeCarousels();
}
// function to handle page navigation and url update
function navigate(pageKey) {
    window.location.hash = pageKey;
}
// Add Event Listeners to Buttons
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons inside the nav
    const buttons = document.querySelectorAll("nav button");
    // Renders page when button is clicked
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = e.target;
            const pageKey = target.getAttribute("data-page");
            if (pageKey) {
                navigate(pageKey);
            }
        });
    });
    // checks for change in hash to update page shown
    window.addEventListener("hashchange", () => {
        renderPage(window.location.hash);
    });
    // Load the home page when the logo is clicked
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", () => {
            navigate("home");
        });
    }
    if (window.location.hash) {
        renderPage(window.location.hash);
    }
    else {
        renderPage("home");
    }
});
function initializeCarousels() {
    // 1. Find all carousels on the currently rendered page
    const carousels = document.querySelectorAll('.carousel-container');
    // 2. Loop through each one
    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll('.carousel-slide img');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        // Ensure elements exist before using them
        if (!prevBtn || !nextBtn || images.length === 0)
            return;
        let currentIndex = 0;
        function showImage(index) {
            var _a;
            // Remove active class from images INSIDE THIS CAROUSEL ONLY
            images.forEach((img) => img.classList.remove('active'));
            // Add active class to current image
            (_a = images[index]) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        }
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length)
                currentIndex = 0;
            showImage(currentIndex);
        });
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0)
                currentIndex = images.length - 1;
            showImage(currentIndex);
        });
    });
}
//# sourceMappingURL=main.js.map