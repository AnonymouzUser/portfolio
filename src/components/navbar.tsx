import { Button } from "@/components/ui/button"
// import { Link } from "react-router"
import { Sun, Moon } from "lucide-react"
interface navbarProps {
  theme: string
  toggleTheme: () => void
}

export const Navbar = ({ theme, toggleTheme }: navbarProps) => {
  return (
    <div className="mt-4 flex h-12 w-full flex-row items-center justify-between p-1">
      <div className="flex flex-row gap-2">
        {/* <Link
          to="/"
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "text-gray-400 hover:font-semibold hover:text-white"
              : "text-gray-500 hover:font-semibold hover:text-slate-950"
          }`}
        >
          home
        </Link>
        <Link
          to="/projects"
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "text-gray-400 hover:font-semibold hover:text-white"
              : "text-gray-500 hover:font-semibold hover:text-slate-950"
          }`}
        >
          projects
        </Link>
        <Link
          to="/contact-me"
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "text-gray-400 hover:font-semibold hover:text-white"
              : "text-gray-500 hover:font-semibold hover:text-slate-950"
          }`}
        >
          contact-me
        </Link> */}
      </div>
      <div>
        <Button
          onClick={toggleTheme}
          className={`size-4 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${
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
    </div>
  )
}
