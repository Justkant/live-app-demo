import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AccountError } from "./components/AccountError";
import { AccountList } from "./components/AccountList";
import { AppLoading } from "./components/AppLoading";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Live App</code>&nbsp;demo
        </h2>
      </div>

      <Suspense fallback={<AppLoading />}>
        <ErrorBoundary FallbackComponent={AccountError}>
          <AccountList />
        </ErrorBoundary>
      </Suspense>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        Bottom
      </div>
    </main>
  );
}

export default App;
