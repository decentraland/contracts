import { Contract, env, eth } from 'decentraland-commons'

import { abi } from './artifacts/MANAToken.json'
import TerraformReserve from './TerraformReserve'

/** MANAToken contract class */
class MANAToken extends Contract {
  static getDefaultAddress() {
    return env.universalGet('MANA_TOKEN_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
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
