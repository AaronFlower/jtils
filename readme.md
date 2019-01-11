## JTils

1. Init the project, be careful of your version.
```bash
npm init
```

2. Hierarchy the project, ignore node_modules

```
$ mkdir src test
$ touch .gitignore
```

3. Add EditorConfig Support
```
$ yarn add --dev editorconfig-cli
$ npx ec init
```

4. Add ESLint, Prettier support
```
$ yarn add --dev eslint
$ npx eslint --init
$ yarn add --dev eslint-plugin-prettier eslint-config-prettier
# add .eslintrc.js .prettierrc.js config file to support.
```

5. Add a utility function sum.js in src
```javascript
export default function sum (a, b) {
  return number(a) + (b)
}
```

use ESLint to check out code.
```
npx lint src/sum.js

/Users/easonzhan/learning/git_repos/jtils/src/sum.js
  1:10  error  'foo' is defined but never used  no-unused-vars
  2:10  error  Strings must use singlequote     quotes

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
If, you use VSCode or other editor you can install plugins for these editor to lint your code dynamically.

I use vim, so I use a vim lint plugin ALE.

6. Add Mocha to test your code.
```
yarn add --dev mocha
```
test the code.
```
$  npx mocha
~repos/jtils/test/sum.js:2
import sum from "../src/sum"
       ^^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
```
This error tells us we don't support ES6 Modules. So we need to add Babel to support.

7. Add babel 7 support
```
yarn add --dev @babel/core @babel/cli @babel/preset-env
yarn add --dev @babel/register
```
And for Babel 7, you should add a babel.config.js

```
module.exports = {
  presets: ["@babel/env"]
}
```

And then execute the Mocha.

```bash
npx mocha --require @babel/register

  Sum
    Two Positives
      ✓ should returns 4


  1 passing (9ms)
```

8. About the `test/sum.js` code
```javascript
const assert = require("assert")
import sum from "../src/sum"

describe("Sum", function() {
  describe("Two Positives", function() {
    it("should returns 4", function() {
      assert.equal(sum(2, 2), 4)
    })
  })
})
```
#### Assertions

In the `test/sum.js` file, we use the Node.js built-in `assert` module to assert our code.
Mocha allows us to use any assertion libraries we wish. This means we can use libraries such as:
- chai Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- should.js   BDD style shown throughout these docs.
- jest/expect
- expect.js
- better-assert
- unexpected

We should use Chai, Because it has several interfaces that allow the developer to choose the most comfortable.

#### Interfaces

The functions `describe(), it()` are Mocha's BDD "interface" system.

Mocha's "interface" system allows developers to choose thier style of DSL. Mocha has BDD, TDD, Exports, QUnit and Require-style interfaces.

##### BDD

The BDD is shorted for Behavior Driven Development(BDD), So we can call Mocha is a BDD supprotable Testing Frameworks.

The BDD interface provides `describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().`

`context() is just an alias for describe(), and behaves the same way; it just provides a way to keep tests easier to read and organized. Similarly, sepcify() is an alias for it().`

```javascript
describe('Array', function() {
    before(function() {
      // ...
    });

    describe('#indexOf()', function() {
      context('when not present', function() {
        it('should not throw an error', function() {
          (function() {
            [1,2,3].indexOf(4);
          }).should.not.throw();
        });
        it('should return -1', function() {
          [1,2,3].indexOf(4).should.equal(-1);
        });
      });
      context('when present', function() {
        it('should return the index where the element first appears in the array', function() {
          [1,2,3].indexOf(3).should.equal(2);
        });
      });
    });
});
```
