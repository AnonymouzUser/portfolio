import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { Link } from "react-router"

interface HoverLinkProps {
  link: string
  title: string
  theme: string
  target?: string
}

export const HoverLinkSer = ({ link, title, theme, target }: HoverLinkProps) => {
  return (
    <div className="transition-opacity duration-200">
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger>
          <Button variant="link" className="p-0">
            <Link
              to={link}
              className="flex flex-row items-center gap-2 text-sm text-muted-foreground"
              target={target}
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500"></div>
              <p
                className={`font-semibold ${theme === "dark" ? "text-amber-50" : "text-slate-950"}`}
              >
                {title}
              </p>
            </Link>
          </Button>
        </HoverCardTrigger>
      </HoverCard>
    </div>
  )
}
