// Function to fade-out the preloader icon
setTimeout(function() {
    $('#preloader-icon').fadeToggle();
}, 3000);

function changeAboutMeText() {
    const aboutMeText = ["Tech Enthusiast", "Passionate Data Analyst", "Textile Technologist", "Self-Taught Programmer"];
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