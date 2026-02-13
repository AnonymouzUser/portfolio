import { Routes as RouterRoutes, Route } from "react-router";
import { ExperiencePage } from "./pages";
import { App } from "../App";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<App />} />
      <Route path="/experiencePage" element={<ExperiencePage />} />
    </RouterRoutes>
  );
};
