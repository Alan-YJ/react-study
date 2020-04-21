'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller{
    async getArticleList(){
        const sql = ``

    }
    async getTypeList(){
        const sql = `select * from type`
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {data:result}
    }
    async getArticleById(){
        const id = this.ctx.params.id
        const sql = `select * from article`
    }
    async checkLogin(){
        const username = this.ctx.request.body.username
        const password = this.ctx.request.body.password
        const sql = `select * from users where username = '${username}' and password = '${password}'`
        const result = await this.app.mysql.query(sql)
        if(result.length>0){
            let openId = new Date().getTime()
            this.ctx.session.openId = {'openId':openId}
            this.ctx.body = {
                status:'success',
                msg:'登录成功',
                openId:openId
            }
        }else{
            this.ctx.body = {
                status:'fail',
                msg:'登录失败'
            }
        }
    }
}

module.exports = HomeController