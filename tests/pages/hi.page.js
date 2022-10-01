const Page = require('./page');

class HiPage extends Page {
  get toggle() {
    return $('#toggle');
  }

  get title() {
    return $('#title');
  }

  get input() {
    return $('#search');
  }

  async toggleTitle(text) {
    await this.input.setValue(text);
    await this.toggle.click();
  }

  open() {
    return super.open('/hi');
  }
}

module.exports = new HiPage();
