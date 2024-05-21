import { RouterProvider } from "@tanstack/react-router";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import "the-new-css-reset/css/reset.css";
import "virtual:uno.css";
import "./bufferPolyfill.ts";
import { router } from "./router";

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>,
  );
}
