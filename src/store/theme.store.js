/**
 * store to handle theme toggle
 */

import { create } from "zustand";

const defaultTheme = localStorage.getItem("theme") || "dark"; // checks if the user has a theme stored in the localstorage hence display default theme

/** dom manipulation to change html root theme class */
const applyTheme = (theme) => {
    document.documentElement.classList.remove("dark", "cream"); // first erase all themes and switch to default which is te root
    document.documentElement.classList.add(theme)
}


const useThemeStore = create((set) => ({
    // default state of theme
    theme: defaultTheme,

    // save to local storage and set the theme function
    setTheme: (theme) => {
        localStorage.setItem("theme", theme);
        applyTheme(theme);
        set({ theme });
    },

    // toggle between themes
    switchTheme: () => {
        set((state) => {
            const newTheme = state.theme === "dark" ? "cream" : "dark"
            localStorage.setItem("theme", newTheme);
            applyTheme(newTheme);
            return { theme: newTheme }
        })
    }


}));

export default useThemeStore;