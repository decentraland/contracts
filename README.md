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

## Contracts Addresses

### Ropsten

* MANA Token: 0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb
* LAND Registry: 0xc371c916fdf2848e3d2c70ac1b9a17168e86d5ef
* LAND Proxy: 0x9519216b1d15a91e71e8cfa17cc45bcc7707e500

* Terraform Reserve: 0x4bc79175f1f6fded07f04aa1b4b0465ecff6f1b3
* Return Vesting: 0x58c7e6e382c1c19c132b0361c12cbc33e2b13076

### Livenet

* MANA Token: 0x0f5d2fb29fb7d3cfee444a200298f468908cc942
* LAND Registry: 0x62a4489da2a0dd1aaaB13546529Fef6F365aeE6E
* LAND Proxy: 0x36fc2821c1dba31ed04682b2277c89f33fd885b7

* Terraform Reserve: 0xcca95e580bbbd04851ebfb85f77fd46c9b91f11c
* Return Vesting: 0x79c1fdaba012b9a094c495a86ce5c6199cf86368

