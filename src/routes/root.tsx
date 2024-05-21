import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { Flex, ProgressLoader, StyleProvider } from "@ledgerhq/react-ui";
// import { ThemeNames } from "@ledgerhq/react-ui/styles/index";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import i18n from "@/i18n";
import { AppErrorFallback } from "../components/AppErrorFallback";
import { AppLoading } from "../components/AppLoading";
import { TanStackRouterDevtools } from "../components/TanStackRouterDevtools";

// Create a client
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

type RootSearch = {
  theme: "dark" | "light";
  lang: string;
};

// All providers should be declared here
export const rootRoute = createRootRoute({
  validateSearch: (search: Record<string, unknown>): RootSearch => {
    // TODO use a validation lib instead of manually checking
    const theme =
      search.theme &&
      typeof search.theme === "string" &&
      (search.theme === "dark" || search.theme === "light")
        ? search.theme
        : "dark";

    const lang =
      search.lang && typeof search.lang === "string" ? search.lang : "en";

    return {
      theme,
      lang,
    };
  },
  component: function Root() {
    // const { lang, theme } = rootRoute.useSearch();

    // useEffect(() => {
    //   void i18n.changeLanguage(lang);
    // }, [lang]);

    return (
      <QueryClientProvider client={queryClient}>
        <div className="h-full w-full flex flex-col justify-between">
          <Suspense fallback={<AppLoading />}>
            <ErrorBoundary FallbackComponent={AppErrorFallback}>
              <Outlet />
            </ErrorBoundary>
          </Suspense>
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </QueryClientProvider>
    );
  },
});
