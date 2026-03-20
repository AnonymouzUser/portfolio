import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { HoverLinkExp } from "@/components/ui/hover-link-exp"
import { HoverLinkSer } from "@/components/ui/hover-link-ser"
import { HoverLinkPro } from "@/components/ui/hover-link-pro"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface homeProps {
  theme: string
}

export const Home = ({ theme }: homeProps) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-12">
        <Avatar className="size-28">
          <AvatarImage
            src="/img/logo.png"
            alt="@itssolome"
            className="size-28"
          />
          <AvatarFallback>itssolome</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="m-0 flex flex-row gap-2 p-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <h1 className="text-sm font-semibold">Brayan Ocampo Lopez</h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>itssolome</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p className="text-sm text-muted-foreground">
              Technologist in web software analysis and development.
            </p>
          </div>
          <p className="text-sm tracking-normal text-muted-foreground">
            I’m a software analyst and developer with a strong passion for web
            UI. I have 3+ years of experience building websites using modern
            JavaScript frameworks like React and Next.js. I love turning designs
            into clean, functional interfaces.
          </p>
          <p className="text-sm tracking-normal text-muted-foreground">
            I’m a minimalist by nature, a creative problem-solver, and a
            confident leader who enjoys tackling challenges with imagination and
            structure. I thrive in team environments, love collaborating on
            large-scale projects, sharing ideas, and learning from others.
          </p>
          <p className="text-sm tracking-normal text-muted-foreground">
            Outside of code, I’m into anime, traditional Japanese aesthetics,
            and Linux — all of which influence my taste for simplicity, detail,
            and well-crafted systems.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-0">
          <h1 className="mb-2 font-semibold">Experience</h1>
          <HoverLinkExp
            title="AndesBPO"
            description="Web Full Stack developer (React.js and Python FastAPI)"
            theme={theme}
            paragraph1="I worked as a Full Stack web developer, building interfaces and software solutions for different companies in the BPO sector. On the front-end side, I used modern JavaScript frameworks like ReactJS and Next.js to create dynamic, optimized, and user-focused interfaces. I also worked with Chakra UI as a React component library to keep visual consistency and speed up development, and used TailwindCSS to build responsive, scalable, and high-performance designs."
            paragraph2="On the back-end side, I used Python as my main programming language and built robust, consumable APIs with FastAPI, focusing on clean architecture, performance, and easy integration with other services. I also implemented audio summarization services for both long and short recordings using artificial intelligence models from OpenAI and DeepSeek, helping automate information processing and text generation."
            paragraph3="Throughout my projects, I followed good version control practices using Git, with GitHub as the main platform for hosting and collaboration. I also used GitHub Copilot to assist with parts of the development and improve productivity. Additionally, I worked with Docker to containerize applications, making deployments more consistent, portable, and efficient across environments."
          />
          <HoverLinkExp
            title="Toki System"
            description="Web Full Stack developer (React.js and Express.js)"
            theme={theme}
            paragraph1=""
            paragraph2=""
            paragraph3=""
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-0">
            <h1 className="mb-2 font-semibold">Projects</h1>
            <HoverLinkPro
              link="https://tokipomito.vercel.app"
              title="Toki Pomito"
              theme={theme}
              desc="A clean and minimal Pomodoro timer to help you stay focused."
              tech={[
                { name: "React" },
                { name: "TailwindCSS" },
                { name: "Vite" },
              ]}
              image={
                theme === "dark"
                  ? "https://tokipomito.vercel.app/opengraph-image-l.png"
                  : "https://tokipomito.vercel.app/opengraph-image-d.png"
              }
              target="_blank"
            />
            <HoverLinkPro
              link="https://tokisystem.vercel.app"
              title="Toki System"
              theme={theme}
              desc="Minimal pomodoro timer"
              tech={[
                { name: "React" },
                { name: "TailwindCSS" },
                { name: "Vite" },
              ]}
              image={
                theme === "dark"
                  ? "https://tokisystem.vercel.app/opengraph-image-l.png"
                  : "https://tokisystem.vercel.app/opengraph-image-d.png"
              }
              target="_blank"
            />
            <HoverLinkPro
              link="https://tokilist.vercel.app"
              title="Toki List"
              theme={theme}
              desc="A minimal todo list app to help you stay organized and productive."
              tech={[
                { name: "React" },
                { name: "TailwindCSS" },
                { name: "Vite" },
              ]}
              image={
                theme === "dark"
                  ? "https://tokilist.vercel.app/opengraph-image-l.png"
                  : "https://tokilist.vercel.app/opengraph-image-d.png"
              }
              target="_blank"
            />
            <HoverLinkPro
              link="https://tokinotes.vercel.app"
              title="Toki Notes"
              theme={theme}
              desc="A minimal notes app to help you capture and organize your thoughts."
              tech={[
                { name: "React" },
                { name: "TailwindCSS" },
                { name: "Vite" },
              ]}
              image={
                theme === "dark"
                  ? "https://tokinotes.vercel.app/opengraph-image-l.png"
                  : "https://tokinotes.vercel.app/opengraph-image-d.png"
              }
              target="_blank"
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-0">
            <h1 className="mb-2 font-semibold">Services</h1>
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="Web Development"
              theme={theme}
            />
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="UI/UX Design"
              theme={theme}
            />
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="Full Stack Development"
              theme={theme}
            />
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="Front-End Development"
              theme={theme}
            />
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="Back-End Development"
              theme={theme}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-0">
            <div className="flex flex-row items-center gap-0.5">
              <h1 className="mb-2 font-semibold">Contact</h1>
              <p className="mb-2 text-sm text-muted-foreground">
                - Get in touch with me!
              </p>
            </div>
            <HoverLinkSer
              link="mailto:contact.ocampo.info@gmail.com"
              title="E-mail"
              theme={theme}
              target="_blank"
            />
            <HoverLinkSer
              link="https://linkedin.com/in/brayan-ocampo-lopez"
              title="LinkedIn"
              theme={theme}
              target="_blank"
            />
            <HoverLinkSer
              link="https://instagram.com/its_solome"
              title="Instagram"
              theme={theme}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
