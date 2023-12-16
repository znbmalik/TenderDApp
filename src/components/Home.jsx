import React from "react";
import Web3 from "web3";
import {ca,cabi} from "../abi";
import { useEffect, useState } from "react";

const Home = () => {
  const [contract, setContract] = useState(null);

  const [totalSupply, setTotalSupply] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [stakeHolders, setStakeHolders] = useState("");
  const [totalWorth, setTotalWorth] = useState("");
 
  useEffect(() => {
    const connectToContract = async () => { 
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

        // Replace 'yourContractAddress' with the actual address of your deployed contract
        
        try {
          const contract = new window.web3.eth.Contract(cabi, ca);
          setContract(contract);
          const totalSupplyResult = await contract.methods.tSupply().call();
          console.log(totalSupplyResult);
          setTotalSupply(totalSupplyResult);
          const pricePerTokenResult = await contract.methods.pricePerToken().call();
          setPricePerToken(pricePerTokenResult);
          setTotalWorth(totalSupplyResult*pricePerTokenResult);
          setStakeHolders(await contract.methods.totalStakeHolders().call());
          console.log(await contract.methods.totalStakeHolders().call());

        } catch (error) {
          console.error("Error creating contract instance:", error);
        }

      } catch (error) {
        console.error("Error connecting to the contract:", error);
      }
    };

    connectToContract();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

     
  

  return (
    <div>
      {/* Show Case */}
      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start showcase">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1>
                Tender <span class="text-warning">App</span>
              </h1>
              <p class="lead my-4 text-center">
                We focus on teachin our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <div className="d-flex justify-content-center my-4">
              <a href="/sabz-exchange" class="btn btn-primary me-3" >
                SABZ exchange
              </a>
                <a href="/tender" class="btn btn-primary me-3">
                  Tender
                </a>
                <a href="/proposal" class="btn btn-primary me-3">
                  Proposal
                </a>
                <a href="/voter" class="btn btn-primary">
                  Voter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="counterSection">
        <div class="container">
          <div class="row">
            <div class="four col-md-3">
              <div class="counter-box colored">
                <i class="fa fa-thumbs-o-up"></i>
                <span class="counter">Rs. {totalWorth} </span>
                <p>SABZ Assets</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                <i class="fa fa-group"></i>
                <span class="counter">Rs. {pricePerToken} </span>
                <p>Price Per Token</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                <i class="fa  fa-shopping-cart"></i>
                <span class="counter">{stakeHolders}</span>
                <p>Stake Holders</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                <i class="fa  fa-user"></i>
                <span class="counter" min="0" max="1563">
                  1563
                </span>
                <p>Total Proposal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
  

export default Home;
