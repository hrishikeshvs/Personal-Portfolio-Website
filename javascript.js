// JavaScript functionality to highlight the navigation link of the current section

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeNavOnScroll() {
        let scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove('active');
                });
                navLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeNavOnScroll);
});
