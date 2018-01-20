import { Contract, env } from 'decentraland-commons'

import { abi } from './artifacts/TerraformReserve.json'

/** TerraformReserve contract class */
class TerraformReserve extends Contract {
  static getDefaultAddress() {
    return env.universalGet('TERRAFORM_RESERVE_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  getDuration(address) {
    return this.call('duration', address)
  }

  getCliff(address) {
    return this.call('cliff', address)
  }

  getBeneficiary(address) {
    return this.call('beneficiary', address)
  }

  getVestedAmount(address) {
    return this.call('vestedAmount', address)
  }

  getReleasableAmount(address) {
    return this.call('releasableAmount', address)
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

  getReleased(address) {
    return this.call('released', address)
  }

  getStart(address) {
    return this.call('start', address)
  }

  release(address) {
    return this.transaction('release', address)
  }
}

module.exports = TerraformReserve
