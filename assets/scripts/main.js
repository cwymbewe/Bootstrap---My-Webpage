// Function to fade-out the preloader icon
const loaderTimer = () => setTimeout(function() {
    $('#preloader-icon').fadeToggle();
},3000);

// Calling the function when the page is fully loaded.
const loaded = document.querySelectorAll('.preloader-block');
window.addEventListener('load',() => {
    loaderTimer(); 
    document.body.classList.add('loaded');
});


function changeAboutMeText() {
    const aboutMeText = ["a Tech Enthusiast", " a Passionate Data Analyst", "a Textile Technologist", "Self-Taught Programmer", "Charles Mbewe"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector(".about-me");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeText[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        // } else if (!isDeleting && charIndex === currentText.length) {
        //     isDeleting = true;
        //     setTimeout(erase, pauseTime / 2);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        // } else {
        //     textIndex++;
        //     if (textIndex >= aboutMeText.length) textIndex = 0;
        //     charIndex = 0;
        //     isDeleting = false;
        //     aboutMeElement.textContent = "";
        //     setTimeout(type, pauseTime);
        } else {
            isDeleting = !isDeleting;
            if(!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeText.length;
            }
            setTimeout(type, pauseTime);
        }

    };
    // Start the text animation on page load 
    type();
}


changeAboutMeText();