const HiPage = require('../pages/hi.page');

describe('Some hi page', () => {
  it('should toggle the title', async () => {
    await HiPage.open();
    await HiPage.toggleTitle('hi');
    await expect(HiPage.title).toBeExisting();
    await HiPage.toggle.click();
    await expect(HiPage.title).not.toBeExisting();
  });

  it('should not toggle the title', async () => {
    await HiPage.open();
    await HiPage.toggleTitle('nothi');
    await expect(HiPage.title).not.toBeExisting();
  });
});
