import { Home } from "@/pages/home/home"

export const getRoutes = (theme: string) => [
  { path: "/", element: <Home theme={theme} /> },
]
