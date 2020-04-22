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
        const id = this.ctx.query.id
        const sql = `select * from article where id = ${id}`
        const result = await this.app.mysql.query(sql)
        if(result.length>0){
            this.ctx.body = {
                status:'success',
                data:result[0]
            }
        }else{
            this.ctx.body ={
                status:'fail',
                msg:'找不到数据'
            }
        }
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
    async saveArticle(){
        const item = this.ctx.request.body
        const sql = `update article set type_id=${item.type_id},title='${item.title}',content='${item.content}',introduce='${item.introduce}',create_at=${item.create_at} where id = ${item.id}`
        const result = await this.app.mysql.query(sql)
        if(result.affectedRows==1){
            this.ctx.body = {
                status:'success',
                msg:'保存成功'
            }
        }else{
            this.ctx.body={
                status:'fail',
                msg:'保存失败',
                sql:sql
            }
        }
    }
    async addView(){
        const id = this.ctx.request.body.id
        const sql = `update set article view_count = view_count+1 where id=${id}`
        const result = await this.app.mysql.query(sql)
        if(result.affectedRows==1){
            this.ctx.body = {
                status:'success',
                msg:'保存成功'
            }
        }else{
            this.ctx.body={
                status:'fail',
                msg:'保存失败',
                sql:sql
            }
        }
    }
    async loadArticleList(){
        const filter = this.ctx.query
        let sql = `select * from article`
        let where = ` where`
        if(filter.type_id){
            where += ` type_id=${filter.type_id}`
        }
        if(filter.title){
            where += ` ${where.length>10?'and':''} title like '%${filter.title}%'`
        }
        if(filter.start_at){
            where += ` ${where.length>10?"and":""} create_at between ${filter.start_at} and ${filter.end_at}`
        }
        if(where.length>10){
            sql += where 
        }
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            status:'success',
            data:result,
            sql:sql,
            filter:filter
        }
    }
    async deleteArticle(){
        const id = this.ctx.request.query.id
        const sql = `delete from article where id = ${id}`
        const result = await this.app.mysql.query(sql)
        if(result.affectedRows>0){
            this.ctx.body={
                msg:"删除成功",
                status:'success'
            }
        }else{
            this.ctx.body={
                msg:'删除失败',
                sql:sql,
                status:'fail'
            }
        }
    }
}

module.exports = HomeController