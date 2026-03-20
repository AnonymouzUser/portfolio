import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface HoverLinkProps {
  title: string
  description: string
  theme: string
  paragraph1: string
  paragraph2: string
  paragraph3: string
}

export const HoverLinkExp = ({
  title,
  description,
  theme,
  paragraph1,
  paragraph2,
  paragraph3,
}: HoverLinkProps) => {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger>
              <Button
                variant="link"
                className="flex flex-row items-center gap-2 p-0 text-sm text-muted-foreground hover:cursor-pointer"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500"></div>
                <p
                  className={`font-semibold ${theme === "dark" ? "text-amber-50" : "text-slate-950"}`}
                >
                  {title}
                </p>
                - {description}
              </Button>
            </HoverCardTrigger>
          </HoverCard>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <div className="no-scrollbar flex flex-col gap-2 overflow-y-auto p-4 pb-0">
            <div className="flex flex-col gap-2 p-4">
              <h1 className="font-semibold">Description</h1>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph1}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph2}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph3}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 pb-0">
              <h1 className="font-semibold">Responsabilities</h1>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph1}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph2}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground">{paragraph3}</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
