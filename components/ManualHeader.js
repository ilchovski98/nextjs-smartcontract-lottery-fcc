import React from "react";
import { useMoralis } from "react-moralis";

function ManualHeader() {
  const { enableWeb3 } = useMoralis();
  return <div>Header</div>;
}

export default ManualHeader;
