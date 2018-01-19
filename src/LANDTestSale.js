import { Contract, env } from 'decentraland-commons'

import { abi } from './artifacts/LANDTestSale.json'

/** LANDTestSale contract class */
class LANDTestSale extends Contract {
  static getDefaultAddress() {
    return env.universalGet('LAND_TEST_SALE_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  buy(x, y) {
    return this.transaction('buy', x, y, { gas: 120000 })
  }
}

module.exports = LANDTestSale
