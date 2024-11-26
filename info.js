// Info Page Functionality
if (window.location.pathname.includes("planet-info.html")) {
    const planet = JSON.parse(localStorage.getItem("selectedPlanet"));

    // Check if planet data exists
    if (planet) {
        document.getElementById("planet-info-title").textContent = planet.name;
        document.getElementById("planet-info-culture").textContent = planet.culture;
        document.getElementById("planet-info-feminism").textContent = planet.feminism;
        document.getElementById("planet-info-conflict").textContent = planet.conflict;
        document.getElementById("planet-info-image").src = planet.image;
    }
}


// Navigate back to the space page and restore the planet spotlight
function goBackToSpace() {
    const currentPlanetIndex = localStorage.getItem("currentPlanetIndex");
    if (currentPlanetIndex !== null) {
        localStorage.setItem("returnToPlanetIndex", currentPlanetIndex); // Store the current index
    }
    window.location.href = "index.html"; // Navigate back to the space view
}