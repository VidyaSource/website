import {createContext} from "react";

export type DarkModeContextType = {
    darkMode: boolean
    setDarkMode: (m: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextType>(null)
