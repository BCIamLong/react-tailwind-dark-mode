import { ReactNode, createContext, useContext, useState } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextProps | null>(null)




export const useDarkModeContext = function () {
  const context = useContext(DarkModeContext)!

  if (context === undefined) throw new Error("The dark mode context is being used outside its provider")

  return context
}

export default function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = function () {
    setIsDarkMode(!isDarkMode)
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}