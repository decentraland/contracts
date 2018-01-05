
# Test

run with

```bash
mocha --compilers js:babel-register test/
```

if you want to require a test utils file you can do so like this:


```bash
mocha -r test/test_helper.js --compilers js:babel-register test/
```

