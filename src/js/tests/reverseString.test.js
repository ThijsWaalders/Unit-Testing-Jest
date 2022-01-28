// import reverseString
const reverseString = require('../reverseString');

// Check if function is defined
test('Is reverseString function defined', () => {
	expect(reverseString).toBeDefined();
});

// Check if string gets reversed
test('String reverses', () => {
	expect(reverseString('hello')).toEqual('olleh');
});

// Check if string gets reversed with uppercase
test('String reverses with uppercase', () => {
	expect(reverseString('Hello')).toEqual('olleh');
});
