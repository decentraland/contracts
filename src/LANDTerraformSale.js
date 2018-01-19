import { Log, Contract, env } from 'decentraland-commons'

import { abi } from './artifacts/LANDTerraformSale.json'

const log = new Log('LANDTerraformSale')

/** LANDTerraformSale contract class */
class LANDTerraformSale extends Contract {
  static getDefaultAddress() {
    return env.universalGet('LAND_TERRAFORM_SALE_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  buyMany(buyer, xList, yList, totalCost) {
    log.info(`(buyMany) LAND for ${buyer}`)
    return this.transaction('buyMany', buyer, xList, yList, totalCost, {
      gas: 120000
    })
  }

  transferBackMANA(address, amount) {
    log.info(`(transferBackMANA) ${amount} to ${address}`)
    return this.transaction('transferBackMANA', address, amount, {
      gas: 120000
    })
  }

  transferBackMANAMany(addresses, amounts) {
    log.info(`(transferBackMANAMany) ${amounts} to ${addresses}`)
    return this.transaction('transferBackMANAMany', addresses, amounts, {
      gas: 120000
    })
  }
}

module.exports = LANDTerraformSale
