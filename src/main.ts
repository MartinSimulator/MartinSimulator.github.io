// Define the structure of our page content
interface PageContent {
    title: string;
    body: string;
}

// A simple dictionary to hold our page data
const pages: Record<string, PageContent> = {
    home: {
        title: "Welcome Home",
        body: "<p>This is the home page. We are building this with <strong>pure TypeScript</strong> and no frameworks. It is lightweight and fast.</p>"
    },
    about: {
        title: "About Us",
        body: "<p>We are developers who love understanding how things work under the hood. No React, no Vue, just code.</p>"
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
    
    // Check if app exists and if the page exists in our dictionary
    if (app && pages[pageName]) {
        const content = pages[pageName];
        app.innerHTML = `
            <h1>${content.title}</h1>
            <div>${content.body}</div>
        `;
    } else if (app) {
        app.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
}

// Add Event Listeners to Buttons
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons inside the nav
    const buttons = document.querySelectorAll('nav button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const target = e.target as HTMLButtonElement;
            const pageKey = target.getAttribute('data-page');
            
            if (pageKey) {
                renderPage(pageKey);
            }
        });
    });

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            renderPage('home');
        })
    }

    // Load 'home' by default
    renderPage('home');
});