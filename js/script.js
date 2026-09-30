// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#212529";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";


// Show button while scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


// Go to top
topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (
            name &&
            email &&
            message &&
            name.value.trim() !== "" &&
            email.value.trim() !== "" &&
            message.value.trim() !== ""
        ) {

            alert("Thank you for contacting us!");

            form.reset();

        } else {

            alert("Please fill in all required fields.");

        }

    });

}


// ===============================
// WEBSITE LOADED
// ===============================

console.log("Website loaded successfully!");