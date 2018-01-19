import { Contract, env } from 'decentraland-commons'

import { abi } from './artifacts/LANDRegistry.json'

/** LANDToken contract class */
class LANDRegistry extends Contract {
  static getDefaultAddress() {
    return env.universalGet('LAND_REGISTRY_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  getData(x, y) {
    return this.call('landData', x, y)
  }

  updateData(coordinates, data) {
    const x = coordinates.map(coor => coor.x)
    const y = coordinates.map(coor => coor.y)
    return this.transaction('updateManyLandData', x, y, data)
  }

  getOwner(x, y) {
    return this.call('ownerOfLand', x, y)
  }

  encodeTokenId(x, y) {
    return this.call('encodeTokenId', x, y)
  }

  decodeTokenId(value) {
    return this.call('decodeTokenId', value)
  }

  ping(x, y) {
    return this.transaction('ping', x, y)
  }

  exists(x, y) {
    return this.call('exists', x, y)
  }

  transferTo(x, y, newOwner) {
    return this.transaction('transferLand', newOwner, x, y)
  }

  assetsOf(address) {
    return this.transaction('assetsOf', address)
  }

  ownerOfLand(x, y) {
    return this.call('ownerOfLand', x, y)
  }

  ownerOfLandMany(x, y) {
    return this.call('ownerOfLandMany', x, y)
  }

  landOf(owner) {
    return this.call('landOf', owner)
  }

  assignNewParcel(x, y, address, opts = {}) {
    return this.transaction(
      'assignNewParcel',
      x,
      y,
      address,
      Object.assign({}, { gas: 4000000, gasPrice: 28 * 1e9 }, opts)
    )
  }

  assignMultipleParcels(x, y, address, opts = {}) {
    return this.transaction(
      'assignMultipleParcels',
      x,
      y,
      address,
      Object.assign({}, { gas: 1000000, gasPrice: 28 * 1e9 }, opts)
    )
  }
}

module.exports = LANDRegistry
