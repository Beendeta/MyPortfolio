// JavaScript for lightbox functionality
const images = document.querySelectorAll(".image-gallery img");

images.forEach((image) => {
    image.addEventListener("click", openLightbox);
});

const project3Link = document.querySelector("#project3-link");
project3Link.addEventListener("click", openDogYearsPage);

function openLightbox(event) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    document.body.appendChild(lightbox);

    const image = new Image();
    image.src = event.target.src;
    lightbox.appendChild(image);

    lightbox.addEventListener("click", closeLightbox);
}

function closeLightbox(event) {
    if (event.target.className === "lightbox") {
        event.target.remove();
    }
}

function openDogYearsPage() {
    // Open the Dog Years page in a new tab when the Project 3 image is clicked
    window.open("dogyears.html", "_blank");
}
