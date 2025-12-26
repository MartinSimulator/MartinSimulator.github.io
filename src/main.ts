// Page Structure
interface PageContent {
    title: string;
    body: string;
}

// Importing page body modules
import { homeBody } from "./contents/home.js";

// Dictionary to hold page data
const pages: Record<string, PageContent> = {
    home: {
        title: "Welcome!",
        body: homeBody
    },
    cats: {
        title: "Meet Coco and Louis",
        body: "<p>Louis is a goofball and Coco is tiny<p/>"
    },
    contact: {
        title: "Contact",
        body: "<p>Email: martin.simulator@gmail.com <br> Github: https://github.com/MartinSimulator</p>"
    }
};

// Function to render content
function renderPage(pageName: string): void {
    const app = document.getElementById('app');
    
    // Check if app exists AND if the page exists in our dictionary
    if (app && pages[pageName]) {
        const content = pages[pageName];
        app.innerHTML = `
            <h1>${content.title}</h1>
            <div>${content.body}</div>
        `;
    // Otherwise outputs page not found
    } else if (app) {
        app.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
}

// Add Event Listeners to Buttons
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons inside the nav
    const buttons = document.querySelectorAll('nav button');

    // Renders page when button is clicked
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const target = e.target as HTMLButtonElement;
            const pageKey = target.getAttribute('data-page');
            
            if (pageKey) {
                renderPage(pageKey);
            }
        });
    });

    // Load the home page when the logo is clicked
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            renderPage('home');
        })
    }

    // Load 'home' by default
    renderPage('home');
});