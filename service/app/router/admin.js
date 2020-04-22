module.exports = app=>{
    const { router, controller } = app
    var adminauth = app.middleware.adminauth()
    router.get(`/admin/get_types`,adminauth ,controller.admin.home.getTypeList)
    router.post('/admin/check_login',controller.admin.home.checkLogin)
    router.post('/admin/add_article',adminauth,controller.admin.home.addArticle)
    router.put('/admin/save_article',adminauth,controller.admin.home.saveArticle)
    router.post('/admin/addView',adminauth,controller.admin.home.addView)
    router.get(`/admin/load_list`,adminauth,controller.admin.home.loadArticleList)
}