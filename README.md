# Unit Testing with Jest

-   [Unit Testing with Jest](#unit-testing-with-jest)
    -   [TDD](#tdd)
    -   [Installation](#installation)
        -   [NPM initialize](#npm-initialize)
        -   [Installing Jest as a Developer Dependency](#installing-jest-as-a-developer-dependency)
        -   [Let Jest Use Coverage](#let-jest-use-coverage)
        -   [Generate a Basic Configuration File](#generate-a-basic-configuration-file)
        -   [Intellisense](#intellisense)
        -   [Check if Jest Works or Not](#check-if-jest-works-or-not)
    -   [Guide](#guide)
        -   [Guide - Add Globals](#guide---add-globals)
        -   [Guide - Adding Modules / Edit Jest Config File](#guide---adding-modules--edit-jest-config-file)
        -   [Guide - Mock any Function / API](#guide---mock-any-function--api)
    -   [Example Test Functions](#example-test-functions)
    -   [Resource(s)](#resources)

## TDD

TDD stands for Test Driven Development and means that you write your tests first, before you start writing any code. This can improve your productivity because you won't need to spend as much time as 'normal on debugging. Before you write any code you'll know if the code that you are going to write will work or not and it helps with documenting what you/someone else need(s) to do / what is going on.

A common way to write tests and then code is the Red-Green-Refactor cycle, which means that you write your test first. These will fail as there is no working code yet. Then you try to get your tests green/pass by writing the code and when your test passes, you can refactor your code.

Check out [this video](https://youtu.be/Jv2uxzhPFl4) to learn more about TDD.

## Installation

### NPM initialize

`npm init` (`-y`) - Initialize npm package.json (`-y` = `--yes` for all questions)

### Installing Jest as a Developer Dependency

`npm i -D jest` - Install jest as a developer package (i = install and -D = --save-dev = save as developer dependency)

### Let Jest Use Coverage

Edit the `"test"` value in the `package.json` under `"scripts"`:

```json
...
"scripts": {
    "test":"jest --coverage --watchAll --verbose"
},
...
```

-   **Coverage** - Creates a html documentation for your test suite
-   **WatchAll** - Restarts testing after save automatically
-   **Verbose** - Will give you more information in the terminal

This way you get more information when testing, and it will give you a nice html page to document your tests.

### Generate a Basic Configuration File

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

`jest --init`

### Intellisense

First install the types for jest & intellisense: `npm install @types/jest -D`.
Create a new (or edit already existing) `jsconfig.json` and add the following code to get Intellisense working with Jest.

```json
{
    "typeAcquisition": {
        "include": ["jest"]
    }
}
```

Now you should get autocompletion for Jest in VScode.

### Check if Jest Works or Not

-   Check if jest installation works and run jest with `npm test`.

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
    add: (num1, num2) => num1 + num2,
};

module.exports = functions;
```

### Guide - Add Globals

After running `jest --init` in your folder, in the `jest.config.js` file Jest makes, scroll down to find:

```js
// A set of global variables that need to be available in all test environments
// globals: {},
```

Uncomment the second line and put all your globals in there.

Example to use google api: `globals: {"google":{}},`.

See [jestjs.io/docs](https://jestjs.io/docs/configuration#globals-object) for more information about globals-object.

### Guide - Adding Modules / Edit Jest Config File

Since Jest 27+, node is now the default `testEnvironment`. If you need to use `jQuery` in jest setup script, make sure to first change the `testEnvironment` back to `jsdom`.

By answering the question when using `jest --init` or edit the `jest.config.js` file if there already is one in your project root dir:

```js
module.exports = {
    // setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
};
```

Note, you can also use a `jest.setup.js` file, but you'll need to uncomment the `// setupFilesAfterEnv: ['./jest.setup.js'],` line.

Then import the module (here it's jquery) at the beginning of your `*.test.js` file (or use the `jest.setup.js` file):

```js
const $ = require('jquery');
```

### Guide - Mock any Function / API

[3-Step Guide to MOck an API Call in Jest](https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb)

[How to mock functions globally.](https://medium.com/@arivu_a/how-to-mock-functions-globally-in-jest-f267fedf7683)

## Example Test Functions

For the API call we need to install axios (or fetch): `npm i axios` which is an http client just like fetch but a little easier.\

Then create the `fetchUser` function in the `functions.js` file and make a get request to a [JSONPlaceholder API](https://jsonplaceholder.typicode.com). This is a Fake Online REST API for Testing and Prototyping. I'm using the VScode extension Auto Import, this will automatically import the required axios package at the top of the `functions.js` file.

## Resource(s)

[Jest - Getting started](https://jestjs.io/docs/getting-started)

[Fireship - Test-Driven Development // Fun TDD Introduction with JavaScript](https://youtu.be/Jv2uxzhPFl4)

[Web Dev Simplified](https://youtu.be/FgnxcUQ5vho)

[devhints.io/jest](https://devhints.io/jest)

[devhints.io/jsdoc](https://devhints.io/jsdoc)
