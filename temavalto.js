document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // a tema beállítása a helyi tárolóból
    document.body.setAttribute('data-theme', currentTheme);
    updateButtonText();
    
    // eseménykezelő a gombhoz amelyik megváltoztatja a témát minden kattintásra
    themeToggle.addEventListener('click', () => {
        const themes = ['light', 'dark', 'cherry'];
        const currentIndex = themes.indexOf(document.body.getAttribute('data-theme') || 'light');
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        
        document.body.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        updateButtonText();
    });
    
    // a gomb szövegének a frissítése a téma alapján
    function updateButtonText() {
        const theme = document.body.getAttribute('data-theme') || 'light';
        const icons = { light: '🌙', dark: '🌸', cherry: '☀️' };
        const texts = { light: 'Sötét téma', dark: 'Cseresznyvirág téma', cherry: 'Világos téma' };
        themeToggle.textContent = `${icons[theme]} ${texts[theme]}`;
    }
});