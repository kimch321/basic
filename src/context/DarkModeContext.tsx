import {createContext, useState} from "react";

type DarkModeContextType =  {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: false,
    toggleDarkMode: () => {},
});

export function DarkModeProvider({children}:{children: any}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}