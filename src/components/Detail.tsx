import { Navigate } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import { useMemo, useState } from "react";
import useAccounts from "../hooks/useAccounts";
import { detailRoute } from "../routes/detail";
import { walletAPIClientAtom } from "../store/wallet-api.store";

export function Detail() {
  const { accountId } = detailRoute.useParams();
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const client = useAtomValue(walletAPIClientAtom);
  const accounts = useAccounts(client);
  const account = useMemo(() => {
    return accounts.data.find((account) => account.id === accountId);
  }, [accountId, accounts]);

  if (!account) {
    return <Navigate to="/" search={(search) => search} />;
  }

  const onSignClick = async () => {
    const signedMessage = await client.message.sign(
      accountId,
      Buffer.from(message),
    );
    setResult(signedMessage.toString());
  };

  return (
    <div>
      <h2>Detail for account: {accountId}</h2>
      <input
        placeholder="Message to sign"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={onSignClick}>Sign</button>
      <p>Result: {result}</p>
    </div>
  );
}
