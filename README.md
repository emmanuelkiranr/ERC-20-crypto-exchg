# Testchain
This is a Repository for learning about Blockchain Applications and cryptocurrencies. And also creating an blockchain application. 
The cryptocurrency I have used is Ether.

##### I highly Recommend you to visit the [setup.md](https://github.com/Emmanuel1237/Testchain/blob/master/setup.md) file of this repo to setup the environment for DApp Development.


## Dependencies 
  => If you have done setting up the development environment as given in 
  [setup.md](https://github.com/Emmanuel1237/Testchain/blob/master/setup.md) then you can skip the below mentioned prerequisites and continue to Step 1.

 Install these prerequisites.

 - NPM: https://nodejs.org
 - Truffle: https://github.com/trufflesuite/truffle
 - Ganache: http://truffleframework.com/ganache/
 - Metamask: https://metamask.io/
  

#### Step 1. Clone the project
   
    git clone https://github.com/Emmanuel1237/Testchain.git

#### Step 2. Install dependencies

    $ cd Testchain
    $ npm install

#### Step 3. Start Ganache

 Open the Ganache GUI client that you downloaded and installed. This will start  your local blockchain instance.

#### Step 4. Compile & Deploy Election Smart Contract

    $ truffle migrate --reset 
 
 You must migrate the Testchain smart contract each time you restart ganache.

#### Step 5. Configure Metamask

 - Unlock Metamask
 - Connect metamask to your local Etherum blockchain provided by Ganache.
 - Import an account provided by ganache.

#### Step 6. Run the Front End Application
    $ npm run start
 This will automatically star the web server and open up the client side website 