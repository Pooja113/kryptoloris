// https://eth-rinkeby.alchemyapi.io/v2/fGXzdeHadEvnsTZd112LE0Ft08EeHO7d


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby  : {
      url: 'http url',
      accounts: ['private key']
    }
  }
};
