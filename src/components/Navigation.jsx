import React from "react";
import Web3 from "web3";
import { ca, cabi } from "../abi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useWallet } from "../WalletContext";

const Navigation = () => {
  const { isWalletConnected, connectWallet, disconnectWallet, ethAccounts } =
    useWallet();

  function handleClick() {
    if (!isWalletConnected) {
      connectWallet();
    } else {
      disconnectWallet();
    }
  }
  console.log("isWalletConnected", isWalletConnected);
  console.log("account", ethAccounts);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Tender App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Open</Nav.Link>
              <Nav.Link href="#pricing">History</Nav.Link>
            </Nav>
            <div>
              <Nav.Link eventKey={2} href="#" onClick={handleClick}>
                {isWalletConnected ? "Disconnect" : "Connect"}
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
