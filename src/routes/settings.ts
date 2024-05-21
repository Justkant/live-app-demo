import { createRoute } from "@tanstack/react-router";
import { Settings } from "../components/Settings";
import { rootRoute } from "./root";

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings,
});
