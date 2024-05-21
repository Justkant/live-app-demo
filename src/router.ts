import { createRouter } from "@tanstack/react-router";
import { indexRoute } from "./routes";
import { detailRoute } from "./routes/detail";
import { rootRoute } from "./routes/root";
import { settingsRoute } from "./routes/settings";

const routeTree = rootRoute.addChildren([
  indexRoute,
  settingsRoute,
  detailRoute,
]);

export const router = createRouter({ routeTree });
