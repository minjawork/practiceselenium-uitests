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

         WelcomePage.passion.click();
         expect(browser.getUrl()).to.equal(WelcomePage.ourPassionUrl);
         browser.back();

         WelcomePage.menuSideBar.click();
         expect(browser.getUrl()).to.equal(WelcomePage.menuUrl);
         browser.back();

         WelcomePage.letsTalkTea.click();
         expect(browser.getUrl()).to.equal(WelcomePage.letsTalkUrl);
         browser.back();

         WelcomePage.checkOut.click();
         expect(browser.getUrl()).to.equal(WelcomePage.checkOutUrl);
         browser.back();
    });

    it("Home page - Tea Collections", function(){

          WelcomePage.herbalTeaButton.click();
          expect(browser.getUrl()).to.equal(WelcomePage.menuUrl);
          browser.back();

          WelcomePage.looseTeaButton.click();
          expect(browser.getUrl()).to.equal(WelcomePage.menuUrl);
          browser.back();

          WelcomePage.flavoredButton.click();
          expect(browser.getUrl()).to.equal(WelcomePage.menuUrl);
          browser.back();
    });

    it.only("Menu option - Check Out buttons", function(){
          
          WelcomePage.menuSideBar.click();
          WelcomePage.buttonCheckOutFirst.click();
          expect(browser.getUrl()).to.equal(WelcomePage.checkOutUrl);
          browser.back();

          WelcomePage.menuSideBar.click();
          WelcomePage.buttonCheckOutSecond.click();
          expect(browser.getUrl()).to.equal(WelcomePage.checkOutUrl);
          browser.back();
    })
});
