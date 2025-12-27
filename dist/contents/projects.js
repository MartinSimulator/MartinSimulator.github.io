export const projBody = `
    <div class="project-card">
        <h1>Projects</h1>
        <p>
            Here you can find some of my favorite projects. Check out my <a href="https://github.com/MartinSimulator" target="_blank">Github </a> for files and documentation.
        </p>
    </div>

    <div class="project-card">
        <h2>Custom Putter Head</h2>
        <p>
            Inspired by the Scotty Cameron Newport 2, I decided it would be fun to try and CAD my own putter. Made entirely in Fusion360, this head sports a plumber's neck style hosel
            and supports 0.370" shafts. It has a lie angle of 70° and a loft of 3°. I have never had this putter manufactured so if you want to make it, double check the measurements!
        </p>
        <a href="https://github.com/MartinSimulator/Custom-Putter-Head" target="_blank">Github Repo</a>

        <div class="model-container">
            <model-viewer 
                src="/public/project-files/custom_putter_np2.glb" 
                alt="A 3D model of the putter" 
                auto-rotate 
                camera-controls
                shadow-intensity="1">
            </model-viewer>
        </div>

    </div>

`;
//# sourceMappingURL=projects.js.map