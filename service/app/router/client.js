module.exports = app => {
    const {
        router,
        controller
    } = app
    router.get('/client/index', controller.client.home.index)
    router.get('/client/get_list', controller.client.home.getList)
    router.get('/client/get_types', controller.client.home.getTypes)
    router.get('/client/get_detail/:id', controller.client.home.getDetail)
    router.get('/client/get_list/:id', controller.client.home.getListById)
}