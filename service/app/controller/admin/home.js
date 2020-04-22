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
    async addArticle(){
        if(this.ctx.request.body.id==0){
            delete this.ctx.request.body.id
        }
        const item = this.ctx.request.body
        // const sql = `insert into article values(${item.type_id},'${item.title}','${item.content}','${item.introduce}',${item.create_at},0)`
        const result  = await this.app.mysql.insert('article',item)
        if(result.affectedRows===1){
            this.ctx.body={
                status:"success",
                msg:"添加成功",
                id:result.insertId
            }
        }else{
            this.ctx.body={
                status:'fail',
                msg:"添加失败"
            }
        }
    }
}

module.exports = HomeController