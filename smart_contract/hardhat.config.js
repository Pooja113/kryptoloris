// https://eth-rinkeby.alchemyapi.io/v2/fGXzdeHadEvnsTZd112LE0Ft08EeHO7d


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby  : {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/fGXzdeHadEvnsTZd112LE0Ft08EeHO7d',
      accounts: ['c5bb7fb845b98905455ecc01ce02e8b98289179db488424be4ef0e7b14885be6']
    }
  }
};
