# Unit Testing with Jest

- [Unit Testing with Jest](#unit-testing-with-jest)
  - [Installation](#installation)
  - [Guide](#guide)
  - [Resource(s)](#resources)

## Installation

`npm init -y` - initialize npm package.json (`-y` = `--yes`)

`npm i -D jest` - install jest as a developer package

Edit the `"test"` value in the `package.json` under `"scripts"`:

```json
...
"scripts": {
    "test":"jest --coverage"
},
...
```

- Check if jest installation works and run jest with `npm test`.

## Guide

To create a new test, make a new file with the same name as your js file, but add `.test` before the `.js` with: `touch functions.test.js`.

Now you need to import the script so edit `functions.test.js` and add:

```js
const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
```

And edit `functions.js` to:

```js
const functions = {
    add: (num1, num2) => num1 + num2
};

module.exports = functions;
```

## Resource(s)

[Web Dev Simplified](https://youtu.be/FgnxcUQ5vho)
