import React from "react";
import Web3 from "web3";
import {ca,cabi} from "../../abi";
import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";
import { useWallet } from "../../WalletContext";
import { useContract } from "../../InitializeContract";

const MintToken = () => {

  const [requiredTokens, setRequiredTokens] = useState("");
  const [amount, setAmount] = useState("");
  const [totalAvailable, setTotalAvailable] = useState("");
  const [errorText, setErrorText] = useState(false);
  
  const { isWalletConnected, connectWallet, ethAccounts } = useWallet();
  console.log("Account in Mint",ethAccounts);

  const {initializeContract,contract} = useContract();
  console.log("contract in Mint",contract);

  useEffect(() => {
    if(isWalletConnected)
      connectWallet();
    initializeContract();
  }, []);

  const SabzData=async () => {
    try{
     
          const supp=await contract.methods.tSupply().call();
          const min=await contract.methods.totalMint().call();
          setTotalAvailable(supp-min);
          console.log("available tokens",totalAvailable);       
    }
    catch (err)
    {
       console.log(err);
    }

 }

  const computePrice=async (tokens) => {
    try{
     
          const pricePerTkn=await contract.methods.pricePerToken().call();
          //const min=await contract.methods.totalMint().call();
          setAmount(pricePerTkn*tokens);
          //console.log("available tokens",totalAvailable);    
          setRequiredTokens(tokens);
    }
    catch (err)
    {
       console.log(err);
    }

 }

 useEffect(() => {
  // Call the logic on page load
  SabzData();
}, []); // The empty dependency array ensures that this effect runs once on mount


const SabzMint=async () => {
  try{
    console.log("Hello World");
    
    const web3 = new Web3(window.ethereum);   
    //const balanceInWei = 5;
    const balanceInWei = await web3.eth.getBalance(ethAccounts[0]);
    if(balanceInWei<amount)
    {
        setErrorText(true);
    }
    else
    {
        const result = await contract.methods.tokenMint(requiredTokens).send({
        from: ethAccounts[0],
        value: web3.utils.toWei(amount, 'ether'), // Send some ether along with the transaction if the function is payable
      });
      SabzData();
    }        
  }
  catch (err)
  {
     console.log(err);
  }

}

  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
          <Card.Header className="d-flex justify-content-between">
            <h3>Mint Token</h3>
            <h3> Total Available: {totalAvailable}</h3>
          </Card.Header>
          </Card.Header>
          <Card.Body>
            <Form>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPrice"
              >
                <Form.Label column sm="2">
                  Token
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="Tokens" min="1"  max={totalAvailable}
                    onChange={(e) => {
                      computePrice(e.target.value);

                    }}/>
                </Col>
              </Form.Group>
 
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextToken"
              >
                <Form.Label column sm="2" value={amount} readOnly >
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Price" readOnly value={amount} />
                </Col>
              </Form.Group>
              {errorText &&<small className="text-danger"> * Sorry! You have insufficient balance</small>}
              <br />
              <Button className="mt-4" onClick={SabzMint}>Mint Token</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default MintToken;
