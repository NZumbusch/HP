var kspTeam = [
    {
        position: "Präsidentin",
        name: "Sinem Arik",
        imageUrl: "./assets/img/team/Sinem-Arik-30.4.22.jpg"
    },
    {
        position: "Vizepräsident",
        name: "David Zademack",
        imageUrl: "./assets/img/team/David-30.4.22-Fahrrad.jpg"
    },
    {
        position: "Social Media Beauftragte",
        name: "Suela Hoxai",
        imageUrl: "./assets/img/team/Suela-30.4.22.jpg"
    },
    {
        position: "Mitglied",
        name: "Benedict Bartels",
        imageUrl: "./assets/img/team/Benedict_Bartels_Social_Media-400x457.jpeg"
    },
    {
        position: "Mitglied",
        name: "Marlene Schuh",
        imageUrl: "./assets/img/team/Marlene-Schuh-1.5.22.jpg"
    },
    {
        position: "Mitglied",
        name: "Arina Grishina",
        imageUrl: "./assets/img/team/Arina-Grishina-1.5.22.jpg"
    }
];
var currentEntry = 0;

kspTeam.forEach((member, index) => {
    document.querySelector(".page-4-left-gallery").innerHTML += `
        <div class="page-4-left-gallery-entry page-4-left-gallery-entry-${index}" style="display: none;">
            <div class="page-4-left-gallery-entry-person">
                <img class="page-4-left-gallery-entry-person-img" src="${member.imageUrl}">
                <p class="page-4-left-gallery-entry-person-name">${member.name}</p>
            </div>
        
            <div class="page-4-left-gallery-entry-control">
                <img class="page-4-left-gallery-entry-control-left" src="./assets/img/Arrow-Right.svg" onclick="currentEntry--; renderCurrentEntry();"></img>

                <p class="page-4-left-gallery-entry-control-position">${member.position}</p>

                <img class="page-4-left-gallery-entry-control-right" src="./assets/img/Arrow-Right.svg" onclick="currentEntry++; renderCurrentEntry();"></img>
            </div>
        </div>
    `;
})
function renderCurrentEntry () {
    if (currentEntry < 0) {
        currentEntry = kspTeam.length - 1;
    } else if (currentEntry >= kspTeam.length) {
        currentEntry = 0;
    }
    document.querySelectorAll(".page-4-left-gallery-entry").forEach((element, index) => {element.style.display = "none";})
    document.querySelector(".page-4-left-gallery-entry-" + currentEntry).style.display = "";
}

renderCurrentEntry();








/*
// Spielereien
var rotateToggle = false;
document.querySelector(".page-0-img").addEventListener("click", (e) => {
    if (!rotateToggle) {
        e.target.style.transform = "rotate(-180deg) translateY(-80px)";
    } else {
        e.target.style.transform = "rotate(180deg) translateY(-80px)";
    }
    rotateToggle = !rotateToggle;
})
*/

var lakeObserverTriggeredBefore = false;
var lakeObserverOptions = {
    root: document.querySelector('#app'),
    rootMargin: '0px',
    threshold: 0.6
}
var lakeObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
        if (!lakeObserverTriggeredBefore) {
            lakeObserverTriggeredBefore = true;
    
            document.querySelector(".page-1-img").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    }
}, lakeObserverOptions);
lakeObserver.observe(document.querySelector(".page-1-img"));




var colorModeContainer = document.querySelector(".colormode");
// Light
colorModeContainer.children[0].addEventListener("click", (e) => {
    document.querySelectorAll(".colormode-switch").forEach((element, index) => {
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    document.querySelector(".colormode-display").classList.remove("dark");
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--color', 'black');
    document.documentElement.style.setProperty('--filter', "invert(0%)");
    document.documentElement.style.setProperty('--headingcolor', "#4D4D4D");
})
// Dark
colorModeContainer.children[1].addEventListener("click", (e) => {
    document.querySelectorAll(".colormode-switch").forEach((element, index) => {
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    document.querySelector(".colormode-display").classList.add("dark");
    document.documentElement.style.setProperty('--background-color', 'gray');
    document.documentElement.style.setProperty('--color', 'white');
    document.documentElement.style.setProperty('--headingcolor', "black");
})