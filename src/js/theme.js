let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dn');

const enabledDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

const disabledDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}

disabledDarkMode();

darkModeToggle.addEventListener('change', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enabledDarkMode();
    } else {
        disabledDarkMode();
    }
})