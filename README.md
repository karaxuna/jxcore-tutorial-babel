### Running JXcore with ECMAScript 6 features using babel

ECMAScript 6 is the newest version of the ECMAScript standard. es6 brings classes, arrow functions, default parameters, generators and [much more](https://babeljs.io/docs/learn-es2015/). You can bring all this functionality in JXcore using babel, follow simple steps:

Assuming you already have installed JXcore from [downloads page](http://jxcore.com/downloads), the next step is to install babel module globally:

```cmd
jx install babel -g
```

Let's see some of new features of es6. Create custom stream using class inheritance and import feature:

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

Then run this file with JXcore:

```cmd
babel-node index.js
```

That's it, you have JXcore code running with full es6 support. See [babeljs page](https://babeljs.io/docs/learn-es2015/) to explore all features.
