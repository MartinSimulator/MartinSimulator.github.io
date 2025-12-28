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


    <div class="project-card">
        <h2>Custom Keyboard Case & Plate</h2>
        <p>
            After seeing the 3d model for the open-source blessing that is Kkatano's <a href="https://github.com/kkatano/bakeneko-60" target="_blank">Bakeneko60</a>, I was inspired to create my own keyboard design from scratch. 
            Then I made this keyboard which I call the Hamster60. The general shape is inspired by the Bakeneko60 but it's a two piece design and the plate mounts
            via 4 mounting points with a fairly standard gasket design. This CAD was one of my first gateways into 3D design and is one of my favorite
            projects to date since I actually got it manufactured through a content collaboration with PCBWay. Here is a link to the <a href="https://www.youtube.com/watch?v=8arybYinrRY" target="_blank">first video.</a>
        </p>
        <a href="https://github.com/MartinSimulator/Custom-Mechanical-Keyboard-Case-Plate" target="_blank">Github Repo</a>

        <div class="model-container">
            <model-viewer 
                src="/public/project-files/keeb_case_assembly_updated.glb" 
                alt="A 3D model of the keyboard" 
                auto-rotate 
                camera-controls
                shadow-intensity="1">
            </model-viewer>
        </div>
        <p>
        </p>

        <div class="carousel-container">
            <div class="carousel-slide">
                <img src="/public/project-files/keeb_images/img_0.jpg" alt="keeb img 1" class="active">
                <img src="/public/project-files/keeb_images/img_1.jpg" alt="keeb img 2">
                <img src="/public/project-files/keeb_images/img_2.jpg" alt="keeb img 3">
                <img src="/public/project-files/keeb_images/img_3.jpg" alt="keeb img 4">
                <img src="/public/project-files/keeb_images/img_4.jpg" alt="keeb img 5">
                <img src="/public/project-files/keeb_images/img_5.jpg" alt="keeb img 6">
            </div>
            <button class="prev-btn">&#10094;</button>
            <button class="next-btn">&#10095;</button>
        </div>

    </div>

`;
