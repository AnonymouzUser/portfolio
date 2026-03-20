import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Link } from "react-router"
interface TechProps {
  name: string
  icon?: string
}

interface HoverLinkProps {
  link: string
  title: string
  theme: string
  desc: string
  tech: TechProps[]
  image: string
  target?: string
}

export const HoverLinkPro = ({
  link,
  title,
  theme,
  desc,
  tech,
  image,
  target,
}: HoverLinkProps) => {
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
        <HoverCardContent className="flex w-64 flex-col gap-0.5" side="right">
          <img src={image} alt={title} />
          <div>
            <h1 className="font-semibold">{title}</h1>
          </div>
          <div>
            <p>{desc}</p>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            <ul>
              {Array.isArray(tech) ? (
                tech.map((t) => <li key={t.name}>{t.name}</li>)
              ) : (
                <li>{tech}</li>
              )}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
