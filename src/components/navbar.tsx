import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { Sun, Moon } from "lucide-react"
interface navbarProps {
  theme: string
  toggleTheme: () => void
}

export const Navbar = ({ theme, toggleTheme }: navbarProps) => {
  return (
    <header className="mt-3 flex h-12 w-full flex-row items-center justify-between p-1 sm:mt-4">
      <div className="flex flex-row gap-2">
        <Link
          to="/"
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "text-gray-400 hover:font-semibold hover:text-white"
              : "text-gray-500 hover:font-semibold hover:text-slate-950"
          }`}
        >
          home
        </Link>
      </div>
      <div>
        <Button
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={toggleTheme}
          className={`size-8 rounded-full bg-transparent p-0 transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${
            theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-500 hover:text-slate-950"
          } `}
        >
          {theme === "dark" ? (
            <Sun className="size-4 bg-transparent" />
          ) : (
            <Moon className="size-4 bg-transparent" />
          )}
        </Button>
      </div>
    </header>
  )
}
