'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index',{
        page_title : "标题",
        page_content : "模板引擎所渲染的页面"
    });
  }
}

module.exports = HomeController;