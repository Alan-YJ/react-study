module.exports = app=>{
    const { router, controller } = app
    router.get(`/admin/get_types`,controller.admin.home.getTypeList)
    router.post('/admin/check_login',controller.admin.home.checkLogin)
}