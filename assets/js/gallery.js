// =======================
// Referencias al DOM
// =======================

const galleryModal = document.querySelector("#gallery-modal");
const galleryContent = document.querySelector(".gallery-content");
const galleryImage = document.querySelector(".gallery-image");
const galleryClose = document.querySelector(".gallery-close");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
const galleryTriggers = document.querySelectorAll("[data-gallery]");


// Galerias disponibles 

const galleries = {

    cym: [
        "assets/img/projects/cym/cym-landing-hero.png",
        "assets/img/projects/cym/02.png",
        "assets/img/projects/cym/03.png",
        "assets/img/projects/cym/04.png"
    ]
};


// Estado de la galeria 

let currentGallery = [];
let currentIndex = 0;

// Abrir galería 

galleryTriggers.forEach(trigger => {

    trigger.addEventListener("click", () => {
        const galleryName = trigger.dataset.gallery;

        currentGallery = galleries[galleryName];

        currentIndex = 0;

        showImage();

        galleryModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});


// Cerrar galeria 

function  closeGallery() {
    galleryModal.classList.remove("active");

    document.body.style.overflow = "";
}

// Cerrar con la X
galleryClose.addEventListener("click", closeGallery);


// Cerrar haciendo clic fuera del contenido
galleryModal.addEventListener("click", closeGallery);


// Evitar que se cierre al hacer clic dentro de la galería
galleryContent.addEventListener("click", (event) => {

    event.stopPropagation();

});


// Cerrar con Escape
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeGallery();

    }

});

// Mostrar imagen 

function showImage() {
    galleryImage.src = currentGallery[currentIndex];
}

// Imagen siguiente 
galleryNext.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    }
    showImage();
});

// Imagen anterior
galleryPrev.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    }
    showImage();
});