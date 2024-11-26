// Shared data for planets
const planets = [
    { name: "Nova Harmonia", 
        culture: "Nova Harmonia is a utopian planet known for its integration of various species and cultures. The inhabitants are strongly collectivist, placing community welfare above individual preferences. Their society is matriarchal, with elder females traditionally holding leadership roles in both governance and culture. Feminism here is woven into the fabric of life but takes a communal rather than individualistic approach.",
        feminism: "The Nova Harmonians see feminism as a collective responsibility to nurture equality within the community. They value inclusivity but are wary of Earth-based feminist perspectives that they perceive as overly individualistic or confrontational. To them, FIMC’s narratives seem too focused on breaking down hierarchies rather than maintaining the harmony that their society thrives on.",
        conflict: "The Nova Harmonians challenge the FIMC’s universal approach, advocating for a feminism that prioritizes collective well-being and harmony over individual emancipation.", 
        image: "assets/nh.png"},
    { name: "Kryntaris Prime", 
        culture: "A technologically advanced yet hierarchical planet, Kryntaris Prime has long been dominated by a meritocracy where biological and cybernetic enhancements determine status. Gender roles have evolved, but traditional male-dominant hierarchies persist in some regions, while others embrace gender-neutral meritocracies.",
        feminism: "Feminism on Kryntaris Prime revolves around dismantling barriers to access and advancement, emphasizing equal opportunity rather than equal outcome. The feminist movement is fragmented, with some groups fighting for traditional liberation ideals and others integrating technology to erase gender entirely.",
        conflict: "Many Kryntarisians appreciate FIMC’s media influence but find its messages outdated, rooted in biological notions of gender. They argue that feminism must adapt to their post-humanist context, focusing on the ethics of enhancement and access to technology rather than interpersonal dynamics.",
        image: "assets/kp.png"},
    { name: "Thalassica Aequor", 
        culture: "An oceanic planet where amphibious species dominate, Thalassica Aequor’s society values fluidity, with literal and metaphorical ties to their environment. Gender is not seen as binary but as a spectrum tied to phases of life and function within society. Leadership and roles shift depending on the season and ecological needs, leading to a dynamic societal structure.",
        feminism: "On Thalassica Aequor, feminism focuses on maintaining the fluidity of identity and dismantling rigid roles. They value narratives that celebrate adaptability and the interplay between identities, rejecting static definitions of gender or power.",
        conflict: "The Thalassians view FIMC’s Earth-centric feminism as overly rigid, with its insistence on fixed categories like “woman” or “man.” They advocate for media that reflects their lived reality of fluid identities and seasonal power dynamics.", 
        image: "assets/ta.png"},
];

let currentPlanetIndex = localStorage.getItem("currentPlanetIndex");
if (currentPlanetIndex === null) {
    currentPlanetIndex = 0; // Default to first planet if no stored index
}
let nextPlanetIndex = (currentPlanetIndex + 1) % planets.length;

// Populate the sidebar
const planetList = document.getElementById("planet-list");
planets.forEach((planet, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = planet.name;
    listItem.onclick = () => spotlightPlanet(index);
    planetList.appendChild(listItem);
});

// Spotlight a specific planet
function spotlightPlanet(index) {
    currentPlanetIndex = index;
    updatePlanetView();
}

// function spotlightPlanet(index) {
//     const planetElement = document.getElementById("planet");
//     const dimmedPlanet = document.getElementById("dimmed-planet");

//     // Swap z-index to bring the clicked planet to the front
//     dimmedPlanet.style.zIndex = "2";  // Bring clicked planet forward
//     planetElement.style.zIndex = "1"; // Move spotlighted planet back

//     // Add the animation class for transition
//     planetElement.classList.add("animate-planet-transition");

//     // Wait for the animation to finish before switching the planet
//     setTimeout(() => {
//         currentPlanetIndex = index;  // Move to the next planet
//         updatePlanetView();  // Update the view with the new planet

//         // Reset the animation class after the transition
//         planetElement.classList.remove("animate-planet-transition");

//         // Reset z-index after the transition
//         planetElement.style.zIndex = "2"; // Spotlighted planet comes to the front
//         dimmedPlanet.style.zIndex = "1"; // Dimmed planet goes to the back
//     }, 0);  // Adjust the timeout duration to match the animation time
// }
// Spotlight a specific planet
// function spotlightPlanet(index) {
//     // Get the currently active planet element
//     const planetElement = document.getElementById("planet");
//     const dimmedPlanet = document.getElementById("dimmed-planet");

//     // Remove the 'active-planet' class from the previous active planet
//     planetElement.classList.remove("active-planet");
//     dimmedPlanet.classList.remove("active-planet");

//     // Apply the animation class to the clicked planet
//     planetElement.classList.add("active-planet");

//     // Update the current planet index
//     currentPlanetIndex = index;

//     // Update the view with the new planet details
//     updatePlanetView();

//     // Optionally, update z-index or other properties to ensure visibility
//     planetElement.style.zIndex = "10";
//     dimmedPlanet.style.zIndex = "1";

//     // Reset the 'active-planet' class after animation is complete
//     setTimeout(() => {
//         planetElement.classList.remove("active-planet");
//     }, 500);  // Duration should match the CSS transition duration
// }
// Spotlight a specific planet
function spotlightPlanet(index) {
    const planetElement = document.getElementById("planet");
    const dimmedPlanet = document.getElementById("dimmed-planet");

    // Remove the 'active-planet' class from the previous active planet
    planetElement.classList.remove("active-planet");
    dimmedPlanet.classList.remove("active-planet");

    // Move the clicked planet (dimmed one) to the front
    dimmedPlanet.classList.add("active-planet");

    // Update the current planet index
    currentPlanetIndex = index;

    // Update the view with the new planet details
    updatePlanetView();

    // Optional: Apply a timeout to reset the planet to its original size/position after transition
    setTimeout(() => {
        planetElement.classList.add("active-planet");  // Activate the clicked planet
    }, 100);  // Small delay to allow for the transition

    // Reset the 'active-planet' class after animation is complete
    setTimeout(() => {
        planetElement.classList.remove("active-planet"); // Allow for reanimation if clicked again
    }, 1000);  // Duration should match the transition time
}


// Navigate to the planet info page
function goToPlanetInfo() {
    const planet = planets[currentPlanetIndex];
    localStorage.setItem("selectedPlanet", JSON.stringify(planet)); // Store planet data for the info page
    localStorage.setItem("currentPlanetIndex", currentPlanetIndex); // Store planet index for the info page
    window.location.href = "planet-info.html";
}

// Update the planet view
function updatePlanetView() {
    const planetName = document.getElementById("planet-name");
    const planetElement = document.getElementById("planet");
    const dimmedName = document.getElementById("dimmed-name");
    const dimmedPlanet = document.getElementById("dimmed-planet")

    planetName.textContent = planets[currentPlanetIndex].name;
    planetElement.style.backgroundImage = `url(${planets[currentPlanetIndex].image})`;
    
    nextPlanetIndex = (currentPlanetIndex + 1) % planets.length
    dimmedName.textContent = planets[nextPlanetIndex].name;
    dimmedPlanet.style.backgroundImage = `url(${planets[nextPlanetIndex].image})`;
}


// Allow the dimmed planet to be clicked and set as the active planet
function setupDimmedPlanetClick() {
    const dimmedPlanet = document.getElementById("dimmed-planet");

    // Set an event listener to handle clicks on the dimmed planet
    dimmedPlanet.onclick = () => {
        // Update the current planet index to the next planet
        currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
        spotlightPlanet(currentPlanetIndex);  // Re-render the planets
    };
}

// Initialize the planet view and dimmed planet interaction
function initialize() {
    updatePlanetView();
    setupDimmedPlanetClick(); // Set up the click interaction for the dimmed planet
}

// Initialize the view
initialize();