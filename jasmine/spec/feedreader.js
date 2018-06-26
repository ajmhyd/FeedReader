/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined and not empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined and not empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    /* The Menu test suite*/
    describe('The Menu', () => {
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', () => {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. Two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when the icon is clicked', () => {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* Initial Entries test suite */
    describe('Initial Entries', () => {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach((done) => {
            loadFeed(0, done);
        });

        it('has at least a single entry within the feed container', (done) => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    /* New Feed Selection test suite */
    describe('New Feed Selection', () => {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let oldURL = '';

        beforeEach((done) => {
            oldURL = $('.feed').html();
            loadFeed(1, done);
        });

        it('content actually changes', (done) => {
            let newURL = $('.feed').html();
            expect(newURL).not.toBe(oldURL);
            done();
        });
    });
}());