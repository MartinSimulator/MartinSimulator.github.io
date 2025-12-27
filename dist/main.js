// Importing page body modules
import { homeBody } from "./contents/home.js";
import { catsBody } from "./contents/cats.js";
import { contactBody } from "./contents/contact.js";
// Dictionary to hold page data
const pages = {
    home: {
        title: "Welcome!",
        body: homeBody,
    },
    projects: {
        title: "Here is a portfolio of my projects",
        body: "<p>projects will go here when I get to them hehe</p>",
    },
    keyboards: {
        title: "Keyboards",
        body: "<p>I started building keyboards in 2022. Here are some of my favorites</p>",
    },
    cats: {
        title: "Meet Coco and Louis",
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
    // Check if app exists AND if the page exists in our dictionary
    if (app && pages[key]) {
        const content = pages[key];
        app.innerHTML = `
            <h1>${content.title}</h1>
            <div>${content.body}</div>
        `;
        // Otherwise outputs page not found
    }
    else if (app) {
        app.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
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
//# sourceMappingURL=main.js.map