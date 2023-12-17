import React from "react";
import Web3 from "web3";
import {ca,cabi} from "../abi";
import { useEffect, useState } from "react";
import { useContract } from "../InitializeContract";

const Home = () => {
  
  const {initializeContract,contract} = useContract();
  console.log(contract);

  
 
  const [totalSupply, setTotalSupply] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [stakeHolders, setStakeHolders] = useState("");
  const [totalWorth, setTotalWorth] = useState("");
 
  useEffect(() => {
    initializeContract();
  }, []);

  useEffect(() => {
    if(!!contract)
    {
      const connectToContract = async () => {         
        try {

          const totalSupplyResult = await contract.methods.tSupply().call();
          
          setTotalSupply(totalSupplyResult);
          const pricePerTokenResult = await contract.methods.pricePerToken().call();
          setPricePerToken(pricePerTokenResult);
          setTotalWorth(totalSupplyResult*pricePerTokenResult);
          setStakeHolders(await contract.methods.totalStakeHolders().call());
          

        } catch (error) {
          console.error("Error creating contract instance:", error);
        }

    };

    connectToContract();
    }
  }, [contract]); 
     
  

  return (
    <div>
      {/* Show Case */}
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start showcase">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1>
                Tender <span className="text-warning">App</span>
              </h1>
              <p className="lead my-4 text-center">
                We focus on teachin our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <div className="d-flex justify-content-center my-4">
              <a href="/sabz-exchange" className="btn btn-primary me-3" >
                Token Exchange
              </a>
                <a href="/tender" className="btn btn-primary me-3">
                  Tender
                </a>
                <a href="/proposal" className="btn btn-primary me-3">
                  Proposal
                </a>
                <a href="/voter" className="btn btn-primary">
                  Voter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="counterSection">
        <div className="container">
          <div className="row">
            <div className="four col-md-3">
              <div className="counter-box colored">
                <i className="fa fa-thumbs-o-up"></i>
                <span className="counter">Rs. {totalWorth} </span>
                <p>SABZ Assets</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                <i className="fa fa-group"></i>
                <span className="counter">Rs. {pricePerToken} </span>
                <p>Price Per Token</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                <i className="fa  fa-shopping-cart"></i>
                <span className="counter">{stakeHolders}</span>
                <p>Stake Holders</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                <i className="fa  fa-user"></i>
                <span className="counter" min="0" max="1563">
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
