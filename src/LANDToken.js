import { Contract, env } from 'decentraland-commons'

import { abi } from './abis/LANDToken.json'

let instance = null

/** LANDToken contract class */
class LANDToken extends Contract {
  static getInstance() {
    if (!instance) {
      instance = new LANDToken(
        'LANDToken',
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

  buildTokenId(x, y) {
    return this.call('buildTokenId', x, y)
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
}

module.exports = LANDToken
