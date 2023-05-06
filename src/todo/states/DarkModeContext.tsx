import {createContext, ReactNode, useState} from "react";

type DarkModeContext = {
    darkMode: boolean;
    toggleDarkMode:() => void;
}

export const DarkModeContext = createContext<DarkModeContext>({
    darkMode: false,
    toggleDarkMode: () => {}
})

export function DarkModeProvider({children}:{children: ReactNode}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}