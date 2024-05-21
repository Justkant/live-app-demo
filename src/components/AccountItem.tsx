import { Account } from "@ledgerhq/wallet-api-client";
import { useNavigate } from "@tanstack/react-router";

export function AccountItem({ account }: { account: Account }) {
  const navigate = useNavigate();

  const onAccountClick = () => {
    navigate({
      to: "/detail/$accountId",
      params: { accountId: account.id },
      search: (search) => search,
    });
  };

  return (
    <li>
      <button
        onClick={onAccountClick}
        className="m-4 flex w-full justify-around rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl hover:bg-zinc-700/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        type="button"
      >
        <div>
          <p>Name: {account.name}</p>
          <p>Address: {account.address}</p>
        </div>
        <div>
          <p>Balance: {account.balance.toString()}</p>
          <p>Block Height: {account.blockHeight}</p>
        </div>
      </button>
    </li>
  );
}
