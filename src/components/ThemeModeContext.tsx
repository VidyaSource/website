import {createContext} from "react";

export type ThemeContextType = {
    darkMode: boolean
    setDarkMode: (m: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType>(null)
