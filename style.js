document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navMenu = document.querySelector('[data-nav]');
    const body = document.body;

    if (!navToggle || !navMenu) {
        return;
    }

    const closeNav = () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        body.classList.remove('nav-open');
    };

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('is-open');
        body.classList.toggle('nav-open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
            closeNav();
        }
    });
});
