# defaults-clone

> Deep defaults based on [defaults-deep](https://github.com/jonschlinkert/defaults-deep) with cloned arguments using [clone-deep](https://github.com/jonschlinkert/clone-deep).

> for node.js and the browser with browserify.


# install

```bash
npm install --save defaults-clone
```

# use
```js
var defaults = require('defaults-clone');

defaults({a: {one: 'one'}}, {a: {two: 'two'}})
//=> {a: {one: 'one', two: 'two'}};

```

# test
```bash
npm test

```

# license

MIT with code from [defaults-deep](https://github.com/jonschlinkert/defaults-deep) wit  [MIT](https://github.com/jonschlinkert/defaults-deep/blob/master/LICENSE) License
