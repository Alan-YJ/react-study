
module.exports = app=>{
    const { router,controller } = app
    router.get('/client/index',controller.client.home.index)
    router.get('/client/getlist',controller.client.home.getList)
    router.get('/client/getdetail/:id',controller.client.home.getDetail)
}