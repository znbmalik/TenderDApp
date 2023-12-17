import React from "react";
import Web3 from "web3";
import {ca,cabi} from "../../abi";
import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";
import { useWallet } from "../../WalletContext";
import { useContract } from "../../InitializeContract";

const MintToken = () => {

  const [tokens, setTokens] = useState(""); 
  const [amount, setAmount] = useState("");
  const [totalAvailable, setTotalAvailable] = useState("");
  const [headingText, setHeadingText] = useState('');
  const [pricePerToken, setPricePerToken] = useState("");

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
      // console.log("Hello World");
      // if(Web3.givenProvider)//anything that will connect to web 3 e.g. metamsk
      //    {
            
            //  await Web3.givenProvider.enable();//enable wallet (metamask )
            //  let web3=new Web3(Web3.givenProvider);
            //  let account=await web3.eth.getAccounts();
            //  account=account[0];
            //  console.log("EOA account :", account);
            //  const contract_init=new web3.eth.Contract(cabi,ca);
            //  setContract(contract_init);
            //  console.log("contract :", contract_init);
            //  console.log("Tokens:", tokens);

            //  const supp=await contract_init.methods.tSupply().call();
            //  const min=await contract_init.methods.totalMint().call();
            //  setTotalAvailable(supp-min);
            //  console.log("available tokens",totalAvailable);
           
        // }
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
    if(Web3.givenProvider)//anything that will connect to web 3 e.g. metamsk
       {
          
           await Web3.givenProvider.enable();//enable wallet (metamask )
           let web3=new Web3(Web3.givenProvider);
           let account=await web3.eth.getAccounts();
           account=account[0];
           console.log("EOA account :", account);
           //const contract_init=new web3.eth.Contract(cabi,ca);
           //setContract(contract_init);
           console.log("contract :", contract);
           console.log("Tokens:", tokens);
           const pricePerTokenResult = await contract.methods.pricePerToken().call();
           setPricePerToken(pricePerTokenResult);

           setAmount(tokens*pricePerToken);
           
           //const min=await contract.methods.totalMint().call();
           
         
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
            <h3>Mint Token {totalAvailable}</h3>
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
                  <Form.Control type="number" placeholder="Tokens" min="1" value={tokens}
                    onChange={(e) => {
                      setTokens(e.target.value);

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
                  <Form.Control type="text" placeholder="Price" readOnly />
                </Col>
              </Form.Group>



              {/* <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Description" />
                </Col>
              </Form.Group> */}
              <Button className="mt-4" onClick={SabzMint}>Mint Token</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default MintToken;
