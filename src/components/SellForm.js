import React, { Component } from 'react';
import tokenlogo from '../token.png'
import ethlogo from '../ether.png'


class SellForm extends Component {  

  constructor(props) {  // store bc data in react state
    super(props);
    this.state = {
      Output: '0'
      }
    }

 
  render() {          
    return (
        <form className="mb-3" onSubmit={(event)=>{
        event.preventDefault()
        let etherAmount         
        etherAmount=this.input.value.toString()
        etherAmount=window.web3.utils.toWei(etherAmount,'Ether')
        this.props.sellTokens(etherAmount)
       {/*console.log("purchasing Tokens...")*/}
      }}>
       <div>
         <label className="float-left"><b>Amount</b></label>
         <span className="float-right text-muted">
         Token Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
         </span>
        </div>
        <div className="input-group mb-4">
          <input
           type="text"
           onChange = {(event)=> {
            {/*console.log("changing...")*/}
            const tokenAmount = this.input.value.toString()
            this.setState({
              Output: tokenAmount / 100
            })
           {/*} console.log(this.state.Output)*/}
           }}
           ref={(input) => {this.input = input }}
           className="form-control form-control-lg"
           placeholder="0"
           required />
         <div className="input-group-append">
          <div className="input-group-text">
           <img src={tokenlogo} height='32' alt=""/>
           &nbsp;&nbsp;&nbsp; DApp
           </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Value</b></label>
          <span className="float-right text-muted">
           Ether Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
            </span>
          </div>
          <div className="input-group mb-2">
           <input
             type="text"
             className="form-control form-control-lg"
             placeholder="0"
             value={this.state.Output}
             disabled
             />
             <div className="input-group-append">
              <div className="input-group-text">
              <img src={ethlogo} height='32' alt=""/>
              &nbsp; ETH
            </div>
          </div>
        </div>
        <div className="mb-5">
            <span className="float-left text-muted">Exchange Rate</span>
            <span className="float-right text-muted">100 ERC20 Tokens = 1 ETH</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">Exchange</button>
        </form>
       
      );
  }
}

export default SellForm;
