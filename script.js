const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check if a user previously saved a theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    // Check the current theme
    const currentTheme = rootElement.getAttribute('data-theme');
    
    // Swap it
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    
    // Save the new preference
    localStorage.setItem('theme', newTheme);
});