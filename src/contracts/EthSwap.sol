pragma solidity ^0.5.0;

import "./Token.sol";

contract EthSwap {
	string public name = "EthSwap Instant Exchange";// name is a state var '.' public ie. its data gets stored in blockchain. 
	Token public token; //gives us variable 'token' to represent Token smast contract,so we can access all fn with that var and its value gets stored in blockchain.
    uint public rate =100;

    event TokensPurchased (
        address account,  //receivers address
        address token,
        uint amount,
        uint rate
    	);


    event TokensSold (
        address account,  //receivers address
        address token,
        uint amount,
        uint rate
        );

    constructor(Token _token) public {
     token = _token; //_token is a local var its value gets stored in token .'.' only token could write to BC. .'. we use this constructor.
    }

    function buyTokens() public payable {
    	// Redemption rate =# of tokens they receive for 1 ether
    	// Amount of Ethereum * Redemption rate
    	//calculate the # of tokens to buy
    	uint tokenAmount = msg.value * rate;

         //Require that ethswap has enough tokens
    	require (token.balanceOf(address(this)) >= tokenAmount);
    	//Transfer tokens to user
    	token.transfer(msg.sender,tokenAmount);
        
        //emit an event   
        emit TokensPurchased(msg.sender,address(token),tokenAmount,rate);

    }
    
    function sellTokens(uint _amount) public {
        //user cant sel more tokens than they have
        require(token.balanceOf(msg.sender) >= _amount);

        //calculate etherAmount to be redeemed
        uint etherAmount = _amount / rate;

        //require token to sell
        require(address(this).balance >= etherAmount);
        
        //transfer tokens to ethswap
        token.transferFrom( msg.sender,address(this),_amount);

        //send ether to investor
        msg.sender.transfer(etherAmount);
        emit TokensSold(msg.sender,address(token),_amount,rate);

    }



}
