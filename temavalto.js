// theme.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');
    
    // Check for saved theme preference
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    updateButtonText();
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateButtonText();
    });
    
    function updateButtonText() {
        themeToggle.textContent = document.body.getAttribute('data-theme') === 'dark' 
            ? '☀️ Nappali mód' 
            : '🌙 Éjszakai mód';
    }
});