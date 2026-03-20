import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { SquareArrowOutUpRight } from "lucide-react"

interface CardProProps {
  title: string
  description: string
  className?: string
  link: string
  theme: string
}

export const CardPro = ({
  title,
  description,
  className,
  link,
  theme,
}: CardProProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <Button
            className={`size-4 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-slate-950"
            } `}
         >
            <Link to={link} target="_blank">
              <SquareArrowOutUpRight />
            </Link>
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
