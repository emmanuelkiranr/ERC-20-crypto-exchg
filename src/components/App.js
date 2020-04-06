import React, { Component } from 'react';

import './App.css';
import Web3 from 'web3'
import Navbar from './Navbar.js' 

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
    console.log(this.state.account)

    const ethBalance = await web3.eth.getBalance(this.state.account) // get balance of above account
    this.setState({ethBalance: ethBalance})
    this.setState({ethBalance}) //since key and var are same name
    console.log(this.state.ethBalance)
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

   constructor(props) {  // store bc data in react state
    super(props);
    this.state = {

    }
  }

  render() {           // the imported fns etc only take action once implemented in render fn.
    return (
      <div>
        <Navbar account = {this.state.account} />  //react component
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <h1>Hello world!</h1>
              
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
