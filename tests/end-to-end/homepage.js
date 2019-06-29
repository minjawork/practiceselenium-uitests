import WelcomePage from '../page-object/welcome.page';

describe('Home page tests', function() {

    it('01 Home page - welcome sidebar', function() {

        browser.url('./');
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.equal(WelcomePage.homePageUrl);

         WelcomePage.welcome.isDisplayed();
         WelcomePage.passion.isDisplayed();
         WelcomePage.menuSideBar.isDisplayed();
         WelcomePage.letsTalkTea.isDisplayed();
         WelcomePage.checkOut.isDisplayed();
    });
});
