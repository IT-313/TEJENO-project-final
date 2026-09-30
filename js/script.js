// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll("nav ul li a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });

    });
}


// =========================
// SERVICE POPUP
// =========================

function showService(title, description) {

    const modal = document.getElementById("serviceModal");
    const serviceTitle = document.getElementById("serviceTitle");
    const serviceDescription =
        document.getElementById("serviceDescription");

    if (modal && serviceTitle && serviceDescription) {

        serviceTitle.textContent = title;
        serviceDescription.textContent = description;

        modal.classList.add("show");
    }
}


function closeService() {

    const modal = document.getElementById("serviceModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


// Close popup when clicking outside
const serviceModal = document.getElementById("serviceModal");

if (serviceModal) {

    serviceModal.addEventListener("click", (event) => {

        if (event.target === serviceModal) {
            closeService();
        }

    });

}