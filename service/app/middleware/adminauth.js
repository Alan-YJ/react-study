module.exports = options=>{
    return async function adminauth(ctx,next){
        console.info(ctx.session.optionId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body = {msg:"还未登录",type:'no-login'}
        }
    }
}