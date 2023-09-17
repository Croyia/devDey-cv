/*function alertEmail() {
    const inputEmail = document.getElementById("inputEmail");
    const emailValue = inputEmail.value;

    if (emailValue.trim() !== "") {
        alert("Hello, " + emailValue + " email me at andreilee0822@gmail.com or click the email logo!");
    } else {
        alert("Please enter your email first.");
    }
    alert("Message has been sent!");
}*/

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

const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});



const hiddenELements = document.querySelectorAll('.hidden');
hiddenELements.forEach((el) => observer.observe(el))

