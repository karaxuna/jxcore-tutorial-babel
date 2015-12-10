### Running JXcore with ECMAScript 6 features using babel 6

ECMAScript 6 (2015) is the newest version of the ECMAScript standard. ES6 brings classes, arrow functions, default parameters, generators and other [cool features](http://es6-features.org/). JXcore already has Mozilla SpiderMonkey (for ES6 support) natively. However, you could also use [Babel](https://github.com/babel/babel) for even more. For example, you could use ES6 features with JXcore-V8-3-14.

Steps to use Babel is pretty straight forward. Assuming you already have JXcore installed from [downloads page](http://jxcore.com/downloads), the next step is to install babel cli module globally:

```bash
$ jx install babel-cli -g
```

This tutorial is using babel v6.x which does not include transformations by default like previous versions did. You need to explicitly tell it what transformations to run. The simplest way to do this is by using a preset, such as the ES2015 Preset:

```bash
$ jx install babel-preset-es2015
```

Then create .babelrc configuration file:

```javascript
{
	"presets": ["es2015"]
}
```

Let’s see some of the new ES6 goodies. See below sample for creating custom stream using class inheritance and import feature:

```javascript
import { Writable } from 'stream';
class CustomStream extends Writable {
    constructor() {
        super();
    }
    _write(chunk, e, cb) {
        console.log('chunk:', chunk.toString()); // test
        cb();
    }
}

var stream = new CustomStream();
stream.write('test');
stream.end();
```

Arrow function example:

```javascript
var nums = [4, 5, 6].map(num => num + 1);
console.log(nums); // [5, 6, 7]
```

Template string example:

```javascript
var name = 'John';
var template = `Hello ${name}`;
console.log(template); // Hello John
```

You can save this code into e.g. index.js file, and then run with JXcore:

```bash
$ babel-node index.js
```

How do we know, that JXcore executed this code? Simply because babel was installed with jx install command.

Alternatively you may also install babel locally and run the sample by calling JXcore explicitly:

```bash
$ jx install babel-cli
$ jx ./node_modules/.bin/babel-node index.js
```

That's it. See [babeljs page](https://babeljs.io/docs/learn-es2015/) to explore all the latest features.
