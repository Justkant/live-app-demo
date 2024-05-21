import { createRoute } from "@tanstack/react-router";
import { Detail } from "../components/Detail";
import { rootRoute } from "./root";

export const detailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/detail/$accountId",
  component: Detail,
});
