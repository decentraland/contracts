import { eth, env, Log } from 'decentraland-commons'

import { abi } from './abis/TerraformReserve.json'

const log = new Log('TerraformReserve')
let instance = null

/** TerraformReserve contract class */
class TerraformReserve extends eth.Contract {
  static getInstance() {
    if (!instance) {
      instance = new TerraformReserve(
        'TerraformReserve',
        env.universalGet('RESERVE_CONTRACT_ADDRESS'),
        abi
      )
    }
    return instance
  }

  lockMana(sender, mana) {
    return this.lockManaWei(sender, eth.utils.toWei(mana))
  }

  lockManaWei(sender, mana) {
    log.info(`Locking ${mana}MANA for ${eth.getAddress()}`)
    eth.unlockAccount()
    return this.transaction('lockMana', sender, mana, { gas: 120000 })
  }
}

module.exports = TerraformReserve
