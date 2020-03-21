import axios from 'axios'
import { Modal } from 'antd'

export const getLsit = ()=>{
    return axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
        return Promise.resolve(res.data)
    }).catch(err=>{
        Modal.error({
            title:'请求列表错误'
        })
        return Promise.reject(err)
    })
}