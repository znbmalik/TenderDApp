import React, { useState } from "react";
import { Card, Container, Row, Tab, Tabs } from "react-bootstrap";
import BuyToken from "./BuyToken";
import SellToken from "./SellToken";
import MintToken from "./MintToken";
import Nav from "react-bootstrap/Nav";
import { useWallet } from "../../WalletContext";

const Exchange = () => {
  const [key, setKey] = useState("buy_token");
  const { isWalletConnected, connectWallet, ethAccounts } = useWallet();
  console.log("wallet connected", isWalletConnected);
  console.log("Account", ethAccounts);

  return (
    <div>
      <Container className="my-4">
        <Card>
          <Card.Header>
            <h3>SABZ Exchange</h3>
          </Card.Header>
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="buy_token" title="Buy Token">
                <BuyToken />
              </Tab>
              <Tab eventKey="sell_token" title="Sell Token">
                <SellToken />
              </Tab>
              <Tab eventKey="mint_token" title="Mint Token">
                <MintToken />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
      <div>
        {isWalletConnected ? (
          <p>Connected</p>
        ) : (
          <Nav className="justify-content-end">
            {/* <p>Please Connect Your Wallet</p> */}
            <Nav.Link eventKey={2} href="#memes" onClick={connectWallet}>
              Connect
            </Nav.Link>
          </Nav>
        )}
        {/* Your other components */}
      </div>
    </div>
  );
};

export default Exchange;
