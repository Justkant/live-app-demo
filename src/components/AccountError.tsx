import { FallbackProps } from "react-error-boundary";

export function AccountError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>retry</button>
    </div>
  );
}
