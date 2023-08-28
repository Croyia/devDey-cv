function alertEmail() {
    const inputEmail = document.getElementById("inputEmail");
    const emailValue = inputEmail.value;

    if (emailValue.trim() !== "") {
        alert("Hello, " + emailValue + " email me at andreilee0822@gmail.com");
    } else {
        alert("Please enter your email first.");
    }
}

function toggleBrightness(){
    const bodyElement=document.body;
    bodyElement.classList.toggle("light-mode-body")

    const toggleIcon = document.querySelector(".floatingToggle");

    const currentImageSrc = toggleIcon.querySelector("img").src;

    if (currentImageSrc.includes("sun.png")) {
        toggleIcon.querySelector("img").src = "images/moon.png";
    } else {
        toggleIcon.querySelector("img").src = "images/sun.png";
    }
    
}