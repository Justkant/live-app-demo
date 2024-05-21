import { useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useCallback } from "react";
import useAccounts, {
  queryKey as accountsQueryKey,
} from "../hooks/useAccounts";
import { walletAPIClientAtom } from "../store/wallet-api.store";
import { AccountItem } from "./AccountItem";

export function AccountList() {
  const queryClient = useQueryClient();
  const client = useAtomValue(walletAPIClientAtom);
  const accounts = useAccounts(client);

  const onUpdateAccounts = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: accountsQueryKey,
    });
  }, [queryClient]);

  return (
    <div className="relative flex w-full place-items-center justify-center before:absolute before:-z-[1] before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <div className="grow flex-col">
        <button
          type="button"
          onClick={onUpdateAccounts}
          className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update accounts data
        </button>
        <ul>
          {accounts.data.map((account) => {
            return <AccountItem key={account.id} account={account} />;
          })}
        </ul>
      </div>
    </div>
  );
}
