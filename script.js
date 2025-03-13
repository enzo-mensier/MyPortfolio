AOS.init();

const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const headerLogo = document.getElementById('header-logo');
    const darkModeClass = 'dark-mode';

    // Vérifie le thème précédent
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add(darkModeClass);
        themeIcon.src = 'images/soleil.png'; // Icône lune pour le mode sombre
        themeIcon.alt = 'Mode sombre';
        headerLogo.src = 'images/logo-white.png'; // Logo blanc pour le mode sombre
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle(darkModeClass);

        if (document.body.classList.contains(darkModeClass)) {
            themeIcon.src = 'images/lune.png'; // Icône lune pour le mode sombre
            themeIcon.alt = 'Mode sombre';
            headerLogo.src = 'images/logo-white.png'; // Logo blanc pour le mode sombre
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/soleil.png'; // Icône soleil pour le mode clair
            themeIcon.alt = 'Mode clair';
            headerLogo.src = 'images/logo-black.png'; // Logo original pour le mode clair
            localStorage.setItem('theme', 'light');
        }
    });