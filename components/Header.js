import React from "react";
import { ConnectButton } from "web3uikit";

function Header() {
  return (
    <div>
      Decentralized Lottery
      <ConnectButton moralisAuth={false} />
    </div>
  );
}

export default Header;
