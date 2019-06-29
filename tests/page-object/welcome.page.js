class WelcomePage {

  get welcome() { return $('.active'); }
  get passion () { return $('[data-pageid="00000000-0000-0000-0000-000000247425"]'); }
  get menuSideBar() { return $('[data-pageid="00000000-0000-0000-0000-000009816342"]'); }
  get letsTalkTea() { return $('[href="let-s-talk-tea.html"]'); }
  get checkOut() { return $('[href="check-out.html"]'); }
  get homePageUrl () {
    const currentUrl = ("http://www.practiceselenium.com/");
    return currentUrl;
  };
}

export default new WelcomePage();
