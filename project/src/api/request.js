import axios from 'axios'

export const getList = () =>{
    return axios.get(`http://118.24.71.249:7777/banner`).then(res=>{
        return Promise.resolve(res.data)
    }).catch(err=>{
        return Promise.reject(err)
    })
}