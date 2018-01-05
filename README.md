![](https://raw.githubusercontent.com/decentraland/web/gh-pages/img/decentraland.ico)

# Contracts

Decentraland contract interfaces to use from Javascript.

## Use

The idea is to define here your own `Contract`s and work with them using `eth` to be imported elsewhere. A typical case is described below:

_MANAToken.js_

```javascript
import { eth } from 'decentraland-commons'

import { abi } from './abis/MANAToken.json'

let instance = null

class MANAToken extends eth.Contract {
    static getInstance() {
      if (! instance) {
        instance = new MANAToken('MANAToken', '0xdeadbeef', abi)
      }
      return instance
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

// The null here is to preserve the default account as is
eth.connect(null, [
    MANAToken,
    // ...etc
])

eth.getContract('MANAToken').lockMana()
// or
manaToken.lockMana()
```


### Scripts

**lint**

Lint js files with `eslint`

**docs**

Builds an static page with the JSDoc documentation

**test**

Run tests using mocha and chai
