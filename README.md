# ERC-20-crypto-exchg
This is a Repository for learning about Blockchain Applications and cryptocurrencies. And also creating an blockchain application. 
The cryptocurrency I have used is Ether.

This is a web site for buying and selling tokens  ERC-20 tokens for a fixed price

=> This is just for understanding how ERC-20 tokens, smart contracts works.

   =>This is NOT A REAL TOKEN TRADING WEBSITE<=

##### I highly Recommend you to visit the [setup.md](https://github.com/Emmanuel1237/Testchain/blob/master/setup.md) file of this repo to setup the environment for DApp Development.


## Dependencies 
  => If you have done setting up the development environment as given in 
  [setup.md](https://github.com/Emmanuel1237/Testchain/blob/master/setup.md) then you can skip the below mentioned prerequisites and continue to Step 1.

 Install these prerequisites.

 - NPM: https://nodejs.org (install version: 9.10.0)
 - Truffle: https://github.com/trufflesuite/truffle (install version: 5.1.14)
 - Ganache: http://truffleframework.com/ganache/
 - Metamask: https://metamask.io/
  

#### Step 1. Clone the project
   
    git clone https://github.com/Emmanuel1237/ERC-20-crypto-exchg.git

#### Step 2. Install dependencies

    $ cd ERC-20-crypto-exchg
    $ npm install

#### Step 3. Start Ganache

 Open the Ganache GUI client that you downloaded and installed. This will start  your local blockchain instance.

#### Step 4. Compile & Deploy Election Smart Contract

    $ truffle migrate --reset 
 
 You must migrate the Testchain smart contract each time you restart ganache.

#### Step 5. Configure Metamask

 - Click on the metamask icon on top right corner of the chrome browser
 - Create an account on metamask.
 - In metamask ,from networks section select custom RPC.
 - In the new RPC URL section paste the RPC server URL displayed on the top
   tab of Ganache. And click save after giving a name for the network. 
   Now we connected metamask to your local Etherum blockchain provided by Ganache.
 - Now Import an account provided by ganache. Goto Ganache and click on the
   KEY icon corresponding to any account. It will diplay the private key of that account, copy in and open metamask, and click on the account icon ,select import account option and set the type to private key and paste the private key coppied below and click import.
 - Now in metamask ,from networks section select the name of the network that
   you have created now.

#### Step 6. Run the Front End Application
    $ npm run start
 This will automatically star the web server and open up the client side website 

#### step 7.
  
   Now start buying and selling tokens from your localhost network.
