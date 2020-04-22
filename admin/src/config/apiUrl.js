const baseAdminUrl = 'http://localhost:7001/admin/'

const adminPaths = {
    getTypes: `${baseAdminUrl}get_types`,
    checkLogin: `${baseAdminUrl}check_login`,
    addArticle: `${baseAdminUrl}add_article`,
    saveArticle: `${baseAdminUrl}save_article`,
    addView: `${baseAdminUrl}add_view`,
    loadList: `${baseAdminUrl}load_list`
}

export default adminPaths