import { Contract, env } from 'decentraland-commons'

import { abi } from './artifacts/DecentralandVesting.json'

/** DecentralandVesting contract class */
class DecentralandVesting extends Contract {
  static getDefaultAddress() {
    return env.universalGet('TERRAFORM_RESERVE_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  async getDuration(address) {
    const bigNumber = await this.call('duration', address)
    return bigNumber.toNumber()
  }

  async getCliff(address) {
    const bigNumber = await this.call('cliff', address)
    return bigNumber.toNumber()
  }

  getBeneficiary(address) {
    return this.call('beneficiary', address)
  }

  async getVestedAmount(address) {
    const bigNumber = await this.call('vestedAmount', address)
    return bigNumber.toNumber()
  }

  async getReleasableAmount(address) {
    const bigNumber = await this.call('releasableAmount', address)
    return bigNumber.toNumber()
  }

  isRevoked(address) {
    return this.call('revoked', address)
  }

  isRevocable(address) {
    return this.call('revocable', address)
  }

  getOwner(address) {
    return this.call('owner', address)
  }

  async getReleased(address) {
    const bigNumber = await this.call('released', address)
    return bigNumber.toNumber()
  }

  async getStart(address) {
    const bigNumber = await this.call('start', address)
    return bigNumber.toNumber()
  }

  release(address) {
    return this.transaction('release', address)
  }
}

module.exports = DecentralandVesting
