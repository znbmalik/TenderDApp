import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Proposal from "../components/Proposal/Proposal";
import Tender from "../components/Tender/Tender";
import Voter from "../components/Voter/Voter";
import Vote from "../components/Voter/Vote";
import ApplyProposal from "../components/Proposal/ApplyProposal";
import Navigation from "../components/Navigation";
import Exchange from "../components/Exchange/Exchange";
import BuyToken from "../components/Exchange/BuyToken";
import SellToken from "../components/Exchange/SellToken";
import MintToken from "../components/Exchange/MintToken";
import { WalletProvider } from '../WalletContext';

const Router = () => {
  return (
    <WalletProvider>
      
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/proposal/apply-proposal" element={<ApplyProposal />} />
          <Route path="/tender" element={<Tender />} />
          <Route path="/voter" element={<Voter />} />
          <Route path="/voter/vote" element={<Vote />} />
          <Route path="/sabz-exchange" element={<Exchange />} />
          <Route path="/sabz-exchange/buy-token" element={<BuyToken />} />
          <Route path="/sabz-exhange/sell-token" element={<SellToken />} />
          <Route path="/sabz-exhange/mint-token" element={<MintToken />} />
        </Routes>
      </BrowserRouter>
    </div>
    
    </WalletProvider>
  );
};

export default Router;
