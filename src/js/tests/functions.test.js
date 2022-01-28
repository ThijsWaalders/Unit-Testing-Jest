// import the functions function (from the functions.js file?
// or is this global after the export?)
const functions = require('../functions');

const nameCheck = () => console.log('Checking Name...');
describe('Checking Names', () => {
	beforeEach(() => nameCheck());
	test('User is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});
	test('User is Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	});
});

// toBe
test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Brad',
		lastName: 'Traversy',
	});
});

// toBeLessThan
test('Should be under 16', () => {
	const load1 = 8;
	const load2 = 7;
	expect(load1 + load2).toBeLessThan(16);
});

// toBeLessThanOrEqual
test('Should be under or equal 1500', () => {
	const load1 = 800;
	const load2 = 300;
	expect(load1 + load2).toBeLessThanOrEqual(1500);
});

// toBeGreaterThan
test('Should be above 900', () => {
	const load1 = 800;
	const load2 = 900;
	expect(load1 + load2).toBeGreaterThan(900);
});

// toBeGreaterThanOrEqual
test('Should be above or equal to 200', () => {
	const load1 = 100;
	const load2 = 100;
	expect(load1 + load2).toBeGreaterThanOrEqual(200);
});

// Regular Expressions / Regex - toMatch
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});
// Notice the capital and non capital letters, this will check for both.
// The /I/ part is the regular expression that looks for the capital
// letter I and the i after it checks for the non-capital letter i

// Arrays - toContain
test('Admin should be in userNames', () => {
	const userNames = ['john', 'karen', 'admin'];
	expect(userNames).toContain('admin');
});

// Working witch Async Data - Promise and Async Await
// Promise
test('User fetched name should be Leanne Graham using Promise', () => {
	expect.assertions(1);
	return functions.fetchUser().then(data => {
		expect(data.name).toEqual('Leanne Graham');
	});
});
// When you're working with async data, be aware that if you don't
// use use assertions AND don't use the return, it will still pass
// if the name is not equal.
// So be sure that you have both of these when you're using async functions!
//
// We can refactor this as a async await function like this:
// Async Await
test('User fetched name should be Leanne Graham using Async Await', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});

//
//
//

// CHECK DATATYPEOF toBe
test('typeOf should be json file', () => {
	const url = 'json';
	expect(functions.checkValue(url)).toEqual('json');
});

// check for the data type off: https://stackoverflow.com/questions/62564800/how-to-assert-data-type-with-jest

// CHECK FOR TRUTHY & FALSY VALUES
// toBeUndefined  matches only undefined
// toBeDefined    the opposite of toBeUndefined
// toBeTruthy     matches anything that an if statement treats as true
// toBeFalsy      matches anything that an if statement treats as false
