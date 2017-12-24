
module.exports = app => {
  app.get('/jd', app.controller.app.app.getJdHomeView);
};
