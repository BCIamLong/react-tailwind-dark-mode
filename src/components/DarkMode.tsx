import { useEffect } from "react"
import { useDarkModeContext } from "../context/DarkModeContext"

export default function DarkMode() {


  const { toggleDarkMode, isDarkMode } = useDarkModeContext()
  const handleClick = function () {
    toggleDarkMode()
  }

  useEffect(function () {
    if (!isDarkMode) {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      return
    }

    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }, [isDarkMode])

  return (
    <div>
      <button onClick={handleClick}>DarkMode</button>
    </div>
  )
}
