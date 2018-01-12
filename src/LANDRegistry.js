import { Contract, env } from 'decentraland-commons'

import { abi } from './abis/LANDRegistry.json'

let instance = null

/** LANDToken contract class */
class LANDRegistry extends Contract {
  static getInstance() {
    if (!instance) {
      instance = new LANDRegistry(
        'LANDRegistry',
        env.universalGet('LAND_CONTRACT_ADDRESS'),
        abi
      )
    }
    return instance
  }

  getMetadata(x, y) {
    return this.call('landMetadata', x, y)
  }

  updateMetadata(coordinates, metadata) {
    const x = coordinates.map(coor => coor.x)
    const y = coordinates.map(coor => coor.y)
    return this.transaction('updateManyLandMetadata', x, y, metadata)
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
