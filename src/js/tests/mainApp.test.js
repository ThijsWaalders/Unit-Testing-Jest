// import mainApp.js
const mainApp = require('../mainApp');

describe('The main app', () => {
	let app;
	beforeEach(() => {
		app = shallow();
	});

	it('the app should have text', () => {
		expect(app.text()).toBe(DEFAULT_TEXT);
	});
	it('should change text on click', () => {
		app.simulate('click');
		expect(app.text()).toBe(CLICKED_TEXT);
		app.simulate('click');
		expect(app.text()).toBe(DEFAULT_TEXT);
	});
});
