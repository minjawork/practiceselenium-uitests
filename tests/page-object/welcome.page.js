class WelcomePage {

  get welcome() { return $('.active'); }
  get passion () { return $('[data-pageid="00000000-0000-0000-0000-000000247425"]'); }
  get menuSideBar() { return $('[data-pageid="00000000-0000-0000-0000-000009816342"]'); }
  get letsTalkTea() { return $('[href="let-s-talk-tea.html"]'); }
  get checkOut() { return $('[href="check-out.html"]'); }
  get herbalTeaButton() { return $('#wsb-button-00000000-0000-0000-0000-000450914890'); }
  get looseTeaButton() { return $('#wsb-button-00000000-0000-0000-0000-000450914897'); }
  get flavoredButton() { return $('#wsb-button-00000000-0000-0000-0000-000450914899');}
  get buttonCheckOutFirst() { return $('#wsb-button-00000000-0000-0000-0000-000451955160');}
  get buttonCheckOutSecond() { return $('#wsb-button-00000000-0000-0000-0000-000451959280')}
  get homePageUrl () {
    const currentUrl = ("http://www.practiceselenium.com/");
    return currentUrl;
  };
  get ourPassionUrl() {
    const currentUrl = ("http://www.practiceselenium.com/our-passion.html");
    return currentUrl;
  }
  get menuUrl() {
    const currentUrl = ("http://www.practiceselenium.com/menu.html");
    return currentUrl;
  }
  get letsTalkUrl() {
    const currentUrl = "http://www.practiceselenium.com/let-s-talk-tea.html";
    return currentUrl;
  }
  get checkOutUrl() {
    const currentUrl = "http://www.practiceselenium.com/check-out.html";
    return currentUrl;
  }
}

export default new WelcomePage();
