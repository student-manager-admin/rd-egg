'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    const studentList = require('../public/list.json');
    ctx.body = studentList;
  }
}

module.exports = HomeController;
