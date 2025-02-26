document.addEventListener("DOMContentLoaded", function () {
    // Rolagem suave ao clicar nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animações ao rolar a página
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
                section.classList.add("slide-in");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Ativar animações de seções já visíveis ao carregar a página
});
