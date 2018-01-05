import { Log, Contract, env } from 'decentraland-commons'

import { abi } from './abis/LANDTerraformSale.json'

const log = new Log('LANDTerraformSale')
let instance = null

/** LANDTerraformSale contract class */
class LANDTerraformSale extends Contract {
  static getInstance() {
    if (!instance) {
      instance = new LANDTerraformSale(
        'LANDTerraformSale',
        env.isomophicGet('TERRAFORM_CONTRACT_ADDRESS'),
        abi
      )
    }
    return instance
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
