document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    alert("Welcome to My Product Gallery!");

    // View Products button
    const viewProducts = document.querySelector('a[href="gallery.html"]');

    viewProducts.addEventListener("click", function () {
        console.log("Opening Product Gallery...");
    });

    // Our Services button
    const services = document.querySelector('a[href="services.html"]');

    services.addEventListener("click", function () {
        console.log("Opening Services...");
    });

});