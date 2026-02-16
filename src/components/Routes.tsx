import { Routes as RouterRoutes, Route } from "react-router";
import { ExperiencePage, ProjectPage } from "./pages";
import { App } from "../App";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<App />} />
      <Route path="/experiencePage/:id" element={<ExperiencePage />} />
      <Route path="/projectPage/:id" element={<ProjectPage />} />
    </RouterRoutes>
  );
};
