import { useState, useLayoutEffect } from "react"

export const ThemeChanger = () => {
    const [theme, setTheme] = useState("light")

    useLayoutEffect(() => {
        document.body.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }
  return (
    <div>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
