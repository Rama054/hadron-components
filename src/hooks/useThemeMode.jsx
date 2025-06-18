import { useState } from "react";

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
}


const useThemeMode = () => {
    const initialTheme = getInitialTheme();
    
    const [theme, setTheme] = useState(initialTheme);
    const bodyElement = document.body;
    bodyElement.setAttribute('data-theme', initialTheme);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        window.localStorage.setItem('color-theme', theme === 'light' ? 'dark' : 'light');
        document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    }

    return { theme, toggleTheme };
}

export default useThemeMode;