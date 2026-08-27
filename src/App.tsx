import { useTheme } from "./components/theme-provider"
import { Navbar } from "./components/navbar"
import { getRoutes } from "./routes"
import { BrowserRouter, Routes, Route } from "react-router"

export function App() {
  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
    setTheme(nextTheme)
  }
  const routes = getRoutes(theme)
  return (
    <BrowserRouter>
      <div className="flex min-h-svh justify-center px-4 sm:px-6">
        <div className="flex w-full max-w-2xl flex-col gap-12 text-sm leading-loose sm:gap-16">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
