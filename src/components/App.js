import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3'
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import Navbar from './Navbar.js' 
import Main from './Main.js'


class App extends Component {  //class inheritance

  async componentWillMount() {         //method to load imp fns before the layout
    await this.loadWeb3()              // to call the loadWeb3 function before all layout
    await this.loadBlockchainData()     //fn to import blockchain data
   // console.log(window.web3)
  }

  async loadBlockchainData() {
    const web3 =window.web3


    const accounts = await web3.eth.getAccounts() //get account data connected to bc
    this.setState({account : accounts[0]})        //we set stste here so we can access this from other parts in the application 
    //ie console log could be called from other fn .eg inside render fn
    //console.log(accounts[0])
   //- console.log(this.state.account)

    const ethBalance = await web3.eth.getBalance(this.state.account) // get balance of above account
    this.setState({ethBalance: ethBalance})
    this.setState({ethBalance}) //since key and var are same name
   //- console.log(this.state.ethBalance)
     // Load Token
    const abi = Token.abi                                //tells how the contract works,its fns etc
    const networkId = await web3.eth.net.getId()          // adrs of contract in BC  '.' multiple contract may have same abis
    const tokenData = Token.networks[networkId]
     if (tokenData) {
     const address = tokenData.address                 // or put address below in address as tokenData
    const token = new web3.eth.Contract(abi,address)   // or put abi as Token.abi instead of above
    let tokenBalance =await token.methods.balanceOf(this.state.account).call() //call while fetch info from BC
   //- console.log("tokenBalance",tokenBalance.toString())
    this.setState({tokenBalance: tokenBalance.toString()})
    //console.log(Token)
    this.setState({ token })
     }
     else {
      window.alert('Token Contract not Deployed to detected network') // if we switch n/w  from ganache n/w
     }
    // Load EthSwap
     
    const ethSwapData = EthSwap.networks[networkId]
     if (ethSwapData) {
    const ethSwap= new web3.eth.Contract(EthSwap.abi,ethSwapData.address )  
    this.setState({ethSwap})
    }
    else {
      window.alert('EthSwap Contract not Deployed to detected network') 
     }
     //console.log(this.state.ethSwap)
     this.setState({loading: false})
  }

 async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 =new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  buyTokens = (etherAmount) => {
    this.state.ethSwap.methods.buyTokens()
                              .send({ value: etherAmount, from: this.state.account})
                              .on('transactionHash',(hash)=> {
     this.setState({ loading: false})
   })
  }
  
  sellTokens =(tokenAmount)=> {
    this.setState({ loading:true})
    this.state.token.methods.approve(this.state.ethSwap.address,tokenAmount).send({from: this.state.account}).on('transactionHash',(hash)=>{
      this.state.ethSwap.methods.sellTokens(tokenAmount).send({from: this.state.account}).on('transactionHash',(hash)=>{
      this.setState({loading: false})
    })
  })
  }
   constructor(props) {  // store bc data in react state
    super(props);
    this.state = {
      account: '',
      Ethswap: {},
      Token: {},
      ethBalance: '0',
      tokenBalance:'0',
      loading:true

    }
  }

  render() {           // the imported fns etc only take action once implemented in render fn.
    let content
    if(this.state.loading) {
      content =<p id = "loader" className = "text-center">Loading...</p>
    }
    else {
      content = <Main 
      ethBalance={this.state.ethBalance} 
      tokenBalance={this.state.tokenBalance}
      buyTokens={this.buyTokens}
      sellTokens={this.sellTokens}
       />
      }
         
    
    return (
      <div>
      <Navbar account = {this.state.account} />  {/*react component*/}
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto"  style = {{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="https://github.com/Emmanuel1237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
               {content}
              
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
