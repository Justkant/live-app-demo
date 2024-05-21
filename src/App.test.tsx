import { expect, test } from "vitest";
// import {
//   declarativeHandlers,
//   getSimulatorTransport,
//   profiles,
// } from "@ledgerhq/wallet-api-simulator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropsWithChildren } from "react";
import App from "./App";

// const transport = getSimulatorTransport({
//   config: profiles.STANDARD.config,
//   permissions: {
//     currencyIds: ["ethereum", "bitcoin"],
//     methodIds: ["account.list", "message.sign"],
//   },
//   accounts: profiles.STANDARD.accounts,
//   currencies: profiles.STANDARD.currencies,
//   methods: declarativeHandlers({
//     "message.sign": [
//       // First call to message.sign and fallback after the third call
//       Buffer.from("0x123456789123456789"),
//       // Second call to message.sign only
//       ({ account, message, meta }) => {
//         console.log(account);
//         console.log(message);
//         console.log(meta);
//         return message;
//       },
//       // Third call to message.sign only with an error
//       ({ account, message, meta }) => {
//         console.log(account);
//         console.log(message);
//         console.log(meta);
//         throw new Error("Sign declined");
//       },
//     ],
//   }),
// });

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

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("should get and show accounts", async () => {
  const user = userEvent.setup();
  render(<App />, { wrapper: Providers });

  expect(screen.getByRole("heading")).toHaveTextContent("Live App demo");

  screen.debug();
  expect(screen.getByRole("status")).toBeVisible();
  // await waitFor(() => expect(screen.getByRole("status")).toBeEmptyDOMElement());
  await waitFor(() =>
    expect(screen.getByRole("button", { name: /update/i })).toBeVisible(),
  );
  await user.click(screen.getByRole("button", { name: /update/i }));

  // screen.debug();
  // await waitFor(() => expect(screen.getByRole("status")).toBeEmptyDOMElement());
  // Should add a check for the list of accounts
});

// it("should allow to sign")
