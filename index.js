// Classes
import { Writable } from 'stream';
class CustomStream extends Writable {
    constructor() {
        super();
    }
    _write(chunk, e, cb) {
        console.log('chunk:', chunk.toString());
        cb();
    }
}

var stream = new CustomStream();
stream.write('test');
stream.end();

// Arrow function
var nums = [4, 5, 6].map(num => num + 1);
console.log(nums);

// Template string
var name = 'John';
var template = `hello ${name}`;
console.log(template);