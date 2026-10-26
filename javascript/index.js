/*****************************menu toggle for side-navbar ******************/
const sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-50%"
}

 /*****************************smooth scrolling effect*************************/
        const revealElements = document.querySelectorAll(
            '#home-header, #service, #brands, #footer, #collections, #contact-form'
        );

        const scroll0bserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px 50px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal');
            scroll0bserver.observe(el);
        });

