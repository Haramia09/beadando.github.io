document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            if (link.hash !== "") {
                event.preventDefault();
                const hash = link.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
