/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL', function(){
            for (var obj of allFeeds) {
                expect(obj.url).toBeDefined();
                expect(obj.url.length).not.toBe(0);
            }
        })


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have name', function(){
            for (var obj of allFeeds) {
                expect(obj.name).toBeDefined();
                expect(obj.name.length).not.toBe(0);
            }
        })

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        var bodyElement = document.getElementsByTagName('body')[0];
        var menuIconElement = document.getElementsByClassName('menu-icon-link')[0];

        it('is hidden by default', function() {
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when icon is clicked', function(){
            menuIconElement.click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(false);
            menuIconElement.click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    
    describe('Initial Entries', function() {

        // handle game's DOM element
        var feedElement = document.getElementsByClassName('feed')[0];

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        })

        it('are loaded', function(done){
            // check if the number of entries is different than 0
            expect(feedElement.getElementsByClassName('entry').length).not.toBe(0);
            done()
        })

    });


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {

        var initialFeedContent;
        var finalFeedContent;

        beforeEach(function(done){
            // Make an initial feed load for category ID #0
            loadFeed(0, function(){
                // Store the displayed content
                initialFeedContent = document.getElementsByClassName('feed')[0].textContent;
                // Make a subsequent feed load for category ID #1
                loadFeed(1, function(){
                    // Store the displayed content
                    finalFeedContent = document.getElementsByClassName('feed')[0].textContent;
                    done();
                });
            });
        })

        it('changes content', function(done){

            // compare the content from loads of different categories, expecting it to be different
            expect(finalFeedContent===initialFeedContent).not.toBe(true);
            done()
        })


    });

}());