![](https://raw.githubusercontent.com/decentraland/web/gh-pages/img/decentraland.ico)

# Contracts

Decentraland contract interfaces to use from Javascript.

## Use

The idea is to define here your own `Contract`s and work with them using `eth` to be imported elsewhere. A typical case is described below:

_MANAToken.js_

```javascript
import { eth } from 'decentraland-commons'

import { abi } from './artifacts/MANAToken.json'

class MANAToken extends eth.Contract {
    static getDefaultAddress() {
      return '0xdeadbeef'
    }

    static getDefaultAbi() {
      return abi
    }

    async lockMana(sender, mana) {
     return await this.transaction(
          'lockMana', sender, mana, { gas: 120000 }
      )
    }
}

export default MANAToken
```


_On the start of your app, maybe server.js_

```javascript
import { eth } from 'decentraland-commons'
import { MANAToken } from 'decentraland-contracts'

eth.connect({
  contracts: [
    MANAToken,
      // ...etc
  ]
})

const manaToken = eth.getContract('MANAToken')
manaToken.lockMana()

// or maybe

const manaToken = new ManaToken(/*address*/, /*abi*/)
eth.connect({
  contracts: [
      manaToken,
      // ...etc
  ]
})
manaToken.lockMana()
```

## Contracts Addresses

Check [here](https://decentraland.github.io/contracts/addresses.json)

### Scripts

**lint**

Lint js files with `eslint`

**docs**

Builds an static page with the JSDoc documentation

**test**

Run tests using mocha and chai

