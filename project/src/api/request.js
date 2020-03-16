import axios from 'axios'

export const getList = ()=>{
    return axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
        return Promise.resolve(res.data)
    }).catch(err=>{
        return Promise.reject()
    })
}