const { Controller } = require('egg');

class AppController extends Controller {
  async getJdHomeView() {
    await this.ctx.render('app/app.js', {});
  }
}

module.exports = AppController;
