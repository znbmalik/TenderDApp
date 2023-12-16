// walletConnection.js
import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const isWalletConnectedInStorage = JSON.parse(
    localStorage.getItem("wallet") || "{}"
  ).isWalletConnected;

  const [isWalletConnected, setIsWalletConnected] = useState(
    !!isWalletConnectedInStorage
  );

  const [ethAccounts,setEthAccounts]=useState([]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        setIsWalletConnected(accounts.length > 0);
        setEthAccounts(accounts);
        localStorage.setItem(
          "wallet",
          JSON.stringify({ isWalletConnected: accounts.length > 0})
        );
        console.log(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        setIsWalletConnected(false);
        localStorage.setItem(
          "wallet",
          JSON.stringify({ isWalletConnected: false })
        );
      }
    } else {
      console.warn("No Ethereum provider detected");
      setIsWalletConnected(false);
      localStorage.setItem(
        "wallet",
        JSON.stringify({ isWalletConnected: false })
      );
    }
  };
  const disconnectWallet = async () => {
    if (window.ethereum) {
      try {
        //await window.ethereum.request({ method: "eth_requestAccounts" });
        // const accounts = await window.ethereum.request({
        //   method: "eth_accounts",
        // });
        setIsWalletConnected(false);
        setEthAccounts([]);
        localStorage.setItem(
          "wallet",
          JSON.stringify({ isWalletConnected: false})
        );
        //console.log(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        setIsWalletConnected(true);
        localStorage.setItem(
          "wallet",
          JSON.stringify({ isWalletConnected: true })
        );
      }
    } else {
      console.warn("No Ethereum provider detected");
      setIsWalletConnected(true);
      localStorage.setItem(
        "wallet",
        JSON.stringify({ isWalletConnected: true })
      );
    }
  };

  return (
    <WalletContext.Provider value={{ isWalletConnected, connectWallet,disconnectWallet,ethAccounts }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
