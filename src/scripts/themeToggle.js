const themeIcons = {
    light: 'light_mode',
    dark: 'dark_mode',
    system: 'desktop_windows'
}
const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || "system";
    let systemTheme =  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    toggleTheme(currentTheme, false);

    themeToggleButton.addEventListener('click', () => {
        // Obtener el tema actual y cambiar al siguiente
        const nextTheme = getNextTheme(localStorage.getItem('theme') || 'system');

        toggleTheme(nextTheme, true);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        systemTheme = event.matches ? "dark" : "light";
        if (currentTheme == "system") {
            toggleTheme("system", true)
        }
    });



    function getNextTheme(currentTheme) {
        // Secuencia de temas: oscuro → claro → sistema → oscuro
        const themeOrder = ['dark', 'light', 'system'];
        const currentIndex = themeOrder.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        return themeOrder[nextIndex];
    }

    function toggleTheme(currentTheme, animate) {
        if (animate) addThemeTransition();

        switch (currentTheme) {
            case "dark":
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                themeToggleButton.textContent = themeIcons.dark;
                break;
        
            case "light":
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                themeToggleButton.textContent = themeIcons.light;
                break;
                
            case "system":
                if (systemTheme === "light") {
                    document.documentElement.classList.remove("dark");
                    document.documentElement.classList.add("light");
                } else {
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                }

                themeToggleButton.textContent = themeIcons.system;
                break;
        }

        localStorage.setItem('theme', currentTheme);
    }

    function addThemeTransition() {
        document.body.classList.add('theme-transition');
        
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300); 
    }