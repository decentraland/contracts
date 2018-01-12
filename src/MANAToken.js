import { Contract, env, eth } from 'decentraland-commons'

import { abi } from './abis/MANAToken.json'
import TerraformReserve from './TerraformReserve'

let instance = null

/** MANAToken contract class */
class MANAToken extends Contract {
  static getInstance() {
    if (!instance) {
      instance = new MANAToken(
        'MANAToken',
        env.universalGet('MANA_TOKEN_CONTRACT_ADDRESS'),
        abi
      )
    }
    return instance
  }

  async getAllowance(sender) {
    const assigned = await this.getAllowanceWei(sender)
    return eth.utils.fromWei(assigned)
  }

  getAllowanceWei(sender) {
    return this.call('allowance', sender, TerraformReserve.address)
  }

  async getBalance(sender) {
    const manaBalance = await this.getBalanceWei(sender)
    return eth.utils.fromWei(manaBalance)
  }

  getBalanceWei(sender) {
    return this.call('balanceOf', sender)
  }
}

module.exports = MANAToken
