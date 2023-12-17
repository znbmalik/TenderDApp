import React from "react";
import Web3 from "web3";
import {ca,cabi} from "./abi";
import { createContext, useContext, useState } from "react";

const ContractContext = createContext();

export const ContractProvider = ({ children }) => { 

    const [contract, setContract] = useState(null);

    const initializeContract = async () => {
    try {
      // Check if Web3 is available
      console.log("Web3 Instance:", window.web3);
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        console.log("if");
      } else if (window.web3) {
        window.web3 = new Web3(Web3.currentProvider);
        console.log("else if");
      } else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
        return;
      }
      
      try {
        const contract = new window.web3.eth.Contract(cabi, ca);
        setContract(contract);
        console.log("contract",contract);
        

      } catch (error) {
        console.error("Error creating contract instance:", error);
      }

    } catch (error) {
      console.error("Error connecting to the contract:", error);
    }
  };
    
    return (
      <ContractContext.Provider value={{ initializeContract,contract}}>
        {children}
      </ContractContext.Provider>
    );
  };
  
  export const useContract = () => {
    return useContext(ContractContext);
  };
  