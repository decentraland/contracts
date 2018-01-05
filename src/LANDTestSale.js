import { eth, env } from 'decentraland-commons'

import { abi } from './abis/LANDTestSale.json'

let instance = null

/** LANDTestSale contract class */
class LANDTestSale extends eth.Contract {
  static getInstance() {
    if (!instance) {
      instance = new LANDTestSale(
        'LANDTestSale',
        env.universalGet('LAND_TEST_SALE_CONTRACT_ADDRESS'),
        abi
      )
    }
    return instance
  }

  buy(x, y) {
    return this.transaction('buy', x, y, { gas: 120000 })
  }
}

module.exports = LANDTestSale
