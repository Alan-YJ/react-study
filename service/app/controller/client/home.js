'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index(){
        const result = await this.app.mysql.get('article',{})
        const { ctx } = this
        ctx.body = result
    }
    async getList(){
        let sql = `select article.id as id,article.title as title,article.introduce as introduce,article.content as content,article.view_count as view_count,type.typeName as typeName,FROM_UNIXTIME(article.create_at,'%Y-%m-%d %H:%i:%s') as create_at from article left join type on article.type_id = type.id`
        const result = await  this.app.mysql.query(sql)
        this.ctx.body = result
    }
    async getDetail(){
        const id = this.ctx.params.id
        const sql = `select article.id as id,article.title as title,article.content as content,type.typeName as typeName,article.introduce as introduce,FROM_UNIXTIME(article.create_at,'%Y-%m-%d %H:%i:%s') as create_at,article.view_count as view_count from article left join type on type.id=article.type_id where article.id = ${id}`
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {data:result}
    }
    async getTypes(){
        const sql = 'select * from type'
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {data:result}
    }
}
 
module.exports = HomeController

