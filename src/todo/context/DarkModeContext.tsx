import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type DarkModeContext = {
    darkMode: boolean;
    toggleDarkMode:() => void;
}

const DarkModeContext = createContext<DarkModeContext>({
    darkMode: false,
    toggleDarkMode: () => {}
})

export function DarkModeProvider({children}:{children: ReactNode}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode)
    };

    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
            setDarkMode(isDark);
            updateDarkMode(isDark);
    },[]);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode: boolean) {
    if(darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
    }
}

export const useDarkMode = () => useContext(DarkModeContext)