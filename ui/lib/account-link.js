const {ATN_EXPLORER_ACCOUNT_URL, ATN_CODE} = require('../../app/scripts/controllers/network/enums')
module.exports = function (address, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 1: // main net
      link = `https://etherscan.io/address/${address}`
      break
    case 2: // morden test net
      link = `https://morden.etherscan.io/address/${address}`
      break
    case 3: // ropsten test net
      link = `https://ropsten.etherscan.io/address/${address}`
      break
    case 4: // rinkeby test net
      link = `http://118.31.18.101:4065/account/${address}`
      break
    case 42: // kovan test net
      link = `https://kovan.etherscan.io/address/${address}`
      break
    case ATN_CODE: // kovan test net
      link = `${ATN_EXPLORER_ACCOUNT_URL}/${address}`
      break
    default:
      link = ''
      break
  }

  return link
}
