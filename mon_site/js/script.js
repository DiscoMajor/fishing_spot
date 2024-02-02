document.getElementById("showOverlayBtn").addEventListener("click", function () {
    toggleOverlay();
});

document.addEventListener("click", function (event) {
    let overlay = document.getElementById("overlay");
    let overlayBtn = document.getElementById("showOverlayBtn");

    if (event.target !== overlay && event.target !== overlayBtn && !overlay.contains(event.target)) {
        // Clique à l'extérieur de l'overlay ou du bouton
        if (!overlay.classList.contains("hidden")) {
            toggleOverlay();
        }
    }
});

function toggleOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("hidden");
    overlay.style.right = overlay.style.right === "0%" ? "-100%" : "0%";
}
