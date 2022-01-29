// feedreader.js
// Test with external npm packages like jQuery and google api
//
// Add app.js script to this test file
const allFeeds = require('../feedReader');

$(
	(function () {
		describe('RSS Feeds', function () {
			/**
			 * @description This tests makes sure that the
			 * allFeeds variable has been defined and that it is not
			 * empty.
			 */
			it('are defined', function () {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});
			/**
			 * @description Loops through each feed
			 * in the allFeeds object and ensures it has a URL defined
			 * and that the URL is not empty.
			 */
			it('has a URL', function () {
				allFeeds.forEach(function (feed) {
					let feedUrlLength = feed.url.length;
					expect(feed.url).toBeDefined();
					expect(feedUrlLength).not.toBe(0);
				});
			});
			/**
			 * @description A test that loops through each feed
			 * in the allFeeds object and ensures it has a name defined
			 * and that the name is not empty.
			 */
			it('has a name', function () {
				allFeeds.forEach(function (feed) {
					let feedNameLength = feed.name.length;
					expect(feed.name).toBeDefined();
					expect(feedNameLength).not.toBe(0);
				});
			});
		});
		// New test suite named "menu"
		describe('The menu', function () {
			/**
			 * A test that ensures the menu element is
			 * hidden by default.
			 */
			it('is hidden by default', function () {
				expect($('body').hasClass('menu-hidden')).toBe(true);
			});
			/** A test that ensures the menu changes
			 * visibility when the menu icon is clicked. This test
			 * should have two expectations: does the menu display when
			 * clicked and does it hide when clicked again.
			 */
			it('changes the visibility', function () {
				$('.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBe(false);
				$('.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBe(true);
			});
			// New test suite named "Initial Entries"
			describe('Initial entries', function () {
				/** @description A test that ensures when the loadFeed
				 * function is called and completes its work, there is at least
				 * a single .entry element within the .feed container.
				 * loadFeed() is asynchronous (so this test will require
				 * the use of Jasmine's beforeEach and asynchronous done() function).
				 * @param {boolean} done - used to check if entries are loaded
				 * @async
				 * @function loadFeed
				 */
				beforeEach(function (done) {
					loadFeed(0, done);
				});
				it('there is at least a single .entry element within the .feed container', function () {
					expect($('.feed .entry').length).toBeGreaterThan(0);
				});
			});
			//  New test suite named "New Feed Selection"
			describe('New feed selection', function () {
				// create variables for the feeds
				let firstFeed;
				let secondFeed;
				/** @description A test that ensures when a new feed is loaded
				 * by the loadFeed function that the content actually changes.
				 * @param {boolean} done - used to check if entries are loaded
				 * @async
				 * @function loadFeed
				 */
				// when new feed is loaded
				beforeEach(function (done) {
					loadFeed(0, function () {
						firstFeed = $('.feed').html();
						loadFeed(1, function () {
							secondFeed = $('.feed').html();
							done();
						});
					});
				});
				// check if both of the feeds are the same or not
				it('New feed loaded', function (done) {
					expect(firstFeed).not.toEqual(secondFeed);
					done();
				});
			});
		});
	})()
);
