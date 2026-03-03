"use client"

import { useTheme } from "next-themes"


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed z-50 p-3 text-2xl transition-all bg-white border border-gray-300 rounded-full shadow-lg bottom-6 right-6 dark:bg-gray-800 dark:border-gray-600 hover:scale-110"
            aria-label="Change Theme"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    )
}