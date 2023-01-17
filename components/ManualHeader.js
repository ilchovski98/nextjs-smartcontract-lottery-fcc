import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

function ManualHeader() {
  const { enableWeb3, account, isWeb3EnableLoading, isWeb3Enabled, Moralis, deactivateWeb3 } =
    useMoralis();
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log("account changed to " + account);

      if (account == null) {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("connected");
          deactivateWeb3();
        }
      }
    });
  }, []);

  return (
    <>
      {account ? (
        <div>Connected to {account}</div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "inject");
            }
          }}
        >
          {isWeb3EnableLoading ? "Connecting..." : "Connect"}
        </button>
      )}
    </>
  );
}

export default ManualHeader;
